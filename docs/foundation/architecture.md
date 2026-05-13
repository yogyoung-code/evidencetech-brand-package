# 梅斯健康 AI Brand Kit · Architecture Locked v0.1

**状态**：架构层决策已全部 locked（2026-05-05 by Sponsor）
**适用范围**：DeepEvidence · SeekEvidence · DeepInsight · Rapid Clinical Pulse 四个 AI 产品
**关系**：在 MedSci Healthcare Brand Guidelines v1.1 之上的**显式偏离**（Sponsor 拍板，不视为违规）

---

## 1. 品牌架构模型

**Branded House + 共享信任层**（参照 Atlassian / Microsoft 365）。

每个 Deep 产品保留独立的视觉皮肤（颜色、字体阵营、形状语言），通过下列**跨产品统一资产**绑定为同一家族：

- VGI ingredient mark（Verified Generative Intelligence™）
- 三大信任徽章（PITL Verified · AIO Official · Nano-Citation）的结构规范
- AI 交互模式规范（CoT 动画 · Diff View · 渐进式披露 L1/L2/L3）
- Endorsement signature（"由梅斯健康出品" / "by MedSci Healthcare"）
- Brand Voice（CN 主、EN 辅）+ 命名系统 + 扩展禁用词

**放弃的统一**：主色、字体（仅 wordmark 用 Teko）、形状语言、Figma 组件库（改为只交付信任层组件库）。

---

## 2. 经 Sponsor 拍板的 v1.1 偏离条款

| 条款 | 母品牌 v1.1 规定 | AI Brand Kit 偏离 | 理由 |
|---|---|---|---|
| 色彩系统 | 单色相蓝系 + Logo 青强调 | 每个产品独立主色（蓝/紫/teal/IBM 蓝） | branded house 模型，需要色相区隔产品识别 |
| 主语言 | 英文为主，中文为伴随 | **中文为主，英文为辅** | AI 产品核心用户为中国大陆医生及药企 |
| 字体 Display | Footlight MT Pro | Wordmark = **Teko**；产品内部字体各自独立 | Teko 作跨产品 wordmark 锚点 |
| 禁用词 | "zero-hallucination" 等 | **沿用并扩展**（新增"零幻觉""黑盒""完美准确"等中文等价词） | 合规红线，无偏离 |

---

## 3. 四产品色彩与字体矩阵

| 产品 | Primary | Secondary/Text | 产品内字体 | Wordmark 字体 | 形状语言 |
|---|---|---|---|---|---|
| **DeepEvidence** | `#2563EB`（Tailwind blue-600） | `#334155`（slate-700） | Inter（推断） | **Teko Bold** | 圆角 + 阴影 |
| **SeekEvidence** | `#9333EA`（Tailwind purple-600） | `#0F172A`（slate-900） | Inter（推断） | **Teko Bold** | 圆角 + 阴影 |
| **DeepInsight** | `#0891B2`（teal-600） | TBD（建议 slate-700） | TBD（建议 Inter） | **Teko Bold** | TBD（建议圆角 + 阴影） |
| **Rapid Clinical Pulse** | `#0F62FE`（IBM Blue 60） | slate-700/800 + IBM Gray | **IBM Plex Sans/Mono** | **Teko Bold**（破例，与产品内 Plex 不同） | Carbon 扁平：0 圆角输入、12px 圆角卡 |

**已知遗留事项**：
- DE 与 RCP 的"主交互蓝"色值不同（`#2563EB` vs `#0F62FE`）。Branded house 模型下可接受，不强制统一。
- RCP 字重纪律"禁用 Bold 700"仅限 RCP 产品内部；其他产品不受此约束。
- DI 主色 teal `#0891B2` 已正式锁定（2026-05-07，Sponsor 决议）：与 success-500 `#24A148` 色相距离足够，并排展示无视觉冲突。锁定后任何调整须按 §6 的 major RFC 流程。

---

## 4. Endorsement Signature 规范

### 4.1 Lockup 结构

```
[PRODUCT WORDMARK]              ← Teko Bold, 产品主色
由 梅斯健康 出品                  ← 思源黑体 Medium 14px, neutral-700
                                 (英文版: by MedSci Healthcare, Inter Medium 14px)
```

### 4.2 语言版本规则

| 场景 | 签名版本 |
|---|---|
| 中文界面、对外宣传、市场材料、CN 文档 | **由 梅斯健康 出品** |
| 英文界面、技术文档、API docs、开发者门户、出海材料 | **by MedSci Healthcare** |

### 4.3 排版规则

- 签名色固定为 `neutral-700`（`#334155` 或各产品 slate-700 等价值），**永不使用产品主色或母品牌 navy**（避免与产品色或母品牌色相打架）
- 签名字号 = wordmark 字号 × 0.35–0.40
- 签名永远位于 wordmark 下方，左对齐 wordmark 起始点
- 中英文版本不混用；同一界面上的所有 endorsement signature 必须用同一语言

---

## 5. 跨产品共享的信任层（Brand Kit 真正交付的核心）

### 5.1 VGI Ingredient Mark

- 命名：**Verified Generative Intelligence™**（中文：**验证型生成式智能**™）
- 形态：椭圆 pill 徽章 + 简化勾选/盾牌图形
- 颜色：徽章主体使用各产品主色着色；勾选/盾牌图形用 `#FFFFFF` 反白
- 放置：每个产品的 footer + about 页 + AI 输出结果区右下角

