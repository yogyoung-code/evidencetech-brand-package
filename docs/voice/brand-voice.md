# 梅斯健康 AI Brand Kit · Brand Voice v0.2

**承接**：`00-architecture-locked.md` §7（Brand Voice 待 Task #4）+ `02-brand-architecture.md` §5（命名系统）+ 母品牌 v1.1 §9（Motion & Voice）。
**作用**：AI 子品牌的语言层规范——定位、原则、命名、双受众 messaging、禁用词、写作微规则。所有对外文案（UI、市场、PR、文档）进入审稿前需对照本文件 §8 自检清单逐条核对。

---

## 1. 总则

### 1.1 主语言策略

**AI 子品牌主语言为中文，英文为伴随**——经 Sponsor 拍板（2026-05-05），列入 `00-architecture-locked.md` §2 偏离条款（与母品牌 v1.1 §3.4 "English default" 相反）。

| 场景 | 默认语言 |
|---|---|
| 产品 UI（DE / SE / DI / RCP 内部界面） | CN |
| 营销网站、产品着陆页、社交媒体 | CN |
| 产品 about、帮助文档、教程 | CN |
| **用户可见的错误/异常/空态文案**（即使源自 API 或系统层） | **CN**（与所属产品 UI 一致） |
| 投资者材料、出海路演、英文版国际化 | EN |
| 技术 API 文档、开发者门户 | EN |
| **错误码常量、API 字段名、HTTP 状态字符、开发者日志标识** | **EN**（代码层标识符，不属于 voice 范畴） |
| Endorsement signature 与产品名 wordmark | 按物料语言一致（不混用） |

> **错误与系统文案规则**（2026-05-07 决议）：用户在产品中实际看到的任何文字——包括弹窗、Toast、表单校验、超时提示、空态页、AI 置信度不足触发 PITL 的提示——一律遵循 CN 主语言策略，**不因来源是 API 或后端而例外**。代码层的常量名、错误码（如 `INVALID_TOKEN`）、API 字段（如 `error_code`）保持英文，因为它们是开发者可读的标识符而非用户可读的语音。判断标准：**该字符串是否会被翻译给用户？是 → CN；否（仅供开发者/运维）→ EN**。

### 1.2 与母品牌 voice 的关系

继承母品牌 v1.1 §9 全部约束（personality、4 promises、对比度规则、禁用词清单），在此之上扩展：

- 增加 AI/医学专属表达
- 增加双受众（医生 / 药企）messaging matrix
- 增加纳米级引用、CoT、Diff View、PITL 等交互对应的文字规范

### 1.3 品牌人格（继承自母品牌 v1.1 §1.2）

- **Rigorous 严谨**：医学级证据与合规
- **Clinical 临床**：医生视角、临床语境
- **Cross-Border 跨境**：中美双向、非单一文化本位
- **AI-Forward AI 前瞻**：但不过度 tech-hype
- **Human-in-the-Loop 人机协同**：AI 提速，医生把关

### 1.4 品牌承诺（继承自母品牌 v1.1 §1.3）

数据带源 · 边界诚实 · 医生在环 · 速度可靠

---

## 2. 品牌定位语句

### 2.1 AI 子品牌伞下定位（短句）

**CN（默认）**：
> **梅斯 AI · 验证型生成式智能。**
> 让每一句结论可验证，每一证据可溯源。

**EN**：
> **MedSci AI · Verified Generative Intelligence.**
> Every conclusion is verifiable; every evidence is traceable.

> **关于"梅斯 AI" / "MedSci AI" 的使用**（2026-05-07 决议）：作为 AI 子品牌伞标固定简称，例外获准用于对外物料。详细规则见 `02-brand-architecture.md` §5.4——核心约束：仅当作为伞标整体出现时使用，不得拆解为"梅斯" + "AI"；母品牌正式署名仍用"梅斯健康"。

### 2.2 长版定位（一段话）

