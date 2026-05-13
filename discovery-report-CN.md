# 品牌发现报告 — Evidence AI（梅斯健康 AI 品牌包）

**发现日期：** 2026-05-07
**工作目录：** `/Users/yogyoung/Documents/EvidenceTech-Brand-Package/EvidenceTech-Brand-Package/`
**搜索范围：** 仅本地工作目录（用户暂缓 Google Drive 搜索）
**搜索深度：** 穷尽式 — 完整阅读 00–06 全部 .md 文件、ai-tokens.css、全部 React 源码、全部 preview README、全部 master-brand 文档

---

## 执行摘要

Evidence AI 品牌包是一份成熟度异常高、结构严谨的交付物。一套完整的 v1.0 AI 子品牌体系（"Branded House + 共享信任层"模型）已在 2026-05-05 至 2026-05-07 期间完成锁定与文档化，包含：8 份编号规范文档、1 份生产级 CSS Token 文件、13 个组件的 React 库（v0.1.0）、12 个母品牌 SVG 变体、75 张 PNG 栅格图、1 个 46 页 VitePress 文档站。

体系覆盖梅斯健康（HK:2415）旗下四款产品（DeepEvidence / SeekEvidence / DeepInsight / Rapid Clinical Pulse），通过共享信任层组件统一品牌语言：PITL Verified（医师在回路核验）、AIO Official（厂家官方核准）、VGI 成分标识、Nano-Citation（纳米级引用）、CoT 推理动效、Diff View（差异对比）、Progressive Disclosure（渐进披露）。

**三大关键缺口：**
1. 所有发现的源都是规范或规划文档 — 实际产品 UI 尚未与品牌包对齐
2. DE/SE/RCP 三款产品的整改清单**全部未启动**
3. 品牌语音规范完全缺失：社交媒体指引、华语区域化策略（针对不同层级医院/不同地区医务人员）、监管环境下的医学数据声明实证流程

治理结构在文档层面清晰且分工明确，但尚未经过实际运行验证。

---

## 已分析源文件（深度阅读 36 个核心文件）

### 规范与治理类（10 份）

| 文件 | 类型 | 摘要 |
|---|---|---|
| `00-architecture-locked.md` | 架构（Sponsor 2026-05-05 锁定） | Branded House 模型 / 4 产品矩阵 / 信任层 / 语音原则 v0.1 / 命名体系 |
| `01-gap-audit.md` | 审计 | 对 DE/SE/RCP 试点原型进行 9 维度差距分析 — 全部待解决 |
| `02-brand-architecture.md` v0.6 | 规范 | 标志几何 / 背书签名 / VGI 标识 / RCP 贯穿线 / 联合品牌 / 命名规则 |
| `03-brand-voice.md` | 语音/文案 | 中文优先 / 4 大原则 / 双受众矩阵 / 禁用词 / 微文案规则 |
| `04-visual-system.md` v0.2 | 规范 | 三大信任徽章 / 纳米级引用 / CoT 动效 / Diff View / 渐进披露 / 图像政策 |
| `05-rectification-checklist.md` | 操作 | DE/SE/RCP 分产品分 Sprint 整改任务 — 全部未启动 |
| `06-governance.md` | 治理 | 版本管理 / 变更流程 / 母品牌同步 / 决策权矩阵 / 资产托管 / CHANGELOG |
| `ai-tokens.css` | 设计 Token | 生产 CSS 变量：4 产品主色、背书色、徽章、引用、CoT、Diff |
| `HANDOFF.md` | 操作 | AI 会话交接：锁定决策、注意事项、交付物状态 |
| `README.md` | 操作 | 品牌包索引、母品牌偏离表、色彩摘要、工程接入快速指南 |

### React 组件库（15 个）

`BrandScope.tsx` · `Logo.tsx` · `Wordmark.tsx` · `EndorsementSignature.tsx` · `PITLBadge.tsx` · `AIOBadge.tsx` · `VGIMark.tsx` · `NanoCitation.tsx` · `CoTIndicator.tsx` · `DiffView.tsx` · `Disclosure.tsx` · `DEEcgIcon.tsx` · `SEBarsIcon.tsx` · `DIConstellationIcon.tsx` · `RCPPulseIcon.tsx`，加 master-brand 包装组件与 JS Token。

### 母品牌资产文档（3 份）

`A11Y-CONTRAST.md`（WCAG 2.1，64 种色彩组合）· `CLEAR-SPACE.md`（最小 ½X 留白）· `LAYERS.md`（6 层 SVG 结构）。

### Preview / 决策档案（3 份 README）

RCP 图标（已选 C 方案）· DI 图标（已选 C，README 内部分析曾推荐 B）· VGI 标识（12 个 SVG 资产目录）。

---

## 已发现的品牌要素

### 语音属性

- **严谨而不冷漠** — 医学级证据语言，平等对话非说教
- **透明而不冗长** — 算法过程按需可见，L1→L2→L3 渐进披露
- **医师在回路而非旁路** — 每条 AI 输出明示医师角色；AI 永不替代处方与签名权威
- **克制而不胆怯** — 有证据支撑的主张可自信表达；禁用无依据的最高级
- **中文为主**（Sponsor 锁定）；**禁用 emoji、禁用图库照片、禁用 AI 生成医学影像**（FTC 合规红线）
- **第二人称用"你"不用"您"** — 默认非正式；"您"仅用于法律/服务条款/隐私政策
- **数据声明必带出处** — 格式 `91.3% (n=1,234, 2025)¹`

### 定位

> **中文：** 梅斯 AI · 验证型生成式智能。让每一句结论可验证，每一证据可溯源。
>
> **英文：** MedSci AI · Verified Generative Intelligence. Every conclusion is verifiable; every evidence is traceable.

**反定位：** "We do not displace physician judgment; we amplify its reliability."（不替代医师判断，只放大其可靠性。）

**各产品一句话定位**（自 `03-brand-voice.md` §2.3，截至 2026-05-07）：

| 产品 | 中文 | 英文 |
|---|---|---|
| DeepEvidence | 医生桌面与移动端的循证决策助手——每一句答复都可验证 | Evidence-based clinical decision support — every answer is verifiable |
| SeekEvidence | 临床科研操作系统——从选题到发表，AI 加速、专家把关 | Clinical research OS — AI-accelerated, physician-verified |
| DeepInsight | 药企的循证商业智能套件——意图份额管理与 KOL 雷达 | Evidence-based commercial intelligence for pharma — intent share & KOL radar |
| RCP | 敏捷验证实验室——按需触达医生，加速高价值医学任务 | Agile validation lab — on-demand physician access, accelerated medical tasks |

### 双受众信息矩阵

| | DeepEvidence | SeekEvidence | DeepInsight | RCP |
|---|---|---|---|---|
| **受众** | 临床医生 | 临床研究者 | 药企商务团队 | 药企市场/医学/KA、咨询/调研公司、AI 公司 |
| **痛点** | 决策不确定、信息过载、DRG 编码错误 | 发文压力、选题盲区、SCI 门槛 | KOL 触达低效、AI 时代品牌语义保真 | 寻找目标医生困难、任务成本高、医生反馈周期长 |
| **核心价值** | 30 秒内拿到带证据的答案 | AI 加速研究 OS | 意图份额 + AIO 内容优化 | 让医生敏捷快速完成高价值医学任务 |
| **CTA** | "查证一下" / "Verify It" / "看 Diff" | "看看选题" / "构造检索式" / "草拟一稿" | "雷达 + 我的产品" / "看 Rising Star" | "发起任务" / "Run a pulse" / "看任务反馈" |

### 术语词表

**PITL**（Physician-in-the-Loop / 医师在回路）· **AIO**（AI Optimization / AI 检索优化 — 注意：**不是** All-In-One，组件源码已显式标注）· **VGI™**（Verified Generative Intelligence / 验证型生成式智能）· **Nano-Citation**（纳米级引用）· **CoT**（Chain-of-Thought / 思维链）· **Diff View**（差异对比）· **DEE/SE/DI/RCP**（内部缩写）· **CDS**（智能决策）· **DRG**（疾病诊断相关分组）· **IIT**（研究者发起的临床研究）· **SPL**（结构化药品说明书）· **DeepLabeling**（说明书电子化）· **PI Portrait 360**（医生画像 360）· **Rising Star**（新晋 KOL）· **Verify It**（专家核验）· **Ambient Scribe**（环境速录）

仅限内部代号：**Hippocrates**（= DeepEvidence），任何对外材料禁用。

### 视觉体系（已锁定 Token）

| 产品 | 主色 | CSS 变量 |
|---|---|---|
| DeepEvidence | `#2563EB` | `--de-primary` |
| SeekEvidence | `#9333EA` | `--se-primary` |
| DeepInsight | `#0891B2`（暂定） | `--di-primary` |
| Rapid Clinical Pulse | `#0F62FE` | `--rcp-primary` |
| 背书签名 | `#666666` | `--endorsement-color` |

字体：Teko（Wordmark）· Noto Sans SC + Inter（正文）· IBM Plex Sans/Mono（仅 RCP）。

标志：双色 Wordmark（DE/SE/DI）或全黑+贯穿线（RCP）。尺寸阶梯：wm-xl(88px) → wm-min(16px)；背书签名在 28px 以下隐藏。

信任徽章（药丸形几何）：PITL = 主色填充 + 白色对勾盾 · AIO = neutral-700 填充 + 主色折角文档 · VGI = 透明 + 主色描边盾。

### 治理

版本 v1.0（Sponsor：Yog）。决策权矩阵覆盖架构、色彩 Token、禁用词、徽章类型、产品级整改任务。变更流程：修订（双签 PR）→ minor（RFC）→ major（Sponsor RFC + 三签）→ 紧急（Market+Legal 24h 旁路）。每季度对照梅斯健康母品牌 v1.1 同步。

---

## 冲突与不一致（共发现 6 项）

1. **`00` 中背书色未更新** — `00` §4.3 仍显示 `neutral-700/#334155`；v0.6 的 `02` 与 `ai-tokens.css` 已正确使用 `#666666`。建议补丁 `00`。
2. **DI 图标 README 标⭐为 B** — 但 Sponsor 已选 C 且 C 已实现。建议在 README 中加一行说明"⭐为选定前的分析推荐"。
3. **Nano-Citation hover 过渡时长** — 规范说 250ms，CSS 实现 150ms。建议规范向实现对齐。
4. **`00` 交付物编号表** — 引用 `03 = brand-voice.md`、`04 = ai-tokens.css`，与最终文件编号不符。补丁该表。
5. **AIO 徽章填充 `#334155`** — 数值正确，但同色已从背书用途中"降级"。建议在 CSS 中增加注释消歧义。
6. **SCI 未在 §4.3 缩写表中正式定义** — 但在受众矩阵中已引用。建议补充条目。

