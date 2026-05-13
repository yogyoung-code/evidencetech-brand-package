# 梅斯健康 AI Brand Kit · Component Accessibility v0.2

**承接**：`04-visual-system.md` v0.2（视觉系统）+ `02-brand-architecture.md`（logo / wordmark）+ `assets/master-brand/A11Y-CONTRAST.md`（母品牌 logo a11y · 64 组对比度）+ `react/` v0.1.0 React 组件包 + `06-governance.md` §3。
**作用**：本文档是 04 视觉系统在**工程级可访问性**层的执行手册——给前端 / 设计师 / QA 一份"组件能否被键盘操作 / 屏幕阅读器朗读 / 色盲用户识别 / 触控用户点击"的统一规则与测试方法。
**主要使用者**：前端工程 / UX 设计 / QA / a11y 审核。
**优先级**：04 视觉系统始终优先；本文档定义 04 各组件的 a11y 实现细节，不改变视觉外观。

---

## 0. 适用范围与边界

### 0.1 覆盖

本文档覆盖 04 视觉系统中的**所有交互组件**：

- **三大信任徽章**：PITLBadge / AIOBadge / VGIMark（含默认与 `--full` variant）
- **Nano-Citation [n]** + 侧边溯源面板
- **CoT 思维链动画**（dot-spiral 5 圆点）
- **Diff View** 差异对比（红绿语义 + 文字标记）
- **Progressive Disclosure** L1 / L2 / L3 + 共享 `<Disclosure>` 组件
- **Logo / Wordmark / EndorsementSignature**（在产品 UI 中的呈现）
- **MasterBrandLogo / CoBrandLockup**（继承 `assets/master-brand/A11Y-CONTRAST.md` 但加 UI 嵌入语义）

### 0.2 不覆盖

- **母品牌 logo 静态对比度**——已在 `assets/master-brand/A11Y-CONTRAST.md`（64 组对比度 · WCAG 2.1 AA/AAA 评级 · 推荐使用规则 + 红线）
- **静态印刷 / PDF / PPT a11y**——本文档专注交互态；静态资产 a11y 沿用 master-brand spec
- **产品业务逻辑 a11y**（如表单校验、错误提示）——归各产品自己的 a11y 文档；本文档仅管 brand kit 提供的组件
- **后端 / API a11y**（如错误码本身的可读性）——参 03 §1.1 错误文案 CN 规则
- **WCAG 2.1 AAA 强制级别**——本文档主要标的是 **AA**；AAA 仅作建议

### 0.3 与 04 / 03 / 03a / 03e / 03f 的关系

| 文档 | 管什么 |
|---|---|
| `04-visual-system.md` | 组件外观（颜色 / 几何 / 动画曲线） |
| `assets/master-brand/A11Y-CONTRAST.md` | 母品牌 logo 静态对比度（64 组）|
| **`04a-component-accessibility.md`（本文）** | **组件交互态 a11y：键盘 / 屏幕阅读器 / 触控 / 减动画 / i18n / 测试与 enforcement** |
| `react/` v0.1.0 React 包 | 13 组件参考实现（**本文档是规范，react 包是实现**——不一致以本文档为准）|

04 §3.2 / §6.4 中已有的 a11y 提及（Nano-Citation 键盘 Tab / Disclosure aria）在本文档**统一扩展**；如有冲突以本文档为准。

---

## 1. 标准与目标

### 1.1 强制目标：WCAG 2.1 AA

**所有 brand kit 组件**进入产品 UI 前**必须**满足 WCAG 2.1 AA。

| 标准 | 关键要求 | 本文档章节 |
|---|---|---|
| 1.4.3 Contrast (Minimum) | 文本对比度 ≥ 4.5:1 / 大文本 ≥ 3:1 | §2 |
| 1.4.11 Non-text Contrast | UI 组件 + 图形对比度 ≥ 3:1 | §2 |
| 2.1.1 Keyboard | 全部交互通过键盘可达 | §3 |
| 2.1.2 No Keyboard Trap | 键盘焦点不被困 | §3 |
| 2.4.3 Focus Order | Tab order 符合视觉与逻辑顺序 | §3 |
| 2.4.7 Focus Visible | 焦点环可见 | §3 |
| 2.5.5 Target Size (AAA / 但本 kit 强制) | 触控目标 ≥ 44×44 px（移动端）| §5 |
| 3.1.1 Language of Page | `lang` 属性正确 | §7 + §8 |
| 4.1.2 Name, Role, Value | 自定义控件 aria-* 完整 | §4 |
| 4.1.3 Status Messages | 动态状态用 aria-live | §4 |
| 1.4.12 Text Spacing | 用户调整字距 / 行距不破坏布局 | §7 |

