# 母品牌 Logo · 图层结构与可拆分使用指南

**版本**：v1.0 · 2026-05-06
**适用**：`assets/master-brand/` 12 SVG · 派生自用户上传 `梅斯logo中英文版.ai`

---

## 1. 全局结构（所有 12 个 SVG 共享）

每个 SVG 内部图形完全一致（71 paths + 10 symbol glyphs + 8 use refs）；变体之间的差异只在两处：

1. **viewBox**（决定显示哪一半）
   - `*-en.svg` → `viewBox="0 0 6882 1900"` 仅显示英文行
   - `*-cn.svg` → `viewBox="0 1900 6882 1892"` 仅显示中文行
   - `*-full.svg` → `viewBox="0 0 6882 3792"` 显示双行
2. **fill 颜色**（决定配色版本）
   - `default-*` → 多色（navy + medium-blue + cyan + gray）
   - `reverse-*` → 白 + 78% 白（slogan）
   - `mono-navy-*` → 全部 #001A51
   - `mono-black-*` → 全部 #000000

---

## 2. 图层地图（自上而下）

```
┌─────────────────────────────────────── viewBox y=0 ───
│
│   ┌────────┐                                    ↑
│   │  ICON  │    MedSci Healthcare              ~1262 (X-unit)
│   │  MARK  │                                    ↓
│   └────────┘    AI-Enabled. Physician-Verified. Globally Ready.
│                                                  (slogan EN)
├──────────────────────────────────────── y=1900 ──── ← en/cn 切分线
│
│   ┌────────┐
│   │  ICON  │    梅斯健康
│   │  MARK  │
│   └────────┘    AI 赋能 · 医生审核 · 全球就绪
│                                                  (slogan CN)
└─────────────────────────────────────── y=3792 ───
```

### 2.1 图层索引

| 序 | 图层 | viewBox 区域（约） | fill 来源 | 备注 |
|---|---|---|---|---|
| L1 | Icon mark（梅斯标识图形） | x ≈ 371–1744, y ≈ 371–1633（en 范围内） | navy + medium + cyan 多色（default） | 多 path 组合，含描边路径（4 条 stroke-only） |
| L2 | EN wordmark "MedSci Healthcare" | x ≈ 1966–6455, y ≈ 700–1500 | medium-blue（default） | 由 path 直绘，未使用 glyph |
| L3 | EN slogan "AI-Enabled. Physician-Verified. Globally Ready." | x ≈ 1950–6900, y ≈ 1670–1900 | gray（default） | 由 `<use href="#glyph1-1...6">` 引用 6 个 EN 字符路径 + 直绘其余 |
| L4 | CN wordmark "梅斯健康" | x ≈ 1966–4747, y ≈ 2100–3000 | medium-blue（default） | 同 L2，path 直绘 |
| L5 | CN slogan "AI 赋能 · 医生审核 · 全球就绪" | x ≈ 1950–6900, y ≈ 3170–3450 | gray（default） | 由 `<use href="#glyph0-1, glyph0-2">` 引用 2 个 CN 字符 + 直绘其余 |
| L6 | Icon mark（CN 行） | x ≈ 371–1744, y ≈ 2271–3533 | 同 L1 | full 版本下与 L1 共存；en/cn 单独版本下分别裁切 |

> 注：viewBox 坐标以 `default-full.svg` 为基准。

### 2.2 颜色分布

| Token | Hex | 出现位置 | 在 mono / reverse 下被替换为 |
|---|---|---|---|
| navy | `#001A51` | Icon mark 主深色 | mono-navy: 保留 / mono-black: `#000000` / reverse: `#FFFFFF` |
| medium-blue | `#005AA4` | Icon mark 中段 + EN/CN wordmark + icon 描边 | 同上 |
| cyan | `#00AEDB` | Icon mark 高光 | 同上 |
| gray | `#666666` | EN/CN slogan | mono-navy: `#001A51` / mono-black: `#000000` / reverse: `rgba(255,255,255,0.78)`（78% 白） |

