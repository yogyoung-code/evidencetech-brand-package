# DeepEvidence (DE) 客户端 UI 改造 · 跨项目 Handoff 包

**生成时间**：2026-05-13
**产生方**：EvidenceTech-Brand-Package（品牌包项目）会话
**目标方**：DeepEvidence-web（DE alpha 真实代码项目）新会话
**作用**：把品牌包侧已沉淀的、与 DE UI 改造相关的全部上下文（决策 / 文档 / 素材 / 红线 / 视觉参考）打成一份可一次读完的交接说明，避免 DeepEvidence-web 侧新会话需要重新探索这边的产出。

---

## 0. TL;DR · 一段话上下文

我（产品经理 Yog）已经为梅斯健康（2415.HK）的 4 个 AI 子产品（**DE / SE / DI / RCP**）建好了完整的 AI Brand Kit v1.0（仓库：`EvidenceTech-Brand-Package`），含 4 份 spec、`ai-tokens.css`、`@yogyoung-code/ai-brand-kit` React 包（13 组件 v0.1.0）、SVG 资产、4 份 logo 动效。**现在要做的是把 DE 的 alpha 真实代码（DeepEvidence-web 项目）按这套品牌包做 UI 深度重写**——不是贴牌，是从 IA 开始重新定义。本 handoff 给出新会话开工所需的全部决策、依赖、素材和红线。

---

## 1. 来自上一段（品牌包项目）会话的决策

这些决策已在 2026-05-13 会话中由用户拍板，**进入新会话不需要再讨论**。如要改动，须 RFC。

| # | 决策 | 内容 |
|---|---|---|
| D1 | 改造尺度 | **深度重写**——原型代码（`deepevidence-canary-260513.zip`）仅作 UI **视觉/交互参考**，不作为代码基础；真正改造对象是 DeepEvidence-web 项目里的 alpha 代码 |
| D2 | 产品形态 | DE = **一个产品，"查证"为主场景、"病历"为附加能力**。"问一个临床问题拿到可验证答案"是核心；病历能力仅作 CDS 答案的"落盘载体"（把结论沉淀到某次诊疗记录），不再保留原型里的"智能问诊 / 手术记录 / 术前讨论 / 模板编辑器"等重资产病历流程作为 P0 |
| D3 | 任务架构 | ⚠️ **暂停未决**——用户提示"当前版本还无法实现完整的可验证答案"，需先与新会话沟通"可验证答案的真实能力边界"，再决定走"模式 chip / 意图自动路由 / 任务面板 / 双层 Ask-Verify"中的哪种 |

---

## 2. ⚠️ 必须在新会话开场就解决的开放问题

新会话进入后，**不要立刻开始改 UI**。先和用户对齐以下问题——它们是 IA / 信任层叙事 / 工程选型的前置：

1. **可验证答案的"真实能力边界"**：alpha 版本里 DE 当前实际能做到什么级别的"答案 + 来源"？Nano-Citation 的引用源是真有 retrieval + grounding，还是占位？PITL 复核链路是否真已联通后端？这直接决定信任层组件（PITL / VGI / AIO / NanoCitation / Diff View）哪些可以真用、哪些先做"诚实的空态"。
2. **任务节拍 / IA**（接 D3）：四个候选——
   - A. 保留"模式 chip"（Perplexity Focus 式）
   - B. 单输入框 + 后台意图识别自动路由（ChatGPT-5 Auto / Glean 式）
   - C. 任务型面板（UpToDate 式，多个任务入口卡片）
   - D. Ask-Verify 双层（顶级两个任务：Ask 与 Verify，所有原模式作为 Ask 的问题子类型）
