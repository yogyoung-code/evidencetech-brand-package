# VGI Ingredient Mark · Standalone SVG 资产

**状态**：✅ v1.0 完成（2026-05-06）

**承接**：HANDOFF §5「VGI Mark 最终 SVG 资产」、`02-brand-architecture.md` §3 + `04-visual-system.md` §2.3 + `ai-tokens.css` §3。

---

## 资产清单（12 文件）

### Glyph · 单纯 shield + check（24×24）

| 文件 | 颜色 | 用途 |
|---|---|---|
| `glyph-currentcolor.svg` | currentColor | 推荐主用版。React / CSS 上下文中自动跟随宿主品牌色 |
| `glyph-reverse.svg` | `#FFFFFF` | 反白 — Hero 渐变、深底 banner、暗色 UI |
| `glyph-de.svg` | `#2563EB` | DeepEvidence hard-coded |
| `glyph-se.svg` | `#9333EA` | SeekEvidence hard-coded |
| `glyph-di.svg` | `#0891B2` | DeepInsight hard-coded |
| `glyph-rcp.svg` | `#0F62FE` | Rapid Clinical Pulse hard-coded |

### Compact pill · "VGI™"（70×20）

| 文件 | 用途 |
|---|---|
| `compact.svg` | 浅底，currentColor。footer / AI 输出卡片角标 |
| `compact-reverse.svg` | 深底，描边 `rgba(255,255,255,0.6)` + 白文字 |

### Full pill · 完整 lockup（≈ 214×28 / 333×28）

| 文件 | 文案 | 用途 |
|---|---|---|
| `full-cn.svg` | VGI · 验证型生成式智能™ | About 页、IR、首屏 hero 副位 |
| `full-cn-reverse.svg` | （同上 · 深底） | 深底版本 |
| `full-en.svg` | VGI · Verified Generative Intelligence™ | 国际化场景 |
| `full-en-reverse.svg` | （同上 · 深底） | 深底版本 |

---

## 使用矩阵

| 场景 | 资产 |
|---|---|
| React + ai-tokens.css | 用 `<VGIMark/>` React 组件，**不要**直接 import .svg |
| Figma / Sketch / Illustrator 设计稿 | `glyph-currentcolor.svg` + 设计工具着色 |
| 邮件签名 / 邮件营销 | `glyph-{de,se,di,rcp}.svg`（邮件客户端不可靠地处理 currentColor） |
| PDF / 印刷 / 海报 | `glyph-{de,se,di,rcp}.svg`，pill 版本务必在 Illustrator 中 Type → Create Outlines |
| 暗色 UI / Hero 渐变 | `glyph-reverse.svg`、`compact-reverse.svg`、`full-{cn,en}-reverse.svg` |
| About 页 / 投资者材料 | `full-{cn,en}.svg` |
| AI 输出卡片右下角 / footer | `compact.svg` 或 React 组件 |
| Favicon / 极紧凑空间 | `glyph-{*}.svg` @ 16-20px |

---

## 字体依赖

| 文件 | 字体依赖 |
|---|---|
| 所有 glyph-*.svg | 无（纯 path） |
| compact*.svg | Inter SemiBold（VGI 三字母 + ™） |
| full-cn*.svg | Inter（VGI、" · "、™） + Noto Sans SC（验证型生成式智能） |
| full-en*.svg | Inter SemiBold |

**无字体环境下使用 pill 版本**：在 Illustrator 中打开 → 选中文字 → Type → Create Outlines（或 ⇧ + ⌘ + O）→ 另存为新 .svg。文件大小会增加 5-10 倍但完全自包含。

---

## 颜色调整

`currentColor` 版本可通过宿主元素的 `color` CSS 属性着色：

```html
<!-- 直接 inline -->
<div style="color: #9333EA"><img src="glyph-currentcolor.svg"></div>

<!-- 通过 ai-tokens.css 的 brand scope -->
<div class="brand-se"><img src="glyph-currentcolor.svg"></div>
```

**注意**：`<img>` 加载的 SVG 不会继承父级 color。要让 currentColor 生效，必须用：
- inline `<svg>`（推荐用 `<use href>` 引用 symbol）
- `<object>` / `<iframe>` 嵌入
- 在 Webpack/Vite 用 SVG-as-component loader

否则使用 hard-coded 色版本（`glyph-{de,se,di,rcp}.svg`）。

---

## 与 React 组件的同步

本目录的 SVG 是 `react/src/trust/VGIMark.tsx` 的"无 CSS 双胞胎"。两者共用同一 path 与同一 ai-tokens.css 规格。

**Spec 变更时同步流程**：

1. 修改 `react/src/trust/VGIMark.tsx` + `ai-tokens.css`（或 04 §2.3 spec）
2. 在仓库根运行：`node scripts/build-vgi-svg.mjs`
3. 12 个 .svg 自动重新生成
4. 跑 React `npm run typecheck` 与本预览页人工目检

---

## 不在范围

- **PNG 栅格化**：未来若需要邮件客户端兼容（Outlook 等不支持 SVG），可用 ImageMagick 或 Sharp 在构建时栅格化 @1x/@2x/@3x。
- **AI 生成的多变体**（如 vgi-stamped、vgi-foiled）：与战略 PDF 的"印章"风格无关；当前 spec（02 §3）只保留 pill 形态。
- **动画版本**：VGI 是静态 ingredient mark，无入场动画（区别于 DE/RCP/DI 的 logo 动效）。

---

## 决策档案

VGI 的 v1.0 几何决策来自 04 §2.3 v0.2 修订：
- glyph 与 PITL 同款盾牌+勾选（语义都是「经验证」），但 stroke-only
- 默认显示缩写 `VGI` 而非全称（紧凑场景使用频率更高）
- pill 几何复用三大徽章共享 token（border 1.5 / radius 9999 / padding 8/12 / 字号 12/13）

不重新讨论以上决策；如需变更走 `06-governance.md` §2 RFC 流程。