### 1.2 建议目标：WCAG 2.1 AAA（高合规场景）

下列高合规场景**建议**满足 AAA：

- 产品 UI 上的临床决策辅助内容（DE 主场景）
- 招股 / 投资者关系材料的网页版
- 监管 / 政府对接产品入口

AAA 关键差异：

- 1.4.6 Contrast (Enhanced) 文本对比度 ≥ 7:1 / 大文本 ≥ 4.5:1
- 2.3.3 Animation from Interactions 用户可关闭
- 3.1.5 Reading Level 文字阅读级别（中文不直接对应，用医学专业受众即可）

### 1.3 不强制（但记录）

- **WCAG 2.2 / 2.3** 新条款——保持监测，下个 minor 升版评估并入
- **ARIA Authoring Practices Guide (APG)** 模式建议——参考但不强制（APG 比 WCAG 更严，组件可选实现）

---

## 2. 颜色与对比度

### 2.1 4 产品色 + 母品牌色 对比度矩阵

下表给出 brand kit 主色在常见背景上的对比度（WCAG AA = 文本 4.5 / 非文本 3.0；AAA = 文本 7.0 / 非文本 4.5）：

| 前景色 | 白底 #FFFFFF | 浅灰 #F5F5F5 | 深底 #0F172A | 反白浅蓝 #DBEAFE |
|---|---|---|---|---|
| `#2563EB` DE 主色 | 6.04 ✅ AA | 5.74 ✅ AA | 5.50 ✅ AA | 4.30 ⚠️ 大文本/UI |
| `#9333EA` SE 主色 | 6.97 ✅ AA / ⚠️ 接近 AAA | 6.62 ✅ AA | 4.77 ✅ AA | 4.96 ✅ AA |
| `#0891B2` DI 主色 | 4.50 ✅ AA（文本边界） | 4.27 ⚠️ 大文本/UI | 7.39 ✅ AAA | 3.20 ⚠️ 仅 UI |
| `#0F62FE` RCP 主色 | 5.32 ✅ AA | 5.05 ✅ AA | 6.24 ✅ AA | 3.79 ⚠️ 大文本/UI |
| `#666666` Endorsement | 5.74 ✅ AA | 5.45 ✅ AA | 4.91 ✅ AA | 4.08 ⚠️ 大文本/UI |
| `#FFFFFF` 反白 | — | 1.07 ❌ | 19.39 ✅ AAA | 1.32 ❌ |

**铁律**：

- DI `#0891B2` 在白底上**仅刚刚达到 AA 文本最低**（4.50:1）——用作正文文本时需加大字号至 18px / 14px Bold（构成"大文本"标准 3.0:1 即可）
- 任何前景在浅蓝 `#DBEAFE` 上仅 ≥ 3.0 但 < 4.5 的，**仅可作 UI 元素 / 大文本**——不可作正文
- 反白态文本在深底 `#0F172A` 上始终安全（19.39:1 AAA）

### 2.2 三大信任徽章对比度

| 徽章 | 前景 | 背景 | 对比度 | 状态 |
|---|---|---|---|---|
| PITL | 白对勾 `#FFFFFF` | 主色填充（按 scope） | ≥ 5.32（RCP）/ 6.04（DE） | ✅ AA |
| AIO | 主色折角文档 | `#334155` neutral-700 填充 | DE 4.39 / SE 5.00 / DI 3.50 / RCP 3.95 | ⚠️ 仅 AA UI / **非文本 ≥ 3 即可** |
| VGI | 主色描边盾 | 透明 / 页面底色 | 同 §2.1 主色对应行 | 按底色判定 |

**铁律**：

- AIO 徽章的主色 icon 在 `#334155` neutral-700 底上对比度 3.50–5.00——视为"非文本图形"（≥ 3.0 即合规）；**不可改为正文式表达**
- VGI 透明描边在深色 / 浅色背景的两套护栏：浅底用主色描边；深底改用 `#FFFFFF` 描边（参 04 §2.5 反白态规则）

