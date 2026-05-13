# 组件总览

`@yogyoung-code/ai-brand-kit` v0.1.0 — 13 个 React 组件，分 3 类：信任层 7 / Logo 系统 4 / 母品牌 2。TypeScript · ESM + CJS · Tree-shakeable。

## 安装

```bash
# 私 NPM 或 monorepo 内
npm install @yogyoung-code/ai-brand-kit
```

```ts
// 1. 引入样式（必须）
import '@yogyoung-code/ai-brand-kit/styles.css';

// 2. 用 BrandScope 包住产品根
import { BrandScope, PITLBadge, NanoCitation } from '@yogyoung-code/ai-brand-kit';

export default function App() {
  return (
    <BrandScope product="de">
      <p>AI 加速发展<NanoCitation index={1} />。</p>
      <PITLBadge />
    </BrandScope>
  );
}
```

## 组件三类

| 类别 | 组件 | 详见 |
|---|---|---|
| 信任层（7） | PITLBadge · AIOBadge · VGIMark · NanoCitation · CoTIndicator · DiffView · Disclosure | [信任层组件](/components/trust-layer) |
| Logo 系统（4） | Logo · Wordmark · EndorsementSignature · BrandScope | [Logo 组件](/components/logo) |
| 母品牌（2） | MasterBrandLogo · CoBrandLockup | [母品牌组件](/components/master-brand-comp) |

## 实时演示

13 组件 9 段视觉验证：[React 包 demo](/demos/react-components)（iframe 嵌入 `react/demo/index.html`）。

## 包结构

```
react/
├── package.json                    name @yogyoung-code/ai-brand-kit · TypeScript · ESM+CJS
├── tsconfig.json
├── README.md
├── demo/index.html                 ESM importmap demo · 9 段视觉验证
├── scripts/
│   ├── copy-css.mjs                同步 ai-tokens.css 到 dist
│   └── copy-master-brand.mjs       同步 12 SVG 到 dist/assets
└── src/
    ├── index.ts                    主入口
    ├── tokens/                     四产品色 + 尺寸阶梯常量
    ├── primitives/                 BrandScope（产品 scope provider）
    ├── icons/                      7 SVG icons（PITL/AIO/VGI shield + DE/SE/DI/RCP product）
    ├── trust/                      PITLBadge / AIOBadge / VGIMark
    ├── content/                    NanoCitation / CoTIndicator / DiffView / Disclosure
    ├── logo/                       Logo / Wordmark / EndorsementSignature
    └── master-brand/               MasterBrandLogo / CoBrandLockup + url helpers
```

## 构建

```bash
cd react && npm install && npm run build
```

走 `tsup --no-config`（CLI 标志）跳过 `bundle-require` 以避免沙盒 unlink 限制。

## 当前状态

- ✅ v0.1.0 落地（2026-05-06）
- ⏳ 尚未发布到私 NPM registry（package.json 已 ready；只欠 `npm publish` 演练）
- ⬜ Storybook 未做（后续视团队需求评估）