3. **alpha 版本的目标用户与场景**：科室 / 职级 / 三级 vs 基层？是否真有 daily-active 临床用户在用？是否有他们的反馈数据？这影响信息密度、证据展示节奏、移动适配优先级。
4. **技术栈约束**：DeepEvidence-web 当前代码栈（Next.js 还是 Vite？Tailwind 版本？是否已用 shadcn/ui？）。决定是否直接接 `@yogyoung-code/ai-brand-kit`（React 19 兼容、tsup 打包 ESM+CJS）还是先复制源文件本地化。
5. **病历"落盘载体"形态**（接 D2）：CDS 结论沉淀到病历的 UI 体验——是模态 "保存到 患者 X 的 visit Y"？还是侧栏永久挂着一个"当前活动病历"？

---

## 3. 必读的品牌包文档（按阅读顺序）

新会话进入 `EvidenceTech-Brand-Package` 目录后，按以下顺序读这 7 份，约 6 万字符，读完即拥有全部上下文：

| 顺序 | 文件 | 必读理由 |
|---|---|---|
| 1 | `HANDOFF.md` | 品牌包整体上下文 + 锁定决策表 + 偏离条款 + 容易踩的坑 |
| 2 | `01-gap-audit.md` | DE/SE/RCP 现状审计——本文档 §6 的 DE-specific 整改清单来源于此 |
| 3 | `02-brand-architecture.md` | Logo / 双色 wordmark / Endorsement signature / VGI mark 几何规范 |
| 4 | `04-visual-system.md` | 三大信任徽章 + Nano-Citation + CoT 动画 + Diff View + Progressive Disclosure |
| 5 | `03-brand-voice.md` | CN 主语言铁律 + 禁用词清单（59 条红线）+ 双受众 messaging |
| 6 | `05-rectification-checklist.md` §2 | DE 详细整改清单（P0/P1/P2 已分级、每项工作量估算） |
| 7 | `react/README.md` | `@yogyoung-code/ai-brand-kit` 接入指南 |

**按需读**：

- `00-architecture-locked.md` — 架构层锁定决策（branded house + shared trust layer）
- `03d-error-and-empty-state-voice.md` — 错误 / 空态 / 边界态文案规则（DE UI 写文案必读）
- `03e-china-regionalization.md` — T1/T2/T3/T4 受众分层（信息密度决策依据）
- `03f-evidence-attestation.md` — 数据 claim 实证强度 L1–L4（UI 里所有数字 claim 必须标）
- `04a-component-accessibility.md` — 13 组件的 a11y 实现细节
- `04b-motion-guidelines.md` — 通用动效 token（页面切换 / Toast / Skeleton / 模态）
- `ai-tokens.css` — 生产级 CSS token，直接 import

---

## 4. 必拉的资产清单（DeepEvidence-web 项目要复制 / 安装的东西）

### 4.1 NPM 包

```bash
# 私 registry: GitHub Packages
npm install @yogyoung-code/ai-brand-kit
```

包内含 13 个组件：
- **信任层 7**：`PITLBadge`、`AIOBadge`、`VGIMark`、`NanoCitation`、`CoTIndicator`、`DiffView`（+ `DiffAdded` / `DiffRemoved`）、`Disclosure`（+ `Disclosure.L1/L2/L3`）
- **Logo 系统 4**：`Logo`、`Wordmark`、`EndorsementSignature`、`BrandScope`
- **母品牌 2**：`MasterBrandLogo`、`CoBrandLockup`

如 GitHub Packages 不可用，**从这里直接复制源文件**：`EvidenceTech-Brand-Package/react/src/`（44 个 ts/tsx 文件 + 12 个 SVG）。

### 4.2 CSS Token

`EvidenceTech-Brand-Package/ai-tokens.css` — 直接复制到 `DeepEvidence-web/src/styles/` 或 `app/styles/`，在母品牌 `colors_and_type.css` 之后 import。

### 4.3 字体

- **Teko Medium**（wordmark 专用）—— Google Fonts 引入，subset Latin
- **Inter**（产品 UI 主字体）—— Google Fonts，weight 300/400/500/600/700
- **Noto Sans SC**（CN 正文与 endorsement CN 版）—— Google Fonts
- **IBM Plex Sans**（如要复用 RCP 工程级排版作为 DE 内部字体备选）—— 暂不必须