**CN**：
> 梅斯 AI 是 [梅斯健康（2415.HK）] 的 AI 产品矩阵，由 4 个产品组成：DeepEvidence（临床决策与效能助手）、SeekEvidence（临床科研操作系统）、DeepInsight（循证商业智能套件）、RCP（敏捷验证实验室）。所有产品共享一个核心机制——医师在回路（PITL）：当 AI 置信度不足时触发分布式医生网络的验证任务。我们不与医生争夺判断权，我们让 AI 与医生协同放大判断的可信度。

**EN**：
> MedSci AI is the AI product portfolio of MedSci Healthcare (2415.HK), comprising four products: DeepEvidence (clinical decision support), SeekEvidence (research operating system), DeepInsight (evidence-based commercial intelligence), and RCP (agile validation lab). All four share a single core mechanism — Physician-in-the-Loop (PITL): when AI confidence is low, the system routes verification tasks to a distributed network of physicians. We do not displace physician judgment; we amplify its reliability through AI-assisted verification.

### 2.3 各产品一句话定位

| 产品 | CN | EN |
|---|---|---|
| DeepEvidence | 医生桌面与移动端的循证决策助手——每一句答复都可验证 | Evidence-based clinical decision support — every answer is verifiable |
| SeekEvidence | 临床科研操作系统——从选题到发表，AI 加速、专家把关 | Clinical research OS — AI-accelerated, physician-verified |
| DeepInsight | 药企的循证商业智能套件——意图份额管理与 KOL 雷达 | Evidence-based commercial intelligence for pharma — intent share & KOL radar |
| RCP | 敏捷验证实验室——按需触达医生，加速高价值医学任务 | Agile validation lab — on-demand physician access, accelerated medical tasks |

### 2.4 VGI ingredient 表述

VGI（Verified Generative Intelligence）是跨产品共用的 ingredient 标签，不是某个产品的子功能。出现规则：

- **第一次出现**：用全称 + ™。CN：`验证型生成式智能（Verified Generative Intelligence™ · VGI）`；EN：`Verified Generative Intelligence™（VGI）`
- **后续提及**：可用 `VGI` 缩写（永远三字母大写）
- **不允许**：把 VGI 作为某产品的功能命名（❌ "DeepEvidence 的 VGI 模块"）；正确表述："Powered by VGI" / "基于 VGI 引擎" / "经 VGI 验证"

---

## 3. Voice Principles · 4 条原则

每条带反例（Bad）与正例（Good）。审稿时核对每条原则。

### 3.1 严谨而非冷漠（Rigorous, not cold）

**原则**：医学术语用学术写法；数字带年份和来源；推论标注置信度。**但**用第二人称对话，让医生感到"在被尊重的同行交流"，而非"被 AI 训诫"。

| Bad | Good |
|---|---|
| 该患者必须立即停用阿司匹林。 | 在合并 PPI 使用且 INR > 3.0 的患者中，停用阿司匹林可降低出血风险 [1]。建议结合您的临床判断决定是否调整。 |
| 我们的 AI 是医学领域最准确的。 | 在 X 类问题（n=1,234，2025）上，回答准确率经 PITL 网络复核为 91.3% [2]。 |
| AI 帮你搞定一切！ | 你做判断，AI 给你证据。 |

### 3.2 透明而非啰嗦（Transparent, not verbose）

**原则**：不藏算法过程，但也不让用户淹没在元信息里。每个 AI 输出附"如何得到这个结论"的可点击溯源（纳米级引用 [n]），但不在第一屏强行展开。**渐进式披露**：L1 结论 → L2 证据摘要 → L3 溯源细节。

| Bad | Good |
|---|---|
| 我们使用 GraphRAG + 双重 LLM verifier + 17 步 Chain-of-Thought 给您这个答案... | 在 50 篇文献中找到 3 篇直接相关 [1][2][3]。点击查看推理链。 |
| 此条结论无错误。 | 此条结论由 AI 生成，未经专家复核。点击 "Verify It" 触发 PITL 复核。 |
| AI 给您答复时考虑了所有因素。 | AI 基于 [文献来源] 给出此条；未涵盖患者既往史与药物过敏，请补充。 |

### 3.3 医生在环而非医生靠边（Physician-in, not bypassed）

