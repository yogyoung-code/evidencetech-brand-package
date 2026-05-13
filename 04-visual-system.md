# 梅斯健康 AI Brand Kit · Visual System v0.2

> **v0.1 → v0.2 修订**：① AIO 徽章 glyph 由"印章 + 虚线 + 勾选"换为"折角文件 + 勾选"，解决小尺寸下不清晰问题；② 三大徽章 wordmark 默认仅显示 3 字母缩写（PITL / AIO / VGI），完整描述（PITL Verified / AIO Official / VGI · 验证型生成式智能™）保留为 `--full` 修饰符。

**承接**：`00-architecture-locked.md` §5（共享信任层）+ `02-brand-architecture.md` §1.7.1（RCP 贯穿横线）+ 母品牌 v1.1 §8（图像政策）。
**作用**：把架构层定义的"信任层组件"转换为 token + SVG + 交互规范，所有产品按统一规则接入。
**配套**：`ai-tokens.css`（同目录），生产级 token 文件，可直接 import 到产品 globals.css 或 tailwind 层。

---

## 1. Token 接入方式

每个产品的 design tokens 文件在 import 顺序上：

```css
/* product/styles/globals.css */
@import url('../master-brand/colors_and_type.css');   /* 母品牌 v1.1 */
@import url('../ai-brand-kit/ai-tokens.css');         /* 本 kit */
/* 产品自己的 tailwind / 局部 token 在最后 */
```

产品根容器加 scope class：

```html
<body class="brand-de">  <!-- 或 brand-se / brand-di / brand-rcp -->
  <!-- 信任徽章自动跟随产品色 -->
</body>
```

无 scope 时，`--product-primary` fallback 为 DE 蓝（`#2563EB`），保证 CSS 变量永不空指针。

---

## 2. 三大信任徽章

四产品共享同一组徽章组件；通过 `--product-primary` 自动适配各产品色。所有徽章共用 **pill 几何语言**（`border-radius: 9999px`），通过填充与文字色拉开识别。

### 2.1 PITL Verified

**含义**：经 PITL 专家网络复核的 AI 输出（最高信任级）。

**视觉**：产品色填充 + 反白文字与图标。

**Glyph**：盾牌 + 勾选（shield with check）。

**默认 wordmark**：`PITL`（仅缩写，3 字母）。`--full` variant 显示 `PITL Verified`。

```html
<!-- 默认（紧凑，UI 中常用） -->
<span class="badge-pitl">
  <svg class="badge-pitl-icon" viewBox="0 0 24 24" fill="none">
    <path d="M12 2 L4 6 v6 c0 5 3.5 9 8 10 c4.5-1 8-5 8-10 V6 L12 2 Z" fill="currentColor"/>
    <path d="M9 12 l2 2 4-4" stroke="white" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>
  PITL
</span>

<!-- --full（完整描述，about / 首次出现） -->
<span class="badge-pitl badge-pitl--full">
  <svg class="badge-pitl-icon" viewBox="0 0 24 24" fill="none">
    <!-- ...same path... -->
  </svg>
  PITL Verified
</span>
```

**变体**：

| 变体 | class | 字号 | wordmark | 用途 |
|---|---|---|---|---|
| **Default**（紧凑） | `.badge-pitl` | 12px | `PITL` | UI 卡片、列表、表格、详情页（最常用） |
| **Full** | `.badge-pitl .badge-pitl--full` | 13px | `PITL Verified` | About 页、首次出现、投资者材料、营销 |
| Glyph-only | 单独 `<svg>` | inherits | — | tooltip、icon-only 区域 |

### 2.2 AIO Official

**含义**：经 DeepLabeling 治理的厂家官方核准说明书内容。AIO = AI Optimization（AI 检索优化）。

**视觉**：深灰填充（neutral-700） + 产品色文字与图标。

**Glyph**：折角文件 + 勾选（document with corner fold + check）。

> **v0.2 修订**：原 "印章 + 虚线 + 勾选" 三层 glyph 在小尺寸下不清晰。改为"折角文件 + 勾选"——更直接对应"官方核准的说明书文件"语义，在 12px 下仍然清楚可辨。

**默认 wordmark**：`AIO`。`--full` variant 显示 `AIO Official`。

```html
<span class="badge-aio">
  <svg class="badge-aio-icon" viewBox="0 0 24 24" fill="none">
    <path d="M5 3 V21 H19 V9 L13 3 Z" fill="currentColor"/>
    <path d="M13 3 V9 H19" stroke="white" stroke-width="0.6" opacity="0.5" fill="none"/>
    <path d="M8.5 14 l2.5 2.5 5-5" stroke="white" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>
  AIO
</span>
```

