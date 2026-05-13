# AI Brand Kit · 文档站点

VitePress 静态站点。把 kit 中所有 markdown / preview HTML / React demo / 资产串成可搜索、可分享的内部文档。

## 三命令

```bash
# 1. 同步源 markdown 到 docs/（每次源改动后跑一次）
node ../scripts/sync-docs.mjs
node ../scripts/build-demo-pages.mjs

# 2. 本地开发（实时热更新）
npm install         # 首次
npm run dev         # http://localhost:5173

# 3. 构建静态站点
npm run build       # 输出到 docs/.vitepress/dist/

# 4. 预览构建产物
npm run preview     # http://localhost:4173
```

## 站点结构

```
docs/
├── package.json                 仅含 vitepress 依赖
├── README.md                    本文件
├── .vitepress/
│   └── config.mts               nav / sidebar / 主题
├── public/                      symlinks → ../../preview ../../assets ../../react ../../ai-tokens.css
├── index.md                     landing
├── getting-started.md           入门
├── foundation/                  README + HANDOFF + 00-01（4 页）
├── architecture/                02 brand architecture（1 页）
├── voice/                       03 brand voice（1 页）
├── visual/                      04 visual system（1 页）
├── master-brand/                母品牌总览 + clear-space + a11y + layers + usage（5 页）
├── components/                  组件总览 + trust-layer + logo + master-brand-comp（4 页）
├── governance/                  06 governance + 05 整改 + 站点部署（3 页）
├── demos/                       11 个 iframe demo 页 + index
└── assets-browser/              token 浏览 + 资产下载（2 页）
```

## 内容来源

- **Kit 根的 markdown**（README / HANDOFF / 00-06 / 母品牌 .md）→ 通过 `scripts/sync-docs.mjs` 同步到 docs/。**source of truth 在 kit 根**——同步出来的副本会被覆盖，不要直接编辑。
- **Demo 页**（`docs/demos/*.md`）→ 由 `scripts/build-demo-pages.mjs` 生成。改 PAGES 数组后重跑。
- **站点专属页**（`index.md` / `getting-started.md` / `master-brand/overview.md` / `components/*.md` / `assets-browser/*.md` / `governance/site-deploy.md`）→ 直接编辑。

详见 [`/governance/site-deploy`](/governance/site-deploy)。

## 部署

支持 GitHub Pages / Vercel / 内部 nginx。流程见 site-deploy.md。