**原则**：每一处 AI 输出都明确告知"医生角色在哪一环"。AI 不替代医生的诊断、处方、签字权。文案中永远把医生作为最终决策者，AI 作为助手。

| Bad | Good |
|---|---|
| AI 已为您完成诊断。 | AI 已生成初步分析，请确认或修订。 |
| 自动开具处方。 | 处方建议（待签发）。 |
| AI 替您回复了患者咨询。 | AI 已起草回复，等待您审核后发送。 |
| 智能体自主决策。 | AI 提供候选方案，由你拍板。 |

### 3.4 不夸大而非不自信（Restrained, not timid）

**原则**：可证据化的承诺要敢说；不可证据化的形容词要克制。"经 X 验证"可以用，"行业领先"不可以用。"敏捷完成医学任务"作为价值表达可以用（无量化承诺），"瞬间洞察"不可以用。

**关于"24h"措辞的特别规则**（2026-05-07 更新）：随着 RCP 核心价值不再以"24 小时"为头牌（详见 §5.2），具体的"24 小时"字眼降级为战术性 CTA / 主张。任何对外材料具体使用"24h"或"24 小时"措辞时，必须附 `(n=X, 来源: [研究])` 注释；若数据未齐备，改写为"敏捷"、"快速"或"目标: 24h"。

| Bad | Good |
|---|---|
| 颠覆性的 AI 医疗革命 | AI 辅助的循证临床决策支持 |
| 行业领先的 KOL 发现 | 基于 PI Portrait 360 算法识别 Rising Star 候选人 |
| 完美准确的循证答复 | 经 PITL 专家网络复核的循证答复 |
| 一秒搞定病历 | 平均 X 秒生成结构化病历草稿（待签发） |

---

## 4. 命名系统

### 4.1 产品命名

承接 `02-brand-architecture.md` §1.2 与 §5：

| 产品 | 完整中文 | Wordmark 显示 | 内部代号 | 简称 |
|---|---|---|---|---|
| DeepEvidence | （不翻译） | DeepEvidence | Hippocrates（仅内部） | DE（仅内部 Slack/Jira/Commit） |
| SeekEvidence | （不翻译） | SeekEvidence | — | SE |
| DeepInsight | （不翻译） | DeepInsight | — | DI |
| Rapid Clinical Pulse | （不翻译） | RCP | — | RCP（即 wordmark） |

**铁律**：

- 对外正文一律使用产品名英文形式。中文上下文中产品名不翻译，保持英文 wordmark 形式。
- ❌ "深度证据" / "搜寻证据" / "深度洞察"（不翻译）
- ❌ "deepevidence" / "DEEPEVIDENCE"（大小写错误）
- ✅ "DeepEvidence 的诊断辅助功能"
- ✅ "RCP 的 24 小时反馈机制"
- ✅ "Rapid Clinical Pulse (RCP)"（首次提及全称）
- 内部代号 Hippocrates **不出现**在任何对外材料

### 4.2 模块/feature 命名

战略 PDF 中提到的功能模块的官方命名：

| 功能 | CN（首选） | EN |
|---|---|---|
| 智能决策 | 智能决策 | Clinical Decision Support · CDS |
| 环境速录 | 环境速录 | Ambient Scribe |
| DRG 智能导航 | DRG 智能导航 | DRG Smart Navigator |
| 选题挖掘机 | 选题挖掘机 | Topic Miner |
| PICO 构造器 | PICO 构造器 | PICO Constructor |
| 验证闭环 | 专家核验 | Verify It（ |
| 医生洞察雷达 | 医生洞察雷达 | Physician Insight Radar |
| KOL 画像 | 医生画像360 | PI Portrait 360 |
| 标准化药品说明书治理 | 说明书电子化 | DeepLabeling |
| 话术 A/B 测试 | 话术 A/B 测试 | Message A/B Testing |
| AI 模拟预演 | AI 模拟预演 | AI Agent Pre-test |

### 4.3 信任徽章命名

承接 `02` §5.2 与 `00` §5.2：