**与 PITL 的视觉关系**：相同 pill 形状 + 字号（默认都是 PITL/AIO 三字母），相反配色（产品色填充 vs 灰填充）。Glyph 形状不同（盾牌 vs 文件），强化语义差异：PITL = "保护/验证"（盾牌），AIO = "认证文件/官方"（折角文件）。

### 2.3 VGI Ingredient Mark

**含义**：跨产品共用的 ingredient brand 标签。

**视觉**：透明/半透白填充 + 产品色描边、文字、图标。

**Glyph**：与 PITL 同款盾牌+勾选（语义一致：均代表"经验证"）。

**默认 wordmark**：`VGI™`（缩写 + ™）。`--full` variant 显示 `VGI · 验证型生成式智能™`。

```html
<!-- 默认 -->
<span class="vgi-mark">
  <svg class="vgi-mark-icon" viewBox="0 0 24 24" fill="none">
    <path d="M12 2 L4 6 v6 c0 5 3.5 9 8 10 c4.5-1 8-5 8-10 V6 L12 2 Z"
          fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M9 12 l2 2 4-4" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>
  VGI<sup>™</sup>
</span>

<!-- --full -->
<span class="vgi-mark vgi-mark--full">
  <svg class="vgi-mark-icon" viewBox="0 0 24 24" fill="none"><!-- ... --></svg>
  VGI · 验证型生成式智能<sup>™</sup>
</span>
```

**变体**：详见 `02-brand-architecture.md` §3.2（vgi-full / vgi-compact / vgi-glyph）。

### 2.4 三徽章配色矩阵速查

| 徽章 | 填充 | 文字 + glyph | 描边 |
|---|---|---|---|
| PITL Verified | `--product-primary` | `#FFFFFF` | 无 |
| AIO Official | `#334155` | `--product-primary` | 无 |
| VGI Mark | 透明 / `rgba(255,255,255,0.5)` | `--product-primary` | `--product-primary`（1.5px） |

### 2.5 反白态（Hero / 深色背景）

| 徽章 | 反白填充 | 反白文字 + glyph |
|---|---|---|
| PITL Verified | `rgba(255,255,255,0.15)` | `#FFFFFF` |
| AIO Official | `rgba(255,255,255,0.10)` | `#FFFFFF` |
| VGI Mark | 透明 + `rgba(255,255,255,0.6)` 描边 | `#FFFFFF` |

---

## 3. Nano-Citation · [n] 上标

**结构**：句末上标方括号数字 → 点击触发右侧溯源面板。

### 3.1 typography 规格

```css
.nano-citation {
  font-family: "Inter", monospace;
  font-size: 0.7em;       /* 相对于宿主字号 */
  font-weight: 600;
  color: var(--product-primary);
  vertical-align: super;
  cursor: pointer;
  padding: 0 2px;
  border-radius: 2px;
}
```

### 3.2 行为

- **hover**：底色 `rgba(0,0,0,0.05)` 250ms 渐入
- **click**：右侧滑入溯源面板（width 400px，shadow-lg），250ms ease-out
- **focus-visible**：2px 产品色外环，offset 1px（无障碍要求）
- **键盘**：Tab 可达；Enter/Space 触发面板

### 3.3 多引用并列

句末多个引用：`...AI 加速发展[1][2][3]。` —— 不使用逗号连接。每个 [n] 独立可点击，整体用 `<wbr>` 帮助换行。

### 3.4 侧边溯源面板

| 区域 | 内容 |
|---|---|
| 顶栏 | 引用编号 + 关闭按钮 |
| 主体 | 原文片段（被引用的精确文字高亮） |
| 元信息 | 文献标题、作者、年份、DOI/PMID |
| 底栏 | "在文献库中打开" + "引用此条" 两个动作 |

面板浮在内容之上，不挤压主区；移动端从底部滑入占 80vh。

---

## 4. CoT 思维链动画 · dot-spiral 演化

**形态**：5–7 个圆点水平排列，依次"呼吸"（缩放 + 透明度），形成 AI 推理节奏的视觉反馈。

**几何**（来自母品牌 v1.1 §8.3 dot-spiral 母题的演化）：
- 节点尺寸：6px 圆点
- 节点间距：14px（约 2× 节点直径）
- 节点数：5（推理短）/ 7（推理长）
- 排列：横向直线（短场景）或 60° 弧线（长场景）

**动画**：

