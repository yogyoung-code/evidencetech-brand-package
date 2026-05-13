# 06a NPM SemVer 双签 Review Packet（v0.2 候选）

**批次日期**：2026-05-08
**升版目标**：06a v0.1 → v0.2（minor）—— `06a-npm-semver.md` 单文档升版
**签字人**：**Tech Lead + Sponsor**（**双签**，按 06 §2.1 + §2.2 minor 升版流程；本批次纯工程治理 —— 市场 / 法务无实质 review 价值，仅信息周知）
**审阅截止**：建议 **3 个工作日内**（无争议时；本批次内容确定性高，预期无重大冲突）
**操作者（review 后落地）**：Sponsor 或 Tech Lead

> 本 packet 是 06a 升版的**单一入口**——结构参考 04 子文档批次 packet（`governance/04-subdocs-batch-review-packet.md`），但**简化为双签**——审阅人不必翻 06a 全文 720 行，所有要 ack 的决策都在 §4。

---

## 1. 一段话上下文

`06a-npm-semver.md` v0.1 是 06 治理文档在 **NPM 包发布维度**的执行手册。补齐了 06 §1 / §5.4 已有但不完整的版本规则——明确了：(1) 品牌包文档版本 v1.0 与 NPM 包 v0.1.0 的双轨映射；(2) 27 项 breaking change 触发 MAJOR 升级；(3) 文档变更何时触发 NPM 版本变更的双向矩阵；(4) Deprecation / Prerelease / 半自动发布 / 回滚 / 客户接入完整 SOP；(5) MSH org 迁移即 MAJOR bump 锁定。

本 packet 升版后 06a 进入正式效力，react 包 v0.1.0 首发可援引此规则。

---

## 2. 升版判定

按 06 §2.1 + §2.2：

- 06a 内容 = "新增条款 / 新组件 / 新 token"达到 5 项以上集中提交（14 章 + 27 项 A 决议 + 16 章节级决议），**触发 minor 升版**
- 不属 major（不动品牌包架构 / 不脱钩母品牌）
- 不属紧急修订（无 FTC / NMPA 事故）
- **签字组合 = Tech Lead + Sponsor**（双签）—— 与 voice 层双签（市场 + 法务）/ 04 批次三签（市场 + Tech Lead + 法务）不同：
  - 06a **纯工程治理** —— 市场 / 法务在 SemVer / breaking change / deprecation 上无实质 review 价值
  - **Tech Lead 必签** —— 工程实施者，含发布 SOP / CI / dependency 治理 / 多包预留
  - **Sponsor 必签** —— 涉对外发布契约 / 客户依赖 / MSH org 迁移决策

### 2.1 与已签 v0.2 批次的协同

- voice 层 v0.2 已签（C Yang + B Chen · 2026-05-06）—— 不影响
- 04 批次 v0.2 已签（C Yang + ZL Chen + Bruce Chen · 2026-05-08）—— 不影响
- 06a 升版后**不影响** 03/03a/03e/03f/04/04a/04b/04c 状态
- 06 主文档 §5.5 治理层子文档清单已加入 06a 行（v0.1 状态）；本批次落地后改为 v0.2 已签

---

## 3. 详读优先级与时间预算

| 文档 | 体量 | 建议详读 | 估时（Tech Lead）| 估时（Sponsor）|
|---|---|---|---|---|
| 本 packet（先读）| ~400 行 | **必读** | 30min | 30min |
| `06a-npm-semver.md` | ~720 行 | **Tech Lead 必详读全文**；Sponsor 详读 §1/§2/§3/§4/§7/§12 | 120min | 60min |
| 沙盒 baseline 验证记录 | 06a CHANGELOG 末尾 | 三方扫一眼 | 5min | 5min |
| `06-governance.md` §5.5（4 行子文档清单） | 极小 | 双方扫一眼 | 5min | 5min |
| `04-subdocs-batch-review-packet.md`（结构参考） | — | 按需 | — | — |

**单签字人合计建议时间预算**：

- Tech Lead：~3h（含会议讨论 30min · 工程实施评估 30min）
- Sponsor：~2h（含会议讨论 30min）

---

## 4. 全部要 ack 的决策（16 条 · N1–N16）

> 签字 = ack 下列每一条决策。如有任一条不接受，请按 §8 反馈流程退回。

