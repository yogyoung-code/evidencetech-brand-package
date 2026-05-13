# `@yogyoung-code/ai-brand-kit` · React 组件包

梅斯健康 AI Brand Kit v1.0 的 React 实现。覆盖信任层 7 组件 + Logo 系统 4 组件。

> 配套规范：上一级目录 `04-visual-system.md`、`02-brand-architecture.md`、`ai-tokens.css`。本包仅是规范的 React 落地，不做规范层决策。

---

## 安装与接入

```bash
# 在 monorepo 内或私 NPM 注册
npm install @yogyoung-code/ai-brand-kit
```

```ts
// 1. 引入样式（必须，CSS 变量与 component class 都在这）
import "@yogyoung-code/ai-brand-kit/styles.css";

// 2. 用 BrandScope 包裹产品根容器，让 --product-primary 自动生效
import { BrandScope, PITLBadge, NanoCitation } from "@yogyoung-code/ai-brand-kit";

export default function App() {
  return (
    <BrandScope product="de">
      <p>
        AI 加速发展<NanoCitation index={1} />。
      </p>
      <PITLBadge />
      <PITLBadge full />
    </BrandScope>
  );
}
```

---

## 组件清单

### 信任层（7）

| 组件 | 用途 | 关键 prop |
|---|---|---|
| `PITLBadge` | PITL Verified 徽章 | `full`、`reverse` |
| `AIOBadge` | AIO Official 徽章 | `full`、`reverse` |
| `VGIMark` | VGI Ingredient Mark | `variant: "compact" \| "full" \| "glyph"`、`lang: "cn" \| "en"`、`reverse` |
| `NanoCitation` | `[n]` 上标 | `index`、`onActivate` |
| `CoTIndicator` | 思维链 dot-spiral 动画 | `dots: 5 \| 6 \| 7`、`state: "loading" \| "done" \| "error"` |
| `DiffView` / `DiffRemoved` / `DiffAdded` | 红绿差异 | （inline span） |
| `Disclosure` + `Disclosure.L1/L2/L3` | 渐进披露三层级 | （compound） |

### Logo 系统（4）

| 组件 | 用途 | 关键 prop |
|---|---|---|
| `Logo` | 完整 logo（icon + wordmark + 可选签名） | `product`、`size`、`reverse`、`endorsement` |
| `Wordmark` | 仅 wordmark（与完整 logo 对等的合法形态，全场景可用） | `product`、`size`、`reverse` |
| `EndorsementSignature` | "由 梅斯健康 出品" / "by MedSci Healthcare" | `lang`、`size`、`reverse` |
| `BrandScope` | 产品色 scope provider | `product` |

### 母品牌 logo（1 + helpers）

| 组件 / 函数 | 用途 | 关键 prop / 参数 |
|---|---|---|
| `MasterBrandLogo` | MedSci Healthcare 完整 logo（dot-spiral + wordmark + slogan） | `variant: "default" \| "reverse" \| "mono-navy" \| "mono-black"`、`layout: "en" \| "cn" \| "full"`、`height: number`、`baseUrl: string` |
| `masterBrandLogoUrl({ variant, layout, baseUrl })` | URL 解析 helper（非 React 场景） | — |
| `masterBrandLogoFilename(variant, layout)` | 仅返回文件名（如 `"reverse-cn.svg"`） | — |

**接入步骤**：把 `dist/assets/master-brand/` 12 份 SVG 复制到你站点的静态资源目录（如 `public/assets/master-brand/`），或托管到 CDN，传 `baseUrl` 指向那里。

```ts
// 默认（站点根 /assets/master-brand/）
<MasterBrandLogo variant="reverse" layout="cn" height={48} />

// 自定义 baseUrl（CDN 或 prefix）
<MasterBrandLogo
  baseUrl="https://cdn.example.com"
  variant="mono-navy"
  layout="full"
  height={64}
/>
```

最小可用尺寸 24px；低于此组件会 console.warn。详见 `02-brand-architecture.md` §4.3.1。

### Co-Brand Lockup（1）

| 组件 | 用途 | 关键 prop |
|---|---|---|
| `CoBrandLockup` | 母品牌 logo + 产品 wordmark 横向并排（02 §4.3） | `product`、`productSize`、`masterBrandVariant`、`masterBrandLayout`、`endorsement`、`reverse`、`baseUrl`、`gap` |

按 spec 自动计算：
- 母品牌 logo 高度 = 产品 wordmark 高度 × **1.4**
- 中间 1px 竖分隔线，高度 = 母品牌 logo 高度 × **0.6**
- 浅底用 `#CBD5E1`（neutral-300）；反白态用 `rgba(255,255,255,0.3)`

```tsx
// 最常见：DE 产品 + 中文母品牌 + 中文 endorsement
<CoBrandLockup product="de" />

// IR 国际化场景
<CoBrandLockup product="de" masterBrandLayout="en" endorsement="en" />

// Hero 反白
<CoBrandLockup product="rcp" reverse />

// 单色印刷
<CoBrandLockup product="se" masterBrandVariant="mono-navy" />
```

用于 IR 材料、M&A / 合作协议封面、产品 about 页"集团关系"区。

---

## 偏离条款不可被"修复"

- 中文为主语言、四产品独立色相、Teko wordmark 字体、4 个 hero 渐变、Diff 复用母品牌 success/error token —— 这些是 v1.0 经 Sponsor 拍板的偏离母品牌决策，**不是 bug**。如有改动需求，按 `06-governance.md` §2 走 RFC 流程。

---

## 构建

```bash
npm install
npm run build       # tsup → dist/{index,tokens}.{js,cjs,d.ts} + dist/styles.css
npm run typecheck   # tsc --noEmit
```

构建产物：

| 文件 | 用途 |
|---|---|
| `dist/index.js` / `dist/index.cjs` | 主入口（ESM / CJS） |
| `dist/index.d.ts` / `dist/index.d.cts` | 类型声明 |
| `dist/tokens.js` / `dist/tokens.cjs` | 仅常量子入口 — 给非 React 消费方（PDF/Canvas/邮件）用 |
| `dist/styles.css` | CSS 变量与 component class（必须 import） |

CSS 变量来源是 kit 根目录的 `../ai-tokens.css`（v1.0 锁定）。`scripts/copy-css.mjs` 在
build 时镜像到 `src/styles/` 与 `dist/`——不要在本目录手编 `ai-tokens.css`。

> 注：build 脚本使用 `tsup --no-config` + CLI 标志，避免 `tsup.config.ts` 经由 `bundle-require` 写入临时文件。在受限文件系统（部分沙盒、CI runner）下更稳。

---

## Demo

```bash
npm run build
# importmap 需要 http 协议；用本地 http server 打开：
python3 -m http.server 8080
# 然后访问 http://localhost:8080/demo/index.html
```

`demo/index.html` 用浏览器原生 ESM import dist 产物，渲染 7 个 trust + 4 个 logo
组件在 4 产品 scope 下的所有变体（紧凑/full/反白/尺寸阶梯/家族 lockup）。
不进生产；仅为视觉验证。

---

## 构建验证（已通过）

build 完成时已运行 20 项 smoke 测试（`react-dom/server` 渲染各组件每个变体），
全部通过。Logo / Wordmark / EndorsementSignature / 三大徽章 / NanoCitation /
CoTIndicator（loading/done/error）/ DiffView / Disclosure 均能无异常输出
预期 markup。

---

## 版本

- `v0.1.0`（2026-05-06）：初始版。信任层 7 组件 + Logo 系统 4 组件全部就位。