| 徽章 | CN | EN |
|---|---|---|
| 经专家核验 | PITL Verified | PITL Verified |
| 厂家官方核准 | AIO Official | AIO Official |
| 纳米级引用 | 纳米级引用 [n] | Nano-Citation [n] |
| 验证型生成式智能 | 验证型生成式智能™ · VGI | Verified Generative Intelligence™ · VGI |

**缩写在文中的出现规则**：第一次出现拼写全称 + 缩写，后续可单用缩写。

| 缩写 | 全称 | 首次出现示例 |
|---|---|---|
| **PITL** | Physician-in-the-Loop（医师在回路） | "梅斯 AI 的医师在回路（Physician-in-the-Loop · PITL）机制..." |
| **AIO** | AI Optimization（AI 检索优化） | "厂家官方核准（AIO · AI Optimization）徽章..." 或 CN 优先："AI 检索优化（AIO）徽章..." |
| **VGI** | Verified Generative Intelligence（验证型生成式智能） | "验证型生成式智能（Verified Generative Intelligence™ · VGI）..." |
| **CDS** | Clinical Decision Support（临床决策支持） | "智能决策（CDS · Clinical Decision Support）..." |
| **IIT** | Investigator-Initiated Trial（研究者发起的临床研究） | "捕捉潜在 IIT（Investigator-Initiated Trial）线索..." |
| **SPL** | Structured Product Labeling（结构化药品说明书） | "结构化数据（SPL · Structured Product Labeling）..." |
| **DRG** | Diagnosis-Related Group（疾病诊断相关分组） | 行业通用，可不展开 |
| **KOL** | Key Opinion Leader（关键意见领袖） | 行业通用，可不展开 |
| **PICO** | Population, Intervention, Comparison, Outcome | 行业通用，可不展开 |

### 4.4 大小写规则

- **产品 wordmark**：mixed-case（DE/SE/DI）或 ALL CAPS（RCP），按 `02` §1.1
- **行内提及**：保持 wordmark 形式（DeepEvidence、RCP）
- **缩写**：DE/SE/DI 三字母大写仅限内部沟通；对外用全 wordmark
- **PITL / VGI / SCI / PICO / KOL / SPL**：四/三字母全大写

---

## 5. Messaging Matrix · 双受众

### 5.1 医生受众（DE / SE 用户）

| 维度 | DeepEvidence | SeekEvidence |
|---|---|---|
| **用户痛点** | 临床决策不确定性、信息过载、DRG 编码漏洞导致医院低编损失 | 科研发表压力、选题盲区、SCI 写作门槛、IIT 机会捕捉滞后 |
| **核心 value prop** | 让你在 30 秒内找到带源的循证答案；让 AI 与专家的认知差异透明可见（Diff View） | 把"晋升焦虑"变成"系统支持"——AI 帮你找选题、构建检索式、起草综述；专家网络帮你审稿 |
| **可证据化支撑** | 纳米级引用 + Verify It 复核 + DRG 实时编码导航 | 选题挖掘机文献热度算法 + PICO 构造器 + IIT 线索匹配 |
| **关键禁忌** | 替代医生处方权、自动诊断、绕过审核 | 替代医生的研究主导权、AI 代写学术声明 |
| **CTA 范例（CN）** | "查证一下" / "Verify It" / "看 Diff" | "看看选题" / "构造检索式" / "草拟一稿" |

### 5.2 药企与产业方受众（DI / RCP 用户）

> **RCP 受众范围**（2026-05-07 更新）：药企市场 / 医学 / KA、咨询 / 调研公司、AI 公司——即所有需要敏捷向医生网络发起高价值医学任务的产业方。DI 仍以药企商务 / 医学事务为主。

