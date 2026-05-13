# 信任层组件（7）

来自 `@yogyoung-code/ai-brand-kit/trust` 与 `/content`。所有组件需要外层 `<BrandScope product="de">` 才能让 `--product-primary` 自动着色。

实时演示：[React 包 demo](/demos/react-components)。
规范来源：[04 Visual System](/visual/visual-system)。

## PITLBadge

PITL Verified 徽章。默认紧凑（仅缩写"PITL"），`full` prop 显示完整描述。

```tsx
import { PITLBadge } from '@yogyoung-code/ai-brand-kit';

<PITLBadge />
<PITLBadge full />
<PITLBadge reverse />   {/* 反白态，深底场景 */}
```

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| `full` | `boolean` | `false` | `true` 时显示 "PITL Verified" 完整描述 |
| `reverse` | `boolean` | `false` | 反白态，用于深底 |

## AIOBadge

AIO Official 徽章。Icon 为折角文件 + 勾选（v0.2 修订选定，原印章+虚线在小尺寸不清晰）。

```tsx
<AIOBadge />
<AIOBadge full />        {/* "AIO Official" */}
<AIOBadge reverse />
```

Props 同 PITLBadge。

## VGIMark

VGI Ingredient Mark。3 形态：

```tsx
<VGIMark />                                 {/* 默认 compact */}
<VGIMark variant="glyph" />                 {/* 仅图形 */}
<VGIMark variant="full" lang="cn" />        {/* 完整 + 中文 */}
<VGIMark variant="full" lang="en" reverse /> {/* 完整 + 英文 + 反白 */}
```

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| `variant` | `"compact" \| "full" \| "glyph"` | `"compact"` | 3 种形态 |
| `lang` | `"cn" \| "en"` | `"cn"` | full 形态下的语言 |
| `reverse` | `boolean` | `false` | 反白态 |

## NanoCitation

`[n]` 上标引用。点击触发 `onActivate` 回调（产品自行实现 popover / drawer）。

```tsx
<p>
  AI 加速发展<NanoCitation index={1} onActivate={() => openCitation(1)} />，
  尤其在医疗领域<NanoCitation index={2} />。
</p>
```

| Prop | 类型 | 必填 | 说明 |
|---|---|---|---|
| `index` | `number` | 是 | 引用编号 |
| `onActivate` | `() => void` | 否 | 点击 / 键盘 enter 触发 |

## CoTIndicator

思维链 dot-spiral 动画。5 圆点循环呼吸 1.2s，节点错峰 80ms（v0.2 锁定）。

```tsx
<CoTIndicator state="loading" />
<CoTIndicator state="done" />
<CoTIndicator state="error" />
<CoTIndicator dots={7} state="loading" />
```

| Prop | 类型 | 默认 | 说明 |
|---|---|---|---|
| `dots` | `5 \| 6 \| 7` | `5` | dot 数量；锁定值 5，6/7 仅做大尺寸过渡 |
| `state` | `"loading" \| "done" \| "error"` | `"loading"` | 三态 |

## DiffView

红绿差异视图。复用母品牌 error / success token，不开新色。

```tsx
<DiffView>
  <DiffRemoved>必须立即停用</DiffRemoved>
  <DiffAdded>在 INR &gt; 3.0 时建议停用</DiffAdded>
</DiffView>

{/* 或独立用 */}
<span><DiffRemoved>原描述</DiffRemoved> → <DiffAdded>新描述</DiffAdded></span>
```

## Disclosure

渐进披露三层级（L1 核心结论 / L2 证据摘要 / L3 溯源细节）。compound 组件，子组件按顺序排版。

```tsx
<Disclosure>
  <Disclosure.L1>核心结论：在 INR &gt; 3.0 时建议停用</Disclosure.L1>
  <Disclosure.L2>证据摘要：基于 ACCP 2024 指南 + 3 个 RCT</Disclosure.L2>
  <Disclosure.L3>
    <NanoCitation index={1} /> ACCP 2024 §4.2.1
    <NanoCitation index={2} /> Smith et al., NEJM 2023
    <NanoCitation index={3} /> Liu et al., Lancet 2024
  </Disclosure.L3>
</Disclosure>
```

视觉层级：L1 加粗大字 / L2 正文 / L3 小字 + 缩进。详见 [04 §6](/visual/visual-system)。