### 5.2 三大信任徽章

| 徽章 | 用途 | 形态 | 着色规则 |
|---|---|---|---|
| **PITL Verified** | 经专家验证的 AI 输出（最高信任级） | 盾牌 icon + "PITL Verified" 文字 | 盾牌底色 = 产品主色；勾选反白 |
| **AIO Official** | DeepLabeling 治理的厂商官方说明书内容 | 印章 icon + "厂家官方核准" 文字 | 印章底色 = neutral-700；文字 = 产品主色 |
| **Nano-Citation** | AI 陈述后的 [n] 上标 + 侧边溯源面板 | 上标数字 + 可点击 chip | 数字色 = 产品主色 |

> **缩写说明**：
> · **PITL** = *Physician-in-the-Loop*（医师在回路）——梅斯 AI 的核心机制：当 AI 置信度不足时触发分布式医生网络验证
> · **AIO** = *AI Optimization*（AI 检索优化）——SEO 在 AI 检索时代的等价物；让品牌内容在大模型/RAG 系统检索时保持语义保真。源自战略 PDF §3.1："结构化数据（SPL）是 AI 时代的 SEO（AIO）"
> · **VGI** = *Verified Generative Intelligence*（验证型生成式智能）——AI 子品牌伞下的 ingredient 标签

### 5.3 AI 交互模式（行为规范，与视觉解耦）

- **CoT 思维链动画**：dot-spiral 演化版，节奏 1.2s/cycle，每个产品按自己的主色实现
- **Diff View**：红色删除线（`#DC2626` 或各产品 error 等价值）+ 绿色高亮新增（`#22C55E` 或 `#24A148`）
- **渐进式披露**：L1 粗体核心结论 → L2 证据摘要 → L3 溯源细节，全产品统一三层级

### 5.4 各产品如何接入

每个产品的 design tokens 文件（`tailwind.config.ts` 或等价 CSS variables）需要新增一个 `brand-kit-trust` 映射段，把信任层组件接到产品自己的色彩 token。例如 RCP 的 Tailwind 里：

```ts
// brand-kit-trust 映射 — RCP
'trust-pitl-bg': theme('colors.brand.500'),  // = #0F62FE
'trust-pitl-fg': '#FFFFFF',
'trust-citation': theme('colors.brand.500'),
'trust-aio-bg': theme('colors.surface.tertiary'),
'trust-aio-fg': theme('colors.brand.500'),
```

---

## 6. 命名系统

- **统一前缀**：`Deep-`（DeepEvidence / DeepInsight）；SeekEvidence 与 Rapid Clinical Pulse 为命名例外，不强制改名
- **wordmark 字体**：**Teko Bold**，全大写，字距 +0.02em
- **代号**：DeepEvidence 内部代号 Hippocrates 仅限内部沟通，不出现在对外物料

---

## 7. Brand Voice（待 Task #4 起草）

- 主语言：CN
- 4 条原则（待起草）：严谨而非冷漠 · 透明而非啰嗦 · 证据带源 · 医生在环
- 扩展禁用词清单（在母品牌禁词上加）：
  - 中文：零幻觉 · 黑盒 · 完美准确 · 行业领先 · 颠覆性 · 革命性
  - 英文：zero-hallucination, hallucination-free, 100% accurate, perfect accuracy, flawless, industry-leading, best-in-class, world's #1, revolutionary, cutting-edge, trusted by thousands
- 双受众 messaging matrix：医生（DE/SE）vs. 药企（DI/RCP）

---

## 8. 交付物清单

| # | 文件 | 用途 | 状态 |
|---|---|---|---|
| 00 | `00-architecture-locked.md` | 本文档，决策基准 | ✅ 本次交付 |
| 01 | `01-gap-audit.md` | 三产品现状对比信任层规范 | ⏳ 进行中 |
| 02 | `02-brand-voice.md` | CN 主语言文案体系 | ⏳ 待 Task #4 |
| 03 | `03-visual-system.md` | 信任徽章 SVG + AI 交互规范 | ⏳ 待 Task #5 |
| 04 | `ai-tokens.css` | 跨产品共享 CSS 变量（信任层 only） | ⏳ 待 Task #5 |
| 05 | `figma-trust-layer-kit/` | Figma 信任层组件库（不含产品 UI 组件） | ⏳ 待 Task #6 |
| 06 | `rectification-checklist.md` | 三个原型的整改清单（仅清单，不做改造） | ⏳ 待 Task #7 |

---

## 9. 治理

- 本文档版本号 v0.1（Locked 2026-05-05）
- 任何架构层变更需 Sponsor 重新拍板
- token 层变更通过 Brand Kit 文档 PR 流程（市场负责人 + Tech Lead 双签）
- 大版本（v0.x → v1.0）需 Sponsor + Tech Lead + 市场负责人三签
- 与母品牌 v1.1 sync cadence：每季度对照一次；母品牌升 v1.2 时同步评估 AI Brand Kit 是否需要相应升版


---

::: tip 文档来源
本页由 `scripts/sync-docs.mjs` 自动从 kit 根的 [`00-architecture-locked.md`](https://github.com/) 同步。**不要直接编辑此文件**——所有修改请改源文件后重跑 sync 脚本。
:::
