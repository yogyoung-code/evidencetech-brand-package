# 梅斯健康 AI Brand Kit · Brand Architecture Spec v0.6

**承接**：`00-architecture-locked.md` 第 4 节（Endorsement Signature）+ 第 5.1 节（VGI Ingredient Mark）+ 第 6 节（命名系统）。
**作用**：把架构层决策转换为可执行的几何与排版规格，供 Figma 与生产代码直接落地。

> **修订履历**
> - **v0.1 → v0.2**（2026-05-05）：基于 DE/SE 实际 logo 动效修订 §1：wordmark 由"全大写单色"改为"mixed-case + 双色构造 + 专属图标"。新增 §1.6 图标、§1.7 动效。
> - **v0.2 → v0.3**：wordmark 主色与 UI 主色统一（同一产品仅一个 primary token）。
> - **v0.3 → v0.4**：DI 选定**星座**、RCP 选定**锐脉**。RCP 引入双色翻转 + icon 横线贯穿 wordmark 抵达 Pulse 左缘的设计。
> - **v0.4 → v0.5**：RCP wordmark 简化为 **"RCP" 三字母全黑** + **彩色贯穿横线**——其他三产品都是双色文字，RCP 是单色文字 + 彩色线条，独有视觉气质。"Rapid Clinical Pulse" 全称作为 product full name 保留用于正文。配套修订 §1.2 表与 §1.7.1 通过线规则。
> - **v0.5 → v0.6**（本版本）：Endorsement signature 颜色由 `#334155`（neutral-700）下沉到 **`#666666`**（neutral-600，母品牌 v1.1 中专用于 Logo Slogan 的灰度），让 signature 视觉等级降级为"次级注脚"。反白态由 `rgba(255,255,255,0.85)` 同步降到 `rgba(255,255,255,0.78)`。

---

## 1. Logo 规格（图标 + 双色 wordmark）

每个产品 logo 由 **专属图标 + 双色 wordmark** 构成，两部分横向并排。这是"branded house"模型下区隔四产品识别度的核心载体。

### 1.1 字体

- **字体族**：Teko（Google Fonts，免费，OFL 许可）
- **字重**：SemiBold (600) 默认；hero 大字号场景可用 Medium (500) 抑制视觉过重
- **字符样式**：**Mixed case**（保留驼峰拼写，**不**应用 `text-transform: uppercase`）
- **字距**：`letter-spacing: 0`（Teko 自身字距已优化，wordmark 不再额外加字距）
- **行高**：`line-height: 0.85`（紧凑，让 cap-to-baseline 视觉收紧）
- **字体导入**：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Teko:wght@500;600&display=swap" rel="stylesheet">
```

### 1.2 Wordmark 构造（两种模式）

四个产品分两种 wordmark 模式：DE/SE/DI 是 **双色文字模式**，RCP 是 **缩写文字 + 彩色横线模式**。两种模式共用 Teko Bold + mixed-case 基础。

#### 1.2.1 标准模式（DE / SE / DI）

每个产品 wordmark 拆为 **两段文字**：prefix（产品色） + suffix（黑色）。**着色逻辑**：取产品色的部分应是 wordmark 中最能与图标语义对应的"锚点词"。

| 产品 | Wordmark 显示 | 产品色段 | 黑色段 | 着色逻辑 | Primary Token |
|---|---|---|---|---|---|
| DeepEvidence | DeepEvidence | **Deep** | Evidence | "Deep" = 品牌行为，icon ECG 表征"深度证据" | `--de-primary` = `#2563EB` |
| SeekEvidence | SeekEvidence | **Seek** | Evidence | "Seek" = 品牌行为，icon 5 柱波形表征"搜索信号" | `--se-primary` = `#9333EA` |
| DeepInsight | DeepInsight | **Deep** | Insight | "Deep" = 品牌行为，icon 星座表征"深度发现 KOL 网络" | `--di-primary` = `#0891B2` |

**HTML/CSS 实现示例**（DeepEvidence）：

```html
<span class="wordmark">
  <span class="wm-prefix">Deep</span><span class="wm-suffix">Evidence</span>
</span>
```

```css
.wordmark { font: 600 32px/0.85 "Teko", sans-serif; white-space: nowrap; }
.wm-prefix { color: var(--product-primary); }
.wm-suffix { color: #000000; }
```

prefix 与 suffix 之间**不留空格**（Teko 紧凑字形依赖紧贴）。

