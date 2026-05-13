# 梅斯健康 AI Brand Kit · Error & Empty State Voice v0.2

**承接**：`03-brand-voice.md` v0.2 §1.1（CN 主语言铁律 · 决议 #4）+ `03a-social-media-voice.md` v0.2 + `03c-email-templates-voice.md` v0.1（撤稿响应模板）+ `03e-china-regionalization.md` v0.2（受众分层）+ `03f-evidence-attestation.md` v0.2（撤稿响应规程）+ `04 / 04a / 04b / 04c` v0.2 已签 + `06-governance.md` §3 决策权矩阵。
**作用**：本文档是 03 语音主规范在**错误 / 边界态 / 空态文案**维度的执行手册——给前端 / 设计 / 产品 / QA / 客户支持 / 法务一份"用户看到的每条错误信息怎么写 / 怎么分类 / 怎么测试"的统一规则与模板库。
**主要使用者**：前端工程 / UX 设计 / 产品 PM / QA / 客户支持 / 法务（监管措辞 review）。
**优先级**：03 主规范始终优先；04a a11y 在视觉冗余 / aria 维度强约束；04b 在动效 / Toast 维度强约束；本文档定义文案维度的附加约束。

---

## 0. 适用范围与边界

### 0.1 覆盖

本文档覆盖产品 UI 中**所有**用户可见的错误 / 警告 / 边界态 / 空态文案：

- **错误（Error）**：用户操作失败 / 系统故障 / 网络问题 / 权限不足 / 验证不通过
- **警告（Warning）**：操作可能导致问题但仍可继续 / 数据撤稿告警 / 接近配额
- **空态（Empty State）**：列表为空 / 搜索无结果 / 历史档案清空 / 首次使用 / 离线
- **边界态（Edge State）**：超长输入截断 / 极端值 / 加载中 / 不支持的浏览器 / 不支持的语言
- **临床特殊态（Clinical Special）**：confidence 低于阈值 / 需 PITL 核验 / 引用文献已撤稿 / SourceID 失效
- **系统降级（Service Degradation）**：维护中 / 部分功能不可用 / API 限流

### 0.2 不覆盖

- **代码层错误码 / API 字段 / 系统日志**——保持 EN（继承 03 §1.1 决议 #4）；本文档仅管"用户能看到的字符串"
- **后端业务逻辑 / 异常处理代码**——按工程团队各自规范
- **撤稿响应规程**——已在 03f §3.4 锁定；本文档仅管"撤稿事件触发后 UI 上展示给用户的文案"
- **撤稿响应邮件**——已在 03c §9 锁定
- **撤稿响应社交内容**——已在 03a §5.1 锁定
- **印刷品 / 纸质材料**——非交互态；按 03 主文档处理
- **动效与视觉表达**——已在 04a / 04b 锁定（本文档 §7 仅做协同引用）

### 0.3 优先级层级

冲突时按以下顺序裁决：

1. 03f §3.4 撤稿响应铁律（涉撤稿数据时）
2. 03 §1.1 CN 主语言（决议 #4）
3. 03 §6 禁词清单
4. 04a §4 屏幕阅读器 aria 规范（aria-live / role="alert" / aria-describedby）
5. 04b §6.4 错误反馈三冗余 + §7.4 Toast / §9 错误克制原则
6. 03e §2 受众分层（T1-T4 用户的术语密度差异）
7. 本子文档（错误 / 边界 / 空态文案层）

---

## 1. 错误分类（三维矩阵）

### 1.1 维度 A：来源（6 类）

| 来源 | 描述 | 用户视角 |
|---|---|---|
| **system** | 系统内部故障（DB / cache / 部署）| "我们这边出了问题" |
| **network** | 网络层（连接超时 / DNS / 离线）| "你的网络似乎有问题" |
| **validation** | 输入验证（格式 / 长度 / 必填）| "你输入的需要调整" |
| **business** | 业务逻辑（额度不足 / 状态冲突 / 工作流错误）| "当前操作不可执行" |
| **auth** | 认证（未登录 / token 过期 / 多设备冲突）| "登录状态需要刷新" |
| **permission** | 权限（角色不够 / 资源访问限制）| "你当前角色不能执行此操作" |

### 1.2 维度 B：严重度（4 级）

| 级别 | 描述 | UI 处理 | aria-live |
|---|---|---|---|
| **critical** | 临床决策受阻 / 数据完整性问题 / 安全事故 | 全屏覆盖 / 必须用户确认才能继续 | `assertive` |
| **error** | 操作失败但可重试 / 不影响数据完整 | 内联红框 + Toast 不自动消失（继承 04b §7.4）| `assertive` |
| **warning** | 可能问题但允许继续 / 接近配额 / 撤稿数据 | 内联黄框 + Toast 7s 滞留（继承 04b §7.2）| `polite` |
| **info** | 提示性信息 / 不阻塞 | Toast 5s 滞留 | `polite` |

### 1.3 维度 C：临床敏感度（4 级）—— 本文档**核心特异维度**

| 级别 | 描述 | 文案要求 |
|---|---|---|
| **clinical-critical** | 错误可能直接影响临床决策 / 处方建议 / 患者安全 | 必须明示"本输出不构成处方建议"+ "请医师在回路（PITL）核验"；严重度自动升 critical |
| **clinical-adjacent** | 错误影响临床数据展示 / 引用 / 证据呈现 | 必须明示数据状态（如"引用已失效"）；严重度建议 ≥ warning |
| **business** | 错误影响业务流程但不涉临床（如续费 / 团队管理）| 标准文案规则 |
| **cosmetic** | 视觉 / 文案微问题（如 typo / 排版）| 后台修复，不在 UI 显式报错 |

