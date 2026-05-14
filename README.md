# 梅斯健康 AI Brand Kit · v1.0

**版本**：v1.0 · 2026-05-05 · Locked
**适用范围**：DeepEvidence · SeekEvidence · DeepInsight · Rapid Clinical Pulse 四个 AI 产品
**关系**：在 MedSci Healthcare Brand Guidelines v1.1 母品牌之上的子品牌包。母品牌红线全部继承，明确偏离条款见 §2。
**维护方**：市场 / 品牌团队
**仓库**：[github.com/yogyoung-code/evidencetech-brand-package](https://github.com/yogyoung-code/evidencetech-brand-package)

```bash
git clone git@github.com:yogyoung-code/evidencetech-brand-package.git
cd evidencetech-brand-package
./rebuild-all.sh   # 首次需要构建 react + docs
./start-all.sh     # 本地预览 3 个站
```

---

## 1. 这个 Kit 是什么

把战略 PDF 中"梅斯健康 AI 产品矩阵"散落的视觉与文字概念，转换成可执行、可治理的子品牌系统。让四个 AI 产品在并排时被识别为同一家族（branded house with shared trust layer），同时各自保留独立色相 + 独立 UI 设计语言。

**核心战略选择**（Sponsor 拍板）：
- **Branded house**（参 Atlassian / Microsoft 365 模式），不是 sub-brand endorsement——四产品各有独立色相、字体阵营、形状语言
- 通过共享的"信任层 + 命名 + 文案 + endorsement signature"绑定为家族
- 中文为主语言，英文为伴随（与母品牌 v1.1 的 EN-default 相反）

---

## 2. 经 Sponsor 拍板的 v1.1 母品牌偏离条款

| 条款 | 母品牌 v1.1 规定 | AI Brand Kit 偏离 | 拍板时间 |
|---|---|---|---|
| 色彩系统 | 单色相蓝系 + Logo 青强调 | 每个产品独立主色（蓝/紫/teal/IBM 蓝） | 2026-05-05 |
| 主语言 | 英文为主，中文为伴随 | **中文为主，英文为辅** | 2026-05-05 |
| 字体 Display | Footlight MT Pro | Wordmark = **Teko**；产品内部字体各自独立 | 2026-05-05 |
| 渐变 | 三组 certified gradients 唯一 | 每产品自己的 hero 渐变（4 个新增） | 2026-05-05 |
| 禁用词 | "zero-hallucination" 等 | **沿用 + 中文等价词扩展** | 2026-05-05 |

**未偏离**（严格沿用母品牌）：
- 字距、间距、圆角、阴影、动效曲线、a11y 基线（WCAG 2.1 AA）
- "no emoji" / "no stock photo" / "no AI-generated medical imagery (FTC)" 三条红线
- 母品牌 logo 完整性（不重绘、不重着色、不变形）
- Diff View 的 error / success token 复用，不开新色

---

## 3. 文件清单

### 3.1 文档（按阅读顺序）

| 文件 | 状态 | 内容 |
|---|---|---|
| [`README.md`](./README.md) | ✅ v1.0 | 本文件，入口与索引 |
| [`00-architecture-locked.md`](./00-architecture-locked.md) | ✅ Locked | 架构层决策：branded house、四产品色彩 / 字体矩阵、信任层、Endorsement signature |
| [`01-gap-audit.md`](./01-gap-audit.md) | ✅ v0.1 | 三个 Cloud Run 原型（DE/SE/RCP）与本 kit 的差距清单 |
| [`02-brand-architecture.md`](./02-brand-architecture.md) | ✅ v0.6 | Logo（图标 + 双色 wordmark）+ Endorsement signature + VGI mark + RCP 贯穿横线 + 命名系统 |
| [`03-brand-voice.md`](./03-brand-voice.md) | ✅ v0.1 | CN 主 EN 辅、4 条原则、双受众 messaging matrix、扩展禁用词、写作微规则 |
| [`04-visual-system.md`](./04-visual-system.md) | ✅ v0.2 | 三大信任徽章 + Nano-Citation + CoT 动画 + Diff View + Progressive Disclosure + 图像政策 |
| [`05-rectification-checklist.md`](./05-rectification-checklist.md) | ✅ v0.1 | 三个原型按 kit 整改的具体清单（不做实际改造，只列清单） |
| [`06-governance.md`](./06-governance.md) | ✅ v0.1 | 版本号、变更流程、与母品牌 sync cadence |

### 3.2 资产

| 文件 | 内容 |
|---|---|
| [`ai-tokens.css`](./ai-tokens.css) | 生产级 CSS 变量与组件 class，可直接 import 到产品 globals.css |
| [`assets/master-brand/`](./assets/master-brand/) | 母品牌 12 SVG（4 变体 × 3 构图）+ 75 PNG 栅格 + 3 份规范文档（CLEAR-SPACE / A11Y-CONTRAST / LAYERS）+ a11y-contrast.json |

### 3.3 预览页（视觉验证用，不进生产）

| 文件 | 内容 |
|---|---|
| [`preview/wordmarks-preview.html`](./preview/wordmarks-preview.html) | 四产品 logo + endorsement signature 在不同尺寸 / 背景下的渲染 |
| [`preview/icon-directions-preview.html`](./preview/icon-directions-preview.html) | DI 星座 + RCP 锐脉的图标设计档案（含其他备选方向） |
| [`preview/visual-system-preview.html`](./preview/visual-system-preview.html) | 三大信任徽章 + CoT 动画 + Diff View + 图像政策 |
| [`preview/endorsement-alignment-comparison.html`](./preview/endorsement-alignment-comparison.html) | endorsement signature 对齐方式决策档案 |
| [`preview/endorsement-color-comparison.html`](./preview/endorsement-color-comparison.html) | endorsement signature 灰度决策档案 |
| [`preview/rcp-iconography/index.html`](./preview/rcp-iconography/index.html) | RCP 图标 v1.0 决策档案（3 变体对比，已选 variant C） |
| [`preview/di-iconography/index.html`](./preview/di-iconography/index.html) | DI 图标 v1.0 决策档案（3 变体对比，已选 variant C · Hub-as-Star） |
| [`preview/vgi-mark/index.html`](./preview/vgi-mark/index.html) | VGI Mark 12 standalone SVG 资产预览 |
| [`preview/master-brand-logos/index.html`](./preview/master-brand-logos/index.html) | 母品牌 4 变体 × 3 构图预览 |
| [`preview/master-brand-logos/usage.html`](./preview/master-brand-logos/usage.html) | 母品牌使用规范（PNG 栅格 / Clear-Space / A11y 64 组 / 图层结构 / 校验清单） |
| [`react/demo/index.html`](./react/demo/index.html) | React 包 9 段视觉验证 |

### 3.4 文档站点（VitePress）

| 文件 | 内容 |
|---|---|
| [`docs/`](./docs/) | VitePress 静态站点根（46 HTML 页 · build 通过） |
| [`docs/README.md`](./docs/README.md) | 三命令速查（dev / build / preview） |
| [`docs/.vitepress/config.mts`](./docs/.vitepress/config.mts) | nav + sidebar + 主题配置 |
| [`scripts/sync-docs.mjs`](./scripts/sync-docs.mjs) | kit 根 .md → docs/ 同步（重写相对链接） |
| [`scripts/build-demo-pages.mjs`](./scripts/build-demo-pages.mjs) | 11 个 iframe demo 页生成器 |

启动：`cd docs && npm install && npm run dev`（http://localhost:5173）。

---

## 4. 30 秒速读

**家族识别度**：四产品 logo 在并排时通过四件事被识别为同一家族——
1. 同一 wordmark 字体（Teko Medium mixed-case，RCP 例外为缩写）
2. 同一 endorsement signature 格式（"由 梅斯健康 出品" / "by MedSci Healthcare"，固定 `#666666`）
3. 同一信任层（PITL Verified / AIO Official / VGI ingredient mark），通过 `--product-primary` CSS 变量自动着色
4. 同一交互模式（纳米级引用 [n] / CoT 思维链动画 / Diff View 红绿 / Progressive Disclosure L1-L3）

**四产品色彩**：

| 产品 | Wordmark + UI Primary | 设计语言 |
|---|---|---|
| DeepEvidence | `#2563EB`（Tailwind blue-600） | 圆角 + 阴影（shadcn 风格） |
| SeekEvidence | `#9333EA`（Tailwind purple-600） | 圆角 + 阴影（shadcn 风格） |
| DeepInsight | `#0891B2`（teal-600，暂定） | TBD |
| RCP | `#0F62FE`（IBM Blue 60） | IBM Carbon（Plex Sans/Mono、零圆角输入） |

**RCP 三处独有视觉**：
- Wordmark 仅 "RCP" 三字母全黑
- 彩色贯穿横线（icon 右侧 H 22 段水平延伸穿过文字）
- 内部 UI 字体保留 IBM Plex（与其他三产品的 Inter 不同）

---

## 5. 工程接入要点（给前端工程师）

### 5.1 CSS Token

```css
/* product/styles/globals.css */
@import url('../master-brand/colors_and_type.css');   /* 母品牌 v1.1 */
@import url('../ai-brand-kit/ai-tokens.css');         /* 本 kit */
/* 产品自己的 tailwind / 局部 token 在最后 */
```

### 5.2 产品根容器加 scope class

```html
<body class="brand-de">  <!-- 或 brand-se / brand-di / brand-rcp -->
  <!-- 信任徽章自动跟随产品色 -->
</body>
```

### 5.3 信任徽章用法（默认 = 紧凑缩写；--full = 完整描述）

```html
<span class="badge-pitl">…PITL</span>
<span class="badge-pitl badge-pitl--full">…PITL Verified</span>
<span class="badge-aio">…AIO</span>
<span class="vgi-mark">…VGI™</span>
```

### 5.4 RCP 贯穿横线

详见 `02-brand-architecture.md` §1.7.1 与 `ai-tokens.css` §8。所有数值已 token 化，工程实现按 spec 即可。

---

## 6. 治理速查

- 任何 token 层变更通过 `ai-tokens.css` PR 流程；市场负责人 + Tech Lead 双签
- 大版本（v0.x → v1.0、v1.x → v2.0）需 Sponsor 拍板
- 与母品牌 v1.1 sync cadence：每季度对照一次
- 完整治理流程见 [`06-governance.md`](./06-governance.md)

---

## 7. 决策档案（供回溯）

如未来对某条规则疑问，可按以下顺序回溯：

| 问 | 看哪里 |
|---|---|
| "为什么 wordmark 是 mixed-case 不是全大写？" | `02` v0.2 修订笔记（基于 DE/SE 实际 logo 动效） |
| "为什么 wordmark 主色等于 UI 主色？" | `02` v0.3 修订笔记（Sponsor 决策） |
| "为什么 RCP wordmark 是缩写不是全名？" | `02` v0.5 修订笔记 + `preview/icon-directions-preview.html` "已选定"区 |
| "为什么 endorsement signature 是 #666666？" | `02` v0.6 修订 + `preview/endorsement-color-comparison.html` |
| "为什么 endorsement 与 icon 左对齐而不是文字左对齐？" | `preview/endorsement-alignment-comparison.html` |
| "为什么 DI 是星座不是雷达？" | `preview/icon-directions-preview.html` "已选定"区 + 决策表 |
| "为什么 AIO icon 改成折角文件？" | `04` v0.2 修订笔记（小尺寸不清晰问题） |
| "为什么徽章默认显示缩写不显示完整描述？" | `04` v0.2 修订笔记 |

---

## 8. 母品牌红线最终自检（v1.0 Locked）

| 母品牌 v1.1 红线 | 本 kit 状态 |
|---|---|
| Brand name 拼写 `MedSci Healthcare`（不全大写） | ✅ 全文遵守 |
| 母品牌 logo 完整性（不重绘 / 不重着色 / 不变形） | ✅ 仅在 §4 co-brand 场景出现，使用原 SVG |
| 子 slogan 固定格式 "AI-Enabled. Physician-Verified. Globally Ready." | ✅ AI 子品牌不复用此 slogan，子品牌有自己的定位语句 |
| 绿色仅用于 success state | ✅ 仅在 Diff View 新增高亮处使用 success-500 |
| 禁用词清单（zero-hallucination 等） | ✅ §6 沿用 + 中文等价扩展 |
| 数据 claim 必带年份 + 来源 | ✅ Brand Voice §7.1 强制规则 |
| 证据 claim 配徽章（Verified / In Development / On Request / Placeholder） | ✅ 沿用母品牌四件徽章 + AI 子品牌新增 PITL/AIO/VGI |
| 三组 certified gradients 唯一 | ⚠️ **偏离**：每产品自己的 hero 渐变（4 个新增），见 §2 偏离条款 |
| 无 emoji / 无 stock photo / 无 AI 生成医学影像 | ✅ §7 图像政策严格沿用 |
| 字体栈：Footlight MT Pro + Inter + JetBrains Mono + Noto Serif SC | ⚠️ **偏离**：新增 Teko 用于 wordmark；RCP 内部用 IBM Plex Sans/Mono；见 §2 偏离条款 |
| WCAG 2.1 AA（正文 ≥ 4.5:1） | ✅ 所有 token 配色经对比度校验 |

**所有偏离均经 Sponsor 拍板并记录在 §2**。其余红线无偏离。

---

## 9. 未交付内容（明确不在 v1.0 范围）

- ❌ Figma 组件库（Sponsor 决定 v1.0 不做，v2.0 视团队需求评估）
- ❌ 实际改造 DE/SE/RCP 三个 Cloud Run 原型（v1.0 仅交付整改清单 `05`）
- ❌ DI 产品的视觉资产（DI 尚未开始开发）
- ✅ DI / RCP 图标的生产级矢量化（2026-05-06 完成，variant C · 决策档案在 `preview/{di,rcp}-iconography/`）
- ✅ VGI Ingredient Mark 的最终 SVG 资产（2026-05-06 完成，12 standalone SVG 在 `preview/vgi-mark/`）
- ✅ 母品牌 reverse / monochrome logo 变体 + 锦上添花资产（2026-05-06 完成，12 SVG + 75 PNG + Clear-Space / A11y / Layers 规范文档；剩余 sign-off 项见 HANDOFF §10.4）

---

## 10. 联系与反馈

- 内容/规则疑问 → 市场负责人
- token / CSS / SVG 资产 → Tech Lead
- 大版本变更建议 → Sponsor

> 本文档与配套资产构成 AI Brand Kit v1.0 完整交付。

---

## 11. 本地脚本与部署

仓库根目录提供 5 个脚本，覆盖"本地预览 → 重建 → GitHub → Vercel"全流程：

| 脚本 | 用途 |
|---|---|
| `./start-all.sh` | 本地同时启动 3 个站（docs:5173 / site:5174 / preview:5175），自动开浏览器 |
| `./rebuild-all.sh` | 重建 docs（VitePress）、react 包（tsup）、demo 截图归档 |
| `./scripts/sync-docs-public.sh` | 把仓库根 4 个源（ai-tokens.css / assets / preview / react）同步到 docs/public（替代 symlink，Vercel CI 必需） |
| `./init-github.sh` | 初始化 git → 创建 GitHub repo → 首次推送 |
| `./deploy-vercel.sh` | CLI 直推预构建产物到 Vercel（3 个独立 project） |
| `./vercel-build.sh` | Vercel Git 集成模式下 docs project 的 CI 入口 |

部署指南：[`DEPLOY-VERCEL.md`](./DEPLOY-VERCEL.md)（含 CLI 直推 + Git 集成两套模式）

**典型工作流（CLI 直推）**

```bash
./rebuild-all.sh && ./deploy-vercel.sh
```

**典型工作流（Git 集成）**

```bash
git add . && git commit -m "..." && git push origin main
# Vercel 自动构建 + 部署 3 个 project
```
