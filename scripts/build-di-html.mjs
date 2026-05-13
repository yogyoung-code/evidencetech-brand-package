// 生成 DI 三变体对比 HTML，inline 所有 SVG 内容。
// 输入：preview/di-iconography/elements.json
// 输出：preview/di-iconography/index.html

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(
  readFileSync(resolve(here, "..", "preview", "di-iconography", "elements.json"), "utf8"),
);

const PLACEHOLDER_INNER = `
<line x1="4.5" y1="8" x2="10.5" y2="12" stroke="currentColor" stroke-width="1.4" opacity="0.55"/>
<line x1="10.5" y1="12" x2="8" y2="18.5" stroke="currentColor" stroke-width="1.4" opacity="0.55"/>
<line x1="10.5" y1="12" x2="15" y2="6" stroke="currentColor" stroke-width="1.4" opacity="0.55"/>
<line x1="15" y1="6" x2="18.5" y2="14" stroke="currentColor" stroke-width="1.4" opacity="0.55"/>
<line x1="18.5" y1="14" x2="20" y2="20" stroke="currentColor" stroke-width="1.4" opacity="0.55"/>
<circle cx="4.5" cy="8" r="1.2" fill="currentColor"/>
<circle cx="10.5" cy="12" r="1.5" fill="currentColor"/>
<circle cx="8" cy="18.5" r="1.2" fill="currentColor"/>
<circle cx="15" cy="6" r="1.5" fill="currentColor"/>
<circle cx="18.5" cy="14" r="2.4" fill="currentColor"/>
<circle cx="20" cy="20" r="1.2" fill="currentColor"/>`.trim();

// 4 个家族 icon 用于并排比较：DE / SE / RCP / DI
const DE_INNER = `<path d="M 2 12 H 4.48 A 2 2 0 0 1 6.41 13.46 L 8.76 21.82 A 0.25 0.25 0 0 0 9.24 21.82 L 14.76 2.18 A 0.25 0.25 0 0 1 15.24 2.18 L 17.59 10.54 A 2 2 0 0 0 19.51 12 H 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" transform="translate(0, 1)"/>`;

const SE_INNER = `<path fill="currentColor" d="M67.18,136.25 C60.12,141.84 52.62,142.68 44.87,139.26 C37.04,135.80 33.56,129.01 33.26,120.86 C32.88,110.88 32.86,100.86 33.28,90.89 C33.75,79.86 40.05,72.48 49.78,70.47 C58.47,68.67 67.75,72.86 71.57,80.86 C73.02,83.91 73.88,87.51 73.98,90.90 C74.28,100.71 74.10,110.54 74.05,120.37 C74.01,126.47 71.94,131.76 67.18,136.25 Z"/><path fill="currentColor" d="M125.00,158.75 C124.22,173.22 116.86,179.27 100.93,179.00 C91.24,178.83 83.98,170.04 83.95,158.19 C83.87,123.06 83.82,87.93 83.84,52.80 C83.84,39.77 92.00,31.10 104.04,31.02 C116.22,30.94 124.84,39.87 124.88,52.88 C124.97,88.02 124.97,123.15 125.00,158.75 Z"/><path fill="currentColor" d="M175.97,90.00 C175.94,104.83 176.11,119.15 175.82,133.47 C175.62,142.91 168.54,151.18 159.94,152.91 C150.33,154.84 140.96,150.15 137.05,141.00 C135.84,138.18 135.22,134.90 135.19,131.82 C135.03,114.50 135.00,97.18 135.17,79.86 C135.30,67.24 144.19,57.96 155.65,58.00 C167.12,58.04 175.75,67.38 175.96,80.01 C176.01,83.18 175.97,86.34 175.97,90.00 Z"/><path fill="currentColor" d="M196.12,33.91 C212.03,26.28 227.08,35.33 227.11,52.40 C227.17,87.87 227.04,123.35 227.05,158.83 C227.05,166.40 224.56,173.08 217.87,176.54 C205.50,182.93 186.65,179.39 186.28,160.63 C185.57,124.17 186.06,87.68 186.20,51.21 C186.23,43.91 189.59,38.10 196.12,33.91 Z"/><path fill="currentColor" d="M277.91,117.89 C279.11,133.68 266.97,143.68 252.20,140.37 C243.21,138.35 237.28,130.97 237.13,121.67 C236.96,111.35 237.00,101.02 237.08,90.70 C237.17,78.77 245.31,70.81 257.30,70.75 C269.32,70.70 277.56,78.47 277.83,90.43 C278.04,99.42 277.90,108.41 277.91,117.89 Z"/>`;