| 维度 | DeepInsight | RCP |
|---|---|---|
| **用户痛点** | 学术拜访效率低、KOL 已被对手锁定、AI 检索时代品牌信息保真度低 | 寻找目标医生困难、任务成本高、医生反馈周期长 |
| **核心 value prop** | 把 C 端"数字废气"转化为药企的意图份额情报；用 DeepLabeling 让品牌在 AI 检索中 100% 语义保真 | 让医生敏捷快速完成高价值医学任务；AI 医生 Agent 预演降低真人验证成本与周期 |
| **可证据化支撑** | Rising Star 算法 + AIO Official 徽章 + 实时医生搜索行为雷达 | A/B 测试统计显著性 + AI 模拟预演留痕 + PITL 推送精准定位 |
| **关键禁忌** | 直接采购医生意见、绕开合规审查、把"行为数据"当作处方推荐依据 | 把 A/B 测试结果当作处方推荐、夸大医生群体的代表性、绕过 GVP / GMP 合规 |
| **CTA 范例（CN）** | "雷达 + 我的产品" / "查看 Rising Star" / "提交 SPL 治理" | "发起任务" / "Run a pulse" / "看任务反馈" |

---

## 6. 禁用词与首选表述

### 6.1 沿用母品牌 v1.1 §9.4 禁词（不得在任何对外物料出现）

**英文**：`zero-hallucination`、`hallucination-free`、`100% accurate`、`perfect accuracy`、`flawless`、`industry-leading`、`best-in-class`、`world's #1`、`revolutionary`、`cutting-edge AI`、`trusted by thousands`、任何无年份无来源的数据、挪用集团 / 兄弟公司案例冒充 MedSci Healthcare 直接交付案例

### 6.2 中文等价禁词（v0.1 新增）

零幻觉、无幻觉、零错误、100% 准确、完美准确、绝对准确、行业领先、业内第一、行业最佳、革命性、颠覆性、前沿 AI、最先进 AI、被数千医生信任、广受好评

### 6.3 AI / 医学专属禁词（v0.1 新增）

| 禁词 | 原因 |
|---|---|
| AI 自动诊断 / 自动处方 | 违反"医生在环"原则，存在合规与责任风险 |
| AI 替代医生 / AI 取代专家 | 与 PITL 战略定位相反 |
| 黑盒 / 黑箱 | 自我承认透明度不足；用"算法过程"或"推理链"替代 |
| 一键搞定 / 一秒出结果 | 暗示绕过医学严谨性 |
| 深度学习 / 神经网络（在用户面向场景） | 太技术，非用户语言；用"AI 辅助"或"算法"替代 |
| 大模型 / LLM（在患者面向材料） | 用户不需要知道实现细节 |
| 终结幻觉 / 杜绝错误 | 既是禁词等价，也违反医学严谨性 |
| 模糊数字（如"千万医生""数百万病例"无年份无定义） | 必须带 (n=X, YYYY) 与定义 |

### 6.4 首选表述对照表

| 避免 | 推荐 |
|---|---|
| AI 出诊 | AI 辅助诊断（待医生确认） |
| 自动生成处方 | 处方建议（待签发） |
| 智能识别 | 算法识别 |
| 一秒出答案 | 平均 X 秒返回带源答复 |
| AI 比医生更准 | AI 与医生协同提升判断可靠性 |
| 终结幻觉 | 每一句结论可验证 |
| 100% 准确 | 经 PITL 专家网络复核（n=X，2025） |
| 颠覆传统 | 重塑工作流 / 系统化 |
| 行业领先 | 经验证 / 已部署 / 已落地 |
| 革命性创新 | 结构性改变 / 流程级优化 |
| 数百万医生 | 梅斯医生网络（n=3.3M，2025） |

---

## 7. 微观写作规则

### 7.1 数字格式

- 千位分隔符使用半角逗号：`3,300,000`（CN/EN 同）
- 中文紧凑场景可用"万"：`330 万医生`，但正式数据 claim 必须 `3,300,000 (n, YYYY)`
- 小数点用半角点：`91.3%`
- 百分号紧贴数字：`91.3%`，**不写** `91.3 %`
- 数据 claim 必带年份与来源：`91.3% (n=1,234, 2025)¹`

### 7.2 引用规范（与纳米级引用 [n] 视觉对应）

- 文中引用：句末上标方括号 `[1]` 或 `[1, 2]`
- **不使用** `(1)`、`*1*` 等其他格式
- 完整引用列表附在底部
- 引用 hover 触发原文 tooltip，与 `02` §1.7.1 视觉规范联动

### 7.3 段落与篇幅

