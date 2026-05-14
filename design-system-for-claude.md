# Evidence AI · Design System Package (双语)

> **打包用途 / Purpose**：本文档将 EvidenceTech (梅斯健康 AI) Brand Kit v1.0 中的全部**设计相关**内容（视觉标准、设计令牌、图形资产、组件规范、无障碍与动效）整合为单一可提交文件，用于上传至 **claude.ai/design** 生成定制化的 AI 产品设计系统。
> *This document consolidates all design-related content from the EvidenceTech (MedSci Healthcare AI) Brand Kit v1.0 — visual standards, design tokens, graphic assets, component specs, accessibility and motion — into a single submittable file for **claude.ai/design** to generate a customized AI product design system.*
>
> **版本 / Version**：v1.0 · 2026-05-12
> **来源 / Source**：EvidenceTech-Brand-Package（locked v1.0, 2026-05-05）
> **适用产品 / Products**：DeepEvidence (DE) · SeekEvidence (SE) · DeepInsight (DI) · Rapid Clinical Pulse (RCP)
> **语言策略 / Language strategy**：CN-primary, EN-secondary（中文主，英文辅）
> **范围 / Scope**：仅设计内容（视觉/tokens/logo/icons/组件视觉/a11y/动效）；排除 brand voice、governance、competitive 等非设计内容。
>
> ---
>
> ## 0. 给 claude.ai/design 的 Prompt 建议 / Prompt Suggestion for claude.ai/design
>
> **建议 prompt 开头 / Suggested opening prompt**：
>
> > "Generate a complete design system for **Evidence AI**, a **branded house of 4 medical AI products** built on a shared trust layer. Follow the locked decisions in this document — do **not** invent new colors, fonts, or geometric languages. Treat this as a strict spec, not inspiration. Output: design tokens (CSS variables + JSON), component library (React + Tailwind), and a Figma-ready spec sheet covering the 4 products + shared trust components."
>
> **关键约束告知 claude.ai/design / Critical constraints to communicate**：
> 1. **Branded house, not endorsement** — 四产品有独立主色与设计语言，仅共享信任层与 endorsement signature。
> 2. **CN-primary** — Chinese is the primary language; English is the secondary fallback.
> 3. **WCAG 2.1 AA hard floor** — all components must meet AA contrast; AAA preferred for clinical content.
> 4. **No emoji, no stock photo, no AI-generated medical imagery** (FTC red line).
> 5. **Trust layer is shared**: PITL Verified / AIO Official / VGI™ badges adapt via `--product-primary` CSS variable.
> 6. **RCP is visually distinct**: abbreviation-only wordmark + colored through-line + IBM Carbon-influenced UI.

---

## 1. 概览与战略 / Overview & Strategy

### 1.1 战略定位 / Strategic Position

**中文 (主)**：Evidence AI 是 MedSci Healthcare（梅斯健康，HKEX:2415）旗下的 AI 子品牌矩阵，采用 **branded house** 模型（参 Atlassian / Microsoft 365）。四产品在并排时被识别为同一家族（共享信任层 + 命名 + 文案 + endorsement），同时各自保留独立色相与 UI 设计语言。

*English*: Evidence AI is the AI sub-brand portfolio of MedSci Healthcare (2415.HK), built as a **branded house** (Atlassian / Microsoft 365 model). The four products are recognized as one family through shared trust layer + naming + copy + endorsement, while each retains its own primary hue and UI design language.

### 1.2 四产品速览 / Four-Product Snapshot

| Product | Full Name | Primary Color | Hex | Design Language |
|---|---|---|---|---|
| **DE** | DeepEvidence | Tailwind blue-600 | `#2563EB` | Rounded + shadow (shadcn-style) |
| **SE** | SeekEvidence | Tailwind purple-600 | `#9333EA` | Rounded + shadow (shadcn-style) |
| **DI** | DeepInsight | teal-600 (provisional) | `#0891B2` | TBD |
| **RCP** | Rapid Clinical Pulse | IBM Blue 60 | `#0F62FE` | IBM Carbon (Plex Sans/Mono, zero-radius inputs) |

### 1.3 家族识别四件套 / Four Family-Identity Anchors

并排时四产品通过以下四件事被识别为同一家族：
*When placed side-by-side, the four products are identified as one family via:*

1. **同一 wordmark 字体**：Teko Medium 500, mixed-case (RCP 例外为缩写 / RCP is abbreviation-only)
2. **同一 endorsement signature**：`由 梅斯健康 出品` / `by MedSci Healthcare`，固定 `#666666`
3. **同一信任层**：PITL Verified / AIO Official / VGI™，通过 `--product-primary` CSS 变量自动着色
4. **同一交互模式**：Nano-Citation `[n]` / CoT 动画 / Diff View 红绿 / Progressive Disclosure L1-L3

---

## 2. 品牌架构 / Brand Architecture

### 2.1 双色 Wordmark 构造规则 / Two-Tone Wordmark Construction

**DE / SE / DI 模式**：每个 wordmark 拆为两段文字 — prefix (产品色) + suffix (黑色)。
*DE/SE/DI mode: prefix in product color + suffix in black.*

| Product | Wordmark | Prefix (产品色) | Suffix (黑色) | Anchor Rationale |
|---|---|---|---|---|
| DeepEvidence | `DeepEvidence` | **Deep** | Evidence | "Deep" = brand action, ECG icon = "depth of evidence" |
| SeekEvidence | `SeekEvidence` | **Seek** | Evidence | "Seek" = brand action, 5-bar waveform = "signal search" |
| DeepInsight | `DeepInsight` | **Deep** | Insight | "Deep" = brand action, constellation = "KOL network discovery" |

**RCP 模式（独有）**：wordmark **仅显示 "RCP" 三字母全黑**，色彩由 icon + 贯穿横线承担。
*RCP mode (unique): wordmark shows only "RCP" in pure black; color is carried by the icon + colored through-line.*

### 2.2 RCP 贯穿横线（Through-line）规格 / RCP Through-line Spec

仅 RCP 享有此独有视觉资产 / Unique to RCP only:

