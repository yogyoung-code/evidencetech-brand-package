# Vercel 部署指南

3 个站点 → 3 个 Vercel project → 3 个子域名。

## 一次性准备

```bash
# 安装 Vercel CLI（全局）
npm i -g vercel

# 登录（浏览器跳转授权）
vercel login

# 确认登录
vercel whoami
```

## 部署流程

### 1. 本地构建（必做）

```bash
cd ~/Documents/EvidenceTech-Brand-Package/EvidenceTech-Brand-Package
./rebuild-all.sh        # 生成 docs/.vitepress/dist + react/dist
```

> 截图归档失败不影响部署；docs 与 react 必须成功。

### 2. 三站一键部署

```bash
./deploy-vercel.sh
```

脚本依次部署：
- `evidencetech-docs` ← `docs/.vitepress/dist/`
- `evidencetech-site` ← `site/`
- `evidencetech-preview` ← `preview/`

**首次运行**：CLI 会问"link 到哪个 scope / 创建新 project ?" —— 回答 yes 创建即可，project 名按 `--name` 参数自动设。`.vercel/project.json` 会落到各自目录，下次直接复用。

**预览部署**（不上线，仅出 preview URL）：
```bash
PROD_FLAG="" ./deploy-vercel.sh
```

### 3. 绑定子域名

部署成功后每个 project 拿到一个 `<project>-<hash>.vercel.app` 临时域。如果你有自有域名（比如 `aikit.example.com`），按下表在 Vercel Dashboard → Project → Settings → Domains 各自绑定：

| Vercel project | 建议子域名 | 用途 |
|---|---|---|
| `evidencetech-docs` | `docs.<your-root>` | 完整 AI Brand Kit 文档 |
| `evidencetech-site` | `www.<your-root>` 或根域 | 营销站 |
| `evidencetech-preview` | `preview.<your-root>` | 决策档案（公开） |

绑定后 Vercel 会给出 DNS 记录（CNAME 或 A），到域名注册商面板加上即可，5–30 分钟生效。

## 后续更新

任何源文件改完后：

```bash
./rebuild-all.sh && ./deploy-vercel.sh
```

每个 project 会自增版本，旧版本作为 immutable deployment 保留可回滚。

## 切到 Git 集成（推荐进化路径）

CLI 直推适合起步阶段。一旦推到 GitHub，就改用 Git 集成：

1. 把仓库推到 GitHub
2. 在 Vercel 中三个 project 的 Settings → Git → Connect 同一仓库
3. 各自设置 **Root Directory**：
   - `evidencetech-docs` → `docs`（Framework Preset 选 VitePress；Vercel 会自动 `npm run build`，输出 `.vitepress/dist`）
   - `evidencetech-site` → `site`（Framework: Other；Output Directory: `.`）
   - `evidencetech-preview` → `preview`（同上）

> ⚠ Git 集成模式下 docs 站的 `docs/public/{ai-tokens.css,assets,preview,react}` 这 4 个 symlink 在 Vercel 构建机上会失效。届时需要把这 4 项改成实际复制（或加 build hook 提前 rsync）。CLI 模式下我们传的是预构建产物，没这个问题。

## 当前已就绪的文件

- `site/vercel.json` — 静态站配置（cleanUrls + 安全头）
- `preview/vercel.json` — 同上
- `docs/vercel.json` — 用于 dist/ 的同款配置（部署脚本会拷贝过去）
- `deploy-vercel.sh` — 一键部署脚本
- `DEPLOY-VERCEL.md` — 本文档