### 1.4 临床敏感度产品默认值

| 产品 | 默认临床敏感度 | 例外 |
|---|---|---|
| **DeepEvidence** | clinical-critical / clinical-adjacent | 业务功能（计费 / 设置）→ business |
| **SeekEvidence** | clinical-adjacent / business | 涉撤稿文献 → clinical-critical |
| **DeepInsight** | business | 涉客户医生信息 PII → clinical-adjacent |
| **Rapid Clinical Pulse** | business | 涉医生反馈直接影响临床决策时 → clinical-adjacent |

### 1.5 三维组合判定矩阵

| 来源 + 严重度 + 临床敏感度 | UI 处理 | 模板库索引 |
|---|---|---|
| system + critical + clinical-critical | 全屏阻塞 + PITL 提示 + 求助 hotline | T1-1 |
| network + error + clinical-adjacent | 内联红框 + 重试按钮 + "数据可能不完整"提示 | T1-2 |
| validation + warning + business | 内联黄框（无阻塞）+ 输入提示 | T2-1 |
| auth + critical + clinical-adjacent | 全屏阻塞 + 重新登录 + "已保存草稿" | T1-3 |
| business + info + cosmetic | Toast 5s | T3-* |

---

## 2. 文案 4 段式结构

### 2.1 强制 4 段式

每条 critical / error / warning 必须包含 4 段（顺序固定）：

```
1. What happened — 发生了什么（≤ 15 字 · 客观描述）
2. Why — 可能原因（≤ 25 字 · 不推卸责任）
3. What to do — 用户能做什么（≤ 25 字 · 1-3 个具体行动）
4. Where to get help — 求助路径（仅 critical / 复杂 error 必出）
```

### 2.2 各段落规范

#### What happened（发生了什么）

- 用户视角，不用技术术语
- ✓ "上传失败"
- ❌ "HTTP 500 Internal Server Error"
- ✓ "无法加载历史档案"
- ❌ "Database connection timeout in module ArchiveService"

#### Why（可能原因）

- 不推卸（"系统繁忙"是推卸）
- 不自责（"我们的错"是过度道歉）
- 客观陈述
- ✓ "网络连接不稳定"
- ✓ "服务正在升级（预计 5 分钟内恢复）"
- ❌ "系统繁忙请稍后再试"
- ❌ "未知错误"

#### What to do（用户能做什么）

- 1-3 个具体行动（不超过 3 个，否则用户决策疲劳）
- 行动按优先级排序（最可能解决的在前）
- ✓ "[1] 检查网络后重试 / [2] 切换到 4G/5G / [3] 联系客户支持"
- ❌ "请检查您的设置或联系管理员"

#### Where to get help（求助路径）

仅 critical 或 复杂 error 出现：

- ✓ "联系 support@medsci-ai.com 或致电 +86 400-xxxx-xxxx"
- ✓ "工单已自动创建（编号 TASK-xxxxx），客户支持将在 1 小时内联系你"

### 2.3 例外：超简文案（info / cosmetic）

info 级别 / 简单 toast 可省略 4 段，用 1 句：

- ✓ "已保存"
- ✓ "已复制到剪贴板"
- ✓ "正在重新加载..."

### 2.4 不允许的简化

clinical-critical 即使 info 级别也**不允许**简化，必须含 4 段（即使是 1 句话也要按 What / Why / Action / Help 节奏组织）。

---

## 3. 错误码命名规则 + CN/EN 双轨

### 3.1 命名空间

| 命名空间 | 用途 | 示例 |
|---|---|---|
| `ERR-COMMON-*` | 跨产品共享（auth / network / 系统级）| ERR-COMMON-001 网络超时 |
| `ERR-DE-*` | DeepEvidence 独有 | ERR-DE-101 PITL 核验未通过 |
| `ERR-SE-*` | SeekEvidence 独有 | ERR-SE-201 检索式语法错误 |
| `ERR-DI-*` | DeepInsight 独有 | ERR-DI-301 KOL 雷达数据滞后 |
| `ERR-RCP-*` | Rapid Clinical Pulse 独有 | ERR-RCP-401 任务发布超额度 |

### 3.2 编号区段

| 区段 | 类型 |
|---|---|
| 001-099 | 系统 / 网络 / 部署 |
| 100-199 | 业务（产品功能）|
| 200-299 | 验证 / 输入 |
| 300-399 | 权限 / 角色 |
| 400-499 | 配额 / 计费 |
| 500-599 | 临床特殊（PITL / 撤稿 / confidence）|
| 600-699 | 数据 / 引用 |
| 700-799 | 集成 / 第三方 |
| 800-899 | 预留 |
| 900-999 | 内部 / 调试 |

### 3.3 CN 用户可见文案 + EN 内部码（继承决议 #4）

每个错误码必有：

- **EN 内部码**（开发者 / 日志 / 错误监控）：`ERR-DE-501`
- **CN 用户可见文案**（UI / 客户支持脚本）：4 段式 CN 文案
- **EN 用户可见文案**（仅 EN 单语场景，如海外学术合作 UI）：与 CN 等价

示例：