```css
@keyframes cot-breathe {
  0%, 100% { opacity: 0.2; transform: scale(0.85); }
  40%      { opacity: 1.0; transform: scale(1.15); }
  70%      { opacity: 0.6; transform: scale(1.0); }
}
.cot-dot {
  animation: cot-breathe 1.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
.cot-dot:nth-child(N) { animation-delay: calc(80ms * (N - 1)); }
```

**触发**：
- AI 处理中（loading）：循环呼吸
- AI 完成（done）：所有点同步淡出 → 显示结果
- AI 出错（error）：所有点变灰 + 静止

**禁忌**：
- 不允许在非 AI 处理上下文中使用（如普通页面 loading 用通用 spinner）
- 不允许加旋转或 3D 变换
- 必须在 `prefers-reduced-motion: reduce` 下降级为静态点（opacity 0.6，无动画）

---

## 5. Diff View · 红绿语义

**用途**：AI 输出与专家修订的对比展示（DeepEvidence 的 Verify It 复核场景、SeekEvidence 的 PICO 修订、RCP 的 A/B 对比）。

**色彩**：复用母品牌 error / success token，**不开新色**。

| 角色 | 颜色 | token |
|---|---|---|
| AI 错误 / 待删除 | `#DC2626`（深红，删除线） | `--diff-removed-color` |
| 专家修订 / 新增 | `#2E9F82`（success-500） + `#E6F4EF` 底色 | `--diff-added-color` + `--diff-added-bg` |

**HTML 模式**：

```html
<p>该患者
  <span class="diff-removed">必须立即停用阿司匹林</span>
  <span class="diff-added">在 INR > 3.0 时建议停用阿司匹林</span>。
</p>
```

**禁忌**：
- 不允许用产品主色作为新增色（与产品色识别冲突）
- 不允许用纯灰显示删除（弱化对比，看不清差异）
- 不允许在 Diff 内嵌 Diff（多层级容易看花）

---

## 6. Progressive Disclosure · L1 / L2 / L3

承接母品牌 v1.1 渐进式披露原则，AI 子品牌固化为三层级。

### 6.1 三层级 typography

| 层级 | 用途 | 字号 | 字重 | 颜色 |
|---|---|---|---|---|
| **L1** | 核心结论（一句话） | 18px | 700 | `--product-primary` |
| **L2** | 证据摘要（2–4 句） | 16px | 400 | `#334155`（neutral-700） |
| **L3** | 溯源细节（来源、年份、统计、置信度） | 14px | 400 | `#64748B`（neutral-500） |

层间垂直间距：12px。

### 6.2 示例（DeepEvidence CDS 答复）

```html
<div class="disclosure">
  <p class="disclosure-l1">
    建议在合并 PPI 使用时停用阿司匹林。
  </p>
  <p class="disclosure-l2">
    在 INR > 3.0 的患者中，停用阿司匹林可显著降低出血风险<sup>[1]</sup>。
    本建议未涵盖既往胃出血史；请补充病史后再核验。
  </p>
  <p class="disclosure-l3">
    [1] Smith et al., NEJM 2024; n=2,341; 风险比 0.62 (95% CI 0.48–0.81)。
  </p>
</div>
```

### 6.3 默认展开规则

- 桌面：L1 + L2 默认展开，L3 折叠（点击"溯源细节"展开）
- 移动：**L1 + L2 默认展开**，L3 折叠（与桌面对齐 · 2026-05-07 决议修订）
- 紧急/警告类内容（DRG 编码漏洞、严重药物相互作用）：三层级全部展开 + 黑框警告

> **2026-05-07 决议（取代 v0.2 旧规则）**：移动端默认展开行为由"仅 L1"改为"L1 + L2 默认展开"，与桌面对齐。理由：临床场景中医生多在床旁/查房时使用移动端，证据摘要（L2）的可见性高于纵向空间节省；多一次 tap 在临床节奏下是真实摩擦。L3（溯源细节）仍折叠以保持初屏简洁。各产品**不再**自行实现 L2 折叠逻辑。

### 6.4 共享 Disclosure 组件契约（2026-05-07 新增）

为防止各产品自行实现 L2 折叠逻辑导致行为漂移，`@yogyoung-code/ai-brand-kit` v0.2 的 `<Disclosure>` 组件需提供：

- **`defaultExpanded` 属性**：可显式控制初始展开状态（接受 `'L1' | 'L1+L2' | 'all'`），不传则按下一条规则
- **断点自适应**：组件内置 `matchMedia('(max-width: 768px)')` 检测；移动与桌面均默认 `'L1+L2'`（与 §6.3 对齐）
- **紧急/警告 mode**：`urgency="warning"` 强制 `'all'` 并附黑框样式
- **可控折叠交互**：用户在 L3 区域的 expand/collapse 操作通过 `onToggle` 回调上报，便于产品侧埋点
- 现有 `react/src/content/Disclosure.tsx` 的 L1/L2/L3 typed 子组件保留；本次升级在容器组件层加 `defaultExpanded` 与断点逻辑，不破坏现有 API

