# 梅斯健康 AI Brand Kit · Motion Guidelines v0.2

**承接**：`04-visual-system.md` v0.2（视觉系统 §4 CoT 动画 / Logo 入场动效）+ `04a-component-accessibility.md` v0.1（§6 减动画偏好）+ `preview/de-logo-animation.html` / `se-logo-animation.html` / `de-icon-animation.html` / `se-icon-animation.html`（已落地 4 份品牌动效）+ `06-governance.md` §3。
**作用**：本文档是 04 视觉系统在**通用 UI 动效**层的执行手册——给前端 / 设计师 / 产品 PM 一份"页面切换 / 加载状态 / 侧边面板 / 模态框 / 微交互 / Toast / Skeleton / 错误反馈"的统一规则与实现参考。
**主要使用者**：前端工程 / UX 设计 / 产品 PM / QA。
**优先级**：04 视觉系统中的**品牌动效**（CoT / Logo 入场 / 信任徽章入场）始终优先；本文档管这些**之外**的所有 UI 动效。冲突以 04 主文档为准。

---

## 0. 适用范围与边界

### 0.1 覆盖

本文档覆盖产品 UI 中的**所有非品牌动效**：

- **页面切换**：路由切换、tabs 切换、抽屉式子页
- **通用加载**：spinner / skeleton / progress bar / shimmer（CoT 已禁用作通用 spinner 后的替代）
- **侧边面板 / 抽屉 / 模态框**：入场缓动、退出动效、遮罩淡入
- **微交互反馈**：hover / pressed / focus / 表单校验反馈 / 提交按钮 loading
- **Toast / Notification**：入场 / 滞留 / 退出（含撤稿响应等高合规告警的协调）
- **Skeleton / Progressive Loading**：内容占位 + 渐进加载
- **错误状态动效**：振动 / 闪烁红框 / 自动滚动到错误点
- **滚动驱动**：scroll-driven reveal（克制使用）
- **缓动与时长 token**：标准 token 库（覆盖以上所有场景）

### 0.2 不覆盖

- **CoT 思维链动画**——已在 04 §4 锁定（5 圆点 1.2s 呼吸 + 80ms 错峰 + reduce-motion 兜底）；本文档不重复
- **Logo 入场动效**——已在 `preview/de-logo-animation.html` / `se-logo-animation.html` / `de-icon-animation.html` / `se-icon-animation.html` 4 份文件锁定；本文档不重复
- **信任徽章入场动效**——徽章默认是静态徽标；如有产品 UI 中的入场需求，按 §3.3 通用入场规则
- **Diff View 红绿切换动效**——已在 04 §5 锁定（红→绿语义切换无动效，瞬间）；本文档不重复
- **Disclosure 展开 / 收起**——已在 04 §6.4 锁定（共享 `<Disclosure>` 组件契约）；本文档仅在 §10 减动画偏好处交叉引用
- **a11y 维度**（焦点环 / aria-live / 减动画兜底）——已在 04a 锁定；本文档动效设计**必须满足** 04a §6 + §3 + §4 全部要求
- **业务逻辑动效**（如交易完成、积分滚动）——归各产品自己的动效文档；本文档仅管 brand kit 通用层

### 0.3 与 04 / 04a 的关系

| 文档 | 管什么 |
|---|---|
| `04-visual-system.md` | 品牌动效（CoT / Logo 入场 / Diff View / Disclosure 视觉外观）|
| `04a-component-accessibility.md` | 动效的 a11y 实现（prefers-reduced-motion / 焦点 / aria-live）|
| **`04b-motion-guidelines.md`（本文）** | **通用 UI 动效（除品牌动效外的全部）** |

04 §4 / §6.4 规则在本文档**无差别继承**。04a §6 减动画偏好在本文档**所有动效**生效。任何冲突以 04 / 04a 为准。

---

## 1. 设计原则

### 1.1 服务功能（Functional, not decorative）

每个动效必须回答："这个动效解决了什么 UX 问题？"

