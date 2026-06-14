#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const SITE_URL = 'https://siinseon.monster';
const BRAND = '팔로워 내놔';
const OG_IMAGE = `${SITE_URL}/og-image.svg`;
const LASTMOD = '2026-06-14';

const appDescription = '설치 없이, 결제 없이 바로 사용할 수 있는 웹 기반 이미지 편집 도구입니다. 인스타 피드 분할, 인스타 캐러셀 제작, 비율 변경, 이미지 자르기, 누끼 테두리 정리까지 브라우저에서 빠르게 처리하세요.';

const softwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: BRAND,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Web',
  url: SITE_URL,
  image: OG_IMAGE,
  description: appDescription,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
  featureList: [
    '인스타 피드 분할',
    '인스타 캐러셀 제작',
    '이미지 비율 변경',
    '이미지 자르기',
    '누끼 테두리 정리',
    '유튜브 썸네일 비율 변경',
    '쇼츠 이미지 리사이즈',
    '프로필 사진 크롭',
  ],
};

const landingPages = [
  {
    slug: 'instagram-grid-split',
    title: `인스타 피드 분할 무료 만들기 | ${BRAND}`,
    h1: '인스타 피드 분할 무료 만들기',
    description: '사진 한 장을 인스타그램용 3분할, 6분할, 9분할 이미지로 쉽게 변환하세요. 설치 없이 무료로 사용 가능합니다.',
    intro: '사진 한 장을 인스타그램 피드에 맞는 3분할, 6분할, 9분할 이미지로 빠르게 나눌 수 있습니다. 별도 프로그램을 설치하거나 결제할 필요 없이 브라우저에서 바로 이미지를 업로드하고 분할 결과를 저장하세요. 브랜드 피드, 이벤트 공지, 포트폴리오 이미지처럼 한 장의 이미지를 여러 칸으로 자연스럽게 보여줘야 할 때 사용할 수 있습니다. 원본 이미지는 서버에 저장되지 않으며, 작업 흐름은 기존 편집기로 바로 이어집니다.',
    cta: '인스타 피드 분할 시작하기',
    related: ['instagram-carousel-maker', 'image-resizer', 'crop-image'],
    faqs: [
      ['인스타 피드 분할은 몇 장까지 만들 수 있나요?', '사진 한 장을 인스타그램 피드 구성에 맞춰 여러 장으로 나누는 용도로 사용할 수 있습니다. 3분할, 6분할, 9분할처럼 피드에 자주 쓰이는 구성을 만들 때 적합합니다.'],
      ['설치가 필요한가요?', '아니요. 브라우저에서 바로 열어 사용할 수 있어 별도 프로그램 설치가 필요하지 않습니다.'],
      ['분할한 이미지는 어떻게 저장하나요?', '편집기에서 분할 결과를 확인한 뒤 각 이미지를 저장해 인스타그램에 순서대로 업로드하면 됩니다.'],
      ['업로드한 사진이 저장되나요?', '이미지 편집은 브라우저에서 처리되며 업로드 이미지를 서비스에 저장하지 않는 방식으로 설계되어 있습니다.'],
    ],
  },
  {
    slug: 'instagram-carousel-maker',
    title: `인스타 캐러셀 만들기 | ${BRAND}`,
    h1: '인스타 캐러셀 만들기',
    description: '인스타그램 캐러셀에 맞는 이미지 비율과 흐름을 브라우저에서 바로 준비하세요. 설치 없이 무료로 편집할 수 있습니다.',
    intro: '인스타그램 캐러셀 게시물에 맞는 이미지를 간편하게 준비할 수 있는 무료 온라인 편집 도구입니다. 여러 장의 이미지를 올리기 전 비율을 맞추고, 필요한 부분을 자르거나 분할해 콘텐츠 흐름을 정리하세요. 설치 과정이나 결제 없이 브라우저에서 바로 사용할 수 있어 급하게 게시물을 제작할 때도 부담이 적습니다. 썸네일, 피드 이미지, 슬라이드형 안내 콘텐츠를 만들 때 기존 편집기와 자연스럽게 연결됩니다.',
    cta: '인스타 캐러셀 편집 시작하기',
    related: ['instagram-grid-split', 'image-resizer', 'crop-image'],
    faqs: [
      ['캐러셀 이미지는 어떤 비율로 만들 수 있나요?', '정사각형, 세로형, 가로형 등 인스타그램에서 자주 쓰는 비율에 맞춰 이미지를 준비할 수 있습니다.'],
      ['여러 이미지를 한 번에 편집할 수 있나요?', '기능에 따라 이미지를 추가하고 순서대로 작업할 수 있습니다. 캐러셀 제작 전 비율과 자르기를 맞추는 데 유용합니다.'],
      ['모바일에서도 사용할 수 있나요?', '네. 모바일 브라우저에서도 설치 없이 접속해 이미지를 편집할 수 있습니다.'],
      ['광고 없이 사용할 수 있나요?', '서비스는 광고를 최소화한 편집 경험을 목표로 하며, 결제 없이 사용할 수 있습니다.'],
    ],
  },
  {
    slug: 'image-resizer',
    title: `이미지 비율 변경 무료 | ${BRAND}`,
    h1: '이미지 비율 변경 무료',
    description: '인스타그램, 유튜브, 쇼츠에 맞게 이미지 비율을 무료로 변경하세요. 브라우저에서 바로 편집하고 저장할 수 있습니다.',
    intro: '이미지 비율 변경은 플랫폼별 콘텐츠 제작에서 가장 자주 필요한 작업입니다. 팔로워 내놔에서는 인스타그램 정사각형, 세로 피드, 스토리와 쇼츠, 유튜브 썸네일 등 자주 쓰는 비율에 맞춰 이미지를 브라우저에서 바로 조정할 수 있습니다. 설치 없이 이미지를 올리고 확대, 이동, 배경색 선택을 거쳐 결과물을 저장하세요. 복잡한 디자인 툴을 열지 않아도 빠르게 게시용 이미지를 만들 수 있습니다.',
    cta: '이미지 비율 변경하기',
    related: ['crop-image', 'youtube-thumbnail-resizer', 'shorts-resizer'],
    faqs: [
      ['지원하는 이미지 비율은 무엇인가요?', '인스타그램 정사각형, 세로 피드, 스토리와 쇼츠, 유튜브 썸네일 등 콘텐츠 제작에 자주 쓰이는 비율을 지원합니다.'],
      ['이미지를 잘라내지 않고 비율만 맞출 수 있나요?', '배경을 더하거나 위치를 조정해 원본을 최대한 유지하면서 비율을 맞출 수 있습니다.'],
      ['결과물은 무료로 저장할 수 있나요?', '네. 편집한 이미지는 무료로 저장할 수 있습니다.'],
      ['PC와 모바일 모두 가능한가요?', '브라우저 기반 도구라 PC와 모바일에서 모두 사용할 수 있습니다.'],
    ],
  },
  {
    slug: 'crop-image',
    title: `사진 자르기 온라인 | ${BRAND}`,
    h1: '사진 자르기 온라인',
    description: '원하는 영역만 남기도록 사진을 온라인에서 간단히 자르세요. 설치 없이 무료로 이미지 크롭이 가능합니다.',
    intro: '온라인 사진 자르기 기능으로 필요한 영역만 빠르게 남길 수 있습니다. 업로드한 이미지를 브라우저에서 바로 확인하고, 원하는 위치를 선택해 썸네일, 프로필, 피드용 이미지에 맞게 정리하세요. 별도 앱을 설치하지 않아도 되고 복잡한 메뉴를 거치지 않아 콘텐츠 제작 시간을 줄일 수 있습니다. 자르기 후에는 비율 변경이나 인스타 피드 분할 같은 다른 기능으로 이어서 편집할 수 있습니다.',
    cta: '사진 자르기 시작하기',
    related: ['image-resizer', 'profile-picture-crop', 'instagram-grid-split'],
    faqs: [
      ['사진 자르기는 무료인가요?', '네. 온라인에서 무료로 사용할 수 있습니다.'],
      ['자른 뒤 다른 기능으로 이어서 편집할 수 있나요?', '자르기 후 비율 변경, 분할 등 필요한 기능으로 이어서 작업할 수 있습니다.'],
      ['모바일 사진도 편집할 수 있나요?', '모바일 브라우저에서 사진을 선택해 바로 편집할 수 있습니다.'],
      ['원본 이미지가 서버에 저장되나요?', '이미지 작업은 브라우저 중심으로 처리되며 원본을 서비스에 저장하지 않는 방향으로 설계되어 있습니다.'],
    ],
  },
  {
    slug: 'remove-background',
    title: `배경 제거 무료 | ${BRAND}`,
    h1: '누끼 테두리 정리 무료',
    description: '이미지의 지저분한 누끼 테두리와 배경 가장자리를 깔끔하게 정리하세요. 설치 없이 브라우저에서 바로 사용할 수 있습니다.',
    intro: '누끼 이미지의 지저분한 가장자리나 테두리를 정리해야 할 때 브라우저에서 빠르게 작업할 수 있습니다. 상품 이미지, 썸네일, 프로필 이미지처럼 배경과 경계가 눈에 띄는 이미지를 더 깔끔하게 다듬는 데 유용합니다. 별도 프로그램 설치 없이 이미지를 올리고 필요한 영역을 정리한 뒤 저장하세요. 완전한 디자인 리디자인이 아니라 기존 이미지의 마감 품질을 높이는 데 초점을 둔 기능입니다.',
    cta: '누끼 테두리 정리하기',
    related: ['crop-image', 'profile-picture-crop', 'youtube-thumbnail-resizer'],
    faqs: [
      ['자동 배경 제거 기능인가요?', '이 페이지는 누끼 이미지의 가장자리와 테두리를 깔끔하게 정리하는 편집 흐름으로 연결합니다.'],
      ['PNG 이미지도 사용할 수 있나요?', '투명 배경이 있는 PNG 이미지의 가장자리 정리에 활용할 수 있습니다.'],
      ['썸네일 제작에도 도움이 되나요?', '네. 인물이나 상품 누끼의 가장자리를 정리하면 썸네일 완성도가 올라갑니다.'],
      ['설치 없이 가능한가요?', '브라우저에서 바로 사용할 수 있어 별도 설치가 필요하지 않습니다.'],
    ],
  },
  {
    slug: 'youtube-thumbnail-resizer',
    title: `유튜브 썸네일 사이즈 변경 | ${BRAND}`,
    h1: '유튜브 썸네일 사이즈 변경',
    description: '유튜브 썸네일에 맞는 16:9 비율 이미지를 무료로 준비하세요. 설치 없이 브라우저에서 바로 편집할 수 있습니다.',
    intro: '유튜브 썸네일은 첫인상을 결정하는 이미지라 비율과 구성이 중요합니다. 팔로워 내놔에서는 16:9 비율에 맞춰 이미지를 조정하고, 필요한 영역을 확대하거나 이동해 썸네일용 결과물을 빠르게 만들 수 있습니다. 설치 없이 무료로 사용할 수 있으며, 이미지 자르기와 누끼 테두리 정리 같은 기능을 함께 활용하면 더 깔끔한 썸네일을 준비할 수 있습니다. 브라우저에서 바로 편집하고 저장하세요.',
    cta: '유튜브 썸네일 편집하기',
    related: ['image-resizer', 'crop-image', 'remove-background'],
    faqs: [
      ['유튜브 썸네일 비율은 무엇인가요?', '일반적으로 16:9 비율이 사용되며, 편집기에서 해당 비율에 맞춰 이미지를 조정할 수 있습니다.'],
      ['이미지를 확대하거나 위치를 바꿀 수 있나요?', '비율 변경 과정에서 이미지 위치와 확대 상태를 조정할 수 있습니다.'],
      ['텍스트가 들어간 썸네일도 만들 수 있나요?', '꾸미기 기능을 활용하면 콘텐츠용 텍스트와 장식 요소를 더할 수 있습니다.'],
      ['무료로 저장 가능한가요?', '네. 편집한 이미지를 무료로 저장할 수 있습니다.'],
    ],
  },
  {
    slug: 'shorts-resizer',
    title: `쇼츠 이미지 비율 변경 | ${BRAND}`,
    h1: '쇼츠 이미지 비율 변경',
    description: '유튜브 쇼츠와 릴스에 맞는 세로형 이미지를 무료로 변경하세요. 설치 없이 바로 편집하고 저장할 수 있습니다.',
    intro: '쇼츠와 릴스 같은 세로형 콘텐츠에는 9:16 비율 이미지가 자주 필요합니다. 팔로워 내놔에서는 가로 또는 정사각형 이미지를 세로형 비율에 맞춰 조정하고, 필요한 배경과 위치를 브라우저에서 바로 정리할 수 있습니다. 설치나 결제 없이 빠르게 편집할 수 있어 짧은 영상 커버, 안내 이미지, SNS 공지 이미지를 만들 때 유용합니다. 작업 후 필요한 경우 자르기나 꾸미기 기능으로 이어서 다듬을 수 있습니다.',
    cta: '쇼츠 이미지 편집하기',
    related: ['image-resizer', 'crop-image', 'youtube-thumbnail-resizer'],
    faqs: [
      ['쇼츠에 맞는 비율은 무엇인가요?', '쇼츠와 릴스에는 세로형 9:16 비율이 주로 사용됩니다.'],
      ['가로 이미지를 세로형으로 바꿀 수 있나요?', '배경과 위치를 조정해 세로형 이미지로 준비할 수 있습니다.'],
      ['모바일에서도 저장할 수 있나요?', '모바일 브라우저에서 편집 후 저장 또는 공유 흐름을 사용할 수 있습니다.'],
      ['유튜브 외에 릴스에도 쓸 수 있나요?', '네. 9:16 세로형 이미지는 릴스, 쇼츠, 스토리 등 다양한 플랫폼에 활용할 수 있습니다.'],
    ],
  },
  {
    slug: 'profile-picture-crop',
    title: `프로필 사진 자르기 | ${BRAND}`,
    h1: '프로필 사진 자르기',
    description: 'SNS 프로필에 맞게 사진을 온라인에서 간단히 자르고 미리 확인하세요. 설치 없이 무료로 사용할 수 있습니다.',
    intro: '프로필 사진은 작은 원형 영역에 표시되기 때문에 중심 위치와 여백이 중요합니다. 팔로워 내놔에서는 사진을 올려 필요한 부분을 자르고, SNS 프로필에 어울리는 구도를 빠르게 확인할 수 있습니다. 설치 없이 브라우저에서 사용할 수 있어 새 프로필 이미지를 준비할 때 간편합니다. 필요하다면 비율 변경, 자르기, 테두리 정리 기능을 함께 활용해 더 깔끔한 결과물을 만들 수 있습니다.',
    cta: '프로필 사진 편집하기',
    related: ['crop-image', 'remove-background', 'image-resizer'],
    faqs: [
      ['원형 프로필에 맞게 확인할 수 있나요?', '프로필 미리보기 흐름을 통해 사진이 작은 프로필 영역에서 어떻게 보이는지 확인하는 데 활용할 수 있습니다.'],
      ['사진 중심을 조정할 수 있나요?', '이미지를 자르거나 위치를 조정해 원하는 부분이 중심에 오도록 준비할 수 있습니다.'],
      ['SNS용 프로필 사진에 적합한가요?', '인스타그램, 유튜브, 기타 SNS 프로필 이미지 준비에 활용할 수 있습니다.'],
      ['무료인가요?', '네. 설치와 결제 없이 사용할 수 있습니다.'],
    ],
  },
];

