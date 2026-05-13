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

## Git 集成模式（push 自动 deploy + PR 预览）

仓库推到 GitHub 后切此模式。前置准备已就绪：
- 4 个 docs/public symlink → 已替换为真实复制 + sync 脚本
- `vercel-build.sh` 脚本（仓库根）—— docs project 的 CI 入口
- `sync-docs-public.sh` —— 在 docs prebuild 钩子中自动跑

### 在 Vercel Dashboard 创建 3 个 project

每个 project 都 **Connect to Git** 同一仓库 `yogyoung-code/evidencetech-brand-package`，分别按下表设置：

| Project | Root Directory | Framework | Build Command | Output Directory | Install Command |
|---|---|---|---|---|---|
| `evidencetech-docs` | `.` | Other | `bash vercel-build.sh` | `docs/.vitepress/dist` | （留空） |
| `evidencetech-site` | `site` | Other | （留空） | `.` | （留空） |
| `evidencetech-preview` | `preview` | Other | （留空） | `.` | （留空） |

> docs project 的 Root Directory 必须是 `.`（仓库根），因为 `vercel-build.sh` 需要先 build react 包再 build docs。Site/preview 是纯静态，直接用各自子目录即可。

### 触发部署

- **Production**：push 到 `main` 分支 → 3 个 project 各自触发 production deploy
- **Preview**：push 到任意非 main 分支 / 开 PR → 3 个 project 各自出预览 URL（贴在 PR 评论里）

### Production / Preview 域名

- Production：在每个 project Settings → Domains 绑你的子域名
- Preview：自动生成 `<project>-<branch>-<hash>.vercel.app`

## 当前已就绪的文件

| 文件 | 用途 |
|---|---|
| `site/vercel.json` | 静态站配置（cleanUrls + 安全头） |
| `preview/vercel.json` | 同上 |
| `docs/vercel.json` | 用于 dist/ 的同款配置（CLI 部署脚本会拷贝过去） |
| `vercel-build.sh` | Git 集成模式下 docs project 的 CI 入口 |
| `scripts/sync-docs-public.sh` | 把仓库根 4 个源同步到 docs/public（替代 symlink） |
| `deploy-vercel.sh` | CLI 一键部署脚本 |
| `DEPLOY-VERCEL.md` | 本文档 |