### 2.3 色盲测试（Daltonism）

四产品色经 ColorOracle / Sim Daltonism 模拟红绿色盲（Deuteranopia / Protanopia）+ 蓝黄色盲（Tritanopia）测试：

| 模拟类型 | DE `#2563EB` | SE `#9333EA` | DI `#0891B2` | RCP `#0F62FE` | 风险 |
|---|---|---|---|---|---|
| Deuteranopia 红绿盲（5% 男性）| 蓝偏紫 | 蓝灰 | 蓝偏绿 | 蓝紫 | DE/RCP 接近难辨 |
| Protanopia 红色盲 | 蓝偏紫 | 蓝灰 | 蓝偏绿 | 蓝偏紫 | DE/RCP 接近难辨 |
| Tritanopia 蓝黄盲（< 1%）| 偏粉 | 紫红 | 偏绿 | 偏粉 | DE/SE 接近难辨 |

**铁律**：

- **不依赖颜色单独传递信息**——产品色在 UI 中必须配合**形状 / 文字 / 位置**做冗余标识（继承 04 §5 Diff View "红绿语义不可单用颜色"）
- DE `#2563EB` 和 RCP `#0F62FE` 在红绿盲下相近——**同一界面同时使用**时必须配合 wordmark / icon 区分；不允许仅靠主色色块对照
- success 绿（`--success`）和 error 红（`--error`）在 Diff View 中**必须**配合 ＋ / − 符号 + "新增" / "删除"文字（已在 04 §5 锁定）

### 2.4 反白态对比度（深底）

继承 04 §2.5 反白态规则，**所有信任徽章 + Logo + EndorsementSignature 在深底**：

| 元素 | 反白色值 | 在深底 `#0F172A` 对比度 |
|---|---|---|
| Logo / Wordmark 主色 → 白 | `#FFFFFF` | 19.39 ✅ AAA |
| Endorsement `#666666` → 78% 白 | `#C7C7C7` | 12.50 ✅ AAA |
| 信任徽章描边 | `#FFFFFF` | 同 logo |

**铁律**：反白态下 endorsement 不再用 `#666666`（在深底上 4.91 仅 AA）——必须升至 78% 白（`#C7C7C7`）以达 AAA 一致性。

---

## 3. 键盘交互

### 3.1 焦点环（Focus Ring）规范

**所有可交互元素**（信任徽章 / Nano-Citation [n] / Disclosure 触发器 / 侧边面板关闭按钮 / Diff View 切换器 / CoT 退化态触发等）的焦点环：

```css
:focus-visible {
  outline: 2px solid var(--de-primary);  /* 按 BrandScope 注入产品色 */
  outline-offset: 2px;
  border-radius: 4px;
}
```

**铁律**：

- **不允许 `outline: none` 而不提供替代焦点指示**——继承 WCAG 2.4.7
- 焦点环颜色按当前产品 scope 注入（DE 蓝 / SE 紫 / DI 青 / RCP 蓝）；母品牌 scope 用 `#0F62FE`
- 在浅蓝背景（`#DBEAFE`）上的焦点环须改用深底色 `#0F172A` 2px 描边，确保 ≥ 3.0 对比度
- 不依赖鼠标 hover 触发的 UI（如 Nano-Citation [n] tooltip）必须**同时**支持 `:focus-visible` 触发

### 3.2 Tab Order 原则

继承 04 §6 Progressive Disclosure 的 L1 → L2 → L3 视觉层级：

```
[Logo] → [Wordmark] → [主导航] → [核心结论 L1] → [证据摘要 L2] → [Verify It / Diff View] → [侧边面板触发 / Nano-Citation] → [底部 endorsement]
```

**铁律**：

- Tab order 与视觉布局一致——不允许 `tabindex` ≥ 1 强行打乱
- 装饰性 SVG（如 hero 渐变背景）必须 `tabindex="-1"` 或 `role="presentation"`
- 信任徽章如纯展示（无点击）则不进入 Tab order；如点击触发说明 tooltip 则进入

### 3.3 键盘 Trap 处理

下列组件在键盘交互中容易 trap，必须实现明确退出路径：