#### 1.2.2 缩写模式（RCP 专属）

RCP 的 wordmark 不显示完整的 "Rapid Clinical Pulse"，**仅显示 "RCP" 三字母**，全部黑色。品牌色由 icon 与贯穿横线承载。

| 产品 | Wordmark 显示 | 文字色 | 横线色 | Product Full Name | Primary Token |
|---|---|---|---|---|---|
| Rapid Clinical Pulse | **RCP** | `#000000`（全黑） | `--rcp-primary`（贯穿横线） | Rapid Clinical Pulse | `--rcp-primary` = `#0F62FE` |

**着色逻辑**：与 DE/SE/DI 不同，RCP 的视觉色彩完全由 icon + 贯穿横线承担。这种"单色文字 + 彩色横线"的处理让 RCP 在四产品中独占一个视觉识别带——其他三个产品并排时是双色文字，RCP 一眼就被认出来。

**HTML/CSS 实现示例**：

```html
<span class="rcp-logo">
  <span class="rcp-icon"><svg><use href="#ic-rcp"/></svg></span>
  <span class="rcp-text">RCP</span>
</span>
```

```css
.rcp-logo {
  display: inline-flex; align-items: center;
  font: 600 32px/0.85 "Teko", sans-serif;
  position: relative; white-space: nowrap;
}
.rcp-logo .rcp-icon { color: var(--rcp-primary); width: 34px; height: 34px; flex-shrink: 0; z-index: 2; }
.rcp-logo .rcp-text {
  color: #000;
  position: relative;
  padding-left: 6px;
  z-index: 2;
}
.rcp-logo .rcp-text::before {
  content: '';
  position: absolute;
  left: -2px; right: 0; bottom: 40%;
  height: 0.08em;
  background: var(--rcp-primary);
  z-index: 1;
  border-radius: 2px;
}
```

#### 1.2.3 全名 vs. 缩写：使用规则

| 场景 | 显示方式 |
|---|---|
| Logo 视觉（任何尺寸、任何介质） | **永远使用 "RCP" 缩写 + 贯穿横线** |
| 正文中首次提及 | 拼写全称：`Rapid Clinical Pulse (RCP)` |
| 正文中后续提及 | 使用缩写 `RCP` 即可 |
| 文档标题、PRD、合同条款 | 全称 `Rapid Clinical Pulse` |
| API 路径、技术 ID | 小驼峰 `rapidClinicalPulse` 或 kebab `rapid-clinical-pulse` |
| Endorsement signature 配对 | 全称还是缩写均可，按上下文一致性 |

> **不允许**：在 logo 视觉中显示全称"Rapid Clinical Pulse"，无论尺寸多大都不行——logo 永远是 RCP 三字母。

#### 1.2.4 共同规则

- 同一产品的所有 token（wordmark 色 / icon 色 / UI 主色）= **仅一个 primary token**
- 着色锚点词（标准模式下）或贯穿横线色（RCP 模式下）= 产品 primary
- Teko Bold (600) 唯一字重；mixed-case；letter-spacing 0；line-height 0.85

### 1.3 图标规格

每个产品有一个专属 logo 图标，左侧紧贴 wordmark 出现。图标本身**不是装饰**，是 logo 的不可分割部分。