const RCP_INNER = `<path d="M 2 12 L 7.8288 12 A 1.5 1.5 0 0 0 9.284 10.8638 L 10.6516 5.3935 A 0.25 0.25 0 0 1 11.1429 5.4292 L 12.3009 17.0087 A 0.25 0.25 0 0 0 12.7969 17.0209 L 13.857 9.953 A 0.25 0.25 0 0 1 14.3384 9.9023 L 15.135 12.0267 A 1.5 1.5 0 0 0 16.5395 13 L 22 13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

function ladder(symId, color = "var(--di-primary)") {
  const sizes = [16, 20, 28, 32, 48, 88];
  return sizes.map((s) =>
    `<div class="size-cell"><span class="label">${s}px</span><svg width="${s}" height="${s}" style="color:${color}"><use href="#${symId}"/></svg></div>`,
  ).join("\n      ");
}

function inspectionGrid(symId) {
  return `
<svg width="240" height="240" viewBox="0 0 24 24">
  <defs>
    <pattern id="grid-${symId}" width="1" height="1" patternUnits="userSpaceOnUse">
      <path d="M 1 0 L 0 0 0 1" fill="none" stroke="rgba(0,0,0,0.06)" stroke-width="0.05"/>
    </pattern>
  </defs>
  <rect width="24" height="24" fill="url(#grid-${symId})"/>
  <line x1="0" y1="12" x2="24" y2="12" stroke="rgba(0,0,0,0.08)" stroke-width="0.04" stroke-dasharray="0.4 0.3"/>
  <line x1="12" y1="0" x2="12" y2="24" stroke="rgba(0,0,0,0.08)" stroke-width="0.04" stroke-dasharray="0.4 0.3"/>
  <use href="#${symId}" style="color:var(--di-primary)"/>
