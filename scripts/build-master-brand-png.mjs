#!/usr/bin/env node
/**
 * build-master-brand-png.mjs
 *
 * 把 assets/master-brand/ 下的 12 个 SVG 渲染成 PNG 栅格全套。
 * 输出尺寸阶梯按"logo 总高度"算（不是 viewBox 宽），保证视觉上一致：
 *   24 / 48 / 96 / 192 / 512 px height  → 渲染宽度按各变体 aspect ratio 反推
 *
 * en / cn 行：viewBox 6882 × 1900 (en) 或 6882 × 1892 (cn)，aspect ≈ 3.62
 * full 行：viewBox 6882 × 3792，aspect ≈ 1.815
 *
 * Reverse 变体额外渲染一份 with-backdrop（深底 + 12% padding），方便文档截图。
 *
 * 用法：node scripts/build-master-brand-png.mjs
 */

import { Resvg } from '@resvg/resvg-js';
import fs from 'node:fs';
import path from 'node:path';

const KIT_ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const SRC = path.join(KIT_ROOT, 'assets/master-brand');
const OUT = path.join(KIT_ROOT, 'assets/master-brand/png');
fs.mkdirSync(OUT, { recursive: true });

const HEIGHTS = [24, 48, 96, 192, 512];

const VARIANTS = ['default', 'reverse', 'mono-navy', 'mono-black'];
const COMPS = ['en', 'cn', 'full'];

// 反向变体的预览底色（与 reverse-en preview HTML 一致）
const REVERSE_BG = '#0B1220';

function readSvg(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/viewBox="([^"]+)"/);
  if (!m) throw new Error('no viewBox in ' + file);
  const [vx, vy, vw, vh] = m[1].split(/\s+/).map(Number);
  return { raw, vx, vy, vw, vh };
}

function render(svgText, targetHeight, vw, vh) {
  // resvg 用 fitTo width/height 缩放；按 height 控制
  const r = new Resvg(svgText, {
    fitTo: { mode: 'height', value: targetHeight },
    background: 'rgba(0,0,0,0)',
  });
  return r.render().asPng();
}

function renderWithBackdrop(svgText, targetHeight, vw, vh, bg) {
  // 计算 render 宽度
  const w = Math.round((targetHeight * vw) / vh);
  const pad = Math.round(targetHeight * 0.18);
  const canvasH = targetHeight + pad * 2;
  const canvasW = w + pad * 2;
  // 包一层 SVG，居中放置原 SVG
  const wrap = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  width="${canvasW}" height="${canvasH}" viewBox="0 0 ${canvasW} ${canvasH}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <g transform="translate(${pad}, ${pad})">
    <svg width="${w}" height="${targetHeight}" viewBox="0 0 ${vw} ${vh}" preserveAspectRatio="xMidYMid meet">
      ${svgText.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')}
    </svg>
  </g>
</svg>`;
  const r = new Resvg(wrap, { background: bg });
  return r.render().asPng();
}

let total = 0;
const manifest = [];

for (const v of VARIANTS) {
  for (const c of COMPS) {
    const file = path.join(SRC, `${v}-${c}.svg`);
    if (!fs.existsSync(file)) continue;
    const { raw, vw, vh, vx, vy } = readSvg(file);
    // cn 的 viewBox 起点 y=1900；为了 PNG 渲染要重写 viewBox 到 0,0,vw,vh — resvg 会按 viewBox 渲染，已经处理。
    for (const h of HEIGHTS) {
      const w = Math.round((h * vw) / vh);
      // 直接 render
      const png = render(raw, h, vw, vh);
      const out = path.join(OUT, `${v}-${c}-${h}.png`);
      fs.writeFileSync(out, png);
      manifest.push({ variant: v, comp: c, height: h, width: w, file: path.relative(KIT_ROOT, out), bytes: png.length });
      total++;
    }
    // reverse 额外加深底
    if (v === 'reverse') {
      for (const h of HEIGHTS) {
        const png = renderWithBackdrop(raw, h, vw, vh, REVERSE_BG);
        const out = path.join(OUT, `${v}-${c}-${h}-on-dark.png`);
        fs.writeFileSync(out, png);
        manifest.push({ variant: v, comp: c, height: h, file: path.relative(KIT_ROOT, out), bytes: png.length, backdrop: REVERSE_BG });
        total++;
      }
    }
  }
}

fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`✅ 渲染 ${total} 张 PNG → ${path.relative(KIT_ROOT, OUT)}`);
console.log(`   manifest: ${path.relative(KIT_ROOT, path.join(OUT, 'manifest.json'))}`);