```
错误码：ERR-DE-501
内部描述（EN · 日志）：PITL verification confidence below threshold (< 0.7)
CN 用户可见：
  1. PITL 核验未通过
  2. 当前结论的置信度较低（0.65）；不建议直接采纳
  3. [1] 让医师人工核验 / [2] 重新提交问题 / [3] 查看相似案例
  4. 联系 support@medsci-ai.com 获取临床支持团队协助
EN 用户可见（如适用）：
  1. PITL Verification Failed
  2. Low confidence (0.65) for current conclusion. Direct adoption not recommended.
  3. [1] Request manual physician review / [2] Resubmit your question / [3] View similar cases
  4. Contact support@medsci-ai.com for clinical support team assistance
```

### 3.4 错误码不允许的形态

- ❌ 无错误码的错误信息（"出错了"）
- ❌ 错误码暴露技术栈（"NullPointerException at line 42"）
- ❌ 错误码使用产品内部代号（"ERR-Hippocrates-101" → 应是 "ERR-DE-101"）
- ❌ 跨产品错误码冲突（每个码全局唯一）

---

## 4. 10+ 禁忌措辞

### 4.1 禁忌清单（强制规则）

| # | 禁忌 | 原因 | 替代 |
|---|---|---|---|
| 1 | "未知错误" / "Unknown Error" | 推卸责任 + 用户无 actionable | 描述具体场景 + 提供错误码 |
| 2 | "系统繁忙请稍后再试" | 模糊 + 推卸 + 不真诚 | "服务正在升级（预计 X 分钟内恢复）" |
| 3 | "您输入的不正确" / "您的设置有问题" | 责难用户（"您"+ 错误归因）| "请检查 [具体字段] 是否符合 [具体格式]" |
| 4 | "非常抱歉，万分歉意，敬请谅解" | 道歉过度 → 反而显示自信不足 | 简短"对不起" + 具体说明 |
| 5 | "Oops!" / "哎呀" / "糟糕" | 卡通化 → 与品牌严肃语气冲突 | 客观描述（继承 03 严肃不冷漠原则） |
| 6 | "请联系管理员" | 模糊（哪个管理员？）| "联系 support@medsci-ai.com 或致电 [hotline]" |
| 7 | "Permission Denied" / "权限不足" 单独使用 | 信息不全 | "你当前角色 [role] 不能执行 [action]；如需此权限联系 [team-lead]" |
| 8 | "Internal Server Error" / "500" | 技术术语暴露 | "我们这边出了问题（错误码 ERR-XXX-XXX）" |
| 9 | "永远" / "绝对" / "100%" 等绝对化用语 | 监管禁忌（继承 03 §6 禁词）| "通常 / 一般 / 在 X 场景下" |
| 10 | "保证修复" / "立即解决" 等承诺式用语 | 法务禁忌（不可控承诺）| "工程团队已收到反馈，将尽快修复" |
| 11 | 反问语气："您确定这是你想要的吗？" | 显得质疑用户 | "确认操作：[具体后果]" |
| 12 | 表情符号（🤖🚨💔😱）在错误消息中 | 卡通化 + 与品牌不符（继承 03a §6.5 emoji 白名单）| 不用 emoji；用 ⚠️ 仅高合规告警 |
| 13 | 全大写 "ERROR!" / "失败！" | 视觉攻击性 + 加剧用户慌乱 | 中性大小写 + 无感叹号 |
| 14 | 长篇道歉 + 无 actionable | 浪费用户时间 | 4 段式（What / Why / Action / Help） |

### 4.2 临床场景额外禁忌

| # | 禁忌 | 原因 |
|---|---|---|
| 15 | "AI 替你判断" / "AI 替代医生" | FTC 红线 + 与 PITL 原则冲突（继承 03 反定位）|
| 16 | "肯定 / 必然 / 一定 X 病症" | 监管禁忌 + 临床判断禁忌 |
| 17 | "建议立即停药" / "建议立即就诊" 单独出现 | 医疗建议必须 PITL 核验，不能 AI 直接给 |
| 18 | "本系统已治愈 X 患者" / "AI 治好 Y" | 监管禁忌（治愈表述）|

---

## 5. 空态分类（6 子类）

### 5.1 6 类空态

| # | 子类 | 触发 | 文案核心 |
|---|---|---|---|
| **E1** | **never had data**（首次使用 / 全新空）| 用户第一次进入，从未有过数据 | 引导 + 价值钩子 |
| **E2** | **cleared**（已清空）| 用户主动清空 / 删除完后的状态 | 简短确认 + 撤销 |
| **E3** | **loading**（加载中）| 数据正在拉取 | 占位（skeleton）+ 不展示文字（避免误导） |
| **E4** | **error fallback**（错误后空）| 加载失败后的 fallback 状态 | 错误说明 + 重试 + 求助 |
| **E5** | **offline**（离线）| 网络断开 | 离线说明 + 重连提示 + 离线可用功能 |
| **E6** | **unauthorized**（权限不足空）| 用户登录但角色不够 | 权限说明 + 申请路径 |

### 5.2 各空态文案规范

#### E1 never had data（首次使用）

- ✓ "开始你的第一次循证查询。在上方输入临床问题，DE 将为你提供带证据的答案。"
- ❌ "暂无数据" / "No data"（无引导价值）
- 必含：1 个明确 CTA（继承 03 §3.3 命名规范）

#### E2 cleared（已清空）

- ✓ "已清空 12 条历史记录。[撤销]"（≤ 30 秒内可撤销，按 04b §6.4 撤销窗口）
- ❌ "操作完成"（无信息）
- 必含：撤销按钮 + 操作摘要

#### E3 loading

- 不出错文字（误导）
- 用 Skeleton 占位（继承 04b §3.1 加载分级）
- 仅在 > 10s 时展示 progress bar 文字（如 "正在分析 1,234 篇文献..."）

