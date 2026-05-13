#!/usr/bin/env node
/**
 * sync-docs.mjs
 *
 * 把 kit 根目录的源 markdown 同步到 docs/ 子文件夹（VitePress 站点的内容目录）。
 * Kit 根目录是 single source of truth。每次源 markdown 改动，运行：
 *   node scripts/sync-docs.mjs
 *
 * 复制时会改写：
 *   - `./preview/...`   → `/preview/...`   (站点 public/ 通过 symlink 暴露)
 *   - `./assets/...`    → `/assets/...`    (同上)
 *   - `./react/...`     → `/react/...`     (同上)
 *   - `./ai-tokens.css` → `/ai-tokens.css`
 *   - `./00-architecture-locked.md` 等 spec 内部互链 → docs/ 路径
 */

import fs from 'node:fs';
import path from 'node:path';

const KIT_ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const DOCS = path.join(KIT_ROOT, 'docs');

// 源 → 目标映射
const COPY_MAP = [
  // Foundation
  ['README.md',                        'foundation/overview.md'],
  ['HANDOFF.md',                       'foundation/handoff.md'],
  ['SESSION-2026-05-08-RECAP.md',      'foundation/session-2026-05-08.md'],
  ['00-architecture-locked.md',        'foundation/architecture.md'],
  ['01-gap-audit.md',                  'foundation/audit.md'],

  // Architecture
  ['02-brand-architecture.md',         'architecture/brand-architecture.md'],

  // Voice 主文档 + 7 子文档（v0.2 全签）
  ['03-brand-voice.md',                'voice/brand-voice.md'],
  ['03a-social-media-voice.md',                'voice/03a-social-media.md'],
  ['03c-email-templates-voice.md',             'voice/03c-email-templates.md'],
  ['03d-error-and-empty-state-voice.md',       'voice/03d-error-empty-state.md'],
  ['03e-china-regionalization.md',             'voice/03e-china-regionalization.md'],
  ['03f-evidence-attestation.md',              'voice/03f-evidence-attestation.md'],
  ['03g-competitive-and-comparison-voice.md',  'voice/03g-competitive.md'],

  // Visual System 主文档 + 3 子文档（v0.2 三签）
  ['04-visual-system.md',              'visual/visual-system.md'],
  ['04a-component-accessibility.md',           'visual/04a-accessibility.md'],
  ['04b-motion-guidelines.md',                 'visual/04b-motion.md'],
  ['04c-photography-illustration-interim.md',  'visual/04c-photography-illustration.md'],

  // Governance 主文档 + 06a + 强制层 + 5 packet 留痕
  ['05-rectification-checklist.md',    'governance/rectification.md'],
  ['06-governance.md',                 'governance/governance.md'],
  ['06a-npm-semver.md',                'governance/06a-npm-semver.md'],
  ['governance/brand-voice-guidelines.md',           'governance/brand-voice-guidelines.md'],
  ['governance/v0.2-batch-review-resolution.md',     'governance/v0.2-resolution.md'],
  ['governance/v0.2-second-round-signoff.md',        'governance/v0.2-signoff.md'],
  ['governance/04-subdocs-batch-review-packet.md',   'governance/04-batch-packet.md'],
  ['governance/v0.3-batch-review-packet.md',         'governance/v0.3-packet.md'],
  ['governance/v0.3-tri-batch-review-packet.md',     'governance/v0.3-tri-packet.md'],
  ['governance/06a-signoff-packet.md',               'governance/06a-packet.md'],

  // Master brand assets
  ['assets/master-brand/CLEAR-SPACE.md',   'master-brand/clear-space.md'],
  ['assets/master-brand/A11Y-CONTRAST.md', 'master-brand/a11y.md'],
  ['assets/master-brand/LAYERS.md',        'master-brand/layers.md'],
];