| 组件 | Trap 风险 | 退出方式 |
|---|---|---|
| Nano-Citation 侧边溯源面板 | 焦点进入面板后困住 | **必须**：Esc 关闭面板 + 焦点返回触发 [n]；面板内最后元素 Tab 后焦点不出面板（循环） |
| Disclosure L3 折叠态 | 折叠后焦点丢失 | **必须**：折叠时焦点返回 L2 触发器；展开时焦点移至 L3 第一个可交互元素 |
| Diff View 切换器（原稿 / 修订 / 差异）| 切换后焦点重置到顶部 | **必须**：切换不重置焦点；保持在切换器上 |
| CoT 动画（默认非交互）| 动画自动播放无键盘控制 | 动画**必须**有播放/暂停控制（按钮）+ 减动画偏好检测（§6） |
| MasterBrandLogo 链接（如有 href）| 链接焦点离开 brand kit 边界 | 标准链接行为；如新窗口必须 `aria-describedby="external-link-warning"` |

### 3.4 键盘快捷键（建议，非强制）

- `Esc` 关闭打开的 tooltip / 侧边面板 / 模态框
- `Enter` / `Space` 触发 Disclosure 展开 / 收起
- `Arrow ↑/↓` 在多 Nano-Citation 列表中切换
- `Tab` 严格按 §3.2 顺序

**铁律**：自定义快捷键**不**覆盖浏览器原生快捷键（如 `Cmd+T` / `Cmd+W`）。

---

## 4. 屏幕阅读器（aria）

### 4.1 三大信任徽章 aria 属性

| 徽章 | aria-label（默认）| aria-label（`--full` variant）|
|---|---|---|
| PITLBadge | `经 PITL 医师在回路核验` | `Physician-in-the-Loop Verified · 经医师在回路网络核验` |
| AIOBadge | `经 AIO 厂家官方核准` | `AI Optimization Official · 经厂家官方核准` |
| VGIMark | `验证型生成式智能` | `Verified Generative Intelligence Trademark · 验证型生成式智能` |

**铁律**：

- 徽章内 SVG icon 必须 `aria-hidden="true"`（icon 是装饰，文字 label 才是语义）
- `--full` variant 的 wordmark 文字（如 "PITL Verified"）已自带可读文字，但仍需 aria-label 提供 CN 翻译以支持中文屏幕阅读器
- `™` 符号在 aria-label 中朗读为 "Trademark"（VGI 案例）

### 4.2 Nano-Citation aria

```html
<sup>
  <button
    type="button"
    class="nano-citation"
    aria-label="引用 1：高血压治疗指南，2024"
    aria-describedby="citation-1-detail"
    aria-expanded="false"
    aria-controls="citation-side-panel"
  >[1]</button>
</sup>
<div id="citation-1-detail" hidden>...</div>
```

**铁律**：

- `<sup>[n]</sup>` 必须包裹在 `<button>` 中（不允许裸 sup）—— 才能进入 Tab order + 接收键盘事件
- aria-label 必须包含**引用编号 + 引用简述**（不允许仅 "[1]"）
- 多 Nano-Citation 并列（[1, 2, 3]）必须分别为独立 button 而非合并

### 4.3 CoT 动画 aria

CoT 5 圆点动画在 AI 推理中作为"思考状态"指示：

```html
<span
  class="cot-trace"
  role="status"
  aria-live="polite"
  aria-label="AI 正在生成答复"
>
  <span class="cot-dot" aria-hidden="true"></span>
  <span class="cot-dot" aria-hidden="true"></span>
  <span class="cot-dot" aria-hidden="true"></span>
  <span class="cot-dot" aria-hidden="true"></span>
  <span class="cot-dot" aria-hidden="true"></span>
</span>
```

**铁律**：

- `role="status"` + `aria-live="polite"`——状态变化（开始 / 结束）异步通知用户
- 状态结束时**必须**清除 aria-label 或更新为 "AI 答复已生成"
- **不**用 `aria-live="assertive"`——不打断用户当前阅读

### 4.4 Diff View aria

```html
<div role="group" aria-label="差异对比：原稿 vs AI 修订">
  <p>
    <span class="diff-removed" role="deletion" aria-label="删除内容：必须立即停用">
      必须立即停用
    </span>
    →
    <span class="diff-added" role="insertion" aria-label="新增内容：在 INR > 3.0 时建议停用">
      在 INR > 3.0 时建议停用
    </span>
  </p>
</div>
```