- 垂直位置 / Vertical position：与 icon viewBox y=13 对齐（容器高度 40% 距底）
- 粗细 / Thickness：`0.09em`（精确等于 icon stroke 宽度 / matches icon stroke exactly）
- 左端 / Left end：从 icon 右缘反入 -2px
- 右端 / Right end：超出 "P" 字母右缘 `0.15em`
- z-index：低于 "RCP" 字母但可见（字母位于横线之上 / letters layered above through-line）
- 配色 / Color：默认 `--rcp-primary` (#0F62FE)；反白态 #FFFFFF

**禁止 / Forbidden**：移到文字上方、变虚线、改粗细、短于全部三字母、用于非 RCP 产品。

### 2.3 字体规格 / Typography Spec

**Wordmark 字体（所有产品）**：
- Family: **Teko** (Google Fonts, OFL)
- Weight: Medium (500)
- Style: **Mixed case** (do NOT apply `text-transform: uppercase`)
- letter-spacing: -0.025em
- line-height: 1.2

**正文字体 / Body fonts**：
- CN: Noto Sans SC
- EN: Inter
- Mono / Code: JetBrains Mono
- RCP 例外 / RCP exception: IBM Plex Sans + Plex Mono (Carbon design system)

### 2.4 Wordmark 尺寸阶梯 / Size Scale

| Token | Wordmark px | Icon px | Use case |
|---|---:|---:|---|
| `wm-xl` | 88 | 95 | Hero, splash, investor deck cover |
| `wm-lg` | 48 | 52 | Marketing site hero secondary, about page |
| `wm-md` | 32 | 34 | Top nav, login page logo |
| `wm-sm` | 28 | 30 | About section, secondary headings |
| `wm-xs` | 20 | 22 | Footer, doc footnote |
| `wm-min` | 16 | 18 | Minimum readable; below this ECG/bar geometry breaks |

派生规则 / Derived rules:
- `icon-gap = wordmark_size × 0.20`
- `signature_size = wordmark_size × 0.42` (hidden when wordmark < 28px)

### 2.5 Endorsement Signature 规格 / Signature Spec

| Version | Text | Font | Weight | Color |
|---|---|---|---|---|
| CN (default) | `由 梅斯健康 出品` | Noto Sans SC | 500 | `#666666` |
| EN (intl / IR) | `by MedSci Healthcare` | Inter | 500 | `#666666` |
| Reverse (dark bg) | (same) | (same) | 500 | `rgba(255,255,255,0.78)` |

**CN 排版细节 / CN typography detail**："梅斯健康" 前后各一个**半角空格**（不要用全角空格、中文标点或竖线）。

---

## 3. 设计令牌 / Design Tokens

完整 token 见 `ai-tokens.css`（内联在本节）。核心 token 也在 `react/src/tokens/index.ts` 中以 TypeScript 常量导出，两处必须同步。

### 3.1 完整 CSS 变量 / Complete CSS Variables

```css
:root {
  /* ===== 1. Product Primary ===== */
  --de-primary:  #2563EB;   /* DeepEvidence */
  --se-primary:  #9333EA;   /* SeekEvidence */
  --di-primary:  #0891B2;   /* DeepInsight */
  --rcp-primary: #0F62FE;   /* RCP */
  --product-primary: var(--de-primary);   /* fallback */

  --de-primary-rgb:  37, 99, 235;
  --se-primary-rgb:  147, 51, 234;
  --di-primary-rgb:  8, 145, 178;
  --rcp-primary-rgb: 15, 98, 254;

  /* ===== 2. Endorsement Signature ===== */
  --endorsement-color:         #666666;
  --endorsement-color-reverse: rgba(255, 255, 255, 0.78);
  --endorsement-font-weight:   500;
  --endorsement-ratio:         0.42;

  /* ===== 3. Trust Badges (pill geometry) ===== */
  --badge-radius:         9999px;
  --badge-border-width:   1.5px;
  --badge-padding-x:      8px;
  --badge-padding-x-full: 12px;
  --badge-padding-y:      3px;
  --badge-padding-y-full: 5px;
  --badge-icon-gap:       5px;
  --badge-font-size:      12px;
  --badge-font-size-full: 13px;
  --badge-font-weight:    600;
  --badge-letter-spacing: 0.04em;

  --pitl-bg: var(--product-primary);  --pitl-fg: #FFFFFF;   --pitl-icon-fg: #FFFFFF;
  --aio-bg:  #334155;                  --aio-fg:  var(--product-primary);  --aio-icon-fg: var(--product-primary);
  --vgi-border: var(--product-primary); --vgi-bg: rgba(255,255,255,0.5);   --vgi-fg: var(--product-primary);

  /* ===== 4. Nano-Citation ===== */
  --citation-color:        var(--product-primary);
  --citation-font-size-em: 0.7;
  --citation-font-weight:  600;
  --citation-hover-bg:     rgba(0, 0, 0, 0.05);
  --citation-panel-width:  400px;
  --citation-panel-shadow: 0 12px 32px rgba(0, 16, 55, 0.12);
  --citation-panel-anim-duration: 240ms;

  /* ===== 5. CoT (Chain-of-Thought) Animation ===== */
  --cot-dot-color: var(--product-primary);
  --cot-dot-size:  6px;
  --cot-spacing:   14px;
  --cot-cycle:     1.2s;
  --cot-stagger:   80ms;
  --cot-easing:    cubic-bezier(0.4, 0, 0.2, 1);

  /* ===== 6. Diff View ===== */
  --diff-removed-color: #DC2626;  --diff-removed-bg: rgba(220,38,38,0.08);
  --diff-added-color:   #2E9F82;  --diff-added-bg:   #E6F4EF;

  /* ===== 7. Progressive Disclosure (L1/L2/L3) ===== */
  --disclosure-l1-size: 18px;  --disclosure-l1-weight: 700;  --disclosure-l1-color: var(--product-primary);
  --disclosure-l2-size: 16px;  --disclosure-l2-weight: 400;  --disclosure-l2-color: #334155;
  --disclosure-l3-size: 14px;  --disclosure-l3-weight: 400;  --disclosure-l3-color: #64748B;
  --disclosure-gap: 12px;

  /* ===== 8. RCP Through-line (RCP only) ===== */
  --rcp-throughline-thickness:    0.09em;
  --rcp-throughline-color:        var(--rcp-primary);
  --rcp-throughline-overshoot:    0.15em;
  --rcp-throughline-anchor-bottom: 40%;

  /* ===== 9. Logo / Wordmark ===== */
  --wordmark-font:           "Teko", system-ui, sans-serif;
  --wordmark-weight:         500;
  --wordmark-line-height:    1.2;
  --wordmark-letter-spacing: -0.025em;
  --wordmark-icon-gap-ratio: 0.20;

  /* ===== 10. Motion Tokens (04b) ===== */
  --ease-out:     cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in:      cubic-bezier(0.4, 0.0, 1, 1);
  --ease-in-out:  cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-linear:  cubic-bezier(0, 0, 1, 1);
  --duration-micro:  100ms;
  --duration-short:  200ms;
  --duration-medium: 300ms;
  --duration-long:   500ms;
}

/* Product scope wrappers — add to root container */
.brand-de  { --product-primary: var(--de-primary);  --product-primary-rgb: var(--de-primary-rgb);  }
.brand-se  { --product-primary: var(--se-primary);  --product-primary-rgb: var(--se-primary-rgb);  }
.brand-di  { --product-primary: var(--di-primary);  --product-primary-rgb: var(--di-primary-rgb);  }
.brand-rcp { --product-primary: var(--rcp-primary); --product-primary-rgb: var(--rcp-primary-rgb); }

/* Global reduced-motion fallback */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-micro: 0ms; --duration-short: 0ms;
    --duration-medium: 0ms; --duration-long: 0ms;
  }
}
```

### 3.2 TypeScript Token Constants

```ts
export type Product = "de" | "se" | "di" | "rcp";

export const PRODUCT_PRIMARY: Record<Product, string> = {
  de: "#2563EB", se: "#9333EA", di: "#0891B2", rcp: "#0F62FE",
};

export const ENDORSEMENT_COLOR = "#666666";
export const ENDORSEMENT_COLOR_REVERSE = "rgba(255, 255, 255, 0.78)";
export const ENDORSEMENT_RATIO = 0.42;
export const WORDMARK_ICON_GAP_RATIO = 0.2;
export const ENDORSEMENT_MIN_WORDMARK_PX = 28;

export const WORDMARK_SIZES = {
  "wm-xl":  { wordmarkPx: 88, iconPx: 95 },
  "wm-lg":  { wordmarkPx: 48, iconPx: 52 },
  "wm-md":  { wordmarkPx: 32, iconPx: 34 },
  "wm-sm":  { wordmarkPx: 28, iconPx: 30 },
  "wm-xs":  { wordmarkPx: 20, iconPx: 22 },
  "wm-min": { wordmarkPx: 16, iconPx: 18 },
};

export const WORDMARK_PARTS = {
  de: { prefix: "Deep", suffix: "Evidence" },
  se: { prefix: "Seek", suffix: "Evidence" },
  di: { prefix: "Deep", suffix: "Insight" },
  // RCP excluded — independent component, always "RCP" three letters all black
};
```

---

## 4. Logo 与字标系统 / Logo & Wordmark System

### 4.1 Logo 构成 / Logo Composition

每个产品 logo = **专属图标 + 双色 wordmark**（横向并排）。两部分不可分离作为完整 logo 使用。
*Each product logo = unique icon + two-tone wordmark (horizontal). Parts cannot be separated as a full logo.*

### 4.2 颜色应用矩阵 / Color Application Matrix

| Background | Prefix | Suffix | Icon | Notes |
|---|---|---|---|---|
| White / `neutral-50` | product primary | `#000000` | product primary | Default |
| Light gray `neutral-100/200` | product primary | `#000000` | product primary | Same as white |
| Product hero gradient / same-color bg | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | Full reverse; suffix no longer black |
| Dark `neutral-900+` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | Full reverse |
| Complex photo/video | Not allowed direct | — | — | Must add `rgba(0,0,0,0.45)` overlay first |

### 4.3 Clear Space / 净空

- 上下 / Vertical: ≥ wordmark size × 0.5
- 左右 / Horizontal: ≥ wordmark size × 0.75
- 与 endorsement signature 间距 / To signature: `signature_top_margin = cap_height × 0.30`

### 4.4 母品牌 Logo 共现规则 / Master-Brand Lockup

母品牌（MedSci Healthcare）有 12 个 SVG 变体（4 配色 × 3 构图）：

| Background | Variant | Files |
|---|---|---|
| Light / white (default) | `default` | `default-{en,cn,full}.svg` |
| Dark / hero gradient | `reverse` | `reverse-{en,cn,full}.svg` |
| Mono navy print, letterhead | `mono-navy` | `mono-navy-{en,cn,full}.svg` |
| Fax, single-color copy | `mono-black` | `mono-black-{en,cn,full}.svg` |

构图 / Composition：`-en` (English only) · `-cn` (Chinese only) · `-full` (both rows)

**母品牌颜色构成 / Master-brand color decomposition**：
- navy `#001A51` — Icon mark primary deep
- medium-blue `#005AA4` — Icon mid + EN/CN wordmark
- cyan `#00AEDB` — Icon highlight
- gray `#666666` — slogan (matches AI endorsement signature)

**最小尺寸 / Minimum size**：24px (digital height) / 6mm (print, icon-only)
**Clear space**：≥ ½X (where X = icon mark height)

### 4.5 入场动效规则 / Entry Animation Rules

| Phase | DE mode | SE mode | General rule |
|---|---|---|---|
| Icon entry | stroke-draw, 1.2s ease-out | bars wake-up, 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) | Geometry decides: stroke for lines, wake-up for shapes |
| Text entry | fadeIn + translateX(-10px→0), 0.8s, delay 0.8s | fadeIn + translateX(-30px→0), 1.0s, delay 0.6s | Text delays icon by 0.6–0.8s |
| Total duration | 1.4–2.0s | 1.4–2.0s | Reverse playback / loop FORBIDDEN |
| `prefers-reduced-motion: reduce` | Skip animation | Skip animation | Mandatory fallback |

