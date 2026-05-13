# 梅斯健康 AI Brand Kit · NPM Package SemVer & Release Policy v0.2

**承接**：`06-governance.md` §1（品牌包版本号规则）+ §2（变更流程）+ §5.4（NPM 私包发布规程）+ `react/package.json`（`@yogyoung-code/ai-brand-kit` v0.1.0）+ `04a/04b/04c-*` v0.2 已签（含 react 包 v0.2.0 升级路径任务）。
**作用**：本文档是 06 治理在 **NPM 包发布维度**的执行手册——给前端 / 工程 / Tech Lead 一份"NPM 包语义化版本如何与品牌包文档版本映射 / 何时升 major / 客户依赖如何被保护 / 回滚怎么做"的统一规则。
**主要使用者**：Tech Lead / 前端工程 / DevOps / Sponsor（major bump 决策）。
**优先级**：06 主文档 §1 / §2 / §5.4 始终优先；本文档仅在"NPM 包发布维度"做附加约束。

---

## 0. 适用范围与边界

### 0.1 覆盖

本文档覆盖 **`@yogyoung-code/ai-brand-kit` NPM 包**（及其 MSH org 迁移后的 `@medsci/ai-brand-kit`）的：

- NPM 包语义化版本（SemVer 严格定义 + MAJOR / MINOR / PATCH 升版触发条件）
- 品牌包文档版本（v1.0 / v1.1）与 NPM 包版本的**双轨映射规则**
- Breaking change 分类与判定（API / token / peer dep / 视觉 / a11y / 图像）
- Deprecation 周期（标记 → 警告期 → 移除）
- Prerelease 策略（alpha / beta / rc / next）
- 发布流程（含 CI / 半自动发布原则 + 审计 trail）
- 回滚规程（deprecate / unpublish 边界）
- 客户接入指南（peer 锁定 / 升级路径 / 跳级升级）
- 依赖治理（peer / dev / transitive / 安全扫描）
- 未来多包策略预留
- MSH org 迁移升 major 锁定

### 0.2 不覆盖

- **品牌包文档版本规则**（v1.0 / v1.1）—— 已在 06 §1 锁定；本文档仅定义"文档版本变更如何触发 NPM 版本变更"
- **GitHub Packages registry 配置 / PAT / .npmrc**—— 已在 06 §5.4 锁定
- **MSH org 迁移规程的细节**—— 已在 06 §5.4 锁定；本文档仅定义"迁移 = major bump"
- **品牌包架构层重构**（如 branded house 模型变更）—— 06 §1 / §2.3 major 升版流程
- **下游产品（DE / SE / DI / RCP）的 SemVer**—— 各产品自管；本文档仅管 brand kit 包

### 0.3 优先级层级

冲突时按以下顺序裁决：

1. 06 §1 / §2 / §5.4（治理铁律）
2. 04 / 04a / 04b / 04c 视觉系统 spec（视觉 / a11y / 动效 / 图像）
3. 03 / 03a / 03e / 03f voice 层 spec
4. 本文档（NPM 发布维度）

---

## 1. NPM 包与品牌包文档版本的双轨映射规则

### 1.1 两套版本号并存

| 维度 | 当前值 | 规则 | 来源 |
|---|---|---|---|
| **品牌包文档版本** | v1.0（2026-05-05 锁定）| v[major].[minor]，如 v1.0 / v1.1 / v2.0 | 06 §1 |
| **NPM 包版本** | v0.1.0 | 严格 SemVer：MAJOR.MINOR.PATCH | 本文档 §2 |

两套版本号**独立递增**，但变更触发存在**单向触发关系**（详见 §4 双向矩阵）。

### 1.2 当前对齐状态（2026-05-08 锁定）

```
品牌包文档版本：v1.0
NPM 包版本：    v0.1.0

→ NPM v0.x.x 阶段对应品牌包"早期发布期"
→ NPM v1.0.0 = 品牌包文档版本进入稳定期 + 客户首次正式依赖
→ NPM major bump（v1 → v2）= 通常对应品牌包 major（v1 → v2）；但反之不必然
```

### 1.3 v0.x.x → v1.0.0 升级触发

NPM 包从 v0.x.x 升入 v1.0.0 必须满足以下**全部**条件：

- [ ] 品牌包文档版本至少 v1.0（已满足）
- [ ] react 包至少经过一次 production 部署（首次发布演练完成）
- [ ] react 包至少有 1 个外部消费方（DE / SE / DI / RCP 任一产品已 import）
- [ ] CI 集成完成（a11y CI · packet §10.2 后续任务）
- [ ] 04 批次 v0.2 三签后续 react 包升级（v0.2.0 a11y + motion patch）已稳定 ≥ 30 天
- [ ] 无遗留高危 deprecation 警告

未满足前 v0.x.x 阶段不视为公共 API 稳定承诺；breaking change 在 v0.x.x 内可走 minor 升版（如 v0.1.0 → v0.2.0）而非 major。

---

## 2. SemVer 严格定义

### 2.1 MAJOR.MINOR.PATCH

