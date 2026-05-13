#!/usr/bin/env node
/**
 * build-react-demo-screenshots.mjs
 *
 * 把 react/demo/index.html 的 9 段视觉验证截图存档到 preview/screenshots/react-demo/。
 *
 * 用法：在用户 Mac 本地跑（沙盒 arm64 拉不到对应 chromium）。
 *
 *   1. 确保 React 包已构建：cd react && npm install && npm run build
 *   2. 装 puppeteer（首次约 200MB chromium 下载）：
 *        cd scripts && npm init -y && npm install puppeteer
 *      或在 kit 根装：
 *        npm install puppeteer
 *   3. 跑：
 *        node scripts/build-react-demo-screenshots.mjs
 *
 * 输出：
 *   preview/screenshots/react-demo/
 *     section-1-trust-badges.png
 *     section-2-trust-badges-reverse.png
 *     section-3-logo-ladder.png
 *     ...
 *     section-9-cobrand-lockup.png
 *     manifest.json     索引（含 React 包版本、截图日期、各段对应的 v1.0 锁定决策）
 *
 * 接入档案站点：preview/screenshots/index.html 列出 9 张 + 决策回溯链接。
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const KIT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(KIT_ROOT, 'preview/screenshots/react-demo');

// 9 段 metadata（slug + 决策回溯链接）
const SECTIONS = [
  { n: 1, slug: 'trust-badges',          title: '三大信任徽章 · 四产品 scope',                        spec: '/visual/visual-system' },
  { n: 2, slug: 'trust-badges-reverse',  title: '信任徽章 · 反白态',                                spec: '/visual/visual-system' },
  { n: 3, slug: 'logo-ladder',           title: 'Logo · 尺寸阶梯 + endorsement signature',           spec: '/architecture/brand-architecture' },
  { n: 4, slug: 'logo-reverse',          title: 'Logo · 反白态（Hero / 深底）',                      spec: '/architecture/brand-architecture' },
  { n: 5, slug: 'wordmark-only',         title: 'Wordmark · 单独使用（与完整 Logo 对等）',          spec: '/architecture/brand-architecture' },
  { n: 6, slug: 'content-scenarios',     title: '正文场景 · Nano-Citation / CoT / Diff / Disclosure', spec: '/visual/visual-system' },
  { n: 7, slug: 'family-lockup',         title: '家族 Lockup',                                       spec: '/architecture/brand-architecture' },
  { n: 8, slug: 'master-brand-logo',     title: '母品牌 MedSci Healthcare logo · 4 变体 × 3 构图',     spec: '/master-brand/overview' },
  { n: 9, slug: 'cobrand-lockup',        title: 'Co-Brand Lockup · 母品牌 + 产品 wordmark（02 §4.3）', spec: '/architecture/brand-architecture' },
];

// ------- 1. 启 HTTP 服务器（demo 的 importmap 需要 http://，file:// 跑不动） -------

const PORT = 8765;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = new URL(req.url, 'http://localhost');
      let p = decodeURIComponent(url.pathname);
      if (p === '/') p = '/react/demo/index.html';
      const fp = path.join(KIT_ROOT, p);
      // 防越界
      if (!fp.startsWith(KIT_ROOT)) { res.statusCode = 403; res.end(); return; }
      fs.stat(fp, (err, stat) => {
        if (err || !stat.isFile()) { res.statusCode = 404; res.end(`Not found: ${p}`); return; }
        res.setHeader('Content-Type', MIME[path.extname(fp)] || 'application/octet-stream');
        res.setHeader('Access-Control-Allow-Origin', '*');
        fs.createReadStream(fp).pipe(res);
      });
    });
    server.listen(PORT, () => resolve(server));
  });
}

// ------- 2. 主流程 -------

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // 先确认 dist 存在
  const distEntry = path.join(KIT_ROOT, 'react/dist/index.js');
  if (!fs.existsSync(distEntry)) {
    console.error('❌ 找不到 react/dist/index.js');
    console.error('   请先运行：cd react && npm install && npm run build');
    process.exit(1);
  }

  // 装 puppeteer 校验
  let puppeteer;
  try {
    puppeteer = (await import('puppeteer')).default;
  } catch (e) {
    console.error('❌ 缺 puppeteer。先装：');
    console.error('   npm install puppeteer');
    process.exit(1);
  }

  console.log(`▶ 启 http://localhost:${PORT}/react/demo/`);
  const server = await startServer();

  console.log('▶ 启 puppeteer chromium');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 2 });

    console.log(`▶ 打开 demo`);
    await page.goto(`http://localhost:${PORT}/react/demo/index.html`, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // 等 React 渲染（等到出现 9 个 <section>）
    console.log('▶ 等 React 渲染（9 个 <section>）');
    await page.waitForFunction(
      () => document.querySelectorAll('#root section').length >= 9,
      { timeout: 30000 },
    );

    // 等字体加载完
    await page.evaluateHandle('document.fonts.ready');
    // 等图片（master brand SVG）加载完
    await page.evaluate(async () => {
      const imgs = [...document.querySelectorAll('img')];
      await Promise.all(imgs.map((img) =>
        img.complete ? Promise.resolve() : new Promise((res) => { img.onload = res; img.onerror = res; })
      ));
    });
    // 多等 600ms 让 CoT 动画稳定到一个相位
    await new Promise(r => setTimeout(r, 600));

    // 截每段
    const manifest = {
      generated: new Date().toISOString(),
      reactPackage: getReactPkgVersion(),
      kitVersion: 'v1.0',
      sections: [],
    };

    const sections = await page.$$('#root section');
    if (sections.length < 9) {
      console.warn(`⚠ 只渲染出 ${sections.length} 段，期望 9`);
    }

    // helper：每次有进展立即写盘（避免脚本中途失败留下 stale manifest）
    const writeManifest = () => {
      fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
      const jsContent = `window.__screenshots_manifest = ${JSON.stringify(manifest, null, 2)};\n`;
      fs.writeFileSync(path.join(OUT_DIR, 'manifest.js'), jsContent);
    };

    // 进入循环前清空旧 manifest（防止前一次部分失败的产物挂在这里）
    writeManifest();

    for (let i = 0; i < SECTIONS.length && i < sections.length; i++) {
      const meta = SECTIONS[i];
      const sec = sections[i];
      // 滚动到 section 顶部，让截图前布局稳定
      await sec.evaluate(el => el.scrollIntoView({ block: 'start' }));
      await new Promise(r => setTimeout(r, 200));

      const file = `section-${meta.n}-${meta.slug}.png`;
      const outPath = path.join(OUT_DIR, file);
      await sec.screenshot({ path: outPath, omitBackground: false });
      const stat = fs.statSync(outPath);
      console.log(`  ✓ section ${meta.n} · ${meta.title}  (${(stat.size/1024).toFixed(1)} KB)`);
      manifest.sections.push({
        n: meta.n,
        slug: meta.slug,
        title: meta.title,
        file,
        bytes: stat.size,
        specLink: meta.spec,
      });
      // 每段写一次 manifest（含 .json + .js），保留进度
      writeManifest();
    }

    console.log(`\n✅ ${manifest.sections.length} 张截图 → ${path.relative(KIT_ROOT, OUT_DIR)}`);
    console.log(`   manifest: ${path.relative(KIT_ROOT, path.join(OUT_DIR, 'manifest.json'))} (+ manifest.js for file://)`);
  } finally {
    await browser.close();
    server.close();
  }
}

function getReactPkgVersion() {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(KIT_ROOT, 'react/package.json'), 'utf8'));
    return `${pkg.name}@${pkg.version}`;
  } catch { return 'unknown'; }
}

main().catch((e) => {
  console.error('❌ 截图失败:', e.message);
  process.exit(1);
});