---

## 5. 图标系统 / Iconography

### 5.1 产品 Icons / Product Icons

每个产品有一个专属 logo 图标（viewBox 24×24，stroke 2，round caps）：
*Each product has a unique logo icon (viewBox 24×24, stroke 2, round caps):*

#### 5.1.1 DeepEvidence — ECG 心跳描线 / ECG Heartbeat Trace

几何 / Geometry：单笔从左至右，含一个高瘦主峰 + 小回弹 + 平复段。Stroke-draw entry animation.

#### 5.1.2 SeekEvidence — 5 柱垂直波形 / 5-Bar Vertical Waveform

几何 / Geometry：5 个圆角矩形柱体，中柱最矮、内两柱最高、外两柱次高。块体填充。Bars wake-up entry animation with elastic curve.

#### 5.1.3 DeepInsight — 星座节点网络 / Constellation Network (variant C · Hub-as-Star)

6 个圆形节点 + 5 条连线，构成知识图谱。Hub 节点（右中，N5）象征"被发现的 Rising Star KOL"。

**内联 SVG (Production v1.0)**:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="DeepInsight">
  <line x1="5.7481" y1="8.8321" x2="9.2519" y2="11.1679" stroke="#0891B2" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>
  <line x1="9.9615" y1="13.4000" x2="8.5385" y2="17.1000" stroke="#0891B2" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>
  <line x1="11.4000" y1="10.8000" x2="14.1000" y2="7.2000" stroke="#0891B2" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>
  <line x1="15.6012" y1="7.3742" x2="17.2575" y2="11.1599" stroke="#0891B2" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>
  <line x1="19.2519" y1="17.0074" x2="19.6362" y2="18.5448" stroke="#0891B2" stroke-width="1.3" stroke-linecap="round" opacity="0.5"/>
  <circle cx="18.5" cy="14" r="2.4" fill="none" stroke="#0891B2" stroke-width="1"/>
  <circle cx="4.5" cy="8" r="1.3" fill="#0891B2"/>
  <circle cx="10.5" cy="12" r="1.3" fill="#0891B2"/>
  <circle cx="8" cy="18.5" r="1.3" fill="#0891B2"/>
  <circle cx="15" cy="6" r="1.3" fill="#0891B2"/>
  <circle cx="18.5" cy="14" r="1.4" fill="#0891B2"/>
  <circle cx="20" cy="20" r="1.3" fill="#0891B2"/>
