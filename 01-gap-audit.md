# 梅斯健康 AI 产品 · Gap Audit v0.1

**对比基准**：`00-architecture-locked.md` 中定义的"信任层 + 命名 + endorsement signature + voice"7 项规范。
**审计对象**：DeepEvidence Canary、SeekEvidence Canary、Rapid Clinical Pulse、（DeepInsight 尚未交付，不在本轮审计范围）
**审计方法**：tailwind.config 与 globals.css 静态分析（RCP 完整可证）+ 已知主色与字体阵营（DE/SE）+ 战略 PDF 中产品功能描述
**置信度标记**：🟢 已证 / 🟡 推断 / 🔴 待人工验证

---

## 一、Endorsement Signature

每个产品在 footer / about / 顶栏右侧应有 `由 梅斯健康 出品`（CN 界面）或 `by MedSci Healthcare`（EN/技术界面）的灰色细字签名。

| 产品 | 现状 | 缺口 | 置信 |
|---|---|---|---|
| DeepEvidence | 推断无（vibe-coded 原型，未连接母品牌） | 全部缺失：需在 footer + 顶栏品牌区添加 | 🟡 |
| SeekEvidence | 推断无 | 同上 | 🟡 |
| RCP | tailwind 中无 endorsement 相关 token，globals.css 无相关样式类 | 同上 | 🟢 |

**整改优先级**：P0（架构层最低承诺，无此即不构成 branded house）

---

## 二、Wordmark 字体（Teko）

| 产品 | 现状 | 缺口 | 置信 |
|---|---|---|---|
| DeepEvidence | 推断使用 Inter Bold 渲染 "DeepEvidence"（shadcn 默认） | 替换为 Teko Medium，全大写，色值 `#2563EB` | 🟡 |
| SeekEvidence | 推断使用 Inter Bold 渲染 "SeekEvidence" | 替换为 Teko Medium，全大写，色值 `#9333EA` | 🟡 |
| RCP | `fontFamily.display` = IBM Plex Sans，wordmark 推断使用 Plex Sans 700/600 | **破例**：wordmark 改为 Teko Medium，色值 `#0F62FE`；产品内部 UI 仍保留 Plex | 🟢 |

**整改优先级**：P1（Teko 是把四产品绑成家族的关键视觉锚点）

**风险**：Teko 是 Google Fonts 免费字体，但需要在每个产品的字体加载链路中显式引入；RCP 的 next.config + 字体 preconnect 需要新增。

---

## 三、VGI Ingredient Mark（验证型生成式智能™）

每个产品在 footer + AI 输出结果区右下角应贴 VGI 徽章。

| 产品 | 现状 | 缺口 | 置信 |
|---|---|---|---|
| DeepEvidence | 推断无 | SVG 资产 + 放置规则全缺 | 🟡 |
| SeekEvidence | 推断无 | 同上 | 🟡 |
| RCP | tailwind 无 VGI 相关 token | 同上 | 🟢 |

**待 Task #5 输出**：VGI SVG 主版本（黑白）+ 4 个产品色变体。

---

## 四、PITL Verified 徽章

战略 PDF §2.1 §4.2 明确：经 PITL 专家网络核实的内容必须贴此徽章。

| 产品 | 现状 | 缺口 | 置信 |
|---|---|---|---|
| DeepEvidence | 推断未实现"Verify It"按钮 + 徽章联动 | 徽章 SVG + 触发逻辑（点击徽章打开复核记录） | 🟡 |
| SeekEvidence | 推断无 | 同上（科研产品场景下应用于"PICO 横向证据对比表"已验证条目） | 🟡 |
| RCP | tailwind 无 trust 相关 token | 在"AI 模拟预演"输出结果与"真人 A/B 验证"对比页应有 | 🟢 |

**整改优先级**：P0（这是产品战略主张的视觉锚点；缺它等于战略落空）

---

## 五、AIO Official 徽章（DeepLabeling）

战略 PDF §3.1 §4.2：药企经 DeepLabeling 治理后的说明书内容应贴此徽章。

| 产品 | 现状 | 缺口 | 置信 |
|---|---|---|---|
| DeepEvidence | DeepLabeling 输出的说明书内容若呈现于 CDS 卡片中应有此徽章 | 徽章 SVG + 与药企内容数据源的关联逻辑 | 🟡 |
| SeekEvidence | 不直接相关 | 不需要 | 🟢 |
| DeepInsight | DeepLabeling 是 DI 子产品，徽章应在 DI 内自带 | DI 未交付，进入设计前预置 | 🟢 |
| RCP | 不直接相关 | 不需要 | 🟢 |

---

## 六、Nano-Citation（[n] 上标 + 侧边溯源面板）

战略 PDF §2.1 §4.3：所有 AI 陈述紧跟蓝色上标 [n]，点击侧边栏平滑划出原文。

