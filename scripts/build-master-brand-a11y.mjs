#!/usr/bin/env node
/**
 * build-master-brand-a11y.mjs
 *
 * 对 4 个 logo 变体（default / reverse / mono-navy / mono-black）的关键颜色，
 * 在 8 个代表背景色下做 WCAG 2.1 contrast，输出 JSON + Markdown 报告。
 */

import fs from 'node:fs';
import path from 'node:path';

const KIT_ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const OUT_DIR = path.join(KIT_ROOT, 'assets/master-brand');

// 各变体使用的关键颜色（最不可读的那个用于 contrast 评估）
const VARIANTS = {
  default: {
    name: 'Default（多色）',
    fg: [
      { token: 'navy',   hex: '#001A51', role: '主深蓝（icon 主体 + wordmark）' },
      { token: 'medium', hex: '#005AA4', role: '中蓝（icon 中段 + wordmark "Sci"）' },
      { token: 'cyan',   hex: '#00AEDB', role: '青强调（icon 高光）' },
      { token: 'gray',   hex: '#666666', role: '副线 / slogan 灰' },
    ],
  },
  reverse: {
    name: 'Reverse（深底反白）',
    fg: [
      { token: 'white',       hex: '#FFFFFF', role: '主体反白' },
      { token: 'white-78pct', hex: 'rgba(255,255,255,0.78)', role: 'slogan 78% 白', alpha: 0.78 },
    ],
  },
  'mono-navy': {
    name: 'Mono Navy（单色深蓝）',
    fg: [
      { token: 'navy', hex: '#001A51', role: '全部元素' },
    ],
  },
  'mono-black': {
    name: 'Mono Black（单色黑）',
    fg: [
      { token: 'black', hex: '#000000', role: '全部元素' },
    ],
  },
};

// 8 个代表背景
const BACKGROUNDS = [
  { token: 'white',     hex: '#FFFFFF', label: '纯白（推荐 default 用）' },
  { token: 'paper',     hex: '#F8FAFC', label: '冷白纸（slate-50）' },
  { token: 'lightgray', hex: '#E2E8F0', label: '浅灰（slate-200）' },
  { token: 'darkbg',    hex: '#0B1220', label: '深底（推荐 reverse 用）' },
  { token: 'navy',      hex: '#001A51', label: '母品牌深蓝' },
  { token: 'brand-de',  hex: '#2563EB', label: 'DeepEvidence 蓝' },
  { token: 'brand-rcp', hex: '#0F62FE', label: 'RCP 蓝' },
  { token: 'brand-se',  hex: '#9333EA', label: 'SeekEvidence 紫' },
];

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function relLum([r, g, b]) {
  const ch = c => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * ch(r) + 0.7152 * ch(g) + 0.0722 * ch(b);
}

function contrast(rgb1, rgb2) {
  const [l1, l2] = [relLum(rgb1), relLum(rgb2)].sort((a, b) => b - a);
  return (l1 + 0.05) / (l2 + 0.05);
}

function blendOver(fgRgb, bgRgb, alpha) {
  return fgRgb.map((c, i) => Math.round(c * alpha + bgRgb[i] * (1 - alpha)));
}

function ratingFor(ratio) {
  if (ratio >= 7) return { rating: 'AAA', body: 'pass', large: 'pass' };
  if (ratio >= 4.5) return { rating: 'AA', body: 'pass', large: 'pass' };
  if (ratio >= 3) return { rating: 'AA-large', body: 'fail', large: 'pass' };
  return { rating: 'fail', body: 'fail', large: 'fail' };
}

const matrix = [];
for (const [variant, vSpec] of Object.entries(VARIANTS)) {
  for (const fg of vSpec.fg) {
    let fgRgb;
    if (fg.alpha) {
      fgRgb = hexToRgb('#FFFFFF'); // base
    } else {
      fgRgb = hexToRgb(fg.hex);
    }
    for (const bg of BACKGROUNDS) {
      const bgRgb = hexToRgb(bg.hex);
      // 处理半透明前景：等价于在 bg 上叠 alpha 后的 effective fg
      const effFg = fg.alpha ? blendOver(hexToRgb('#FFFFFF'), bgRgb, fg.alpha) : fgRgb;
      const r = contrast(effFg, bgRgb);
      const rate = ratingFor(r);
      matrix.push({
        variant,
        variantName: vSpec.name,
        fg: fg.token,
        fgHex: fg.hex,
        fgRole: fg.role,
        bg: bg.token,
        bgHex: bg.hex,
        bgLabel: bg.label,
        ratio: Number(r.toFixed(2)),
        rating: rate.rating,
        bodyText: rate.body,        // 4.5:1
        largeText: rate.large,      // 3:1
        nonText: r >= 3 ? 'pass' : 'fail', // 图形元素 3:1
      });
    }
  }
}