| 合理动效原因 | 不合理动效原因 |
|---|---|
| 提示用户系统状态（加载中 / 完成 / 出错） | "看起来更酷" |
| 引导视线焦点（新内容入场）| 显示设计师"花心思" |
| 强化空间隐喻（侧边面板从右滑入） | 跟风 / 效仿 consumer 产品 |
| 缓和上下文切换（页面 transition） | 拖延用户（让 loading 显得"高级"）|
| 反馈用户操作（按钮 pressed） | 装饰性 hero / 视差 |

**铁律**：动效不能以"美感"为单一理由。每个动效需在 PR / spec 中说明其服务的功能；没有功能解释的动效审稿时驳回。

### 1.2 节制（Restrained, not theatrical）

医学 AI 产品的克制美学（继承 03 §3.4 不夸大原则）延伸到动效：

- **优先静态**——能不动就不动；动效是补充而非主角
- **短而快**——大多数动效 ≤ 300ms；500ms 是上限（除明确长状态如 hero 入场）
- **不堆叠**——同一时间同一区域不超过 2 个动效并行
- **不夸张**——不用 bounce / overshoot / spring physics 类 consumer 风格曲线（除非明确合理）

### 1.3 性能优先（Performant by default）

- 仅动画 `transform` 与 `opacity`（GPU 加速）；**禁止**动画 `width` / `height` / `top` / `left` 等触发布局重排的属性
- 60fps 是底线；任何动效在中端设备（iPhone X / 普通 Android / 4 核 i5）下不掉帧
- 长列表 / 复杂面板的动效必须用 `will-change` 提示但**用完即清**（避免 layer 爆炸）
- 动效 JS 优先用 CSS / Web Animations API；**避免** setInterval / setTimeout 动效驱动

### 1.4 减动画兜底（Reduced-motion safe）

继承 04a §6.1 + WCAG 2.3.3：所有动效必须检测 `prefers-reduced-motion: reduce` 并提供**等价静态形态**。

**铁律**：动效消失但**功能不消失**——loading 状态变静态指示文字 / 页面切换变直接替换 / Toast 变直接显隐。

---

## 2. 缓动函数与时长 Token

### 2.1 缓动函数 Token（4 标准）

```css
:root {
  --ease-out:      cubic-bezier(0.0, 0.0, 0.2, 1);    /* 默认：减速进入 */
  --ease-in:       cubic-bezier(0.4, 0.0, 1, 1);      /* 退出 */
  --ease-in-out:   cubic-bezier(0.4, 0.0, 0.2, 1);    /* 切换 / 移动 */
  --ease-linear:   cubic-bezier(0, 0, 1, 1);          /* 进度条 / 持续运动 */
}
```

**用法**：

| 场景 | 缓动 |
|---|---|
| 元素入场（淡入 / 上滑入）| `--ease-out` |
| 元素退出（淡出 / 滑出）| `--ease-in` |
| 切换 / 重新定位 | `--ease-in-out` |
| 进度条 / 持续 spinner | `--ease-linear` |

**禁忌**：

- ❌ 不用 `ease-in-back` / `ease-out-elastic` / spring physics 类 consumer 曲线
- ❌ 不在医学严肃场景用 bounce（如错误提示用 bounce 不合适）
- ❌ 同一交互的入场与退出**不混用** ease（入场用 `--ease-out` 则退出用 `--ease-in`，对称）

### 2.2 时长 Token（4 档）

```css
:root {
  --duration-micro:   100ms;   /* 极短：hover / pressed / focus 反馈 */
  --duration-short:   200ms;   /* 短：tooltip / dropdown / toast */
  --duration-medium:  300ms;   /* 中：模态框 / 侧边面板 / 页面 transition */
  --duration-long:    500ms;   /* 长：复杂入场 / hero 元素 */
}
```

**铁律**：

- 95% 的动效 ≤ `--duration-medium`（300ms）
- `--duration-long`（500ms）仅用于明确合理场景（如 dashboard 首次入场）；**不**用于交互反馈
- **永不超过** 500ms（除非是品牌动效如 Logo 入场，已在 preview 锁定时长）
- 用户感知阈值：< 100ms 即时 / 100–300ms 流畅 / 300–500ms 可察觉 / > 500ms 慢

