'use strict';

const express = require('express');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// 로컬: public/ 정적 서빙. Vercel: public/** 는 CDN에서 별도 제공(Express의 static은 무시됨).
const publicDir = path.join(__dirname, 'public');
app.use(express.static(publicDir, {
    index: 'index.html',
    extensions: ['html'],
}));



// ─── 서버 시작 (로컬 전용; Vercel은 server 핸들러로 앱을 사용) ────────────────
if (process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`서버 실행 중: http://localhost:${PORT}`);
    });
}

module.exports = app;