#### E4 error fallback

- ✓ 4 段式完整（What / Why / Action / Help）
- 必含：重试按钮 + 错误码 + 求助路径

#### E5 offline

- ✓ "你已离线。已加载的内容仍可查看；新查询需要网络。重连后自动同步。"
- ❌ "网络错误"（不告知用户能做什么）
- 必含：离线可用功能列表 + 重连提示

#### E6 unauthorized

- ✓ "你当前角色（医生）不能查看团队管理。如需此权限请联系科室主任申请。[申请按钮]"
- ❌ "权限不足"（继承 §4.1 #7 禁忌）
- 必含：当前角色 + 缺失权限 + 申请路径

---

## 6. 临床场景特殊处理

### 6.1 PITL 核验提示（clinical-critical）

任何 AI 输出在满足以下条件时**必须**显示 PITL 提示：

- confidence < 阈值（默认 0.7，按产品调整）
- 涉处方建议 / 用药剂量 / 治疗方案
- 引用文献 SourceID 失效（撤稿 / 时效到期）
- 用户标注"复杂病例"

文案模板：

```
⚠️ 本输出需医师在回路（PITL）核验

当前结论的置信度：[X]%（建议 ≥ 70%）
原因：[具体原因 · ≤ 25 字]

[1] 请医师人工核验
[2] 查看支持证据 [n] · 链接到 SourceID
[3] 不构成处方建议；最终决策权在医师

需要支持？联系 support@medsci-ai.com
```

### 6.2 引用文献撤稿告警（clinical-critical · 继承 03f §3.4）

当用户当前会话引用的 SourceID 在数据库中被标记 `retracted = true` 时：

- T+0：UI 弹出**全屏阻塞** Toast（aria-live="assertive"，继承 04b §7.4）
- 不允许用户"忽略"或"继续使用"——必须刷新结论

文案模板：

```
⚠️ 数据修正告警

你刚查询的结论引用了已撤稿文献：
"[文献标题简述]"（[期刊名] 撤稿日期 [日期]）

【建议行动】
[1] 查看修正版结论（基于新研究 [SourceID]）
[2] 不再使用此结论
[3] 已触发 R1 客户告警邮件，详情查看 [邮箱]

详细信息：support@medsci-ai.com
```

### 6.3 confidence 阈值显示（clinical-adjacent）

confidence ≥ 0.7 但 < 0.9 时（推荐结论但建议核验）：

- 显示 confidence 数值（不隐藏）
- 显示证据强度 L1-L4（继承 03f §1）
- 不弹 Toast（不阻塞），仅内联提示

```
结论支持证据等级：L2 内部审计 · confidence 0.78
建议参考：[Top 3 SourceID 链接]
如需医师核验：[PITL 按钮]
```

### 6.4 SourceID 失效（clinical-adjacent）

- 时效到期：显示"此证据已超过最近复审节奏（>X 年）"+ 建议复审
- 来源不可访问：显示"原始来源暂不可访问 [503]"+ 替代 SourceID 推荐

### 6.5 跨产品临床场景规则

DE/SE/DI/RCP 在临床场景文案上**完全继承**本节规则；任何跨产品共享 ERR-COMMON-5xx 错误码使用统一 §6 模板。

---

## 7. a11y + 动效协同

### 7.1 a11y（继承 04a）

| 维度 | 规范 | 来源 |
|---|---|---|
| `aria-live` | critical → `assertive` / warning + info → `polite` | 04a §4 + 03d §1.2 |
| `role` | 错误容器 → `role="alert"`；空态容器 → `role="status"` | 04a §4 |
| `aria-describedby` | 错误下方文案与表单字段关联 | 04a §4 |
| **焦点管理** | critical 错误自动跳转焦点到错误位置；error 不自动跳转（用户可控）| 04a §3.4 |
| **不依赖颜色**（继承 04a §2.3 / A3）| 所有错误必含图标 ⚠ + 文字标识；红色仅作冗余 | 04a §2.3 |
| **触控目标 44×44**（继承 04a A4）| 重试 / 撤销 / 求助等 CTA 移动端 ≥ 44×44 | 04a §5 |

### 7.2 动效（继承 04b §6.4 / §7.2 / §9）

| 维度 | 规范 | 来源 |
|---|---|---|
| **错误反馈三冗余** | 振动 + 红框 + 错误文字（不依赖颜色单独传递）| 04b §6.4 / B8 |
| **Toast 滞留** | error 不自动消失 / warning 7s / info 5s | 04b §7.2 / B7 |
| **prefers-reduced-motion** | reduce 模式下振动关闭，红框 + 文字保留 | 04a §6 + 04b §10 |
| **错误状态克制原则** | 不用情绪化插画 / 不用故障艺术 / 不用过度装饰 | 04b §9 |
| **自动滚动** | critical / error 时滚动到错误位置 + 焦点同步 | 04b §9 |

---

## 8. 求助路径（3 级）

### 8.1 求助路径分级

| 级别 | 入口 | 适用 |
|---|---|---|
| **L1 自助** | 帮助中心链接 + FAQ + 错误码搜索 | info / warning / 简单 error |
| **L2 客户支持** | support@medsci-ai.com（继承 03c §2.1）+ 工单系统 | 复杂 error / business critical |
| **L3 紧急 hotline** | +86 400-xxxx-xxxx + 临床支持专线 | clinical-critical / 监管告警 / 安全事故 |

### 8.2 求助路径出现规则