</svg>
```

节点规则 / Node rules：普通节点 r=1.3 实心；Hub 用双环结构（内 r=1.4 实心 + 外环 r=2.4 stroke=1.0）；连线 stroke=1.3 opacity=0.5。

#### 5.1.4 Rapid Clinical Pulse — 锐脉单笔描线 / Single-Stroke Pulse

单笔 ECG 风格 / Single-stroke ECG style: 左侧平段 → 高瘦主峰 → 急降回弹 → 小峰 → 右侧平段（H 22，即贯穿横线起始）。

**内联 SVG (Production v1.0)**:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="Rapid Clinical Pulse">
  <path d="M 2 12 L 7.8288 12 A 1.5 1.5 0 0 0 9.284 10.8638 L 10.6516 5.3935 A 0.25 0.25 0 0 1 11.1429 5.4292 L 12.3009 17.0087 A 0.25 0.25 0 0 0 12.7969 17.0209 L 13.857 9.953 A 0.25 0.25 0 0 1 14.3384 9.9023 L 15.135 12.0267 A 1.5 1.5 0 0 0 16.5395 13 L 22 13" fill="none" stroke="#0F62FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

### 5.2 图标几何通则 / Icon Geometry Rules

- ViewBox：24×24 推荐（DE 使用）；非方形几何允许定制 viewBox（SE 用 280×170）
- 颜色 / Color：**永远等于产品主色**，不允许双色（icon-fill = wordmark-prefix-color）
- 与 wordmark 间距 / Gap to wordmark：`wordmark_size × 0.20`
- Stroke：2px (24×24 viewBox); 1.5px for Lucide-derived secondary icons

---

## 6. 信任层组件 / Trust Layer Components

四产品**共享**三大信任徽章；通过 `--product-primary` 自动适配各产品色。所有徽章共用 **pill 几何语言** (`border-radius: 9999px`)。
*All four products share three trust badges; auto-adapt via `--product-primary`. All badges share pill geometry.*

### 6.1 PITL Verified · Physician-in-the-Loop

**含义 / Meaning**：经 PITL 专家网络复核的 AI 输出（最高信任级 / highest trust tier）。
**视觉 / Visual**：产品色填充 + 反白文字与图标。
**Glyph**：盾牌 + 勾选 / shield with check.

| Variant | Class | Font | Wordmark | Use case |
|---|---|---:|---|---|
| Default (compact) | `.badge-pitl` | 12px | `PITL` | UI cards, lists, tables (most common) |
| Full | `.badge-pitl .badge-pitl--full` | 13px | `PITL Verified` | About page, first occurrence, IR material |
| Glyph-only | `<svg>` alone | inherits | — | Tooltip, icon-only zones |

```html
<span class="badge-pitl">
  <svg class="badge-pitl-icon" viewBox="0 0 24 24" fill="none">
    <path d="M12 2 L4 6 v6 c0 5 3.5 9 8 10 c4.5-1 8-5 8-10 V6 L12 2 Z" fill="currentColor"/>
    <path d="M9 12 l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>
  PITL
</span>
```

### 6.2 AIO Official · AI Optimization

**含义 / Meaning**：经 DeepLabeling 治理的厂家官方核准说明书内容 / Manufacturer-official approved labeling, governed by DeepLabeling.
**视觉 / Visual**：深灰填充 (`#334155` neutral-700) + 产品色文字与图标。
**Glyph**：折角文件 + 勾选 / document with corner fold + check.

```html
<span class="badge-aio">
  <svg class="badge-aio-icon" viewBox="0 0 24 24" fill="none">
    <path d="M5 3 V21 H19 V9 L13 3 Z" fill="currentColor"/>
    <path d="M13 3 V9 H19" stroke="white" stroke-width="0.6" opacity="0.5" fill="none"/>
    <path d="M8.5 14 l2.5 2.5 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>
  AIO
</span>
```

### 6.3 VGI Ingredient Mark · Verified Generative Intelligence™

**含义 / Meaning**：跨产品共用的 ingredient brand 标签 / Cross-product ingredient brand.
**视觉 / Visual**：透明/半透白填充 + 产品色描边、文字、图标。
**Glyph**：与 PITL 同款盾牌+勾选（语义一致：经验证 / both = "verified"）。

**内联 SVG (currentColor glyph)**:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="VGI Verified Generative Intelligence">
  <path d="M12 2 L4 6 v6 c0 5 3.5 9 8 10 c4.5-1 8-5 8-10 V6 L12 2 Z" fill="none" stroke="currentColor" stroke-width="2"/>
  <path d="M9 12 l2 2 4-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

**三尺寸变体 / Three size variants**：

| Variant | Height | Content | Use case |
|---|---:|---|---|
| `vgi-full` | 28px | glyph + full text (CN: `VGI · 验证型生成式智能` / EN: `VGI · Verified Generative Intelligence`) | About page, IR, hero secondary |
| `vgi-compact` | 20px | glyph + `VGI` | Footer, AI output bottom-right, card corner |
| `vgi-glyph` | 16/20/24px | glyph only | Favicon-style, FAB, mobile compact |

### 6.4 三徽章配色矩阵 / Three-Badge Color Matrix