```
v[MAJOR].[MINOR].[PATCH][-prerelease]

例：
v0.1.0          # 当前
v0.2.0          # 04 批次后续 react 包 a11y + motion patch（v0.x.x 内可破坏性升级）
v1.0.0          # 进入稳定期（满足 §1.3 全部条件）
v1.0.1          # bug fix（不改 API / 不改视觉 token）
v1.1.0          # 新增组件 / 新增 token / 向后兼容
v2.0.0          # 破坏性升级
v1.1.0-beta.1   # 1.1.0 的 prerelease
v1.1.0-rc.1     # release candidate
```

### 2.2 升版触发条件（v1.0.0 之后）

| 升版类型 | 触发条件 | 签字门槛 | 示例 |
|---|---|---|---|
| **PATCH**（v1.0.0 → v1.0.1）| 不破坏 API + 不改视觉 token + 不改 a11y 行为 + 仅 bug fix / 性能改进 / 文档修订 | Tech Lead 单签 | 修复 `<DiffView>` 在 Safari 下空格渲染 bug |
| **MINOR**（v1.0.0 → v1.1.0）| 新增组件 / 新增 token / 新增 props（向后兼容默认值）/ deprecation 标记 / 性能优化 | Tech Lead + Sponsor 双签 | 新增 `<NudgeBanner />` 组件；新增 `--de-secondary` token |
| **MAJOR**（v1.x.x → v2.0.0）| 任一 §3 breaking change 清单条目 | **三签**（Tech Lead + Sponsor + 涉及域专项审核：a11y → 法务 / 视觉 → 市场） | 移除 `<Hippocrates>`（已禁内部代号）/ 修改 endorsement 色 / peer React 18 → 19 only |

### 2.3 v0.x.x 内部规则（早期发布期）

v0.x.x 阶段尚未进入稳定承诺：

- 任何变更（含 breaking）走 MINOR 升级（v0.1.0 → v0.2.0）
- PATCH（v0.1.0 → v0.1.1）仅用于纯 bug fix
- 客户接入说明必须明确："v0.x.x 阶段不保证 API 稳定；建议精确锁定版本号 `^0.1.0` ❌ → `0.1.0` ✓"

---

## 3. Breaking Change 分类（升 MAJOR 触发清单）

任一以下变更即触发 MAJOR 升级（v0.x.x 内可降为 MINOR；v1.x.x 后必须 MAJOR）：

### 3.1 API 层（组件 / Hook / 工具函数）

| # | 变更类型 | 示例 |
|---|---|---|
| A1 | 移除 export 的组件 / Hook / 工具函数 | 移除 `<Hippocrates>` |
| A2 | 重命名 export | `<PITLBadge>` → `<PhysicianVerifiedBadge>` |
| A3 | props 必填项移除或语义改变 | `<DiffView>` 的 `before` 改为必填 |
| A4 | props 默认值改变（影响视觉） | `<Disclosure defaultExpanded>` 默认 `'L1'` → `'L1+L2'`（注：04 §6.4 已正式定义 `'L1+L2'` 为移动端默认；v0.x.x 内可不升 major）|
| A5 | 事件回调签名改变 | `onChange(value)` → `onChange(value, meta)` |
| A6 | TypeScript 类型导出变更（删除 / 重命名）| 删除 `export type ProductScope` |
| A7 | exports 字段变更（导入路径变） | `import { PITL } from '@kit/trust'` 路径不可用 |

### 3.2 Token 层（CSS 变量）

| # | 变更类型 | 示例 |
|---|---|---|
| A8 | 删除已发布的 CSS 变量 | 移除 `--de-primary` |
| A9 | 已发布 CSS 变量值变更**且** 视觉感知差异 ≥ ΔE 3.0 | `--endorsement-color` `#666666` → `#888888` |
| A10 | token 命名空间变更 | `--de-primary` → `--brand-de-primary` |

**视觉调整微变**（ΔE < 3.0）走 PATCH；视觉决策档案档案需引用。

### 3.3 视觉系统层（与 04 / 04a / 04b / 04c 协同）

| # | 变更类型 | 示例 |
|---|---|---|
| A11 | endorsement signature 颜色 / 字体 / 排版规则变更 | `#666666` → `#444444`（已锁 06 §3 决策权 = Sponsor）|
| A12 | 信任徽章几何变更（药丸 / 折角文档 / 盾形）| AIO 改回印章+虚线 |
| A13 | RCP 贯穿横线粗细 / 位置 / z-index 变更 | 0.09em → 0.12em |
| A14 | dot-spiral 母题数学定义变更（间距 / stroke / 形态）| 04c §3.1 §C7 改动 |

### 3.4 a11y 层（与 04a 协同）

| # | 变更类型 | 示例 |
|---|---|---|
| A15 | 触控目标尺寸下调（44×44 → 32×32）| ❌ 永远不允许 |
| A16 | 默认 aria-label / role / aria-expanded 行为变更 | `<PITLBadge>` 不再带 `role="img"` |
| A17 | prefers-reduced-motion 兜底逻辑改变（影响动效降级）| CoT 在 reduce 模式下不保留 5 圆点稳态 |
| A18 | 对比度阈值降级（不依赖颜色 → 依赖颜色）| ❌ 永远不允许 |

### 3.5 Peer Dependency

| # | 变更类型 | 示例 |
|---|---|---|
| A19 | React peer 版本范围收紧 | `^18.0.0 \|\| ^19.0.0` → `^19.0.0` only |
| A20 | 新增必需 peer dep | 加入 `framer-motion@^11` 为 required peer |
| A21 | Node engines 版本下界提升 | `>=18` → `>=20` |

