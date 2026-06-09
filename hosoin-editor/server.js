'use strict';

const express = require('express');
const https   = require('https');
const http    = require('http');
const cheerio = require('cheerio');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// 로컬: public/ 정적 서빙. Vercel: public/** 는 CDN에서 별도 제공(Express의 static은 무시됨).
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir, {
    index: 'index.html',
    extensions: ['html'],
}));

// ─── 헬퍼: URL에서 HTTP/HTTPS 응답 가져오기 (리다이렉트 최대 3회 추적) ───────
function fetchUrl(rawUrl, options, redirectCount) {
    redirectCount = redirectCount || 0;
    return new Promise((resolve, reject) => {
        if (redirectCount > 3) return reject(new Error('너무 많은 리다이렉트'));
        let parsed;
        try { parsed = new URL(rawUrl); } catch(e) { return reject(new Error('잘못된 URL')); }

        const driver = parsed.protocol === 'https:' ? https : http;
        const reqOpts = Object.assign({
            hostname: parsed.hostname,
            port:     parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
            path:     parsed.pathname + parsed.search,
            method:   'GET',
            headers: {
                'User-Agent':      'Mozilla/5.0 (compatible; BookCoverBot/1.0)',
                'Accept':          options && options.acceptBinary
                                   ? '*/*'
                                   : 'text/html,application/xhtml+xml,*/*',
                'Accept-Language': 'ko-KR,ko;q=0.9',
                'Accept-Encoding': 'identity',
            },
            timeout: 12000,
        }, options && options.reqOpts ? options.reqOpts : {});

        const req = driver.request(reqOpts, (res) => {
            // 리다이렉트 처리
            if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
                const next = res.headers.location.startsWith('http')
                    ? res.headers.location
                    : new URL(res.headers.location, rawUrl).href;
                res.resume();
                return resolve(fetchUrl(next, options, redirectCount + 1));
            }
            if (res.statusCode < 200 || res.statusCode >= 400) {
                res.resume();
                return reject(new Error(`HTTP ${res.statusCode}`));
            }

            const chunks = [];
            res.on('data', c => chunks.push(c));
            res.on('end', () => resolve({
                body:        Buffer.concat(chunks),
                contentType: res.headers['content-type'] || '',
                statusCode:  res.statusCode,
            }));
        });

        req.on('timeout', () => { req.destroy(); reject(new Error('요청 시간 초과')); });
        req.on('error',   reject);
        req.end();
    });
}

// ─── API: 책 표지 메타 정보 추출 ─────────────────────────────────────────────
// GET /api/bookcover?url=<도서 URL — 단축 URL 포함>
// 응답: { imageUrl, title }
app.get('/api/bookcover', async (req, res) => {
    const targetUrl = (req.query.url || '').trim();

    if (!targetUrl) {
        return res.status(400).json({ error: 'url 파라미터가 필요합니다.' });
    }
    // URL 형식만 검증 (단축 URL, naver.me 등 허용)
    try { new URL(targetUrl); } catch(e) {
        return res.status(400).json({ error: '올바른 URL 형식이 아닙니다.' });
    }

    try {
        // 리다이렉트를 따라가 최종 페이지 HTML 수신
        const { body } = await fetchUrl(targetUrl);
        const html = body.toString('utf-8');
        const $    = cheerio.load(html);

        const imageUrl = $('meta[property="og:image"]').attr('content') || '';
        const rawTitle = $('meta[property="og:title"]').attr('content') || '알라딘 도서';
        const title    = rawTitle.replace(/\s*[-–—]\s*알라딘.*$/i, '').trim();

        if (!imageUrl) {
            return res.status(404).json({ error: '책 표지 이미지를 찾을 수 없습니다.\n알라딘 도서 상세 페이지 URL인지 확인해주세요.' });
        }

        // 프로토콜 상대 URL 보정
        const finalImageUrl = imageUrl.startsWith('//') ? 'https:' + imageUrl : imageUrl;
        return res.json({ imageUrl: finalImageUrl, title });

    } catch (err) {
        console.error('[/api/bookcover]', err.message);
        return res.status(500).json({ error: '페이지를 불러오는 중 오류가 발생했습니다: ' + err.message });
    }
});

// ─── API: 이미지 프록시 ───────────────────────────────────────────────────────
// GET /api/bookcover-image?url=<이미지 URL>
// 이미지를 그대로 스트리밍하여 브라우저 직접 다운로드 가능하게 함
app.get('/api/bookcover-image', async (req, res) => {
    const imageUrl = (req.query.url || '').trim();

    if (!imageUrl) {
        return res.status(400).send('url 파라미터가 필요합니다.');
    }
    // 허용 도메인: 알라딘 관련 도메인만 허용 (SSRF 방지)
    let parsed;
    try { parsed = new URL(imageUrl); } catch(e) {
        return res.status(400).send('잘못된 URL');
    }
    if (!parsed.hostname.endsWith('.aladin.co.kr') && parsed.hostname !== 'aladin.co.kr') {
        return res.status(403).send('허용되지 않은 이미지 도메인입니다.');
    }

    try {
        const result = await fetchUrl(imageUrl, { acceptBinary: true });
        const ct = result.contentType || 'image/jpeg';
        res.setHeader('Content-Type', ct.split(';')[0].trim());
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.setHeader('Content-Disposition', 'attachment');
        res.send(result.body);
    } catch (err) {
        console.error('[/api/bookcover-image]', err.message);
        res.status(500).send('이미지를 가져오는 중 오류: ' + err.message);
    }
});

// ─── 서버 시작 (로컬 전용; Vercel은 server 핸들러로 앱을 사용) ────────────────
if (process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`서버 실행 중: http://localhost:${PORT}`);
    });
}

module.exports = app;
