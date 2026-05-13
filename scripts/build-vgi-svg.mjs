// 生成 VGI Ingredient Mark 的 standalone SVG 资产。
//
// 规格来源：02-brand-architecture.md §3 + 04-visual-system.md §2.3 + ai-tokens.css §3
//
// 产物：preview/vgi-mark/
//   glyph-{currentcolor,reverse,de,se,di,rcp}.svg     (6 - 单纯盾牌+勾选)
//   compact{,-reverse}.svg                              (2 - VGI™ pill)
//   full-cn{,-reverse}.svg, full-en{,-reverse}.svg     (4 - 完整 lockup)

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(here, "..", "preview", "vgi-mark");
mkdirSync(OUT, { recursive: true });

// ── 共享几何 ──────────────────────────────────────────────────────────────
const SHIELD_PATH = "M12 2 L4 6 v6 c0 5 3.5 9 8 10 c4.5-1 8-5 8-10 V6 L12 2 Z";
const CHECK_PATH = "M9 12 l2 2 4-4";

const PRODUCT_COLOR = {
  de: "#2563EB",
  se: "#9333EA",
  di: "#0891B2",
  rcp: "#0F62FE",
};

const REVERSE_COLOR = "#FFFFFF";

const FULL_TEXT_CN = "VGI · 验证型生成式智能";
const FULL_TEXT_EN = "VGI · Verified Generative Intelligence";