### 3.6 图像政策层（与 04 §7 / 04c 协同）

| # | 变更类型 | 示例 |
|---|---|---|
| A22 | 04 §7 红线变更（FTC AI 医学影像 / stock photo / emoji 等）| 永远不允许放松；如收紧仍走 major（影响下游使用范式）|
| A23 | 临时素材库 schema 变更（INTERIM-YYYY-NNNN）| schema 字段重命名 |

### 3.7 包层

| # | 变更类型 | 示例 |
|---|---|---|
| A24 | **包名变更**（`@yogyoung-code/ai-brand-kit` → `@medsci/ai-brand-kit`） | MSH org 迁移（详见 §12）|
| A25 | License 类型变更 | UNLICENSED → MIT |
| A26 | 默认 export 移除 | export default 改为命名 export |
| A27 | dist 模块格式移除 | 移除 cjs 仅留 esm |

---

## 4. 品牌包文档变更触发 NPM 版本的双向矩阵

**核心原则**：品牌包文档变更**不必然**触发 NPM 版本变更；只有当文档变更**翻译为代码 / token / 资产**时才触发。

### 4.1 文档变更类型 × NPM 触发矩阵

| 品牌包文档变更 | 是否触发 NPM 版本变更？| NPM 升版类型 | 示例 |
|---|---|---|---|
| **voice 层修订**（03 / 03a / 03e / 03f 文案规则）| **不触发** | — | 03f §3.4 媒体兜底 24h → 3 工作日 |
| **voice 层禁词清单扩充**（仅文档）| **不触发** | — | 03 §6 加 10 个禁用词 |
| **架构层 02 锁定决策**（仅文档）| **不触发** | — | DI 主色锁定 |
| **04 §7 图像政策**（仅文档）| **不触发**（除非翻译为代码 placeholder 检测）| — | FTC 红线扩展 |
| **04a a11y 规则新增**（无对应组件改动）| **不触发** | — | 新增"侧边面板键盘陷阱"规则但组件已支持 |
| **04a a11y 规则新增**（需改组件 props / 行为）| **触发** | MINOR（新增 props 默认值兼容）/ MAJOR（默认行为改变）| `<DiffView>` 加 `aria-live` 默认值 |
| **04b motion tokens 注入**（B10 任务）| **触发** | MINOR | ai-tokens.css 加 4 ease + 4 duration |
| **04c 摄影插画规则**（仅文档）| **不触发**（除非临时素材库 schema 变更）| — | dot-spiral 母题 7 维细化 |
| **临时素材库 schema 变更** | **触发** | MAJOR（A23）| INTERIM-YYYY-NNNN → INTERIM-YYYY-AA-NNNN |
| **新增信任徽章组件** | **触发** | MINOR | 新增 `<ETHBadge>`（伦理在回路）|
| **现有徽章几何变更** | **触发** | MAJOR（A12）| AIO icon 重设计 |
| **品牌包 v1.0 → v1.1 minor 升版**（双签）| **不必然触发**——视实际代码改动；常见 MINOR | MINOR / 无 | 加新产品矩阵但暂不出组件 |
| **品牌包 v1.x → v2.0 major 升版**（三签）| **必然触发** | MAJOR（强约定）| 加入第 5 个产品 |

### 4.2 反向触发（NPM 版本变更回溯文档）

NPM 版本变更**也可能**回溯触发文档变更（"代码先行"场景）：

- NPM PATCH（bug fix）→ 不动文档（除非 fix 揭示了文档错误，再走 06 §2.1 双签修订流程）
- NPM MINOR（新增组件）→ 04 §11 子文档清单新增条目（按 06 §2.1 双签）；04a / 04b 加对应 a11y / 动效条款
- NPM MAJOR → 必触发 06 §2.3 major 升版三签（涉品牌包架构）

### 4.3 触发判定速查表

```
品牌包文档改 → 看是否动 react/src/ 或 ai-tokens.css 或 react/dist/assets/
  ├─ 是 → 触发 NPM 版本（按 §3 分类）
  └─ 否 → 不触发；仅升文档版本（按 06 §1 / §2.1）

NPM 版本改 → 看是否对应文档规则
  ├─ 文档已覆盖 → 升 NPM 版本即可（CHANGELOG 引用文档章节）
  └─ 文档未覆盖 → 同步升文档（06 §2.1 双签）
```

---

## 5. Deprecation 周期

### 5.1 流程（必经阶段）

```
T+0:   标记 deprecated（component prop / API / token）
       ├─ 代码层加 @deprecated JSDoc 标注 + console.warn 一次性提示
       ├─ CHANGELOG 在当前 minor 版本下记录"v1.x.0 deprecated [X]"
       └─ 文档层加 ⚠️ deprecation banner

T+1 minor: 警告期延续（≥ 1 个 minor 版本）
           ├─ 不可在同一 minor 内移除（即使紧急）
           └─ 客户至少有 1 个 minor 周期可迁移

T+2 minor: 可移除（升 MAJOR）
           ├─ CHANGELOG 在 v2.0.0 记录"v2.0.0 removed [X]，使用 [Y] 替代"
           └─ Migration guide 必须随 v2.0.0 发布
```