const sitemapEntries = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  ...landingPages.map((page) => ({ loc: `/${page.slug}`, changefreq: 'monthly', priority: '0.8' })),
  { loc: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms', changefreq: 'yearly', priority: '0.3' },
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function jsonLd(data) {
  return JSON.stringify(data, null, 2).replace(/</g, '\\u003c');
}

function pageUrl(slug) {
  return `${SITE_URL}/${slug}`;
}

function renderFaqSchema(page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

function renderPageSchema(page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.h1,
    url: pageUrl(page.slug),
    description: page.description,
    isPartOf: {
      '@type': 'WebSite',
      name: BRAND,
      url: SITE_URL,
    },
    about: {
      '@type': 'SoftwareApplication',
      name: BRAND,
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web',
      offers: softwareApplication.offers,
    },
  };
}

function relatedLinks(page) {
  return page.related
    .map((slug) => landingPages.find((candidate) => candidate.slug === slug))
    .filter(Boolean);
}

function renderLandingPage(page) {
  const canonical = pageUrl(page.slug);
  const related = relatedLinks(page);
  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes, viewport-fit=cover" />
  <title>${escapeHtml(page.title)}</title>
  <meta name="description" content="${escapeHtml(page.description)}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="${BRAND}" />
  <meta property="og:title" content="${escapeHtml(page.title)}" />
  <meta property="og:description" content="${escapeHtml(page.description)}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:locale" content="ko_KR" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeHtml(page.title)}" />
  <meta name="twitter:description" content="${escapeHtml(page.description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;800;900&display=swap" rel="stylesheet" />
  <script type="application/ld+json">${jsonLd(softwareApplication)}</script>
  <script type="application/ld+json">${jsonLd(renderPageSchema(page))}</script>
  <script type="application/ld+json">${jsonLd(renderFaqSchema(page))}</script>
  <style>
    :root {
      --land-green: #0a4d3a;
      --land-green-hover: #083d2e;
      --land-mint: #f0f9f6;
      --land-muted: #64748b;
      --land-text: #0f172a;
      --land-surface: #ffffff;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Noto Sans KR', -apple-system, BlinkMacSystemFont, sans-serif;
      color: var(--land-text);
      background: linear-gradient(180deg, #ffffff 0%, #fafcfb 58%, var(--land-mint) 100%);
      line-height: 1.7;
      word-break: keep-all;
      overflow-x: hidden;
    }
    a { color: inherit; }
    .seo-shell { width: min(960px, calc(100% - 36px)); margin: 0 auto; }
    .seo-header { padding: 22px 0 18px; }
    .seo-nav { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .seo-logo { font-size: 1rem; font-weight: 900; color: var(--land-green); text-decoration: none; letter-spacing: -0.03em; }
    .seo-nav-links { display: flex; gap: 14px; align-items: center; font-size: .82rem; color: var(--land-muted); }
    .seo-nav-links a { text-decoration: none; font-weight: 700; }
    .seo-main { padding: clamp(34px, 7vw, 72px) 0 clamp(48px, 8vw, 78px); }
    .seo-hero { text-align: center; max-width: 780px; margin: 0 auto clamp(34px, 6vw, 52px); }
    .seo-kicker { display: inline-flex; margin-bottom: 14px; padding: 6px 13px; border: 1px solid rgba(10,77,58,.14); border-radius: 999px; background: rgba(10,77,58,.07); color: var(--land-green); font-size: .75rem; font-weight: 800; }
    h1 { font-size: clamp(2.15rem, 6vw, 3.5rem); line-height: 1.12; letter-spacing: -.055em; color: var(--land-text); margin-bottom: 18px; font-weight: 900; }
    .seo-description { max-width: 42em; margin: 0 auto 26px; font-size: clamp(.96rem, 2vw, 1.08rem); color: var(--land-muted); }
    .seo-cta-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 22px; }
    .btn-primary {
      display: inline-flex; align-items: center; justify-content: center; gap: 10px;
      background: var(--land-green); color: #fff; font-family: 'Noto Sans KR', sans-serif;
      font-size: .98rem; font-weight: 700; padding: 15px 28px; border-radius: 14px;
      text-decoration: none; border: none; cursor: pointer;
      box-shadow: 0 4px 14px rgba(10,77,58,.25), 0 1px 2px rgba(10,77,58,.1);
      transition: background .25s cubic-bezier(.25,.46,.45,.94), transform .25s cubic-bezier(.25,.46,.45,.94), box-shadow .25s cubic-bezier(.25,.46,.45,.94);
      max-width: 100%; min-width: 0;
    }
    .btn-primary:hover { background: var(--land-green-hover); transform: translateY(-3px); box-shadow: 0 16px 36px rgba(10,77,58,.28), 0 4px 8px rgba(10,77,58,.12); }
    .btn-ghost { display: inline-flex; align-items: center; justify-content: center; padding: 15px 22px; border-radius: 14px; font-size: .96rem; font-weight: 700; color: var(--land-text); background: var(--land-surface); border: 1px solid rgba(15,23,42,.1); text-decoration: none; box-shadow: 0 1px 3px rgba(15,23,42,.06); }
    .seo-card { background: rgba(255,255,255,.86); border: 1px solid rgba(15,23,42,.07); border-radius: 24px; box-shadow: 0 1px 4px rgba(15,23,42,.04), 0 18px 48px -18px rgba(10,77,58,.16); padding: clamp(24px, 5vw, 40px); margin-bottom: 22px; }
    h2 { font-size: clamp(1.35rem, 3vw, 1.75rem); line-height: 1.25; letter-spacing: -.04em; margin-bottom: 16px; color: var(--land-text); }
    .seo-card p { color: var(--land-muted); font-size: .96rem; }
    .faq-list { display: grid; gap: 12px; }
    .faq-item { border: 1px solid rgba(15,23,42,.08); border-radius: 16px; background: #fff; padding: 18px 18px 16px; }
    .faq-item h3 { font-size: .98rem; margin-bottom: 8px; color: var(--land-text); letter-spacing: -.02em; }
    .faq-item p { font-size: .9rem; color: var(--land-muted); }
    .related-list { display: flex; flex-wrap: wrap; gap: 10px; }
    .related-list a { display: inline-flex; padding: 10px 14px; border-radius: 999px; background: rgba(10,77,58,.07); border: 1px solid rgba(10,77,58,.12); color: var(--land-green); text-decoration: none; font-size: .85rem; font-weight: 800; }
    .seo-footer { padding: 30px 0 42px; text-align: center; color: #94a3b8; font-size: .78rem; background: #fff; border-top: 1px solid rgba(15,23,42,.06); }
    .seo-footer-links { margin-top: 8px; display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
    .seo-footer-links a { color: #94a3b8; text-decoration: none; font-weight: 700; }
    @media (max-width: 520px) {
      .seo-shell { width: min(100% - 32px, 960px); }
      .seo-nav { align-items: flex-start; flex-direction: column; }
      .seo-nav-links { gap: 12px; flex-wrap: wrap; }
      .btn-primary, .btn-ghost { width: 100%; }
      .seo-card { border-radius: 20px; }
    }
  </style>
</head>
<body>
  <header class="seo-header">
    <nav class="seo-shell seo-nav" aria-label="주요 링크">
      <a class="seo-logo" href="/">${BRAND}</a>
      <div class="seo-nav-links">
        <a href="/#editor-section">에디터</a>
        <a href="/instagram-grid-split">피드 분할</a>
        <a href="/image-resizer">비율 변경</a>
      </div>
    </nav>
  </header>
  <main class="seo-main">
    <article class="seo-shell">
      <section class="seo-hero" aria-labelledby="page-title">
        <span class="seo-kicker">무료 온라인 이미지 편집</span>
        <h1 id="page-title">${escapeHtml(page.h1)}</h1>
        <p class="seo-description">${escapeHtml(page.description)}</p>
        <div class="seo-cta-row">
          <a class="btn-primary" href="/#editor-section">${escapeHtml(page.cta)}</a>
          <a class="btn-ghost" href="/">홈으로 보기</a>
        </div>
      </section>
      <section class="seo-card" aria-labelledby="feature-summary">
        <h2 id="feature-summary">어떤 작업에 쓰나요?</h2>
        <p>${escapeHtml(page.intro)}</p>
      </section>
      <section class="seo-card" aria-labelledby="faq-title">
        <h2 id="faq-title">자주 묻는 질문</h2>
        <div class="faq-list">
          ${page.faqs.map(([question, answer]) => `<section class="faq-item"><h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p></section>`).join('\n          ')}
        </div>
      </section>
      <section class="seo-card" aria-labelledby="related-title">
        <h2 id="related-title">관련 기능</h2>
        <div class="related-list">
          ${related.map((item) => `<a href="/${item.slug}">${escapeHtml(item.h1)}</a>`).join('\n          ')}
        </div>
      </section>
    </article>
  </main>
  <footer class="seo-footer">
    <div class="seo-shell">
      <p>© 2026 siinseon · ${BRAND}</p>
      <div class="seo-footer-links">
        <a href="/terms">이용약관</a>
        <a href="/privacy">개인정보처리방침</a>
      </div>
    </div>
  </footer>
</body>
</html>
`;
}

function renderSitemap() {
  const urls = sitemapEntries.map((entry) => `  <url>
    <loc>${SITE_URL}${entry.loc === '/' ? '/' : entry.loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function renderRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function renderOgImage() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">${BRAND}</title>
  <desc id="desc">무료 온라인 이미지 편집 도구</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff"/>
      <stop offset="0.58" stop-color="#fafcfb"/>
      <stop offset="1" stop-color="#f0f9f6"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#0a4d3a" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1040" cy="110" r="220" fill="#0a4d3a" opacity="0.07"/>
  <rect x="120" y="120" width="960" height="390" rx="42" fill="#ffffff" filter="url(#shadow)" stroke="#e7eee9"/>
  <text x="600" y="280" text-anchor="middle" font-family="'Noto Sans KR', Arial, sans-serif" font-size="78" font-weight="900" fill="#0f172a" letter-spacing="-4">팔로워 <tspan fill="#0a4d3a">내놔</tspan></text>
  <text x="600" y="352" text-anchor="middle" font-family="'Noto Sans KR', Arial, sans-serif" font-size="34" font-weight="700" fill="#64748b">설치 없이, 결제 없이 바로 편집하세요</text>
  <text x="600" y="414" text-anchor="middle" font-family="'Noto Sans KR', Arial, sans-serif" font-size="26" font-weight="700" fill="#0a4d3a">인스타 피드 분할 · 캐러셀 · 비율 변경 · 이미지 자르기</text>
</svg>
`;
}

function writeFile(relativePath, contents) {
  const target = path.join(ROOT, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents, 'utf8');
}

for (const page of landingPages) {
  writeFile(path.join('public', `${page.slug}.html`), renderLandingPage(page));
}

const sitemap = renderSitemap();
const robots = renderRobots();
writeFile(path.join('public', 'sitemap.xml'), sitemap);
writeFile('sitemap.xml', sitemap);
writeFile(path.join('public', 'robots.txt'), robots);
writeFile('robots.txt', robots);
writeFile(path.join('public', 'og-image.svg'), renderOgImage());

console.log(`Generated ${landingPages.length} SEO landing pages, sitemap.xml, robots.txt, and og-image.svg.`);