---

## 3. 可独立使用的子集

### 3.1 ✅ 允许的拆分

| 子集 | 提取方法 | 用法 |
|---|---|---|
| **Icon mark only** | 取 viewBox `viewBox="371 371 1373 1262"` 裁切 default-en.svg | favicon / app icon / 极小尺寸场景 |
| **EN row only** | 直接用 `*-en.svg` | 英文优先文档 / 国际投资者沟通 |
| **CN row only** | 直接用 `*-cn.svg` | 中文优先文档 / 国内 BD 材料 |
| **Wordmark only**（极少用） | 须手工裁切 viewBox `viewBox="1966 700 4490 800"`；不推荐作为常态 | 仅用于 brand book 内部演示，不允许单独作为 logo 使用 |

### 3.2 ❌ 不允许的拆分

- 拆下任意单个字（如只显示「梅」字）
- 拆下 slogan 单独使用（slogan 不允许脱离 wordmark）
- 改变 icon mark 与 wordmark 的相对位置 / 比例
- 改变 wordmark 字体（不允许用其他字体重排"MedSci Healthcare"或"梅斯健康"）
- 在 default 多色版上替换任意一色（如把 cyan 改成 brand-de 蓝） —— 须用 mono 或 reverse 变体
- 在 icon mark 内部裁切（不允许只取 icon 的一部分）

---

## 4. 工程师按 path id 提取局部资产

由于 SVG 是从 .ai 经字体路径化导出，没有语义化的 `id="icon"` / `id="wordmark"` 标签。如需提取局部，推荐两种方法：

### 4.1 viewBox 裁切（推荐）

复制原 SVG，只改 `viewBox` 与 `width/height`，剩下内容不动。SVG 渲染器会按 viewBox 自动裁切显示：

```html
<!-- Icon mark only, 64×58 -->
<svg width="64" height="58" viewBox="371 371 1373 1262" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- 复制 default-full.svg 的 <defs> 与 <g> 内容 -->
</svg>
```

### 4.2 React 组件（已封装）

```jsx
import { MasterBrandLogo } from '@yogyoung-code/ai-brand-kit';

<MasterBrandLogo variant="default" comp="full" />   {/* 双行 */}
<MasterBrandLogo variant="default" comp="en" />     {/* 仅英文行 */}
<MasterBrandLogo variant="reverse" comp="cn" />     {/* 仅中文行，反白 */}
<MasterBrandLogo variant="mono-navy" comp="en" />   {/* 单色深蓝 */}
```

icon-only 子集组件（v0.2 计划）：暂未提供，按需求评估后加入。

---

## 5. 文件 inventory

```
assets/master-brand/
├── default-en.svg          多色 · 仅英文行
├── default-cn.svg          多色 · 仅中文行
├── default-full.svg        多色 · 双行
├── reverse-en.svg          反白 · 仅英文行
├── reverse-cn.svg          反白 · 仅中文行
├── reverse-full.svg        反白 · 双行
├── mono-navy-en.svg        单色深蓝 · 仅英文行
├── mono-navy-cn.svg        单色深蓝 · 仅中文行
├── mono-navy-full.svg      单色深蓝 · 双行
├── mono-black-en.svg       单色黑 · 仅英文行
├── mono-black-cn.svg       单色黑 · 仅中文行
├── mono-black-full.svg     单色黑 · 双行
├── png/                    渲染的 PNG 栅格（5 高度档 × 12 SVG + 反白衬底版 = 75 张）
│   └── manifest.json       PNG 索引（含每张 viewBox / 尺寸 / 字节）
├── CLEAR-SPACE.md          净空与最小尺寸规则
├── LAYERS.md               本文件
├── A11Y-CONTRAST.md        WCAG 对比度报告
└── a11y-contrast.json      对比度矩阵原始数据
```