| Badge | Fill | Text + glyph | Border |
|---|---|---|---|
| **PITL Verified** | `--product-primary` | `#FFFFFF` | none |
| **AIO Official** | `#334155` | `--product-primary` | none |
| **VGI Mark** | transparent / `rgba(255,255,255,0.5)` | `--product-primary` | `--product-primary` (1.5px) |

**反白态 / Reverse on dark bg**：

| Badge | Reverse fill | Reverse text + glyph |
|---|---|---|
| PITL | `rgba(255,255,255,0.15)` | `#FFFFFF` |
| AIO | `rgba(255,255,255,0.10)` | `#FFFFFF` |
| VGI | transparent + `rgba(255,255,255,0.6)` border | `#FFFFFF` |

---

## 7. 核心 UI 模式 / Core UI Patterns

### 7.1 Nano-Citation `[n]` · 纳米级溯源

**结构 / Structure**：句末上标方括号数字 → 点击触发右侧滑入溯源面板（width 400px）。
*Superscript bracketed number at sentence end → click slides side panel from right (width 400px).*

```css
.nano-citation {
  font-family: "Inter", monospace;
  font-size: 0.7em;
  font-weight: 600;
  color: var(--product-primary);
  vertical-align: super;
  cursor: pointer;
  padding: 0 2px;
  border-radius: 2px;
}
```

**交互 / Interactions**：
- hover: bg `rgba(0,0,0,0.05)` 250ms fade-in
- click: side panel slides in from right, 240ms ease-out
- focus-visible: 2px product-color ring, offset 1px
- keyboard: Tab reachable; Enter/Space triggers panel

**多引用并列 / Multi-citation**: `...AI 加速发展[1][2][3]。` — no commas; each `[n]` independently clickable.

**侧边溯源面板 / Side panel structure**：
| Area | Content |
|---|---|
| Top bar | Citation number + close button |
| Body | Excerpt (highlighted exact quoted text) |
| Meta | Title, authors, year, DOI/PMID |
| Bottom bar | "Open in library" + "Cite this" |

### 7.2 CoT 思维链动画 · dot-spiral 演化 / Chain-of-Thought Animation

**形态 / Form**：5–7 个圆点水平排列，依次"呼吸"（缩放 + 透明度），形成 AI 推理节奏的视觉反馈。

```css
.cot-trace {
  display: inline-flex;
  align-items: center;
  gap: var(--cot-spacing);  /* 14px */
}
.cot-dot {
  width: 6px; height: 6px;
  background: var(--product-primary);
  border-radius: 50%;
  opacity: 0.2;
  animation: cot-breathe 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.cot-dot:nth-child(1) { animation-delay: 0ms; }
.cot-dot:nth-child(2) { animation-delay: 80ms; }
/* ... staggered 80ms each ... */

@keyframes cot-breathe {
  0%, 100% { opacity: 0.2; transform: scale(0.85); }
  40%      { opacity: 1.0; transform: scale(1.15); }
  70%      { opacity: 0.6; transform: scale(1.0); }
}

@media (prefers-reduced-motion: reduce) {
  .cot-dot { animation: none; opacity: 0.6; }
}
```

**触发 / Triggers**：
- AI processing: loop breathe
- AI done: synchronous fade-out → show result
- AI error: all gray + static

**禁忌 / Forbidden**：用于非 AI 处理上下文；加旋转/3D；与通用 spinner 混淆（spinner 是单段弧线 800ms 匀速旋转，CoT 是 5 圆点 1.2s 呼吸 — 视觉明确区分）。

### 7.3 Diff View · 红绿语义 / Red/Green Diff

**用途 / Use**：AI 输出与专家修订对比（DE Verify It, SE PICO revision, RCP A/B comparison）。
**色彩复用母品牌 / Reuse master-brand tokens — do NOT create new colors**:

| Role | Color | Token |
|---|---|---|
| AI error / to-delete | `#DC2626` (deep red, strikethrough) | `--diff-removed-color` |
| Expert revision / added | `#2E9F82` (success-500) + `#E6F4EF` bg | `--diff-added-color` + `--diff-added-bg` |

```html
<p>该患者
  <span class="diff-removed">必须立即停用阿司匹林</span>
  <span class="diff-added">在 INR > 3.0 时建议停用阿司匹林</span>。
</p>
```

**a11y**：必须配合 `<del>`/`<ins>` or `role="deletion"`/`role="insertion"` + aria-label 显式标注"删除内容"/"新增内容" — never rely on color alone.

### 7.4 Progressive Disclosure · L1 / L2 / L3 三层级

| Level | Content | Size | Weight | Color |
|---|---|---:|---:|---|
| **L1** | Core conclusion (one sentence) | 18px | 700 | `--product-primary` |
| **L2** | Evidence summary (2–4 sentences) | 16px | 400 | `#334155` (neutral-700) |
| **L3** | Source detail (citation, year, stats, CI) | 14px | 400 | `#64748B` (neutral-500) |

层间间距 / Inter-level gap: 12px

**默认展开规则 / Default expansion**：
- Desktop: L1 + L2 expanded, L3 collapsed (click to expand)
- **Mobile (2026-05-07 revision)**: L1 + L2 expanded (same as desktop) — was "L1 only" in v0.1, revised because clinicians use mobile bedside where evidence summary visibility > vertical space saving
- Urgent / warning content: all three expanded + black-border warning frame

**`<Disclosure>` component contract**:
- `defaultExpanded` prop: `'L1' | 'L1+L2' | 'all'`
- breakpoint-aware: internal `matchMedia('(max-width: 768px)')`; both desktop and mobile default to `'L1+L2'`
- `urgency="warning"` forces `'all'` + black border style
- `onToggle` callback for product-side telemetry

---

## 8. 动效系统 / Motion System

### 8.1 设计原则 / Design Principles

1. **服务功能 (Functional)** — 每个动效必须回答"解决了什么 UX 问题？"，仅"美感"理由驳回。
2. **节制 (Restrained)** — 优先静态；大多数 ≤ 300ms；同区域并行不超过 2 个动效。
3. **性能优先 (Performant)** — 仅 transform + opacity；禁止 width/height/top/left；60fps 底线。
4. **减动画兜底 (Reduced-motion safe)** — `prefers-reduced-motion: reduce` 下所有 duration token → 0ms。

### 8.2 缓动 4 标准 / Four Easing Tokens