### 5.2 紧急 deprecation（监管 / 安全）

监管事故 / 安全漏洞触发的紧急 deprecation 走 06 §2.4 紧急修订流程（24h Market+Legal 旁路 + 事后补 RFC）；**可在 PATCH 内移除 deprecated 项**，但需：

- 事前 notification（GitHub release note + #brand-updates 紧急通知）
- 事后补 v0.2.1 patch 案例库 + 06 §2.4 三签留痕

### 5.3 不允许 deprecation 缩短场景

- a11y 行为（A15 / A18 永远不允许放松）
- 法务必经流程（03f 实证 / 03a 真人医生 8 条护栏 / 04c FTC 红线）

---

## 6. Prerelease 策略

### 6.1 标签使用规则

| 标签 | 用途 | 受众 | 升版示例 |
|---|---|---|---|
| **alpha** | 内部尝鲜；API / 视觉随时变 | 仅 brand kit team + 1–2 早期接入产品 | v1.1.0-alpha.1 |
| **beta** | 半公开；API 趋稳但仍可能调 | DE / SE / DI / RCP 全部产品 lead | v1.1.0-beta.1 |
| **rc** | release candidate；除非发现关键 bug 否则 = 正式版 | 全部下游 + Tech Lead 三方 review | v1.1.0-rc.1 |
| **next** | rolling tag；最新预发布 | CI / 自动化测试用 | v1.1.0-rc.1（即 dist-tag = next）|

### 6.2 dist-tag 管理

```bash
# 发布预发布版本（不打 latest 标签）
npm publish --tag beta
npm publish --tag rc

# 客户安装预发布
npm install @yogyoung-code/ai-brand-kit@beta
npm install @yogyoung-code/ai-brand-kit@next

# 升 latest（仅正式版 / 经 §2.2 签字门槛通过）
npm dist-tag add @yogyoung-code/ai-brand-kit@1.1.0 latest
```

### 6.3 prerelease 必经步骤

- alpha → beta：至少 1 个 beta tester 反馈
- beta → rc：至少 1 周 beta 期 + 0 critical issue
- rc → 正式：至少 3 天 rc 期 + 全部 §2.2 签字完成

---

## 7. 发布流程 + CI / 半自动发布原则

### 7.1 总原则

**半自动发布**：CI 完成构建 + 测试 + 校验 + dry-run；**最终 `npm publish` 由人工触发**（不放进 GitHub Actions 自动跑）。

理由：

- 完全自动化发布 → 一旦 CI 配置错误（如 secret 泄露 / 错版本号 tag）→ 即时影响所有客户
- 半自动 → CI 把所有验证做完，发出 review note，由 Tech Lead 在本地一键 publish + git push tag
- 审计 trail → 每次 publish 必有人工 sign-off（Tech Lead 用工作账号执行 `npm publish`）

### 7.2 发布 SOP（标准流程）

```bash
# Step 1 — 同步源码到主分支
cd /Users/yogyoung/Documents/EvidenceTech-Brand-Package/EvidenceTech-Brand-Package
git checkout main && git pull

# Step 2 — react 包重装 + 构建
cd react
rm -rf node_modules package-lock.json dist
npm install
npm run build

# Step 3 — 升版（按 §2.2 签字门槛通过后）
npm version patch              # 或 minor / major
# npm version 会自动改 package.json + 创建 git tag

# Step 4 — dry-run 校验
npm publish --dry-run --registry=https://npm.pkg.github.com
# 检查 .tgz 包内容、files 字段、exports 路径

# Step 5 — 真发布（Tech Lead 工作账号）
npm publish --registry=https://npm.pkg.github.com

# Step 6 — 推送 git tag
git push origin main --follow-tags

# Step 7 — 验证
npm view @yogyoung-code/ai-brand-kit --registry=https://npm.pkg.github.com

# Step 8 — release note
# 在 GitHub Release 页发布 release note（引用 §2.2 签字记录 + CHANGELOG）
```

### 7.3 CI 自动化范围（GitHub Actions）

CI 应做但**不做** publish 的：

- [ ] PR 触发：build + typecheck + axe-core CI（packet §10.2）
- [ ] tag 推送触发：自动跑 `npm publish --dry-run` + `npm pack` + 校验产物大小 / 文件清单 / exports 解析
- [ ] tag 推送触发：自动生成 release note 草稿（GitHub Releases · draft mode）
- [ ] tag 推送触发：通知 Tech Lead "ready to publish"（Slack / email）

CI **绝不**做：

- ❌ 真正 `npm publish`
- ❌ 自动 `npm version` 升版
- ❌ 自动 dist-tag 切换 latest

### 7.4 校验清单（每次 publish 前 Tech Lead 走完）