| # | 决议 | 出处 |
|---|---|---|
| **N1** | **双轨版本号并存**：品牌包文档版本 v1.0 / v1.1（按 06 §1）vs NPM 包 v0.1.0 / v0.2.0 / v1.0.0（按 SemVer 严格）—— 两套版本号独立递增；变更触发存在单向触发关系（详 §4 双向矩阵）| 06a §1.1 |
| **N2** | **v0.x.x → v1.0.0 升级 6 项条件**全部满足才升 v1.0.0：品牌包文档 ≥ v1.0 + 至少 1 次 production 部署 + 至少 1 个外部消费方 + a11y CI 集成完成 + react v0.2.0 稳定 ≥ 30 天 + 无遗留高危 deprecation | 06a §1.3 |
| **N3** | **SemVer 升版触发条件**：PATCH = bug fix / 文档修订 / ΔE < 3.0 视觉微调；MINOR = 新组件 / 新 token / 新 props（向后兼容默认值）/ deprecation 标记；MAJOR = 任一 §3 breaking change | 06a §2.2 |
| **N4** | **签字门槛**：PATCH = Tech Lead 单签；MINOR = Tech Lead + Sponsor 双签；MAJOR = 三签（TL + Sponsor + 域专项 = a11y 法务 / 视觉 市场）| 06a §2.2 |
| **N5** | **v0.x.x 早期发布期规则**：任何变更（含 breaking）走 MINOR 升级（v0.1.0 → v0.2.0）；PATCH 仅纯 bug fix；客户接入须精确锁版 `0.1.0` ✓ 而非 `^0.1.0` ❌ | 06a §2.3 |
| **N6** | **27 项 Breaking Change 清单 A1–A27** 全覆盖触发 MAJOR：API 7 项 + Token 3 项 + 视觉 4 项 + a11y 4 项 + Peer dep 3 项 + 图像政策 2 项 + 包层 4 项 | 06a §3 |
| **N7** | **双向触发矩阵 13 类**：voice / 架构 / 04 §7 文档**单纯文档变更不触发**；仅当翻译为代码 / token / 资产时才触发；矩阵已覆盖 voice 修订 / 禁词 / 架构锁定 / a11y 规则 / motion tokens / 摄影插画 / schema / 新组件 / 几何变更 / 文档 minor / major 共 13 类 | 06a §4 |
| **N8** | **Deprecation ≥ 1 minor 警告期**：T+0 标记 → T+1 minor 警告 → T+2 minor 可移除（升 MAJOR 同时移除）；不允许同 minor 内移除；紧急 deprecation 走 06 §2.4（24h）+ a11y 行为永不放松 | 06a §5 |
| **N9** | **Prerelease 4 标签**：alpha（内部尝鲜）/ beta（半公开）/ rc（最终候选）/ next（rolling tag）；alpha → beta 至少 1 反馈；beta → rc 至少 1 周 + 0 critical；rc → 正式 至少 3 天 + 全部签字门槛通过 | 06a §6 |
| **N10** | **半自动发布原则**：CI 完成构建 + 测试 + dry-run + release note draft；**最终 `npm publish` 由 Tech Lead 本地工作账号人工触发**；CI **绝不**做真 publish / 自动 npm version / 自动 dist-tag latest | 06a §7.1 + §7.3 |
| **N11** | **§7.4 14 条 publish 前校验清单**：含包大小 baseline（packed 1.0 MB / unpacked 3.3 MB）+ 增长警戒 packed > 1.2 MB / unpacked > 4 MB → §11.3 拆包评估；exports 9 条解析；39 主入口 exports + 11 token；typecheck 0 error；a11y CI pass | 06a §7.4 + 沙盒 baseline |
| **N12** | **回滚边界**：除合规事故（FTC / 个人信息 / 客户授权违约）**永不 unpublish**；> 24h 仅 deprecate；prerelease 可 unpublish；unpublish 必通知 #brand-updates + DE/SE/DI/RCP lead + GitHub Release deprecated banner + 入实证库 audit trail | 06a §8 |
| **N13** | **客户支持窗口**：current latest 完整支持（bug fix + 安全 patch）；n-1 minor 6 个月仅安全 patch；n-2 及更早不再支持；prerelease 不支持；跳级升级强制走中间 MAJOR migration | 06a §9.4 |
| **N14** | **依赖治理**：npm audit 0 critical / 0 high / moderate ≤ 5 跟踪；每周 cron；每月 npm outdated；Dependabot 持续运行；SBOM 每发版生成入 03f §6.1 实证库（与撤稿响应 trail 同基础设施复用）；保留 7 年（HKEX）；GPL/AGPL/SSPL viral license 法务 review | 06a §10 |
| **N15** | **未来多包策略**：当前单包；触发拆分条件 4 项（客户单独要 token / 升级节奏不匹配 / packed ≥ 1.2 MB 90%+ SVG / 母品牌资产 ≥ 5 MB）；**当前 v0.1.0 已接近触发线（packed 1.0 MB）**；锁定工具 = pnpm workspace + changesets；拆包时机 = v2.0.0 + MSH org 迁移同时 | 06a §11 |
| **N16** | **MSH org 迁移即 MAJOR**（A24 锁定）：包名 `@yogyoung-code/ai-brand-kit` → `@medsci/ai-brand-kit` 触发 MAJOR；30 天迁移规程（T+0 org create / T+1 旧包 deprecate / T+2 新包 v1.0.0 发布 100% 一致 / T+30 老客户必迁完 / T+90 旧包 archive read-only）；迁移期 30 天双包并行 + codemod + Migration Guide | 06a §12 |

