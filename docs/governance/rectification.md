# 梅斯健康 AI Brand Kit · 三原型整改清单 v0.1

**承接**：`01-gap-audit.md`（差距识别）→ 本文件（具体整改 To-Do）。
**作用**：把每个原型按本 kit 整改的工作量分解成可指派的 To-Do 列表。**不在本文件范围**：实际改造执行（仅交付清单）。
**审计对象**：DeepEvidence Canary、SeekEvidence Canary、Rapid Clinical Pulse Canary。
**优先级**：P0（架构最低承诺，必须补齐）/ P1（家族识别度）/ P2（一致性提升）。

---

## 1. 整改总览矩阵

| 整改项 | DE | SE | DI | RCP | 优先级 |
|---|---|---|---|---|---|
| Endorsement signature 上线 | ⬜ | ⬜ | ⬜ | ⬜ | P0 |
| Wordmark 替换为 Teko + 双色（DE/SE/DI）/ 三字母 + 横线（RCP） | ⬜ | ⬜ | ⬜ | ⬜ | P0 |
| 主色与 wordmark 主色统一（DE: #2c65c9 → #2563EB；SE: #893BE1 → #9333EA） | ⬜ | ⬜ | — | — | P0 |
| Import `ai-tokens.css` + 加 `.brand-*` scope | ⬜ | ⬜ | ⬜ | ⬜ | P0 |
| PITL Verified 徽章 + 触发逻辑（"Verify It"按钮） | ⬜ | ⬜ | ⬜ | ⬜ | P0 |
| Nano-Citation [n] + 侧边溯源面板 | ⬜ | ⬜ | — | ⬜* | P0 |
| CN 主语言策略落地（界面文案审计） | ⬜ | ⬜ | ⬜ | ⬜ | P0 |
| 字体加载链路新增 Teko 引入 | ⬜ | ⬜ | ⬜ | ⬜ | P1 |
| VGI Ingredient Mark 上线（footer + AI 输出右下） | ⬜ | ⬜ | ⬜ | ⬜ | P1 |
| AIO Official 徽章（DE 在 DeepLabeling 内容场景；DI 在内部嵌入） | ⬜ | — | ⬜ | — | P1 |
| CoT 思维链动画 keyframes（替换通用 spinner） | ⬜ | ⬜ | ⬜ | ⬜ | P1 |
| Diff View 红绿语义规范 | ⬜ | ⬜ | — | ⬜ | P1 |
| Progressive Disclosure L1/L2/L3 显式化 | ⬜ | ⬜ | ⬜ | ⬜ | P2 |
| 扩展禁词扫描全产品文案 | ⬜ | ⬜ | ⬜ | ⬜ | P2 |
| 删除战略 PDF 中"终结 AI 幻觉"等已禁词文案 | ⬜ | ⬜ | ⬜ | ⬜ | P2 |
| 图像政策审计（删除 AI 生图、stock photo、emoji） | ⬜ | ⬜ | ⬜ | ⬜ | P2 |

`*` RCP 的 Nano-Citation 仅在 SLR 报告输出场景需要；A/B 测试主流程不一定每条都引用。

---

## 2. DeepEvidence · 详细整改清单

### 2.1 P0（架构最低承诺）

#### A. 加载 ai-tokens.css 并设置 scope
- 任务：在 `app/styles/globals.css` 顶部 import `ai-tokens.css`
- 在根 layout 的 `<body>` 加 `class="brand-de"`
- 测试：开发者面板查看 `getComputedStyle(document.body).getPropertyValue('--product-primary')` 是否返回 `#2563EB`
- 工作量：< 1h

#### B. Wordmark 替换
- 任务：替换现有 wordmark 渲染为新规范（Teko Medium mixed-case + Deep prefix 着色）
- 删除：旧的 `#2c65c9` 色值（logo 动效文件中的旧色），统一为 `#2563EB`
- 引入：Google Fonts Teko 字重 500
- 涉及文件：`app/components/Logo.tsx`、字体加载层（next/font 或 link 标签）
- 工作量：2–3h