---

## 待决问题（11 项 — 按优先级）

### 高优先级（0 项进行中 · 5 项 2026-05-07 全部解决）

1. **✅ 已解决** — DI 主色 `#0891B2` 正式锁定。`00-architecture-locked.md` §3 已移除"暂定"标记；后续任何调整须按 §6 走 major RFC 流程。
2. **✅ 已解决** — DI 图标变体 C 接受为可读。Sponsor 决议：双环结构在 28px 以下虽轻微模糊，但 hub 实心填充仍可识别；不引入产品级降级例外。`02-brand-architecture.md` §1.3 已附评估说明。
3. **✅ 已解决** — Nano-Citation `<CitationSidePanel>` 由 `@yogyoung-code/ai-brand-kit` v0.2 作为**共享组件**统一交付，各产品**不得**独立实现。决议与依据已写入 `05-rectification-checklist.md` §5。
4. **✅ 已解决** — 中文主语言策略**适用**于所有用户可见的错误/异常/空态文案（即使源自 API 或系统层）；代码层标识符（常量、错误码、API 字段、开发者日志）仍用英文。`03-brand-voice.md` §1.1 已新增规则与决议 box，判断标准："该字符串是否会被翻译给用户？是 → CN；否（仅开发者/运维）→ EN"。
5. **✅ 已解决** — "梅斯 AI" / "MedSci AI" 获准作为 AI 子品牌伞标固定简称。`02-brand-architecture.md` §5.4 已新增伞标简称例外条款（核心约束：必须以伞标整体形式出现，不得拆解为"梅斯" + "AI"；母品牌正式署名仍用"梅斯健康"）；`03-brand-voice.md` §2.1 已交叉引用该规则。

### 中优先级（0 项进行中 · 2 项 2026-05-07 已解决）

6. **✅ 已解决** — DE/SE 标志动效文件旧色已统一。用户上传两个动效文件，更新后副本保存于 `preview/de-logo-animation.html`（`#2c65c9` → `#2563EB`）与 `preview/se-logo-animation.html`（`#893BE1` 与笔误 `#893CE1` 均统一为 `#9333EA`）。**附注**：SE 动效文件中 wordmark 文本为 "Deep"+"Evidence"（看似从 DE 模板复制后未替换）；该 voice/文案问题已在文件中以 HTML 注释标注，留给用户/工程团队单独修订——应改为 `.text-seek`+"Seek" + `.text-evidence`+"Evidence"。
7. **✅ 已解决** — 渐进披露移动端规则修订：移动端现默认 **L1 + L2 展开**（与桌面对齐），L3 仍折叠。`04-visual-system.md` 新增 §6.4 定义共享 `<Disclosure>` 组件契约：`defaultExpanded` 属性、内置 `matchMedia('(max-width: 768px)')` 断点检测、`urgency="warning"` 强制全展开模式。产品不再自行实现 L2 折叠逻辑。`05-rectification-checklist.md` §5 已新增 v0.2 构建任务。

### 低优先级（4 项 2026-05-07 全部解决/暂缓）

8. **✅ 已解决** — "24h" 措辞规则已正式写入 `03-brand-voice.md` §3.4（RCP 重新定位批次中落地）：任何对外使用"24h" / "24 小时"措辞须附 `(n=X, 来源: [研究])` 注释；否则改写为"敏捷" / "agile" / "目标: 24h"。规则可通过 `03` §8 发布前自检清单强制执行。
9. **✅ 已解决** — NPM 私有 registry 锁定为 **GitHub Packages**（`https://npm.pkg.github.com`）。**v0.1.0 临时包名**：`@yogyoung-code/ai-brand-kit`（使用 Sponsor 个人 GitHub 账号 `yogyoung-code/ai-brand-kit` 仓库）。等 MSH 创建 `medsci` org 后按 `06-governance.md` §5.4 迁移规程改为 `@medsci/ai-brand-kit`。本次共 31 份源文件通过批量 sed 同步；构建产物（dist/、package-lock.json）下次构建时自动重生成。根 `package.json` 已补 `name` + `version` + `private: true`，消除 `npm install puppeteer` 时的 `EINVALIDTAGNAME` 警告。
10. **VitePress 文档站部署 — 暂缓**（2026-05-07 用户决定）：当前阶段贡献者用本地 `npm run dev` 预览即可，正式托管决定推后。原列出的三个选项（GitHub Pages / Vercel / 内部 nginx）保留待后续选择。
11. **✅ 已解决** — React 9 段截图档案已生成（2026-05-07，Sponsor 本地执行）：`preview/screenshots/react-demo/` 下 9 张 PNG + `manifest.json` 全部就位（93.8 KB / 51.3 KB / 192.6 KB / 49.8 KB / 36.7 KB / 164.8 KB / 44.3 KB / 130.9 KB / 244.4 KB），`preview/screenshots/index.html` 自动从 manifest 渲染卡片矩阵。9 段覆盖：信任徽章四产品 scope · 反白态 · Logo 尺寸阶梯 + endorsement · Logo 反白态（Hero）· Wordmark 退化态 · Nano-Citation/CoT/Diff/Disclosure · 家族 Lockup · 母品牌 logo 4×3 矩阵 · Co-Brand Lockup。

---

## 覆盖盲点（共 10 项 — 所有源中均未涉及）

1. **社交媒体语音规则**（微信 / LinkedIn / 微博 / 知乎）— 完全缺失
2. **华语区域化策略** — 当前将中国视为单一受众；未区分一线三甲、县域医院、各地药企医学部
3. **声明实证流程** — 无来源审批工作流、无被引论文撤稿响应规程
4. **交互组件可访问性** — 仅母标志的 a11y 已文档化；徽章触控目标、侧边面板键盘陷阱、色盲测试均未明
5. **标志和 CoT 之外的动效指引** — 页面切换、通用加载、表单微反馈、侧边面板缓动曲线均未指定
6. **摄影与插画图库** — 已声明等待母品牌 W2 交付；但当前过渡期内容生产无依据
7. **邮件模板语音与格式** — 发件人名称、主题行、事务性 vs 营销邮件区分均缺失
8. **错误信息与空态文案** — 高频医疗触点，临床后果敏感
9. **竞品与对比声明** — 监管医疗背景下 Legal 邻接缺口
10. **NPM 包版本策略** — 无 SemVer 映射、无破坏性变更定义

---

## 下一步行动建议

1. **首先解决待决问题 5**（梅斯 vs 梅斯健康）— 影响所有对外文案
2. **安排工程 Sprint 1** 对 DE/SE/RCP 整改（每产品约 1 个工作日）
3. **补丁 `00` §4.3** 背书色 `#334155` → `#666666`（一行修复）
4. **在 `02` §1.3 记录 DI 28px 图标降级行为**
5. **DI 设计阶段启动前锁定或调整 DI 主色**
6. **起草 3 个最高优先级语音盲点章节**：错误/边界态文案、声明实证、"梅斯 AI"简称的明确归属
7. **将 React 包发布**到选定的 npm 私有 registry
8. **运行截图档案脚本**，固化 v0.1.0 视觉记录
9. **决定 VitePress 文档站部署**目标
10. **规划品牌语音 v0.2** — 覆盖社交媒体 + 邮件模板

---

*本报告完全基于本地工作目录。Google Drive 等企业平台已被用户暂缓搜索 — 上述结论可能因这些平台中的正式品牌文档而需补充或修订。*

---

## 初次发现后的更新记录

本报告为 2026-05-07 的快照。初次扫描后源文档已有修订，此处记录以便追溯。

**2026-05-07 — RCP 重新定位（按 §9 治理流程，待双签确认）**

- `03-brand-voice.md` §2.3 — RCP 一句话定位由"敏捷验证实验室——24 小时内拿到医生反馈"改为"**敏捷验证实验室——按需触达医生，加速高价值医学任务**"（主语从"医生反馈结果"切换为"产业方使用平台"的视角）
- `03-brand-voice.md` §3.4 — "24h 内反馈"范例被替换为"敏捷完成医学任务"；新增子规则：任何对外使用"24h" / "24 小时"措辞须附 `(n=X, 来源)` 注释，否则改写为"敏捷" / "目标: 24h"
- `03-brand-voice.md` §5.2 — 章节标题由"药企受众"扩展为"**药企与产业方受众**"；RCP 受众范围正式扩大至药企市场/医学/KA + 咨询/调研公司 + AI 公司；RCP 行的痛点 / 核心价值 / CTA 同步更新
- `docs/voice/brand-voice.md` — 已手动同步；建议运行 `scripts/sync-docs.mjs` 以重新生成 `docs/.vitepress/dist/` 构建产物
- 版本管理 — voice 层变更须市场负责人 + 法务双签后方可正式升至 v0.2；`03-brand-voice.md` 中 CHANGELOG 已标注待办

**2026-05-07 — 待决问题 #5 已解决："梅斯 AI" / "MedSci AI" 获准使用**

- `02-brand-architecture.md` §5.4 — 新增伞标例外条款："梅斯 AI" / "MedSci AI" 获准作为 AI 子品牌伞标简称用于对外物料。约束：必须以伞标整体形式出现（不得拆解为"梅斯" + "AI"）；单产品语境仍用产品名；母品牌正式署名仍用"梅斯健康" / "MedSci Healthcare"
- `03-brand-voice.md` §2.1 — 新增使用说明 box，交叉引用 `02` §5.4
- `docs/voice/brand-voice.md` — 已同步
- 本报告高优先级待决问题 #5 已标记 ✅ 已解决

**2026-05-07 — 待决问题 #1-#4 已解决：高优先级 backlog 全部清空**

- **#1 DI 主色锁定** — `00-architecture-locked.md` §3："暂定"标记从 `#0891B2` 移除；遗留事项条目改写为已锁定。任何后续调整须按 §6 走 major RFC 流程。
- **#2 DI 图标 C 可读性** — `02-brand-architecture.md` §1.3：附加 Sponsor 评估说明——变体 C 双环结构在 wm-min(16px) 以上可接受，不引入产品级降级例外。
- **#3 CitationSidePanel 归属** — `05-rectification-checklist.md` §5：新增决议 box，`<CitationSidePanel />` 由 `@yogyoung-code/ai-brand-kit` v0.2 作为**共享组件**统一交付；各产品通过 `NanoCitation.tsx` 中已有的 `onActivate` 回调接入。并行任务表新增 v0.2 构建任务。
- **#4 错误/系统文案 CN 策略** — `03-brand-voice.md` §1.1：在主语言矩阵新增两行（用户可见的错误/异常/空态文案 → CN；代码层标识符 → EN）并新增决议 box，统一判断规则："该字符串是否会被翻译给用户？是 → CN；否（仅开发者/运维）→ EN"。
- `docs/voice/brand-voice.md` — 已同步
- 所有 5 项高优先级待决问题现已 ✅ 全部解决。中/低优先级项保留待办。

