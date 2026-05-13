# Logo 系统组件（4）

来自 `@yogyoung-code/ai-brand-kit/logo` 与 `/primitives`。覆盖产品 logo + endorsement signature + 产品色 scope。

实时演示：[React 包 demo](/demos/react-components)。
规范来源：[02 Brand Architecture](/architecture/brand-architecture)。

## BrandScope

产品色 scope provider。给子树提供 `--product-primary` CSS 变量，所有信任层 / Logo 组件自动跟随。

```tsx
import { BrandScope } from '@yogyoung-code/ai-brand-kit';

<BrandScope product="de">
  <PITLBadge />          {/* 自动用 #2563EB */}
  <Logo product="de" />
</BrandScope>
```

| Prop | 类型 | 必填 | 说明 |
|---|---|---|---|
| `product` | `"de" \| "se" \| "di" \| "rcp"` | 是 | 4 产品任一 |

也提供 `BrandScopeInline` 用于 inline 上下文（不创建额外 div）。

## Logo

完整产品 logo（icon + wordmark + 可选 endorsement signature）。

```tsx
<Logo product="de" />                          {/* 默认 */}
<Logo product="rcp" size="lg" />               {/* 大号 */}
<Logo product="se" reverse />                  {/* 反白 */}
<Logo product="di" endorsement />              {/* 加 endorsement signature */}
<Logo product="de" endorsement endorsementLang="en" />
```

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| `product` | `"de" \| "se" \| "di" \| "rcp"` | 必填 | 4 产品任一 |
| `size` | `"sm" \| "md" \| "lg" \| "xl"` | `"md"` | 4 档尺寸 |
| `reverse` | `boolean` | `false` | 反白态 |
| `endorsement` | `boolean` | `false` | 是否显示 "由 梅斯健康 出品" |
| `endorsementLang` | `"cn" \| "en"` | `"cn"` | endorsement 语言 |

RCP 三处独有视觉自动应用（仅 "RCP" 三字母 + 彩色贯穿横线 + 全黑），无需额外配置。

## Wordmark

仅 wordmark（不含 icon）。与完整 `Logo` 对等的合法呈现形态，全场景可用（02 §1.8）。

```tsx
<Wordmark product="de" />
<Wordmark product="rcp" size="sm" />
<Wordmark product="se" reverse />
```

Props 同 Logo（去掉 `endorsement` 相关）。

## EndorsementSignature

"由 梅斯健康 出品" / "by MedSci Healthcare" 签名。固定 `#666666` 灰，与 icon 左对齐。

```tsx
<EndorsementSignature lang="cn" />
<EndorsementSignature lang="en" size="sm" />
<EndorsementSignature lang="cn" reverse />     {/* 反白态用 78% 白 */}
```

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| `lang` | `"cn" \| "en"` | `"cn"` | 中 / 英 |
| `size` | `"xs" \| "sm" \| "md"` | `"sm"` | 3 档（不含大号——签名永远是辅助层级） |
| `reverse` | `boolean` | `false` | 反白态使用 `rgba(255,255,255,0.78)` 与母品牌 reverse slogan 同源 |

## 决策回溯

- **为什么 wordmark 是 mixed-case 不是全大写？** 参 [02 v0.2 修订](/architecture/brand-architecture)
- **为什么 wordmark 主色 = UI 主色？** 参 [02 v0.3 修订](/architecture/brand-architecture)
- **为什么 RCP wordmark 是缩写不是全名？** 参 [02 v0.5 + 图标方向 demo](/demos/icon-directions)
- **为什么 endorsement 是 #666666？** 参 [Endorsement 颜色对比 demo](/demos/endorsement-color)
- **为什么与 icon 左对齐？** 参 [Endorsement 对齐对比 demo](/demos/endorsement-alignment)