### 4.4 SVG 静态资产

| 资产 | 路径 | DE 用途 |
|---|---|---|
| 母品牌 logo 12 变体（4 variant × 3 layout） | `assets/master-brand/*.svg`、`react/src/assets/master-brand/*.svg` | About 页、IR、CoBrandLockup 嵌入位 |
| 母品牌 logo PNG 栅格 75 张 | `assets/master-brand/png/` | 邮件、PPT、低 DPI 场景 |
| VGI mark 12 standalone SVG（glyph 6 + compact 2 + full 4） | `preview/vgi-mark/` | Footer + AI 输出右下徽章 |
| DE ECG icon | `react/src/icons/DEEcgIcon.tsx`（已是 React 组件） | 顶栏 logo / favicon / OG 图 |
| DE logo 动效 HTML | `preview/de-logo-animation.html`、`preview/de-icon-animation.html` | Splash / 首次加载 / Hero |

### 4.5 颜色 Token（要在 DeepEvidence-web 里立即落的最小集）

```css
/* 全产品共用（继承母品牌 + 本 kit） */
--de-primary: #2563EB;          /* DE 主色（替换原型里错误的 #0056b3） */
--de-primary-rgb: 37, 99, 235;
--product-primary: var(--de-primary);  /* DE 是默认 scope */

--endorsement-color: #666666;   /* 由 梅斯健康 出品 / by MedSci Healthcare */
--endorsement-color-reverse: rgba(255, 255, 255, 0.78);

/* 信任层 */
--badge-radius: 9999px;
--diff-removed-color: #DC2626;
--diff-added-color: #2E9F82;
--diff-added-bg: #E6F4EF;
```

`<body class="brand-de">` 必须挂上，整个产品 UI 自动适配产品色。

---

## 5. DE-specific 整改清单（从 `05-rectification-checklist.md` §2 摘）

按 **深度重写** 视角调整（原文是"补丁式整改"，这里转译为"重写时的硬性要求"）：

### 5.1 P0 · 架构最低承诺（重写必须满足）

| # | 要求 | 验收 |
|---|---|---|
| P0-1 | import `ai-tokens.css` + 根元素 `class="brand-de"` | `getComputedStyle(document.body).getPropertyValue('--product-primary')` 返回 `#2563EB` |
| P0-2 | Wordmark = Teko Medium mixed-case（`Deep` #2563EB + `Evidence` 黑） | 视觉对照 `preview/wordmarks-preview.html` |
| P0-3 | Endorsement signature 永远附在 wordmark 下方（CN 默认："由 梅斯健康 出品"） | wordmark < 28px 时自动隐藏；色 #666666 |
| P0-4 | PITL 徽章 + Verify-It 按钮联动（默认紧凑"PITL"，复核完整化为"PITL Verified"） | AI 输出卡片右上 / 右下挂载 |
| P0-5 | Nano-Citation `[n]` 上标（产品色） + 点击右侧滑入 400px 溯源面板 | 键盘可达 + focus-visible 外环 |
| P0-6 | CN 主语言全面落地（所有用户可见文案 → CN，含 API 来源的错误/异常/空态） | 文案审计无 EN 残留（开发者错误码常量除外） |

### 5.2 P1 · 家族识别度

| # | 要求 | 验收 |
|---|---|---|
| P1-1 | VGI Ingredient Mark（Footer + AI 输出右下） | 默认紧凑 "VGI™"；About 页用 full |
| P1-2 | AIO Official 徽章（仅在引用 DeepLabeling 治理过的药企内容时） | 段落角标；需后端在文献元信息标 `is_aio_official` |
| P1-3 | CoT 思维链动画（5 圆点 1.2s 呼吸 + 80ms 错峰） | 替换所有 AI loading spinner；`prefers-reduced-motion` 兜底 |
| P1-4 | Diff View 红绿语义（Verify-It 复核结果展示） | AI 错误 `.diff-removed`、专家修订 `.diff-added` |

