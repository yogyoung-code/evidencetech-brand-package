# 母品牌 Logo · Reverse / Monochrome 变体

**状态**：✅ 必交付（reverse / mono-navy / mono-black）+ 锦上添花（PNG 栅格 / Clear-Space / A11y / Layers）均已完成（2026-05-06）
**来源**：用户上传的「梅斯logo中英文版.ai」由 `pdftocairo` 提取 SVG 后，由 `scripts/build-master-brand-svg.mjs` 自动生成 12 份变体
**最小可用尺寸**：24px（高度方向）
**资产位置**：`assets/master-brand/`
**完整使用规范**：[`usage.html`](./usage.html)（自包含视觉档案 · 收纳 PNG 栅格阶梯 / 净空 spec / WCAG 对比度 64 组 / 图层结构）

---

## 资产清单（12 文件）

```
assets/master-brand/
├── default-{en,cn,full}.svg      ← 原色（基线，仅 viewBox 拆分）
├── reverse-{en,cn,full}.svg      ← 反白（白 + 78% 白 slogan）
├── mono-navy-{en,cn,full}.svg    ← 单色 #001A51
└── mono-black-{en,cn,full}.svg   ← 单色 #000000
```

每变体三种构图：
- `-en.svg`：仅英文版（dot-spiral + "MedSci Healthcare" + "Improving Healthcare Quality"）
- `-cn.svg`：仅中文版（dot-spiral + "MedSci 梅斯" + "改善医疗质量"）
- `-full.svg`：原 .ai 完整画布（EN 在上 + CN 在下）

---

## 颜色映射

| 原始 4 色 | 用途 | reverse | mono-navy | mono-black |
|---|---|---|---|---|
| `#001A51` (navy) | 主品牌色 | `#FFFFFF` | `#001A51` | `#000000` |
| `#005AA4` (blue) | 文字主色 | `#FFFFFF` | `#001A51` | `#000000` |
| `#00AEDB` (cyan) | dot-spiral accent | `#FFFFFF` | `#001A51` | `#000000` |
| `#666666` (grey) | slogan | `rgba(255,255,255,0.78)` | `#001A51` | `#000000` |

reverse 的 slogan 用 78% 白与 AI Brand Kit endorsement signature reverse 同源。

---

## 使用矩阵

| 场景 | 资产 |
|---|---|
| 浅底 / 白底默认 | `default-{en,cn}.svg` |
| 深底 / hero 渐变 / 暗色 UI | `reverse-{en,cn}.svg` |
| 母品牌 navy 单色印刷 | `mono-navy-{en,cn}.svg` |
| 传真 / 单色复印 / 低预算印刷 | `mono-black-{en,cn}.svg` |
| 同时展示英文 + 中文 | `{variant}-full.svg` |
| AI 子品牌 co-brand lockup（02 §4.3） | `default-` 或 `reverse-` 按背景选 |

---

## 重新生成

资产从 `pdftocairo` 提取的中间 SVG 经颜色替换 + viewBox 裁切而来。如需重新生成（例如用户提供新 .ai 文件）：

```bash
# 把新 .ai 放到 uploads/ 同名位置
node scripts/build-master-brand-svg.mjs
```

脚本会：
1. 用 `pdftocairo` 把 .ai 转 SVG（写入 `/tmp/master-brand-extract/`）
2. 替换 4 种原始 rgb() 色为目标变体色
3. 调整 viewBox 拆分 EN / CN / full
4. 写出 12 份 SVG 到 `assets/master-brand/`

---

## 母品牌 W2 锦上添花资产（2026-05-06 状态）

| 项 | 状态 | 产物 |
|---|---|---|
| Source AI 文件 | ✅ 已有（用户上传） | `uploads/梅斯logo中英文版.ai` |
| 详细图层说明 / 命名 | ✅ 完成 | [`assets/master-brand/LAYERS.md`](../../assets/master-brand/LAYERS.md) |
| 栅格化 PNG（24-512px 各档 × 12 SVG + reverse 深底版 = 75 张） | ✅ 完成 | [`assets/master-brand/png/`](../../assets/master-brand/png/) + [`manifest.json`](../../assets/master-brand/png/manifest.json) |
| a11y 对比度报告 | ✅ 完成（64 组对比度 · WCAG 2.1 AA / AAA 评级） | [`assets/master-brand/A11Y-CONTRAST.md`](../../assets/master-brand/A11Y-CONTRAST.md) + [`a11y-contrast.json`](../../assets/master-brand/a11y-contrast.json) |
| Clear-space 倍数规则 | ✅ 完成（½X 最小 · 1X 主视觉位 · 数字与印刷最小尺寸表） | [`assets/master-brand/CLEAR-SPACE.md`](../../assets/master-brand/CLEAR-SPACE.md) |
| Slogan 反白字色官方签字 | ⏳ 待母品牌团队 sign-off | 当前用 78% 白（与 AI Brand Kit endorsement reverse 同源） |
| 母品牌 logo motion 反白态 | ⏳ 待母品牌团队补 | 如未来引入 logo 动效再考虑 |
| ICC color profile / Pantone 印刷色值 | ⏳ 待母品牌团队补 | 印刷场景需要 |
| 视频片头模板 | ⏳ 待母品牌团队补 | 营销视频用 |

---

## 决策档案

- **为什么 reverse 的 slogan 用 78% 白而不是纯白**？— 与 AI Brand Kit endorsement signature `--endorsement-color-reverse: rgba(255, 255, 255, 0.78)` 同源（02 §2.3 v0.6 决策）。让 slogan 视觉等级降级为「次级注脚」，与主 logo 拉开层次。如母品牌团队后续要求统一为纯白，按 06 §2 RFC 流程改。
- **为什么三种构图都给（en / cn / full）**？— 02 §4.3 co-brand lockup 多场景：IR 用 EN（国际化）；产品 about 页用 CN；M&A 协议封面用 full canvas（兼顾两种受众）。给齐避免每次手工裁切。
- **为什么最小尺寸 24px**？— Sponsor 拍板。低于 24px 时 dot-spiral 的小节点（最小直径约 0.4 个 logo 单位）会糊化、与 "ms" 内嵌字符融为一体。如未来需要更小尺寸（favicon），需要单独提供「仅 dot-spiral 图标」版本（不在本次范围）。