| 产品 | 图标 | 几何描述 | 资产状态 |
|---|---|---|---|
| DeepEvidence | **ECG 心跳描线** | 单笔从左至右，含一个高瘦主峰 + 小回弹 + 平复段。stroke-width 2，round caps，使用 stroke-dasharray 描线动画入场 | ✅ 已交付：Logo 动效 `preview/de-logo-animation.html`（icon + wordmark，2026-05-07 已统一新色）；Icon 独立动效 `preview/de-icon-animation.html`（心跳脉动 + 紫→靛→蓝渐变圆环，hero/feature 场景使用） |
| SeekEvidence | **5 柱垂直波形** | 5 个圆角矩形柱体，中柱最矮、内两柱最高、外两柱次高。块体填充。bars wake up 弹性曲线动画 | ✅ 已交付：Logo 动效 `preview/se-logo-animation.html`（icon + wordmark，2026-05-07 已统一新色 + 修正 wordmark 文本为 Seek）；Icon 独立动效 `preview/se-icon-animation.html`（音浪呼吸 + 蓝→靛→紫变频追逐圆环，hero/feature 场景使用） |
| DeepInsight | **星座节点网络** | 6 个圆形节点 + 5 条连线，构成知识图谱。Hub 节点（右中，N5）象征"被发现的 Rising Star KOL"。viewBox 0 0 24 24 | ✅ Production v1.0（2026-05-06，variant C · Hub-as-Star）：节点统一 r=1.3，hub 用双环结构（内 r=1.4 实心 + 外环 r=2.4 stroke=1.0）；连线 trim 到节点外缘，stroke=1.3 / opacity=0.5。决策档案 `preview/di-iconography/`，资产 `variant-c/icon{,-reverse,-animated}.svg`，组件 `react/src/icons/DIConstellationIcon.tsx`。入场动画 nodes-emerge ~1.3s。**28px 以下双环结构可读性评估**：Sponsor 决议（2026-05-07）认定可接受——双环在小字号下虽有轻微模糊，但 hub 实心填充仍可识别；不引入产品级降级例外，按 §1.4 wm-min(16px) 通用最小尺寸规则即可 |
| Rapid Clinical Pulse | **锐脉单笔描线** | 单笔 ECG 风格：左侧平段 → 高瘦主峰（y=4）→ 急降回弹（y=19）→ 小峰（y=9）→ 右侧平段（y=13）。**右侧平段（H 22）即"贯穿横线"的起始**，详见 §1.7.1 | ✅ Production v1.0（2026-05-06）：waypoints 不变，corner fillet 配方与 DE 一致（peak/trough/次峰 r=0.25 / baseline 转换 r=1.5）。决策档案 `preview/rcp-iconography/`，资产 `variant-c/icon{,-reverse,-animated}.svg`，组件 `react/src/icons/RCPPulseIcon.tsx` |

**图标几何通则（统一规则）**：
- 默认尺寸：与 wordmark cap height 相当（28px wordmark 配 30px 图标）
- 颜色：**永远等于 prefix 颜色**（即产品主色），不允许双色
- ViewBox：建议 24×24（DE 使用此尺寸）；非方形几何允许使用 280×170 等定制 viewBox（SE 使用此尺寸），但渲染框总在视觉上保持方形或 1.1:1 比例
- 图标与 wordmark 之间间距：DE 实测 6px，SE 实测 28px。spec 化建议：**间距 = wordmark 字号 × 0.20**（28px → 5.6px；88px → 17.6px）。SE 的 28px 是 88px 大字号下的合理值

### 1.4 尺寸阶梯（修订）

Mixed-case + 紧凑行高让 wordmark 视觉重量比全大写小，因此尺寸阶梯重定。

| 用途 | Wordmark 字号 | 图标尺寸 | 适用场景 |
|---|---|---|---|
| `wm-xl` | 88px | ~95px（按 1.08 比例） | Hero、splash、投资者 deck 封面（参 SE 动效） |
| `wm-lg` | 48px | ~52px | 产品官网首页 hero 副位、关于页 |
| `wm-md` | 32px | ~34px | 顶栏导航、登录页 logo |
| `wm-sm` | 28px | ~30px | About 段、次级标题（参 DE 动效） |
| `wm-xs` | 20px | ~22px | Footer、文档脚注 |
| `wm-min` | 16px | ~18px | 最小可用；低于此 ECG/波形几何细节丢失 |

**最小尺寸**：16px 字号 + 18px 图标。低于此尺寸 SE 5 柱波形会糊成一团，DE ECG 描线会断裂。

### 1.5 Clear space（Wordmark 周围留白）

- 上下：≥ wordmark 字号 × 0.5
- 左右：≥ wordmark 字号 × 0.75
- 与 endorsement signature 的间距是单独的 spec（见 §2.4）

### 1.6 颜色应用与背景

| 背景 | Prefix | Suffix | 图标 | 备注 |
|---|---|---|---|---|
| 白底 / `neutral-50` | 产品主色 100% | `#000000` | 产品主色 100% | 默认 |
| 浅灰底 `neutral-100/200` | 产品主色 100% | `#000000` | 产品主色 100% | 同白底 |
| 产品 hero 渐变 / 同色大块底 | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | 全反白；suffix 不再保留黑色 |
| 深色背景 `neutral-900`+ | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | 全反白 |
| 复杂照片/视频底 | 不允许直接放置 | — | — | 必须先加 `rgba(0,0,0,0.45)` 半透明覆层后用反白 logo |