### 5.3 P2 · 一致性

| # | 要求 | 验收 |
|---|---|---|
| P2-1 | Progressive Disclosure L1/L2/L3 显式化所有 CDS 答复 | L1 核心结论 / L2 证据摘要 / L3 溯源细节 |
| P2-2 | 文案禁词扫描通过 `03-brand-voice.md` §6 全部红线（59 条 v0.2 已签 + 候选 ~95 条） | CI 集成 brand-voice-enforcement 技能 |
| P2-3 | 图像政策审计 | 删除 stock photo / AI 生医学影像 / emoji / 卡通装饰 |

---

## 6. 原型 UI 的"取 / 舍"清单

原型代码（`deepevidence-canary-260513.zip`）通读 12K 行后的设计参考价值梳理。深度重写时——

### 6.1 ✅ 值得参考（视觉模式）

| 模式 | 来源 | 重写时怎么用 |
|---|---|---|
| 顶栏 wordmark + 应用切换 dropdown（DE ⇄ SE） | `App.tsx` 1037-1062 | 保留思路；切换菜单加 DI / RCP 占位；wordmark 色值改正确 |
| Sidebar 折叠 + Pinned / Recent 二级分区 | `components/Sidebar.tsx` | IA 重写后保留 affordance；项类型可能不一样 |
| 三栏 "中心对话 + 右侧证据面板"布局 | `App.tsx` 1137-1230 | 这是 CDS 核心布局，保留 |
| 右侧 Overlay 全屏滑入（Research / ClinicalTrial / Artifact / Monograph） | `components/*Overlay.tsx` | 信任层 PITL 复核详情、Nano-Citation 溯源面板可复用此交互模型 |
| HomeView 分类建议卡片（按 categoryId 路由到模式） | `components/HomeView.tsx` + `InfoCards.tsx` | 任务架构定下来后，卡片可作为"问题类型示例"复用 |
| 输入框 + 模式 chip + 患者绑定 chip + 上传 + 语音 | `App.tsx` 1183-1218 | 任务架构定下来后再决定怎么改 |
| SafetyTriangulationBlock 多源验证卡片 | `components/SafetyTriangulationBlock.tsx`（112 行） | **思想**值得保留——把 PITL 之外的"多源一致性"也显式化；但视觉要重做按 04 §5 Diff View 规范 |
| ReasoningBlock | `components/ReasoningBlock.tsx`（41 行） | 思路对，但动画要换成 04 §4 的 CoT dot-spiral |
| Suggestion chips（AI 答复后给的后续问题建议） | `types.ts` Message.suggestions | 保留 |
| 处理进度面板（ProcessingPanel） | `components/ProcessingPanel.tsx` | 深度会诊场景的进度展示；视觉重做 |

### 6.2 ❌ 不该照搬

| 反例 | 原因 |
|---|---|
| 主色 `#0056b3` | 错误！必须 `#2563EB` |
| 6 种模式手动切换 chip | 任务架构待定（D3 暂停问题）；可能整体推翻 |
| 2 秒入场动画（fadeIn / fadeInScale / slideInLeft / slideUp） | 违反 `04b-motion-guidelines.md`——通用动效应在 200-400ms 区间；2s 仅 hero 入场可 |
| "DeepEvidence can make mistakes. Consider checking important information." 英文免责声明 | 违反 CN 主语言；且与 PITL 战略冲突，应改为正向表述 |
| 病历重资产线（PATIENT_DETAIL / PATIENT_VISIT / VISITS / SmartVisitView / ManualEntryView / TemplateEditorView / VisitsView） | D2 决议病历仅作 CDS 答案落盘载体，原型这部分是 P0-out |
| `glass-panel` rgba(255,255,255,0.95) + backdrop-blur 大面积使用 | 临床场景需要高对比可读性，过度玻璃化反而降低专业感 |
| `tailwind.config.colors.primary` 自定义 6 阶 + drug/teal 杂色 | 直接用 `ai-tokens.css` + `brand-de` scope，颜色单一来源 |
| Tailwind CDN（`<script src="https://cdn.tailwindcss.com"></script>`） | 生产环境必须工程化（PostCSS + JIT），CDN 性能与 a11y 都不达标 |
| 患者下拉菜单里硬编码的"陈伟、王芳..."等真实姓名样例 | 涉合规 PII；mock 也应使用脱敏代号 |
| Mock 数据散落各 component（如 INITIAL_HISTORY 直接在 App.tsx） | 重写时统一进 `mocks/` 或 `fixtures/` 目录 |