// 把 spec 文件名 → 站点路径
const SPEC_LINKS = {
  // Foundation
  '00-architecture-locked.md':     '/foundation/architecture',
  '01-gap-audit.md':               '/foundation/audit',
  'README.md':                     '/foundation/overview',
  'HANDOFF.md':                    '/foundation/handoff',
  'SESSION-2026-05-08-RECAP.md':   '/foundation/session-2026-05-08',

  // Architecture
  '02-brand-architecture.md':      '/architecture/brand-architecture',

  // Voice
  '03-brand-voice.md':             '/voice/brand-voice',
  '03a-social-media-voice.md':                '/voice/03a-social-media',
  '03c-email-templates-voice.md':             '/voice/03c-email-templates',
  '03d-error-and-empty-state-voice.md':       '/voice/03d-error-empty-state',
  '03e-china-regionalization.md':             '/voice/03e-china-regionalization',
  '03f-evidence-attestation.md':              '/voice/03f-evidence-attestation',
  '03g-competitive-and-comparison-voice.md':  '/voice/03g-competitive',

  // Visual
  '04-visual-system.md':           '/visual/visual-system',
  '04a-component-accessibility.md':           '/visual/04a-accessibility',
  '04b-motion-guidelines.md':                 '/visual/04b-motion',
  '04c-photography-illustration-interim.md':  '/visual/04c-photography-illustration',

  // Governance
  '05-rectification-checklist.md': '/governance/rectification',
  '06-governance.md':              '/governance/governance',
  '06a-npm-semver.md':             '/governance/06a-npm-semver',
  'brand-voice-guidelines.md':                '/governance/brand-voice-guidelines',
  'v0.2-batch-review-resolution.md':          '/governance/v0.2-resolution',
  'v0.2-second-round-signoff.md':             '/governance/v0.2-signoff',
  '04-subdocs-batch-review-packet.md':        '/governance/04-batch-packet',
  'v0.3-batch-review-packet.md':              '/governance/v0.3-packet',
  'v0.3-tri-batch-review-packet.md':          '/governance/v0.3-tri-packet',
  '06a-signoff-packet.md':                    '/governance/06a-packet',

  // Master brand
  'CLEAR-SPACE.md':                '/master-brand/clear-space',
  'A11Y-CONTRAST.md':              '/master-brand/a11y',
  'LAYERS.md':                     '/master-brand/layers',
};

function rewrite(content, srcPath) {
  let out = content;

  // ./preview/... → /preview/...
  out = out.replace(/\]\(\.\/(preview\/[^)]+)\)/g, '](/$1)');
  out = out.replace(/\]\(\.\.\/(preview\/[^)]+)\)/g, '](/$1)');
  out = out.replace(/\]\(\.\.\/\.\.\/(preview\/[^)]+)\)/g, '](/$1)');

  // ./assets/... → /assets/...
  out = out.replace(/\]\(\.\/(assets\/[^)]+)\)/g, '](/$1)');
  out = out.replace(/\]\(\.\.\/(assets\/[^)]+)\)/g, '](/$1)');
  out = out.replace(/\]\(\.\.\/\.\.\/(assets\/[^)]+)\)/g, '](/$1)');

  // ./react/... → /react/...
  out = out.replace(/\]\(\.\/(react\/[^)]+)\)/g, '](/$1)');
  out = out.replace(/\]\(\.\.\/(react\/[^)]+)\)/g, '](/$1)');

  // ./ai-tokens.css → /ai-tokens.css
  out = out.replace(/\]\(\.\/(ai-tokens\.css)\)/g, '](/$1)');

  // spec 文件互链：替换 ./00-architecture-locked.md → /foundation/architecture 等
  for (const [spec, target] of Object.entries(SPEC_LINKS)) {
    const re = new RegExp(`\\]\\(\\.?/?${spec.replace(/\./g, '\\.')}\\)`, 'g');
    out = out.replace(re, `](${target})`);
    // 兼容裸文件名引用（无 ./ 前缀，如 README §3.1 表格里的 (00-architecture-locked.md)）
    const reBare = new RegExp(`\\]\\(${spec.replace(/\./g, '\\.')}\\)`, 'g');
    out = out.replace(reBare, `](${target})`);
  }

  // 强制头部加上 frontmatter（VitePress 需要 H1 在文件第一行；如果文档已有 # 标题，跳过）
  // 不动 — VitePress 会自动从第一行 H1 取 title

  // 在文件末尾追加来源信息
  const note = `\n\n---\n\n::: tip 文档来源\n本页由 \`scripts/sync-docs.mjs\` 自动从 kit 根的 [\`${srcPath}\`](https://github.com/) 同步。**不要直接编辑此文件**——所有修改请改源文件后重跑 sync 脚本。\n:::\n`;
  if (!out.includes('文档来源')) out += note;

  return out;
}

let copied = 0;
for (const [src, dst] of COPY_MAP) {
  const srcPath = path.join(KIT_ROOT, src);
  const dstPath = path.join(DOCS, dst);
  if (!fs.existsSync(srcPath)) {
    console.warn(`  ⚠ skip (源不存在): ${src}`);
    continue;
  }
  fs.mkdirSync(path.dirname(dstPath), { recursive: true });
  const content = fs.readFileSync(srcPath, 'utf8');
  const rewritten = rewrite(content, src);
  fs.writeFileSync(dstPath, rewritten);
  console.log(`  ✓ ${src.padEnd(45)} → docs/${dst}`);
  copied++;
}
console.log(`\n✅ 已同步 ${copied} 个文件到 docs/`);