**禁止**：
- 任何阴影 / 描边 / 倾斜 / 拉伸 / 压缩
- 把 prefix 与 suffix 颜色对调或同色
- 把图标颜色改为非产品主色或反白以外的色
- 在浅底上把 suffix 改为非黑色（如灰色 `neutral-700`）—— 黑色与产品色的对比是 logo 视觉的核心张力
- 单独使用 icon（不带 wordmark）作为 logo —— icon 必须始终与 wordmark 共现；wordmark 单独使用见 §1.8

### 1.7 动效规格（品牌识别的延伸）

两个动效文件揭示了清晰的动效 DNA：

| 阶段 | DE 模式 | SE 模式 | 通用原则 |
|---|---|---|---|
| 图标入场 | stroke-draw 描线，1.2s ease-out | bars wake up 由中向外，0.8s 弹性曲线 (cubic-bezier(0.34, 1.56, 0.64, 1)) | 图标几何决定动效方式：线型用描线，块型用 wake-up |
| 文字入场 | fadeIn + translateX(-10px → 0)，0.8s ease-out，delay 0.8s | fadeIn + translateX(-30px → 0)，1.0s ease-out (cubic-bezier(0.22, 1, 0.36, 1))，delay 0.6s | 文字延迟于图标 0.6–0.8s 出现；位移 -10 至 -30px 视字号定 |

**通用规则**（适用于 DI / RCP 待设计动效）：
- 总时长：1.4–2.0s（含 stagger）
- 图标先于文字
- 反向播放（hover/退出态）：禁止；logo 动效仅用于首次加载、splash、品牌入场
- 反复循环：禁止
- 必须支持 `prefers-reduced-motion: reduce` 全局降级到立即显示无动效

### 1.7.1 RCP 专属：贯穿横线（Through-line）

RCP 的 logo 在四产品中享有一项独有视觉资产：**icon 右侧的恢复横线（H 22 段）水平穿过 "RCP" 三字母下方，终止于 "P" 字母右缘**。横线是 wordmark 区域内**唯一的彩色元素**——文字本身全黑，色彩由横线承担。

**几何对齐**：

- 横线垂直位置：与 icon viewBox 中 H 22 段的 y=13 对齐（约 wordmark 容器高度的 40% 距底）
- **横线粗细**：精确等于 icon stroke 宽度。Icon viewBox stroke=2，icon 容器约为 font-size × 1.08，因此 CSS 实现用 `height: 0.09em`（≈ 2/24 × 1.08）。在 32px wordmark 下 = 2.88px，与 34px icon 容器中 stroke 2 的渲染值（2.83px）误差 < 0.1px，视觉等粗
- 横线左端：从 icon 右缘反入 -2px，与 icon 的 H 22 stroke 在视觉上无缝衔接
- **横线右端**：略微超出 "P" 字母右缘 `0.15em`（约 0.15 字符宽），形成"信号继续向外延伸"的微弱视觉余韵；不允许 0 余量截断或大幅延伸
- **横线 z-index**：低于"RCP"字母（字母在图层效果上**位于横线之上**），但仍可见。CSS 实现：`.rcp-text::before { z-index: -1 }` + 父容器 `.rcp-logo { isolation: isolate }`

**配色**：

- 默认底（白/浅灰）：横线 = `--rcp-primary` = `#0F62FE`
- 反白底（hero 渐变 / 深色背景）：横线 = `#FFFFFF`，与 icon 同步反白

**禁止**：

- 不允许将横线移到文字上方（破坏"基线信号"语义）
- 不允许将横线变虚线、双线或其他装饰样式
- 不允许将横线粗细偏离 icon stroke（必须等粗，0.09em）
- 不允许将横线右端**短于 P 字母右缘**或**远远超过 P 字母右缘**（标准延伸量为 0.15em，不可大幅外延形成"未完成"感）
- 不允许将横线短于"RCP"三字母（必须穿过全部三个字母）
- 不允许把"RCP"字母放在横线下方（z-index 顺序错误）
- 不允许在 RCP 之外的其他产品 logo 中使用贯穿横线（RCP 独有视觉资产）

**入场动效**：

- 阶段 1：icon 描线（同 §1.7 DE 模式）—— 单笔从左至右描出主峰，1.2s
- 阶段 2：贯穿横线从 icon 右缘向右滑出，width 0 → 100%，200ms ease-out
- 阶段 3："RCP" 三字母 fadeIn + translateX(-10px → 0)，300ms ease-out
- 总时长 1.4–1.7s，禁止循环

### 1.8 Wordmark-only 用法