---

## 5. Tech Lead 专项 Review Checklist

> 重点：实施可行性 / CI 集成 / dependency 治理 / 半自动发布 SOP / 拆包评估

请逐条确认（可在条目后写"✓ ack"或"⚠️ 待讨论 + 理由"）：

### 5.1 SemVer 与签字门槛（N3 / N4 / N5）

- [ ] **N3 PATCH/MINOR/MAJOR 触发条件**：与你工程团队对版本号的预期一致？是否有边界情况未覆盖（如"修组件 bug 但同时改了一行 props 注释"算 PATCH 还是 MINOR）？
- [ ] **N4 签字门槛**：PATCH 你单签可接受？是否需要"双 TL 互审"机制以防单点决策？
- [ ] **N5 v0.x.x 客户须精确锁版**：你能在 react/README.md + GitHub Release note 模板中明确这一条？

### 5.2 Breaking Change 清单（N6）

- [ ] **27 项 A1–A27** 是否漏了你能想到的 breaking 场景？典型可能补充：
  - SSR 行为变更（如 `<Logo>` 添加 `useEffect` 影响 hydration）
  - JSX runtime 变更（classic → automatic）
  - sourceMap 格式变更
  - CSS specificity 提升（影响下游覆盖样式）

  以上 4 项是否需要并入 §3 A28–A31？或纳入 §3.1 API 层扩展？

- [ ] **A4 props 默认值改变** 边界判定：v0.x.x 内可不升 major（已在 §3 注明）；你确认这个边界宽度？

### 5.3 双向触发矩阵（N7）

- [ ] **§4.1 13 类映射**：你能在工程评审会上引用这表来快速判断"这次品牌包文档变更要不要发新 NPM 版本"吗？是否需要补充类型？

### 5.4 Deprecation / Prerelease（N8 / N9）

- [ ] **§5.1 deprecation 流程图**：T+0 / T+1 / T+2 minor 时间窗在你团队的 sprint 节奏下可执行？（例如 sprint = 2 周；连续 3 个 sprint = 1.5 月）
- [ ] **§6.2 dist-tag 管理**：你能用 `npm dist-tag` 命令自如管理 latest / rc / next / beta / alpha 切换？是否需要写一份"dist-tag 操作手册"作 v0.2.1 patch？

### 5.5 半自动发布 SOP（N10 / N11）

- [ ] **§7.1 半自动原则**：CI 完成所有验证 + 你本地工作账号一键 `npm publish` —— 你接受这个流程？是否需要"双 TL 互看"机制？
- [ ] **§7.2 8 步 SOP**：跑过一次 prerelease 演练后是否要补充任何步骤？（用户已在本批次后跑了 v0.1.0-rc.1 演练，可在本 review 中回填发现）
- [ ] **§7.3 CI 范围**：你能在 30 天内起 `.github/workflows/release.yml` + `a11y.yml`？是否需要工程 sprint 优先级排期？
- [ ] **§7.4 14 条校验清单**：你接受作为 publish 前必经？是否需要 cli 工具自动跑这 14 条？
- [ ] **§7.5 verify-exports 脚本**：你能落地 `scripts/verify-exports.mjs` + 接入 CI？

### 5.6 回滚 / 客户接入（N12 / N13）

- [ ] **§8.2 unpublish 24h 边界**：你确认 GitHub Packages 行为与 npm 公网一致？需要本地实测一次（在 prerelease 上）？
- [ ] **§9.2 升级路径分阶段**（staging 1 周 → 全量）：你能在 react 包 v0.2.0 发布时遵守这个流程？

### 5.7 依赖治理（N14）

