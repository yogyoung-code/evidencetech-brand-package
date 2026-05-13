# 站点部署 / 维护

VitePress 站点的 dev / build / 部署流程，以及 spec 同步触发条件。

## 目录结构

```
EvidenceTech-Brand-Package/
├── docs/                              ← VitePress 站点根
│   ├── package.json                   仅含 vitepress 依赖
│   ├── README.md                      命令速查
│   ├── .vitepress/
│   │   └── config.mts                 nav / sidebar / 主题配置
│   ├── public/                        symlinks 指向 kit 根的 preview/ assets/ react/ ai-tokens.css
│   ├── index.md                       landing
│   ├── getting-started.md
│   ├── foundation/                    8 份 spec 同步而来
│   ├── architecture/
│   ├── voice/
│   ├── visual/
│   ├── master-brand/                  4 个母品牌页
│   ├── components/                    4 个组件页
│   ├── governance/                    3 个治理页
│   ├── demos/                         11 个 iframe demo 页
│   └── assets-browser/                token 浏览 + 资产下载
├── scripts/
│   ├── sync-docs.mjs                  同步源 .md → docs/
│   └── build-demo-pages.mjs           生成 11 个 demo 页
└── (kit 根的 markdown source of truth)
    README.md / HANDOFF.md / 00-06.md / assets/master-brand/*.md
```

## 三命令

### dev（本地开发）

```bash
cd docs && npm run dev
# 默认 http://localhost:5173
```

VitePress 实时热更新；改 `docs/**/*.md` 即时生效。

### build（生成静态站点）

```bash
cd docs && npm run build
# 输出 docs/.vitepress/dist/
```

`dist/` 即可上传到任何静态 host（GitHub Pages / Vercel / 内部 nginx）。

### serve（本地预览构建产物）

```bash
cd docs && npm run preview
# 默认 http://localhost:4173
```

## 内容更新流程

### 修改了源 markdown（00-06 / README / HANDOFF / 母品牌 .md）

```bash
# 1. 改 kit 根的源文件
vim 02-brand-architecture.md

# 2. 同步到 docs/
node scripts/sync-docs.mjs

# 3. （可选）跑 dev 验证
cd docs && npm run dev
```

`sync-docs.mjs` 会：
- 复制 12 个源 markdown 到 docs/ 对应位置
- 重写相对链接（`./preview/...` → `/preview/...`、spec 互链 → 站点路径）
- 在末尾追加「文档来源」note 提醒不要直接编辑同步出来的副本

**红线**：不要直接编辑 `docs/foundation/architecture.md` 等同步出来的文件，每次同步都会被覆盖。改 kit 根的源文件，然后跑 sync。

### 修改了 docs/ 站点专属文件

直接改即可。这些文件不是从 kit 根同步：

- `docs/index.md` — landing
- `docs/getting-started.md`
- `docs/master-brand/overview.md`
- `docs/components/*.md`
- `docs/demos/index.md`（其余 demo 页由脚本生成）
- `docs/assets-browser/*.md`
- `docs/governance/site-deploy.md`（本文件）

### 增改 demo 页

```bash
vim scripts/build-demo-pages.mjs   # 改 PAGES 数组
node scripts/build-demo-pages.mjs   # 重新生成
```

### 改 nav / sidebar 结构

直接改 `docs/.vitepress/config.mts`。

## 部署选项

### 选项 A：GitHub Pages（推荐内部）

```yaml
# .github/workflows/docs.yml
name: Build Docs
on: { push: { branches: [main], paths: ['docs/**', '*.md', 'assets/**', 'preview/**', 'react/**'] } }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: node scripts/sync-docs.mjs && node scripts/build-demo-pages.mjs
      - run: cd docs && npm ci && npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: docs/.vitepress/dist }
  deploy:
    needs: build
    permissions: { pages: write, id-token: write }
    runs-on: ubuntu-latest
    steps: [ { uses: actions/deploy-pages@v4 } ]
```

### 选项 B：内部 nginx

```bash
# 在 CI / 本地：
node scripts/sync-docs.mjs
node scripts/build-demo-pages.mjs
cd docs && npm ci && npm run build

# 把 docs/.vitepress/dist/ 整个 rsync 到 nginx 静态目录
rsync -av --delete docs/.vitepress/dist/ user@host:/var/www/ai-brand-kit/
```

### 选项 C：Vercel

直接连 GitHub repo，build command `cd docs && npm run build`，output dir `docs/.vitepress/dist`。pre-build hook 跑 sync 脚本。

## 维护节奏

| 触发 | 动作 |
|---|---|
| 改源 markdown | `sync-docs.mjs` → build |
| 改 demo HTML（preview/*.html） | 不需要重新跑脚本，iframe 自动重新加载（symlink 实时） |
| 改 React 包 | `cd react && npm run build` 后 react/demo iframe 自动看到新版 |
| 加新 spec 章节 | 改 `scripts/sync-docs.mjs` 的 `COPY_MAP` 与 `SPEC_LINKS`，加新一行；改 `config.mts` 的 nav / sidebar |
| 新增母品牌资产 | 重跑 `scripts/build-master-brand-png.mjs` 或对应 build 脚本；symlink 自动同步到 docs/public/assets/ |
| 季度母品牌 sync | 见 [06 Governance](/governance/governance) §3 |

## 升级 VitePress

```bash
cd docs && npm update vitepress
# 跑 build 验证 breaking change
npm run build
```

VitePress 1.x 的 config schema 比较稳定；如遇 breaking change 看官方迁移指南。

## 当前版本

- VitePress: 见 `docs/package.json`
- Node: ≥ 20 推荐
- 站点首次发布：2026-05-06
- 域名 / SSO：暂未指定（本地 dev / build 即可使用）
