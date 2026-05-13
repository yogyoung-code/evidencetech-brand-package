# 梅斯健康 AI Brand Kit · Governance v0.1

**适用范围**：本 kit 全部交付物（README、文档 00–05、ai-tokens.css、preview/）。
**配套**：母品牌 v1.1 Brand Guidelines §13（审阅与变更）的子级延伸。

---

## 1. 版本号规则（SemVer-like）

```
v[major].[minor]   例：v1.0、v1.2、v2.0
```

| 升版触发 | 例子 |
|---|---|
| **major**（v1 → v2） | 架构层重构（如改变 branded house 模型、加入第 5 个产品、子品牌脱离母品牌） |
| **minor**（v1.0 → v1.1） | 新增条款 / token / 组件，向后兼容（如增加新信任徽章、扩充禁词清单） |
| **patch / 修订**（在 minor 内部） | 已落地条款的小幅调整（如 endorsement 灰度从 700 调到 600）；不升 minor，仅在文档内"修订履历"段记录 |

---

## 2. 变更流程

### 2.1 修订（minor 内）

```
提议 → 内部讨论 → 市场负责人 + Tech Lead 双签 → 更新文档与 ai-tokens.css → 通知三产品工程团队
```

- 修订人提交 PR 到 brand kit 仓库
- 双签：市场负责人审"语言/视觉/品牌一致性"，Tech Lead 审"token 命名/CSS/工程影响面"
- 合并后通过统一渠道（如 Slack #brand-updates）通知三产品工程
- 各产品自行排期同步 token

### 2.2 minor 升版

```
触发条件 → 起草 RFC → 评审会 → 双签 → 发布
```

- 任何"新增条款 / 新组件 / 新 token"达到 5 项以上集中提交时，触发 minor 升版
- 起草 RFC 文档列明动机、影响面、迁移步骤
- 评审会议至少包含市场 / Tech Lead / 至少一位产品 lead
- 通过后双签合并；CHANGELOG 记录详尽变更

### 2.3 major 升版

```
触发条件 → Sponsor 评估 → RFC + 影响面分析 → 三签（市场 + Tech Lead + Sponsor）→ 发布
```

- Major 升版动机通常源自战略层（如新增产品矩阵、商业模式变化、与母品牌脱钩）
- 必须由 Sponsor 拍板
- 三产品工程团队需要明确的迁移期（建议 1 sprint）

### 2.4 紧急修订（如合规事件）

- 法务发现禁词违规 / FTC 风险 / 数据 claim 事故
- 越过双签流程，由市场负责人 + 法务 24h 内更新禁词清单 / 合规条款
- 事后补 RFC 与签字记录
- 三产品工程团队收到通知后须在 48h 内完成下线 / 替换

---

## 3. 与母品牌 v1.1 的 sync cadence

### 3.1 季度 sync（每季度一次）

| 检查项 | 触发动作 |
|---|---|
| 母品牌 v1.1 是否升版？ | 是 → 走 §3.2 升版同步流程 |
| 母品牌新增条款是否影响 AI 子品牌偏离条款？ | 是 → 评估是否调整偏离 |
| 母品牌新增禁词？ | 是 → 同步到 `03-brand-voice.md` §6 |
| 母品牌 logo / token 资产更新？ | 是 → 同步到 `02` 与 `ai-tokens.css` |

### 3.2 母品牌升版同步

母品牌 v1.1 → v1.2 时：

1. 市场负责人对照新母品牌 spec 与本 kit `README.md` §2 偏离条款
2. 评估每条偏离是否需要：保持、调整、废止
3. 若调整 / 废止，按 §2.1 修订流程走
4. 本 kit 在 README 中记录 "对应母品牌 v1.x"

### 3.3 反向反馈

如本 kit 发现某条规则在 AI 子品牌的实际落地中遇到困难，可向母品牌团队提反馈，建议母品牌升版时考虑：
- 例：AI 子品牌发现"统一色相蓝系"对四产品识别度限制过大 → 已在本 kit 偏离，反馈给母品牌作为未来 v2 的考虑输入

---

## 4. 决策权限矩阵

| 决策类型 | 谁可以决定 |
|---|---|
| 新增 / 删除某产品的整改 To-Do | 产品 Lead |
| 调整 token 数值（如 `--cot-cycle: 1.2s` → `1.4s`） | 市场负责人 + Tech Lead 双签 |
| 调整偏离条款（如把 endorsement 灰度从 #666666 改为 #555555） | 市场负责人 + Tech Lead 双签 |
| 新增 / 删除某条禁词 | 市场 + 法务（法务可发起紧急修订） |
| 新增 / 删除某项信任徽章（如增加第 4 个） | RFC + Sponsor 拍板 |
| 改变品牌架构模型（如从 branded house 退回 sub-brand endorsement） | Sponsor + 三签 |
| 改变四产品色彩（已锁定的 `--de-primary` 等） | Sponsor 拍板（影响面太大） |
| 接受/拒绝外部供应商的设计提案使用本 kit | 市场负责人 |

---