- [ ] **npm audit 阈值**：0 critical / 0 high 在现有 transitive deps 下能否达成？需要预先跑一遍 baseline 评估？
- [ ] **SBOM 入实证库**：与 03f §6.1 工具基础设施复用 —— 你确认数据库设计层面无冲突（INTERIM / EVID / SBOM 三套 schema）？
- [ ] **license 红线**：现有 transitive deps 中是否已有 GPL / AGPL / SSPL viral license？如有，本次 review 同时启动法务 review？

### 5.8 多包预留 / MSH 迁移（N15 / N16）

- [ ] **N15 拆包工具锁定 pnpm + changesets**：你接受？是否倾向其他组合（如 turborepo / nx）？
- [ ] **N15 当前已接近触发线**：v0.2.0 / v1.0.0 是否要同步启动拆包评估？建议 v0.2.0 不拆（保持单包稳定）；v1.0.0 + MSH 迁移时一次性拆？
- [ ] **N16 MSH 迁移 30 天规程**：T+0 到 T+90 节点你能与 Sponsor + DE/SE/DI/RCP lead 联动？需要预先 codemod 工具？

### 5.9 跨版本协同（信息周知）

- [ ] **04 批次 v0.2 已签**（含 react v0.2.0 含 a11y + motion patch · packet §10.2）—— 你确认 v0.2.0 升级路径与 06a §2.2 MINOR 升版触发条件兼容？
- [ ] **临时素材库**（04c v0.2 已签 §C9 INTERIM-YYYY-NNNN schema）—— 与 SBOM / 实证库 EVID-YYYY-NNNN 三套 schema 在同基础设施上的隔离设计你确认无冲突？

---

## 6. Sponsor 专项 Review Checklist

> 重点：对外发布契约 / 客户依赖 / MSH 迁移决策 / 偏离条款 / 战略层影响

请逐条确认：

### 6.1 战略层（N1 / N2 / N16）

- [ ] **N1 双轨版本号**：你接受品牌包文档版本（v1.0 / v1.1）与 NPM 包版本（v0.1.0 / v1.0.0）独立递增？这增加了治理复杂度但清晰反映了"文档 vs 代码"分离的本质
- [ ] **N2 v1.0.0 6 项升级条件**：你接受作为"NPM 包进入稳定承诺"的硬门槛？这意味着至少 60 天内不会发 v1.0.0
- [ ] **N16 MSH 迁移 = MAJOR + 30 天规程**：你确认 MSH org 创建后由你协调 + 法务确认 license 切换 + 工程跑迁移？

### 6.2 客户契约（N12 / N13 / N16）

- [ ] **N12 永不 unpublish 红线**（除合规事故）：你接受？这是对外信任承诺
- [ ] **N13 客户支持窗口**（current 全支持 / n-1 6 月安全 / n-2 不再支持）：你接受？这意味着我们对外承诺持续支持成本
- [ ] **N16 30 天迁移期双包并行**：你接受？这意味着 NPM 配额 / GitHub Packages 存储费翻倍 30 天

### 6.3 偏离与冲突（信息周知）

- [ ] **06a 与 06 §1（品牌包 SemVer-like）的关系**：双轨而非单轨——你确认这不构成"偏离"而是"扩展"？
- [ ] **06a 与 06 §5.4（NPM 发布规程）的关系**：06a 替代或扩展？建议**扩展**（06 §5.4 仍管 PAT / .npmrc / org 切换；06a 管 SemVer / breaking / deprecation / 客户接入）—— 你确认？

### 6.4 资源与时间线（N10 / N11 / N15）

- [ ] **N10 半自动发布**：你接受 Tech Lead 是 publish 唯一执行人？是否需要 backup 机制（如 Sponsor 也持 PAT）？
- [ ] **§7.2 SOP** 8 步在 Tech Lead 工作日下 30min 可完成 —— 你接受这个发布频率？
- [ ] **N15 拆包评估**：你接受作为 v1.0.0 + MSH 迁移时一次性执行？还是希望提前到 v0.2.0？

---

## 7. 共同 Review Checklist（双方都该看）

- [ ] **N1–N16 16 条决议**双方都接受批次合并签？
- [ ] **06 §5.5 治理层子文档清单升 v0.2 已签**双方都接受？
- [ ] **批次升版后是否立即在 #brand-updates 通知工程团队**？建议是（参 voice 层 v0.2 / 04 批次 v0.2 落地操作）
- [ ] **批次升版后是否触发 react 包 v0.1.0 首发**？建议是 —— 06a 进入正式效力后才正式发布（即使用户已在本批次同时跑 prerelease 演练）
- [ ] **是否需要在升版前做一次 30min 联合答疑会议**？双签批次内容确定性高，建议可跳过；如有 ⚠️ 待讨论再召集