### 2.3 在 ai-tokens.css 中的位置

新增到 `ai-tokens.css` 末尾（v0.2 落地任务）：

```css
/* ====== Motion Tokens · 04b v0.1 ====== */
:root {
  --ease-out:      cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in:       cubic-bezier(0.4, 0.0, 1, 1);
  --ease-in-out:   cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-linear:   cubic-bezier(0, 0, 1, 1);

  --duration-micro:  100ms;
  --duration-short:  200ms;
  --duration-medium: 300ms;
  --duration-long:   500ms;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-micro:  0ms;
    --duration-short:  0ms;
    --duration-medium: 0ms;
    --duration-long:   0ms;
  }
}
```

reduce 模式下时长归零——这是全局兜底；个别组件如需"减动画下保留极短动效"可单独覆写。

---

## 3. 通用加载状态（**CoT 替代核心补位**）

### 3.1 加载时长分级与组件选型

按用户感知分 4 档；每档对应不同动效组件：

| 加载时长 | 用户感知 | 推荐组件 |
|---|---|---|
| **< 100ms** | 即时 | **不显示** loading（强行显示反而增加感知延迟）|
| **100ms–1s** | 短延迟 | **Spinner**（小型旋转指示器）|
| **1s–10s** | 明显等待 | **Skeleton screen**（内容占位骨架） |
| **> 10s 或不确定** | 长等待 | **Progress bar**（带百分比）+ 阶段性文字状态 |
| **AI 推理中**（专属）| —— | **CoT 动画**（已锁定 04 §4，不在本文档管辖）|

### 3.2 通用 Spinner（CoT 不可用作通用 spinner 的替代）

继承 04 §4 边界（CoT 仅 AI 处理上下文）。**通用 Spinner 规范**：

```html
<svg
  class="spinner"
  viewBox="0 0 24 24"
  role="status"
  aria-label="加载中"
>
  <circle
    cx="12" cy="12" r="9"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-dasharray="14 28"
  />
</svg>
```

```css
.spinner {
  width: 20px;        /* 默认尺寸 */
  height: 20px;
  color: var(--de-primary);  /* 按 BrandScope 注入产品色；母品牌 scope 用 #0F62FE */
  animation: spin 800ms var(--ease-linear) infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
```

**几何与外观**：

- 形态：单段弧线（不是完整圆）旋转——视觉极简，与 CoT 节奏感的"5 圆点呼吸"明确区分
- 尺寸阶梯：sm 16px / md 20px（默认）/ lg 24px / xl 32px
- 描边：2.5px（不可改细，过细在视网膜屏不可见；不可改粗，过粗喧宾夺主）
- 颜色：按当前产品 scope 注入；不用渐变；不用阴影
- 旋转周期：**800ms 匀速**（不用 ease）—— 注意与 CoT 1.2s 错峰呼吸明显不同

**禁忌**（与 CoT 显式区分）：

- ❌ 不用 5 个或多个圆点
- ❌ 不用呼吸 / 缩放节奏
- ❌ 不用脉冲效果
- ❌ 不在 spinner 上叠加 logo / icon
- ❌ 不用三色 / 渐变描边

**reduce-motion 兜底**：

```css
@media (prefers-reduced-motion: reduce) {
  .spinner {
    animation: none;
    /* 静态显示弧线 + aria-label="加载中" 由屏幕阅读器朗读 */
  }
}
```

### 3.3 Skeleton Screen

适用 1s–10s 加载，内容结构已知时（列表、卡片、详情页）。

**几何**：

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 0%,
    var(--neutral-100) 50%,
    var(--neutral-200) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s var(--ease-linear) infinite;
  border-radius: 4px;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**铁律**：