**2026-05-07 — 待决问题 #7 已解决：渐进披露移动端规则修订**

- `04-visual-system.md` §6.3 — 移动端默认展开规则由"仅 L1"改为"**L1 + L2 默认展开**"（与桌面对齐）。理由：床旁/查房场景下移动端使用，证据摘要（L2）的可见性高于纵向空间节省；多一次 tap 在临床节奏下是真实摩擦。L3（溯源细节）仍折叠。
- `04-visual-system.md` §6.4（新增）— `@yogyoung-code/ai-brand-kit` v0.2 共享 `<Disclosure>` 组件契约：`defaultExpanded: 'L1' | 'L1+L2' | 'all'` 属性、内置 `matchMedia('(max-width: 768px)')` 断点检测、`urgency="warning"` 强制全展开模式、`onToggle` 回调支持埋点。
- `05-rectification-checklist.md` §5 — 新增 v0.2 构建任务（0.5–1 day）：`<Disclosure>` 升级。
- `docs/visual/visual-system.md` — 已同步。

**2026-05-07 — 低优先级 backlog 清理：#8/#9/#10 已解决或暂缓，#11 用户本地执行**

- **#8** — "24h" 措辞规则在 RCP 批次中已写入 `03-brand-voice.md` §3.4，正式标记解决。
- **#9 NPM registry → GitHub Packages**。`react/package.json` 已添加 `publishConfig.registry: https://npm.pkg.github.com` + `publishConfig.access: restricted` + `repository.url`。完整发布规程写入 `06-governance.md` §5.4（PAT 权限、`.npmrc` 配置、首次发布步骤、升版规则）。
- **#10 VitePress 部署 — 暂缓**（用户决定），当前路径为本地 `npm run dev`。`06-governance.md` §5.2 已注明。
- **#11 截图档案 — 用户本地执行**。可复制的命令块：
  ```bash
  cd react && npm install && npm run build       # 确保 dist/ 是最新
  cd .. && npm install puppeteer                   # 首次约 200MB chromium 下载
  node scripts/build-react-demo-screenshots.mjs    # 生成 9 张 PNG + manifest.json
  ```
  执行成功后 `preview/screenshots/index.html` 会从 `manifest.json` 自动渲染卡片矩阵。脚本与基础设施已就位（`scripts/build-react-demo-screenshots.mjs`、`preview/screenshots/`）。

**2026-05-07 — 待决问题 #6 已解决 + 动效资产库扩充**

- 用户分两批上传 **4 份动效文件**（DE/SE 的 logo + icon-only），均归档于 `preview/`：
  - `de-logo-animation.html` — DE icon + wordmark 入场动效。色彩更新：stroke 与 `.text-deep` 由 `#2c65c9` 改为 `#2563EB`（`--de-primary`）。
  - `se-logo-animation.html` — SE icon + wordmark 入场动效。色彩更新：CSS 变量 `--primary-purple` `#893BE1` 与 `--secondary-purple` `#893CE1`（后者为前者笔误）统一为 `#9333EA`（`--se-primary`）；5 条 path fill 全部更新。**Wordmark 文本修正**：原文件错为 "Deep"+"Evidence"（模板复制粘贴错误），已修正为 "Seek"+"Evidence"，类名 `.text-deep` 同步改为 `.text-seek`。
  - `de-icon-animation.html` — DE icon 独立 feature 动效（心跳脉动 + 紫→靛→蓝渐变圆环）。**无需色彩调整** —— 文件已使用 `#2563EB` 与匹配阴影。
  - `se-icon-animation.html` — SE icon 独立 feature 动效（音浪呼吸 + 蓝→靛→紫变频追逐圆环）。色彩更新：`--primary-purple` 由 `#893BE1` 改为 `#9333EA`。
- **渐变端点 2026-05-07 已决议**：`de-icon-animation.html` 和 `se-icon-animation.html` 两份文件的紫色端点均由 `#A855F7` 改为 `#9333EA`。Sponsor 决议：品牌色 token（锁定的 SE 主色 Tailwind purple-600）优先于跨产品渐变镜像的视觉美学。跨产品镜像方向得以保留（DE 紫→蓝、SE 蓝→紫），仅紫色锚点收紧到品牌色。
- `02-brand-architecture.md` §1.3 —— DeepEvidence 与 SeekEvidence 行已更新，引用 logo + icon-only 两类动效资产。
- `HANDOFF.md` §6 已知坑 + §10.4 依赖项 —— 旧色条目加删除线并替换为 4 资产摘要。

**2026-05-07 — 覆盖盲点 #1 社交媒体语音规则已起草（v0.1）**

- 按本报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 1 项。
- **新增** `03a-social-media-voice.md` v0.1：覆盖 8 平台（微信公众号 / LinkedIn CN+EN / 微博 / 知乎 / 抖音 / 小红书 / 视频号）+ 危机手册 6 类场景（撤稿 / 监管公告 / 公共卫生 / 同行竞品 / 医患纠纷 / 自家 bug）四档应对 + 平台资产尺寸表 + emoji / hashtag / CTA 微规则 + 14 条社交版发布前自检清单。
- **核心锁定**：LinkedIn EN 仅"存在感保留模式"（海外推广独立立项）；全平台禁真人医生代言形象；公众号单一账号 + 内容 tag；小红书仅雇主品牌不卖产品；同行 / 竞品默认沉默；医患纠纷 / 自家 bug 在社媒侧不主动发声。
- **修订** `03-brand-voice.md`：新增 §10「渠道层子文档」段，建立 03 → 03a/b/c/d 层级；CHANGELOG 加条目；占位 03b（海外推广）/ 03c（邮件模板）/ 03d（错误与空态）。
- **修订** `HANDOFF.md`：§13.2 voice gaps 进度更新为 1/10；新增 §14 记录本会话产物 + 锁定决策清单 + 下一会话候选切入。
- **盲点 #3 / #9 部分前置**：03a §5.1（撤稿响应）覆盖了 #3 在社交场景的子集；03a §5.4（同行 / 竞品禁忌）覆盖了 #9 在社交场景的子集。完整版（含来源审批工作流、监管医疗背景下的 Legal 邻接细则）仍需独立成文。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/voice/ 待新增 social-media-voice.md 页 + VitePress sidebar 接入，与 v0.2 双签合并。
- **版本管理**：本批次涉及 voice 层条款新增（子文档体系建立 + 03a v0.1），按 §9 治理流程需市场负责人 + 法务双签后正式升至 v0.2。

**2026-05-07 — 覆盖盲点 #2 华语区域化策略已起草（v0.1）**

- 按本报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 2 项。
- **新增** `03e-china-regionalization.md` v0.1：
  - §0 适用范围与边界 —— **边界决议**：港 / 澳 / 台 / 日本 / 新加坡 / 海外华人**移出**本文档归 `03b-overseas-voice.md`（理由：监管框架与医疗体系独立，与 Mainland 受众分层主轴不兼容；此举与 03a §3.3 LinkedIn EN 仅"存在感保留模式"边界保持一致）
  - §1 受众分层框架 —— 医院 / 医生 5 层（T1–T5）+ 药企 / 产业方 3 层（MNC / 国内大型 Pharma / Biotech-Mid-CRO-AI 公司），各附关键差异矩阵
  - §2 文案分层 5 维 —— 术语密度 / 引用类型 / CTA / 数据 claim 本地化 / 时间表达
  - §3 渠道分层 —— 8 渠道 × 8 层级有效性矩阵 + 自然 vs 付费占比 + 区域大会三铁律（本地 KOL / 同层 case / 落地承接团队到位）
  - §4 政策与监管地域差异 —— DRG/DIP / 医保 / 互联网医院 / 数据出境 / 集采与一致性评价
  - §5 跨层敏感场景禁忌 —— 县域 / T1 / 民营互联网 / 跨层 case / 区域热点
  - §6 RACI —— 大区不能独立发布；本地化申请单流程
  - §8 12 条本地化自检清单
- **核心锁定**（详见 HANDOFF §14.6）：区域化文档边界 / 医院 5 层划分 / 药企 3 层划分 / 跨层 case 引用规则 / 大区不能独立发布 / 互联网医院禁跨省处方建议 / 数据出境默认表达 / DRG vs DIP 不混用。
- **修订** `03-brand-voice.md`：§10 子文档清单加入 03e 行；03b 范围扩展为"港/澳/台 / 日本 / 新加坡 / 海外华人 / 全球英语市场"；CHANGELOG 追加 03e 条目 + 边界决议。
- **修订** `HANDOFF.md`：§13.2 voice gaps 进度更新为 2/10；§14 追加 §14.5（产物）/ §14.6（锁定决策）/ §14.7（下一切入）。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/voice/ 待新增 china-regionalization.md 页 + sidebar 接入，与 v0.2 双签合并。
- **版本管理建议**：累计已完成 2 项 voice gap（03a + 03e），建议先做一次 v0.2 双签批次（03 §10 + 03a + 03e 一起合并），再继续推进剩余 8 项。本批次按 §9 治理流程需市场负责人 + 法务双签。

**2026-05-07 — 覆盖盲点 #3 声明实证流程已起草（v0.1）**

- 按本报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 3 项。本项是 Legal 邻接最重的一篇。
- **新增** `03f-evidence-attestation.md` v0.1：
  - §0 适用范围 —— **边界决议**：本文档处理"流程"，03 §7 仍管"格式"；03a §5.1 是 §3 撤稿响应的社交场景子集
  - §1 实证强度分级 —— L1 公开 / L2 内部审计 / L3 同行评议 / L4 官方文件；8 类 claim × 最低实证要求矩阵
  - §2 SourceID 体系 —— 字段强制清单 + 注册流程图 + 11 项不允许来源（维基百科 / 撤稿文献 / Predatory / AI 综述未核验 / 客户口头同意 / 兄弟业务挪用 / 同行内部材料 / 等）+ 7 类时效复审矩阵 + 跨语言处理
  - §3 撤稿响应完整版 —— 监测（PubMed / Retraction Watch）+ T+0 行动 + T+24h 评估 + 7 类物料分类处理（社交 / 白皮书 / 网站 / 产品 UI / 合同 / 招股 / 媒体）+ 复审 + 6 项沉默期禁忌
  - §4 数据 claim 实证链条 —— 6 场景（营销 / UI / 合同 / PR / 学术合作 / 跨场景一致）
  - §5 跨场景一致性 + 受众分层实证适配（继承 03e §2.2）+ 危机留痕
  - §6 工具基础设施候选（Notion / Confluence / 自建三选一）+ 撤稿监测自动化 + Audit Trail 规则
  - §7 实证维度审批权矩阵（10 类 claim × 单/双/三签）
  - §9 14 条发布前自检清单