### 6.3 ⚠️ 可参考但需重做

| 模式 | 改造点 |
|---|---|
| 6 个模式（快速查询/鉴别诊断/深度会诊/医学计算/药物信息/患者宣教）的内容定义 | 模式集合本身（"DE 要支持哪些 clinical question 类型"）有价值；但**呈现形态**待 D3 决定 |
| SafetyPanel / EvidencePanel / DrugPanel / DifferentialPanel / CalculatorSidebar 这五种右侧面板 | 思路对（按问题类型呈现匹配的证据视图），但每种面板的视觉细节要按 04 重做 |
| Citations 数组 + Nano-Citation 占位 | 数据结构 OK，但视觉与交互完全没按 04 §3 规范，重写 |
| ResearchOverlay / ClinicalTrialOverlay 的"全文 + 元信息 + 操作"三段式 | 结构对；可作为 Nano-Citation 侧边溯源面板的 layout 参考 |

---

## 7. 工程接入步骤（DeepEvidence-web 新会话开工 checklist）

1. **读完 §3 的 7 份必读文档**（约 6 万字符）
2. **与用户对齐 §2 的 5 个开放问题**（不对齐不动 UI）
3. **在 DeepEvidence-web 项目根 `pnpm install @yogyoung-code/ai-brand-kit`**（如私 registry 不可用，复制源）
4. **import `ai-tokens.css` + 根元素挂 `brand-de` scope** — 这一步立刻让 `--product-primary` 全局生效
5. **替换 Logo / Wordmark / EndorsementSignature 三件套**（用 React 包里的组件，不要自己写 SVG）
6. **建立任务架构（D3 决议后）** — 这是 IA 重写的第一刀
7. **逐页改造**：HomeView → Chat / Answer 主面板 → 信任层 7 组件嵌入 → Footer endorsement + VGI
8. **CN 主语言审计**：i18n 文件初始化为 CN-default；EN 仅作 fallback
9. **文案 vs `03-brand-voice.md` §6 禁词扫描**：CI 接 brand-voice-enforcement 技能
10. **a11y CI**：`04a` 全部组件要过 WCAG 2.1 AA

---

## 8. 红线 / 锁定决策（DE 重写不能违反）

来自 `HANDOFF.md` §3 + `02-brand-architecture.md` §6：

- 品牌架构 = **branded house with shared trust layer**（不能改）
- DE 主色 = **#2563EB**（不能改）
- Wordmark = **Teko Medium mixed-case**（不能改）
- 双色 wordmark 着色锚点 = `Deep` 产品色 + `Evidence` 黑（不能反转）
- Endorsement signature 色 = **#666666**（不能用产品色、不能用 navy）
- 主语言 = **CN**（用户可见的所有文案，含错误 / 空态 / Toast）
- 信任徽章默认 = 缩写（PITL / AIO / VGI），不是 full
- AIO = AI **Optimization**（不是 All-In-One）
- VGI = Verified Generative Intelligence™（验证型生成式智能™），不是其他展开
- Diff View 配色 = 复用母品牌 error/success token（不开新色）
- CoT 动画 = 5 圆点 1.2s 呼吸 + 80ms 错峰（不能加旋转 / 3D）
- 禁词：零幻觉 / 终结幻觉 / 100% 准确 / 颠覆性 / 革命性 / AI 自动诊断 / AI 替代医生 / 黑盒 / 一键搞定 ...（完整 59 条见 `03-brand-voice.md` §6 与 `governance/brand-voice-guidelines.md`）
- Hippocrates 是 DE 内部代号，不出现在任何对外材料
- "梅斯医学" ≠ "梅斯 AI"（前者是医生社区平台，严禁混用）
- AI 不允许生成医学影像（FTC 红线）