| 严重度 + 临床敏感度 | 必须出现的求助路径 |
|---|---|
| info / cosmetic | L1 |
| warning + business | L1 |
| warning + clinical-adjacent | L1 + L2 |
| error + business | L1 + L2 |
| error + clinical-adjacent | L2 |
| critical + clinical-critical | **L2 + L3**（双路径，临床决策不能等）|

### 8.3 工单自动创建

complex error / critical 错误自动创建工单：

- 工单编号格式：`TASK-YYYY-NNNNN`
- UI 展示工单编号给用户
- 工单包含：错误码 / 时间戳 / 用户操作链 / 设备信息（不含 PII · 继承 04c §2.5）

---

## 9. 跨产品协同

### 9.1 DE / SE / DI / RCP 命名空间

| 产品 | ERR 前缀 | UI BrandScope 色 |
|---|---|---|
| DeepEvidence | ERR-DE-* | `#2563EB` (--de-primary) |
| SeekEvidence | ERR-SE-* | `#9333EA` (--se-primary) |
| DeepInsight | ERR-DI-* | `#0891B2` (--di-primary) |
| Rapid Clinical Pulse | ERR-RCP-* | `#0F62FE` (--rcp-primary) |
| 共享（auth / network / 系统级）| ERR-COMMON-* | 当前 BrandScope 产品色（自动继承）|

### 9.2 共享错误码模板（ERR-COMMON-*）

跨产品错误必须使用 ERR-COMMON-* 前缀；文案模板**统一**（不允许每个产品自行翻译）。例如：

- `ERR-COMMON-001` 网络超时 → 4 产品文案完全一致
- `ERR-COMMON-002` 未登录 → 4 产品文案完全一致

例外：临床敏感度调整（如 DE 上的 ERR-COMMON-401 配额错误是 clinical-adjacent，DI 上是 business）—— 文案 §6 临床特殊段落差异化。

### 9.3 错误监控

每个错误码必须接入错误监控（Sentry / 自建）：

- 实时统计触发频率
- 高频错误（> 1% 用户）触发工程 review
- 临床 critical 错误**任意一次**触发法务 + 产品 review

---

## 10. 文案模板库（30 个核心模板）

### 10.1 ERR-COMMON-* 共享（10 个）

#### T-COMMON-001 网络超时（network + error + business）

```
错误码：ERR-COMMON-001
What：连接超时
Why：网络连接不稳定，或服务正忙
Action：[1] 检查网络后重试 / [2] 切换到 4G/5G / [3] 5 分钟后重试
Help：仍有问题？联系 support@medsci-ai.com
```

#### T-COMMON-002 未登录（auth + error + business）

```
错误码：ERR-COMMON-002
What：登录已过期
Why：你的会话超过 24 小时未活动
Action：[重新登录]（已为你保存当前草稿）
Help：—
```

#### T-COMMON-003 离线（network + warning + business · 空态 E5）

```
错误码：ERR-COMMON-003
What：你已离线
Why：网络已断开
Action：已加载的内容仍可查看；新查询需要网络；重连后将自动同步
Help：—

【离线可用功能】
- 历史档案查看 ✓
- 草稿编辑 ✓
- 新查询 / 提交 ✗
```

#### T-COMMON-004 服务维护（system + critical + business）

```
错误码：ERR-COMMON-004
What：服务正在升级
Why：[预计完成时间 · YYYY-MM-DD HH:MM]
Action：[1] 查看 status.medsci-ai.com 实时状态 / [2] 升级完成后将自动恢复
Help：紧急临床问题：+86 400-xxxx-xxxx
```

#### T-COMMON-005 上传失败（system + error + business）

```
错误码：ERR-COMMON-005
What：文件上传失败
Why：文件大小超过 10 MB 或格式不支持
Action：[1] 压缩到 < 10 MB 后重试 / [2] 转为 PDF / DOCX / PNG / [3] 检查文件未损坏
Help：仍有问题？联系 support@medsci-ai.com
```

#### T-COMMON-006 复制成功（info + cosmetic）

```
✓ 已复制到剪贴板
```

#### T-COMMON-007 已保存（info + cosmetic）

```
✓ 已保存
```

#### T-COMMON-008 撤销操作（info + business）

```
已清空 [N] 条历史记录。[撤销] · 30 秒内有效
```

#### T-COMMON-009 加载失败（system + error + business · 空态 E4）

```
错误码：ERR-COMMON-009
What：无法加载内容
Why：服务器响应超时或返回错误
Action：[1] 重试 / [2] 检查网络 / [3] 5 分钟后重试
Help：support@medsci-ai.com（错误码：ERR-COMMON-009）
```

#### T-COMMON-010 浏览器不支持（business + warning + business）

```
错误码：ERR-COMMON-010
What：你的浏览器版本较旧
Why：当前使用 [Chrome 80]，部分功能需要 Chrome 90+ / Firefox 88+ / Safari 14+
Action：[1] 升级到最新版浏览器 / [2] 切换到 Chrome / Firefox / Safari
Help：—
```

### 10.2 ERR-DE-* DeepEvidence（6 个）

#### T-DE-101 PITL 核验未通过（business + critical + clinical-critical）

```
错误码：ERR-DE-101

⚠️ PITL 核验未通过

当前结论置信度：65%（建议阈值 ≥ 70%）
原因：相似临床案例样本数较少，证据 L2 内部审计强度

【建议行动】
[1] 让医师人工核验
[2] 查看支持证据 [3 条 SourceID 链接]
[3] 重新提交带更多临床信息的问题

⚠️ 本输出不构成处方建议；最终决策权在医师

求助：临床支持团队 · +86 400-xxxx-xxxx
```