| Token | cubic-bezier | Use case |
|---|---|---|
| `--ease-out` | `0.0, 0.0, 0.2, 1` | Element entry (fade-in, slide-up) |
| `--ease-in` | `0.4, 0.0, 1, 1` | Element exit (fade-out, slide-out) |
| `--ease-in-out` | `0.4, 0.0, 0.2, 1` | Switch / reposition |
| `--ease-linear` | `0, 0, 1, 1` | Progress bar / continuous spinner |

**禁忌 / Forbidden**：bounce, spring physics, ease-in-back, ease-out-elastic (consumer-style curves not appropriate for serious medical context).

### 8.3 时长 4 档 / Four Duration Tokens

| Token | Duration | Use case |
|---|---:|---|
| `--duration-micro` | 100ms | hover / pressed / focus feedback |
| `--duration-short` | 200ms | tooltip / dropdown / toast |
| `--duration-medium` | 300ms | modal / side panel / page transition |
| `--duration-long` | 500ms | complex entry / hero element |

**铁律 / Hard rule**：95% of motion ≤ medium (300ms); long (500ms) only for justified cases (e.g., dashboard first entry). Never exceed 500ms except for locked brand animations (logo entry).

### 8.4 加载状态选型 / Loading State Selection

| Duration | User perception | Component |
|---|---|---|
| `< 100ms` | Instant | **Do not show** loading (delay feels worse) |
| `100ms–1s` | Short wait | **Spinner** (single-arc, 800ms linear rotate) |
| `1s–10s` | Visible wait | **Skeleton screen** (mirrors final content shape) |
| `> 10s or unknown` | Long wait | **Progress bar** (with %, never fake progress) |
| AI reasoning | — | **CoT animation** (locked §7.2) — never use as generic spinner |

**通用 Spinner 与 CoT 显式区分 / Spinner vs CoT visual distinction**：spinner = single arc, 800ms uniform rotation; CoT = 5 dots, 1.2s breathing — must never be confused.

### 8.5 关键场景动效 / Key Scene Motion

| Scene | Property | Duration | Easing |
|---|---|---:|---|
| Modal entry | scale 0.96→1 + opacity 0→1 | 200ms | `--ease-out` |
| Side panel entry | translateX(100%→0) + overlay opacity | 300ms | `--ease-out` |
| Tooltip | opacity 0→1 (no movement) | 100ms | `--ease-out` |
| Tabs switch | opacity 0→1 + translateY(5px→0) | 200ms | `--ease-out` |
| Route transition | opacity 0→1 (no movement) | 300ms | `--ease-out` |
| Form error | shake ±3px | 300ms | `--ease-in-out` |
| Button hover | bg-color, box-shadow | 100ms | `--ease-out` |
| Button pressed | scale 0.98 | 100ms | `--ease-out` |

---

## 9. 无障碍 / Accessibility (WCAG 2.1 AA)

### 9.1 强制目标 / Mandatory Floor

All brand-kit components must meet **WCAG 2.1 AA** before entering product UI. AAA preferred for clinical decision support, IR/investor materials, regulatory/government interfaces.

### 9.2 颜色与对比度 / Contrast Matrix

四产品色在常见背景上的对比度 / Four product colors against common backgrounds:

| Foreground | White `#FFFFFF` | Light gray `#F5F5F5` | Dark `#0F172A` | Light blue `#DBEAFE` |
|---|---|---|---|---|
| `#2563EB` DE | **6.04** ✅ AA | 5.74 ✅ AA | 5.50 ✅ AA | 4.30 ⚠️ large text/UI |
| `#9333EA` SE | **6.97** ✅ AA (near AAA) | 6.62 ✅ AA | 4.77 ✅ AA | 4.96 ✅ AA |
| `#0891B2` DI | **4.50** ✅ AA (text floor) | 4.27 ⚠️ large text/UI | 7.39 ✅ AAA | 3.20 ⚠️ UI only |
| `#0F62FE` RCP | **5.32** ✅ AA | 5.05 ✅ AA | 6.24 ✅ AA | 3.79 ⚠️ large text/UI |
| `#666666` Endorsement | 5.74 ✅ AA | 5.45 ✅ AA | 4.91 ✅ AA | 4.08 ⚠️ large text/UI |
| `#FFFFFF` Reverse | — | 1.07 ❌ | 19.39 ✅ AAA | 1.32 ❌ |

**铁律 / Hard rules**：
- DI `#0891B2` on white is only at text floor (4.50:1) — for body text, increase to 18px or 14px Bold (= "large text" 3.0:1 standard)
- Reverse text endorsement on dark bg uses 78% white `#C7C7C7` (not `#666666`) for AAA consistency
- DE `#2563EB` and RCP `#0F62FE` are close under red-green color blindness — when used on same screen, must combine with wordmark/icon to distinguish; never color-block contrast alone

### 9.3 键盘交互 / Keyboard Interaction

