# GitHub Release Notes 模板 — `@yogyoung-code/ai-brand-kit`

> 引用：`06a-npm-semver.md` §7.2 SOP Step 8 / Step N
>
> **使用规则**：
> 1. 每次 `npm publish` 后在 GitHub Release 页发布 release note
> 2. Tag 命名规则：`react-v[VERSION]`（如 `react-v0.1.0`）
> 3. Title 格式：`react v[VERSION]`（如 `react v0.1.0`）
> 4. 选下面对应模板，把 `[占位]` 替换为实际数据

---

## 模板 1：v0.1.0-rc.1 Prerelease（首次发布前演练）

> Tag: `react-v0.1.0-rc.1`
> Title: `react v0.1.0-rc.1 (prerelease)`
> ☑ Set as a pre-release

````markdown
## react v0.1.0-rc.1 — Prerelease 演练

⚠️ **这是发布前演练版本，不打 latest 标签**——客户默认 `npm install` 不会拉到此版本。

### 用途

验证 GitHub Packages 发布管道（PAT 配置 / .npmrc / dry-run / pack / GitHub Packages 显示）；rc.1 验证通过后正式发 v0.1.0。

### 内容

与即将发布的 v0.1.0 完全一致——见 [v0.1.0 release note]（待发）。

### 接入测试

```bash
# 临时目录
mkdir /tmp/test && cd /tmp/test && npm init -y
echo "@yogyoung-code:registry=https://npm.pkg.github.com" > .npmrc
npm install @yogyoung-code/ai-brand-kit@rc

# 验证
node -e "const k=require('@yogyoung-code/ai-brand-kit'); console.log(Object.keys(k).length)"
# 应输出 39
```

### 验证清单

- [ ] `npm view @yogyoung-code/ai-brand-kit --registry=https://npm.pkg.github.com` 显示 dist-tags.rc = 0.1.0-rc.1
- [ ] `npm view ...` 显示 latest 仍为空（或不存在）
- [ ] 客户 `npm install @yogyoung-code/ai-brand-kit@rc` 成功
- [ ] 客户 `require('@yogyoung-code/ai-brand-kit')` 39 exports
- [ ] 客户 `require('@yogyoung-code/ai-brand-kit/tokens')` 11 token 常量
- [ ] dist/styles.css + 12 SVG 完整

### 发现 / 故障

[在此回填演练中发现的任何问题；如无问题写"无"]

### 下一步

验证清单全部通过 → 发布 v0.1.0 正式版（按 PUBLISH.md §1.3）。
````

---

## 模板 2：v0.1.0 First Release（正式首发）

> Tag: `react-v0.1.0`
> Title: `react v0.1.0`
> ☐ Set as the latest release（默认勾选）

````markdown
## 🎉 react v0.1.0 — First Release

`@yogyoung-code/ai-brand-kit` 首发——梅斯健康集团 AI 子品牌 React 组件库。

### ⚠️ Early Development Phase

v0.x.x 阶段不视为公共 API 稳定承诺；客户接入须**精确锁版**：

```json
{
  "dependencies": {
    "@yogyoung-code/ai-brand-kit": "0.1.0"
  }
}
```