#### T-DE-501 引用文献已撤稿（business + critical + clinical-critical）

```
错误码：ERR-DE-501

⚠️ 数据修正告警

你刚查询的结论引用了已撤稿文献：
"AI 辅助诊断准确率 91.3%"（临床医学杂志 · 撤稿日期 2026-04-15）

【建议行动】
[1] 查看修正版结论（基于 EVID-2026-0987 新研究 · 87.6%）
[2] 不再使用此结论
[3] 已触发 R1 客户告警邮件，详情查看你注册邮箱

详细信息：support@medsci-ai.com
```

#### T-DE-201 检索式语法错误（validation + warning + business）

```
错误码：ERR-DE-201
What：检索式语法不正确
Why：第 12 字符附近："AND" 后缺少操作数
Action：[1] 查看检索式构造指南 / [2] 用自然语言提问 / [3] 重写检索式
Help：—
```

#### T-DE-401 配额已用尽（business + warning + business · 空态 E1 partial）

```
错误码：ERR-DE-401
What：本月查询额度已用完（200/200）
Why：—
Action：[1] 升级到 Pro 版（无限查询）/ [2] 等待下月 1 日重置 / [3] 联系销售延长
Help：sales@medsci-ai.com
```

#### T-DE-001 首次使用（空态 E1 never had data）

```
开始你的第一次循证查询。

DE 将基于 [N] 篇 PubMed 文献 + [M] 个临床指南为你提供带证据的答案；每条结论可验证 [Verify It]。

[查证一下] · [查看 90 秒视频]
```

#### T-DE-601 SourceID 失效（business + warning + clinical-adjacent）

```
错误码：ERR-DE-601
What：参考来源 EVID-2024-0156 已超过复审节奏（> 2 年）
Why：原文献最近复审日期 2024-03，超过临床指南 2 年节奏
Action：[1] 查看替代 SourceID 推荐 / [2] 让医师人工核验 / [3] 提交复审请求
Help：support@medsci-ai.com
```

### 10.3 ERR-SE-* SeekEvidence（4 个）

#### T-SE-101 选题相似度过高（business + warning + business）

```
错误码：ERR-SE-101
What：你的选题与近 2 年已发表论文相似度 85%
Why：检索结果显示 [N] 篇相似主题论文（2024-2026）
Action：[1] 查看选题差异化建议 / [2] 探索子方向 / [3] 调整研究问题
Help：—
```

#### T-SE-201 检索式无结果（validation + info + business · 空态 E4）

```
错误码：ERR-SE-201
What：检索结果为空
Why：当前检索式过于严格（30 个 AND 条件）
Action：[1] 删除部分条件 / [2] 替换为自然语言提问 / [3] 查看检索式构造指南
Help：—
```

#### T-SE-001 首次使用（空态 E1）

```
开始你的研究项目。

SE 将帮你从选题到发表全流程加速：
- AI 检索式构造（PubMed / EMBASE / Cochrane）
- 选题差异化分析
- 草稿一键生成 + PITL 核验

[看看选题] · [构造检索式] · [查看示例项目]
```

#### T-SE-501 文献已撤稿（business + warning + clinical-adjacent）

```
错误码：ERR-SE-501
What：当前选题相关文献 [N 篇] 已被撤稿
Why：[期刊名] 撤稿声明 [日期]
Action：[1] 查看修订后的文献库 / [2] 重新分析选题可行性
Help：—
```

### 10.4 ERR-DI-* DeepInsight（4 个）

#### T-DI-101 KOL 雷达数据滞后（business + warning + business）

```
错误码：ERR-DI-101
What：KOL 雷达数据上次更新 [日期]（> 7 天）
Why：数据源同步延迟
Action：[1] 仍可查看（数据可能不完整）/ [2] 30 分钟后重试
Help：—
```

#### T-DI-301 客户授权过期（permission + error + business）

```
错误码：ERR-DI-301
What：你的"医生数据 API"授权已过期
Why：客户授权 2026-04-30 到期
Action：[1] 联系销售续约 / [2] 查看历史档案（仍可访问）
Help：sales@medsci-ai.com
```

#### T-DI-001 首次使用（空态 E1）

```
配置你的 KOL 雷达。

第一步：选择关注产品 → 第二步：定义 KOL 池 → 第三步：DI 自动追踪
- 意图份额管理（PI Portrait 360）
- Rising Star 识别
- AIO 内容优化建议

[配置雷达] · [查看示例报告]
```

#### T-DI-601 PII 提示（permission + warning + clinical-adjacent）

```
错误码：ERR-DI-601
What：你即将查看的医生信息含 PII
Why：医生执业地址 / 联系方式仅限"医生数据 API"授权用户
Action：[1] 启用 PII 模糊化（推荐）/ [2] 申请完整 API 权限
Help：—
```

### 10.5 ERR-RCP-* Rapid Clinical Pulse（4 个）

#### T-RCP-101 任务发布超额度（business + error + business）

```
错误码：ERR-RCP-101
What：本月 RCP 任务额度已用完（30/30）
Why：—
Action：[1] 升级到企业版（无限任务）/ [2] 等待下月 1 日重置 / [3] 单次任务 [按次付费]
Help：sales@medsci-ai.com
```

#### T-RCP-201 医生池不足（validation + warning + business）

```
错误码：ERR-RCP-201
What：你的目标医生池只有 [12] 位（建议 ≥ 30）
Why：当前筛选条件过于严格（科室 + 城市 + 年限）
Action：[1] 放宽科室到相关 [3 个] / [2] 扩展到周边城市 / [3] 调整资历要求
Help：—
```

