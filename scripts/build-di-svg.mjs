// 从 elements.json 生成 9 个 standalone .svg：variant × {default, reverse, animated} = 9
// 每份 svg 自包含、可在 Figma / 浏览器直接打开。
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(
  readFileSync(resolve(here, "..", "preview", "di-iconography", "elements.json"), "utf8"),
);

const OUT = resolve(here, "..", "preview", "di-iconography");
const DI_PRIMARY = "#0891B2";
const REVERSE = "#FFFFFF";

function header(commentLines) {
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<!--`,
    ...commentLines.map((l) => `  ${l}`),
    `-->`,
  ].join("\n");
}

// 输出元素数组为 SVG 字符串，把 currentColor 替换成具体色。
function elementsToSvg(elems, color) {
  return elems
    .map((e) => {
      if (e.type === "line") {
        return `<line x1="${e.x1.toFixed(4)}" y1="${e.y1.toFixed(4)}" x2="${e.x2.toFixed(4)}" y2="${e.y2.toFixed(4)}" stroke="${color}" stroke-width="${e.stroke}" stroke-linecap="round" opacity="${e.opacity}"/>`;
      } else if (e.type === "circle") {
        const fill = e.fill === "currentColor" ? color : e.fill;
        const stroke = e.stroke === "currentColor" ? color : e.stroke;
        const parts = [
          `cx="${e.cx}"`,
          `cy="${e.cy}"`,
          `r="${e.r}"`,
          fill ? `fill="${fill}"` : null,
          stroke ? `stroke="${stroke}"` : null,
          e.strokeWidth !== undefined ? `stroke-width="${e.strokeWidth}"` : null,
          e.opacity !== undefined && e.opacity !== 1 ? `opacity="${e.opacity}"` : null,
        ].filter(Boolean);
        return `<circle ${parts.join(" ")}/>`;
      }
      return "";
    })
    .join("\n  ");
}

function makeStatic({ key, info, color }) {
  return [
    header([
      `DeepInsight · 星座 icon (variant ${key})`,
      `梅斯健康 AI Brand Kit v1.0 — production candidate`,
      `Color: ${color}`,
      info.desc,
      `Generated: 2026-05-06 by build-di-svg.mjs`,
    ]),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="DeepInsight">`,
    `  ${elementsToSvg(info.elements, color)}`,
    `</svg>`,
    "",
  ].join("\n");
}