- **核心锁定**（详见 HANDOFF §14.9）：流程 vs 格式边界 / L1–L4 实证分级 / SourceID 体系不允许静默修改 / 11 项来源红线 / 撤稿响应不删帖不私下改不推卸 / UI claim 修改走 RFC+法务 / 客户合同 L4 三签 / 媒体偏差 24h 未修订主动勘误 / 跨物料同 claim 一致 / 受众分层不等于实证降级。
- **修订** `03-brand-voice.md`：§10 子文档清单加入 03f 行；CHANGELOG 追加 03f 条目 + 边界决议。
- **修订** `HANDOFF.md`：§13.2 voice gaps 进度更新为 3/10；§14 追加 §14.7 待办回填 + §14.8（产物）+ §14.9（锁定决策）+ §14.10（下一切入）。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/voice/ 待新增 evidence-attestation.md 页 + sidebar 接入，与 v0.2 双签合并。
- **版本管理强烈建议**：累计已完成 3 项 voice gap（03a + 03e + 03f），体量已可观；**强烈建议**在继续推进剩余 7 项前做一次 v0.2 双签批次合并（03 §10 + 03a + 03e + 03f 一起）。03f 的实证库工具选型还需要 Sponsor + 法务 + 工程三方决议才能落地，先批次双签更高效。

**2026-05-07 — v0.2 双签批次启动（review pending）**

- 用户决议接受"先签批次再继续推进"建议，启动 v0.2 双签 review。
- **新增** `governance/v0.2-batch-review-packet.md`：单一入口让市场负责人 + 法务可以拿包直接走签，覆盖：
  - §1 一段话上下文 + §2 升版判定（minor / 双签依据 / Tech Lead 不签但通知）
  - §3 详读优先级与时间预算（市场 ~3h / 法务 ~3h）
  - §4 **25 条要 ack 的决策清单**（D1–D25，按 4 份文件分组：子文档体系 3 / 03a 7 / 03e 8 / 03f 7）
  - §5 市场负责人专项 review checklist（22 条）
  - §6 法务专项 review checklist（30 条，03f 详读重点）
  - §7 共同 review checklist
  - §8 反馈与退回流程
  - §9 双签后落地操作（升版号写入 / 签字留痕 / sync docs / HANDOFF 更新 / 通知工程 / 启动后续）
  - §11 签字栏（市场 / 法务 / Sponsor 三栏）
- **批次范围锁定**：03 §10 + 03a v0.1 + 03e v0.1 + 03f v0.1（一次签，不拆）；总增量 ~1,570 行 / 1 章节 / 3 子文档。
- **实证库工具选型解耦**：从本签字中拆出，作为 v0.2 落地任务，由 Sponsor + 法务 + 工程三方另启决议会（D20 + 03f §6.1）。
- **修订** `HANDOFF.md`：新增 §15「v0.2 双签 Review 批次」（15.1 状态 / 15.2 packet 产物 / 15.3 review 期间约束 / 15.4 时间线 / 15.5 Sponsor 即时动作清单 / 15.6 锁定决策）；§14.10 候选切入更新为"等签完再推 #4 / #5"。
- **Review 期间约束**：暂停起草新 voice gap 子文档；可并行的工作 = 强制层（B：把红线同步进 `.claude/brand-voice-guidelines.md`）/ 工程层（A：包重装 + NPM 首发）/ VitePress 站准备脚本（不 commit，等签完合入）。
- **预期时间线**：最快 5 个工作日（无争议）；有争议 7–10 个工作日。

**2026-05-07 — 市场 + 法务双方反馈完成 + 综合 resolution 就绪**

- **市场反馈** 22 条：14 🟢 / 4 🟡 / 5 🔴（D7 小红书 / D14 大区独发 / D20 SourceID 省略 / D23 UI claim / §8 受众分层）— 详见 `governance/v0.2-batch-review-feedback-marketing.md`
- **法务反馈** 30 条 + 共同 7 条：22 🟢 / 4 🟡（**L1 D5 真人医生** = 禁代言+允许使用介绍 / **L2 撤回窗** = 收紧 / **L3 媒体兜底** = 3 工作日 / **L4 招股** = HKEX）/ 0 🔴 / 5 ❓"无需"待澄清 — 详见 `governance/v0.2-batch-review-feedback-legal.md`
- **关键交叉对比**（法务对市场 5 红点的隐含表态）：
  - R1 D7 小红书 🟢 双方兼容（L1 允许使用介绍延伸到小红书）
  - **R2 D14 大区独发 🔴 真冲突**（市场要 vs 法务 ✓ ack 原 RACI）
  - **R3 D20 SourceID 省略 🔴 真冲突**（市场想省略 vs 法务坚持完整体系）
  - R4 D23 UI claim 🟡 法务隐含坚持
  - R5 §8 受众分层 🟢 双方兼容（删 03f §5.2，§1.2 管底线，引用源偏好回 03e §2.2）
- **5 红点收敛到 2 真冲突 + 5 澄清 + 修订预案 ack**——会议密度从 9 项缩到 ~12 项小议题，可在 60min 内完成。
- **新增** `governance/v0.2-batch-review-resolution.md`：综合两方反馈 + 60min 三方会议议程（6 议题逐项估时） + 修订源文档预案 v2（19 处合并修订） + 第二轮签发出条件 + 时间线。
- **实证库工具**：双方兼容→**开源自建**（候选 NocoDB / Baserow / 自建 PG+FastAPI），v0.2 落地后由 Sponsor + 法务 + 工程三方决议会议选定。
- **修订** `HANDOFF.md` §15.1.2 / 15.1.3 / 15.1.4 / 15.1.5：法务摘要 + resolution 结构 + Sponsor 即时动作 + 修订预案 v2。
- **修订** `packet §6`：状态指向法务 feedback + resolution。
- **Sponsor 决策点**：三选项收敛到一选项 → **召集 60min 三方会议**（A 等齐法务已不适用，C 单方裁决违反双签流程）。
- **下一步**：Sponsor 把 resolution.md 链接发双方 + 排会 + 要求会前预读。

**2026-05-07 — Sponsor 三红点裁决（变体 C 路径，跳过三方会议）**

- Sponsor (Yog) 按 packet §8 反馈退回流程的变体 C 直接裁决（packet §8 明文允许"Sponsor 修订源文档 + 重发第二轮签"，三方会议非必经）。
- **三红点裁决**：
  - **R2 大区独发** = 可独发 + 事后 review（每周 100% / 7 天内总部+法务 / 3 次违规取消独发权 / 危机响应仍前置双签）
  - **R3 SourceID** = 保留完整体系 + 工具化（一键注册 / 反向追踪 / 撤稿监测自动化 / 文案校验 / Audit Trail；开源自建 NocoDB / Baserow / PG+FastAPI 候选；v0.2 落地后三方决议会议选型）
  - **R4 UI claim** = 法务统一（不分级）
- **5 红点全部解决**（R1/R5 兼容 + R2/R3/R4 Sponsor 裁决）。
- **新增** `governance/v0.2-sponsor-decisions.md`：完整记录三红点裁决 + 剩余 6 处待 Sponsor 拍板（Q1–Q6）+ 决议完成后路径 + 风险提示。
- **剩余 6 处待 Sponsor 一次性回复**（阻塞修源文档）：Q1 §5.5 / Q2 D18 / Q3 §2.4 / Q4 §4.6 / Q5 §9 默认方向接受 + Q6 §6.1 RACI 重写方向接受。
- **修订** `HANDOFF.md` §15.1.4 / 15.1.5 / 15.1.6 / 15.1.7：Sponsor 三裁决 + Q1–Q6 待决 + 路径 + 风险提示。
- **预计时间线**：Sponsor 回 Q1–Q6 → T+0 修源文档 → T+1 发第二轮签 → T+3 v0.2 升版完成（最快 3 工作日）。

**2026-05-07 — Sponsor 完成 Q1–Q6 + 源文档 v0.2 候选修订完成**

- Sponsor 一次性回复 Q1=A / Q2=A / Q3=C / Q4=A / Q5=A / Q6=接受 + R2 机制设计 ack。
- **源文档批量修订完成**（v0.2 候选状态，顶部仍 v0.1）：
  - `03-brand-voice.md` §10 子文档清单状态升 v0.2 候选 + CHANGELOG v0.2 候选段
  - `03a-social-media-voice.md` §3.7（小红书白名单扩展）+ §6.2（真人医生二分重写）+ §8.2（撤回窗收紧）+ CHANGELOG
  - `03e-china-regionalization.md` §1.1（5→4 层）+ §2 全部表格 + §3.1/§3.2 渠道矩阵 + §5.1/§5.3/§5.4 跨层禁忌 + §6.1（RACI 重写为大区独发+事后 review）+ §6.2（本地化申请单废弃为事后报备）+ CHANGELOG
  - `03f-evidence-attestation.md` §2.1（工具化承诺）+ §2.4（时效改"按合同期限或年度孰短"）+ §3.4（HKEX 招股 + 媒体 24h→3 工作日）+ §4.5（媒体兜底）+ §4.6（学术合作合同模板化）+ §5.2（受众分层适配删除）+ §6.1（实证库开源自建+工具能力清单）+ §6.2 + §8 + §9 + CHANGELOG
- **新增** `governance/v0.2-second-round-signoff.md`：第二轮签 packet（仅修订 diff）+ 第一轮反馈→修订映射 verify 表 + 3 处风险预警 + 5 条签字预读 + 签后 24h 落地 SOP + 后续工作启动节点。
- **修订** `HANDOFF.md` §15.1.0：v0.2 候选源文档已修订状态。
- **下一步**：Sponsor 把 `v0.2-second-round-signoff.md` 链接发市场 + 法务 → 24h 内对修订 diff 做最终 ack → packet §9 落地操作（升版号 / 签字留痕 / sync docs / HANDOFF 更新 / 通知工程 / 后续启动）。
- **预计 T+3（最快 3 工作日）v0.2 升版完成**。