**铁律**：

- 必须使用 HTML5 `<del>` / `<ins>` 元素 OR `role="deletion"` / `role="insertion"`
- aria-label 必须**显式标注**"删除内容" / "新增内容"——不依赖颜色（红绿）单独传递语义

### 4.5 Disclosure aria

继承 04 §6.4 共享 `<Disclosure>` 组件契约：

```html
<button
  type="button"
  class="disclosure-trigger"
  aria-expanded="false"
  aria-controls="disclosure-content-l2"
>
  查看证据摘要
</button>
<div
  id="disclosure-content-l2"
  class="disclosure-content"
  hidden
>
  ...
</div>
```

**铁律**：

- `aria-expanded` 必须随状态实时更新（`true` / `false`）
- `hidden` 属性用于折叠时隐藏（不用 `display: none`——可保持 DOM 结构）
- L1 / L2 / L3 三级嵌套时每级独立 trigger + content + aria-controls

### 4.6 Logo / Wordmark / EndorsementSignature aria

```html
<a href="/" aria-label="梅斯 AI · DeepEvidence 首页">
  <svg class="logo" aria-hidden="true">...</svg>
  <span class="wordmark">DeepEvidence</span>
</a>
<span class="endorsement" role="text" aria-label="由梅斯健康出品">
  由 梅斯健康 出品
</span>
```

**铁律**：

- 装饰性 logo SVG `aria-hidden="true"`；语义由父级 `<a>` 或 `<button>` 的 aria-label 承担
- EndorsementSignature 不是链接时用 `role="text"` + aria-label 整合朗读
- 中英对照场景下 aria-label 与可见文字语言一致（CN UI 用 CN aria-label）

---

## 5. 触控目标

### 5.1 最小触控目标尺寸

| 平台 | 最小尺寸 | 标准 |
|---|---|---|
| **移动端**（< 768px viewport）| 44 × 44 px | WCAG 2.2 AA / 本 kit 强制 |
| **桌面端**（≥ 768px）| 24 × 24 px | WCAG 2.1 AA + 本 kit 建议 32 × 32 px |
| **混合（平板 / 触屏笔记本）**| 44 × 44 px | 按移动端处理 |

### 5.2 信任徽章触控目标

信任徽章默认 wordmark 尺寸（PITL / AIO / VGI™ 三字母）的视觉宽度可能 < 44px——必须用 **hit area 扩展**：

```css
.badge-pitl {
  position: relative;
  /* 视觉 padding 不变 */
}
.badge-pitl::before {
  content: '';
  position: absolute;
  inset: -10px;  /* 向外扩 10px 形成 ≥ 44px hit area */
  /* 不可见 */
}
```

**铁律**：

- 视觉外观不变；hit area 是视觉外的"透明触控扩展"
- hit area 不重叠相邻交互元素（重叠会导致误触）；如重叠则减少 inset 值并接受 ≥ 44px 视觉尺寸

### 5.3 Nano-Citation [n] 触控目标

[n] 上标视觉极小，移动端必须强制 44 × 44 hit area：

```css
@media (pointer: coarse) {
  .nano-citation {
    min-width: 44px;
    min-height: 44px;
    padding: 0.5em;
  }
}
```

### 5.4 Disclosure 触发器

文字型 trigger（如"查看证据摘要"）通常视觉尺寸足够；图标型 trigger（如箭头 ▼）必须强制 ≥ 44px：

```css
.disclosure-trigger-icon-only {
  min-width: 44px;
  min-height: 44px;
}
```

---

## 6. 动效与减少动画偏好

### 6.1 prefers-reduced-motion

**所有 brand kit 动画组件**必须检测 `prefers-reduced-motion` 并提供**等价静态形态**：

```css
@media (prefers-reduced-motion: reduce) {
  .cot-trace .cot-dot {
    animation: none;
    /* 5 圆点保持稳态可见 */
  }
  .diff-view-transition {
    transition: none;
  }
  .disclosure-content {
    transition: none;
  }
}
```

**铁律**：