- UI 文案：单段 ≤ 2 句话；说明性段落 ≤ 4 行
- 营销长文：单段 ≤ 5 行；段间留 1 行空白
- 不使用项目符号嵌套超过 2 层
- **不在 UI 中使用感叹号**

### 7.4 第二人称

- 默认使用 **"你"**（CN）或 **"You"**（EN）
- 不用"您"——避免过度恭敬产生距离感
- 不用"我们"自我表扬，用"你"对话用户
- **例外**：合规声明、TOS、Privacy 类法务文档可用"您"

### 7.5 时态与语态

- CN 倾向主动语态：✅ "AI 已起草草稿" / ❌ "草稿已被起草"
- EN 倾向主动语态 + 现在时
- 描述功能用现在时（"DeepEvidence 提供..."）；描述未来路线用未来时

### 7.6 单位与术语

- 临床术语用学术写法：`MCC/CC`、`SCI`、`PICO`、`SLR`、`IIT`、`KOL`、`SPL`、`GVP`、`GMP`
- 缩写在首次出现时拼写：`Investigator-Initiated Trial (IIT)`，后续可用缩写
- **中英混排时，英文术语前后保留半角空格**：`让 AI 与医生协同`，**不写** `让AI与医生协同`

### 7.7 emoji 与符号

- **UI 与正式材料禁用 emoji**（继承母品牌 v1.1）
- 例外：内部 Slack / Jira / 非正式邮件可用
- ✓ ◐ 🔒 ⚑ 仅作为信任徽章组件内的固定 glyph 出现，**不作为装饰符号**散用
- 不使用 ❤️ 💪 🎉 等情感符号

---

## 8. 审稿自检清单

发布前对照下列 10 条逐项核对：

- [ ] **§6 禁词全扫**：是否有任一禁词（中英文对照）？
- [ ] **数据 claim 带源**：每个数字是否带年份与来源？
- [ ] **医生角色显式化**：AI 输出是否标注医生角色与责任边界？
- [ ] **不替代医生**：是否使用了 §3.3 反例式表达（"AI 完成诊断"等）？
- [ ] **产品名拼写**：DeepEvidence / SeekEvidence / DeepInsight / RCP 是否符合 §4.1（驼峰、缩写大小写、不翻译）？
- [ ] **模块名规范**：CDS、Ambient Scribe、PICO、PI Portrait 360 等是否符合 §4.2 命名表？
- [ ] **CN/EN 主语言一致**：同一物料是否混用了两种语言？
- [ ] **技术细节遮罩**：是否在 patient-facing 或医生面向材料中暴露了"大模型 / 神经网络 / LLM"等术语？
- [ ] **字号与对比度**：endorsement signature 是否使用 `#666666`？产品色是否符合 `02-brand-architecture.md` 锁定值？
- [ ] **VGI 出现规则**：第一次是否拼写全称 + ™？是否避免了"产品的 VGI 模块"误用？

---

## 9. 治理与升版

- 本文档版本号 v0.1（Locked 2026-05-05）
- 任何 voice 层条款变更需市场负责人 + 法务双签（涉及禁词扩展由法务发起）
- 每季度对照母品牌 v1.1 sync：母品牌升版时本文档同步评估
- 大版本（v0.x → v1.0）需 Sponsor 拍板
- 进入 Task #5 / #6 / #7 时，所有视觉与组件文案均需通过 §8 自检清单

---

## 10. 渠道层子文档

主语音文档（本文）只管"是否能说"。下列子文档管"在哪个渠道、怎么说、什么节奏说"：

