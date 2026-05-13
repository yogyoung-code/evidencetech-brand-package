#!/usr/bin/env node
/**
 * 生成 docs/demos/*.md 的薄壳，每个 markdown 内嵌一个 preview HTML iframe。
 */

import fs from 'node:fs';
import path from 'node:path';

const DOCS_DEMOS = path.resolve(new URL('..', import.meta.url).pathname, 'docs/demos');

const PAGES = [
  {
    slug: 'wordmarks',
    title: 'Wordmark 矩阵',
    src: '/preview/wordmarks-preview.html',
    spec: '/architecture/brand-architecture',
    desc: '四产品 logo + endorsement signature 在不同尺寸 / 背景下的渲染。已同步 RCP / DI production v1.0。',
    height: 1800,
  },
  {
    slug: 'endorsement-color',
    title: 'Endorsement 颜色对比',
    src: '/preview/endorsement-color-comparison.html',
    spec: '/architecture/brand-architecture',
    desc: 'endorsement signature 灰度决策档案。最终选定 #666666（参 02 §2 v0.6 修订）。',
    height: 1400,
  },
  {
    slug: 'endorsement-alignment',
    title: 'Endorsement 对齐对比',
    src: '/preview/endorsement-alignment-comparison.html',
    spec: '/architecture/brand-architecture',
    desc: 'endorsement signature 对齐方式决策档案。最终选定与 icon 左对齐而非文字左对齐。',
    height: 1400,
  },
  {
    slug: 'icon-directions',
    title: '图标方向（DI / RCP）',
    src: '/preview/icon-directions-preview.html',
    spec: '/architecture/brand-architecture',
    desc: 'DI 星座 + RCP 锐脉的图标设计档案（含其他备选方向，仅作历史决策回溯）。Production v1.0 见独立 demo。',
    height: 1800,
  },
  {
    slug: 'rcp-iconography',
    title: 'RCP Iconography v1.0',
    src: '/preview/rcp-iconography/index.html',
    spec: '/architecture/brand-architecture',
    desc: 'RCP 3 变体对比（A / B / C，C 已选 · 与 DE fillet 配方对齐）。',
    height: 1600,
  },
  {
    slug: 'di-iconography',
    title: 'DI Iconography v1.0',
    src: '/preview/di-iconography/index.html',
    spec: '/architecture/brand-architecture',
    desc: 'DI 3 变体对比（A / B / C，C 已选 · Hub-as-Star · 双环 hub）。',
    height: 1600,
  },
  {
    slug: 'vgi-mark',
    title: 'VGI Mark 12 standalone SVG',
    src: '/preview/vgi-mark/index.html',
    spec: '/visual/visual-system',
    desc: 'VGI Ingredient Mark 12 个 standalone SVG 资产（glyph 6 + compact 2 + full 4）。',
    height: 1400,
  },
  {
    slug: 'visual-system',
    title: '信任徽章 · CoT · Diff View',
    src: '/preview/visual-system-preview.html',
    spec: '/visual/visual-system',
    desc: 'PITL Verified / AIO Official / VGI™ + Nano-Citation + CoT 动画 + Diff View + 图像政策实时渲染。',
    height: 1900,
  },
  {
    slug: 'master-brand-logos',
    title: '母品牌 Logo 变体',
    src: '/preview/master-brand-logos/index.html',
    spec: '/master-brand/overview',
    desc: '4 变体 × 3 构图（default / reverse / mono-navy / mono-black × en / cn / full）。',
    height: 1600,
  },
  {
    slug: 'master-brand-usage',
    title: '母品牌使用规范（usage.html）',
    src: '/preview/master-brand-logos/usage.html',
    spec: '/master-brand/overview',
    desc: 'PNG 栅格阶梯 + Clear-Space spec + WCAG 64 组对比度 + 图层结构 + 校验清单。',
    height: 2200,
  },
  {
    slug: 'react-components',
    title: 'React 包 9 段视觉验证',
    src: '/react/demo/index.html',
    spec: '/components/overview',
    desc: '@yogyoung-code/ai-brand-kit v0.1.0 — 13 组件实时演示（importmap ESM + dist/）。',
    height: 2200,
  },
];

let count = 0;
for (const p of PAGES) {
  const md = `# Demo · ${p.title}

${p.desc}

<div style="margin: 16px 0;">
  <a href="${p.src}" target="_blank" rel="noopener" style="display:inline-block;padding:6px 12px;border:1px solid #CBD5E1;border-radius:6px;color:#005AA4;text-decoration:none;font-size:13px;margin-right:8px;">↗ 在新窗口打开</a>
  <a href="${p.spec}" style="display:inline-block;padding:6px 12px;border:1px solid #CBD5E1;border-radius:6px;color:#005AA4;text-decoration:none;font-size:13px;">📖 查看 spec 章节</a>
</div>

<iframe
  src="${p.src}"
  loading="lazy"
  style="width:100%;height:${p.height}px;border:1px solid #E2E8F0;border-radius:8px;background:white;"
  title="${p.title}"
></iframe>
`;
  fs.writeFileSync(path.join(DOCS_DEMOS, `${p.slug}.md`), md);
  console.log(`  ✓ docs/demos/${p.slug}.md`);
  count++;
}
console.log(`\n✅ 写入 ${count} 个 demo 页`);