// ── 工具：SVG 文件头注释 ─────────────────────────────────────────────────
function header(commentLines) {
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<!--`,
    ...commentLines.map((l) => `  ${l}`),
    `-->`,
  ].join("\n");
}

// ── 1. Glyph: shield + check (24×24) ─────────────────────────────────────
function makeGlyph({ color, label, comment }) {
  const isReverse = color === REVERSE_COLOR;
  return [
    header([
      `VGI Ingredient Mark · glyph (${label})`,
      `梅斯健康 AI Brand Kit v1.0 — production asset`,
      ...comment,
      `Generated: 2026-05-06 by build-vgi-svg.mjs`,
    ]),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="VGI Verified Generative Intelligence">`,
    `  <path d="${SHIELD_PATH}" fill="none" stroke="${color}" stroke-width="2"/>`,
    `  <path d="${CHECK_PATH}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `</svg>`,
    "",
  ].join("\n");
}

// ── 2. Compact pill: VGI™ ─────────────────────────────────────────────────
// 规格（02 §3.2 + ai-tokens.css）：
//   高度 20px，pill rx=10，内边距 padding-y=3 / padding-x=8，icon 14px，gap 5px
//   font-size 12px (VGI), ™ 60% = 7.2px
//   预估宽度 = 1.5 (border) + 8 + 14 + 5 + ~30 (VGI™) + 8 + 1.5 ≈ 68px
function makeCompact({ color, fillColor, label, comment }) {
  const w = 70;
  const h = 20;
  const r = 10;
  const iconSize = 14;
  const padX = 8;
  const padY = 3;
  const gap = 5;
  // glyph 位置：左 padding 后
  const iconX = padX;
  const iconY = padY;
  // 文字基线
  const textX = iconX + iconSize + gap;
  const textY = h / 2 + 4; // 视觉对齐，12px 字高约 4 单位中线偏移

  return [
    header([
      `VGI Ingredient Mark · compact "VGI™" (${label})`,
      `梅斯健康 AI Brand Kit v1.0 — production asset`,
      ...comment,
      `规格：高度 20px，VGI 用 Inter SemiBold 12px，™ 上标 60%`,
      `渲染依赖：消费方需加载 Inter（Google Fonts）`,
    ]),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="VGI">`,
    `  <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="${r}" ry="${r}" fill="${fillColor}" stroke="${color}" stroke-width="1.5"/>`,
    `  <g transform="translate(${iconX}, ${iconY}) scale(${iconSize / 24})">`,
    `    <path d="${SHIELD_PATH}" fill="none" stroke="${color}" stroke-width="2"/>`,
    `    <path d="${CHECK_PATH}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `  </g>`,
    `  <text x="${textX}" y="${textY}" font-family="Inter, system-ui, sans-serif" font-size="12" font-weight="600" letter-spacing="0.04em" fill="${color}">VGI<tspan font-size="7.2" baseline-shift="super">™</tspan></text>`,
    `</svg>`,
    "",
  ].join("\n");
}

// ── 3. Full pill: VGI · 全称™ ────────────────────────────────────────────
// 规格：高度 28px，pill rx=14，padding-y=5 / padding-x=12，icon 18px，gap 5px，
//   font-size 13px。中文："VGI · 验证型生成式智能"™，英文："VGI · Verified Generative Intelligence"™
function makeFull({ color, fillColor, lang, fullText, label, comment }) {
  const h = 28;
  const r = 14;
  const iconSize = 18;
  const padX = 12;
  const padY = 5;
  const gap = 5;
  const iconX = padX;
  const iconY = padY;
  const textX = iconX + iconSize + gap;
  const textY = h / 2 + 4.5;

  // 估算文字宽度（粗略）：中文 ~ 14px/char，英文 ~ 7.5px/char，VGI 部分 ~ 28px
  // CN: "VGI · 验证型生成式智能" = "VGI" (28) + " · " (12) + "验证型生成式智能" (8 chars × 14 = 112) = 152
  // EN: "VGI · Verified Generative Intelligence" = 28 + 12 + (33 chars × ~7.5) = 287
  const estTextWidth = lang === "cn" ? 158 : 280;
  const tmWidth = 9; // ™ 上标空间
  const w = Math.round(padX + iconSize + gap + estTextWidth + tmWidth + padX);

  // 中文部分用 Noto Sans SC，VGI 缩写永远 Inter
  // SVG attribute 值用双引号，嵌套的字体名用单引号
  const fontFamilyMain =
    lang === "cn"
      ? `'Noto Sans SC', Inter, system-ui, sans-serif`
      : `Inter, system-ui, sans-serif`;

  let textContent;
  if (lang === "cn") {
    // VGI(Inter) + " · "(Inter) + 中文(Noto Sans SC) + ™(super)
    textContent = `<tspan font-family="Inter, system-ui, sans-serif" font-weight="600">VGI</tspan><tspan font-family="Inter, system-ui, sans-serif"> · </tspan><tspan font-family="${fontFamilyMain}" font-weight="600">验证型生成式智能</tspan><tspan font-size="7.8" baseline-shift="super">™</tspan>`;
  } else {
    textContent = `<tspan font-weight="600">VGI · Verified Generative Intelligence</tspan><tspan font-size="7.8" baseline-shift="super">™</tspan>`;
  }

  return [
    header([
      `VGI Ingredient Mark · full lockup "${fullText}™" (${label})`,
      `梅斯健康 AI Brand Kit v1.0 — production asset`,
      ...comment,
      `规格：高度 28px，文字 13px。${lang === "cn" ? "VGI 用 Inter，中文部分用 Noto Sans SC" : "全部用 Inter SemiBold"}`,
      `渲染依赖：消费方需加载 ${lang === "cn" ? "Inter + Noto Sans SC" : "Inter"}`,
      `如用于无字体环境（PDF / 印刷），建议在 Illustrator 中 Type → Create Outlines 转 path`,
    ]),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${fullText}">`,
    `  <rect x="0.75" y="0.75" width="${w - 1.5}" height="${h - 1.5}" rx="${r}" ry="${r}" fill="${fillColor}" stroke="${color}" stroke-width="1.5"/>`,
    `  <g transform="translate(${iconX}, ${iconY}) scale(${iconSize / 24})">`,
    `    <path d="${SHIELD_PATH}" fill="none" stroke="${color}" stroke-width="2"/>`,
    `    <path d="${CHECK_PATH}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`,
    `  </g>`,
    `  <text x="${textX}" y="${textY}" font-size="13" letter-spacing="0.02em" fill="${color}">${textContent}</text>`,
    `</svg>`,
    "",
  ].join("\n");
}

// ── 写文件 ─────────────────────────────────────────────────────────────
let count = 0;