Wordmark 可单独使用（不带图标），适用于全部场景——无论是紧凑环境（标签页 title、CSV 文件名、文本邮件签名），还是常规视觉场景（hero 标题、营销 banner、社媒头像、文档章节标题等）。Wordmark 与"完整 logo（图标 + wordmark）"是两个对等的合法呈现形态，由场景自行选择。

**规则**：

- **着色**：`Deep` + `Evidence`（DE/SE/DI）双色锚点保留，与 §1.2 完全一致；RCP 三字母全黑保留
- **RCP 贯穿横线**：当前 React `<Wordmark product="rcp">` 实现不渲染横线（横线视为完整 logo 的视觉资产）。如需在 wordmark-only 场景显示横线，请使用 `<Logo product="rcp">` 完整形态
- **字体**：默认 Teko Medium；上下文无法加载 Teko 时可回退为 Inter SemiBold
- **Endorsement signature**：可与 wordmark-only 配对呈现，字号关系仍按 §2.2 派生（基于 wordmark 字号）
- **最小尺寸**：wordmark 高度 ≥ 14px（与完整 logo 一致）
- **与完整 logo 的选择**：场景方根据信息密度、视觉节奏、上下文可识别度自行决定；二者无优劣之分

---

## 2. Endorsement Signature 规格

### 2.1 文案版本

| 版本 | 文字 | 字体 | 字重 |
|---|---|---|---|
| **CN（默认对外）** | `由 梅斯健康 出品` | Noto Sans SC（思源黑体 SC） | Medium (500) |
| **EN（技术文档/国际场景）** | `by MedSci Healthcare` | Inter | Medium (500) |

> **注意**：CN 版本中"梅斯健康"前后各有一个半角空格，营造呼吸感；不要用全角空格、中文标点或竖线。

### 2.2 字号关系

签名字号永远基于其对应 wordmark 的字号派生：

```
signature_font_size = wordmark_font_size × 0.42
```

| Wordmark 字号 | Signature 字号 |
|---|---|
| 88px (wm-xl) | 36px |
| 48px (wm-lg) | 20px |
| 32px (wm-md) | 13px |
| 28px (wm-sm) | 12px |
| 20px (wm-xs) | 8px → **降级为不显示** |

**规则**：当 wordmark < 28px 时，签名块不再呈现（视觉太小不可读）。此时品牌识别仅依赖 logo 本身。Footer 等场景如需显示签名，应单独以 12px 大小作为独立 endorsement 行（不与 logo 视觉绑定，左对齐于 footer 容器）。

### 2.3 颜色

- **永远使用** `#666666`（即母品牌 v1.1 中的 `neutral-600` Logo Slogan grey）
- 此色与母品牌 logo 下方斜体 *Improving Healthcare Quality* 同源，建立母品牌 ↔ AI 子品牌的"灰度同源"
- 反白态使用 `rgba(255,255,255,0.78)`
- 不允许使用产品主色（避免与 wordmark 同色叠加）
- 不允许使用母品牌 navy `#001A51`（避免暗示母品牌主导而非背书）
- 不允许使用 `#334155`（neutral-700）—— 此色已正式从 endorsement 角色降级；仍可用于其他正文场景

### 2.4 排版位置

签名块默认位于 wordmark **正下方**，左对齐 wordmark 起始字符：

```
DEEPEVIDENCE              ← Teko Bold, #2563EB, 32px
由 梅斯健康 出品              ← Noto Sans SC Medium, #334155, 14px (= 32 × 0.42)
```

垂直间距：`signature_top_margin = wordmark_cap_height × 0.30`

例：32px wordmark，cap height ~23px，间距 ~7px。

### 2.5 单一界面语言一致性

同一个屏幕、同一份物料中所有 endorsement signature 必须使用同一语言版本。**不允许**在产品 footer 用 CN 版、在同页 about 区用 EN 版。

---

## 3. VGI Ingredient Mark 规格

**全称**：Verified Generative Intelligence™（CN：**验证型生成式智能**™）
**用途**：跨产品共享徽章，标记"本产品的 AI 输出经 PITL 验证机制治理"。

### 3.1 形态

胶囊形 (pill) 徽章，左侧为简化盾牌+勾选 glyph，右侧为文字。

```
┌─────────────────────────────────────┐
│ [▣✓]  VGI · 验证型生成式智能            │
└─────────────────────────────────────┘
   ↑      ↑
   glyph  wordmark (CN 版本)
```

### 3.2 三个尺寸变体