#### T-RCP-001 首次使用（空态 E1）

```
发起你的第一次 RCP 任务。

RCP 让你按需触达医生，加速高价值医学任务：
- 临床案例反馈（48 小时获取）
- 处方决策模拟
- AIO 内容医学审核

[发起任务] · [Run a pulse] · [看任务反馈示例]
```

#### T-RCP-501 反馈含撤稿数据（business + warning + clinical-adjacent）

```
错误码：ERR-RCP-501
What：医生反馈中引用了已撤稿研究
Why：医生 [姓] 引用了 [文献标题] · 撤稿日期 [日期]
Action：[1] 查看修订后的反馈 / [2] 联系医生重新反馈
Help：support@medsci-ai.com
```

### 10.6 6 类空态文案（继承 §5）

#### T-EMPTY-NEVER-1 全空（DE 主页）

```
开始你的第一次循证查询。
[查证一下]
```

#### T-EMPTY-CLEARED-1 已清空

```
已清空 12 条历史记录。[撤销] · 30 秒内有效
```

#### T-EMPTY-LOADING-1 加载中

（仅 Skeleton 占位 · 无文字 · 继承 04b §3）

#### T-EMPTY-ERROR-1 错误后空（继承 §10.1 T-COMMON-009）

#### T-EMPTY-OFFLINE-1 离线（继承 §10.1 T-COMMON-003）

#### T-EMPTY-UNAUTH-1 权限不足（permission + warning + business · 空态 E6）

```
错误码：ERR-COMMON-301
What：你当前角色（医生）不能查看团队管理
Why：团队管理权限属于"科室主任"角色
Action：[1] 联系科室主任申请 / [2] 查看自己有权限的功能 / [3] 升级到企业管理员
Help：—
```

---

## 11. 中英协同

### 11.1 默认策略

继承 03 §1.1 决议 #4：

- **CN 主语言**：所有用户可见错误 / 边界 / 空态文案默认 CN
- **EN 内部码**：错误码 / 日志 / 监控保持 EN
- **EN 用户可见文案**：仅在 EN 单语 UI 场景出现（如海外学术合作 UI · 与 03c §10 EN 单语邮件 + 03a §3.3 LinkedIn EN 协同）

### 11.2 CN/EN 文案对照（必须 1:1 等价）

错误码模板必有 CN + EN 两份；语义等价（不允许 CN 详细 EN 简化）。

例：

```
ERR-DE-101
CN：⚠️ PITL 核验未通过；当前结论置信度 65%（建议 ≥ 70%）...
EN：⚠️ PITL Verification Failed; Current confidence 65% (recommended ≥ 70%)...
```

### 11.3 EN 文案规则

EN 错误文案继承 §4 禁忌（如不用 "Oops" / "Internal Server Error" / "Permission Denied"）+ 4 段式结构。

---

## 12. 测试与 Enforcement

### 12.1 错误文案 Lint（CI 集成）

`scripts/lint-error-copy.mjs`（建议落地）：

- 扫描所有 UI 错误文案
- 检测 §4 禁忌措辞（"未知错误" / "系统繁忙" / "Oops" 等）
- 检测 §3 错误码命名规则（前缀 / 编号区段）
- 检测 §2 4 段式结构（critical / error 必含 4 段）

### 12.2 a11y CI（继承 04a §9.2）

- axe-core 检查 aria-live / role="alert" / aria-describedby
- Pa11y 检查焦点跳转
- Lighthouse a11y ≥ 95（继承 04a A7）

### 12.3 临床敏感度审计（季度）

- 法务 + 产品 PM 季度 review
- 抽样 ≥ 100 条 UI 错误文案
- 任何 clinical-critical 文案缺 PITL 提示 / 求助路径 → 立即修复
- 累计违规进入 06 §2.4 紧急修订流程

### 12.4 错误码注册表

所有错误码必须在 `governance/error-codes-registry.md`（待落地）注册：

- 错误码 ID
- 来源 + 严重度 + 临床敏感度
- CN + EN 文案模板
- 触发频率（来自错误监控）
- 法务 review 状态

---

## 13. 14 条发布前自检清单

每次新增 / 修改错误文案前必须 ack 全部 14 条：

- [ ] 1. **错误码命名规则**正确（§3.1 前缀 + §3.2 编号区段）
- [ ] 2. **CN 用户可见 + EN 内部码**双轨完整（§3.3）
- [ ] 3. **三维分类**清晰（来源 + 严重度 + 临床敏感度 · §1）
- [ ] 4. **4 段式**完整（What / Why / Action / Help · §2.1）—— info / cosmetic 可豁免
- [ ] 5. **不含 §4 禁忌措辞** 18 项任一
- [ ] 6. **临床敏感度 critical** → 含 PITL 核验提示 + L3 hotline（§6.1 + §8.2）
- [ ] 7. **撤稿告警** → 全屏阻塞 + R1 邮件触发（§6.2 + 03f §3.4）
- [ ] 8. **空态分类**正确（E1-E6 · §5）+ 必含元素满足
- [ ] 9. **a11y 满足** aria-live / role / 焦点 / 触控 44×44 / 不依赖颜色（§7.1）
- [ ] 10. **动效** 三冗余 + Toast 滞留 + reduce-motion 兜底（§7.2）
- [ ] 11. **求助路径**对应严重度（§8.2）
- [ ] 12. **跨产品**用 ERR-COMMON 而非各自重复（§9.2）
- [ ] 13. **错误监控** 接入（§9.3 / §12.4 错误码注册表）
- [ ] 14. **CI lint 通过**（§12.1 错误文案 lint + §12.2 a11y CI）