**2026-05-07 — ✅ v0.2 双签完成 + Sponsor 落地操作完成**

- **签字留痕**：voice 层 v0.2 经 **C Yang（市场负责人）+ B Chen（法务）** 于 **2026-05-06** 双签（`governance/v0.2-second-round-signoff.md` §6 签字栏）；Sponsor 于 2026-05-07 完成落地操作。
- **升版完成**：03 / 03a / 03e / 03f 顶部版本号 v0.1 → **v0.2**；CHANGELOG 移除"v0.2 候选"标注；每份文档加双签留痕段。
- **风险闭环**：法务 B Chen 直接 ack R2 修订未提补强；6 个月评估抽样降级条款保留。
- **本批次完成**：voice gap #1 / #2 / #3 全部从"v0.1 草稿"升级为"v0.2 已签"——03a 社交媒体 + 03e 华语区域化 + 03f 声明实证。
- **修订** `HANDOFF.md`：§13.2 voice gaps 状态升 v0.2 已签 / §15 双签完成状态 / §15.1.0 落地操作完成 / §15.1.7 风险闭环 / §15.1.8 release note + 工程邮件文案 / §15.1.9 升版后立即启动节点。
- **下一步即时**（Sponsor 待执行）：
  - docs/ 站同步：本地执行 `node scripts/sync-docs.mjs`
  - #brand-updates 发布 release note（HANDOFF §15.1.8 文案）
  - DE / SE / DI / RCP 工程团队 lead 邮件通知（HANDOFF §15.1.8 文案）
- **下一步 30 天内**：实证库工具选型 RFC（开源自建候选）+ 真人医生判定指南 v0.2.1 patch + onboarding 培训启动。
- **下一步推进**：voice gap 剩余 7 项（#4 交互组件 a11y / #5 动效指引 / #6 摄影插画 / #7 邮件模板 / #8 错误边界态 / #9 竞品对比 / #10 NPM SemVer）。

**2026-05-07 — 覆盖盲点 #4 交互组件可访问性已起草（v0.1）**

- 按本报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 4 项。**注**：04a 是视觉系统子文档（不是 voice 子文档），但属"覆盖盲点"列表 #4 ——延续相同 governance 流程。
- **新增** `04a-component-accessibility.md` v0.1：覆盖 13 React 组件 + Logo 系统的工程级 a11y：
  - §0 适用范围 + 与 04 / 03 / master-brand A11Y 的边界
  - §1 标准与目标（强制 WCAG 2.1 AA + 高合规场景临床决策 / 招股 / 监管对接建议 AAA + 11 条关键 WCAG 标准映射）
  - §2 颜色与对比度（4 产品色 × 4 背景矩阵 + 三大徽章对比度 + 色盲测试 Daltonism 三型 + 反白态）
  - §3 键盘交互（焦点环规范 + Tab order + 5 类组件 trap 处理）
  - §4 屏幕阅读器 aria（6 类组件完整规范）
  - §5 触控目标（移动 44×44 强制 + hit area 扩展）
  - §6 减动画偏好（prefers-reduced-motion 全 kit 兜底）
  - §7 文字可读性 + §8 i18n 溢出（中英长度 × 1.5–2.0；RTL 不支持声明）
  - §9 测试与 CI 集成（axe-core / Pa11y / Lighthouse；阈值 0 critical / ≥ 95）
  - §11 14 条自检清单
- **修订** `04-visual-system.md`：新增 §11「视觉系统子文档」段，建立 04 → 04a/b/c 层级（命名规则跟随 03a/b/c/d/e/f）。
- **核心锁定**（详见 HANDOFF §16.1）：04a 文档定位 / WCAG AA 强制+AAA 建议 / 不依赖颜色冗余标识 / 触控目标 44×44 / 减动画兜底 / RTL 不支持 / CI 阈值 / **签字组合含 Tech Lead**（与 03a/03e/03f 双签不同）。
- **修订** `HANDOFF.md`：§13.2 voice gaps 进度更新为 3 v0.2 已签 + 1 v0.1 草稿；§16 新增 4 节记录产物 + 锁定决策 + 待办。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/visual/ 待新增 component-accessibility.md 页 + sidebar 接入，与 v0.2 三签合并。
- **版本管理建议**：建议累计 04a + 04b（动效指引）后做一次 04 子文档批次三签（市场+法务+Tech Lead），避免单文档单批次 review 成本高。

**2026-05-07 — 覆盖盲点 #5 动效指引已起草（v0.1）**

- 按本报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 5 项。
- **新增** `04b-motion-guidelines.md` v0.1：覆盖通用 UI 动效（CoT 已禁用作通用 spinner 后的核心补位）：
  - §0 适用范围（覆盖通用 UI 动效；不覆盖 CoT / Logo 入场 / Diff View / Disclosure / 业务动效）
  - §1 设计原则 4 条（服务功能 / 节制 / 性能优先 / 减动画兜底）
  - §2 缓动 + 时长 token（4 ease + 4 duration；待注入 ai-tokens.css）
  - §3 **通用加载状态**（CoT 替代核心补位）—— 通用 spinner 弧线单段 800ms 匀速 vs CoT 5 圆点 1.2s 呼吸**显式视觉区分**
  - §4 页面切换（路由 / tabs / 抽屉 / 通用入场）
  - §5 侧边面板 / 模态框 / 抽屉 / Tooltip 4 类容器动效
  - §6 微交互反馈（hover / pressed / focus / 表单振动三冗余 + 提交按钮 loading）
  - §7 Toast 4 类滞留时长 + 撤稿响应高合规告警（aria-live="assertive" 与 03f §3 协调）
  - §8 Skeleton + Progressive Loading
  - §9 错误状态克制原则
  - §10 减动画偏好（继承 04a §6）
  - §11 性能预算（60fps 底线）
  - §13 14 条自检清单
- **修订** `04-visual-system.md` §11 子文档清单：加入 04b 行（待三签升 v0.2）。
- **核心锁定**（详见 HANDOFF §17.1）：04b 文档定位 / 4 缓动 4 时长 token / 通用 spinner 与 CoT 显式区分 / 加载状态 4 档分级 / 侧边面板缓动 / Toast 滞留 / 错误反馈三冗余 / 性能 60fps / 签字组合三签（市场+Tech Lead+法务，与 04a 一致）。
- **修订** `HANDOFF.md`：§13.2 voice gaps 进度更新为 3 v0.2 已签 + 2 v0.1 草稿；§17 新增 4 节记录产物 + 锁定决策 + **04 子文档批次三签建议**（合并 04a + 04b 单次 review）+ 下一切入。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/visual/ 待新增 motion-guidelines.md 页 + sidebar 接入，与 v0.2 三签合并。
- **建议下一步**：编制 04 子文档批次三签 packet（覆盖 04a + 04b）—— 累计 ~1,260 行；单批次 review 比拆开两次成本低 50%+。

**2026-05-07 — 覆盖盲点 #6 摄影 / 插画过渡期政策已起草（v0.1）**

- 按本报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 6 项。
- **新增** `04c-photography-illustration-interim.md` v0.1：覆盖母品牌 W2 摄影/插画库交付前的临时素材使用：
  - §0 适用范围（覆盖过渡期临时素材；不覆盖 04 §7 红线 / 母品牌 v1.1 §8 主规范）
  - §1 过渡期定义（起点 v1.0 锁定 / 终点 W2 交付 / 估期 6–12 个月）
  - §2 摄影 4 优先级来源（P0 自摄 + 知情同意 / P1 母品牌 / P2 CC0 / P3 客户授权）+ 内容白名单 + 过渡期专属禁忌 9 条 + SOP + PII 模糊化
  - §3 插画：dot-spiral 母题 7 维细化 + 4 优先级来源 + **AI 生成插画 FTC 红线扩展**（仅几何抽象 / 非医学 / 设计师重绘后入库）+ 过渡期专属禁忌 8 条
  - §4 临时素材库（独立 schema 字段 + 4 类来源差异化复审节奏 P2 CC0 最严 + 用途反向追踪 + 撤回流程对接 03f §3.4）
  - §5 空状态处理（母品牌 placeholder box / dot-spiral / 文字+icon）
  - §6 W2 交付后迁移规程（30 天时间窗 + 替换 vs 保留分类 + **本文档归档为 .archived.md** + 主体规则并入 04 §7 永久版 + 迁移期合规风险铁律：新物料只能用 W2 资产）
  - §8 12 条入库 / 引用前自检清单
- **修订** `04-visual-system.md` §11 子文档清单加入 04c 行（v0.1 待三签升 v0.2，标注"本文档随 W2 交付归档"）。
- **核心锁定**（详见 HANDOFF §18.1）：04c 文档定位（不动 04 §7 红线 + 母品牌 v1.1 §8 主规范）/ 过渡期 6–12 个月 / 摄影 P0 自摄优先 / 真人医生政策延伸（继承 03a §6.2 二分）/ AI 生成插画 FTC 扩展（仅几何抽象+设计师重绘）/ dot-spiral 母题 7 维细化 / 过渡期插画 8 条禁忌 / 临时素材库独立 schema / W2 交付 T+30 迁移 / 迁移期新物料只用 W2 资产 / 三签组合（市场+Tech Lead+法务，与 04a/04b 一致）。
- **修订** `HANDOFF.md`：§13.2 voice gaps 进度更新为 3 v0.2 已签 + 3 v0.1 草稿；§18 新增 4 节记录产物 + 锁定决策 + **04 子文档批次三签建议更新**（合并 04a+04b+04c 单次 review 成本 ×3 → ×1）+ 下一切入。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/visual/ 待新增 photography-illustration-interim.md 页 + sidebar 接入，与 v0.2 三签合并。
- **法务待交付**：《过渡期摄影申请表》模板 +《过渡期摄影知情同意书》模板（含转载范围 / 撤回机制 / 有效期 / 肖像权授权范围 / PII 模糊化承诺）—— 作为 v0.2 三签批次的附件交付。
- **建议下一步（强）**：累计 04a + 04b + 04c 共 ~1,780 行 / 36 章草稿；单批次三签 review 比拆三次成本低 60%+；强烈建议在继续推进剩余 voice gap 前**先编制 04 子文档批次三签 packet**。

**2026-05-07 — 04 子文档批次三签 packet 已编制（review pending）**

