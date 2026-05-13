// 从 paths.json 生成 9 个 standalone .svg 资产：
//   variant × {default, reverse, animated} = 3 × 3 = 9
//
// 每份 svg 自包含、无外部依赖、可在 Figma / Sketch / 浏览器直接打开。
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const paths = JSON.parse(
  readFileSync(resolve(here, "..", "preview", "rcp-iconography", "paths.json"), "utf8"),
);

const OUT = resolve(here, "..", "preview", "rcp-iconography");

const RCP_PRIMARY = "#0F62FE";
const REVERSE = "#FFFFFF";

function header(commentLines) {
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<!--`,
    ...commentLines.map((l) => `  ${l}`),
    `-->`,
  ].join("\n");
}

function makeStatic({ d, color, viewBox = "0 0 24 24", strokeWidth = 2 }) {
  return [
    header([
      `Rapid Clinical Pulse · 锐脉 icon`,
      `梅斯健康 AI Brand Kit v1.0 — production asset`,
      `Color: ${color}`,
      `Generated: 2026-05-06 by build-rcp-svg.mjs`,
    ]),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="24" height="24" role="img" aria-label="Rapid Clinical Pulse">`,
    `  <path d="${d}" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`,
    `</svg>`,
    "",
  ].join("\n");
}

function makeAnimated({ d, color, durationS = 1.2 }) {
  // SMIL animate: stroke-dashoffset 从 100 → 0，配合 pathLength=100
  return [
    header([
      `Rapid Clinical Pulse · 锐脉 icon (stroke-draw 入场动画)`,
      `梅斯健康 AI Brand Kit v1.0 — production asset`,
      `符合 02-brand-architecture §1.7.1 阶段 1：1.2s ease-out 描线`,
      `Color: ${color}`,
      `注：SMIL 在主流浏览器可用；如需 React 端动画，请用 CSS keyframes（见 react/preview）`,
    ]),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="Rapid Clinical Pulse animated">`,
    `  <path d="${d}"`,
    `        fill="none" stroke="${color}" stroke-width="2"`,
    `        stroke-linecap="round" stroke-linejoin="round"`,
    `        pathLength="100" stroke-dasharray="100" stroke-dashoffset="100">`,
    `    <animate attributeName="stroke-dashoffset"`,
    `             from="100" to="0"`,
    `             dur="${durationS}s"`,
    `             fill="freeze"`,
    `             calcMode="spline"`,
    `             keyTimes="0;1"`,
    `             keySplines="0.65 0 0.35 1"/>`,
    `  </path>`,
    `</svg>`,
    "",
  ].join("\n");
}

let count = 0;
for (const [key, info] of Object.entries(paths)) {
  const slug = `variant-${key.toLowerCase()}`;
  mkdirSync(resolve(OUT, slug), { recursive: true });

  writeFileSync(
    resolve(OUT, slug, "icon.svg"),
    makeStatic({ d: info.d, color: RCP_PRIMARY }),
  );
  count++;
  writeFileSync(
    resolve(OUT, slug, "icon-reverse.svg"),
    makeStatic({ d: info.d, color: REVERSE }),
  );
  count++;
  writeFileSync(
    resolve(OUT, slug, "icon-animated.svg"),
    makeAnimated({ d: info.d, color: RCP_PRIMARY }),
  );
  count++;
}

console.log(`Wrote ${count} svg files to ${OUT}/{variant-a,b,c}/`);