// 1. Glyph 6 个变体
const glyphVariants = [
  { name: "currentcolor", color: "currentColor", label: "currentColor", comment: ["在 React 组件 / 母品牌 CSS 上下文中使用，自动跟随 CSS var product-primary"] },
  { name: "reverse", color: REVERSE_COLOR, label: "reverse / 反白", comment: ["用于深色背景。Hero 渐变、深底 banner、暗色模式 UI"] },
  { name: "de", color: PRODUCT_COLOR.de, label: "DeepEvidence #2563EB", comment: ["DE 产品 hard-coded color"] },
  { name: "se", color: PRODUCT_COLOR.se, label: "SeekEvidence #9333EA", comment: ["SE 产品 hard-coded color"] },
  { name: "di", color: PRODUCT_COLOR.di, label: "DeepInsight #0891B2", comment: ["DI 产品 hard-coded color"] },
  { name: "rcp", color: PRODUCT_COLOR.rcp, label: "Rapid Clinical Pulse #0F62FE", comment: ["RCP 产品 hard-coded color"] },
];
for (const v of glyphVariants) {
  writeFileSync(resolve(OUT, `glyph-${v.name}.svg`), makeGlyph(v));
  count++;
}

// 2. Compact (VGI™)
const compactVariants = [
  {
    name: "compact",
    color: "currentColor",
    fillColor: "rgba(255,255,255,0.5)",
    label: "currentColor",
    comment: ["在 React/CSS 上下文使用，跟随 CSS var product-primary"],
  },
  {
    name: "compact-reverse",
    color: REVERSE_COLOR,
    fillColor: "transparent",
    label: "reverse / 反白",
    comment: ["深色背景使用。stroke 用 rgba(255,255,255,0.6)"],
  },
];
// 反白态 stroke 应该是 rgba(255,255,255,0.6) 而非 #FFFFFF
const compactDefaultStroke = "currentColor";
const compactReverseStroke = "rgba(255,255,255,0.6)";

for (const v of compactVariants) {
  // 修补 reverse 模式的 stroke
  if (v.name.endsWith("reverse")) {
    v.color = compactReverseStroke;
    // 但文字仍用白色
    const svg = makeCompact(v);
    writeFileSync(
      resolve(OUT, `${v.name}.svg`),
      svg.replace(/fill="rgba\(255,255,255,0\.6\)"/g, `fill="${REVERSE_COLOR}"`),
    );
  } else {
    writeFileSync(resolve(OUT, `${v.name}.svg`), makeCompact(v));
  }
  count++;
}

// 3. Full (VGI · 全称™) × {cn, en} × {default, reverse}
const fullVariants = [
  {
    name: "full-cn",
    color: "currentColor",
    fillColor: "rgba(255,255,255,0.5)",
    lang: "cn",
    fullText: FULL_TEXT_CN,
    label: "中文 / currentColor",
    comment: ["VGI · 验证型生成式智能™"],
  },
  {
    name: "full-cn-reverse",
    color: compactReverseStroke,
    fillColor: "transparent",
    lang: "cn",
    fullText: FULL_TEXT_CN,
    label: "中文 / reverse",
    comment: ["VGI · 验证型生成式智能™ · 深色背景"],
  },
  {
    name: "full-en",
    color: "currentColor",
    fillColor: "rgba(255,255,255,0.5)",
    lang: "en",
    fullText: FULL_TEXT_EN,
    label: "English / currentColor",
    comment: ["VGI · Verified Generative Intelligence™"],
  },
  {
    name: "full-en-reverse",
    color: compactReverseStroke,
    fillColor: "transparent",
    lang: "en",
    fullText: FULL_TEXT_EN,
    label: "English / reverse",
    comment: ["VGI · Verified Generative Intelligence™ · 深色背景"],
  },
];
for (const v of fullVariants) {
  let svg = makeFull(v);
  if (v.name.includes("reverse")) {
    // 反白态文字用白色
    svg = svg.replace(/fill="rgba\(255,255,255,0\.6\)"/g, `fill="${REVERSE_COLOR}"`);
  }
  writeFileSync(resolve(OUT, `${v.name}.svg`), svg);
  count++;
}

console.log(`Wrote ${count} SVG files to ${OUT}/`);