- 按上一条建议执行——编制 04 子文档批次三签 packet 启动升版流程。
- **新增** `governance/04-subdocs-batch-review-packet.md`：单一入口让市场 / Tech Lead / 法务三审阅人不必翻 3 份源文档。覆盖：
  - §1 一段话上下文 + §2 升版判定（minor / 三签依据 / 与 voice 层 v0.2 协同）
  - §3 详读优先级与时间预算（市场 ~3.5h / **Tech Lead ~5h** / 法务 ~3.5h）
  - §4 **34 条要 ack 的决策清单**（A1–A8 + B1–B10 + C1–C11 + X1–X5 跨文档协同 5 条）
  - §5 市场专项 13 条 / §6 **Tech Lead 专项 21 条（新角色）** / §7 法务专项 19 条 / §8 共同 6 条
  - §9 反馈与退回流程（30min 四方答疑机制）
  - §10 三签后落地操作 SOP（文档 / 工程 / 通知 / 后续启动）
  - §11 源文档清单 + §12 签字栏（市场 / Tech Lead / 法务 / Sponsor 四栏）
- **批次范围锁定**：04a + 04b + 04c 一次签；不拆分（X1–X5 跨文档协同破坏成本太高）。
- **与 voice 层 v0.2 双签的关键差异**（HANDOFF §19.3）：签字组合三签（vs 双签）/ 决议 34 条（vs 25 条）/ 单签字人时长 Tech Lead 5h 最重 / **工程依赖强**（CI 集成 + motion tokens 注入 + react 包 v0.2.0 + 临时素材库基础设施）。
- **修订** `HANDOFF.md`：§18.3 待办回填 + 新增 §19「04 子文档批次三签 review 批次」（§19.1 状态 / §19.2 packet 产物 / §19.3 与 voice 层差异 / §19.4 Sponsor 即时动作 / §19.5 review 期间约束 / §19.6 时间线 / §19.7 锁定决策）。
- **Review 期间约束**：暂停起草新 voice gap / 子文档；可并行的工作 = 强制层（B：把 voice 层 25 + 04 批次 34 = 共 59 条核心红线同步进 `.claude/brand-voice-guidelines.md`）/ 工程层（A：包重装 + NPM 首发演练）/ VitePress 站准备脚本（不 commit，等签完合入）。
- **预期时间线**：最快 5 个工作日（无争议）；有争议 7–10 个工作日（含工程方案重新评估）。
- **下一步**：Sponsor 把 packet 发市场 / Tech Lead / 法务三方 + 排答疑会 + 要求会前预读。

**2026-05-07 — 强制层（B）落地：brand-voice-guidelines.md 编制完成**

- 04 子文档批次三签 review 期间的并行工作之一——把 voice 层 v0.2 已签 + 04 批次 v0.2 候选共 **59 条核心红线**浓缩+重组为 brand-voice-enforcement 技能的工作规范。
- **新增** `governance/brand-voice-guidelines.md` v0.2 候选 / ~580 行 / 16 章：
  - §0 使用说明（何时应用 / 何时不 / 优先级）
  - §1 品牌基础 / §2 写作微规则 / §3 禁词全集（中英 + AI 医学 + FOMO）
  - §4 数据 claim 实证（L1–L4 + SourceID + 11 项不允许来源）
  - §5 真人医生政策（代言禁 vs 使用介绍 8 条护栏）
  - §6 社交渠道分场景（8 平台 + 危机沉默 + 撤回窗）
  - §7 中国大陆受众分层（T1–T4(A/B) + 5 维文案分层 + 政策语境）
  - §8 撤稿响应规程（铁律 6 项 + 7 类物料 + HKEX 专项）
  - §9 视觉 a11y（04a v0.2 候选）+ §10 动效（04b 候选）+ §11 摄影插画（04c 候选）
  - §12 治理与审批速查
  - §13 **20 条核心红线自检清单**
  - §14 **常见错误 18 例反例→正例对照**
  - §15 版本与来源映射
- **部署位置**：`governance/brand-voice-guidelines.md`（沙盒受保护无法直写 `.claude/`）；用户本地 symlink 或 copy 到 `.claude/brand-voice-guidelines.md` 即可让 brand-voice-enforcement 技能自动加载。
- **设计决策**：不简单列 59 条；按"写作场景 / 元素 / 红线"重组成实操手册——AI 检索友好 + 写作时易引用。
- **修订** `HANDOFF.md`：§19.5 review 期间约束更新（强制层已完成）+ 新增 §20「强制层（B）落地」（产物 / 部署 / 维护节奏 / 锁定决策 / 用户即时动作）。
- **维护节奏**：源文档升版同步更新；每季度审计；冲突以源文档为准。
- **启用条件**：用户本地 symlink/copy 到 `.claude/brand-voice-guidelines.md`；启用后 brand-voice-enforcement 技能在内容生产时自动应用 59 条红线。

**2026-05-08 — ✅ 04 子文档批次 v0.2 三签完成 + Sponsor 落地操作完成**

- **签字留痕**：04 视觉系统子文档批次 v0.2 经 **C Yang（市场负责人）+ ZL Chen（Tech Lead）+ Bruce Chen（法务）** 于 **2026-05-08** 三签（`governance/04-subdocs-batch-review-packet.md` §12 签字栏；Sponsor Yog 同日流程留痕）；Sponsor 同日完成落地操作。
- **升版完成**：04a / 04b / 04c 顶部版本号 v0.1 → **v0.2**；CHANGELOG 移除"待三签"标注，每份加三签留痕段；04 §11 子文档清单 3 行状态升级为"v0.2 已签"。
- **本批次完成**：voice gap #4 / #5 / #6 全部从"v0.1 草稿"升级为"v0.2 已签"——04a 交互组件 a11y + 04b 动效指引 + 04c 摄影插画过渡期政策。
- **34 决议全部锁定**：A1–A8（04a）+ B1–B10（04b）+ C1–C11（04c）+ X1–X5（跨文档协同）—— 与 voice 层 25 决议合计 **59 条红线**全部已签。
- **修订** `HANDOFF.md`：§13.2 voice gaps 4/5/6 状态升 v0.2 已签 / §19.1 状态升"三签完成" / §19.1.0 落地操作完成 / §19.1.1 release note + 工程邮件文案 / §19.1.2 升版后立即启动节点。
- **修订** `04-visual-system.md` §11 子文档清单：3 行状态全部升 v0.2 已签。
- **修订** `governance/brand-voice-guidelines.md`：§9 / §10 / §11 状态从"04 候选"升级为"已签"；§15 版本与来源映射更新。
- **下一步即时**（Sponsor 待执行）：
  - docs/ 站同步：本地执行 `node scripts/sync-docs.mjs`
  - #brand-updates 发布 release note（HANDOFF §19.1.1 文案）
  - DE / SE / DI / RCP 工程团队 lead 邮件通知（HANDOFF §19.1.1 文案）
- **下一步 30 天内**：实证库工具选型三方决议会议（与 04c 临时素材库基础设施复用）+ 法务交付《过渡期摄影申请表》+《知情同意书》模板 + 法务真人医生判定指南 v0.2.1 patch + 实证库工具选型 RFC。
- **下一步 60 天内**：a11y CI 集成（axe-core / Pa11y / Lighthouse）+ ai-tokens.css 注入 motion tokens（B10）+ react 包 v0.2.0 发布（含 a11y + motion patch）。
- **下一步推进**：voice gap 剩余 4 项（#7 邮件 / #8 错误边界态 / #9 竞品对比 / #10 NPM SemVer）—— 已无三签锁定压力，可全速推进。

**2026-05-08 — ✅ voice gap #10 起草 + react 包 v0.1.0 真首发完成**

- **#10 NPM SemVer**：新增 `06a-npm-semver.md` v0.1（14 章 / ~720 行 / 27 项 breaking change A1–A27 / 双向触发矩阵 / 半自动发布 / 多包预留 / MSH 迁移即 MAJOR）+ `06-governance.md` §5.5 治理层子文档清单建立。配套产物：`governance/06a-signoff-packet.md`（Tech Lead + Sponsor 双签 packet · 16 决议 N1–N16）+ `react/CHANGELOG.md` + `react/PUBLISH.md`（步骤化发布 runbook）+ `react/.npmrc.example` + `governance/06a-release-notes-template.md`（7 种场景模板）+ `scripts/verify-exports.mjs`（CI 校验脚本）。**待 Tech Lead + Sponsor 双签升 v0.2**。
- **react 包 v0.1.0 真首发完成**：`@yogyoung-code/ai-brand-kit@0.1.0` 已发布到 GitHub Packages（latest tag）+ rc 演练版本 0.1.0-rc.1 保留作 audit trail；GitHub repo `yogyoung-code/ai-brand-kit` README + CHANGELOG + v0.1.0 git tag + GitHub Release 页 release note 全部就位。
- **沿途遇到的 7 类坑**全部回填到 PUBLISH.md / .npmrc.example / 06a §7.4：EPRIVATE（package.json `private: true` 与发布冲突）/ PAT scope 半权限（缺 read:packages 导致 GET 401）/ fine-grained vs classic PAT（必须 classic）/ cp .npmrc.example 占位符遗忘替换 / git 不读 ~/.npmrc PAT / zsh INTERACTIVE_COMMENTS 默认关 / GitHub Packages UI 索引延迟。
- **后续任务节点**：T+30 天内实证库工具三方决议会议 + 法务交付摄影申请表 / 知情同意书 / 真人医生判定指南；T+60 天内 react v0.2.0（a11y + motion patch + 4 新组件）+ a11y CI + motion tokens 注入 ai-tokens.css。
- **修订** `HANDOFF.md`：§13.2 voice gap #10 状态升 v0.1 已签草稿 + 工程层"react 包 v0.1.0 首发完成"标记 + 新增 §21（21.1–21.7：状态 / 完整链路 / 沿途回填 / 7 类坑学习记录 / baseline 数据 / 后续任务节点 / 锁定决策）。

**2026-05-08 — 覆盖盲点 #7 邮件模板已起草（v0.1）**