| 文档 | 范围 | 状态 |
|---|---|---|
| `03a-social-media-voice.md` | 社交渠道：微信公众号 / LinkedIn (CN+EN) / 微博 / 知乎 / 抖音 / 小红书 / 视频号 | **v0.2** (2026-05-06 双签) |
| `03b-overseas-voice.md` | 海外推广：港/澳/台 / 日本 / 新加坡 / 海外华人 / 全球英语市场（独立立项时启用）| 未启动 |
| `03c-email-templates-voice.md` | 邮件模板与渠道：事务性 / 营销 / 客户支持 / 内部 / PR / 紧急-撤稿响应 6 类 + 10 模板库 + 退订合规（PIPL §17 / CAN-SPAM / CASL / GDPR）| **v0.2** (2026-05-08 双签 · C Yang + Bruce Chen) |
| `03d-error-and-empty-state-voice.md` | 错误 / 边界 / 空态文案：三维分类（来源 × 严重度 × **临床敏感度**）+ 4 段式 + 错误码命名 + 18 禁忌 + 空态 6 子类 + PITL/撤稿/SourceID 临床特殊 + a11y/动效协同 + 求助 3 级 + 30 模板库 | **v0.2** (2026-05-08 三签 · C Yang + ZL Chen + Bruce Chen) |
| `03e-china-regionalization.md` | 中国大陆地理分层：T1–T4（A/B）医院 / 医生 + MNC / 国内大型 Pharma / Biotech-Mid-CRO-AI 公司 | **v0.2** (2026-05-06 双签) |
| `03f-evidence-attestation.md` | 声明实证流程：实证强度 L1–L4 + SourceID 工作流 + 撤稿响应规程（完整版）+ 数据 claim 链条 + 实证审批矩阵 | **v0.2** (2026-05-06 双签) |
| `03g-competitive-and-comparison-voice.md` | 竞品对比 / 同行表述：4 类同行（直接 / 间接 / 兄弟业务严格不互换 / 上下游伙伴）+ 5 条公开声明铁律（不点名 / 不暗示 / 不引用同行内部 / 不挑监管 / 公开不 vs）+ 内部 Battle Card 规范 + 客户/媒体/RFP/学术/同行撤稿 5 类应答框架 + 10 模板库 | **v0.2** (2026-05-08 双签 · C Yang + Bruce Chen) |

子文档与本文档的关系：本文档 §3 四条原则、§4 命名、§6 禁词、§7 写作微规则在所有子文档中**无差别继承**。子文档仅在"渠道特性"上做附加约束；任何冲突以本文档为准。

---

## CHANGELOG

### v0.2 — 2026-05-06（**双签完成**）

**签字留痕**：voice 层 v0.2 经 **C Yang（市场负责人）+ B Chen（法务）** 于 **2026-05-06** 双签（`governance/v0.2-second-round-signoff.md` §6）。Sponsor 落地于 2026-05-07。

依据：`governance/v0.2-batch-review-feedback-marketing.md` + `governance/v0.2-batch-review-feedback-legal.md` + `governance/v0.2-batch-review-resolution.md` + `governance/v0.2-sponsor-decisions.md` + `governance/v0.2-second-round-signoff.md`。

- §10 子文档清单 —— 03a / 03e / 03f 状态从 v0.1 改为 **v0.2 候选**；03e 范围描述从 T1–T5 改为 T1–T4（A/B）反映分层合并
- 03a / 03e / 03f 各自完成 v0.2 候选修订（详见各自 CHANGELOG · v0.2 候选段）
- 等市场负责人 + 法务对**仅修订 diff** 做第二轮签 → 双签留痕段 → 顶部版本号 v0.1 → v0.2 → 移除"v0.2 候选"标注 → sync-docs.mjs 重跑 → packet §9 落地操作启动

**v0.2 第二轮签批次包含**：
- R1 小红书产品教育白名单扩展（双方兼容）
- R2 大区独发 + 事后 review（Sponsor 折中裁决）
- R3 SourceID 完整保留 + 工具化承诺（Sponsor 折中裁决）
- R4 UI claim 法务统一审（Sponsor 接受法务立场）
- R5 03f §5.2 删除（双方兼容）
- L1 真人医生政策"代言 vs 使用介绍"二分（法务新提）
- L2 撤回时间窗收紧（法务新提）
- L3 媒体偏差兜底 24h → 3 工作日（法务新提）
- L4 招股材料按 HKEX（法务新提）
- D11 医院 5 层 → 4 层（市场提议合并 + Sponsor 接受）
- Q1–Q5 法务"无需"5 处 Sponsor 默认方向接受
- Q3 客户 case 时效改为"按合同期限或年度孰短"
- Q4 学术合作 PI 书面确认 + 合同模板化
- Q6 §6.1 RACI 重写为"大区独发 + 事后 review"