// SMIL animated: lines fade-in stagger，nodes 用 r 动画（避免 transform-origin 跨平台兼容问题）。
// 行 0-300ms（5 lines × 60ms 错峰 + 350ms duration），节点 400-720ms，hub 800-1280ms。
function elementsAnimated(elems, color) {
  const lineEls = elems.filter((e) => e.type === "line");
  const circleEls = elems.filter((e) => e.type === "circle");

  // hub 判定：cx=18.5, cy=14（与 N5 一致）
  const isHub = (c) => Math.abs(c.cx - 18.5) < 0.01 && Math.abs(c.cy - 14) < 0.01;

  const out = [];

  // 行 fade-in
  lineEls.forEach((e, i) => {
    const beginMs = i * 60;
    out.push(
      `<line x1="${e.x1.toFixed(4)}" y1="${e.y1.toFixed(4)}" x2="${e.x2.toFixed(4)}" y2="${e.y2.toFixed(4)}" stroke="${color}" stroke-width="${e.stroke}" stroke-linecap="round" opacity="0">
    <animate attributeName="opacity" from="0" to="${e.opacity}" begin="${beginMs}ms" dur="350ms" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.4 0 0.2 1"/>
  </line>`,
    );
  });

  // 普通节点：动画 r 从 0 → r_target × 1.08 → r_target（轻微过冲）
  const ordinaryCircles = circleEls.filter((c) => !isHub(c));
  ordinaryCircles.forEach((e, i) => {
    const beginMs = 400 + i * 80;
    const targetR = e.r;
    const overR = targetR * 1.08;
    const fill = e.fill === "currentColor" ? color : e.fill;
    const stroke = e.stroke === "currentColor" ? color : e.stroke;
    const attrs = [
      `cx="${e.cx}"`,
      `cy="${e.cy}"`,
      `r="0"`, // 起始不可见
      fill ? `fill="${fill}"` : null,
      stroke ? `stroke="${stroke}"` : null,
      e.strokeWidth !== undefined ? `stroke-width="${e.strokeWidth}"` : null,
      e.opacity !== undefined && e.opacity !== 1 ? `opacity="${e.opacity}"` : null,
    ].filter(Boolean).join(" ");
    out.push(
      `<circle ${attrs}>
    <animate attributeName="r" begin="${beginMs}ms" dur="320ms" fill="freeze" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.34 1.56 0.64 1;0.4 0 0.2 1" values="0;${overR};${targetR}"/>
  </circle>`,
    );
  });

  // Hub：所有 hub 元素同步用 r 动画 + 更强过冲（1.18× → 0.95× → 1×）
  const hubCircles = circleEls.filter((c) => isHub(c));
  if (hubCircles.length > 0) {
    const beginMs = 800;
    hubCircles.forEach((e) => {
      const targetR = e.r;
      const peak = targetR * 1.18;
      const dip = targetR * 0.95;
      const fill = e.fill === "currentColor" ? color : e.fill;
      const stroke = e.stroke === "currentColor" ? color : e.stroke;
      const attrs = [
        `cx="${e.cx}"`,
        `cy="${e.cy}"`,
        `r="0"`,
        fill ? `fill="${fill}"` : null,
        stroke ? `stroke="${stroke}"` : null,
        e.strokeWidth !== undefined ? `stroke-width="${e.strokeWidth}"` : null,
        e.opacity !== undefined && e.opacity !== 1 ? `opacity="${e.opacity}"` : null,
      ].filter(Boolean).join(" ");
      out.push(
        `<circle ${attrs}>
    <animate attributeName="r" begin="${beginMs}ms" dur="480ms" fill="freeze" calcMode="spline" keyTimes="0;0.5;0.75;1" keySplines="0.34 1.56 0.64 1;0.4 0 0.2 1;0.4 0 0.2 1" values="0;${peak.toFixed(3)};${dip.toFixed(3)};${targetR}"/>
  </circle>`,
      );
    });
  }

  return out.join("\n  ");
}

function makeAnimated({ key, info, color }) {
  return [
    header([
      `DeepInsight · 星座 icon (variant ${key}) — nodes-emerge 入场动画`,
      `梅斯健康 AI Brand Kit v1.0 — production candidate`,
      `阶段 1：lines fade-in 60ms 错峰`,
      `阶段 2：ordinary nodes scale-pop 80ms 错峰`,
      `阶段 3：hub scale-pop 1.18× 过冲收尾`,
      `Total ~1.3s（02 §1.7 通用规则）`,
      `Color: ${color}`,
    ]),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="DeepInsight animated">`,
    `  ${elementsAnimated(info.elements, color)}`,
    `</svg>`,
    "",
  ].join("\n");
}

let count = 0;
for (const [key, info] of Object.entries(data)) {
  const slug = `variant-${key.toLowerCase()}`;
  mkdirSync(resolve(OUT, slug), { recursive: true });

  writeFileSync(resolve(OUT, slug, "icon.svg"), makeStatic({ key, info, color: DI_PRIMARY }));
  writeFileSync(resolve(OUT, slug, "icon-reverse.svg"), makeStatic({ key, info, color: REVERSE }));
  writeFileSync(resolve(OUT, slug, "icon-animated.svg"), makeAnimated({ key, info, color: DI_PRIMARY }));
  count += 3;
}

console.log(`Wrote ${count} svg files to ${OUT}/{variant-a,b,c}/`);
