# 母品牌 Logo · Clear-Space & 最小尺寸规则

**版本**：v1.0 · 2026-05-06
**适用**：`assets/master-brand/` 下 12 个 SVG（default / reverse / mono-navy / mono-black × en / cn / full）
**派生方法**：从 `default-en.svg` 实测 icon mark 与 wordmark bbox（rendered at 1855×512），换算回 viewBox 单位 6882×1900。

---

## 1. 度量定义（X-unit）

定义 **X = icon mark 的高度**（即左侧梅斯标识图形的总高）。

实测：
- viewBox 单位下，icon mark bbox ≈ 1373 × 1262
- 行高（en/cn）单行 viewBox 高度 1900；行高内 icon 占 ≈ 66.4%
- → **X ≈ 1262 viewBox-units，等价于"渲染后的总 logo 高度 × 0.664"**

简便记忆：**X ≈ 渲染后 logo 总高 × 2/3**

---

## 2. Clear-Space 净空规则

### 2.1 最小净空（默认）

所有变体 logo 四周保留至少 **½ X** 的视觉净空（不允许任何文字、图形、其他 logo 进入此区域）。

```
                ↑ ½X
        ┌───────────────────┐
   ½X → │  [icon] MedSci... │ ← ½X
        └───────────────────┘
                ↓ ½X
```

数值换算（按渲染高度）：

| 渲染 logo 总高 | X-unit | 最小净空 ½X |
|---|---:|---:|
| 24 px（最小） | 16 px | 8 px |
| 48 px | 32 px | 16 px |
| 96 px | 64 px | 32 px |
| 192 px | 128 px | 64 px |
| 512 px | 340 px | 170 px |

### 2.2 推荐净空（呼吸感更好）

主视觉位（首屏 hero / 名片正面 / 海报封面 / 演讲幕墙）使用 **1 X** 净空，给品牌识别感留更多余地。

### 2.3 不可侵入元素

- 其他 logo / 第三方品牌标
- 标题文字、副标题
- 装饰线条、分隔条
- 图片、插画
- 背景纹理（在净空区内不允许有视觉密度变化）

允许出现在净空区内的：
- 纯色背景（含 reverse 变体的深底）
- 极低对比度的辅助元素（如 5% 灰水印）

### 2.4 与产品 wordmark 共构（co-brand）

参 `02-brand-architecture.md` §4.3 与 React `<CoBrandLockup>`：
- 母品牌 logo 与产品 wordmark 中间的竖分隔线高度 = 母品牌 logo 高 × 0.6
- 分隔线两侧的水平间距各 = ½ X（等同标准净空）

---

## 3. 最小尺寸

### 3.1 数字（屏幕）

| 变体 | 最小宽度 | 对应 logo 高 | 备注 |
|---|---:|---:|---|
| en（横版英文） | 96 px | ≈ 26 px | 单行，aspect 3.62 |
| cn（横版中文） | 80 px | ≈ 22 px | 单行，aspect 3.64；中文字符比英文紧凑 |
| full（双行 EN+CN） | 96 px | ≈ 53 px | 双行，aspect 1.81 |
| icon mark only | 24 px | 24 px | 等同 favicon 最小尺寸 |

低于以上尺寸的场景应使用 **icon mark only**（不含 wordmark），并保证 ≥ 24 px。

### 3.2 印刷

| 变体 | 最小宽度 |
|---|---:|
| en | 25 mm |
| cn | 20 mm |
| full | 25 mm |
| icon mark only | 6 mm |

低于以上印刷尺寸时，须使用 mono-navy 或 mono-black 单色版以保护小尺寸下的可读性（避免 default 多色版在小尺寸下色彩混淆）。

---

## 4. 派生当量速查

如果工程实现按 logo 高度（CSS `height`）控制，常见尺寸的等价 padding（推荐）：

```css
/* 96px-tall logo */
.logo-wrap { padding: 32px; }   /* = ½ X */

/* 48px-tall logo */
.logo-wrap { padding: 16px; }

/* 24px-tall logo (header 紧凑场景) */
.logo-wrap { padding: 8px; }
```

---

## 5. 校验清单（设计/工程师 PR 前自查）

- [ ] Logo 四周保留 ≥ ½ X 净空
- [ ] Logo 总高 ≥ 24 px（数字）/ ≥ 6 mm（印刷）
- [ ] 小于上述阈值时，已替换为 icon mark only
- [ ] 净空区内无其他 logo / 标题 / 装饰元素
- [ ] Co-brand 场景下分隔线与水平间距遵循 §2.4
- [ ] 印刷场景下，logo 宽度 < 25 mm 时已切换为 mono 单色版

---

## 6. 视觉档案

参见 `preview/master-brand-logos/usage.html` § Clear Space Diagrams，提供 5 个尺寸阶梯下的 keep-out 区域可视化。