### 2026-05-07 — 渠道子文档体系建立（待双签确认）

- 新增 §10「渠道层子文档」段，将本文档与子文档的层级关系正式入文
- 新增子文档 `03a-social-media-voice.md` v0.1（覆盖 8 个社交平台 + 危机手册 + 14 条社交版自检清单），交叉引用矩阵见 03a §10
- 新增子文档 `03e-china-regionalization.md` v0.1（中国大陆地理分层：医院 / 医生 5 层 + 药企 / 产业方 3 层；术语密度 / 引用类型 / CTA / 数据 claim / 时间表达 5 维分层；DRG/DIP / 医保 / 互联网医院 / 数据出境 4 类政策语境；12 条本地化自检清单）
- 边界决议：港 / 澳 / 台 / 日本 / 新加坡 / 海外华人**移出**本文档归 03b（理由：监管框架与医疗体系独立，与 Mainland 受众分层主轴不兼容）；03b 子文档清单同步扩展
- 新增子文档 `03f-evidence-attestation.md` v0.1（实证强度 L1–L4 / SourceID 工作流 / 撤稿响应完整版 / 数据 claim 链条 6 场景 / 实证审批权矩阵 10 类 / 14 条自检）；与 03a §5.1 撤稿响应、03 §7 引用格式建立"流程层 vs 格式层"边界
- `03c-email-voice.md` / `03d-error-and-empty-state.md` 占位，按发现报告 Coverage Gaps 排期推进

### 2026-05-07 — 修订（待双签确认）

- §1.1：新增"用户可见的错误/异常/空态文案"行（CN）与"错误码常量、API 字段、开发者日志标识"行（EN）；新增决议 box，明确判断标准——"是否会被翻译给用户？是 → CN；否 → EN"（决议解决发现报告高优先级待决问题 #4）
- §2.1：新增"梅斯 AI / MedSci AI"使用说明 box，引用 `02-brand-architecture.md` §5.4 的伞标简称例外规则（决议解决发现报告高优先级待决问题 #5）
- §2.3 各产品一句话定位：RCP 由"敏捷验证实验室——24 小时内拿到医生反馈"改为"敏捷验证实验室——按需触达医生，加速高价值医学任务"（主语从医生反馈结果切换到产业方使用平台的视角）
- §3.4：将"24h 内反馈"范例改为"敏捷完成医学任务"；新增"24h 措辞特别规则"段落（数据齐备前不得作为头牌承诺）
- §5.2：标题由"药企受众"扩为"药企与产业方受众"；新增 RCP 受众范围说明（药企市场/医学/KA、咨询/调研、AI 公司）；RCP 行更新——痛点改为"寻找目标医生困难、任务成本高、医生反馈周期长"，核心价值改为"让医生敏捷快速完成高价值医学任务"，CTA 改为"发起任务 / Run a pulse / 看任务反馈"
- 联动：`00-architecture-locked.md` §3 已锁定 DI 主色 `#0891B2`（移除"暂定"标记）；`02-brand-architecture.md` §1.3 新增 DI 图标 28px 以下双环可读性评估（决议接受）；`02-brand-architecture.md` §5.4 已新增"梅斯 AI / MedSci AI"伞标简称例外条款；`05-rectification-checklist.md` §5 已记录 `<CitationSidePanel />` 由 `@yogyoung-code/ai-brand-kit` v0.2 统一交付（决议解决发现报告高优先级待决问题 #1 #2 #3）
- 待办：本次修订涉及 voice 层条款变更，需市场负责人 + 法务双签后正式升版至 v0.2
- 同步：`docs/voice/brand-voice.md` 已手动同步本次变更；正式合入前请重跑 `scripts/sync-docs.mjs` 以确保 VitePress 构建产物（`docs/.vitepress/dist/`）一致


---

::: tip 文档来源
本页由 `scripts/sync-docs.mjs` 自动从 kit 根的 [`03-brand-voice.md`](https://github.com/) 同步。**不要直接编辑此文件**——所有修改请改源文件后重跑 sync 脚本。
:::