#### C. Endorsement signature
- 在所有 Logo 组件下方按 `02 §2` 添加 endorsement signature
- 默认 CN 版（`由 梅斯健康 出品`），技术页面与英文页面用 EN 版（`by MedSci Healthcare`）
- 色 `#666666`，字号 = wordmark × 0.42
- 工作量：1h

#### D. PITL Verified 徽章
- 在 AI 输出结果卡片右上 / 右下角添加 `.badge-pitl`（默认紧凑版"PITL"三字母）
- "Verify It" 按钮触发后端 PITL 复核流程；复核完成后徽章变为 `.badge-pitl--full`（"PITL Verified"）
- 涉及组件：`<AnswerCard />`、`<VerifyItButton />`
- 后端依赖：PITL 复核 API（如不存在需另起 ticket）
- 工作量：4–6h（前端）+ 后端依赖

#### E. Nano-Citation
- 所有 AI 输出的引用从 `(1)` 等格式改为 `<sup class="nano-citation">[1]</sup>`
- 实现侧边溯源面板（参 `04 §3.4`）：点击 `[n]` 滑入 400px 宽面板，含原文片段 + 元信息 + actions
- 涉及组件：新建 `<NanoCitation />`、`<CitationSidePanel />`
- 工作量：1–2 day

#### F. CN 主语言策略
- 全文案审计：将 EN-default 改为 CN-default（除技术 docs / API 页）
- 涉及范围：登录页、首页、CDS 答复界面、设置页、错误提示
- 工作量：取决于现有文案规模，1–3 day

### 2.2 P1（家族识别度）

#### G. VGI Ingredient Mark
- footer 右下添加 `.vgi-mark`（默认"VGI™"紧凑版）
- About 页用 `.vgi-mark--full`
- 工作量：< 1h

#### H. AIO Official 徽章（DeepLabeling 联动）
- 当 CDS 答复中引用了药企的 DeepLabeling 治理过的说明书内容时，在该段落角标 `.badge-aio`
- 需要后端在文献元信息中标注 `is_aio_official`
- 工作量：2h（前端） + 后端依赖

#### I. CoT 思维链动画
- AI 处理中状态（loading）从通用 spinner 换为 `.cot-trace` + 5 个 `.cot-dot`
- 涉及组件：`<AIProcessingIndicator />`
- 工作量：1h

#### J. Diff View
- "Verify It" 复核结果展示页：AI 错误用 `.diff-removed`，专家修订用 `.diff-added`
- 工作量：2h

### 2.3 P2（一致性提升）

#### K. Progressive Disclosure 显式化
- 所有 CDS 答复输出按 L1/L2/L3 三层级排版
- 工作量：1 day

#### L. 文案禁词扫描
- 用脚本扫描 `app/` 下所有 `.tsx` 与 i18n 文件，匹配 `03-brand-voice.md` §6 禁词列表
- 修改命中项；高频问题词（"零幻觉"、"100% 准确"、"颠覆性"）需文案统一替换
- 工作量：0.5–1 day

#### M. 图像政策审计
- 检查所有 `app/public/` 图片资产
- 删除：stock photo、AI 生成医学影像、卡通 / emoji 装饰
- 替换：用 dot-spiral 几何插画 / placeholder box
- 工作量：0.5 day

**DE 总工作量估算**：3–5 个工作日（前端） + 后端依赖 PITL API 与 DeepLabeling 数据

---

## 3. SeekEvidence · 详细整改清单

整改项与 DE 高度类似（同为 vibe-coded shadcn 系统），关键差异：

### 3.1 P0

- A. 加载 ai-tokens.css + `class="brand-se"`（同 DE.A）
- B. Wordmark：旧色 `#893BE1` → 新色 `#9333EA`；wordmark 渲染为 "Seek" + "Evidence"
- C. Endorsement signature（同 DE.C）
- D. **PITL Verified 应用场景不同**：在 SeekEvidence 中，PITL 用于"PICO 横向证据对比表"中的已验证条目
- E. Nano-Citation（同 DE.E，文献引用场景同样关键）
- F. CN 主语言（同 DE.F）

### 3.2 P1