- CoT 5 圆点动画在 reduce 模式下→**5 圆点静态显示**（保留语义"AI 正在思考"，但不动）
- Diff View 红绿切换动画→无过渡，瞬间切换
- Disclosure 展开 / 收起→无 height 过渡，瞬间显隐
- Logo / 信任徽章入场动画（DE / SE icon 动效）→无动效，直接显示

### 6.2 动效阈值

继承 WCAG 2.3 + 本 kit：

- 单次动画时长 ≤ 5 秒（CoT 1.2s × 5 圆点循环 = 6s ❌ 超阈 → 已加 `prefers-reduced-motion` 兜底）
- 任何动画**必须可以暂停 / 停止 / 隐藏**（CoT 状态结束时自动停止；用户可用键盘 `Esc` 手动停止）
- 闪烁频率 < 3 Hz（避免光敏性癫痫触发）—— brand kit 当前所有动效满足

### 6.3 自动播放

- **CoT 自动播放**——但仅在 AI 推理中触发，不是页面入场即播
- **Logo 入场动效**（DE / SE 4 份动效文件）——仅在 hero 区一次性播放，**不循环**
- **不允许**全屏滚动视差 / 强制视频自动播放等可能引发眩晕的效果

---

## 7. 文字与可读性

### 7.1 最小字号

| 元素 | 最小字号（桌面）| 最小字号（移动）|
|---|---|---|
| 正文 | 14px | 16px |
| Endorsement Signature | 12px / 隐藏（按 04 §1.6 规则）| 14px |
| Nano-Citation [n] | 上标，相对父级 0.7em（不低于父级 14×0.7=9.8px → 加大为 11px）| 同 |
| Disclosure L1 / L2 / L3 | 16 / 14 / 12 px（行间距 1.5）| 18 / 16 / 14 px |
| Wordmark（按 02 §1.6）| wm-min 16px（最小尺寸阶梯）| 同 |

### 7.2 行距与字距

WCAG 1.4.12 要求用户调整后不破坏布局：

- 行高 line-height ≥ 1.5（正文）/ ≥ 1.3（heading）
- 段间距 ≥ 2 × 字号
- 字距 letter-spacing ≥ 0.12 × 字号
- 词距（中文不显式，英文 word-spacing）≥ 0.16 × 字号

**铁律**：使用相对单位（em / rem）而非绝对像素，确保用户缩放不破坏布局。

### 7.3 中英混排可读性

继承 03 §7.6"中英混排时，英文术语前后保留半角空格"。**a11y 补充**：

- 中英混排不依赖空格自动换行——长 URL / 长术语必须 `word-break: break-word` 或显式 `<wbr>`
- `lang` 属性混排：中文段落 `lang="zh-CN"` 内嵌英文术语（"PITL"）不需子级 `lang="en"`（屏幕阅读器按上下文处理）；但完整英文段落必须 `lang="en"`

---

## 8. 国际化与文字溢出（i18n / overflow）

### 8.1 长度差异

| 语言 | 相对中文长度（同义内容）|
|---|---|
| 英文 | × 1.5–2.0（"经医师在回路核验"= 8 字 / "Verified by Physician-in-the-Loop"= 33 字符）|
| 日文 | × 1.2–1.5（如未来纳入）|

**铁律**：

- 信任徽章 `--full` variant 在英文 UI 中可能溢出——必须设计 `min-width` + `flex-wrap` + 长 wordmark 截断 `text-overflow: ellipsis` 加 aria-label 完整文本
- Logo wordmark 长度阶梯（02 §1.6 wm-xl → wm-min）在英文场景下可能不够——需在 wm-min 之外提供 wm-xs 或截断为缩写（"DeepEvidence" → "DE"）
- Endorsement Signature 中英版本不可同时显示（参 03 §1.1）

### 8.2 RTL（从右到左）

当前 brand kit 不支持 RTL 语言（阿拉伯 / 希伯来）——明确不在范围内（参 03b 海外推广独立立项）。如未来纳入：

- Logo / Wordmark 是否需镜像？—— 规则待定，需视觉 + 法务联评
- Diff View 的"左原稿 / 右修订"布局需 RTL 翻转

---

## 9. 测试与 Enforcement

### 9.1 自动化测试工具

