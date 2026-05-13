# 母品牌组件（2）

来自 `@yogyoung-code/ai-brand-kit/master-brand`。

实时演示：[React 包 demo](/demos/react-components)（最后一段）。
规范来源：[母品牌总览](/master-brand/overview) + [02 §4.3](/architecture/brand-architecture)。

## MasterBrandLogo

MedSci Healthcare 完整 logo（icon + wordmark + slogan）。从 12 SVG 中按 `variant × layout` 选取。

```tsx
import { MasterBrandLogo } from '@yogyoung-code/ai-brand-kit';

<MasterBrandLogo variant="default" layout="full" />
<MasterBrandLogo variant="reverse" layout="cn" height={48} />
<MasterBrandLogo variant="mono-navy" layout="en" />
<MasterBrandLogo variant="mono-black" layout="full" baseUrl="https://cdn.example.com" />
```

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| `variant` | `"default" \| "reverse" \| "mono-navy" \| "mono-black"` | `"default"` | 4 变体 |
| `layout` | `"en" \| "cn" \| "full"` | `"en"` | 3 构图 |
| `height` | `number` | `40` | 渲染高度 px；最小 24 |
| `baseUrl` | `string` | `"/assets/master-brand"` | SVG 资产基础 URL |
| `alt` | `string` | 自动生成 | a11y alt 文本 |
| `className` | `string` | — | 透传 |

**接入步骤**：把 `dist/assets/master-brand/` 12 份 SVG 复制到站点静态资源目录（如 `public/assets/master-brand/`）；或托管到 CDN，传 `baseUrl`。

## CoBrandLockup

母品牌 + 产品 wordmark 共构 lockup（用于 IR / BD / M&A 等需要双品牌共现的场景）。

```tsx
<CoBrandLockup product="de" master="default" />
<CoBrandLockup product="rcp" master="reverse" />
<CoBrandLockup product="se" master="mono-navy" layout="cn" />
```

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| `product` | `"de" \| "se" \| "di" \| "rcp"` | 必填 | 4 产品任一 |
| `master` | `"default" \| "reverse" \| "mono-navy" \| "mono-black"` | `"default"` | 母品牌变体 |
| `layout` | `"en" \| "cn" \| "full"` | `"en"` | 母品牌构图 |
| `height` | `number` | `48` | 母品牌 logo 高（产品 wordmark 高 = master / 1.4） |
| `baseUrl` | `string` | `"/assets/master-brand"` | SVG 资产基础 URL |

### 比例锁定（v1.0）

- 母品牌 logo 高 = 产品 wordmark × **1.4**
- 竖分隔线高 = 母品牌 logo 高 × **0.6**
- 分隔线色 `#CBD5E1`（反白态用 30% 白）
- 分隔线两侧水平间距 = ½ X（X = 母品牌 icon 高 ≈ master logo 高 × 2/3）

## URL helpers（非 React 场景）

```ts
import { masterBrandLogoUrl, masterBrandLogoFilename } from '@yogyoung-code/ai-brand-kit';

// 完整 URL
masterBrandLogoUrl({ variant: 'reverse', layout: 'cn' });
// → "/assets/master-brand/reverse-cn.svg"

masterBrandLogoUrl({ variant: 'mono-navy', layout: 'full', baseUrl: 'https://cdn.example.com' });
// → "https://cdn.example.com/mono-navy-full.svg"

// 仅文件名（用于 srcset、自定义路径）
masterBrandLogoFilename('reverse', 'cn');
// → "reverse-cn.svg"
```

## 决策回溯

- **为什么母品牌 logo 与产品 wordmark 比例 1.4 ?** 让母品牌视觉权重略大于产品（强调"出品方"关系），但不喧宾夺主。
- **为什么分隔线用 #CBD5E1 不是 #666666 ?** 母品牌 / 产品都已有自己的色相，分隔线必须中性低对比，避免抢眼。slate-300 是 WCAG 3:1 阈值附近的最弱可见灰。
- **为什么不允许母品牌 logo 单独裁切 icon ?** 参 [图层结构](/master-brand/layers) §3.2。