---

## 14. 决策权矩阵 + CHANGELOG

### 14.1 决策权（继承 06 §3）

| 决策类型 | 决策者 |
|---|---|
| 错误分类（§1 三维矩阵）调整 | 产品 + Tech Lead 双签（minor 升版）|
| 临床敏感度阈值（§1.4）调整 | **法务** + 产品 + 临床顾问三签（minor）|
| 4 段式结构例外 | 市场 + Tech Lead 双签 |
| 禁忌措辞清单（§4）扩充 | 市场 + 法务双签（监管邻接）|
| 空态分类扩充（§5）| 产品 + UX 双签 |
| 临床场景特殊处理（§6）调整 | **法务** + 临床顾问 + Sponsor 三签 |
| 错误码命名空间（§9.1）变更 | Tech Lead + Sponsor 双签 |
| 模板库新增模板 | 市场 + Tech Lead + 法务三签 |
| 错误码注册（§12.4）| Tech Lead 单签（已模板化前提下） |

### 14.2 与已签 spec 的协同

- 不修改 03 §1.1 决议 #4（CN 用户可见 / EN 代码层）—— 本子文档**实施细化**
- 不修改 04a §4 aria 规范 / §3 焦点 / §2.3 不依赖颜色 / §5 触控 —— 本子文档**协同引用**
- 不修改 04b §6.4 三冗余 / §7.2 Toast 滞留 / §9 错误克制 —— 本子文档**协同引用**
- 不修改 03f §3.4 撤稿响应铁律 —— 本子文档**实施细化** UI 层呈现
- 不修改 03c §9 撤稿响应邮件模板 —— 本子文档**触发 R1**

任何冲突以已签 spec 为准（继承 §0.3 优先级）。

---

## CHANGELOG

### v0.2 — 2026-05-08（三签升版完成）

- 经 **C Yang（市场负责人）+ ZL Chen（Tech Lead）+ Bruce Chen（法务）** 于 **2026-05-08** 三签（`governance/v0.3-tri-batch-review-packet.md` §12 签字栏；Sponsor Yog 同日流程留痕）
- 升版判定：minor（v0.1 → v0.2 · voice 层 v0.3 升版完整闭环）· 按 06 §2.1 + §2.2 流程
- 本版相对 v0.1 无源条款变更（仅升版号 + 签字留痕）
- 后续工作（30-60 天）：`scripts/lint-error-copy.mjs` 落地 + `governance/error-codes-registry.md` 创建 + 错误监控接入（Sentry / 自建）+ 错误码迁移（如适用）+ react v0.2.0 错误反馈 patch（与 a11y + motion 一起）

### v0.1 — 2026-05-08（初稿）

- 初版起草
- §0 适用范围（覆盖 UI 错误 / 警告 / 边界 / 空态 / 临床特殊态 / 系统降级；不覆盖代码层错误码 / 后端异常 / 印刷品 / 动效视觉）
- §1 错误分类三维矩阵（来源 6 类 × 严重度 4 级 × **临床敏感度 4 级** · 后者为本子文档核心特异维度 + 4 产品默认值）
- §2 文案 4 段式结构（What / Why / Action / Help · 简化例外）
- §3 错误码命名规则（ERR-COMMON / ERR-DE / ERR-SE / ERR-DI / ERR-RCP × 编号区段 9 段 + CN 用户可见 + EN 内部码双轨）
- §4 18 项禁忌措辞（含临床场景额外 4 项 · 监管邻接）
- §5 空态 6 子类（E1 never / E2 cleared / E3 loading / E4 error / E5 offline / E6 unauthorized）
- §6 **临床场景特殊处理**（PITL 核验 + 撤稿告警全屏阻塞 + confidence 阈值 + SourceID 失效）
- §7 a11y + 动效协同（继承 04a / 04b · 不重复定义）
- §8 求助路径 3 级（L1 自助 / L2 客户支持 / L3 紧急 hotline + 工单自动创建）
- §9 跨产品协同（DE/SE/DI/RCP 命名空间 + ERR-COMMON 共享 + 错误监控）
- §10 **30 个核心模板库**（10 共享 + 6 DE + 4 SE + 4 DI + 4 RCP + 6 空态 · 每模板 4 段式 + 错误码）
- §11 中英协同（CN 主版 + EN 内部码 + EN 用户可见对照）
- §12 测试 + lint + CI（错误文案 lint 脚本 + a11y CI 集成 + 季度临床审计 + 错误码注册表）
- §13 14 条发布前自检清单
- §14 决策权矩阵 + 与已签 spec 协同
- 待办：
  - v0.2 三签（市场 + Tech Lead + 法务）
  - `scripts/lint-error-copy.mjs` 落地（§12.1）
  - `governance/error-codes-registry.md` 落地（§12.4）
  - 与 03c v0.1 合并 voice 层 v0.3 双签批次（市场 + 法务双签 03 §10 子文档清单升版；03d 涉工程实施需 Tech Lead 加签）
- 同步：本次未运行 `scripts/sync-docs.mjs`；正式合入前请重跑同步以更新 VitePress 构建产物
- 协同：本批次锁定后建议与 03c 邮件模板（v0.1 候选）合并升版批次；03d 涉工程实施所以三签（与 04 批次三签结构一致）；03c 是双签——批次签字组合需协调