| 变体 | 高度 | 内容 | 用途 |
|---|---|---|---|
| `vgi-full` | 28px | glyph + 全称（CN：`VGI · 验证型生成式智能`；EN：`VGI · Verified Generative Intelligence`） | About 页、IR 材料、首屏 hero 副位 |
| `vgi-compact` | 20px | glyph + `VGI` 三字母 | Footer、AI 输出结果右下角、卡片角标 |
| `vgi-glyph` | 16/20/24px | 仅 glyph（无文字） | favicon-style、浮动按钮、移动端紧凑 |

### 3.3 色彩规则

| 元素 | 颜色 |
|---|---|
| Pill 描边 | 产品主色 100% |
| Pill 填充 | 产品主色 5% 透明（约 `rgba(R,G,B,0.08)`），或纯 `#FFFFFF` |
| Glyph 与文字 | 产品主色 100% |
| 反白版本（深底） | 描边/glyph/文字全部 `#FFFFFF`；填充透明 |

### 3.4 字体

- Wordmark 部分：CN 用 **Noto Sans SC SemiBold (600)**，EN 用 **Inter SemiBold (600)**
- "VGI" 三字母固定用 **Inter SemiBold (600)**（不论中英文上下文，缩写永用 Inter）
- "·" 间隔符前后各 1 个半角空格

### 3.5 ™ 标记

- ™ 永远用上标（`<sup>`），字号为主体字号的 60%
- 在 `vgi-compact` 与 `vgi-glyph` 变体中 ™ 不显示（空间不足，仅 `vgi-full` 显示）
- 在第一次出现的 wordmark 显示 ™，同页后续可省略（行业惯例）

### 3.6 Glyph 规格

简化盾牌+勾选符号，几何要素：

- 外形：圆角矩形盾牌，宽高比 0.85，圆角 `corner_radius = width × 0.15`
- 内部勾选：单色填充，占盾牌内部高度 60%
- Stroke width：1.5px（与母品牌 Lucide icon 标准一致）

具体 SVG 资产将在 Task #5（Visual System）输出。

### 3.7 放置位置

| 场景 | 变体 | 位置 |
|---|---|---|
| 产品 footer | `vgi-compact` | 与 endorsement signature 同行右侧 |
| AI 输出结果卡片 | `vgi-compact` | 卡片右下角 |
| About / 关于页 | `vgi-full` | 单独占一行 |
| 投资者材料封面 | `vgi-full` | hero 区副位 |
| Favicon / 应用图标 | `vgi-glyph` | 全画幅 |

---

## 4. Co-branding：四产品家族 Lockup

适用于"我们的 AI 产品矩阵"展示场景（IR 材料、官网产品页、投资者 deck）。

### 4.1 横向矩阵 lockup

四个 wordmark 横向并排，等高（推荐 32px），等距间隔（推荐 64px）。下方共用一行 endorsement signature。

```
DEEPEVIDENCE     SEEKEVIDENCE     DEEPINSIGHT     RAPID CLINICAL PULSE

                       由 梅斯健康 出品
```

- 底部签名居中对齐于整组 wordmark 的几何中心
- 每个 wordmark 保留各自主色，签名固定 `#666666`（neutral-600，参 §2.3）
- 整组 lockup 周围 clear space ≥ 单个 wordmark cap height × 1.5

### 4.2 网格 lockup（移动端 / 紧凑场景）

2×2 网格，每个 wordmark 居于格内左上，等距。整组下方共用签名。

### 4.3 与母品牌 logo 共现

仅在 IR 材料、M&A / 合作协议封面、产品 about 页"集团关系"区出现。

```
[MedSci Healthcare 完整 Logo]                    [DEEPEVIDENCE wordmark]
                                                  由 梅斯健康 出品
```

- 两个标识水平左右排布，垂直居中对齐
- 中间用 1px `neutral-300` 竖线分隔，竖线高度 = 母品牌 logo 高度 × 0.6
- 母品牌 logo 高度 ≈ 产品 wordmark 高度 × 1.4（平衡视觉重量）

#### 4.3.1 母品牌 logo 变体选用规则（W2 资产已就位 · 2026-05-06）

母品牌 logo 资产位于 `assets/master-brand/`，按背景与介质分 4 变体 × 3 构图：