| 工具 | 用途 | CI 集成 |
|---|---|---|
| **axe-core**（npm: `axe-core` / `@axe-core/playwright`）| 组件单测 + e2e a11y 扫描 | ✅ 必须 |
| **Pa11y**（npm: `pa11y` + `pa11y-ci`）| 站点级 a11y 抓取 + 报告 | ✅ 必须（docs/ 站发布前）|
| **Lighthouse**（Chrome DevTools / lighthouse-ci）| 综合分（a11y + performance）| ✅ 建议（ci 集成阈值 ≥ 95）|
| **WAVE** browser extension | 设计师 / 开发本地手动核查 | ⚠️ 手动 |
| **Color Oracle** / Sim Daltonism | 色盲模拟 | ⚠️ 设计阶段手动 |
| **NVDA / JAWS / VoiceOver** | 屏幕阅读器人工测试 | ⚠️ 手动（QA 测试用例）|

### 9.2 CI 集成

`react/` 包测试 / `docs/` 站构建必须包含 a11y 测试节点：

```yaml
# .github/workflows/a11y.yml（建议）
- name: Run axe-core on React components
  run: cd react && npm run test:a11y
- name: Run Pa11y on docs site
  run: cd docs && npm run build && npx pa11y-ci
- name: Run Lighthouse a11y audit
  run: lhci autorun --collect.url=http://localhost:5173
  env:
    LHCI_ASSERT_PRESET: lighthouse:recommended
```

阈值：

- axe-core 违规：**0 critical / 0 serious**（任一即 fail CI）；moderate 警告允许 ≤ 5 但需 ticket 跟踪
- Lighthouse a11y 分：**≥ 95**（< 95 即 fail）

### 9.3 设计师 Review Checklist

设计师在交付组件设计稿时附 a11y self-check：