- G. VGI（同 DE.G）
- I. CoT 动画（同 DE.I，应用于"选题挖掘机"分析中）
- J. Diff View（应用于 SCI 写作润色场景：润色前 vs 润色后）
- **不需要** AIO Official（SeekEvidence 不直接面向药企内容）

### 3.3 P2

- K. Progressive Disclosure（同 DE.K）
- L. 文案禁词扫描（同 DE.L）
- M. 图像政策（同 DE.M）

**SE 总工作量估算**：3–4 个工作日（前端） + 后端依赖

---

## 4. Rapid Clinical Pulse · 详细整改清单

RCP 已建立完整 IBM Carbon 设计系统，不需要改 UI 内部视觉。整改集中在"信任层 + 命名 + endorsement"。

### 4.1 P0

#### A. 加载 ai-tokens.css 与 scope
- 在 `app/globals.css` 顶部 import `ai-tokens.css`
- 根 layout `<body>` 加 `class="brand-rcp"`
- **关键**：确认 RCP 现有 Tailwind brand 系列（`brand-500: #0F62FE` 等）与 `--rcp-primary` 不冲突；建议保留现有 Tailwind 命名，将 `--rcp-primary` 单独作为信任徽章 scope
- 工作量：1h

#### B. Wordmark 替换（**关键变化**）
- 当前 RCP wordmark 推断使用 IBM Plex Sans 渲染 "Rapid Clinical Pulse" 全称
- **新规范**：仅 "RCP" 三字母 + Teko Medium + 锐脉 icon + 彩色贯穿横线
- 引入 Teko 字体到 next/font 配置：

```ts
// next.config.ts 或 fonts.ts
import { Teko } from 'next/font/google';
export const teko = Teko({ subsets: ['latin'], weight: ['500'] });
```

- 注意：Teko 仅用于 wordmark 组件内部，**不污染** RCP 内部 IBM Plex 字体栈
- 涉及组件：`<Logo />`、`<TopBar />`、`<Footer />`
- 工作量：3–4h

#### C. Endorsement signature
- 同 DE.C，色 `#666666`
- 工作量：1h

#### D. PITL Verified 徽章
- 应用场景：A/B 测试结果 + AI 模拟预演结果对照页
- 当 AI 模拟预演被真人 PITL 网络验证后，结果卡片角标 `.badge-pitl--full`
- 工作量：3–4h

#### E. Nano-Citation
- 主场景：SLR 报告输出（DeepInsight 与 RCP 共享药企报告生成）
- 标准 A/B 测试结果中可不必每条引用
- 工作量：1–2 day（如 SLR 输出未实现，可推迟到 v2）

#### F. CN 主语言
- RCP 现有内部模块名（"L0/L1 招募"、"L2 邀请"等）已是中文，但需要审计 UI 文案
- 工作量：1 day

### 4.2 P1

- G. VGI Mark（同其他产品）
- I. CoT 动画 keyframes（**重要**）：
  - RCP 现有 `animate-funnel-card` 是漏斗卡片入场，**不能**作为 CoT 复用
  - 需要新增 `.cot-trace` 与 `.cot-dot` keyframes（已在 `ai-tokens.css` 提供，import 即可生效）
  - 应用场景：AI 模拟预演处理中状态
  - 工作量：1h
- J. Diff View：A/B 对比页 → 用 `.diff-removed` / `.diff-added`
  - 工作量：2h
- **RCP wordmark 字重例外说明**：RCP 内部 UI 字重纪律是"禁用 Bold 700"，但 wordmark 组件的 Teko Medium 500 视为 wordmark 层例外，不受 UI 字重纪律约束
  - 工作量：仅文档说明，0h

### 4.3 P2

- K. Progressive Disclosure（应用于 SLR 报告输出层）
- L. 文案禁词扫描
- M. 图像政策审计

**RCP 总工作量估算**：3–4 个工作日（前端） + SLR 输出层后端依赖

---

## 5. 跨产品并行任务（可由共享 PR 批量处理）