| 场景 | 变体 | 文件 |
|---|---|---|
| 浅底 / 白底（默认对外材料） | default | `default-{en,cn,full}.svg` |
| 深底 / hero 渐变 / 暗色 UI | reverse | `reverse-{en,cn,full}.svg` |
| 母品牌 navy 单色印刷、信纸抬头、单色合同封面 | mono-navy | `mono-navy-{en,cn,full}.svg` |
| 传真、单色复印、低预算印刷 | mono-black | `mono-black-{en,cn,full}.svg` |

**构图选择**：

- `-en.svg`：仅英文版，IR 与国际化场景
- `-cn.svg`：仅中文版，产品 about 页 / 国内合同封面
- `-full.svg`：英文 + 中文同时展示（原 .ai 布局），M&A 协议封面 / 双语营销

**最小可用尺寸**：24px（高度方向）。低于此 dot-spiral 节点糊化。

**反白 slogan 字色**：母品牌 reverse 变体的 slogan 用 `rgba(255,255,255,0.78)`，与本 kit endorsement signature reverse（§2.3 v0.6 决策）同源。

**禁止**：

- 不允许混合两种变体（如 default + reverse 同框）
- 不允许在 co-brand lockup 中给母品牌 logo 重新着色
- 不允许在母品牌 mono-navy / mono-black 单色场景下保留 AI 子品牌的彩色产品 wordmark（保持单色一致）
- 不允许把 default 版本放在 `#001A51` 等深底（dot-spiral 的 `#001A51` navy 节点会消失），必须用 reverse

**预览**：`preview/master-brand-logos/index.html`
**决策档案**：`preview/master-brand-logos/README.md`

---

## 5. 命名系统

### 5.1 产品名拼写规则（源代码与文档）

源代码（变量、文件名、技术文档）保持驼峰：
- `DeepEvidence`、`SeekEvidence`、`DeepInsight`、`RapidClinicalPulse`

对外物料（UI、市场、PR）渲染层：
- Wordmark 显示规则（按产品）：
  - DE / SE / DI → mixed-case Teko Bold（`DeepEvidence` 的字面拼写，Teko 字形渲染）
  - RCP → 三字母全大写 `RCP`（缩写本身即大写）
- 行内文字提及（默认字体 Inter / Noto Sans SC，不用 Teko）：
  - DE/SE/DI 用驼峰：`DeepEvidence`、`SeekEvidence`、`DeepInsight`
  - RCP 首次提及用全称 `Rapid Clinical Pulse (RCP)`，后续用 `RCP`
  - ✅ "你正在使用 DeepEvidence 进行病例分析"
  - ✅ "本次 A/B 测试由 RCP 平台执行"
  - ❌ "你正在使用 deepevidence 进行病例分析"
  - ❌ "你正在使用 DEEPEVIDENCE 进行病例分析"（除非该处即是 wordmark）
  - ❌ "本次 A/B 测试由 rcp 执行"（缩写小写）
  - ❌ "本次 A/B 测试由 Rapid Clinical Pulse 执行"（首次提及未带缩写）

### 5.2 内部代号规则

战略 PDF §2.1 提及 DeepEvidence 内部代号 **Hippocrates**。

- 内部代号仅限内部沟通、技术架构图、commit message
- 不出现在任何对外物料、UI、文档、营销材料
- 内部代号不进入 Brand Kit；如其他产品后续也设代号，按相同隔离规则处理

### 5.3 复数与所有格

- 中文：`DeepEvidence 的输出` / `DeepEvidence 系列`
- 英文：`DeepEvidence's output` / `the DeepEvidence platform`（注意 's 不大写）

### 5.4 与"梅斯"的搭配

- "梅斯健康" 是集团名（对应 MedSci Healthcare），AI 产品 endorsement 用此称
- "梅斯" 单独使用是非正式简称，**不出现在 Brand Kit 涵盖的对外物料**
- "梅斯医学" 是兄弟业务平台（医生社区），**严格不可与 AI 产品互换**
- **"梅斯 AI" / "MedSci AI"**：AI 子品牌伞标的固定简称——例外获准在对外物料中使用（决议日期 2026-05-07）。规则：
  - 仅当作为伞标整体出现时允许：✅ "梅斯 AI · 验证型生成式智能" / "基于梅斯 AI 平台" / "MedSci AI portfolio"
  - **不允许**拆解为 "梅斯" + "AI" 两段独立使用：❌ "梅斯的 AI 能力"（应改为"梅斯 AI 的能力"或"梅斯健康的 AI 能力"）
  - 单产品语境中仍以产品名为主：✅ "DeepEvidence 提供..." / ❌ "梅斯 AI 的 DE 提供..."
  - 母品牌正式署名（背书签名、法律署名、合规材料）仍使用完整的 **"梅斯健康"** / **"MedSci Healthcare"**，不得替换为"梅斯 AI"