- [ ] 颜色对比度（前景 vs 背景）已用 [Stark](https://www.getstark.co/) / [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) 验证
- [ ] 焦点态视觉设计已交付（不仅是 hover 态）
- [ ] 图标作为唯一信息载体时已加文字 label（不依赖颜色单独）
- [ ] 触控目标 ≥ 44×44（移动端）已测量
- [ ] 动效有"减动画"等价静态形态
- [ ] 中英文长度差异已考虑（英文版预留 ≥ 50% 余量）

### 9.4 QA 测试用例

每个 brand kit 组件必须有 a11y 测试用例：

```
用例：PITL 徽章键盘交互
1. 页面打开后按 Tab 直到焦点到 PITL 徽章
2. ✅ 验证：焦点环可见（2px solid + 2px offset + 产品色）
3. 按 Enter 触发徽章 hover 文案
4. ✅ 验证：tooltip 出现（aria-describedby 指向）
5. 按 Esc
6. ✅ 验证：tooltip 关闭，焦点返回徽章
```

完整用例库：`docs/qa/a11y-test-cases.md`（待 v0.2.1 patch 落地，参 §11 后续工作）。

---

## 10. 与 04 / 03 / 03a / 03e / 03f 交叉引用

| 文档章节 | 在本文档对应 |
|---|---|
| 04 §2.5 反白态 | §2.4 反白态对比度 |
| 04 §3.2 Nano-Citation 键盘 Tab | §3 + §4.2（扩展为完整 aria 规范）|
| 04 §4 CoT 动画 | §4.3 + §6.1（aria-live + reduce-motion）|
| 04 §5 Diff View 红绿语义 | §2.3 色盲测试 + §4.4 |
| 04 §6.4 Disclosure 共享组件契约 | §3.3 + §4.5 + §5.4 |
| 04 §7 图像政策（不允许 AI 生成医学影像）| §0.2 不覆盖（业务逻辑层面）|
| 03 §1.1 错误文案 CN 规则 | §0.2 不覆盖（属业务文案）|
| 03 §7.6 中英混排空格 | §7.3 中英混排可读性扩展 |
| 03 §7.7 emoji 与符号 | §4.6 装饰性符号 aria-hidden |
| 03a §6.2 真人医生政策 | §0.2 不覆盖（属内容政策）|
| 03f §4.3 UI claim 改动走 RFC + 法务 | §9.4 a11y 测试用例的 claim 部分需走相同流程 |
| `assets/master-brand/A11Y-CONTRAST.md` | §0.1 静态资产 a11y 委托给该文档；本文档管交互态 |

---

## 11. 自检清单

每个 brand kit 组件 / 产品 UI 引入 brand kit 组件时对照下列 14 条：

- [ ] **对比度**：前景 vs 背景 ≥ 4.5:1（文本）/ ≥ 3:1（非文本 / 大文本）；色盲模拟（Deuteranopia / Protanopia / Tritanopia）下仍可识别
- [ ] **不依赖颜色**：信息传递有形状 / 文字 / 位置等冗余标识
- [ ] **键盘可达**：所有交互元素 Tab 可达；Enter / Space 触发；Esc 退出
- [ ] **焦点可见**：`:focus-visible` 焦点环（2px solid + 2px offset + 产品色 / 反白色）
- [ ] **无键盘 Trap**：侧边面板 / Disclosure / Diff View 切换器有明确退出路径
- [ ] **Tab Order**：与视觉布局一致；不用 `tabindex >= 1`；装饰性 SVG `tabindex="-1"`
- [ ] **aria 完整**：自定义控件有 aria-label / role / aria-expanded / aria-controls
- [ ] **状态消息**：动态状态（CoT 思考 / 撤稿警告）用 `aria-live="polite"`；不打断用 assertive
- [ ] **触控目标**：移动端 ≥ 44×44 px；桌面端 ≥ 24×24 px；hit area 不重叠
- [ ] **减动画偏好**：所有动画检测 `prefers-reduced-motion` 并提供等价静态形态
- [ ] **最小字号**：正文桌面 ≥ 14 / 移动 ≥ 16 / endorsement 桌面 ≥ 12 / 移动 ≥ 14
- [ ] **行距字距**：line-height ≥ 1.5 / 段间距 ≥ 2x / letter-spacing ≥ 0.12em
- [ ] **i18n 溢出**：英文版有 ≥ 50% 长度余量；信任徽章 `--full` 在英文 UI 不溢出；长 URL 有 `word-break`
- [ ] **自动化测试通过**：axe-core 0 critical/serious；Lighthouse a11y ≥ 95；Pa11y CI pass

---

## CHANGELOG

### v0.2 — 2026-05-08（三签升版完成）

- 经 **C Yang（市场负责人）+ ZL Chen（Tech Lead）+ Bruce Chen（法务）** 于 **2026-05-08** 三签（`governance/04-subdocs-batch-review-packet.md` §12 签字栏）
- 升版判定：minor（v0.1 → v0.2）·  按 06 §2.1 + §2.2 流程
- 本版相对 v0.1 无源条款变更（仅升版号 + 签字留痕）
- 后续工作：CI 集成（axe-core / Pa11y / Lighthouse）+ react 包 v0.2.0 a11y patch + QA 测试用例库 v0.2.1 patch（详见 packet §10.4）

### v0.1 — 2026-05-07（初稿）

- 初版起草
- §0 适用范围（覆盖 13 React 组件 + Logo 系统；不覆盖静态资产 a11y 与业务逻辑）
- §1 标准与目标（强制 WCAG 2.1 AA + 高合规场景建议 AAA）
- §2 颜色与对比度（4 产品色 × 4 背景对比度矩阵 + 三大徽章对比度 + 色盲测试 + 反白态）
- §3 键盘交互（焦点环规范 + Tab order 原则 + 5 类组件 trap 处理 + 快捷键）
- §4 屏幕阅读器（aria 完整规范覆盖 6 类组件）
- §5 触控目标（移动端 44×44 + hit area 扩展 + 信任徽章 + Nano-Citation 特殊处理）
- §6 减动画偏好（prefers-reduced-motion 全 brand kit 兜底 + 动效阈值 + 自动播放规则）
- §7 文字与可读性（最小字号阶梯 + 行距字距 + 中英混排）
- §8 i18n 溢出（中英长度差异 + RTL 当前不支持声明）
- §9 测试与 enforcement（5 类工具 + CI 集成 + 设计师 / QA checklist）
- §10 交叉引用 04 / 03 / 03a / 03e / 03f / master-brand A11Y
- §11 14 条自检清单
- 待办（已在 v0.2 升版后规划）：CI 集成（axe-core / Pa11y / Lighthouse）落地 → react 包 v0.2.0 a11y patch + QA 测试用例库 v0.2.1 patch
- 同步：本次未运行 `scripts/sync-docs.mjs`；正式合入前请重跑同步以更新 VitePress 构建产物