❌ 不要用 `^0.1.0` —— v0.x.x 内可能存在 breaking change（按 [06a §2.3](../blob/main/06a-npm-semver.md#23-v0xx-内部规则早期发布期)）。

### Installation

```bash
# 配置 GitHub Packages registry（一次性）
echo "@yogyoung-code:registry=https://npm.pkg.github.com" >> .npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT" >> .npmrc

# 安装
npm install @yogyoung-code/ai-brand-kit@0.1.0
```

### What's Inside

#### 13 Components

**信任层（7）**：`PITLBadge` · `AIOBadge` · `VGIMark` · `NanoCitation` · `CoTIndicator` · `DiffView` · `Disclosure`

**Logo 系统（4）**：`Logo` · `Wordmark` · `EndorsementSignature` · `BrandScope`

**母品牌（2）**：`MasterBrandLogo` · `CoBrandLockup`

**产品 icon（4）**：`DEEcgIcon` · `SEBarsIcon` · `DIConstellationIcon` · `RCPPulseIcon`

#### Tokens & Assets

- 11 token 常量（`PRODUCT_PRIMARY` / `WORDMARK_SIZES` / `ENDORSEMENT_*` / `RCP_*`）
- `dist/styles.css` 14.8 KB · 4 产品色 + 全部 CSS 变量
- 12 母品牌 SVG（4 变体 × 3 构图）

#### Build

- ESM + CJS 双格式 · TypeScript 类型完整
- peer deps：React 18 + 19 双兼容
- engines：Node ≥ 18

### Package Stats

| 维度 | 值 |
|---|---|
| Tarball entries | 27 |
| Packed size | ~1.0 MB |
| Unpacked size | ~3.3 MB |
| Main exports | 39 |
| Token exports | 11 |
| 12 SVG（占 90% 体积）| 母品牌资产 |

### 治理与版本规则

- **SemVer**：严格遵守 [06a-npm-semver.md](../blob/main/06a-npm-semver.md) v0.2
- **签字门槛**：本首发经 Tech Lead + Sponsor 双签
- **Breaking change**：27 项清单（[§3](../blob/main/06a-npm-semver.md#3-breaking-change-分类升-major-触发清单)）
- **Deprecation**：≥ 1 minor 警告期（[§5](../blob/main/06a-npm-semver.md#5-deprecation-周期)）

### Roadmap

- **v0.2.0**（60 天内）：a11y patch（继承 [04a v0.2](../blob/main/04a-component-accessibility.md)）+ motion patch（继承 [04b v0.2](../blob/main/04b-motion-guidelines.md)）+ Spinner / Skeleton / Toast / ProgressBar 新组件
- **v1.0.0**（≥ 60 天）：进入稳定 API 承诺；满足 [06a §1.3](../blob/main/06a-npm-semver.md#13-v0xx--v100-升级触发) 6 项条件
- **v2.0.0 + MSH org 迁移**：包名切换到 `@medsci/ai-brand-kit`（按 [06a §12](../blob/main/06a-npm-semver.md#12-msh-org-迁移即-major-bump-锁定)）

### 引用文档

- [README](../blob/main/react/README.md) · [CHANGELOG](../blob/main/react/CHANGELOG.md) · [PUBLISH 流程](../blob/main/react/PUBLISH.md)
- [品牌包 README](../blob/main/README.md) · [02 架构](../blob/main/02-brand-architecture.md) · [04 视觉系统](../blob/main/04-visual-system.md)
- [06 治理](../blob/main/06-governance.md) · [06a NPM SemVer](../blob/main/06a-npm-semver.md)

---

**SHA-256**: `[复制 npm publish 输出中的 shasum]`

**梅斯健康集团 · 2415.HK**
````

---

## 模板 3：vX.Y.Z PATCH（bug fix）

> Tag: `react-v[VERSION]`
> Title: `react v[VERSION]`
> ☐ Set as the latest release（默认勾选）

````markdown
## react v[VERSION] — Patch

### 🐛 Bug Fixes

- `<[组件名]>`：[bug 描述] → [修复方法]（[issue link]）
- ...

### 🔒 Security

- `[依赖名]` 升级 [旧版本] → [新版本]（CVE-[编号] / npm audit · [严重级别]）
- ...

### 📚 Docs

- [文档变更]
- ...

### 升级

```bash
npm install @yogyoung-code/ai-brand-kit@[VERSION]
```

无破坏性变更；可直接升级（按 [06a §9.2](../blob/main/06a-npm-semver.md#92-升级路径)）。

### 验证清单（Tech Lead）

- [x] 06a §7.4 14 条全过
- [x] Tech Lead 单签（patch 级签字门槛）
- [x] CHANGELOG 已更新

### Stats

[与 v0.1.0 一致 / 或填写实际数据]

**SHA-256**: `[shasum]`
````

---

## 模板 4：vX.Y.0 MINOR（新组件 / 新 token / deprecation 标记）

> Tag: `react-v[VERSION]`
> Title: `react v[VERSION]`
> ☐ Set as the latest release（默认勾选）

````markdown
## react v[VERSION] — Minor

### ✨ New

- `<[新组件]>` —— [描述]（继承 [文档章节]）
- 新 token：`[TOKEN_NAME]` —— [描述]
- ...

### 🔧 Improvements

- [改进项]
- ...

### ⚠️ Deprecations

> 以下 API 已标记 deprecated；将在 v[NEXT_MAJOR].0.0 移除（≥ 1 minor 警告期 · 06a §5）

- `<[组件名]>` 的 `[propName]` prop —— 使用 `[替代 prop]`
- ...

### 📚 Docs

- [文档变更]
- ...

### 升级

```bash
npm install @yogyoung-code/ai-brand-kit@[VERSION]
```

向后兼容；可直接升级（按 [06a §9.2](../blob/main/06a-npm-semver.md#92-升级路径)）。

### Migration Notes

- [如有 deprecation 项 → 提供迁移代码示例]
- ...

### 验证清单

- [x] 06a §7.4 14 条全过
- [x] Tech Lead + Sponsor 双签
- [x] CHANGELOG 已更新
- [x] Deprecation 已标记 @deprecated JSDoc + console.warn

### Stats

[填写实际数据]

**SHA-256**: `[shasum]`
````

---

## 模板 5：v1.0.0 Stable Release（首个稳定版）

> Tag: `react-v1.0.0`
> Title: `react v1.0.0 — Stable API Promise`
> ☐ Set as the latest release

````markdown
## 🎯 react v1.0.0 — Stable API Promise

经过 [N] 个月的 v0.x.x 早期发布期后，`@yogyoung-code/ai-brand-kit` 进入 **v1.0.0 稳定 API 承诺**。

### ✅ 满足 06a §1.3 全部 6 项条件

- [x] 品牌包文档版本至少 v1.0
- [x] 至少 1 次 production 部署
- [x] 至少 1 个外部消费方（[产品名]）
- [x] CI 集成完成（a11y CI · packet §10.2）
- [x] react v0.2.0 a11y + motion patch 稳定 ≥ 30 天
- [x] 无遗留高危 deprecation 警告

### What this means for you

#### 客户接入可放宽锁版

```json
{
  "dependencies": {
    "@yogyoung-code/ai-brand-kit": "^1.0.0"
  }
}
```

PATCH / MINOR 升级保证向后兼容；自动升级安全。

#### Breaking change 严格三签

任何 breaking 变更升 v2.0.0；遵守 [06a §3](../blob/main/06a-npm-semver.md#3-breaking-change-分类升-major-触发清单) 27 项清单 + 三签门槛。

#### 客户支持窗口启动

- v1.x.x（current latest）：完整支持（bug fix + 安全 patch）
- v1.x.x（n-1 minor）：6 个月仅安全 patch
- v0.x.x（已 EOL）：不再支持；请所有用户升级到 v1.0.0+

### Migration from v0.x.x

[如有 breaking change 或 deprecation 移除 → 提供 Migration Guide 链接]

### 引用

- [Migration Guide v0 → v1](../blob/main/migrations/v1-migration.md)
- [06a-npm-semver.md](../blob/main/06a-npm-semver.md) §1.3 v1.0.0 升级条件

**SHA-256**: `[shasum]`

**梅斯健康集团 · 2415.HK**
````

---

## 模板 6：v[NEXT].0.0 MAJOR（含 breaking change）

> Tag: `react-v[VERSION]`
> Title: `react v[VERSION] — Breaking Changes`
> ☐ Set as the latest release

````markdown
## ⚠️ react v[VERSION] — Major Release with Breaking Changes

### Breaking Changes

> 全部按 [06a §3](../blob/main/06a-npm-semver.md#3-breaking-change-分类升-major-触发清单) 27 项清单分类。Migration Guide 必须在升级前阅读。

- **A[X] [breaking change 类型]**：[具体描述]
  - **Before**：`[旧 API]`
  - **After**：`[新 API]`
  - **Migration**：[迁移代码示例 / codemod]
  - **影响**：[哪些产品 / 哪些用法]
- ...

### 移除的 Deprecated APIs

- `<[组件名]>` 的 `[propName]` prop（自 v[OLD] 标记 deprecated · 06a §5 周期到期）
- ...

### Migration Guide

📖 **必读**：[migrations/v[VERSION]-migration.md](../blob/main/migrations/v[VERSION]-migration.md)

包含：
- Codemod 自动迁移工具
- Step-by-step 升级指南
- 所有 breaking change 的 before/after 代码对照
- 兼容期建议（双包并行 X 天）

### ⚠️ 跳级升级

如果你从 v[OLD-MAJOR] 直接升 v[NEW-MAJOR]：

1. 阅读所有中间 MAJOR 的 Migration Guide
2. 在 staging 跑完每个中间 MAJOR 的迁移步骤
3. 不允许 prod 直接 pin 到目标版本（按 [06a §9.3](../blob/main/06a-npm-semver.md#93-跳级升级警告)）

### 升级

```bash
# 阅读 Migration Guide 后
npm install @yogyoung-code/ai-brand-kit@[VERSION]

# 推荐分阶段
# Step 1: staging 1 周
# Step 2: 1 产品试点
# Step 3: 全量
```

### 验证清单

- [x] 06a §7.4 14 条全过
- [x] **三签**（Tech Lead + Sponsor + 域专项）
- [x] CHANGELOG 已更新
- [x] Migration Guide 已发布
- [x] 上一 MINOR 已 deprecated（≥ 1 minor 警告期）

### 旧版本 deprecation

```bash
npm deprecate @yogyoung-code/ai-brand-kit@[OLD_VERSION] \
  "v[OLD] EOL; please upgrade to v[VERSION]" \
  --registry=https://npm.pkg.github.com
```

**SHA-256**: `[shasum]`

**梅斯健康集团 · 2415.HK**
````

---

## 模板 7：MSH org 迁移版本（A24）

> Tag: `react-v1.0.0`（在 `@medsci/ai-brand-kit` 仓库）
> Title: `@medsci/ai-brand-kit v1.0.0 — Migrated from @yogyoung-code/`

````markdown
## 🚀 @medsci/ai-brand-kit v1.0.0 — Migrated to MSH Org

按 [06a §12](https://github.com/yogyoung-code/ai-brand-kit/blob/main/06a-npm-semver.md#12-msh-org-迁移即-major-bump-锁定) MSH org 迁移规程，包名从 `@yogyoung-code/ai-brand-kit` 迁移到 `@medsci/ai-brand-kit`。

### ⚠️ 包名变更 = MAJOR Bump（按 06a A24）

- 旧包：`@yogyoung-code/ai-brand-kit@[FINAL_VERSION]`（v0.x.x 末版 / v1.x.x 末版）
- 新包：`@medsci/ai-brand-kit@1.0.0`
- **内容 100% 一致**——仅包名变更，**不夹带任何其它 breaking change**（按 06a §12.3）

### Migration

#### 1. 更新 .npmrc

```diff
- @yogyoung-code:registry=https://npm.pkg.github.com
+ @medsci:registry=https://npm.pkg.github.com
```

#### 2. 更新 package.json

```diff
{
  "dependencies": {
-   "@yogyoung-code/ai-brand-kit": "0.[X].0"
+   "@medsci/ai-brand-kit": "1.0.0"
  }
}
```

#### 3. 全代码替换 import 路径

```bash
# 自动 codemod
npx @medsci/codemod-rename-import @yogyoung-code/ai-brand-kit @medsci/ai-brand-kit

# 或手动
find src -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) \
  -exec sed -i '' 's|@yogyoung-code/ai-brand-kit|@medsci/ai-brand-kit|g' {} +
```

#### 4. 重装

```bash
rm -rf node_modules package-lock.json
npm install
```

### Timeline

- **T+0**：本版本发布
- **T+0**：旧包 `@yogyoung-code/ai-brand-kit` 标记 deprecated
- **T+30**：所有产品必须迁移完毕
- **T+90**：旧包 archive；GitHub Packages 上保留 read-only

### Support

- 双包并行 30 天（T+0 到 T+30）
- 旧包仅接收安全 patch；不接收新功能
- 客户问题统一在 `@medsci/ai-brand-kit` 上跟踪

**SHA-256**: `[shasum]`

**梅斯健康集团 · 2415.HK**
````

---

## 引用文档

- `06a-npm-semver.md` v0.2 §6 prerelease / §7.2 SOP / §8 回滚 / §9 客户接入 / §12 MSH 迁移
- `react/PUBLISH.md` 步骤化发布手册
- `react/CHANGELOG.md` 包级 changelog
- `governance/06a-signoff-packet.md` 双签 packet