---

## 9. 验收标准（深度重写后的 DE 客户端要满足的最低线）

**视觉一致性**
- [ ] 所有 logo / wordmark / signature 用品牌包 React 组件渲染（不允许自写 SVG）
- [ ] `--product-primary` 单一来源；无硬编码色值绕过 token
- [ ] 顶栏 wordmark + Footer endorsement signature + VGI mark **三处**永远在线

**信任层兑现**
- [ ] AI 输出卡片必带 PITL 徽章（默认紧凑）+ "Verify It" 按钮入口
- [ ] 所有 AI 陈述句末有 Nano-Citation [n]（除非空态 / 错误态）
- [ ] AI loading 状态用 CoT dot-spiral，不用通用 spinner
- [ ] 引用药企 DeepLabeling 治理内容时，段落角标 AIO

**文案合规**
- [ ] 所有用户可见字符串 CN-default
- [ ] CI brand-voice-enforcement 通过
- [ ] 数字 claim 必带 `(n=X, YYYY)` 实证元信息

**a11y**
- [ ] WCAG 2.1 AA 通过
- [ ] 键盘可达全部交互
- [ ] `prefers-reduced-motion` 动画兜底

**性能**
- [ ] 不用 Tailwind CDN
- [ ] LCP < 2.5s、CLS < 0.1（临床场景对响应敏感）

---

## 10. 给新会话 AI 的开场话术

> "我已读完 EvidenceTech-Brand-Package 的 HANDOFF-DE-WEB-UI-REDESIGN.md + HANDOFF.md + 01/02/03/04/05 主文档 + react/README.md，理解品牌包全部锁定决策与 DE 改造的红线。
>
> 在动 UI 之前，我需要先和你对齐 5 个开放问题（见 handoff §2）：
> 1. 当前 alpha 版本'可验证答案'的真实能力边界？
> 2. 任务节拍 / IA 选哪种（A/B/C/D 四个候选）？
> 3. 目标用户与场景的具体画像？
> 4. 当前 DeepEvidence-web 的技术栈细节？
> 5. 病历'落盘载体'的具体形态？
>
> 这 5 个问题任何一个动 UI 之前必须落地。要从哪一个开始？"

---

## 11. 相关链路 & 联系人

- **品牌包仓库**：`EvidenceTech-Brand-Package`（本地路径 `/Users/yogyoung/Documents/EvidenceTech-Brand-Package/EvidenceTech-Brand-Package`）
- **DE web 代码仓库**：DeepEvidence-web（另一 Claude project）
- **React 包发布位**：GitHub Packages（`@yogyoung-code/ai-brand-kit@0.1.0`，`registry=https://npm.pkg.github.com`）
- **品牌包文档站**：VitePress 46 页（`docs/`，可本地 `pnpm dev` 起站）
- **Sponsor / Decision maker**：Yog（产品经理 + Sponsor）
- **Tech Lead**（review 工程类 RFC）：ZL Chen
- **市场 review**：C Yang
- **法务 review**：Bruce Chen

---

**本 handoff 文档版本**：v1.0 · 2026-05-13
**生命周期**：DeepEvidence-web 新会话开始 → 任务架构（D3）落地后即可归档