- Skeleton 形状必须**镜像最终内容布局**——不允许"通用矩形堆叠"代替具体形状
- shimmer 颜色仅 neutral 灰阶——**不用产品色**（避免与 spinner 视觉冲突）
- 加载结束**不**淡入替换——直接同步替换（避免内容跳动 + 减少认知负担）
- reduce-motion：shimmer 关闭；保留静态灰阶占位

### 3.4 Progress Bar

适用 > 10s 或不确定时长。带百分比 + 阶段性文字状态。

```html
<div role="progressbar" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100" aria-label="数据导入中">
  <div class="progress-fill" style="width: 42%"></div>
  <p class="progress-status">正在解析第 3 部分（共 7 部分）</p>
</div>
```

**铁律**：

- 进度条**不允许虚假进度**——百分比必须反映真实状态；不允许"50% 卡 5 秒后跳到 100%"
- 不确定进度（无法估算）用**不确定型**（CSS `indeterminate` 状态）：左到右循环条，不显示百分比
- 阶段性文字状态必须更新（避免用户怀疑卡死）

### 3.5 何时**不**显示 loading

- < 100ms 完成的操作——直接展示结果（强行 loading 反而增加感知延迟）
- 用户主动触发但已知结果会快速返回（如本地搜索）——直接渲染
- 已有内容的 partial update（如刷新单个卡片）——用 §3.3 局部 skeleton 替换 / 不全屏 spinner

---

## 4. 页面切换

### 4.1 路由切换

**默认**：内容区淡入（fade）。