---

## 6. 禁止事项汇总

| 禁止 | 原因 |
|---|---|
| 用任何非 Teko 字体渲染产品 wordmark（无 Teko 字体加载条件时可回退 Inter SemiBold，见 §1.8） | Teko 是把四产品绑成家族的视觉锚点，破例即家族瓦解 |
| 把 DE/SE/DI 的 wordmark 全大写（`DEEPEVIDENCE`） | 偏离 v0.2 mixed-case 规范；逐字母全大写破坏 Teko 在小字号下的字距优化（RCP 例外，因其本身是缩写） |
| 改变 DE/SE/DI 的着色锚点（如把 DE 改成 `Deep` 黑 + `Evidence` 蓝） | 着色锚点经 §1.2.1 锁定，对应每个产品 icon 的语义 |
| 在 RCP 中给 "RCP" 文字着色（任一字母改为非黑色） | RCP wordmark 必须三字母全黑，色彩仅由 icon 与贯穿横线承担（§1.2.2） |
| 在 RCP logo 中显示 "Rapid Clinical Pulse" 全称（任何尺寸） | logo 永远是 RCP 三字母（§1.2.3）；全称仅用于正文 |
| 把任一锚点段改为非产品主色（如灰色、navy、其他蓝） | 双色 wordmark 的对比张力依赖纯黑 + 产品色二元 |
| 在 RCP 之外的产品（DE/SE/DI）应用贯穿横线 | 横线是 RCP 的独有视觉资产，§1.7.1 限定 |
| 在 RCP 中省略贯穿横线，或把横线移至文字上方/中部、改虚线/双线，或不覆盖全部三字母 | 横线已成为 RCP 品牌识别的一部分，必须按 §1.7.1 实现 |
| 单独使用 icon 作 logo（不带 wordmark） | icon 必须始终与 wordmark 共现；wordmark-only 是合法形态，见 §1.8 |
| 把图标颜色改为非产品主色或反白以外的色 | 图标永远等于 prefix 颜色 |
| Wordmark 或图标加阴影、描边、倾斜、拉伸、压缩 | 母品牌 v1.1 §7.3 红线沿用 |
| 同页混用 CN 与 EN endorsement signature | 一致性破坏 |
| 在签名中用产品主色或母品牌 navy | §2.3 已禁，色彩不打架原则 |
| 把 endorsement signature 放在 wordmark 上方或左右 | 视觉等级倒置，背书强于产品 |
| 单独使用 VGI glyph 不带任何 wordmark | 与 mark-only 使用规则不同；VGI glyph 必须明确指向某个产品场景 |
| 在 wordmark 28px 以下显示 endorsement signature | §2.2 派生字号低于 12px 不可读 |
| 拼写 wordmark 时用 hyphen 或 dot 分割（如 `Deep-Evidence`、`Deep.Evidence`） | 命名一致性破坏 |
| 为 logo 入场动效添加反向播放、循环或 hover 触发 | §1.7 动效仅用于首次加载与品牌入场 |

---

## 7. 落地清单

| 资产 | 状态 | 责任 |
|---|---|---|
| Teko 字体引入（每个产品的字体加载链） | ⏳ 工程 | DE/SE 推断已有 Inter，需新增 Teko；RCP next/font 配置需新增 Teko subset |
| 四产品 Wordmark SVG（默认 + 反白版） | ⏳ Task #5/Figma | 输出 8 个 SVG（4 产品 × 2 配色） |
| Endorsement signature CSS class | ⏳ Task #5 | `.endorsement-signature` + `.endorsement-signature--cn/en` |
| VGI Ingredient Mark SVG（3 个变体 × 4 产品色 × 2 反白态） | ⏳ Task #5/Figma | 共 24 个变体；可用单一参数化 SVG + CSS 着色减少资产数 |
| 家族 lockup 模板（横向 + 网格 + 与母品牌共现） | ⏳ Figma | 3 个 Figma frame |

---

## 8. 后续依赖

- Task #4（Brand Voice）独立推进，与本文档解耦
- Task #5（Visual System + ai-tokens.css）将依据本文档输出实际 SVG 与 CSS
- Task #6（Figma kit）依据本文档与 Task #5 产出