| 产品 | 现状 | 缺口 | 置信 |
|---|---|---|---|
| DeepEvidence | CDS 是核心场景，强需求 | 推断已有占位但样式与交互未规范化 | 🔴 需视觉确认 |
| SeekEvidence | 选题挖掘 + 文献综述场景强需求 | 同上 | 🔴 需视觉确认 |
| RCP | KOL/医生反馈与文献关联弱，但药企 SLR 报告输出场景应有 | 推断未实现 | 🟢 |

**整改优先级**：P0（"纳米级引用"是对外宣称的差异化能力，必须可视化兑现）

---

## 七、CoT 思维链动画 + Diff View + 渐进式披露

| 产品 | 现状 | 缺口 | 置信 |
|---|---|---|---|
| DeepEvidence | 推断 CoT 与 Diff View 占位均无；渐进式披露推断已有（卡片三层结构是 shadcn 默认） | CoT keyframes、Diff View 红绿样式、L1/L2/L3 排版规范 | 🟡 |
| SeekEvidence | 同上 | 同上 | 🟡 |
| RCP | globals.css 已有 `animate-funnel-card` `animate-tab-content` `skeleton-shimmer` 等丰富动效；但**无 CoT 动画 keyframes**；漏斗卡片不是 CoT | 新增 CoT keyframes；Diff View 在 A/B 对比页是核心场景，必须有 | 🟢 |

**RCP 关键发现**：globals.css 第 254–261 行的 `funnel-card-in` keyframes 是漏斗卡片入场动画，**不能复用为 CoT 思维链动画**——CoT 应是逐句流入 + 节拍呼吸感，funnel 是入场放大。两者节奏与语义都不同。

---

## 八、Brand Voice 合规

针对扩展禁用词的初步抽查（基于已知信息，非全文扫描）。

| 产品 | 已知风险 | 需进一步审查 |
|---|---|---|
| DeepEvidence | 战略 PDF §4.1 出现"终结 AI 幻觉"——若界面文案沿用此句则违反扩展禁词 | 🔴 需对所有文案做禁词扫描 |
| SeekEvidence | 同上 | 🔴 |
| RCP | 战略 PDF §3.2 出现"大幅降低试错成本""24 小时内"——后者带量化可保留，前者属夸大 | 🔴 |

**整改路径**：Task #4 输出 Brand Voice 后，对三产品文案做一次扫描。

---

## 九、综合 Gap Map（按整改优先级）

### P0（架构层最低承诺，必须补齐）

1. Endorsement signature 全产品统一上线（DE/SE/RCP）
2. PITL Verified 徽章 + 触发逻辑（DE/SE/RCP/DI）
3. Nano-Citation [n] 上标 + 侧边溯源面板（DE/SE，RCP 在 SLR 输出场景）
4. CN 主语言策略落地（DE/SE/RCP 当前推断为 EN-default 或混合）

### P1（家族识别度，强烈建议）

5. Teko Wordmark 全产品替换（DE/SE/RCP/DI）
6. VGI ingredient mark 上线
7. CoT 思维链动画 keyframes（DE/SE/DI 必须；RCP 在"AI 模拟预演"页必须）
8. Diff View 红绿语义规范（DE 在 Verify It 复核页必须；RCP 在 A/B 对比页必须）

### P2（一致性提升）

9. AIO Official 徽章（DE/DI 适用场景）
10. 渐进式披露排版三层级显式化（全产品文档化）
11. 扩展禁词扫描（全产品）

---

## 十、需要进一步确认的事项

1. **DE/SE 的内部字体确认**：推断为 Inter，但需要从生产代码或 Figma 中确认。若使用 system-ui 或其他字体，wordmark 替换 Teko 时需要明确字体过渡。
2. **DE/SE 是否已有 footer 组件**：endorsement signature 的承载位置需要生产代码视觉确认。
3. **DE/SE 当前文案的禁词全量扫描**：需要拉到完整文案库后做一次脚本扫描。
4. **DI 主色 teal `#0891B2` 与 RCP success green `#24A148` 在跨产品并排展示时的视觉距离**：进入设计阶段前可做一次并排测试。
5. **RCP 的 "Bold 700 禁用" 是否影响 Teko wordmark**：Teko 自身字重独立于 RCP 内部字重纪律，wordmark 视觉层不受影响；但需在 Brand Kit 文档里显式说明此例外。

---

## 十一、下一步

- Task #2 ✅ 本文档交付
- Task #3：Brand Architecture 文档（lockup 排版、wordmark 几何规范、签名块详细 spec）
- Task #4：Brand Voice 起草
- Task #5：信任层 SVG + ai-tokens.css 起草
- 在 Task #5 之前，若需要做 DE/SE 的实际生产代码视觉验证（确认上述 🟡/🔴 项），应另起一个独立的 audit 子任务，由前端工程师协助