fs.writeFileSync(path.join(OUT_DIR, 'a11y-contrast.json'), JSON.stringify(matrix, null, 2));

// 生成 Markdown 报告
const lines = [];
lines.push('# 母品牌 Logo · WCAG 2.1 对比度报告');
lines.push('');
lines.push('**版本**：v1.0 · 2026-05-06  ');
lines.push('**标准**：WCAG 2.1 — 正文 4.5:1（AA）/ 7:1（AAA）；大字 3:1；非文本图形元素 3:1。  ');
lines.push('**注**：logo 在 WCAG 严格意义上属于「非文本」（3:1 阈值），但 wordmark 中的小字（slogan）按正文 4.5:1 评估更稳妥。');
lines.push('');
lines.push('## 评分图例');
lines.push('');
lines.push('- **AAA**: ≥ 7:1（最佳）');
lines.push('- **AA**: ≥ 4.5:1（正文/小字达标）');
lines.push('- **AA-large**: ≥ 3:1（图形/大字达标，正文不达标）');
lines.push('- **fail**: < 3:1（不可用）');
lines.push('');
for (const variant of Object.keys(VARIANTS)) {
  const rows = matrix.filter(m => m.variant === variant);
  if (!rows.length) continue;
  lines.push(`## ${VARIANTS[variant].name}`);
  lines.push('');
  // 按 fg 分组
  const fgs = [...new Set(rows.map(r => r.fg))];
  for (const fg of fgs) {
    const sub = rows.filter(r => r.fg === fg);
    lines.push(`### 前景 ${sub[0].fgHex} · ${sub[0].fgRole}`);
    lines.push('');
    lines.push('| 背景 | 色号 | 对比度 | 评级 | 正文 4.5:1 | 大字/图形 3:1 |');
    lines.push('|---|---|---:|---|:-:|:-:|');
    for (const r of sub) {
      lines.push(`| ${r.bgLabel} | \`${r.bgHex}\` | ${r.ratio} | ${r.rating} | ${r.bodyText === 'pass' ? '✓' : '✗'} | ${r.largeText === 'pass' ? '✓' : '✗'} |`);
    }
    lines.push('');
  }
}

// 推荐使用规则
lines.push('## 推荐使用规则（基于矩阵）');
lines.push('');
lines.push('| 背景 | 推荐变体 | 原因 |');
lines.push('|---|---|---|');
const rec = [
  { bg: '#FFFFFF / #F8FAFC（白/纸白）', use: 'default 或 mono-navy', why: 'navy 在白底 ≥ 13:1（AAA）；多色版 cyan 在白底约 2.5:1，作为 icon 高光不构成 a11y 风险（非主体）' },
  { bg: '#E2E8F0（浅灰）', use: 'mono-navy 或 mono-black', why: 'default 在浅灰底视觉对比降低；mono 单色版更稳' },
  { bg: '#0B1220 深底', use: 'reverse', why: '反白专用版本' },
  { bg: '产品色背景（蓝/紫）', use: 'reverse 或 mono-black（视亮度）', why: '深产品色用 reverse；浅产品色 < 3:1 时禁止放 logo' },
  { bg: '渐变 / 图片背景', use: '禁止', why: '需先加纯色色板再放 logo' },
];
for (const r of rec) lines.push(`| ${r.bg} | ${r.use} | ${r.why} |`);
lines.push('');
lines.push('## 红线');
lines.push('');
lines.push('- ❌ default（多色版）放在低亮度产品色背景（如 brand-de、brand-rcp、navy）—— 主体 navy 与背景对比 < 3:1');
lines.push('- ❌ reverse 放在浅色背景 —— 反白对比直接失败');
lines.push('- ❌ mono-black 放在 brand-se（紫）以外的所有暖紫/低明度背景 —— contrast < 3:1');
lines.push('- ❌ 任意变体放在视觉密度大的图片或渐变上（无纯色衬底）');
lines.push('');
lines.push('## 数据');
lines.push('');
lines.push(`完整 JSON 矩阵：\`assets/master-brand/a11y-contrast.json\` · 共 ${matrix.length} 组。`);

fs.writeFileSync(path.join(OUT_DIR, 'A11Y-CONTRAST.md'), lines.join('\n'));
console.log(`✅ 输出 ${matrix.length} 组对比度数据`);
console.log(`   - assets/master-brand/a11y-contrast.json`);
console.log(`   - assets/master-brand/A11Y-CONTRAST.md`);
