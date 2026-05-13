# 资产下载

完整 SVG / PNG / CSS / 决策档案的直链。所有路径相对于站点根，可直接 `Ctrl+S` 保存。

## 母品牌 12 SVG

| 变体 | EN（仅英文） | CN（仅中文） | Full（双行） |
|---|---|---|---|
| **Default** 多色 | [`default-en.svg`](/assets/master-brand/default-en.svg) | [`default-cn.svg`](/assets/master-brand/default-cn.svg) | [`default-full.svg`](/assets/master-brand/default-full.svg) |
| **Reverse** 反白 | [`reverse-en.svg`](/assets/master-brand/reverse-en.svg) | [`reverse-cn.svg`](/assets/master-brand/reverse-cn.svg) | [`reverse-full.svg`](/assets/master-brand/reverse-full.svg) |
| **Mono Navy** 单色深蓝 | [`mono-navy-en.svg`](/assets/master-brand/mono-navy-en.svg) | [`mono-navy-cn.svg`](/assets/master-brand/mono-navy-cn.svg) | [`mono-navy-full.svg`](/assets/master-brand/mono-navy-full.svg) |
| **Mono Black** 单色黑 | [`mono-black-en.svg`](/assets/master-brand/mono-black-en.svg) | [`mono-black-cn.svg`](/assets/master-brand/mono-black-cn.svg) | [`mono-black-full.svg`](/assets/master-brand/mono-black-full.svg) |

## 母品牌 75 PNG

5 高度档：24 / 48 / 96 / 192 / 512 px。

- 索引（manifest.json，含每张 viewBox / 尺寸 / 字节）：[`/assets/master-brand/png/manifest.json`](/assets/master-brand/png/manifest.json)
- 全部 PNG 列表：[`/assets/master-brand/png/`](/assets/master-brand/png/)

常用直链：

| 变体 / 构图 | 24 | 48 | 96 | 192 | 512 |
|---|---|---|---|---|---|
| default-en | [24](/assets/master-brand/png/default-en-24.png) | [48](/assets/master-brand/png/default-en-48.png) | [96](/assets/master-brand/png/default-en-96.png) | [192](/assets/master-brand/png/default-en-192.png) | [512](/assets/master-brand/png/default-en-512.png) |
| default-cn | [24](/assets/master-brand/png/default-cn-24.png) | [48](/assets/master-brand/png/default-cn-48.png) | [96](/assets/master-brand/png/default-cn-96.png) | [192](/assets/master-brand/png/default-cn-192.png) | [512](/assets/master-brand/png/default-cn-512.png) |
| default-full | [24](/assets/master-brand/png/default-full-24.png) | [48](/assets/master-brand/png/default-full-48.png) | [96](/assets/master-brand/png/default-full-96.png) | [192](/assets/master-brand/png/default-full-192.png) | [512](/assets/master-brand/png/default-full-512.png) |
| reverse-en (on dark) | [24](/assets/master-brand/png/reverse-en-24-on-dark.png) | [48](/assets/master-brand/png/reverse-en-48-on-dark.png) | [96](/assets/master-brand/png/reverse-en-96-on-dark.png) | [192](/assets/master-brand/png/reverse-en-192-on-dark.png) | [512](/assets/master-brand/png/reverse-en-512-on-dark.png) |
| mono-navy-en | [24](/assets/master-brand/png/mono-navy-en-24.png) | [48](/assets/master-brand/png/mono-navy-en-48.png) | [96](/assets/master-brand/png/mono-navy-en-96.png) | [192](/assets/master-brand/png/mono-navy-en-192.png) | [512](/assets/master-brand/png/mono-navy-en-512.png) |

## 信任层 / 产品图标 SVG（在 React 包内）

源码位置：[`/react/src/icons/`](/react/src/icons)

| 图标 | 用途 |
|---|---|
| `pitl-shield.svg` | PITL Verified shield + check |
| `aio-folded.svg` | AIO Official 折角文件 + 勾选 |
| `vgi-shield.svg` | VGI Ingredient Mark shield outline |
| `de-product.svg` / `se-product.svg` / `di-product.svg` / `rcp-product.svg` | 4 产品图标 |

可在 React 中导入：

```tsx
import { Logo } from '@yogyoung-code/ai-brand-kit';
<Logo product="de" />
```

## RCP / DI / VGI 决策档案 SVG

每个 production 决策档案下都有 standalone SVG。

- **RCP 3 变体（A / B / C）×（small / mid / large）= 9 SVG**：[`/preview/rcp-iconography/`](/preview/rcp-iconography/)
- **DI 3 变体 ×（small / mid / large）= 9 SVG**：[`/preview/di-iconography/`](/preview/di-iconography/)
- **VGI 12 standalone SVG**（glyph 6 + compact 2 + full 4）：[`/preview/vgi-mark/`](/preview/vgi-mark/)

## CSS Token

- 完整 CSS：[`/ai-tokens.css`](/ai-tokens.css)
- 交互式浏览：[Token 浏览器](/assets-browser/tokens)

## 规范文档

| 文档 | 位置 |
|---|---|
| Clear-Space 与最小尺寸 | [`/master-brand/clear-space`](/master-brand/clear-space) · [源 .md](/assets/master-brand/CLEAR-SPACE.md) |
| A11y 对比度报告（64 组） | [`/master-brand/a11y`](/master-brand/a11y) · [源 .md](/assets/master-brand/A11Y-CONTRAST.md) · [JSON](/assets/master-brand/a11y-contrast.json) |
| 图层结构 | [`/master-brand/layers`](/master-brand/layers) · [源 .md](/assets/master-brand/LAYERS.md) |

## 整改清单（给三原型工程师）

[05 整改清单](/governance/rectification) 列出 DE / SE / RCP 三原型按 sprint 排期的整改项。

## React 包 dist（预构建）

构建产物在 `react/dist/`（运行 `cd react && npm run build` 生成）。包含：

- `dist/index.js` (CJS)
- `dist/index.mjs` (ESM)
- `dist/index.d.ts` (TypeScript types)
- `dist/styles.css` (从 ai-tokens.css 同步)
- `dist/assets/master-brand/` (12 SVG)