**焦点环 / Focus ring (all interactive elements)**：
```css
:focus-visible {
  outline: 2px solid var(--product-primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Tab order** matches visual hierarchy: `Logo → Wordmark → Nav → L1 → L2 → Verify It/Diff View → side-panel trigger/Nano-Citation → footer endorsement`.

**键盘 trap 退出 / Trap exit paths**：
| Component | Trap risk | Exit |
|---|---|---|
| Nano-Citation side panel | Focus trapped in panel | Esc closes + focus returns to `[n]`; last-element Tab cycles in panel |
| Disclosure L3 fold | Focus lost on collapse | Collapse returns focus to L2 trigger; expand moves to L3 first element |
| Diff View switcher | Switch resets focus | Switch does NOT reset; focus stays on switcher |
| CoT animation | No keyboard control | Must have play/pause + reduce-motion |

### 9.4 屏幕阅读器 ARIA / Screen Reader

**三大徽章 aria-label** (default / `--full`)：
| Badge | Default | Full variant |
|---|---|---|
| PITLBadge | `经 PITL 医师在回路核验` | `Physician-in-the-Loop Verified · 经医师在回路网络核验` |
| AIOBadge | `经 AIO 厂家官方核准` | `AI Optimization Official · 经厂家官方核准` |
| VGIMark | `验证型生成式智能` | `Verified Generative Intelligence Trademark · 验证型生成式智能` |

- Badge SVG icon: `aria-hidden="true"` (decoration; semantics from text label)
- ™ in VGI: read as "Trademark"
- Nano-Citation `<sup>[n]</sup>` must be inside `<button>` (never bare sup) with `aria-label="引用 1：高血压治疗指南，2024"` + `aria-expanded` + `aria-controls`
- CoT: `role="status"` + `aria-live="polite"` (never `assertive`)
- Diff View: `<del>`/`<ins>` OR `role="deletion"`/`role="insertion"` + explicit "删除内容"/"新增内容" aria-label
- Disclosure: `aria-expanded` updates with state; use `hidden` attribute (not `display: none`)

### 9.5 触控目标 / Touch Targets

| Platform | Minimum | Standard |
|---|---|---|
| Mobile (`< 768px`) | **44 × 44 px** | WCAG 2.2 AA + kit-mandatory |
| Desktop (`≥ 768px`) | 24 × 24 px | WCAG 2.1 AA + kit-recommended 32 × 32 |
| Tablet / hybrid | 44 × 44 px | Treat as mobile |

For visually small components (badges, `[n]`), expand hit area via `::before { inset: -10px }` without changing visual appearance.

### 9.6 减动画 / Reduced Motion

All animation components must detect `prefers-reduced-motion: reduce` and provide **equivalent static form**. CoT 5 dots → static visible; Diff View → instant switch; Disclosure → instant show/hide; logo entry → static.

### 9.7 14 条自检清单 / 14-Point Self-Check

1. Contrast ≥ 4.5:1 text / 3:1 non-text + color-blindness still distinguishable
2. Not color-alone: information has shape/text/position redundancy
3. All interactive elements Tab-reachable; Enter/Space triggers; Esc exits
4. `:focus-visible` ring (2px + 2px offset, product color)
5. No keyboard trap; clear exit paths for panel/Disclosure/Diff switcher
6. Tab order matches visual; no `tabindex >= 1`; decorative SVG `tabindex="-1"`
7. Complete aria: aria-label / role / aria-expanded / aria-controls
8. Dynamic status: `aria-live="polite"` (CoT/thinking); never `assertive` except retraction alerts
9. Touch targets ≥ 44×44 mobile / ≥ 24×24 desktop; hit area no overlap
10. `prefers-reduced-motion` provides equivalent static form
11. Min font: body desktop ≥ 14 / mobile ≥ 16; endorsement desktop ≥ 12 / mobile ≥ 14
12. Line-height ≥ 1.5 body; paragraph spacing ≥ 2×; letter-spacing ≥ 0.12em
13. i18n: English variants have ≥ 50% length buffer; `word-break: break-word` for long URLs
14. Automated tests pass: axe-core 0 critical/serious; Lighthouse a11y ≥ 95; Pa11y CI pass

---

## 10. 摄影与插画 / Photography & Illustration

### 10.1 红线（继承母品牌 v1.1 §8）/ Red Lines (inherited)

| Rule | Status |
|---|---|
| AI-generated medical imagery | **❌ Absolutely forbidden** (FTC red line) |
| Stock photo (Getty / Shutterstock / 视觉中国) | ❌ Forbidden |
| Real clinical / conference / workplace photos | ✅ Recommended (natural light, cool-neutral) |
| Geometric abstract illustration | ✅ Product color + neutral, use dot-spiral motif only |
| AI processing visual feedback | Use CoT animation (§7.2); never generic spinner |
| AI output placeholder (no photo scene) | Master-brand placeholder box (`neutral-100` fill + 12px label cap) |
| Emoji, stickers, cartoon characters in AI output | ❌ |
| Concrete "AI brain", "robot", "chip" imagery in patient-facing material | ❌ (violates "physician-in-the-loop" semantics) |
| AI flow diagrams: must use geometric abstract + dot-spiral; never human silhouette / hospital building | ✅ |

### 10.2 dot-spiral 母题规格 / dot-spiral Motif Spec

| Dimension | Locked value |
|---|---|
| Node shape | Circle only (no squares, triangles, etc.) |
| Node size | 6px / 8px / 12px (three tiers; matches CoT 6px) |
| Node spacing | 14–24px (2–3× node size) |
| Color | Single product color + neutral grays (300/500); master-brand uses `#0F62FE`; never mix 4 product colors |
| Form | Straight line / arc (60° or 90°) / spiral / grid (4 basic forms; no mixing) |
| Stroke | ≤ 2px; node-to-node strokes use node-color at opacity 0.5 |
| **Forbidden** | Gradients / shadows / inner glow / 3D / refraction / glitch art |

### 10.3 过渡期摄影来源优先级 / Interim Photography Source Priority

| Priority | Source | Constraint |
|---|---|---|
| **P0** (preferred) | Self-shot + written consent | Pre-shoot consent form + legal review of usage clause |
| P1 | Master-brand existing assets | Only those in `assets/master-brand/` |
| P2 | CC0 / Unsplash commercially licensed | **Per-image legal review** + source link archived |
| P3 | Customer-authorized case photos | Per L4 written consent + cross-tier rules (no T1 → T4 reuse) |

### 10.4 AI 生成插画限制 / AI-Generated Illustration Restrictions

允许 / Allowed:
- ✅ Geometric abstract (points / lines / geometric shapes)
- ✅ Non-medical context
- ✅ "Inspiration reference" only — designer must redraw/vectorize before archiving

绝对禁止 / Absolutely forbidden:
- ❌ Any medical context (organs / devices / imaging / anatomy)
- ❌ Persons (even abstract)
- ❌ Patients / doctors / hospital buildings
- ❌ Concrete medical objects (pills / syringes / stethoscopes)

---

## 11. 资产清单 / Asset Inventory

> **图形策略 / Graphic strategy**：关键 SVG（4 产品 icons + VGI glyph）已**内联在第 5 / 6 节**。其余资产以路径引用形式列出，供 claude.ai/design 按需取用。
> *Key SVGs (4 product icons + VGI glyph) are inlined in §5/§6. Other assets are referenced by path for claude.ai/design to pull as needed.*

### 11.1 Master-Brand Logo Assets (12 SVG)

位置 / Location：`assets/master-brand/`

| Variant | File pattern |
|---|---|
| Default (multi-color) | `default-{en,cn,full}.svg` |
| Reverse (white on dark) | `reverse-{en,cn,full}.svg` |
| Mono navy `#001A51` | `mono-navy-{en,cn,full}.svg` |
| Mono black `#000000` | `mono-black-{en,cn,full}.svg` |

附加 / Supplementary：
- `png/` — 75 raster renders (5 height tiers × 12 SVG + reverse-on-light variants)
- `png/manifest.json` — viewBox / dimension / byte-size index
- `CLEAR-SPACE.md` — clear-space & minimum-size rules
- `LAYERS.md` — 6-layer composition (icon mark / EN wordmark / EN slogan / CN wordmark / CN slogan)
- `A11Y-CONTRAST.md` — 64 WCAG contrast combinations
- `a11y-contrast.json` — raw contrast matrix data