---

## 8. 反馈与退回流程

如有任一决议不接受：

1. 在本文档对应 N# 后追加"⚠️ 待讨论"+ 你的理由（≥ 3 行）
2. 通过 #brand-updates 或邮件通知 Sponsor + 另一签字人
3. **30min 内召开三方讨论**（Sponsor + Tech Lead + 提反对方；本批次双签所以"三方"= 三人会议）
4. 共识后由 Sponsor 或 Tech Lead 在 24h 内修订 06a 源文档 + 重发本 packet 第二轮签

如**整体退回**：

- 整批延期至 v0.2 候选；本批改为 06a v0.1 的"草稿包"
- 此期间 react 包**不发布**（06a 未签 = 发布规则未生效；治理上不严谨）

---

## 9. 双签后落地操作（24h 内执行）

### 9.1 文档侧

1. **升版号写入**：06a 顶部 `v0.1` → **v0.2**，CHANGELOG 段移除"v0.1 草稿，待 Tech Lead + Sponsor 双签升 v0.2"标注
2. **签字留痕**：CHANGELOG 加 1 行——"v0.2 经 [Tech Lead 姓名] + [Sponsor 姓名] 于 YYYY-MM-DD 双签"
3. **06 §5.5 子文档清单**：06a 状态从 v0.1 改为 v0.2 已签
4. **同步 docs/ 站**：`node scripts/sync-docs.mjs`
5. **HANDOFF.md** §13.2 voice gap #10 状态从"v0.1 草稿"改为"v0.2 已签"
6. **discovery-report-CN.md** 修订追溯段最后加"06a 双签完成 · 2026-05-08"

### 9.2 工程侧（双签后即可启动）

1. **react 包 v0.1.0 首发**（如未发）：按 06a §7.2 8 步 SOP；建议先 v0.1.0-rc.1 prerelease 演练（已建议用户本地并行跑 · 不阻塞 packet 签字）
2. **react/CHANGELOG.md** 落地（v0.1.0 首发条目）
3. **react/PUBLISH.md** 落地（首次发布 step-by-step + prerelease 演练）
4. **react/.npmrc.example** 落地（PAT 占位 + scope 配置）
5. **scripts/verify-exports.mjs** 落地（按 06a §7.5 + 接入 CI）
6. **GitHub Actions YAML** 起草（30 天内）：`.github/workflows/release.yml` dry-run only / `.github/workflows/a11y.yml`

### 9.3 通知侧

1. #brand-updates 发布 06a 双签 release note（含 16 决议 + 双轨映射 + 27 项 breaking + MSH 迁移 = MAJOR 锁定 + react v0.1.0 即将首发）
2. DE / SE / DI / RCP 工程团队 lead 邮件通知——含客户精确锁版要求 + react v0.2.0 升级路径预告（与 04 批次 react patch 同步）

### 9.4 后续工作启动

- **T+30 天内**：`scripts/verify-exports.mjs` 接入 CI + GitHub Actions release.yml dry-run pipeline + a11y CI（继承 04 批次 packet §10.2）
- **T+60 天内**：react 包 v0.2.0 发布（含 a11y + motion patch + Spinner / Skeleton / Toast / ProgressBar 新组件）
- **T+30 天内**：v0.2.1 patch 候选——dist-tag 操作手册 + 客户精确锁版指南卡 + Migration Guide 模板
- **MSH org 创建后**：启动 §12 30 天迁移规程

---

## 10. 附：本批次源文档清单

| 路径 | 角色 | 体量 |
|---|---|---|
| `06-governance.md` | 主文档（仅 §5.5 子文档清单 + §7 修订履历追加，主体不变）| ~270 行（不变 + 6 行新增）|
| `06a-npm-semver.md` | 新增 | ~750 行 |
| 本 packet | 双签流程文档 | ~400 行 |

签字完成后归档路径：`governance/06a-signoff-packet.md`（已放置）。

---

## 11. 签字栏

```
Tech Lead： ______ZL Chen______   日期：__2026-05-08___
            （姓名 / 签名）

Sponsor：   ______Yog______   日期：__2026-05-08___
            （姓名 / 签名）

附备注（可选）：
________________________________________________________
________________________________________________________
________________________________________________________
```


---

::: tip 文档来源
本页由 `scripts/sync-docs.mjs` 自动从 kit 根的 [`governance/06a-signoff-packet.md`](https://github.com/) 同步。**不要直接编辑此文件**——所有修改请改源文件后重跑 sync 脚本。
:::
