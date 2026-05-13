// 从用户上传的 AI 文件（已转 SVG）生成母品牌 logo 的 reverse / mono-navy / mono-black 变体。
// 同时生成 CN-only / EN-only / full 三种构图，每个构图 4 个色变体（含 default）。
//
// 输入：
//   /tmp/master-brand-extract/logo-original.svg  ← pdftocairo 从 .ai 转出的 SVG（含 EN+CN）
//   或 (兜底) ../uploads/梅斯logo中英文版.ai 经此脚本调用 pdftocairo 转出
//
// 输出：
//   assets/master-brand/
//     {default,reverse,mono-navy,mono-black}-{en,cn,full}.svg  共 12 个

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const here = dirname(fileURLToPath(import.meta.url));
const KIT_ROOT = resolve(here, "..");
const ASSETS_OUT = resolve(KIT_ROOT, "assets", "master-brand");
const TMP = "/tmp/master-brand-extract";
const SOURCE_AI = resolve(KIT_ROOT, "..", "..", "uploads", "梅斯logo中英文版.ai");

mkdirSync(ASSETS_OUT, { recursive: true });
mkdirSync(TMP, { recursive: true });

// ── 步骤 1：从 .ai 提取 SVG（如果还没提取过） ───────────────────────────
const SOURCE_SVG = resolve(TMP, "logo-original.svg");
if (!existsSync(SOURCE_SVG)) {
  console.log("[1/3] 从 .ai 提取 SVG ...");
  const sourcePdfCopy = resolve(TMP, "source.pdf");
  execSync(`cp "${SOURCE_AI}" "${sourcePdfCopy}"`);
  execSync(`pdftocairo -svg "${sourcePdfCopy}" "${SOURCE_SVG}"`);
} else {
  console.log("[1/3] 复用已提取的 SVG（/tmp/master-brand-extract/logo-original.svg）");
}

const sourceSvg = readFileSync(SOURCE_SVG, "utf8");

// ── 步骤 2：颜色 + viewBox 参数 ──────────────────────────────────────────
// 原始 4 色（pdftocairo 用 rgb(percentage) 形式）
const ORIGINAL_COLORS = {
  navy: "rgb(0%,10.195923%,31.764221%)",   // #001A51 母品牌 navy
  blue: "rgb(0%,35.293579%,64.31427%)",    // #005AA4 主蓝
  cyan: "rgb(0%,68.235779%,85.882568%)",   // #00AEDB cyan accent
  grey: "rgb(39.99939%,39.99939%,39.99939%)", // #666666 slogan grey
};

// viewBox 拆分（来自原 SVG `viewBox="0 0 6882 3792"`）
const VIEWBOX = {
  full: { x: 0,    y: 0,    w: 6882, h: 3792 },
  en:   { x: 0,    y: 0,    w: 6882, h: 1900 },
  cn:   { x: 0,    y: 1900, w: 6882, h: 1892 },
};

// 变体配色：每变体把 4 色都映射到目标色
const VARIANTS = {
  default: { // 原色保留（仅做 viewBox 裁切）
    map: null,
    desc: "默认彩色 — 浅底使用",
  },
  reverse: {
    map: { navy: "#FFFFFF", blue: "#FFFFFF", cyan: "#FFFFFF", grey: "rgba(255,255,255,0.78)" },
    desc: "反白 — 深底使用（hero 渐变 / dark UI / 暗色封面）。slogan 用 78% 白与 AI Brand Kit endorsement reverse 同源",
  },
  "mono-navy": {
    map: { navy: "#001A51", blue: "#001A51", cyan: "#001A51", grey: "#001A51" },
    desc: "单色 navy — 母品牌 navy 单色印刷、信纸抬头、单色合同封面",
  },
  "mono-black": {
    map: { navy: "#000000", blue: "#000000", cyan: "#000000", grey: "#000000" },
    desc: "单色黑 — 传真、单色复印、低预算印刷品",
  },
};

// ── 步骤 3：生成 ─────────────────────────────────────────────────────────
function fmt(v) {
  return Number.parseFloat(Number(v).toFixed(4)).toString();
}

function buildVariant(variantKey, layoutKey) {
  const variant = VARIANTS[variantKey];
  const vb = VIEWBOX[layoutKey];
  let svg = sourceSvg;

  // 替换 viewBox + width + height
  const newViewBox = `viewBox="${vb.x} ${vb.y} ${vb.w} ${vb.h}"`;
  svg = svg.replace(/viewBox="[^"]+"/, newViewBox);
  svg = svg.replace(/width="\d+pt"\s+height="\d+pt"/, `width="${vb.w}pt" height="${vb.h}pt"`);

  // 替换颜色
  if (variant.map) {
    for (const [colorKey, originalRgb] of Object.entries(ORIGINAL_COLORS)) {
      const target = variant.map[colorKey];
      svg = svg.split(originalRgb).join(target);
    }
  }

  // 在 <svg ...> 标签后插入元数据注释
  const meta = [
    `<!-- MedSci Healthcare master brand · ${variantKey} · ${layoutKey === "full" ? "full canvas (EN + CN)" : layoutKey.toUpperCase()} -->`,
    `<!-- ${variant.desc} -->`,
    `<!-- 最小可用尺寸：24px（高度方向）；低于此尺寸 dot-spiral 节点会糊化、字符细节丢失 -->`,
    `<!-- 决策档案：preview/master-brand-logos/README.md；母品牌 W2 锦上添花资产（PNG 栅格 / source AI / a11y 报告等）尚未到货 -->`,
    `<!-- Generated 2026-05-06 from "梅斯logo中英文版.ai" by scripts/build-master-brand-svg.mjs -->`,
  ].join("\n");
  svg = svg.replace(/(<svg[^>]+>)/, `$1\n${meta}`);

  return svg;
}

console.log("[2/3] 生成变体 SVG ...");
let count = 0;
for (const variantKey of Object.keys(VARIANTS)) {
  for (const layoutKey of Object.keys(VIEWBOX)) {
    const svg = buildVariant(variantKey, layoutKey);
    const filename = `${variantKey}-${layoutKey}.svg`;
    writeFileSync(resolve(ASSETS_OUT, filename), svg);
    count++;
  }
}

console.log(`[3/3] 完成：${count} 个 SVG 已写入 ${ASSETS_OUT}/`);