```css
.route-transition {
  animation: fade-in var(--duration-medium) var(--ease-out);
}
@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

**铁律**：

- **不**用滑动 / 缩放 / 翻页等空间隐喻动效（产生方向感后续切换需保持一致，成本高）
- **不**用整页过渡遮罩（loading 状态走 §3 spinner / skeleton）
- 路由内 hash 变化（同页面 anchor 跳转）**不触发**动效——直接滚动到锚点

### 4.2 Tabs 切换

**默认**：tab content 区淡入 + 极短滑入（5px 上滑）。

```css
.tab-content[data-state="active"] {
  animation: tab-enter var(--duration-short) var(--ease-out);
}
@keyframes tab-enter {
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**铁律**：

- tab 横向切换**不**用左右滑入（避免与"路由切换"歧义）
- 5px 上滑是上限——更大幅度变成"内容跳动"
- tab 触发器（按钮）的 active 态切换是瞬间的，不带动效

### 4.3 抽屉式子页（Drawer）

参 §5 侧边面板。

### 4.4 入场动效（首屏 / 异步插入内容）

通用入场：透明度 0 → 1 + 8px 上滑：

```css
.fade-up-in {
  animation: fade-up-in var(--duration-medium) var(--ease-out);
}
@keyframes fade-up-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

**铁律**：

- 首屏多个区块入场**不**串联（不用 stagger）——同时入场避免"加载戏剧化"
- 异步插入的卡片 / Toast 走 §7 通知系统，不走通用入场

---

## 5. 侧边面板 / 模态框 / 抽屉

### 5.1 侧边面板（Side Panel）

继承 04 §3.4 Nano-Citation 侧边溯源面板上下文。

**入场**：从右侧滑入 + 遮罩淡入。

```css
.side-panel {
  transform: translateX(100%);
  transition: transform var(--duration-medium) var(--ease-out);
}
.side-panel[data-state="open"] {
  transform: translateX(0);
}
.side-panel-overlay {
  opacity: 0;
  transition: opacity var(--duration-medium) var(--ease-out);
}
.side-panel-overlay[data-state="open"] {
  opacity: 1;
}
```

**退出**：反向（用 `--ease-in`）。

**铁律**：

- 面板宽度：≤ 480px（移动端全屏）
- 缓动：入场 `--ease-out` / 退出 `--ease-in`
- 时长：300ms（与遮罩同步）
- 遮罩透明度：白底用 `rgba(15, 23, 42, 0.5)` / 深底用 `rgba(0, 0, 0, 0.7)`
- 关闭方式：点击遮罩 / Esc / 关闭按钮——三者都触发（继承 04a §3.3 trap 处理）
- 焦点管理：开启时焦点移入面板第一可交互元素；关闭时返回触发器（继承 04a §3.3）

### 5.2 模态框（Modal）

**入场**：缩放 + 淡入。

```css
.modal {
  opacity: 0;
  transform: scale(0.96);
  transition:
    opacity var(--duration-short) var(--ease-out),
    transform var(--duration-short) var(--ease-out);
}
.modal[data-state="open"] {
  opacity: 1;
  transform: scale(1);
}
```

**铁律**：

- 缩放从 0.96（不是 0.5 / 0.8）——大幅缩放让人眩晕
- 时长：200ms（比侧边面板快——模态框出现频次高，应感觉轻盈）
- 不用旋转 / 翻转 / 3D 变换
- 与侧边面板视觉区分：模态居中弹出 / 侧边面板侧滑

### 5.3 抽屉（Bottom Drawer / Top Drawer）

**移动端**常见。从底部 / 顶部滑入。

```css
.drawer-bottom {
  transform: translateY(100%);
  transition: transform var(--duration-medium) var(--ease-out);
}
.drawer-bottom[data-state="open"] {
  transform: translateY(0);
}
```

**铁律**：

- 移动端建议拖拽手势关闭——但**必须**同时支持 Esc / 关闭按钮（a11y）
- 抽屉只用于次要内容（菜单 / 选项 / 简短表单）；复杂内容走完整页面或模态

### 5.4 Tooltip / Popover

**入场**：极短淡入（micro）。

```css
.tooltip {
  opacity: 0;
  transition: opacity var(--duration-micro) var(--ease-out);
}
.tooltip[data-state="open"] {
  opacity: 1;
}
```

**铁律**：

- 时长 100ms—— Tooltip 必须立即响应
- 不带位移 / 缩放（避免视觉抖动）
- 关闭：mouseleave / blur 触发；时长同 100ms

---

## 6. 微交互反馈

### 6.1 Hover

```css
.button {
  transition:
    background-color var(--duration-micro) var(--ease-out),
    box-shadow var(--duration-micro) var(--ease-out);
}
.button:hover {
  background-color: var(--de-primary-hover);  /* 略深主色 */
}
```

**铁律**：

- 仅过渡颜色 / 阴影；**不**用尺寸 / 位移变化（避免布局抖动）
- 时长 100ms—— hover 反馈要即时
- 触屏设备（`pointer: coarse`）**关闭** hover 态——避免 sticky hover

### 6.2 Pressed / Active

```css
.button:active {
  transform: scale(0.98);
  transition: transform var(--duration-micro) var(--ease-out);
}
```

**铁律**：

- 仅 scale 0.98——更大缩放显得"塑料感"
- 仅在按钮 / 可点击卡片应用——文本链接 / icon button 不用

### 6.3 Focus

参 04a §3.1 焦点环规范。**不带动效**——焦点环瞬间出现（用户键盘操作需要即时反馈）。

```css
.button:focus-visible {
  outline: 2px solid var(--de-primary);
  outline-offset: 2px;
  /* 无 transition */
}
```

### 6.4 表单校验反馈

错误态：红框 + 错误文字。

```css
.input[aria-invalid="true"] {
  border-color: var(--error);
  animation: shake 300ms var(--ease-in-out);
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}
```

**铁律**：

- 振动 amplitude ≤ 3px——更大幅度过激
- 仅在**错误首次出现时**振动；后续重新校验不再振动（避免重复刺激）
- 同时显示错误文字 + 红框 + 振动——三重冗余（继承 04a §2.3 不依赖颜色）
- reduce-motion 关闭振动；保留红框 + 错误文字

### 6.5 提交按钮 Loading

按钮在异步提交中变为 loading 态：

```html
<button class="button" data-state="loading" disabled>
  <span class="button-text">提交</span>
  <svg class="spinner" aria-hidden="true">...</svg>
</button>
```

```css
.button[data-state="loading"] .button-text {
  opacity: 0.5;
}
.button[data-state="loading"] .spinner {
  display: inline-block;
}
```

**铁律**：

- 提交按钮 loading 时**禁用**（disabled）—— 防止重复提交
- spinner 用 §3.2 通用规范；按钮文字保留（不替换为 loading 文字，避免宽度跳动）
- 完成后按钮直接复原（不带过渡）；失败则触发 §6.4 振动 + 错误文字

---

## 7. Toast / Notification

### 7.1 入场

从顶部 / 底部边缘滑入 + 淡入：

```css
.toast {
  opacity: 0;
  transform: translateY(-20px);
  transition:
    opacity var(--duration-short) var(--ease-out),
    transform var(--duration-short) var(--ease-out);
}
.toast[data-state="open"] {
  opacity: 1;
  transform: translateY(0);
}
```

### 7.2 滞留

按内容长度自适应：

| 类型 | 默认滞留 | 备注 |
|---|---|---|
| 成功（success）| 3s | 简短确认 |
| 信息（info）| 5s | 中性提示 |
| 警告（warning）| 7s | 用户应注意 |
| 错误（error）| **不自动消失** | 用户须手动关闭 |
| 撤稿响应（参 03f §3）| **不自动消失** | 高合规告警 |

**铁律**：

- 时长可由用户 hover 暂停（自动倒计时停止）
- 紧急 / 高合规消息必须用户主动关闭——不可自动消失
- 同时出现多个 toast 时按"先进先出"队列，最多并行 3 个；超过则静默累积

### 7.3 退出

反向（用 `--ease-in`）。

### 7.4 与撤稿响应（03f §3）的协调

撤稿事件触发的 Toast 视为高合规告警：

- 类型：error
- 不自动消失
- 必须配合 `aria-live="assertive"`（继承 04a §4.3 与 CoT 区分；CoT 用 polite，撤稿警告用 assertive）
- 文案模板："文献 [DOI] 已撤稿。本页相关结论已标记待复核。点击查看影响范围 →"
- 关闭后**不**真正销毁——记录到通知中心；用户后续可以查阅

---

## 8. Skeleton 与 Progressive Loading

参 §3.3 Skeleton 基础规则。本节是 Progressive Loading（渐进加载）的进阶。

### 8.1 渐进加载策略

**优先级**：

1. 先加载**首屏关键内容**（核心结论 L1）—— 用 spinner / skeleton 占位 → 真实内容
2. 再加载**次要内容**（L2 证据摘要）—— 折叠展示
3. 最后加载**外围内容**（L3 溯源细节 / 推荐 / footer）—— 懒加载

### 8.2 列表渐进加载

```html
<ul class="list">
  <li class="loaded">已加载内容...</li>
  <li class="loaded">已加载内容...</li>
  <li class="skeleton" aria-busy="true">...</li>
  <li class="skeleton" aria-busy="true">...</li>
</ul>
```

**铁律**：

- 已加载条目立即可交互——不等所有条目加载完成
- 新加载条目同步替换 skeleton（不淡入）
- 滚动加载下一批时显示底部 spinner（不是 skeleton）—— 区分"已知数量加载中"vs"无限滚动加载下一批"

### 8.3 图像渐进加载

- 优先用 LQIP（Low Quality Image Placeholder）—— 模糊小图先显示，高清图加载完后替换
- 替换时**淡入**（200ms）
- 不允许图像 lazy load 后**整体跳动**（图像容器先预占据空间）

---

## 9. 错误状态动效

### 9.1 表单错误

参 §6.4 振动 + 红框 + 错误文字。

### 9.2 操作失败 Toast

参 §7.2 / §7.4 error 类 Toast。

### 9.3 页面错误（404 / 500 / 网络断开）

**默认**：直接展示错误页 + spinner 重试按钮——**不用动效装饰错误**。

**铁律**：

- 不用"摇晃 / 闪烁红色"等强烈视觉
- 不用插画情绪渲染（如哭脸 / 受伤 robot）—— 与品牌严肃性冲突
- 错误页结构：错误码 + 简短说明 + 重试按钮 + 报障入口

### 9.4 自动滚动到错误点

表单提交后存在错误时自动滚动：

```js
element.scrollIntoView({ behavior: 'smooth', block: 'center' });
```

**铁律**：

- `behavior: 'smooth'` —— 但用户偏好 reduce-motion 时改为 `'auto'`（瞬间）：

```js
const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
element.scrollIntoView({
  behavior: prefersReduce ? 'auto' : 'smooth',
  block: 'center',
});
```

- 滚动后**焦点同步**移到错误字段（继承 04a §3.2 Tab order）

---

## 10. 减动画偏好（继承 04a §6）

### 10.1 全局兜底

§2.3 token 在 reduce 模式下时长归零。**90% 动效自动失效**。

### 10.2 个别保留极短动效

部分动效在 reduce 模式下保留极短（≤ 50ms）以避免内容"瞬间跳出"破坏感知：

- Tooltip 淡入：保留 50ms（仍比 100ms 默认更短）
- Toast 入场：保留 50ms
- 路由切换：完全无动效（瞬间）

实现方式：用单独 CSS 变量 `--duration-reduced-keep`（默认 50ms）替换 `--duration-micro` 在这些组件中。

### 10.3 振动 / 抖动 / 闪烁完全禁用

- 表单错误振动 → 仅红框 + 错误文字
- Skeleton shimmer → 静态灰阶
- 任何**循环动画**（spinner 旋转 / Skeleton shimmer / 自动播放轮播）—— **完全停止**，不保留极短

---

## 11. 性能预算

### 11.1 帧率底线

- 60fps（16.7ms / 帧）—— 本 kit 所有动效在中端设备（iPhone X / 普通 Android / 4 核 i5）下不掉帧
- 动效叠加场景（如同时多个 toast + 路由切换 + spinner）**不**降至 30fps

### 11.2 GPU 加速

仅动画 `transform` + `opacity`。**禁止** `width` / `height` / `top` / `left` / `margin` / `padding` 动画。

### 11.3 will-change 使用

```css
.modal {
  will-change: transform, opacity;
}
.modal[data-state="closed"] {
  will-change: auto;  /* 用完即清，避免 layer 爆炸 */
}
```

**铁律**：

- 仅在**已知会动画**的元素上用 `will-change`
- 用完立即清除（设回 `auto`）
- **不**在所有元素上预设 `will-change`（性能反作用）

### 11.4 动效审计工具

- **Chrome DevTools Performance** 面板——录制动效，看是否有 long task / layout thrashing
- **Lighthouse Performance** 分——动效不应拖累分数（结合 04a §9.1 Lighthouse 阈值）

---

## 12. 与 04 / 04a / preview 的关系

| 文档章节 | 在本文档对应 / 边界 |
|---|---|
| 04 §4 CoT 思维链动画 | §0.2 不覆盖（CoT 已锁定）；§3.2 通用 spinner 与 CoT 显式视觉区分（弧线 vs 5 圆点 / 800ms 匀速 vs 1.2s 呼吸）|
| 04 §5 Diff View 红绿语义 | §0.2 不覆盖（瞬间切换无动效）|
| 04 §6.4 Disclosure 共享组件契约 | §10 减动画偏好交叉引用 |
| 04a §3 键盘交互 | §5 侧边面板 / §6.3 Focus / §9.4 自动滚动焦点同步 |
| 04a §4 屏幕阅读器 aria | §3.2 spinner aria-label / §7.4 撤稿 Toast aria-live="assertive" |
| 04a §6 减动画偏好 | §10（本文档动效全部满足 04a §6 兜底要求）|
| `preview/de-logo-animation.html` 等 4 份 | §0.2 不覆盖（品牌 Logo 入场已锁定）|
| `ai-tokens.css` | §2.3 motion tokens 待 v0.2 落地后注入 |

---

## 13. 自检清单

每个动效组件 / 产品 UI 引入动效时对照下列 14 条：

- [ ] **服务功能**：本动效解决了什么 UX 问题？（不能仅以"美感"为理由）
- [ ] **节制**：时长 ≤ 300ms？同区域并行 ≤ 2 个动效？
- [ ] **缓动 token**：用 §2.1 的 4 标准缓动之一（不用 bounce / spring）？
- [ ] **时长 token**：用 §2.2 的 4 时长档之一（micro 100 / short 200 / medium 300 / long 500）？
- [ ] **GPU 加速**：仅动画 transform + opacity？
- [ ] **不用布局抖动**：没有 width / height / top / left / margin / padding 动画？
- [ ] **CoT 区分**：本动效不与 CoT（5 圆点呼吸 1.2s）视觉混淆？
- [ ] **加载状态选型**：< 100ms 不显示 / 100ms–1s 用 spinner / 1s–10s 用 skeleton / > 10s 用 progress bar？
- [ ] **侧边面板 / 模态框 a11y**：Esc / 关闭按钮 / 遮罩点击三种关闭方式 + 焦点管理（继承 04a §3.3）？
- [ ] **Toast 滞留**：非 error / 撤稿响应类 toast 自动消失？error 与高合规告警手动关闭？
- [ ] **错误反馈三冗余**：振动 + 红框 + 错误文字（不依赖颜色单独）？
- [ ] **prefers-reduced-motion 兜底**：动效有等价静态形态？功能不消失？
- [ ] **性能 60fps**：中端设备不掉帧？will-change 用完即清？
- [ ] **token 化**：动效用 ai-tokens.css 中的 motion tokens（不硬编码 ms / cubic-bezier）？

---

## CHANGELOG

### v0.2 — 2026-05-08（三签升版完成）

- 经 **C Yang（市场负责人）+ ZL Chen（Tech Lead）+ Bruce Chen（法务）** 于 **2026-05-08** 三签（`governance/04-subdocs-batch-review-packet.md` §12 签字栏）
- 升版判定：minor（v0.1 → v0.2）· 按 06 §2.1 + §2.2 流程
- 本版相对 v0.1 无源条款变更（仅升版号 + 签字留痕）
- 后续工作：ai-tokens.css 注入 motion tokens（B10）+ react 包 v0.2.0 motion patch（详见 packet §10.2）

### v0.1 — 2026-05-07（初稿）

- 初版起草
- §0 适用范围（覆盖通用 UI 动效；不覆盖 CoT / Logo 入场 / Diff View / Disclosure / 业务逻辑动效）
- §1 设计原则（4 条：服务功能 / 节制 / 性能优先 / 减动画兜底）
- §2 缓动函数 + 时长 token（4 ease + 4 duration token；待注入 ai-tokens.css）
- §3 通用加载状态（4 档时长 + 选型 + 通用 spinner 与 CoT 显式视觉区分 + skeleton + progress bar + 不显示 loading 的场景）
- §4 页面切换（路由 / tabs / 抽屉 / 入场动效 4 类）
- §5 侧边面板 / 模态框 / 抽屉 / Tooltip 4 类容器动效
- §6 微交互反馈（hover / pressed / focus / 表单振动 + 三冗余 / 提交按钮 loading）
- §7 Toast / Notification（入场 / 滞留 / 退出 + 与撤稿响应高合规告警协调）
- §8 Skeleton + Progressive Loading + 列表 / 图像渐进加载
- §9 错误状态动效（克制原则；不用情绪化插画；自动滚动 + 焦点同步）
- §10 减动画偏好（继承 04a §6 + 个别保留极短 50ms + 振动 / 抖动 / 闪烁完全禁用）
- §11 性能预算（60fps 底线 + GPU 加速规则 + will-change 用完即清 + 审计工具）
- §13 14 条自检清单
- 待办（已在 v0.2 升版后规划）：ai-tokens.css 注入 motion tokens（B10）+ react 包 v0.2.0 motion patch
- 同步：本次未运行 `scripts/sync-docs.mjs`；正式合入前请重跑同步以更新 VitePress 构建产物
