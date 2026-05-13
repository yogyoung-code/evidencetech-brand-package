# Changelog

All notable changes to `@yogyoung-code/ai-brand-kit` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
governed by `06a-npm-semver.md` v0.2.

> **版本治理**：本包同时遵守两套版本号——
> - 品牌包文档版本（v1.0 / v1.1，按 `06-governance.md` §1）
> - NPM 包版本（v0.1.0 / v1.0.0，按严格 SemVer · `06a-npm-semver.md` §2）
>
> 双轨映射规则：见 `06a-npm-semver.md` §1 / §4 双向触发矩阵。

---

## [Unreleased]

### Planned for v0.2.0（与 04 子文档批次 v0.2 已签同步落地 · 60 天内）

- **a11y patch**（继承 04a v0.2）：13 组件 aria-label / role / aria-expanded / aria-controls 全覆盖；焦点环 token 化；prefers-reduced-motion 全 kit 兜底
- **motion patch**（继承 04b v0.2）：4 缓动 + 4 时长 token 注入 ai-tokens.css；新增 `<Spinner />` / `<Skeleton />` / `<Toast />` / `<ToastProvider />` / `<ProgressBar />`
- **撤回工具**（与 03f §3.4 撤稿响应协同）
- **侧边面板**（继承 04b §5.1）：缓动 / 时长 / Esc / 焦点返回触发器
- **错误反馈三冗余**（继承 04b §6.4 / §B8）：振动 + 红框 + 错误文字；reduce-motion 关振动

### Planned for v1.0.0（≥ 60 天后；满足 06a §1.3 全部 6 项条件后）

- 进入稳定 API 承诺
- 完整 a11y CI（axe-core / Pa11y / Lighthouse · 0 critical / ≥ 95）
- Migration Guide 自 v0.2.0
- 拆包评估（pnpm + changesets · 06a §11.3）—— 与 v2.0.0 + MSH org 迁移同时

---

## [0.1.0] — 2026-05-08（首发 · early development phase）

### Added — 13 组件 + 11 token + 12 SVG

#### 信任层组件（7）

- `PITLBadge` —— Physician-in-the-Loop 医师在回路徽章；默认显示 "PITL" 缩写，`--full` variant 显示完整描述
- `AIOBadge` —— AI Optimization 检索优化徽章；折角文档 + 勾选 icon
- `VGIMark` —— Verified Generative Intelligence™ 成分标识；透明 + 主色描边盾
- `NanoCitation` —— 纳米级引用 [n]；带 `onActivate` 回调对接侧边面板
- `CoTIndicator` —— Chain-of-Thought 思维链 dot-spiral 动画；5 圆点 1.2s 呼吸 + 80ms 错峰
- `DiffView` —— 差异对比；红绿语义 + 文字标记（继承 04 §5）
- `Disclosure` —— 渐进披露 L1/L2/L3；`defaultExpanded` 属性 + 内置 `matchMedia('(max-width: 768px)')` 断点检测 + `urgency="warning"` 强制全展开

#### Logo 系统（4）

- `Logo` —— 产品 logo（icon + wordmark · 5 尺寸阶梯 wm-xl/lg/md/sm/min）
- `Wordmark` —— 独立 wordmark（mixed-case 双色 / RCP 三字母+贯穿线）
- `EndorsementSignature` —— "由 梅斯健康 出品" 背书签名（`#666666` · 28px 以下隐藏）
- `BrandScope` / `BrandScopeInline` —— 产品 scope provider（`brand-de` / `brand-se` / `brand-di` / `brand-rcp`）

#### 母品牌（2）

- `MasterBrandLogo` —— 母品牌 logo（4 变体 × 3 构图 = 12 SVG · default / reverse / mono-navy / mono-black × en / cn / full）
- `CoBrandLockup` —— 联合品牌 lockup（母品牌高 = 产品 wordmark × 1.4 · 分隔线 #CBD5E1）

#### 产品 icon（4）

- `DEEcgIcon` —— DeepEvidence ECG 心电图
- `SEBarsIcon` —— SeekEvidence 频谱条
- `DIConstellationIcon` —— DeepInsight 星座（双环 hub · variant C）
- `RCPPulseIcon` —— Rapid Clinical Pulse 锐脉（单笔 ECG · variant C · DE fillet 配方对齐）

### Tokens（11 常量）

- `PRODUCT_PRIMARY` / `PRODUCT_PRIMARY_RGB` —— 4 产品主色映射
- `WORDMARK_SIZES` / `WORDMARK_PARTS` / `WORDMARK_ICON_GAP_RATIO` —— wordmark 尺寸阶梯
- `ENDORSEMENT_COLOR` / `ENDORSEMENT_COLOR_REVERSE` / `ENDORSEMENT_RATIO` / `ENDORSEMENT_MIN_WORDMARK_PX` —— 背书签名规则
- `RCP_FULL_NAME` / `RCP_WORDMARK_TEXT` —— RCP 命名常量

### Styles & Assets

- `dist/styles.css` —— 14.8 KB · 含 4 产品色 + 信任徽章 + 引用 + CoT + Diff + endorsement 全部 CSS 变量
- `dist/assets/master-brand/*.svg` —— 12 SVG 母品牌资产

### Build & Distribution

- ESM + CJS 双格式（`dist/index.js` / `dist/index.cjs`）
- TypeScript 类型定义（`dist/index.d.ts` / `dist/index.d.cts`）
- Source maps 完整
- exports 字段 9 条（主 / styles.css / tokens / master-brand SVG glob / package.json）
- peer deps：React 18 + 19 双兼容
- engines：Node ≥ 18

### Package Metadata

- 包大小：**packed 1.0 MB / unpacked 3.3 MB**（含 12 SVG 母品牌资产 · 90% 体积）
- Tarball entries：27
- Registry：GitHub Packages（`https://npm.pkg.github.com`）· restricted access
- License：UNLICENSED（仅梅斯健康集团 + 旗下 4 AI 子品牌内部使用）

### Notes

- **早期发布期警告**：v0.x.x 阶段不视为公共 API 稳定承诺；客户接入须**精确锁版** `0.1.0` ✓ 而非 `^0.1.0` ❌（按 06a §2.3 + §9.1）
- **签字门槛**：本首发经 Tech Lead + Sponsor 双签（按 06a §2.2 MINOR 等级 / 首发等同新建公共 API）
- **下一版本**：v0.2.0 计划与 04 子文档批次 v0.2 协同（含 a11y + motion patch · 60 天内）

### Sources & Audit Trail

- 治理：`06-governance.md` §1 / §5.4 / §5.5
- SemVer：`06a-npm-semver.md` v0.2（双签升版后）
- 视觉规范：`02-brand-architecture.md` v0.6 / `04-visual-system.md` v0.2 / `04a-component-accessibility.md` v0.2
- React 包决策档案：`react/README.md` + `preview/screenshots/react-demo/manifest.json`
- 沙盒 baseline 验证：`06a-npm-semver.md` CHANGELOG 末尾"沙盒 Baseline 验证记录"

---

## Versioning Reference

详见 `06a-npm-semver.md` §2 SemVer 严格定义、§3 Breaking change 27 项清单、§4 双向触发矩阵、§5 Deprecation 周期、§6 Prerelease 策略。

任何升版前必走 06a §7.4 14 条 publish 校验清单。