### 11.2 Product Iconography

| Product | Path | Status |
|---|---|---|
| DI (constellation, variant C · Hub-as-Star) | `preview/di-iconography/variant-c/icon{,-reverse,-animated}.svg` | ✅ Production v1.0 |
| RCP (pulse) | `preview/rcp-iconography/variant-c/icon{,-reverse,-animated}.svg` | ✅ Production v1.0 |
| DE (ECG heartbeat) | Logo animation `preview/de-logo-animation.html` + `preview/de-icon-animation.html` | ✅ Delivered |
| SE (5-bar waveform) | Logo animation `preview/se-logo-animation.html` + `preview/se-icon-animation.html` | ✅ Delivered |

### 11.3 VGI Mark Standalone Assets (12 SVG)

位置 / Location：`preview/vgi-mark/`

- `glyph-currentcolor.svg` (24px, shield+check; inherits CSS color)
- `glyph-reverse.svg` · `glyph-de.svg` · `glyph-se.svg` · `glyph-di.svg` · `glyph-rcp.svg`
- `compact.svg` · `compact-reverse.svg` (20px, glyph + "VGI")
- `full-en.svg` · `full-en-reverse.svg` (28px, glyph + "VGI · Verified Generative Intelligence™")
- `full-cn.svg` · `full-cn-reverse.svg` (28px, glyph + "VGI · 验证型生成式智能™")

### 11.4 Design Tokens & Component Library

| Asset | Path | Format |
|---|---|---|
| Production CSS tokens | `ai-tokens.css` | CSS variables + component classes |
| TypeScript token constants | `react/src/tokens/index.ts` | TS exports |
| React component library | `react/src/` (Logo, Wordmark, EndorsementSignature, PITLBadge, AIOBadge, VGIMark, MasterBrandLogo, DIConstellationIcon, RCPPulseIcon, NanoCitation, CoTIndicator, DiffView, Disclosure) | tsx |
| Compiled package | `react/dist/` (cjs + esm + .d.ts) | npm-ready |

### 11.5 Visual Verification Previews (不进生产 / not for production)

| File | Purpose |
|---|---|
| `preview/wordmarks-preview.html` | 4 product wordmarks + endorsement signatures at varied sizes/backgrounds |
| `preview/icon-directions-preview.html` | DI + RCP icon design archive (alternates) |
| `preview/visual-system-preview.html` | Three trust badges + CoT + Diff View + image policy |
| `preview/endorsement-alignment-comparison.html` | Endorsement alignment decision archive |
| `preview/endorsement-color-comparison.html` | Endorsement grayscale decision archive |
| `preview/rcp-iconography/index.html` | RCP icon v1.0 decision archive (3 variants → selected C) |
| `preview/di-iconography/index.html` | DI icon v1.0 decision archive (3 variants → selected C · Hub-as-Star) |
| `preview/vgi-mark/index.html` | VGI Mark 12 standalone SVG preview |
| `preview/master-brand-logos/usage.html` | Master-brand usage spec (PNG rasters / clear-space / a11y 64 / layer structure / checklist) |
| `react/demo/index.html` | React package 9-segment visual verification |

### 11.6 Source Documentation (设计部分 / design portion only)

| Doc | Path | Scope |
|---|---|---|
| `00-architecture-locked.md` | `docs/foundation/architecture.md` | Branded house + 4-product color/font matrix + trust layer + endorsement signature |
| `02-brand-architecture.md` | `docs/architecture/brand-architecture.md` | Logo (icon + two-tone wordmark) + endorsement signature + VGI mark + RCP through-line + naming |
| `04-visual-system.md` | `docs/visual/visual-system.md` | Three trust badges + Nano-Citation + CoT + Diff View + Progressive Disclosure + image policy |
| `04a-component-accessibility.md` | `docs/visual/04a-accessibility.md` | Engineering-level a11y (keyboard / screen reader / color blindness / touch / reduce-motion / i18n / testing & CI) |
| `04b-motion-guidelines.md` | `docs/visual/04b-motion.md` | Universal UI motion (easing / duration tokens + generic loading + page transition + side panel + microinteraction + Toast + Skeleton + error feedback + performance budget) |
| `04c-photography-illustration-interim.md` | `docs/visual/04c-photography-illustration.md` | Interim photography/illustration policy (allowable sources + SOP + dot-spiral motif refinement + interim asset library + W2 migration) |
| Master-brand sub-docs | `docs/master-brand/{layers,a11y,clear-space}.md` | Layer composition + 64 a11y combinations + clear-space rules |

---

## 12. Checklist for claude.ai/design Submission

Before submitting to claude.ai/design, confirm:

- [ ] Document is the **single source of design truth** (all non-design content — voice, governance, competitive — has been excluded per scope)
- [ ] All four product primaries are explicit: `#2563EB`, `#9333EA`, `#0891B2`, `#0F62FE`
- [ ] Endorsement signature color is locked to `#666666` (not `#334155`, not navy)
- [ ] RCP is documented as visually distinct (abbreviation-only + through-line + IBM Carbon)
- [ ] Trust layer (PITL / AIO / VGI) is marked as **shared** across all four products via `--product-primary` scope class
- [ ] Two-tone wordmark anchor logic is preserved (`Deep` / `Seek` / `Deep` = brand action in product color)
- [ ] WCAG 2.1 AA mandatory floor is communicated
- [ ] No emoji / no stock photo / no AI-generated medical imagery (FTC red line)
- [ ] dot-spiral motif is the only allowed illustration motif
- [ ] CoT animation is locked at 5 dots / 6px / 14px spacing / 1.2s breathing / 80ms stagger
- [ ] Motion tokens (4 easing × 4 duration) are explicit
- [ ] All inline SVG (DI, RCP, VGI glyph) are correctly embedded
- [ ] Asset paths in §11 are valid relative paths (claude.ai/design may need to be told these are reference-only)

---

## 文档来源 / Document Source

本文档由 EvidenceTech-Brand-Package v1.0（locked 2026-05-05）整理而成。
*Compiled from EvidenceTech-Brand-Package v1.0 (locked 2026-05-05).*

源文档清单见 §11.6。所有"locked"决策均经 Sponsor 拍板并记录于 governance/ 目录（不在本文档范围内）。
*See §11.6 for source list. All "locked" decisions are Sponsor-approved and recorded in `governance/` (out of scope here).*

— END —