## 5. 资产托管

### 5.1 当前归属

```
/outputs/ai-brand-kit/
├── README.md
├── 00-architecture-locked.md
├── 01-gap-audit.md
├── 02-brand-architecture.md
├── 03-brand-voice.md
├── 04-visual-system.md
├── 05-rectification-checklist.md
├── 06-governance.md  (本文件)
├── ai-tokens.css
└── preview/
    ├── wordmarks-preview.html
    ├── icon-directions-preview.html
    ├── visual-system-preview.html
    ├── endorsement-alignment-comparison.html
    └── endorsement-color-comparison.html
```

### 5.2 推荐落位（生产环境）

- **Git 仓库**：v0.1.0 临时阶段使用 Sponsor 个人账号 `yogyoung-code/ai-brand-kit`；MSH 创建 `medsci` org 后迁移至 `medsci/ai-brand-kit`（最终目标位于 `medsci-design-systems` monorepo `/ai-brand-kit/` 下）
- **NPM 私包**：当前 `@yogyoung-code/ai-brand-kit`（临时），目标 `@medsci/ai-brand-kit`。Registry 始终是 **GitHub Packages**（2026-05-07 决议，详见 §5.4 含完整迁移规程）
- **Figma 文件**：v1.0 暂不交付，v2 视团队需求评估
- **文档站**：当前阶段以本地 `npm run dev` 预览为主；正式部署目标（GitHub Pages / Vercel / 内部 nginx）待后续确认（参考 HANDOFF §11.4）

### 5.4 NPM 私包发布规程（2026-05-07 锁定）

**Registry：GitHub Packages**（`https://npm.pkg.github.com`）

理由：
- 团队已使用 GitHub 管代码仓库，私有 NPM 是免费附属能力
- 配置仅需 `.npmrc` + `publishConfig`，无 IT 运维成本
- 与 git 仓库 ACL 复用，权限管控简化

**当前包配置（v0.1.0 临时阶段）：**
- 包名：`@yogyoung-code/ai-brand-kit`（**临时**——使用 Sponsor 个人 GitHub 账号 `yogyoung-code`）
- Git 仓库：`https://github.com/yogyoung-code/ai-brand-kit`
- `react/package.json` 已添加 `publishConfig.registry = https://npm.pkg.github.com` + `publishConfig.access = restricted` + `repository.url`

> **GitHub Packages 硬性约束**：npm scope 必须等于 GitHub user/org。因此本阶段 scope 只能是 `@yogyoung-code/`，无法用 `@medsci/`。等 MSH 创建 GitHub org `medsci` 后，按下文"迁移规程"切回品牌名。

**首次发布步骤（v0.1.0 临时阶段）：**

1. 在 `yogyoung-code` 账号下创建仓库 `yogyoung-code/ai-brand-kit`（已规划）
2. 创建 Personal Access Token (Classic) 或 Fine-grained PAT，授予 `write:packages` + `read:packages` + `repo` 权限
3. 在用户主目录的 `~/.npmrc` 添加：
   ```
   //npm.pkg.github.com/:_authToken=<PAT>
   @yogyoung-code:registry=https://npm.pkg.github.com
   ```
4. 在 `react/` 目录执行：
   ```bash
   npm run build
   npm publish
   ```
5. 各产品仓库的 `.npmrc` 同样指向 GitHub Packages 后即可 `npm install @yogyoung-code/ai-brand-kit`

**升版规则：**
- patch 修订（如颜色 token 微调）：`npm version patch && npm publish`
- minor 升版（如新增组件）：`npm version minor && npm publish`，并在本文档 §1 SemVer 规则下同步记录
- major 升版必须经 §2.3 三签流程

**迁移规程：`@yogyoung-code` → `@medsci` （MSH org 成立后执行）**

触发条件：MSH 在 GitHub 创建 organization `medsci`，并将仓库迁移至 `medsci/ai-brand-kit`。

迁移步骤（按 minor 升版处理）：
1. GitHub 上将仓库 transfer 到 `medsci` org（GitHub 自动设置 redirect）
2. 在 `react/package.json` 中：
   - `name`: `@yogyoung-code/ai-brand-kit` → `@medsci/ai-brand-kit`
   - `repository.url`: `github.com/yogyoung-code/...` → `github.com/medsci/...`
3. 全仓库批量替换（参 2026-05-07 本次替换所用 sed 命令）：
   ```bash
   grep -rl "@yogyoung-code/ai-brand-kit" . --exclude-dir=node_modules --exclude-dir=dist --exclude="package-lock.json" \
     | xargs sed -i 's|@yogyoung-code/ai-brand-kit|@medsci/ai-brand-kit|g'
   ```
4. 各产品仓库 `.npmrc` 改为 `@medsci:registry=https://npm.pkg.github.com`
5. `npm version minor && npm run build && npm publish`（预计 v0.2.0 或 v1.0.0）
6. 在旧 `@yogyoung-code/ai-brand-kit` 包内发布最后一个 deprecation 版本：`npm deprecate @yogyoung-code/ai-brand-kit "Renamed to @medsci/ai-brand-kit"`
7. 各产品仓库的 `package.json` 在该 sprint 内统一 `npm install @medsci/ai-brand-kit && npm uninstall @yogyoung-code/ai-brand-kit`