- 按发现报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 7 项。
- **新增** `03c-email-templates-voice.md` v0.1 —— 14 章 / ~700 行：§1 6 类邮件 + 签字门槛矩阵（C1 事务性 / C2 营销 / C3 客户支持 / C4 内部 / C5 PR / C6 紧急-撤稿响应）+ §2 发件人分层 + §3 主题行规则 + §4 正文结构 + §5 数据 claim 引用（继承 03f）+ §6 真人医生政策（继承 03a §6.2 · 邮件 body 内禁照片）+ §7 签名档（4 产品 BrandScope 色条）+ §8 退订合规（PIPL §17 / CAN-SPAM / CASL / GDPR · 7 年保留）+ §9 撤稿响应邮件（继承 03f §3.4 · R1-R4 子类）+ §10 中英协同 + §11 附件规范（命名 / PII / 水印 / 加密）+ §12 **10 个核心模板库**（M1-M10）+ §13 14 条自检 + §14 决策权。
- **核心锁定**（详见 HANDOFF §22.2）：6 类邮件分类 / 签字门槛分级 / 跨产品上调一级 / 大区独发权（仅 C2+C4）/ 域名分层 / DMARC 配置 / 主题行 ≤ 50 字符 + 禁词 / emoji 邮件特异规则 / 真人医生 body 内禁照片 / endorsement 必出 / 退订合规 ≤ 1 工作日生效 / 双 opt-in 推荐 / 撤稿响应 R1-R4 子类 + 7 年保留 / CN 主版双语结构 / 附件命名 + 加密 / 10 模板库锁定。
- **修订** `03-brand-voice.md` §10 子文档清单 —— 03c 行从"未启动"升级为 v0.1 草稿；范围扩展为"邮件模板与渠道（事务性 / 营销 / 客户支持 / 内部 / PR / 紧急-撤稿响应 6 类 + 10 模板库 + 退订合规）"。
- **修订** `HANDOFF.md` §13.2 voice gap #7 状态升 v0.1 草稿 + 新增 §22（22.1–22.6：状态 / 锁定决策 / 协同 / 待办 / 下一步候选 / 签字成本预估）。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/voice/ 待新增 email-templates-voice.md 页 + sidebar 接入，与 v0.2 双签合并。
- **建议下一步**：协同 03d 错误边界态起草 → 合签 voice 层 v0.3 批次（市场 + 法务双签；含 03 §10 + 03c + 03d）—— 单批次 review 成本比拆开两次低 50%+。

**2026-05-08 — 覆盖盲点 #8 错误 / 边界 / 空态文案已起草（v0.1）**

- 按发现报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 8 项。
- **新增** `03d-error-and-empty-state-voice.md` v0.1 —— 14 章 / ~830 行 / **30 个核心模板库**：§1 **错误分类三维矩阵**（来源 6 类 × 严重度 4 级 × **临床敏感度 4 级** —— 后者为本子文档核心特异维度）+ §2 4 段式（What/Why/Action/Help）+ §3 错误码命名（ERR-COMMON / ERR-DE / ERR-SE / ERR-DI / ERR-RCP · 9 段编号区段 · CN/EN 双轨继承决议 #4）+ §4 18 禁忌措辞（10 通用 + 4 临床额外）+ §5 空态 6 子类 + §6 **临床场景特殊处理**（PITL 核验 + 撤稿告警全屏阻塞 + confidence 阈值 + SourceID 失效）+ §7 a11y/动效协同（继承 04a/04b）+ §8 求助 3 级 + §9 跨产品（命名空间 + ERR-COMMON）+ §10 30 模板库 + §11 中英协同 + §12 lint/CI/季度审计 + §13 14 条自检 + §14 决策权。
- **核心锁定**（详见 HANDOFF §23.2）：错误三维分类 / 4 产品默认敏感度 / 4 段式（含临床特殊例外）/ 错误码命名空间 / CN-EN 双轨 / 18 禁忌 / 6 类空态 / **PITL 核验提示触发条件 + 撤稿告警全屏阻塞 + R1 邮件触发** / 求助 3 级 + critical+clinical-critical 双路径 / 工单自动创建（不含 PII）/ 共享错误码不重复翻译 / 错误监控阈值 / 30 模板锁定 / lint+CI+季度审计 + 错误码注册表。
- **签字组合**：**三签**（市场 + Tech Lead + 法务）—— 涉工程实施（错误码 / lint / CI / aria）+ 临床敏感（PITL 核验文案 + 撤稿告警）+ 监管措辞（§4 18 禁忌）。
- **修订** `03-brand-voice.md` §10 子文档清单 —— 03d 行从"未启动"升级为 v0.1 草稿；范围扩展为完整 14 章覆盖。
- **修订** `HANDOFF.md` §13.2 voice gap #8 状态升 v0.1 草稿 + 新增 §23（23.1–23.7：状态 / 锁定决策 / 协同 / 与 03c 合签建议 / 待办 / 下一步候选 / 体量与签字成本）。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/voice/ 待新增 error-and-empty-state-voice.md 页 + sidebar 接入，与 v0.3 三签合并。
- **建议下一步**：编制 voice 层 v0.3 三签 packet（覆盖 03 §10 + 03c + 03d）——市场 + Tech Lead + 法务三签；单批次 review 成本比拆开两次低 50%+；签字组合取 03d 基线（因涉工程实施 + 临床敏感）。
- **Voice gap 进度**：8/10（剩 **#9 竞品对比** 1 个未起草）。

**2026-05-08 — ✨ 覆盖盲点 #9 竞品对比已起草（v0.1）· Voice gap 100% 全部完成**

- 按发现报告 Coverage Gaps 优先级顺序进入 voice gap 填补阶段，本次完成第 9 项 —— **同时也是最后一项**。Voice gap 10/10 全部起草完成 🎉。
- **新增** `03g-competitive-and-comparison-voice.md` v0.1 —— 12 章 / ~750 行 / 10 个核心场景模板：§1 同行 4 类（C1 直接竞品 / C2 间接竞品 / C3 兄弟业务严格不互换 / C4 上下游伙伴）+ §2 **5 条公开声明铁律 R1-R5**（不点名 / 不暗示业内最强 / 不引用同行内部材料 / 不挑起监管纠纷 / 不在公开渠道做 vs 对比）+ §3 **内部 Battle Card 规范**（白名单 + 不打印外发 + 字段 11 项 + 严禁 6 项 + 季度法务审计）+ §4 客户问 4 步应答原则 + §5 媒体应答（协同 03c §M8）+ §6 RFP 投标响应 3 策略 + §7 学术合作论文（法务 + 临床顾问 + PI 三签）+ §8 同行撤稿 / 监管 / 收购 / 客户负评事件应对 + §9 跨境（NMPA / FTC / HKEX）+ §10 10 模板库 + §11 14 自检 + §12 决策权。
- **核心锁定**（详见 HANDOFF §24.2）：5 条公开声明铁律 R1-R5 / 内部 Battle Card 限定 / 字段 11 项 + 严禁 6 项 / 信息源继承 03f §2.3 / 客户应答 4 步 / 媒体 24h 内通知 / RFP 双签每次 / 学术三签 / 同行撤稿沉默 / 跨境 / 客户主动提供同行内部信息当场拒收 + 24h 法务报告 / 10 模板锁定。
- **修订** `03-brand-voice.md` §10 子文档清单 —— **新增** 03g 行（v0.1 草稿）；之前没有 03g 占位。
- **修订** `HANDOFF.md` §13.2 voice gap #9 状态升 v0.1 草稿 + 新增 §24（24.1–24.7：状态 / **Voice gap 100% 完成总览** / 锁定决策 / 协同 / 签字策略建议（03c+03g 双签 / 03d 单独三签）/ 待办 / 下一步候选 / **voice gap 全景里程碑统计**）。
- **同步**：本次未运行 `scripts/sync-docs.mjs`；docs/voice/ 待新增 competitive-and-comparison-voice.md 页 + sidebar 接入，与 v0.3 双签合并。
- **签字策略**：03g 与 03d 签字组合不一致（03g 双签 / 03d 三签）→ 推荐**方案 A**（03c + 03g 合签 v0.3 双签批次 + 03d 单独 v0.3 三签批次）。

**Voice gap 100% 完成里程碑总结**：

- 6 个 v0.2 已签：03a 社交 + 03e 区域化 + 03f 实证 + 04a a11y + 04b 动效 + 04c 摄影插画
- 4 个 v0.1 草稿待签：03c 邮件 + 03d 错误 + 03g 竞品（voice 层）+ 06a SemVer（治理层）
- 总文档体量 ~6,170 行（不含 governance / packet / 主文档）
- 累计签字门槛覆盖：双签 / 三签 / Sponsor 拍板各种场景

**2026-05-08 — ✅ Voice 层 v0.3 双签完成（03c + 03g 合签）+ Sponsor 落地操作完成**

- **签字留痕**：voice 层 v0.3 双签 batch 经 **C Yang（市场负责人）+ Bruce Chen（法务）** 于 **2026-05-08** 双签（`governance/v0.3-batch-review-packet.md` §11 签字栏）；Sponsor Yog 同日流程留痕。
- **升版完成**：03c / 03g 顶部 v0.1 → **v0.2**；CHANGELOG 移除"待双签"标注 + 加双签留痕段；03 §10 子文档清单 03c / 03g 状态升 v0.2 已签；03 主文档版本号 v0.2 → **v0.3**。
- **38 决议全部锁定**：X1-X2（03 §10 升版 2 条）+ E1-E18（邮件渠道 18 条）+ G1-G18（竞品对比 18 条）。
- **本批次完成**：voice gap #7 / #9 全部从"v0.1 草稿"升级为"v0.2 已签"——03c 邮件模板 + 03g 竞品对比。
- **修订** `HANDOFF.md`：§13.2 voice gap #7 / #9 状态升 v0.2 已签 / §24 全景里程碑统计更新 / 新增 §25（25.1–25.7：状态 / 双签留痕 / Sponsor 落地操作 / 38 决议总览 / **4 类通知文案草稿**（#brand-updates release note + 工程团队邮件 + 销售/BD/客户支持/PR 邮件 + 大区市场邮件）/ T+30/60 天后续工作启动 / 锁定决策）。
- **下一步即时**（Sponsor 待执行）：
  - docs/ 站同步：本地执行 `node scripts/sync-docs.mjs`
  - #brand-updates 发布 release note（HANDOFF §25.5 文案）
  - 工程 / 销售BD / 大区市场各 lead 邮件通知（HANDOFF §25.5 4 份文案）
- **下一步 30 天内**：销售/BD/客户支持/PR onboarding 培训 + DKIM/SPF/DMARC 配置 + 退订系统校验 + Battle Card 加密 SaaS 决议会议。
- **下一步 60 天内**：事务性邮件模板系统集成（与 react v0.2.0 一起）+ 双 opt-in 注册流程上线。
- **下一步推进**：03d 三签 packet 编制（涉工程实施需 TL 加签）+ 06a 双签 packet（已编制 · TL + Sponsor 双签）+ 强制层 brand-voice-guidelines v0.3 候选（~85 条红线）。
- **Voice gap 状态**：6 v0.2 已签（03a/03e/03f/04a/04b/04c）+ **2 v0.2 已签（03c/03g · 本批新增）** = 8/10；剩 03d（v0.3 三签待编制）+ 06a（v0.2 双签待发起）。