> **CitationSidePanel 归属决议（2026-05-07，Sponsor）**：Nano-Citation 的侧边溯源面板由 `@yogyoung-code/ai-brand-kit` v0.2 作为**共享组件**统一交付（`<CitationSidePanel />`）；各产品**不得**独立实现。理由：交互细节（400px 宽、原文高亮、metadata 块、两个 actions）跨产品一致性强，独立实现必然漂移。各产品仅需通过 `onActivate` 回调对接侧边栏开启逻辑（参 `react/src/content/NanoCitation.tsx`）。

| 任务 | 范围 | 工作量 |
|---|---|---|
| 把 `ai-tokens.css` 加到 monorepo 共享包 | 所有产品 | 1h |
| **构建 `<CitationSidePanel />` 加入 ai-brand-kit v0.2**（按 `04 §3.4` 规范） | 所有产品共用 | 1–2 day |
| **升级 `<Disclosure />` 加入 `defaultExpanded` + 断点自适应**（按 `04 §6.4` 规范，移动端默认 L1+L2 展开） | 所有产品共用 | 0.5–1 day |
| 创建共享 React 组件：`<NanoCitation />`（已交付 v0.1）、`<CitationSidePanel />`（v0.2 新增）、`<CoTIndicator />`、`<DiffRow />`、`<Disclosure />`、`<PITLBadge />`、`<AIOBadge />`、`<VGIMark />` | 所有产品 | 2–3 day |
| 共享字体加载（Teko + Noto Sans SC） | 所有产品 | 2h |
| 共享 endorsement signature 组件 | 所有产品 | 1h |
| 全产品文案禁词 lint 规则 | 所有产品 | 1 day |

---

## 6. 不在本 v1.0 整改范围（推迟到后续）

- ❌ DI 产品的整改（DI 尚未开始开发，进入开发时直接按 kit 实施）
- ❌ DI / RCP 图标的生产级矢量化（当前是占位 SVG，需要设计师精修）
- ❌ VGI Mark 的最终 SVG 资产（当前 inline SVG 占位）
- ❌ Logo 反白 / 单色变体（依赖母品牌 W2 交付）
- ❌ 摄影 / 插画库（依赖母品牌 W2–W3 交付）

---

## 7. 整改顺序建议（如要按 sprint 排期）

**Sprint 1**（P0 基础层）：
- 共享层：ai-tokens.css 进 monorepo + 共享组件包
- 各产品：scope class + Wordmark 替换 + endorsement signature

**Sprint 2**（P0 信任层）：
- PITL Verified 徽章 + 触发流程
- Nano-Citation + 侧边溯源面板
- CN 主语言文案审计

**Sprint 3**（P1 家族识别）：
- VGI Mark 上线
- CoT 动画替换 spinner
- Diff View 上线
- AIO Official（DE/DI 适用场景）

**Sprint 4**（P2 一致性）：
- Progressive Disclosure
- 全产品文案禁词扫描
- 图像政策审计

---

## 8. 验收标准

每个产品整改完成后，执行以下检查：

- [ ] 打开产品 → 顶栏 Logo 是 Teko + 产品色（DE/SE/DI 双色 / RCP 三字母）+ endorsement signature
- [ ] 任意 AI 输出区可见 `.badge-pitl`（默认或 --full）
- [ ] 文档中至少一处出现 `.vgi-mark`
- [ ] AI 处理中状态显示 CoT 动画（不是通用 spinner）
- [ ] 引用使用 `<sup class="nano-citation">[n]</sup>` 格式
- [ ] 文案搜索 "零幻觉" / "100%" / "颠覆性" / "革命性" 等禁词无命中
- [ ] 主语言为中文（除 API docs / dev tools 等）
- [ ] 全产品 Lighthouse 检测保持 WCAG 2.1 AA（不因 brand kit 整改下降）

---

> 本清单 v0.1 与 `01-gap-audit.md` v0.1 配对使用。整改进度建议在每个产品的 Linear / Jira 项目中以 epic 形式管理，task 之间设置依赖。


---

::: tip 文档来源
本页由 `scripts/sync-docs.mjs` 自动从 kit 根的 [`05-rectification-checklist.md`](https://github.com/) 同步。**不要直接编辑此文件**——所有修改请改源文件后重跑 sync 脚本。
:::