- [ ] **§2.2 签字门槛通过**（patch TL 单签 / minor TL+Sponsor / major 三签）
- [ ] **CHANGELOG 已写**（含本版本 breaking changes 列表 + migration guide 链接 if major）
- [ ] **`package.json` 不含 `"private": true`**（含此字段时 npm 拒绝任何 publish；与 `publishConfig.access: "restricted"` 本质冲突——`access: restricted` 才是"私有发布"正确表达；`private: true` = "永不发布"）
- [ ] **`publishConfig.registry`** 锁定 `https://npm.pkg.github.com`（防止误发到公网 npm registry · 第一道防线）
- [ ] **`publishConfig.access`** 锁定 `"restricted"`（GitHub Packages 上仅授权用户可拉 · 第二道防线）
- [ ] **dry-run 输出包含期望文件**（dist/* + README.md + package.json，27 个 entry · 不含 src/* / scripts/* / tsconfig.json / .npmignore 已生效）
- [ ] **包大小未异常增长**（baseline v0.1.0 = **packed 1.0 MB / unpacked 3.3 MB**；增长警戒线 = packed > 1.2 MB 或 unpacked > 4 MB → 触发 §11.3 拆包评估）
  - 注：90% 体积来自 12 SVG 母品牌资产（每个 ~246 KB）；后续如新增组件主要影响 dist/index.* 而非 assets/，正常增长应 < 20%
- [ ] **peer deps 仍兼容**（React 18 + 19 双兼容）
- [ ] **engines 仍声明** Node ≥ 18
- [ ] **exports 字段** 全部子路径可解析（baseline = 9 条：. + ./styles.css + ./tokens + ./assets/master-brand/*.svg + ./package.json）—— 用 §7.5 校验脚本
- [ ] **主入口 require 健康**（baseline = `dist/index.cjs` 39 exports / `dist/tokens.cjs` 11 exports；偏差 ± 1 内可接受，更大须 changelog 解释）
- [ ] **dist/styles.css** 已包含 ai-tokens 全部变量（baseline = 14.8 KB）
- [ ] **dist/assets/master-brand/** 12 SVG 已 copy（default / mono-black / mono-navy / reverse × en / cn / full）
- [ ] **a11y CI pass**（axe-core 0 critical / 0 serious / Lighthouse ≥ 95）
- [ ] **typecheck 0 error**（`npx tsc --noEmit`）
- [ ] **demo build 通过**（react/demo/index.html 仍可加载）
- [ ] **VitePress build 通过**（docs/ 仍可构建）

### 7.5 exports 解析校验脚本（建议加入 CI）

```js
// scripts/verify-exports.mjs（建议落地）
import pkg from '../package.json' assert { type: 'json' };
import fs from 'fs';
import path from 'path';

const root = path.dirname(new URL(import.meta.url).pathname);
const issues = [];

function check(p, label) {
  const full = path.join(root, '..', p.replace('./', ''));
  const exists = p.includes('*')
    ? fs.existsSync(path.dirname(full))
    : fs.existsSync(full);
  issues.push({ path: p, label, exists });
}

for (const [k, v] of Object.entries(pkg.exports)) {
  if (typeof v === 'string') check(v, k);
  else for (const [cond, p] of Object.entries(v)) check(p, `${k}:${cond}`);
}

const failed = issues.filter(x => !x.exists);
console.table(issues);
if (failed.length) {
  console.error(`❌ ${failed.length} exports failed to resolve`);
  process.exit(1);
}
console.log('✓ exports 全部解析成功');
```

### 7.6 沙盒环境限制（重要）

本品牌包仓库通过 Cowork 沙盒挂载 → **沙盒内 react/node_modules 是只读 mount**；无法在沙盒内跑 `rm -rf node_modules + npm install` 重装演练。

**含义**：

- 沙盒可做：`npm publish --dry-run` / `npm pack --dry-run` / `npx tsc --noEmit` / exports 解析校验 / require 健康检查 / demo build verification
- **沙盒不可做（必须 Tech Lead 本地）**：
  - 清理 + 重装（lockfile 重生成）
  - 真正 `npm publish`
  - `npm version` 自动 git tag

**SOP 调整**：§7.2 第 2 步（重装 + build）必须在 Tech Lead 本地工作站执行；CI runner 也需是真实 Linux/macOS 环境（GitHub Actions hosted runner 即可）。

---

## 8. 回滚规程

### 8.1 已发布版本的处理边界

| 场景 | 动作 | 备注 |
|---|---|---|
| **发布后发现 bug 但无安全影响** | **不回滚**——发布 PATCH 修复（v1.1.0 → v1.1.1） | NPM 不鼓励 unpublish；已被客户依赖的版本不能凭空消失 |
| **发布后发现 a11y 倒退** | **deprecate 该版本** + 发布 PATCH 修复 + #brand-updates 通知 | `npm deprecate @kit@1.1.0 "见 v1.1.1 · a11y regression"` |
| **发布后发现 license / 合规事故**（如误打包客户授权 case 照片） | **24h 内 unpublish + 紧急修订** + 法务介入 | 走 06 §2.4 紧急修订流程；GitHub Packages 允许 24h 内 unpublish |
| **prerelease 版本（alpha / beta / rc）发现重大问题** | **可 unpublish**（无客户正式依赖）+ 升下一个 prerelease | beta.1 → beta.2，重写 |

### 8.2 unpublish 边界

GitHub Packages（NPM 协议）规则：

- 已发布 ≤ 24h：可 unpublish
- 已发布 > 24h：仅可 deprecate，不可 unpublish
- 已被任何依赖方安装：不可 unpublish（即使 ≤ 24h）

→ **本文档红线**：除非合规事故（含个人信息泄露 / FTC 违规 / 客户授权违约），**永远不 unpublish**；只 deprecate + 发新 patch。

### 8.3 回滚通知规范

任何 deprecate / unpublish 必须：

- [ ] T+0 #brand-updates 紧急通知（含原因 + 修复版本号 + 客户行动指南）
- [ ] T+0 DE / SE / DI / RCP 工程团队 lead 邮件
- [ ] T+1 GitHub Release 页面更新原 release note（加红色 ⚠️ Deprecated banner）
- [ ] T+7 Audit trail 入库（实证库工具 / 03f §6.1 复用）

---

## 9. 客户接入指南

### 9.1 版本锁定建议

| 客户类型 | 推荐锁版策略 | 示例 |
|---|---|---|
| **同公司内部产品（DE / SE / DI / RCP）** | 精确版本号（v0.x.x 阶段）/ caret（v1.x.x 阶段）| `"@yogyoung-code/ai-brand-kit": "0.1.0"`（v0）/ `"^1.1.0"`（v1）|
| **外部合作伙伴 / 客户授权使用** | 永远精确版本号（避免意外升级）| `"@yogyoung-code/ai-brand-kit": "1.1.0"` |
| **CI / 测试环境** | 使用 `npm install --save-exact` | `package-lock.json` 必 commit |

### 9.2 升级路径

| 升级路径 | 流程 |
|---|---|
| **PATCH 升级**（v1.1.0 → v1.1.1）| `npm update`；无需手动测试；可自动化 |
| **MINOR 升级**（v1.1.0 → v1.2.0）| 阅读 CHANGELOG；本地构建测试；推到 staging；监控 24h；推 prod |
| **MAJOR 升级**（v1.x → v2.0）| 阅读 CHANGELOG + Migration Guide（必随 v2.0.0 发布）；分阶段升级（先 1 个产品试点 → staging 1 周 → 全量）|
| **跳级升级**（v1.0 → v3.0）| 不推荐；先升 v1.0 → v2.0（按 v2 migration），再 v2.0 → v3.0 |

### 9.3 跳级升级警告

```
⚠️ 跳级升级（如 v0.1.0 → v1.0.0）必须：
   1. 阅读所有中间 MAJOR 的 Migration Guide
   2. 在 staging 环境完整跑一遍每个中间 MAJOR 的迁移步骤
   3. 不允许在 prod 直接 pin 到目标版本而跳过中间版本的兼容性测试
```

### 9.4 客户支持窗口

| 版本类型 | 支持窗口 | 备注 |
|---|---|---|
| **当前 latest**（如 v1.2.x）| 完整支持（bug fix + 安全 patch） | 最长 |
| **n-1 minor**（如 v1.1.x）| 6 个月仅安全 patch | 鼓励升级 |
| **n-2 及更早**（如 v1.0.x）| 不再支持；仅历史归档 | 客户应升级 |
| **任一 prerelease**（alpha / beta / rc）| 不支持；replaceable any time | 仅尝鲜 |

---

## 10. 依赖治理

### 10.1 Peer Dependencies

| Peer dep | 当前范围 | 升级策略 |
|---|---|---|
| `react` | `^18.0.0 \|\| ^19.0.0` | 双兼容；React 18 EOL（约 2027）后再讨论 React 19 only |
| `react-dom` | `^18.0.0 \|\| ^19.0.0` | 同上 |

新增必需 peer dep = MAJOR（A20）；新增 optional peer dep = MINOR。

### 10.2 Dev Dependencies

| Dev dep | 当前范围 | 维护节奏 |
|---|---|---|
| `tsup` | `^8.3.0` | 季度评估升级；MAJOR 升级走 PATCH（不影响产物时）/ MINOR（影响产物或新功能）|
| `typescript` | `^5.6.0` | 跟随官方稳定版；MAJOR 升级评估对 .d.ts 影响 |
| `@types/react` / `@types/react-dom` | `^18.3.0` | 跟随 React peer 范围 |

### 10.3 Transitive Deps + 安全扫描

| 工具 | 节奏 | 阈值 |
|---|---|---|
| `npm audit` | 每次 PR + 每周一次 cron | 0 critical / 0 high；moderate ≤ 5 跟踪 |
| `npm outdated` | 每月一次 | 至少 90% deps 在最新 minor 内 |
| Dependabot / Renovate | 持续运行 | 自动 PR 升级 |

### 10.4 SBOM（软件物料清单）

```bash
# 每次发布前生成 SBOM 入库
npm sbom --sbom-format=cyclonedx > sbom-v1.1.0.json
```

SBOM 入库到 03f §6.1 实证库工具（与 a11y CI / 撤稿响应 trail 同基础设施复用）；保留 7 年（HKEX 上市公司文件保留要求）。

### 10.5 License 合规

react 包当前 `UNLICENSED` + `private: true` + GitHub Packages restricted access。任何 transitive dep 含 GPL-3 / AGPL / SSPL 等 viral license 必须：

- [ ] 法务 review 兼容性
- [ ] 不静态打入 dist/（仅 dev-time 工具可接受）

---

## 11. 未来多包策略预留

### 11.1 当前形态（v0.x.x / v1.x.x 单包）

```
@yogyoung-code/ai-brand-kit
└── 全部内容（tokens + icons + trust + content + logo + master-brand）
```

简单、单一发布节奏、无 cross-package 依赖管理负担。

### 11.2 未来候选拆分（v2 评估）

```
@medsci/ai-brand-tokens         # 仅 CSS 变量 + 设计 token
@medsci/ai-brand-icons          # 仅 SVG icons（含母品牌 logo）
@medsci/ai-brand-react          # 仅 React 组件（依赖前两包）
@medsci/ai-brand-master-brand   # 母品牌资产（独立发布）
```

### 11.3 拆分触发条件（任一即评估）

- 客户报告 "只想要 token，不想要 React" → 单包过重
- React 包频繁升级 / token 稳定 → 升级节奏不匹配
- **主包 packed ≥ 1.2 MB 且 90%+ 体积是 SVG / 二进制资产**（baseline v0.1.0 = 1.0 MB packed / 3.3 MB unpacked，已接近触发线）
- 母品牌资产 ≥ 5 MB / 影响 npm install 速度
- 进入 v2.0+ 阶段且品牌包文档版本同步进入 v2

→ **当前状态**：v0.1.0 已接近 packed 1.2 MB 触发线（1.0 MB），主要源于 12 SVG 母品牌资产打包入主 dist；建议在下一次 minor 升版前**评估**是否启动 `@medsci/ai-brand-master-brand` 拆包（v2.0.0 + MSH org 迁移时同步执行 · 详见 §12）。

### 11.4 接口预留（不立即拆但兜住未来）

当前包的 `exports` 字段已按子路径拆分（`./tokens` / `./styles.css` / `./assets/master-brand/*.svg`）；未来拆包可保持 deep import 路径稳定：

```ts
// v1.x.x 单包
import { tokens } from '@yogyoung-code/ai-brand-kit/tokens'

// v2.x.x 拆包后（包名变 + 路径不变）
import { tokens } from '@medsci/ai-brand-tokens'
// 或加 alias 兼容期
```

拆包时机锁定为 **v2.0.0 + 包名迁移到 @medsci org 同时**（一次性 breaking change）。

### 11.5 工具候选

| 工具 | 适用 | 评估 |
|---|---|---|
| **changesets** | 中小型 monorepo / 多包独立发布 | ⭐ 推荐：与 GitHub Packages 兼容 + 半自动发布原则匹配 |
| **lerna** | 老牌；社区活跃度下降 | 不推荐 |
| **pnpm workspace** | 多包共享依赖 | ⭐ 推荐：与 changesets 配套 |
| **nx** | 大型 monorepo | 过重；本品牌包暂不需要 |

→ 拆包时锁定 **pnpm workspace + changesets** 组合。

---

## 12. MSH org 迁移即 MAJOR Bump 锁定

### 12.1 触发条件

MSH（梅斯健康）创建 GitHub `medsci` org 后启动包名迁移：

```
@yogyoung-code/ai-brand-kit  →  @medsci/ai-brand-kit
```

### 12.2 迁移 = MAJOR（A24 锁定）

任何包名变更触发 MAJOR 升级（v0.x.x 内可降为 MINOR；v1.x.x 后必须 MAJOR）。**理由**：客户 import path 失效 = 最严重的 breaking change（即使 API 完全兼容）。

### 12.3 迁移规程（衔接 06 §5.4）

```
T+0:   MSH 创建 medsci org + Sponsor 设置 PAT 权限
T+1:   旧包发布"deprecate 版本"——v0.x.x 末版 + npm deprecate 提示用户迁移
T+2:   新包发布 v1.0.0（@medsci/ai-brand-kit）
       ├─ 内容与旧包末版 100% 一致（仅包名变更，不夹带其它 breaking）
       └─ 双向引用：新包 README 注明"原 @yogyoung-code/ai-brand-kit 已迁移"
T+30:  老客户必须迁移完毕；旧包不再接受 PR
T+90:  旧包 archive；GitHub Packages 上保留 read-only
```

### 12.4 迁移期客户支持

- 提供 codemod（自动改 import 路径）
- Migration Guide 必随 @medsci/ai-brand-kit v1.0.0 发布
- 双包并行 30 天（客户有时间迁移）

### 12.5 迁移触发后续动作

迁移升 MAJOR 后续触发：

- 06 §5.4 迁移规程标记完成
- 06a §1.2 当前对齐状态更新（NPM 包版本进入 v1.x.x）
- HANDOFF.md §13.2 工程层"MSH org 迁移"待办标记完成
- README.md 全部 import path 示例更新

---

## 13. 14 条发布前自检清单

每次 `npm publish` 前 Tech Lead 必须 ack 全部 14 条（与 §7.4 校验清单互补）：

- [ ] 1. **§2.2 签字门槛通过**（patch / minor / major 对应签字组合）
- [ ] 2. **CHANGELOG 已写**（breaking change list + migration guide if major）
- [ ] 3. **§3 breaking change 分类已确认**（升版类型与变更内容匹配）
- [ ] 4. **§4 双向矩阵已校核**（文档变更与 NPM 升版触发关系一致）
- [ ] 5. **§5 deprecation 周期已遵守**（无在同一 minor 内移除 deprecated 项）
- [ ] 6. **§6 prerelease 标签使用正确**（alpha / beta / rc / next 不混用）
- [ ] 7. **§7.4 校验清单 14 条**全过
- [ ] 8. **§8 不在禁用回滚场景**（无 unpublish > 24h 已发布版本意图）
- [ ] 9. **§9 客户接入指南已更新**（升级路径 / 跳级警告 if major）
- [ ] 10. **§10 依赖治理**（npm audit 0 critical / 0 high；SBOM 已生成）
- [ ] 11. **§11 多包策略未启动**（除非 v2.0.0 + MSH org 迁移同时）
- [ ] 12. **§12 MSH org 迁移规程**（如本次为迁移版本，T+0 到 T+90 节点已规划）
- [ ] 13. **审计 trail 已留痕**（实证库 SourceID 入库）
- [ ] 14. **#brand-updates 通知模板已起草**（release note 草稿）

---

## CHANGELOG

### v0.2 — 2026-05-08（双签升版完成）

- 经 **ZL Chen（Tech Lead）+ Yog（Sponsor）** 于 **2026-05-08** 双签（`governance/06a-signoff-packet.md` §11 签字栏）
- 升版判定：minor（v0.1 → v0.2）· 按 06 §2.1 + §2.2 流程；与 voice 层 v0.3 / 04 批次 v0.2 不同——本批次 Sponsor 是**实质签字人**（涉对外发布契约 / 客户依赖 / MSH org 迁移决策）
- 本版相对 v0.1 无源条款变更（仅升版号 + 签字留痕）
- **核心约束生效**：v0.x.x 阶段 react 包客户接入须**精确锁版**；v0.x.x 阶段 breaking change 走 MINOR；v1.0.0 升级须满足 6 项条件
- 后续工作：`scripts/verify-exports.mjs` 接入 CI（30 天内）+ GitHub Actions release.yml dry-run（30 天内）+ react 包 v0.2.0（60 天内含 a11y + motion patch）+ MSH org 创建后启动 §12 30 天迁移规程

### v0.1 — 2026-05-08（初稿）

- 初版起草
- §0 适用范围 + 与 06 §1 / §5.4 边界
- §1 NPM 包与品牌包文档版本双轨映射规则（v0.x.x → v1.0.0 升级条件 6 项）
- §2 SemVer 严格定义（PATCH / MINOR / MAJOR 升版触发条件 + 签字门槛）
- §3 Breaking change 分类（27 项 A1–A27 覆盖 API / Token / 视觉 / a11y / Peer dep / 图像 / 包层）
- §4 品牌包文档变更触发 NPM 版本的双向矩阵（13 类文档变更 × NPM 触发判定）
- §5 Deprecation 周期（必经 ≥ 1 minor 警告期 + 紧急 deprecation 走 06 §2.4）
- §6 Prerelease 策略（alpha / beta / rc / next 标签使用规则 + dist-tag 管理）
- §7 发布流程 + CI / 半自动原则（半自动发布原则 + 8 步 SOP + CI 范围 + 14 条 §7.4 校验）
- §8 回滚规程（4 类场景 + unpublish 边界 + 通知规范）
- §9 客户接入指南（版本锁定 + 升级路径 + 跳级警告 + 支持窗口）
- §10 依赖治理（peer / dev / transitive / SBOM / license）
- §11 未来多包策略预留（changesets + pnpm workspace 接口预留）
- §12 MSH org 迁移即 MAJOR bump 锁定（衔接 06 §5.4 迁移规程）
- §13 14 条发布前自检清单
- 待办（已在 v0.2 升版后规划 30/60 天）：a11y CI 集成 + react 包 v0.2.0 升级路径同步落地 + GitHub Actions YAML 起草 + SBOM 工具评估 + `scripts/verify-exports.mjs` 落地（§7.5）+ 拆包评估（§11.3，已接近触发线）

### 沙盒 Baseline 验证记录（2026-05-08）

C 工程层沙盒演练完成，所有数据已入 §7.4 baseline：

| 校验项 | 结果 | 数据 |
|---|---|---|
| `npm publish --dry-run` | ✅ pass | 27 entries / packed 1.0 MB / unpacked 3.3 MB |
| `npm pack --dry-run` | ✅ pass | tarball 内容明细已固化 |
| exports 字段解析 | ✅ pass | 9 条全部解析成功 |
| `npx tsc --noEmit` | ✅ pass | 0 error |
| `dist/index.cjs` require | ✅ pass | 39 exports |
| `dist/tokens.cjs` require | ✅ pass | 11 token 常量 |
| dist hash baseline | ✅ 已生成 | `/tmp/dist-baseline-hash.txt` 25 entries（**仅沙盒内**，本地 reproducible build 后可对照）|
| 包重装 + lockfile 重生成 | ⚠️ 沙盒只读，本地必跑 | §7.6 SOP |
| GitHub Packages 真发布 | ⚠️ 用户本地必跑 | §7.2 Step 5 |
- 同步：本次未运行 `scripts/sync-docs.mjs`；正式合入前请重跑同步以更新 VitePress 构建产物


---

::: tip 文档来源
本页由 `scripts/sync-docs.mjs` 自动从 kit 根的 [`06a-npm-semver.md`](https://github.com/) 同步。**不要直接编辑此文件**——所有修改请改源文件后重跑 sync 脚本。
:::