**2026-05-08 — ✅ Voice 层 v0.3 三签完成（03d 错误边界态）+ Sponsor 落地操作完成 · ✨ Voice gap 9/10 v0.2 已签**

- **签字留痕**：03d 三签批次经 **C Yang（市场负责人）+ ZL Chen（Tech Lead）+ Bruce Chen（法务）** 于 **2026-05-08** 三签（`governance/v0.3-tri-batch-review-packet.md` §12 签字栏；§5/§6/§7 共 49 处 ✓ ack 等同逐条签字；Sponsor Yog 同日流程留痕）。
- **升版完成**：03d 顶部 v0.1 → **v0.2**；CHANGELOG 移除"待三签"标注 + 加三签留痕段；03 §10 子文档清单 03d 状态升 v0.2 已签。
- **25 决议全部锁定**：D1-D4 错误三维分类（来源 × 严重度 × 临床敏感度）+ D5-D8 4 段式 + 错误码命名（5 空间 / 9 编号 / CN-EN 双轨）+ D9-D11 18 禁忌（10 通用 + 4 临床）+ D12 空态 6 子类 + D13-D16 临床场景特殊（PITL / 撤稿 / confidence / SourceID）+ D17-D18 a11y/动效协同（继承 04a/04b）+ D19-D22 求助 3 级 + 跨产品 + Enforcement + D23 30 模板锁定 + D24 错误码注册表 + D25 决策权矩阵。
- **本批次完成**：voice gap #8 从"v0.1 草稿"升级为"v0.2 已签"——03d 错误 / 边界 / 空态文案。
- **Voice 层 v0.3 完整闭环**：双签批次（03c + 03g · 2026-05-08）+ 三签批次（03d · 2026-05-08）+ 主文档 §10 子文档清单升 v0.3 = voice 层 7 个子文档全部 v0.2 已签。
- **修订** `HANDOFF.md`：§13.2 voice gap #8 状态升 v0.2 已签 / §9 开场建议状态更新（含 v0.3 三签完成）/ §24 全景里程碑统计更新 / 新增 §26（26.1–26.8：状态 / 双签留痕 / Sponsor 落地操作 / 25 决议总览 / **3 类通知文案草稿**（#brand-updates release note + 工程团队邮件 + 产品/客户支持/设计/法务邮件）/ T+30/60 天后续启动 / **voice 层 v0.3 完整闭环里程碑** / 锁定决策）。
- **下一步即时**（Sponsor 待执行）：
  - docs/ 站同步：本地执行 `node scripts/sync-docs.mjs`
  - #brand-updates 发布 release note（HANDOFF §26.5 文案）
  - 工程 / 产品 PM / 客户支持 / 设计 / 法务各 lead 邮件通知（HANDOFF §26.5 3 份文案）
- **下一步 30 天内**：onboarding 培训追加 1 周 + lint 落地 + 错误码注册表创建 + 错误监控接入 + 实证库工具决议会议（与 04c 临时素材库基础设施复用）。
- **下一步 60 天内**：react v0.2.0 错误反馈 patch（与 a11y + motion patch 一起）+ 错误码迁移（如适用）+ 双 opt-in 注册流程上线 + 事务性邮件模板系统集成。
- **下一步推进**：06a 双签 packet（已编制 · TL + Sponsor 双签）→ 发起后 voice gap 10/10 全闭环 + 强制层 brand-voice-guidelines v0.3 候选（~95 条红线）。
- **Voice gap 状态**：**9/10 v0.2 已签**（仅剩 #10 06a NPM SemVer 双签待发起）；voice 层 v0.3 完整闭环。

**2026-05-08 — ✅ 06a NPM SemVer v0.2 双签完成 + Sponsor 落地操作完成 · ✨ Voice gap 10/10 完整闭环**

- **签字留痕**：06a 双签批次经 **ZL Chen（Tech Lead）+ Yog（Sponsor）** 于 **2026-05-08** 双签（`governance/06a-signoff-packet.md` §11 签字栏）。
- **特殊点**：与 voice 层 v0.2 / v0.3 + 04 批次 + v0.3 三签所有批次不同，**06a 双签 Sponsor 是实质签字人**（涉对外发布契约 / 客户依赖 / MSH org 迁移决策），不是流程留痕。
- **升版完成**：06a 顶部 v0.1 → **v0.2**；CHANGELOG 移除"待双签"标注 + 加双签留痕段；06 §5.5 子文档清单 06a 状态升 v0.2 已签；06 §7 修订履历追加 06a v0.2 双签条目。
- **16 决议全部锁定**：N1-N5 双轨版本号 + 升级条件 + 签字门槛 + N6 27 项 Breaking Change A1-A27 + N7 双向触发矩阵 + N8-N9 Deprecation + Prerelease + N10-N11 半自动发布 + 14 校验 + N12 永不 unpublish 红线（Sponsor 实质签字）+ N13 客户支持窗口（Sponsor 实质签字）+ N14 依赖治理 + SBOM + N15 多包预留（已接近触发线）+ N16 MSH 迁移即 MAJOR（Sponsor 实质签字）。
- **本批次完成**：voice gap #10 从"v0.1 草稿"升级为"v0.2 已签"——06a NPM 包版本策略。
- **🎉 Voice gap 全部 10/10 v0.2 已签完整闭环**：03a 社交 + 03c 邮件 + 03d 错误 + 03e 区域化 + 03f 实证 + 03g 竞品 + 04a a11y + 04b 动效 + 04c 摄影插画 + 06a NPM SemVer。
- **react v0.1.0 真有规则约束**：客户接入须精确锁版（v0.x.x 不允许 ^0.1.0）+ v0.x.x 阶段任何变更走 MINOR + v1.0.0 升级须满足 6 项条件 + MSH 迁移即 MAJOR。
- **修订** `HANDOFF.md`：§13.2 voice gap #10 状态升 v0.2 已签 / §9 开场建议状态更新（含 06a 双签 + voice gap 10/10）/ §24 全景里程碑统计更新 / 新增 §27（27.1–27.8：状态 / 双签留痕 + Sponsor 实质签字差异 / Sponsor 落地操作 / 16 决议总览 / **2 类通知文案草稿**（#brand-updates release note + 工程团队邮件）/ T+30/60 天后续启动 / **完整签字闭环里程碑（11 子文档全 v0.2 已签）** / 锁定决策）。
- **修订** `06-governance.md` §5.5 子文档清单 + §7 修订履历追加 06a v0.2 双签条目。
- **下一步即时**（Sponsor 待执行）：
  - docs/ 站同步：本地执行 `node scripts/sync-docs.mjs`
  - #brand-updates 发布 release note（HANDOFF §27.5 文案）
  - 工程团队 lead 邮件通知（HANDOFF §27.5 文案）
- **下一步 30 天内**：scripts/verify-exports.mjs 接入 CI + GitHub Actions release.yml dry-run + a11y CI + v0.3.1 patch（dist-tag 操作手册 + 精确锁版指南卡 + Migration Guide 模板）+ 强制层 brand-voice-guidelines v0.3 候选（~95 条红线含 03c/03d/03g/06a）。
- **下一步 60 天内**：react 包 v0.2.0 发布（含 a11y + motion patch + 错误反馈 patch + 5 新组件 Spinner/Skeleton/Toast/ProgressBar/ErrorAlert）+ 错误码迁移（如适用）+ 双 opt-in 注册流程上线 + 事务性邮件模板系统集成 + DKIM/SPF/DMARC 配置 + 退订系统校验。
- **MSH org 创建后**：启动 06a §12 30 天迁移规程（T+0 deprecate 旧包 → T+1 发 @medsci v1.0.0 → T+30 客户必迁完 → T+90 旧包 archive）。
- **完整签字闭环里程碑**：voice 层 7 子文档（03 主文档 + 03a/c/d/e/f/g）+ 04 视觉系统 3 子文档（04a/b/c）+ 06 治理 1 子文档（06a）= **11 子文档全 v0.2 已签**；voice gap 10/10 完整闭环；react v0.1.0 真有规则约束；强制层 v0.3 候选准备 ~95 条红线。

**2026-05-08 — ✅ 强制层 brand-voice-guidelines v0.3 候选编制完成 · ~136 条决议浓缩**

- `governance/brand-voice-guidelines.md` 从 v0.2（59 条核心红线 / 16 章 / ~580 行）扩充至 **v0.3 候选**（~136 条决议浓缩 / 19 章 / ~1,150 行）。
- **新增 4 章节**：§15 邮件渠道（18 决议 E1-E18 · 03c）+ §16 错误 / 边界 / 空态（25 决议 D1-D25 · 03d）+ §17 竞品 / 同行表述（18 决议 G1-G18 · 03g）+ §18 NPM 包发布（16 决议 N1-N16 · 06a）= 共 77 条新决议。
- **§13 自检清单扩充**：新增 §13.1-§13.4 4 个子节，覆盖 §15-§18 关键红线（约 25 条新自检项）；合计 §13 ~45 条自检红线。
- **§14 反例对照表扩充**：新增 14 条反例 → 正例对照（邮件 4 / 错误 3 / 竞品 4 / NPM 3）。
- **§19 版本与来源映射扩充**：新增 4 行覆盖 §15-§18 全部 v0.2 已签。
- **顶部更新**：版本 v0.2 → v0.3 候选；来源含 03c / 03d / 03g / 06a 4 个新已签子文档；§0.3 优先级层级加入 06a。
- **修订** `HANDOFF.md`：新增 §28（28.1–28.8：状态 / 产物 / §13 扩充 / §14 扩充 / §19 扩充 / v0.3 候选状态 / 用户即时动作（推荐选项 A 升 v0.3 完整）/ 锁定决策）。
- **用户本地启用步骤**（让 brand-voice-enforcement 技能自动加载新红线）：重新 symlink 或 copy `governance/brand-voice-guidelines.md` 到 `.claude/brand-voice-guidelines.md`；测试技能在内容生产时是否自动应用 §15-§18 新红线。
- **下一步推荐**：(1) Sponsor 决策升 v0.3 完整（推荐选项 A：视为"导出件"立即标 v0.3）+ (2) 进入工程实施阶段（T+30 天 lint + CI + 错误监控 + 培训；T+60 天 react v0.2.0）+ (3) v0.3.1 patch 候选（速查卡 / Migration Guide / 真人医生判定指南 / Battle Card 模板初稿）。