</svg>`;
}

function symbolDef(id, inner, viewBox = "0 0 24 24") {
  return `<symbol id="${id}" viewBox="${viewBox}">${inner}</symbol>`;
}

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>DI icon · 三变体精修对比 (v1.0 candidate)</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;600&family=Teko:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<style>
  :root {
    --di-primary:  #0891B2;
    --de-primary:  #2563EB;
    --se-primary:  #9333EA;
    --rcp-primary: #0F62FE;
    --neutral-100: #E2E8F0;
    --neutral-300: #94A3B8;
    --neutral-500: #64748B;
    --neutral-700: #334155;
    --neutral-900: #0F172A;
  }
  * { box-sizing: border-box; }
  body {
    font-family: "Inter", "Noto Sans SC", system-ui, sans-serif;
    color: #0F172A;
    background: #F8FAFC;
    margin: 0;
    padding: 32px 24px;
    line-height: 1.55;
  }
  .container { max-width: 1200px; margin: 0 auto; }
  h1 { color: #001A51; margin: 0 0 6px; font-size: 26px; }
  h2 {
    color: #001A51; font-size: 17px; margin: 32px 0 12px;
    padding-bottom: 6px; border-bottom: 1px solid var(--neutral-100);
  }
  h3 { font-size: 13px; color: var(--neutral-700); margin: 12px 0 6px; }
  .meta { color: var(--neutral-500); font-size: 13px; margin: 0 0 24px; max-width: 80ch; }
  code {
    font-family: "JetBrains Mono", ui-monospace, monospace;
    font-size: 12px;
    background: #EEF2F6;
    padding: 1px 5px;
    border-radius: 3px;
    color: var(--neutral-700);
    word-break: break-all;
  }
  .card {
    background: #FFFFFF;
    border: 1px solid var(--neutral-100);
    border-radius: 10px;
    padding: 18px 20px;
    margin-bottom: 16px;
  }
  .card.dark {
    background: var(--neutral-900);
    color: #FFFFFF;
    border-color: var(--neutral-700);
  }
  .card.dark h3 { color: #CBD5E1; }
  .panel-title {
    display: flex; align-items: baseline; justify-content: space-between;
    gap: 12px; margin-bottom: 14px;
  }
  .panel-title strong { font-size: 15px; }
  .panel-title em { font-style: normal; font-size: 12px; color: var(--neutral-500); font-family: "JetBrains Mono", monospace; }
  .grid-3 {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px;
  }
  .ladder {
    display: flex; gap: 24px; align-items: flex-end; flex-wrap: wrap;
    padding: 14px 12px; background: #FAFBFD; border-radius: 8px;
  }
  .ladder.dark { background: var(--neutral-900); }
  .size-cell {
    display: flex; flex-direction: column; align-items: center; gap: 6px;
  }
  .size-cell .label {
    font-family: "JetBrains Mono", monospace;
    font-size: 10px; color: var(--neutral-500); letter-spacing: 0.04em;
  }
  .ladder.dark .size-cell .label { color: rgba(255,255,255,0.55); }
  .inspect {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px;
  }
  .inspect-cell {
    background: #FAFBFD;
    border: 1px solid var(--neutral-100);
    border-radius: 8px;
    padding: 14px;
  }
  .inspect-cell svg { display: block; margin: 0 auto; }
  .family-row {
    display: flex; gap: 32px; align-items: flex-end; flex-wrap: wrap;
    padding: 14px 12px; background: #FAFBFD; border-radius: 8px;
  }
  .summary {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-top: 8px;
  }
  .summary div { font-size: 13px; line-height: 1.55; }
  .pick {
    display: inline-block; padding: 4px 10px; border-radius: 999px;
    background: #DEF7EC; color: #03543F; font-size: 11px; font-weight: 600;
    letter-spacing: 0.04em; text-transform: uppercase;
  }

  /* Constellation animation: lines fade in then nodes scale-pop, hub last with overshoot. */
  @keyframes line-fade-in {
    from { opacity: 0; }
    to   { opacity: var(--target-opacity); }
  }
  @keyframes node-pop {
    from { transform: scale(0); }
    50%  { transform: scale(1.08); }
    to   { transform: scale(1); }
  }
  @keyframes hub-pop {
    from { transform: scale(0); }
    50%  { transform: scale(1.18); }
    75%  { transform: scale(0.95); }
    to   { transform: scale(1); }
  }

  .anim-on:hover .anim-line {
    animation: line-fade-in 350ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
    opacity: 0;
  }
  .anim-on:hover .anim-line:nth-of-type(1) { animation-delay: 0ms; }
  .anim-on:hover .anim-line:nth-of-type(2) { animation-delay: 60ms; }
  .anim-on:hover .anim-line:nth-of-type(3) { animation-delay: 120ms; }
  .anim-on:hover .anim-line:nth-of-type(4) { animation-delay: 180ms; }
  .anim-on:hover .anim-line:nth-of-type(5) { animation-delay: 240ms; }

  .anim-on:hover .anim-node {
    animation: node-pop 320ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    transform-origin: center; transform-box: fill-box;
    transform: scale(0);
  }
  .anim-on:hover .anim-node:nth-of-type(1) { animation-delay: 400ms; }
  .anim-on:hover .anim-node:nth-of-type(2) { animation-delay: 480ms; }
  .anim-on:hover .anim-node:nth-of-type(3) { animation-delay: 560ms; }
  .anim-on:hover .anim-node:nth-of-type(4) { animation-delay: 640ms; }
  .anim-on:hover .anim-node:nth-of-type(5) { animation-delay: 720ms; }

  .anim-on:hover .anim-hub {
    animation: hub-pop 480ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    transform-origin: 18.5px 14px; transform-box: fill-box;
    transform: scale(0);
    animation-delay: 800ms;
  }
</style>

<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <defs>
    ${symbolDef("di-baseline", PLACEHOLDER_INNER)}
    ${symbolDef("di-A", data.A.svgInner)}
    ${symbolDef("di-B", data.B.svgInner)}
    ${symbolDef("di-C", data.C.svgInner)}
    ${symbolDef("de-baseline", DE_INNER)}
    <symbol id="se-baseline" viewBox="20 20 280 170">${SE_INNER}</symbol>
    ${symbolDef("rcp-c", RCP_INNER)}
  </defs>
</svg>

</head>
<body>
<div class="container">

  <h1>DI icon · 三变体精修对比</h1>
  <p class="meta">
    占位 SVG（v0）的连线穿过节点圆心、节点尺寸阶层稍弱、与 DE/RCP 的 stroke 风格不同步。本页对比 3 个 production-grade 候选并并排展示，让 Sponsor 选定 v1.0。
    选定后将更新 <code>DIConstellationIcon.tsx</code> 与三份 standalone <code>.svg</code> 资产（默认 / 反白 / 含 nodes-emerge 入场动画）。
  </p>

  <!-- ========== 段 1：尺寸阶梯对比 ========== -->
  <h2>1. 尺寸阶梯（16 / 20 / 28 / 32 / 48 / 88 px）— 浅底</h2>

  <div class="card">
    <div class="panel-title"><strong>v0 占位</strong><em>baseline · 线穿圆心</em></div>
    <div class="ladder">${ladder("di-baseline")}</div>
  </div>

  <div class="card">
    <div class="panel-title"><strong>变体 A · 占位精修</strong><em>line trim 到节点外缘</em></div>
    <div class="ladder">${ladder("di-A")}</div>
  </div>

  <div class="card">
    <div class="panel-title"><strong>变体 B · 与 DE/RCP family rhyme</strong><em>nodes 1.5 / hub 2.5 · stroke 1.6 满 opacity</em></div>
    <div class="ladder">${ladder("di-B")}</div>
  </div>

  <div class="card">
    <div class="panel-title"><strong>变体 C · Hub-as-Star</strong><em>双环 hub · 线 opacity 0.5 压暗</em></div>
    <div class="ladder">${ladder("di-C")}</div>
  </div>

  <!-- ========== 段 2：反白态 ========== -->
  <h2>2. 反白态（Hero / 深底）— 32 / 48 / 88 px</h2>
  <div class="grid-3">
    <div class="card dark">
      <div class="panel-title"><strong>A · 占位精修</strong></div>
      <div class="ladder dark">
        <div class="size-cell"><span class="label">32px</span><svg width="32" height="32" style="color:#FFF"><use href="#di-A"/></svg></div>
        <div class="size-cell"><span class="label">48px</span><svg width="48" height="48" style="color:#FFF"><use href="#di-A"/></svg></div>
        <div class="size-cell"><span class="label">88px</span><svg width="88" height="88" style="color:#FFF"><use href="#di-A"/></svg></div>
      </div>
    </div>
    <div class="card dark">
      <div class="panel-title"><strong>B · family rhyme</strong></div>
      <div class="ladder dark">
        <div class="size-cell"><span class="label">32px</span><svg width="32" height="32" style="color:#FFF"><use href="#di-B"/></svg></div>
        <div class="size-cell"><span class="label">48px</span><svg width="48" height="48" style="color:#FFF"><use href="#di-B"/></svg></div>
        <div class="size-cell"><span class="label">88px</span><svg width="88" height="88" style="color:#FFF"><use href="#di-B"/></svg></div>
      </div>
    </div>
    <div class="card dark">
      <div class="panel-title"><strong>C · Hub-as-Star</strong></div>
      <div class="ladder dark">
        <div class="size-cell"><span class="label">32px</span><svg width="32" height="32" style="color:#FFF"><use href="#di-C"/></svg></div>
        <div class="size-cell"><span class="label">48px</span><svg width="48" height="48" style="color:#FFF"><use href="#di-C"/></svg></div>
        <div class="size-cell"><span class="label">88px</span><svg width="88" height="88" style="color:#FFF"><use href="#di-C"/></svg></div>
      </div>
    </div>
  </div>

  <!-- ========== 段 3：四产品 family check ========== -->
  <h2>3. 与 DE / SE / RCP 并排 — family rhyme 检查</h2>
  <p class="meta">
    DE = stroke ECG，SE = filled bars，RCP = stroke ECG + 横线，DI = nodes + lines。
    DI 是唯一"既有 fill 又有 stroke"的产品图标，是几何上最孤立的。
    B/C 通过对齐 stroke / opacity 让 DI 在并排时不显突兀。
  </p>

  <div class="card">
    <h3>32px wordmark 尺度（icon ≈ 34px）</h3>
    <div class="family-row">
      <div class="size-cell"><span class="label">DE</span><svg width="34" height="34" style="color:var(--de-primary)"><use href="#de-baseline"/></svg></div>
      <div class="size-cell"><span class="label">SE</span><svg width="34" height="34" style="color:var(--se-primary)"><use href="#se-baseline"/></svg></div>
      <div class="size-cell"><span class="label">RCP</span><svg width="34" height="34" style="color:var(--rcp-primary)"><use href="#rcp-c"/></svg></div>
      <div class="size-cell"><span class="label">DI · A</span><svg width="34" height="34" style="color:var(--di-primary)"><use href="#di-A"/></svg></div>
      <div class="size-cell"><span class="label">DI · B</span><svg width="34" height="34" style="color:var(--di-primary)"><use href="#di-B"/></svg></div>
      <div class="size-cell"><span class="label">DI · C</span><svg width="34" height="34" style="color:var(--di-primary)"><use href="#di-C"/></svg></div>
    </div>
  </div>

  <div class="card">
    <h3>88px hero 尺度（icon ≈ 95px）</h3>
    <div class="family-row" style="gap:48px">
      <div class="size-cell"><span class="label">DE</span><svg width="95" height="95" style="color:var(--de-primary)"><use href="#de-baseline"/></svg></div>
      <div class="size-cell"><span class="label">RCP</span><svg width="95" height="95" style="color:var(--rcp-primary)"><use href="#rcp-c"/></svg></div>
      <div class="size-cell"><span class="label">DI · A</span><svg width="95" height="95" style="color:var(--di-primary)"><use href="#di-A"/></svg></div>
      <div class="size-cell"><span class="label">DI · B</span><svg width="95" height="95" style="color:var(--di-primary)"><use href="#di-B"/></svg></div>
      <div class="size-cell"><span class="label">DI · C</span><svg width="95" height="95" style="color:var(--di-primary)"><use href="#di-C"/></svg></div>
    </div>
  </div>

  <!-- ========== 段 4：几何审视 ========== -->
  <h2>4. 几何审视（240px viewBox + 24×24 grid）</h2>
  <div class="inspect">
    <div class="inspect-cell"><h3>A · 占位精修</h3>${inspectionGrid("di-A")}</div>
    <div class="inspect-cell"><h3>B · family rhyme</h3>${inspectionGrid("di-B")}</div>
    <div class="inspect-cell"><h3>C · Hub-as-Star</h3>${inspectionGrid("di-C")}</div>
  </div>

  <!-- ========== 段 5：入场动画 ========== -->
  <h2>5. Constellation 入场动画（hover 卡片触发）</h2>
  <p class="meta">
    DI 与 DE/SE/RCP 的入场动效不同（DE/RCP = stroke-draw，SE = bars-wake-up），DI 用 <strong>nodes-emerge</strong>：
    阶段 1（0-300ms）线条 fade-in 60ms 错峰；阶段 2（400-720ms）非 hub 节点逐个 scale-pop 80ms 错峰；阶段 3（800-1280ms）hub 加大 scale-pop（1.18× 过冲）作为收尾。总时长约 1.3s，符合 02 §1.7 通用规则。
  </p>

  <div class="grid-3">
    <div class="card anim-on">
      <h3>A · 占位精修</h3>
      <svg width="120" height="120" viewBox="0 0 24 24" style="color:var(--di-primary)">
        ${data.A.elements.filter(e=>e.type==='line').map(e =>
          `<line x1="${e.x1.toFixed(4)}" y1="${e.y1.toFixed(4)}" x2="${e.x2.toFixed(4)}" y2="${e.y2.toFixed(4)}" stroke="currentColor" stroke-width="${e.stroke}" stroke-linecap="round" class="anim-line" style="--target-opacity: ${e.opacity}"/>`
        ).join('')}
        ${['N1','N2','N3','N4','N6'].map(k => {
          const n = {N1:[4.5,8,1.2], N2:[10.5,12,1.5], N3:[8,18.5,1.2], N4:[15,6,1.5], N6:[20,20,1.2]}[k];
          return `<circle cx="${n[0]}" cy="${n[1]}" r="${n[2]}" fill="currentColor" class="anim-node"/>`;
        }).join('')}
        <circle cx="18.5" cy="14" r="2.4" fill="currentColor" class="anim-hub"/>
      </svg>
    </div>
    <div class="card anim-on">
      <h3>B · family rhyme</h3>
      <svg width="120" height="120" viewBox="0 0 24 24" style="color:var(--di-primary)">
        ${data.B.elements.filter(e=>e.type==='line').map(e =>
          `<line x1="${e.x1.toFixed(4)}" y1="${e.y1.toFixed(4)}" x2="${e.x2.toFixed(4)}" y2="${e.y2.toFixed(4)}" stroke="currentColor" stroke-width="${e.stroke}" stroke-linecap="round" class="anim-line" style="--target-opacity: ${e.opacity}"/>`
        ).join('')}
        ${['N1','N2','N3','N4','N6'].map(k => {
          const n = {N1:[4.5,8,1.5], N2:[10.5,12,1.5], N3:[8,18.5,1.5], N4:[15,6,1.5], N6:[20,20,1.5]}[k];
          return `<circle cx="${n[0]}" cy="${n[1]}" r="${n[2]}" fill="currentColor" class="anim-node"/>`;
        }).join('')}
        <circle cx="18.5" cy="14" r="2.5" fill="currentColor" class="anim-hub"/>
      </svg>
    </div>
    <div class="card anim-on">
      <h3>C · Hub-as-Star</h3>
      <svg width="120" height="120" viewBox="0 0 24 24" style="color:var(--di-primary)">
        ${data.C.elements.filter(e=>e.type==='line').map(e =>
          `<line x1="${e.x1.toFixed(4)}" y1="${e.y1.toFixed(4)}" x2="${e.x2.toFixed(4)}" y2="${e.y2.toFixed(4)}" stroke="currentColor" stroke-width="${e.stroke}" stroke-linecap="round" class="anim-line" style="--target-opacity: ${e.opacity}"/>`
        ).join('')}
        ${['N1','N2','N3','N4','N6'].map(k => {
          const n = {N1:[4.5,8,1.3], N2:[10.5,12,1.3], N3:[8,18.5,1.3], N4:[15,6,1.3], N6:[20,20,1.3]}[k];
          return `<circle cx="${n[0]}" cy="${n[1]}" r="${n[2]}" fill="currentColor" class="anim-node"/>`;
        }).join('')}
        <g class="anim-hub" style="transform-origin: 18.5px 14px; transform-box: fill-box;">
          <circle cx="18.5" cy="14" r="2.4" fill="none" stroke="currentColor" stroke-width="1"/>
          <circle cx="18.5" cy="14" r="1.4" fill="currentColor"/>
        </g>
      </svg>
    </div>
  </div>

  <!-- ========== 段 6：决策对比 ========== -->
  <h2>6. 决策对比</h2>
  <div class="card">
    <div class="summary">
      <div>
        <strong>A · 占位精修</strong> <span style="color:var(--neutral-500); font-size:11px">最低改动</span>
        <p style="margin:6px 0">
          <strong>优势</strong>：保留占位的视觉气质（线条柔和、不抢戏）。仅修复"线穿圆心"问题。改动最小，决策风险最低。<br>
          <strong>劣势</strong>：与 DE/RCP 风格不同步——线 stroke 1.4 vs DE/RCP 的 2.0，opacity 0.55 vs 1.0。家族 rhyme 弱。
        </p>
      </div>
      <div>
        <strong>B · family rhyme</strong> <span class="pick">推荐</span>
        <p style="margin:6px 0">
          <strong>优势</strong>：节点统一 r=1.5、hub r=2.5；线 stroke=1.6 满 opacity 与 DE/RCP 同步。在四产品矩阵 lockup 中视觉一致。靠尺寸阶层（hub 比 ordinary 大 0.67×）建立 Rising Star 视觉重量，无需额外装饰。<br>
          <strong>劣势</strong>：线条满 opacity 后整体 visual density 略增，与 DI 早期 mood-board 的"轻盈/星空"语义有距离。
        </p>
      </div>
      <div>
        <strong>C · Hub-as-Star</strong> <span style="color:var(--neutral-500); font-size:11px">语义最强</span>
        <p style="margin:6px 0">
          <strong>优势</strong>：双环 hub（实心内圈 + 描边外环）直接映射"被发现的明星 KOL"语义。线条 opacity 0.5 让 hub 视觉跳出。<br>
          <strong>劣势</strong>：双环结构在 16-20px 小尺寸下可能糊掉（实心 r=1.4 vs 外环 r=2.4-stroke=1，分辨需要 ≥ 28px）。N5–N6 距离仅 6.2 单位，外环已是几何上限——未来如调整 N6 位置才能扩。
        </p>
      </div>
    </div>
  </div>

  <h2>7. 决策</h2>
  <p class="meta">
    选 A：保留占位风格；选 B：与 DE/RCP family 一致（推荐）；选 C：双环 hub 语义最强但小尺寸有压力。<br>
    选定后将更新 <code>react/src/icons/DIConstellationIcon.tsx</code>，并产出 <code>preview/di-iconography/variant-{a,b,c}/icon.svg</code>、<code>icon-reverse.svg</code>、<code>icon-animated.svg</code>。
  </p>

</div>
</body>
</html>`;

writeFileSync(
  resolve(here, "..", "preview", "di-iconography", "index.html"),
  html,
);
console.log("Wrote preview/di-iconography/index.html");