---

## 7. 图像政策

继承母品牌 v1.1 §8，AI 子品牌不放松任何一条：

| 规则 | 状态 |
|---|---|
| AI 生成医学影像 | **绝对禁止**（FTC 合规红线） |
| Stock photo（图库照片） | **禁止** |
| 真实临床/会议/工作场景照片 | 推荐，自然光偏冷中性 |
| 几何抽象插画 | 仅产品色 + 中性，使用 dot-spiral 母题 |
| AI 处理中的视觉反馈 | 用 §4 CoT 动画，禁用通用 spinner |
| AI 输出占位（无照片场景） | 母品牌 placeholder box（neutral-100 填充 + 12px 上限标签） |

**新增规则**（AI 子品牌专属）：
- 不允许在 AI 输出区贴 emoji、贴纸、卡通人物
- 不允许在患者面向材料中使用"AI 大脑"、"机器人"、"芯片"等具象图像（违反"医生在环"语义）
- AI 流程示意图必须使用几何抽象 + dot-spiral，不使用人物剪影或医院建筑图

---

## 8. 落地清单

| 资产 | 状态 | 责任 |
|---|---|---|
| `ai-tokens.css`（本目录） | ✅ 已交付 | 设计 / 工程 |
| 三大信任徽章 SVG（PITL / AIO / VGI） | ✅ inline SVG（本文档 §2） | 工程将 inline 化或转 React 组件 |
| Nano-Citation 组件 | ✅ CSS class（`ai-tokens.css`） | 工程实现侧边面板（按 §3.4 规范） |
| 侧边溯源面板组件 | ⏳ 工程实现 | DE / SE 各自实现，共用 §3.4 规范 |
| CoT 动画 | ✅ CSS keyframes（`ai-tokens.css`） | 工程在 AI 处理中状态接入 |
| Diff View 组件 | ✅ CSS class（`ai-tokens.css`） | 工程包成 React component |
| Progressive Disclosure 组件 | ✅ CSS class（`ai-tokens.css`） | 工程实现折叠/展开交互 |
| Figma 组件库（信任层） | ⏳ Task #6 | 设计 |
| 三个原型整改清单 | ⏳ Task #7 | 工程 + 设计 |

---

## 9. 治理

- 本文档版本号 v0.1（Locked 2026-05-05）
- token 层变更通过 `ai-tokens.css` PR 流程；任何新增 token 需市场负责人 + Tech Lead 双签
- 视觉规范变更（如新增徽章类型、改变 CoT 动画机制）需 Sponsor + 双签
- 与母品牌 v1.1 sync：每季度对照一次；母品牌升 v1.2 时同步评估本 kit 是否需要相应升版

---

## 10. 后续依赖

- Task #6（Figma 组件样板）依据本文档 + `02-brand-architecture.md` 输出 Figma frame
- Task #7（交付与治理）需把本文档 + `ai-tokens.css` 打包到最终交付目录

---

## 11. 视觉系统子文档

主文档（本文）只管"组件如何呈现"。下列子文档管"组件如何在工程实现 / a11y / 测试维度上落地"：

| 文档 | 范围 | 状态 |
|---|---|---|
| `04a-component-accessibility.md` | 工程级 a11y：键盘 / 屏幕阅读器 / 色盲 / 触控 / 减动画 / i18n / 测试与 CI | **v0.2 已签**（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签）|
| `04b-motion-guidelines.md` | 通用 UI 动效：缓动 / 时长 token + 通用加载（CoT 替代）+ 页面切换 + 侧边面板 + 微交互 + Toast + Skeleton + 错误反馈 + 性能预算 | **v0.2 已签**（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签）|
| `04c-photography-illustration-interim.md` | 摄影 / 插画过渡期政策：可用源分级 + SOP + dot-spiral 母题细化 + 临时素材库 + W2 交付后迁移规程（**本文档随 W2 交付归档**）| **v0.2 已签**（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签）|

子文档与本文档的关系：本文档 §1–§7 的视觉规范（颜色 / 几何 / 动画曲线 / 文字 / 配色矩阵）在子文档**无差别继承**。子文档仅在"工程实现细节"上做附加约束；任何冲突以本文档视觉规范为准（若 a11y 与视觉冲突，必须设计层重新调整使两者兼容）。

子文档命名规则：`04a-` / `04b-` / 等，遵循 03a / 03b / ... 同样的层级编号约定。