迁移期间风险与缓解：
- **导入语句**：所有 `import ... from '@yogyoung-code/ai-brand-kit'` 须同步替换为 `@medsci/...`。建议各产品创建一个 PR 集中处理。
- **CSS class scope**：包名变更不影响 `--de-primary` 等 CSS token，也不影响 `.brand-de` scope class，无需修改。
- **截图档案 manifest**：`preview/screenshots/react-demo/manifest.json` 中 `reactPackage` 字段会随 sed 更新；下次重跑 `node scripts/build-react-demo-screenshots.mjs` 时也会自动同步。

### 5.3 备份与归档

- 每次 minor / major 升版前，对当前版本生成 PDF 快照存档（市场团队负责）
- 母品牌 v1.1 §13 已规定快照机制，AI Brand Kit 沿用同一惯例

### 5.5 治理层子文档清单

主文档（本文）只管"治理铁律 / 流程 / 决策权 / 资产托管"。下列子文档管"治理在具体维度的执行细节"：

| 文档 | 范围 | 状态 |
|---|---|---|
| `06a-npm-semver.md` | NPM 包语义化版本 + 双轨映射规则 + breaking change 27 项 + deprecation / prerelease / 回滚 / 客户接入 / 依赖治理 / 多包预留 / MSH org 迁移即 major | **v0.2** (2026-05-08 双签 · ZL Chen + Yog) |

子文档与本文档的关系：本文档 §1（品牌包 SemVer-like 版本）+ §2（变更流程）+ §5.4（NPM 发布规程）在子文档**无差别继承**。子文档仅在"NPM 包发布维度"做附加约束；任何冲突以本文档为准（治理铁律不可被子文档放松）。

子文档命名规则：`06a-` / `06b-` / 等，遵循 03a / 03b / ... + 04a / 04b / ... 同样的层级编号约定。

---

## 6. 责任分工

| 角色 | 职责 |
|---|---|
| **Sponsor** | 战略层决策（branded house 模型、产品色彩、major 升版）；偏离条款拍板 |
| **市场负责人** | 文档维护、品牌一致性、对外物料审稿、季度 sync 主持 |
| **Tech Lead** | `ai-tokens.css` 维护、共享组件包、产品集成 review、a11y 校验 |
| **法务** | 禁词清单、FTC 合规、数据 claim 来源审查 |
| **产品 Lead（DE/SE/DI/RCP）** | 各自产品的整改清单执行、内部 token 接入、本 kit 落地反馈 |
| **设计师**（外部 / 未来） | Figma 库（v2）、生产级 SVG 矢量化、新组件视觉提案 |

---

## 7. CHANGELOG

### v1.0 · 2026-05-05 · Locked

- 初版交付
- 包含：architecture-locked / gap-audit / brand-architecture / brand-voice / visual-system / rectification-checklist / governance + ai-tokens.css + 5 个 preview HTML
- 经 Sponsor 拍板锁定的偏离条款见 README §2
- 已知未交付：Figma 库、产品实际改造、DI/RCP 生产级 icon、VGI 最终 SVG、母品牌 reverse logo（依赖 W2 交付）

### 修订履历（v1.0 内迭代）

| 日期 | 修订项 | 来源文档 |
|---|---|---|
| 2026-05-05 | wordmark v0.1 → v0.2 mixed-case + 双色 | `02` v0.2 |
| 2026-05-05 | wordmark 主色与 UI 主色统一 | `02` v0.3 |
| 2026-05-05 | DI 选定星座、RCP 选定锐脉 + 双色翻转 | `02` v0.4 |
| 2026-05-05 | RCP wordmark 简化为 RCP 三字母 + 贯穿横线 | `02` v0.5 |
| 2026-05-05 | endorsement signature 灰度 #334155 → #666666 | `02` v0.6 |
| 2026-05-05 | AIO icon 重设计 + 信任徽章默认改为缩写 + --full variant | `04` v0.2 |
| 2026-05-08 | 新增 §5.5 治理层子文档清单 + 06a-npm-semver.md v0.1 起草（NPM 包 SemVer + 27 项 breaking change + 双向映射 + deprecation + prerelease + 半自动发布 + 拆包预留 + MSH org 迁移即 major）| `06a` v0.1 |
| 2026-05-08 | 06a-npm-semver.md v0.2 双签升版完成（ZL Chen Tech Lead + Yog Sponsor · packet `governance/06a-signoff-packet.md` §11 签字栏）—— 16 决议 N1-N16 全部锁定；NPM SemVer 治理规则正式生效；react v0.1.0 真有规则约束 | `06a` v0.2 |

下一版（v1.1）预计修订项（占位）：
- DI / RCP 图标生产级矢量化
- VGI Mark 最终 SVG
- 母品牌 W2 交付的 reverse / monochrome logo 接入
