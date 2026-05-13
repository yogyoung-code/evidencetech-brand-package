# AI Brand Kit · 会话 Handoff 文档

**作用**：让新会话的 AI 助手能快速吃完上下文，不需要重新讨论已锁定的决策。
**v1.0 完成时间**：2026-05-05
**v1.x 扩展时间**：2026-05-06（母品牌锦上添花）+ 2026-05-07（VitePress 文档站点）。详见 §10 / §11。

---

## 1. 一段话上下文

我们为梅斯健康（hk.02415）的 4 个 AI 产品（DeepEvidence / SeekEvidence / DeepInsight / Rapid Clinical Pulse）做了一个完整的 AI 子品牌包，挂在 MedSci Healthcare 母品牌 v1.1 之下。架构选择是 **branded house with shared trust layer**（参 Atlassian 模式）：每个产品保留独立色相和 UI 设计语言，通过共享的"信任层 + 命名 + 文案 + endorsement signature"绑定为家族。中文为主语言，英文为辅。v1.0 所有交付物落盘在 `outputs/ai-brand-kit/` 目录下。

---

## 2. 必读文件（按阅读顺序）

进入新会话时，第一件事是 **Read 这 4 个文件 + 本 HANDOFF**，加起来约 6 万字符，吃完即拥有全部上下文：

1. **`HANDOFF.md`**（本文件）← 全局入口；§3 锁定决策、§5 当前进度、§10 本次会话产物
2. **`README.md`** ← 包含母品牌偏离条款表、四产品色彩矩阵、文件清单、决策回溯表
3. **`02-brand-architecture.md`** ← Logo / wordmark / endorsement / RCP 贯穿横线 + §4.3.1 母品牌变体规则（v0.6+）
4. **`04-visual-system.md`** ← 三大信任徽章 + CoT + Diff View + 图像政策（v0.2）

按需读：

- `00-architecture-locked.md` — 架构层决策（branded house 模型 + 共享信任层）
- `01-gap-audit.md` — 三原型现状审计
- `03-brand-voice.md` — CN 主语言、禁词、命名、写作规则
- `05-rectification-checklist.md` — 三原型按 sprint 排期的整改 To-Do
- `06-governance.md` — 变更流程、CHANGELOG、责任分工
- `ai-tokens.css` — 生产级 CSS token，可直接给前端工程师
- `react/README.md` — React 组件包 v0.1.0 接入指南
- `preview/{rcp,di,vgi,master-brand}-*/README.md` — 4 组 production 化决策档案

预览页（视觉验证用，不进生产）：

**v1.0 锁定档案**（决策已固化，仅作回溯参考）：
- `preview/wordmarks-preview.html` — 四产品 logo 在不同尺寸/背景下的渲染（已同步 RCP/DI production path）
- `preview/visual-system-preview.html` — 信任徽章 + CoT 动画 + Diff View 实时渲染
- `preview/icon-directions-preview.html` — DI/RCP 图标设计档案（v0 占位决策档案，保留作历史）
- `preview/endorsement-alignment-comparison.html` & `endorsement-color-comparison.html` — endorsement 决策档案

**2026-05-06 production 化档案**：
- `preview/rcp-iconography/index.html` — RCP 3 变体对比（A/B/C，C 已选）
- `preview/di-iconography/index.html` — DI 3 变体对比（A/B/C，C 已选）
- `preview/vgi-mark/index.html` — VGI 12 standalone SVG 资产预览
- `preview/master-brand-logos/index.html` — 母品牌 4 变体 × 3 构图预览
- `react/demo/index.html` — React 包 9 段视觉验证（importmap ESM + dist/）

---

## 3. 不要重新讨论的锁定决策（避免回炉）

| 决策 | 锁定值 | 来源 |
|---|---|---|
| 品牌架构 | branded house with shared trust layer | README §1 |
| 四产品主色 | DE `#2563EB` · SE `#9333EA` · DI `#0891B2` · RCP `#0F62FE` | README §4 |
| Wordmark 字体 | Teko Bold（mixed-case） | `02` §1.1 |
| Wordmark 结构 | DE/SE/DI = 双色（产品色 prefix + 黑 suffix）；RCP = 三字母全黑 + 彩色贯穿横线 | `02` §1.2 |
| Endorsement signature | "由 梅斯健康 出品" / "by MedSci Healthcare"，色 `#666666`，与 icon 左对齐 | `02` §2 |
| 主语言 | 中文为主，英文为辅 | README §2 偏离条款 |
| DI 图标 | 星座（DI-2）— 节点网络 | `02` §1.3 + `preview/icon-directions-preview.html` |
| RCP 图标 | 锐脉（RCP-1）— 单笔 ECG | 同上 |
| RCP 贯穿横线 | 粗细 0.09em（与 icon stroke 等粗）+ 略超 P 字母 0.15em + z-index 在 RCP 文字下方 | `02` §1.7.1 |
| 信任徽章默认 wordmark | 仅缩写："PITL" / "AIO" / "VGI™"；`--full` variant 显示完整描述 | `04` §2 |
| AIO icon | 折角文件 + 勾选（不是印章+虚线） | `04` v0.2 修订 |
| Diff View 配色 | 复用母品牌 error / success token，不开新色 | `04` §5 |
| CoT 动画 | dot-spiral 演化版，5 圆点循环呼吸 1.2s，节点错峰 80ms | `04` §4 |
| **RCP icon production v1.0** | variant C · 与 DE fillet 配方对齐（peak/trough/次峰 r=0.25 / baseline 转换 r=1.5）| `02` §1.3 + `preview/rcp-iconography/` |
| **DI icon production v1.0** | variant C · Hub-as-Star · 双环 hub（内 r=1.4 实心 + 外环 r=2.4 stroke=1.0），节点统一 r=1.3，连线 stroke=1.3 opacity=0.5 | `02` §1.3 + `preview/di-iconography/` |
| **母品牌 logo variant 规则** | default / reverse / mono-navy / mono-black × en / cn / full = 12 文件；最小尺寸 24px；reverse slogan 用 78% 白 | `02` §4.3.1 + `preview/master-brand-logos/` |
| **CoBrandLockup 比例** | 母品牌 logo 高 = 产品 wordmark × 1.4；竖分隔线高 = master × 0.6；分隔线色 `#CBD5E1`（反白态用 30% 白） | `02` §4.3 |

如用户在新会话提议改动以上任意一项，先确认这是 RFC 级别变更（按 `06-governance.md` §2 流程），不是临时修改。

---

## 4. 已显式偏离母品牌 v1.1 的条款（合规但不可"反向修复"）

| 条款 | 母品牌 | AI Brand Kit |
|---|---|---|
| 色彩 | 单色相蓝系 + Logo 青强调 | 四产品独立色相 |
| 主语言 | 英文 default | 中文 default |
| 字体 | Footlight + Inter + Mono + Noto Serif | 新增 Teko（仅 wordmark）；RCP 内部用 IBM Plex |
| 渐变 | 三组 certified gradient 唯一 | 每产品独立 hero 渐变（4 个新增） |

这些是 Sponsor（Yog）于 2026-05-05 拍板的偏离，**不是 bug**。新会话如有 AI 助手"修正"这些偏离，要拦截。

---

## 5. v1.0 明确未交付（后续工作的候选切入点）

| 项 | 状态 | 工作量预估 |
|---|---|---|
| **三原型实际改造**（DE/SE/RCP 按 `05-rectification-checklist.md` 整改） | ⬜ 未启动 | 3 个 sprint（按清单分 P0/P1/P2） |
| **DI 产品视觉系统**（DI 尚未开发） | ⬜ 未启动 | 进入开发时直接按 kit 实施 |
| **DI 图标生产级矢量化** | ✅ 完成 v1.0（2026-05-06，variant C · Hub-as-Star · 双环 hub）| 决策档案见 `preview/di-iconography/` |
| **RCP 图标生产级矢量化** | ✅ 完成 v1.0（2026-05-06，variant C · 与 DE fillet 配方对齐）| 决策档案见 `preview/rcp-iconography/` |
| **VGI Mark 最终 SVG 资产** | ✅ 完成 v1.0（2026-05-06，12 个 standalone SVG：glyph 6 + compact 2 + full 4）| 资产位置 `preview/vgi-mark/` |
| **Figma 组件库** | Sponsor 决定 v1.0 不做（可在 v2 评估） | 设计师 1–2 day（如要做） |
| **React 9 段截图存档** | ✅ 完成（2026-05-07，Sponsor 本地执行）：9 张 PNG + manifest.json 已生成至 `preview/screenshots/react-demo/`，索引页可正常渲染卡片矩阵 | — |
| **母品牌 reverse / monochrome logo 接入** | ✅ 必交付 + 锦上添花全部完成（2026-05-06）：12 SVG + 75 PNG + Clear-Space spec + A11y 64 组对比度 + Layer 文档 + usage.html 视觉档案 | `assets/master-brand/`（含 png/ + 3 份 .md + a11y JSON）、`preview/master-brand-logos/usage.html` |
| **共享 React 组件包**（13 组件 + helpers）| ✅ 完成 v0.1.0（2026-05-06）| 包路径 `react/`；含 11 信任/Logo + MasterBrandLogo + CoBrandLockup |
| **AI Brand Kit 文档站点**（VitePress） | ✅ 完成 v1.0（2026-05-07）· 46 HTML 页 · 含 11 iframe demo + token 浏览器 + 资产下载 + 12 个同步 spec · build 通过 · 站点路径 `docs/` | — |
| **NPM 私包打包**（`@yogyoung-code/ai-brand-kit`） | ⏳ 部分 — 已配置 tsup 构建 + package.json exports；尚未实际发布到私 registry | 工程 0.5 day |
| **母品牌锦上添花资产**（PNG 栅格 / a11y 报告 / clear-space / 详细图层说明）| ✅ 完成（2026-05-06）；剩余项（slogan 反白色官方 sign-off / motion 反白态 / ICC + Pantone / 视频片头）等母品牌团队补 | — |

---

## 6. 几个容易踩的坑

- **"终结 AI 幻觉"是禁词等价**——战略 PDF 原文里有，但 `03-brand-voice.md` §6 已禁用；改用"每一句结论可验证"
- **Hippocrates 是 DeepEvidence 内部代号**，不允许出现在任何对外材料
- **AIO = AI Optimization**（AI 检索优化，类比 SEO），不是 All-In-One；详见 `00` §5.2 缩写说明
- ~~**DE/SE 现有 logo 动效文件用了旧色** `#2c65c9` 和 `#893BE1`~~ ✅ 已解决（2026-05-07）：用户上传 4 份动效文件后由本会话统一替换为新主色 `#2563EB` / `#9333EA`，归档于 `preview/`：
  - `de-logo-animation.html`（DE icon + wordmark）
  - `se-logo-animation.html`（SE icon + wordmark · wordmark 文本已由"Deep+Evidence"修正为"Seek+Evidence"）
  - `de-icon-animation.html`（DE icon 独立动效 · 心跳脉动 + 紫→靛→蓝渐变圆环；hero/feature 场景）
  - `se-icon-animation.html`（SE icon 独立动效 · 音浪呼吸 + 蓝→靛→紫变频追逐圆环；hero/feature 场景）
  - DE/SE icon 动效的渐变紫色端点已由 `#A855F7` 严格对齐为 `#9333EA`（2026-05-07 Sponsor 决议：品牌色 token 优先于跨产品视觉对仗）
- **RCP wordmark 永远是 "RCP" 三字母**，不允许在 logo 里显示 "Rapid Clinical Pulse" 全称（即使是 Hero 大字号）；全称只能出现在正文首次提及（参 `02` §1.2.3）
- **"梅斯医学"是兄弟业务平台**（医生社区），与 AI 子品牌严格不互换（参 `03` §5.4）
- **绿色不是 brand color**，仅用于 success state（Diff View 新增、Verified ✓）
- **不允许 AI 生成医学影像**（FTC 红线，沿用母品牌 v1.1）

---

## 7. 关键信任层组件接入方式（给工程师/AI）

```html
<!-- 1. import ai-tokens.css 在母品牌 colors_and_type.css 之后 -->
<!-- 2. 产品根容器加 scope class -->
<body class="brand-de">  <!-- 或 brand-se / brand-di / brand-rcp -->

  <!-- PITL Verified 徽章（默认紧凑） -->
  <span class="badge-pitl">
    <svg class="badge-pitl-icon" viewBox="0 0 24 24"><!-- shield+check --></svg>
    PITL
  </span>

  <!-- AIO Official 徽章 -->
  <span class="badge-aio">
    <svg class="badge-aio-icon" viewBox="0 0 24 24"><!-- folded-doc+check --></svg>
    AIO
  </span>

  <!-- VGI Ingredient Mark -->
  <span class="vgi-mark">
    <svg class="vgi-mark-icon" viewBox="0 0 24 24"><!-- shield+check outline --></svg>
    VGI<sup>™</sup>
  </span>

  <!-- Nano-Citation -->
  <span class="nano-citation">[1]</span>

  <!-- CoT 动画 -->
  <span class="cot-trace">
    <span class="cot-dot"></span><span class="cot-dot"></span>
    <span class="cot-dot"></span><span class="cot-dot"></span>
    <span class="cot-dot"></span>
  </span>

  <!-- Diff View -->
  <span class="diff-removed">必须立即停用</span>
  <span class="diff-added">在 INR > 3.0 时建议停用</span>

  <!-- Progressive Disclosure -->
  <div class="disclosure">
    <p class="disclosure-l1">核心结论</p>
    <p class="disclosure-l2">证据摘要</p>
    <p class="disclosure-l3">溯源细节</p>
  </div>

</body>
```

完整 SVG path 见各 preview HTML 文件的 inline SVG。

---

## 8. 决策回溯（如新会话用户问"为什么 X"）

参见 `README.md` §7 的决策档案速查表。如某条规则疑问，可按以下顺序回溯：

| 问 | 看哪里 |
|---|---|
| "为什么 wordmark 是 mixed-case 不是全大写？" | `02` v0.2 修订笔记 |
| "为什么 wordmark 主色 = UI 主色？" | `02` v0.3 修订笔记 |
| "为什么 RCP wordmark 是缩写不是全名？" | `02` v0.5 + `preview/icon-directions-preview.html` |
| "为什么 endorsement 是 #666666？" | `02` v0.6 + `preview/endorsement-color-comparison.html` |
| "为什么与 icon 左对齐？" | `preview/endorsement-alignment-comparison.html` |
| "为什么 DI 是星座？" | `preview/icon-directions-preview.html` 决策表 |
| "为什么 AIO icon 是折角文件？" | `04` v0.2 修订（小尺寸不清晰） |
| "为什么徽章默认是缩写？" | `04` v0.2 修订 |

---

## 9. 给新会话 AI 的开场建议（2026-05-07 更新）

进入新会话第一件事：**Read 本 HANDOFF.md（必读）+ `discovery-report-CN.md`（必读）+ `governance/` 6 个流程文档（按需）**。读完即拥有全部上下文。

读完后可对用户说：

> "我已读过 AI Brand Kit 全部上下文（HANDOFF + discovery-report + governance 流程档案 + 03/03a/03e/03f/04/04a/04b/04c 全部 spec + brand-voice-guidelines）。
>
> **当前状态**：
> - v1.0 完整 + 2026-05-06 母品牌锦上添花 + React v0.1.0（13 组件）+ VitePress 46 页 ✅
> - **Voice 层 v0.2 已签**（C Yang 市场 + B Chen 法务 · 2026-05-06）—— 03 §10 + 03a + 03e + 03f
> - **04 子文档批次 v0.2 已签**（C Yang 市场 + ZL Chen Tech Lead + Bruce Chen 法务 · 2026-05-08 三签）—— 04a + 04b + 04c
> - **Voice 层 v0.3 双签完成**（C Yang + Bruce Chen · 2026-05-08）—— 03c 邮件 + 03g 竞品对比；03 主文档版本号 v0.3
> - **Voice 层 v0.3 三签完成**（C Yang + ZL Chen + Bruce Chen · 2026-05-08）—— 03d 错误边界态；voice 层 v0.3 升版完整闭环
> - **06a NPM SemVer v0.2 双签完成**（ZL Chen + Yog · 2026-05-08）—— NPM 包 SemVer 治理规则正式生效；react v0.1.0 真有规则约束
> - **react 包 v0.1.0 真首发完成**（2026-05-08）—— `@yogyoung-code/ai-brand-kit@0.1.0` 已发布到 GitHub Packages（latest tag）
> - **强制层 brand-voice-guidelines** ✅ 已落地（symlink 验证生效）—— 59 条红线 brand-voice-enforcement 技能自动应用（待更新 v0.3 候选 + 06a 红线 ~95 条）
> - **Voice gap 进度**：**10/10 v0.2 已签 ✨ 完整闭环**（#1-#10 全部 v0.2 已签）
>
> **可推进的工作**：
> ① **03d 三签 packet 编制**（市场 + Tech Lead + 法务 · ~830 行 / 涉工程 + 临床敏感 + 监管措辞）
> ② **06a 双签 packet 发起**（Tech Lead + Sponsor · packet 已编制 governance/06a-signoff-packet.md · 让 react v0.1.0 真有规则约束）
> ③ **三方决议会议**：实证库工具选型（开源自建 NocoDB / Baserow / PG+FastAPI 候选）—— T+3 天内启动，与 04c 临时素材库基础设施复用
> ④ **工程层未启动**：ai-tokens.css 注入 motion tokens（B10）+ a11y CI 集成 + react 包 v0.2.0（含 a11y / motion patch + 撤回工具 + 4 新组件）+ DKIM/SPF/DMARC 配置 + 退订系统校验 + 双 opt-in 注册流程上线
> ⑤ **v0.3.1 patch 候选**：销售/BD onboarding 培训追加 1-2 周 + Battle Card 加密 SaaS + Battle Card 模板初稿 + 邮件模板速查卡 + 真人医生判定指南 + 错误文案速查卡 + 市场新人速查卡 / 04 子文档速查卡 / dot-spiral 母题范例库 / QA a11y 测试用例库
> ⑥ **法务交付物**：《过渡期摄影申请表》+《知情同意书》模板（30 天内 · C3）+ 真人医生判定指南 v0.2.1
> ⑦ **强制层 v0.3 候选**：把 03c + 03g 核心红线同步进 governance/brand-voice-guidelines.md（~85 条红线）
>
> 要从哪一项开始？"

**对锁定决策的态度**：

- voice 层 25 条已签决议 + 04 批次 34 条已签决议 = **59 条红线**全部已锁；任何改动需走 06 §2 RFC 流程或 v0.2.1 patch
- 提议改动 v0.2 已签条款 → 引用 06 §2.1 "minor 内修订双/三签流程"（voice 层双签 / 04 批次三签）
- **锁定决策清单**完整路径：
  - voice 层：`governance/v0.2-batch-review-resolution.md` §1 + `v0.2-sponsor-decisions.md`
  - 04 批次：`governance/04-subdocs-batch-review-packet.md` §4（A1–A8 / B1–B10 / C1–C11 / X1–X5）

**读文件优先级**（从必读到按需）：

1. **本 HANDOFF.md** —— §13–§20 是 2026-05-07 全部进度
2. **discovery-report-CN.md** —— "更新记录" 段是按时间线的修订追溯
3. **governance/v0.2-second-round-signoff.md** —— voice 层 v0.2 双签留痕（C Yang + B Chen · 2026-05-06）
4. **governance/04-subdocs-batch-review-packet.md** —— 04 批次三签待发的 packet
5. **governance/brand-voice-guidelines.md** —— 59 条红线浓缩版（强制层）
6. **03 / 03a / 03e / 03f / 04 / 04a / 04b / 04c** —— 完整 spec（按需）

如用户对某条具体规则有疑问 → 优先查 governance/ 流程文档 + 源 spec；不要凭印象判断。

---

## 10. 2026-05-06 会话新增产物

### 10.1 文件清单（kit 根目录新增）

```
assets/master-brand/                12 SVG (default/reverse/mono-navy/mono-black × en/cn/full)
                                    + png/ (75 PNG: 60 base + 15 reverse-on-dark + manifest.json)
                                    + CLEAR-SPACE.md (净空 + 最小尺寸规则)
                                    + A11Y-CONTRAST.md + a11y-contrast.json (WCAG 2.1 64 组对比度)
                                    + LAYERS.md (图层结构 + 可拆分使用指南)
preview/rcp-iconography/            RCP 图标决策档案：3 变体对比 HTML + 9 SVG (variant-{a,b,c} × 3) + paths.json + README
preview/di-iconography/             DI 图标决策档案：3 变体对比 HTML + 9 SVG + elements.json + README
preview/vgi-mark/                   VGI 12 standalone SVG (glyph 6 + compact 2 + full 4) + 预览 HTML + README
preview/master-brand-logos/         母品牌决策档案：index.html + usage.html (PNG 阶梯 / 净空 spec / a11y / 图层) + README
react/                              React 组件包 v0.1.0（详见 §10.2）
scripts/                            构建脚本：build-rcp-paths.mjs / build-rcp-svg.mjs / build-di-elements.mjs
                                    / build-di-html.mjs / build-di-svg.mjs / build-vgi-svg.mjs
                                    / build-master-brand-svg.mjs / build-master-brand-png.mjs / build-master-brand-a11y.mjs
```

### 10.2 React 包结构（`@yogyoung-code/ai-brand-kit` v0.1.0）

```
react/
├── package.json                    name @yogyoung-code/ai-brand-kit · TypeScript · ESM+CJS
├── tsconfig.json
├── README.md
├── demo/index.html                 ESM importmap demo · 9 段视觉验证
├── scripts/
│   ├── copy-css.mjs                同步 ai-tokens.css 到 dist
│   └── copy-master-brand.mjs       同步 12 SVG 到 dist/assets
└── src/
    ├── index.ts                    主入口
    ├── tokens/                     四产品色 + 尺寸阶梯常量
    ├── primitives/                 BrandScope（产品 scope provider）
    ├── icons/                      7 SVG icons（PITL/AIO/VGI shield + DE/SE/DI/RCP product）
    ├── trust/                      PITLBadge / AIOBadge / VGIMark
    ├── content/                    NanoCitation / CoTIndicator / DiffView / Disclosure
    ├── logo/                       Logo / Wordmark / EndorsementSignature
    └── master-brand/               MasterBrandLogo / CoBrandLockup + url helpers
```

**13 组件清单**：

| 类别 | 组件 |
|---|---|
| 信任层 7 | PITLBadge · AIOBadge · VGIMark · NanoCitation · CoTIndicator · DiffView · Disclosure |
| Logo 系统 4 | Logo · Wordmark · EndorsementSignature · BrandScope |
| 母品牌 2 | MasterBrandLogo · CoBrandLockup |

构建：`cd react && npm install && npm run build`（`tsup --no-config` 走 CLI 标志，跳过 bundle-require 避免沙盒 unlink 限制）。

### 10.3 已修改的 v1.0 文档

- `02-brand-architecture.md` §1.3 — DI/RCP 行从 ⬜ 占位 改为 ✅ Production v1.0
- `02-brand-architecture.md` §4.3 — 新增 §4.3.1「母品牌 logo 变体选用规则」
- `preview/wordmarks-preview.html` — `ic-di` / `ic-rcp` symbols 同步换成 production path
- `HANDOFF.md` — 本文件（§3 / §5 / §9 / §10 全部更新）

### 10.4 已记录但未启动的依赖

- 母品牌 W2 锦上添花资产中 ✅ 本地能交付的已交付（PNG 栅格 / Clear-Space / A11y / Layers）；剩余项需母品牌团队后补：slogan 反白色官方 sign-off · motion 反白态 · ICC color profile + Pantone 印刷色值 · 视频片头模板
- ~~DE/SE 现有 logo 动效文件用了旧色 `#2c65c9` / `#893BE1`~~ ✅ 已解决（2026-05-07）：4 份动效（logo + icon-only）均归档于 `preview/`：`de-logo-animation.html` / `se-logo-animation.html`（含 SE wordmark 文本修正）/ `de-icon-animation.html` / `se-icon-animation.html`。DE/SE icon 动效渐变紫色端点同步对齐 SE 主色 `#9333EA`
- ~~React 包尚未发布到私 NPM registry~~ ✅ Registry 锁定（2026-05-07）：**GitHub Packages** (`https://npm.pkg.github.com`)。**v0.1.0 临时阶段包名**：`@yogyoung-code/ai-brand-kit`（使用 Sponsor 个人 GitHub 账号 `yogyoung-code/ai-brand-kit` 仓库）；MSH org 成立后按 `06-governance.md` §5.4 迁移规程改为 `@medsci/ai-brand-kit`。`react/package.json` 已加 `publishConfig` + `repository`；首次发布步骤、PAT 配置、迁移规程见 `06-governance.md` §5.4

### 10.5 母品牌锦上添花交付摘要（2026-05-06）

| 资产 | 数量 / 形态 | 路径 |
|---|---|---|
| PNG 栅格 | 75 张（60 base 5 高度档 × 12 SVG + 15 reverse-on-dark） | `assets/master-brand/png/` |
| PNG manifest | 索引 JSON（含每张 viewBox / 尺寸 / 字节） | `assets/master-brand/png/manifest.json` |
| Clear-Space spec | Markdown · 含 ½X 最小 + 1X 推荐 + 数字与印刷最小尺寸表 + co-brand 当量速查 + 校验清单 | `assets/master-brand/CLEAR-SPACE.md` |
| A11y 对比度报告 | 64 组对比度 · 4 变体前景 × 8 代表背景 · WCAG AA/AAA 评级 + 推荐使用规则 + 红线 | `assets/master-brand/A11Y-CONTRAST.md` + `a11y-contrast.json` |
| 图层结构文档 | 6 层索引（icon / wordmark EN/CN / slogan EN/CN / icon CN）+ 颜色 token 替换矩阵 + 允许 / 不允许的拆分 + viewBox 裁切方法 | `assets/master-brand/LAYERS.md` |
| 视觉档案（统一入口） | usage.html · 5 段（PNG 栅格 / Clear-Space / A11y / Layers / 校验清单） | `preview/master-brand-logos/usage.html` |

---

## 11. 2026-05-07 会话新增产物（文档站点）

### 11.1 文件清单（kit 根目录新增）

```
docs/                              VitePress 站点根
├── package.json                   仅含 vitepress 依赖
├── README.md                      命令速查
├── .vitepress/config.mts          nav / sidebar / 主题（master brand 蓝青）
├── public/                        symlinks → ../../preview ../../assets ../../react ../../ai-tokens.css
├── index.md                       landing（hero + 6 features + 30 秒速读）
├── getting-started.md             4 受众入门指南（工程 / 设计 / BD / Sponsor）
├── foundation/                    README + HANDOFF + 00 + 01 = 4 页（同步而来）
├── architecture/                  02 = 1 页
├── voice/                         03 = 1 页
├── visual/                        04 = 1 页
├── master-brand/                  overview + clear-space + a11y + layers + usage = 5 页
├── components/                    overview + trust-layer + logo + master-brand-comp = 4 页
├── governance/                    06 + 05 + site-deploy = 3 页
├── demos/                         index + 11 iframe demo 页 = 12 页
└── assets-browser/                tokens + downloads = 2 页

scripts/sync-docs.mjs              kit 根 .md → docs/ 同步（重写相对链接）
scripts/build-demo-pages.mjs       11 个 demo 页生成器
```

### 11.2 站点配置要点（已锁定）

- VitePress 1.6.4 · Node ≥ 20 · TypeScript config（.mts）
- 顶部 nav 6 域：基础 / 设计系统 / 母品牌 / 组件 / 资产 / 治理
- 内置全文搜索（local provider）
- `srcExclude: ['public/**/*.md']` — 阻止 symlink 目录里的 .md 被 VitePress 当作页面（否则 build 失败）
- `vite.server.fs.allow: ['..', '../..']` — 允许访问父目录（symlink 目标）
- iframe demo 嵌入策略：iframe `src` 指向 `/preview/...` 或 `/react/demo/...`，VitePress 通过 public/ symlink 解析到 kit 根
- 站点跑通：`cd docs && npm run build` → 46 HTML · build 时间 ~15s · dist 100MB（主要是 75 PNG）

### 11.3 已修改的文档

- `HANDOFF.md` — §5 / §9 / §10 / §11 全部更新
- `README.md` — §3.2 / §3.3 / §9 同步引用文档站点
- `preview/master-brand-logos/README.md` — usage.html 指引

### 11.4 部署待选（未启动）

- GitHub Pages（Actions YAML 已写在 site-deploy.md，复制即用）
- Vercel（连 repo + pre-build hook 跑 sync 脚本）
- 内部 nginx（rsync `dist/` 到静态目录）

需要域名 / SSO / 内网托管的话，由 Sponsor 决定后跑一次部署演练。

---

## 12. 2026-05-07 会话新增产物（截图存档）

### 12.1 文件清单

```
preview/screenshots/                React 9 段视觉验证截图存档
├── index.html                      档案展示页（meta bar + 9 卡片矩阵 + 决策档案跳转）
├── README.md                       生成 / 用法 / 重跑节奏
└── react-demo/                     ⏳ 待用户本地跑后填充（沙盒 aarch64 拉不到 chromium）
    ├── section-1-trust-badges.png  ↑ 9 张 PNG（执行后生成）
    ├── ...
    ├── section-9-cobrand-lockup.png
    └── manifest.json               含 React 包版本 / 截图日期 / spec 锚点

scripts/build-react-demo-screenshots.mjs   截图脚本（puppeteer + 内建 HTTP 服务器）
docs/demos/react-screenshots.md            VitePress 站点接入页（iframe 嵌 index.html）
```

### 12.2 用户本地执行步骤

```bash
cd react && npm install && npm run build       # 确保 dist 已构建
cd .. && npm install puppeteer                  # 首次约 200MB chromium 下载
node scripts/build-react-demo-screenshots.mjs   # 生成 9 张截图
```

执行成功后 `preview/screenshots/index.html` 会自动从 `manifest.json` 拉数据并渲染卡片矩阵；空状态下显示运行指引。

### 12.3 配套文档

- `HANDOFF.md` §5 / §12（本节）
- VitePress sidebar 加入「React 9 段截图存档」
- demos/index.md 的索引表加入新行

---

## 13. 2026-05-07 brand-discovery 会话产物（最近一次会话）

本会话基于 `brand-voice:discover-brand` 流程对工作目录做穷尽式扫描，生成两份发现报告（中英），并在用户主导下批量解决了 11 项待决问题、2 项中优先级、4 项低优先级，以及一系列连带工程整改。两份报告保存为 `discovery-report.md` / `discovery-report-CN.md`，含完整"更新记录"段。

### 13.1 已落地的关键决议

| # | 决议 | 主要落点 |
|---|---|---|
| 高 1 | DI 主色 `#0891B2` 锁定（移除"暂定"） | `00-architecture-locked.md` §3 |
| 高 2 | DI 图标变体 C 接受为可读，不加产品级降级例外 | `02-brand-architecture.md` §1.3 |
| 高 3 | `<CitationSidePanel />` 由 `@yogyoung-code/ai-brand-kit` v0.2 共享交付（产品禁止独立实现） | `05-rectification-checklist.md` §5 |
| 高 4 | CN 主语言策略适用于用户可见的错误/异常/空态文案；代码层标识符（错误码、API 字段、日志）保留英文 | `03-brand-voice.md` §1.1 |
| 高 5 | "梅斯 AI" / "MedSci AI" 获准作为 AI 子品牌伞标固定简称（不得拆分为"梅斯"+"AI"；母品牌正式署名仍用"梅斯健康"） | `02-brand-architecture.md` §5.4 + `03-brand-voice.md` §2.1 |
| 中 6 | DE/SE 旧色统一：`#2c65c9` → `#2563EB`、`#893BE1`/`#893CE1` → `#9333EA` | `preview/de-logo-animation.html` / `se-logo-animation.html` / `de-icon-animation.html` / `se-icon-animation.html`（共 4 份动效，含 SE wordmark "Deep"→"Seek" 修正） |
| 中 7 | 渐进披露移动端规则反转为"L1+L2 默认展开"（与桌面对齐）；新增共享 `<Disclosure>` 组件契约（`defaultExpanded` + 断点检测 + `urgency="warning"`） | `04-visual-system.md` §6.3 + §6.4 |
| 低 8 | "24h" 措辞规则正式化（带 `(n=X, 来源)` 否则改写"敏捷/目标:24h"） | `03-brand-voice.md` §3.4 |
| 低 9 | NPM 私有 registry 锁定为 GitHub Packages；包名临时为 `@yogyoung-code/ai-brand-kit`（v0.1.0 阶段，使用 Sponsor 个人账号），MSH org 成立后按规程切回 `@medsci/...` | `06-governance.md` §5.4 + `react/package.json` |
| 低 10 | VitePress 文档站部署暂缓，现阶段本地 `npm run dev` 预览 | `06-governance.md` §5.2 |
| 低 11 | React 9 段截图档案已生成（Sponsor 本地执行） | `preview/screenshots/react-demo/` |
| 连带 | RCP 重新定位：受众扩为药企市场/医学/KA + 咨询/调研 + AI 公司；痛点改为寻找目标医生困难 + 任务成本高 + 反馈周期长；核心价值改为"让医生敏捷快速完成高价值医学任务"；CTA 改为"发起任务/Run a pulse/看任务反馈"；一句话定位改为"敏捷验证实验室——按需触达医生，加速高价值医学任务" | `03-brand-voice.md` §2.3 + §5.2 |
| 连带 | DE/SE icon 动效紫色端点 `#A855F7` → `#9333EA`（严格对齐 SE 主色，跨产品镜像方向保留） | `preview/de-icon-animation.html` / `se-icon-animation.html` |
| 连带 | 全包重命名 `@medsci/ai-brand-kit` → `@yogyoung-code/ai-brand-kit`（31 份源文件批量替换；GitHub 仓库 URL 同步） | 全仓库 |
| 连带 | 根 `package.json` 补 `name` + `version` + `private`，消除 `EINVALIDTAGNAME` 警告 | `package.json` |

### 13.2 待办事项（下一会话候选切入）

**工程层（即可执行）：**

1. **重生成构建产物**：包名重命名后，建议
   - `cd react && rm -rf node_modules package-lock.json && npm install && npm run build`
   - `cd docs && rm -rf node_modules package-lock.json && npm install && npm run build`
   - 然后跑 `node scripts/sync-docs.mjs` 让 docs 站源↔kit 根源对齐
2. **首次 NPM 发布演练**：在 `yogyoung-code/ai-brand-kit` 仓库就绪后按 `06-governance.md` §5.4 执行 `npm publish`

**品牌语音覆盖盲点（10 项，3/10 已 v0.2 双签升版 + 3/10 已起草草稿）：**

按发现报告"Coverage Gaps"段优先级：
1. ✅ **社交媒体语音规则** — `03a-social-media-voice.md` **v0.2 已签**（C Yang + B Chen · 2026-05-06）—— 8 平台（微信公众号 / LinkedIn CN+EN / 微博 / 知乎 / 抖音 / 小红书 / 视频号）+ 危机手册 6 类场景 + 14 条社交版自检清单；真人医生"代言 vs 使用介绍"二分；小红书产品教育白名单扩展；撤回时间窗法务收紧。
2. ✅ **华语区域化策略** — `03e-china-regionalization.md` **v0.2 已签**（C Yang + B Chen · 2026-05-06）—— 中国大陆受众分层：T1–T4（含 T4-A 公立基层 / T4-B 新业态）医院/医生 + MNC/国内大型 Pharma/Biotech-Mid-CRO-AI 3 层；§6.1 RACI 重写为"**大区独发 + 事后 review**"+ 危机响应 / 客户共发布 / MNC / Pharma 4 类前置双签例外；本地化申请单废弃改为事后报备。
3. ✅ **声明实证流程** — `03f-evidence-attestation.md` **v0.2 已签**（C Yang + B Chen · 2026-05-06）—— L1–L4 实证 + SourceID 完整体系 + 工具化承诺（开源自建 / NocoDB / Baserow / PG+FastAPI 候选）+ 撤稿响应完整版 + 数据 claim 链条 6 场景 + HKEX 招股流程 + 媒体兜底 3 工作日 + 学术合作合同模板化 + 14 条自检。
4. ✅ **交互组件可访问性** — `04a-component-accessibility.md` **v0.2 已签**（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签）—— 覆盖 13 React 组件 + Logo 系统的工程级 a11y：WCAG 2.1 AA 强制 / AAA 高合规建议；4 产品色 × 4 背景对比度矩阵 + 色盲测试；键盘交互；屏幕阅读器 aria 完整规范；触控 44×44；prefers-reduced-motion 全 kit 兜底；CI 集成（axe-core / Pa11y / Lighthouse）；14 条自检。
5. ✅ **动效指引** — `04b-motion-guidelines.md` **v0.2 已签**（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签）—— 覆盖通用 UI 动效（CoT 已禁用作通用 spinner 后核心补位）：4 缓动 + 4 时长 token + 通用加载 4 档分级 + **通用 spinner 与 CoT 显式视觉区分** + 容器动效 + 微交互三冗余 + Toast 4 类滞留 + 性能 60fps 底线 + 14 条自检。**待 v0.2 落地后注入 ai-tokens.css motion tokens（B10）**。
6. ✅ **摄影 / 插画过渡期政策** — `04c-photography-illustration-interim.md` **v0.2 已签**（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签）—— 覆盖母品牌 W2 交付前的临时素材使用：4 优先级摄影源 + 4 优先级插画源 + dot-spiral 母题 7 维细化 + AI 生成插画 FTC 红线扩展 + 17 条过渡期专属禁忌 + 摄影 SOP + PII 模糊化 + 临时素材库（独立 schema）+ W2 交付后 30 天迁移规程（含本文档归档）+ 12 条自检。**待法务 30 天内交付**：《过渡期摄影申请表》+《过渡期摄影知情同意书》模板。
7. ✅ **邮件模板语音** — `03c-email-templates-voice.md` **v0.2 已签**（C Yang + Bruce Chen · 2026-05-08 双签 · v0.3 batch packet）—— 14 章 / ~700 行 / 6 类邮件 + 10 模板库 + 退订合规（PIPL §17 / CAN-SPAM / CASL / GDPR）+ 真人医生 body 内禁照片 + 撤稿响应 R1-R4 子类。
8. ✅ **错误 / 边界 / 空态文案** — `03d-error-and-empty-state-voice.md` **v0.2 已签**（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签 · v0.3 tri-batch packet）—— 14 章 / ~830 行 / 错误三维分类（来源 × 严重度 × 临床敏感度）+ 4 段式 + 错误码命名 5 空间 + 18 禁忌 + 空态 6 子类 + PITL/撤稿/SourceID 临床特殊处理 + a11y/动效协同 + 求助 3 级 + 30 模板库。
9. ✅ **竞品 / 对比声明** — `03g-competitive-and-comparison-voice.md` **v0.2 已签**（C Yang + Bruce Chen · 2026-05-08 双签 · v0.3 batch packet）—— 12 章 / ~750 行 / 同行 4 类 + **5 条公开声明铁律 R1-R5** + 内部 Battle Card 规范 + 客户/媒体/RFP/学术/同行撤稿 5 类应答框架 + 10 模板库。
10. ✅ **NPM 包版本策略** — `06a-npm-semver.md` **v0.2 已签**（ZL Chen + Yog · 2026-05-08 双签 · packet `governance/06a-signoff-packet.md`）—— 14 章 / ~720 行 / 16 决议 N1-N16 / 27 项 breaking change A1-A27 / 双轨映射 / 半自动发布 / MSH 迁移即 MAJOR。配套产物：双签 packet + react/CHANGELOG.md + react/PUBLISH.md + react/.npmrc.example + 06a-release-notes-template.md + scripts/verify-exports.mjs。**与 voice 层 / 04 批次 packet 的关键差异：Sponsor 是实质签字人**（涉对外发布契约 / 客户依赖 / MSH org 迁移决策）。

**工程层（已落地）：**

✅ **react 包 v0.1.0 真首发完成**（2026-05-08）—— `@yogyoung-code/ai-brand-kit@0.1.0` 已发布到 GitHub Packages（latest tag）。完整流程详见 §21。

**强制层（推荐立即做）：**

- 生成 `.claude/brand-voice-guidelines.md`，让 `brand-voice:brand-voice-enforcement` 技能可在后续写作中自动应用本 kit 规范

**治理层（待后续）：**

- 本次 voice 层修订（§1.1 / §2.1 / §2.3 / §3.4 / §5.2）按 §9 治理流程需市场负责人 + 法务双签，正式升至 v0.2
- MSH 创建 GitHub `medsci` org 后，按 `06-governance.md` §5.4 迁移规程把包名切回 `@medsci/...`

### 13.3 文件变更摘要

**新增：**
- `discovery-report.md` / `discovery-report-CN.md`（两份双语发现报告，含完整修订追溯段）
- `preview/de-logo-animation.html` / `se-logo-animation.html` / `de-icon-animation.html` / `se-icon-animation.html`（4 份动效）
- `preview/screenshots/react-demo/*.png` + `manifest.json`（9 张截图）

**修订（按文件）：**
- `00-architecture-locked.md` — DI 主色锁定
- `02-brand-architecture.md` — DI 图标 §1.3 评估说明、§1.3 DE/SE 动效引用、§5.4 "梅斯 AI" 例外条款
- `03-brand-voice.md` — §1.1 错误文案 CN 规则、§2.1 "梅斯 AI" box、§2.3 RCP 一句话定位、§3.4 24h 规则、§5.2 受众矩阵 + RCP 行 + 标题、CHANGELOG
- `04-visual-system.md` — §6.3 移动端反转、§6.4 Disclosure 组件契约
- `05-rectification-checklist.md` — §5 CitationSidePanel 决议 + Disclosure v0.2 任务
- `06-governance.md` — §5.2 + §5.4（含完整迁移规程）
- `HANDOFF.md` — §5 / §6 / §10.4 / §13（本节）
- `docs/voice/brand-voice.md` / `docs/visual/visual-system.md` — 同步源文档变更
- `react/package.json` + 根 `package.json`（rename + 补字段）
- 全仓库 31 份源文件 sed 批量替换 `@medsci` → `@yogyoung-code`

---

## 14. 2026-05-07 voice gap 填补会话产物（社交媒体子文档）

本会话开始填补发现报告 §13.2 的 10 项 voice 覆盖盲点，按优先级顺序依次推进。本次完成 **#1 社交媒体语音规则**。

### 14.1 新增

- `03a-social-media-voice.md` v0.1 — 渠道执行手册子文档；覆盖 8 个社交平台（微信公众号 / LinkedIn CN+EN / 微博 / 知乎 / 抖音 / 小红书 / 视频号）+ 危机手册 6 类场景四档应对 + 14 条社交版发布前自检清单 + 真人医生政策（全平台禁代言）+ 平台资产尺寸表 + emoji / hashtag / CTA 微规则 + 决策权矩阵（继承 06 §3）

### 14.2 修订

- `03-brand-voice.md` — 新增 §10「渠道层子文档」段，正式建立"主文档管能否说 / 子文档管在哪说怎么说"的层级关系；占位 03b（海外）/ 03c（邮件）/ 03d（错误态）；CHANGELOG 加渠道子文档体系建立条目

### 14.3 锁定决策（不再回炉）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 文档层级 | 03 主文档 + 03a/b/c/d 渠道子文档；冲突以 03 为准；03 §3/§4/§6/§7 在子文档无差别继承 | 03 §10 + 03a §0.3 |
| LinkedIn EN 范围 | 仅"存在感保留模式"——月度精选 + 季度 highlights + 学术/招聘事件性发布；主动获客升级为独立 03b 任务 | 03a §3.3 + §0.2 |
| 真人医生政策 | 全平台禁止代言形象（出镜 / 口播 / 推荐 / 单独肖像）；允许活动合影（无突出）+ 学术专家咨询团列表（无肖像）+ PITL 网络匿名化数据 | 03a §6.2 |
| 公众号账号策略 | 单一公众号 "梅斯 AI"，4 产品作内容 tag；不开 4 个独立公众号 | 03a §3.1 |
| 小红书定位 | 雇主品牌 + 招聘，**不卖产品**；不做病例展示 / 医美关联 / 产品功能演示 | 03a §3.7 |
| 同行 / 竞品默认沉默 | 监管医疗背景下任何对比声明都有 Legal 风险；仅例外 1）同行重大学术成果 1 条祝贺帖 2）违规事件保持沉默 | 03a §5.4 |
| 媒体回应原则 | 医患纠纷 / 自家产品 bug 在社媒侧不主动发声；统一回"以官方新闻稿为准"，转 PR 处理 | 03a §5.5–5.6 |
| 哀悼 / 公共卫生 | 重大事件全平台暂停商业内容 24–72h；哀悼日全平台默哀 | 03a §5.3 |

### 14.4 待办（追加 #2 后回填）

> 本节随每个 voice gap 完成后回填一次。

1. ~~**填补 voice gap #2 华语区域化策略**~~ ✅ 完成（v0.1 草稿，详见 §14.5）
2. **本次修订双签升 v0.2**：03 §10 新增 + 03a v0.1 + 03e v0.1（按 06 §3 决策权矩阵需市场 + 法务双签）
3. **VitePress 同步**：将 03a + 03e 接入 docs/voice/ 目录，更新 sidebar；运行 `scripts/sync-docs.mjs`
4. **强制层（B）**：03a 的禁词与"真人医生政策"+ 03e 的"分层禁忌 / 跨层挪用 case 红线"应同步进 `.claude/brand-voice-guidelines.md`，让 brand-voice 技能在后续写作中自动生效

### 14.5 voice gap #2 华语区域化策略产物（追加）

**新增**：

- `03e-china-regionalization.md` v0.1 —— 8 章 / 12 段 / ~440 行；覆盖：
  - §0 适用范围（仅 Mainland CN；港 / 澳 / 台 / 日本 / 新加坡 / 海外华人移出归 03b）
  - §1 受众分层框架（医院/医生 T1–T5 + 药企/产业方 MNC / 国内大型 / Biotech-Mid-CRO-AI 公司，含关键差异矩阵）
  - §2 文案分层 5 维（术语密度 / 引用类型 / CTA / 数据 claim 本地化 / 时间表达）
  - §3 渠道分层（8 渠道 × 8 层级有效性矩阵 + 自然 vs 付费占比 + 区域大会三铁律）
  - §4 政策与监管地域差异（DRG/DIP / 医保 / 互联网医院 / 数据出境 / 集采与一致性评价）
  - §5 跨层敏感场景禁忌（县域 / T1 / 民营互联网 / 跨层 case / 区域热点）
  - §6 RACI（大区不能独立发布；本地化申请单流程）
  - §8 12 条本地化自检清单

**修订**：

- `03-brand-voice.md` §10 子文档清单 —— 加入 03e 行；03b 范围扩展为"港/澳/台 / 日本 / 新加坡 / 海外华人 / 全球英语市场"；CHANGELOG 加 03e 条目 + 边界决议
- `discovery-report-CN.md` —— 修订追溯段追加 #2 起草记录

### 14.6 锁定决策（追加）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 区域化文档边界 | `03e` 仅 Mainland CN；港/澳/台/日本/新加坡/海外华人归 `03b`（独立立项） | 03e §0.2 + 03 §10 |
| 医院 / 医生分层维度 | 5 层 T1–T5（一线三甲 / 新一线强二线 / 二三线市级三甲+大城市二级 / 县域+三四线二级 / 民营连锁+第三方+互联网医院+连锁体检） | 03e §1.1 |
| 药企 / 产业方分层 | 3 层（MNC / 国内大型 Pharma / Biotech-Mid-CRO-AI 公司）；不再细分 Tier-1/2 国内 | 03e §1.2 |
| 跨层 case 引用 | 同层优先；跨层须文中标注差异；MNC case 严禁挪用给 Biotech；不挪用兄弟业务（梅斯医生社区）case 冒充梅斯 AI 直接交付 | 03e §5.4 |
| 大区独立发布 | **不允许**；本地化稿件须经市场总部 + 法务审；大区只能提交"本地化申请单"，不能独立改稿 | 03e §6.1 + §6.2 |
| 互联网医院文案 | 不能跨省提供"处方建议"型表述；用"用药参考" / "循证查询"替代；永远附"本输出不构成处方"声明 | 03e §4.3 + §5.3 |
| 数据出境表达 | 默认"数据本地化部署 / 训练数据未出境 / 模型推理在境内"；禁忌"全球数据训练 / 海外算力加持"在 Mainland 物料中出现 | 03e §4.4 |
| DRG vs DIP 措辞 | 永远不在同一份本地化稿件中混用；按目标城市选定一种 | 03e §4.1 |

### 14.7 待办（追加 #3 后回填）

1. ~~**填补 voice gap #3 声明实证流程**~~ ✅ 完成（v0.1 草稿，详见 §14.8）
2. **本次修订双签升 v0.2**：03 §10 + 03a + 03e + 03f 一起合并（按 06 §3 决策权矩阵需市场 + 法务双签）
3. **VitePress 同步**：将 03a + 03e + 03f 接入 docs/voice/ 目录，更新 sidebar；运行 `scripts/sync-docs.mjs`
4. **强制层（B）**：03a / 03e / 03f 的核心红线同步进 `.claude/brand-voice-guidelines.md`
5. **实证库工具选型**：03f §6.1 候选（Notion / Confluence / 自建）需 Sponsor + 法务 + 工程三方决议；建议 v0.2 阶段先用 Notion 跑通流程

### 14.8 voice gap #3 声明实证流程产物

**新增**：

- `03f-evidence-attestation.md` v0.1 —— 9 章 / ~480 行；覆盖：
  - §0 适用范围（流程层 vs 03 §7 格式层 / 03a §5.1 子集关系）
  - §1 实证强度 L1–L4（公开 / 内部审计 / 同行评议 / 官方文件）+ 8 类 claim 最低实证要求矩阵
  - §2 SourceID 注册工作流（字段强制清单 + 流程图 + 11 项红线 + 7 类时效复审 + 跨语言处理）
  - §3 撤稿响应完整版（监测 / T+0 / T+24h / 7 类物料分类处理 / 复审 / 6 项沉默期禁忌）
  - §4 数据 claim 实证链条 6 场景（营销 / UI / 合同 / PR / 学术合作 / 跨场景一致）
  - §5 跨场景一致性 + 受众分层适配 + 危机留痕
  - §6 工具基础设施（Notion / Confluence / 自建三选一 + 撤稿监测自动化 + Audit Trail）
  - §7 实证维度审批权矩阵 10 类 × 单/双/三签
  - §9 14 条发布前自检清单

**修订**：

- `03-brand-voice.md` §10 子文档清单加入 03f 行；CHANGELOG 追加 03f 条目（含"流程层 vs 格式层"边界决议）
- `discovery-report-CN.md` 修订追溯段追加 #3 起草记录

### 14.9 锁定决策（追加）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 流程 vs 格式边界 | 03f 管"声明的流程"（实证 / 审批 / 撤稿）；03 §7 仍管"声明的格式"（数字 / 引用 [n] / 千分位）；03a §5.1 是 03f §3 的社交子集 | 03f §0.3 + 03 §10 |
| 实证强度分级 | L1 公开 / L2 内部审计 / L3 同行评议 / L4 官方文件；不同 claim 类型有最低实证要求 | 03f §1.1 + §1.2 |
| SourceID 体系 | 每条引用源进入对外物料前必须先在实证库注册获 SourceID；状态 approved 才可引用；不允许静默修改 | 03f §2.1 + §2.2 |
| 11 项不允许来源 | 维基/百度百科 / 撤稿文献 / Predatory journal / AI 生成综述未核验 / 客户口头同意 / 兄弟业务挪用 / 同行内部材料 / 等 | 03f §2.3 |
| 撤稿响应铁律 | 不删帖 / 不私下改原文 / 不推卸到作者 / 不借机攻击同行；分类处理覆盖社交 + 白皮书 + UI + 合同 + 招股 + 媒体 | 03f §3.4 + §3.6 |
| 产品 UI claim | 不允许工程 sprint 内"顺手改个数字"；UI claim 修改走产品 RFC + 法务审 | 03f §4.3 |
| 客户合同承诺 | 条款级承诺按 L4 处理；法务 + 产品 + 销售三签；不允许销售自创 ROI | 03f §4.4 |
| 媒体偏差兜底 | 媒体引用偏差超 24h 未修订 → 我方主动发"勘误声明"；不能依赖媒体后续修订兜底 | 03f §4.5 |
| 同 claim 跨物料一致 | 不允许营销端"放大"工程端的保守表述；中英对照表述须语义一致 | 03f §5.1 |
| 受众分层 ≠ 实证降级 | 降低术语密度不等于降低实证级别；T4 物料引用源数量可少但每条仍需 SourceID | 03f §5.2 |

### 14.10 下一会话候选切入（v0.2 review 启动后已分流）

1. **gap #4 交互组件可访问性** —— 等 v0.2 双签完成后再推（不能与签字阶段并行起草，避免再次累积未签批次）
2. **gap #5 动效指引** —— 同上
3. ✅ **v0.2 双签批次启动** —— 详见 §15

---

## 15. v0.2 双签 Review 批次（**进入 review pending 状态**）

### 15.1 状态

- **当前状态**：✅ **v0.2 双签完成**（C Yang + B Chen · 2026-05-06）→ Sponsor 落地操作完成（2026-05-07）
- **批次内容**：03 §10 新增 + 03a + 03e + 03f（共 4 处变更，~1,570 行新增）
- **签字组合**：市场负责人 C Yang + 法务 B Chen（按 03 §9 + 06 §2.1）
- **批次升版**：voice 层 v0.1 → **v0.2**（minor）✅ 完成
- **流程文档归档**：
  - `governance/v0.2-batch-review-packet.md`（第一轮 review packet）
  - `governance/v0.2-batch-review-feedback-marketing.md`（市场反馈，2026-05-07）
  - `governance/v0.2-batch-review-feedback-legal.md`（法务反馈，2026-05-07）
  - `governance/v0.2-batch-review-resolution.md`（综合裁决）
  - `governance/v0.2-sponsor-decisions.md`（Sponsor 三红点 + Q1–Q6）
  - `governance/v0.2-second-round-signoff.md`（**第二轮签 packet · 双签留痕**）

### 15.1.0 v0.2 双签完成 + Sponsor 落地操作完成（2026-05-07）

**双签留痕**：voice 层 v0.2 经 **C Yang（市场负责人）+ B Chen（法务）** 于 **2026-05-06** 双签（`governance/v0.2-second-round-signoff.md` §6 签字栏）。

**Sponsor 落地操作**（按 second-round-signoff.md §7 · 完成于 2026-05-07）：

- ✅ 升版号写入：03 / 03a / 03e / 03f 顶部 v0.1 → **v0.2**
- ✅ 签字留痕：每份文档 CHANGELOG 加双签留痕（C Yang + B Chen · 2026-05-06）
- ✅ "v0.2 候选 / 待第二轮签"标注移除
- ✅ HANDOFF §13.2 voice gaps 1/2/3 状态更新为"v0.2 已签"
- ✅ HANDOFF §15.1 状态更新为"双签完成"
- ✅ discovery-report 修订追溯段加"v0.2 双签完成"
- ⏳ docs/ 站同步：用户本地执行 `node scripts/sync-docs.mjs`
- ⏳ #brand-updates 通知：见 §15.1.8（release note 文案已起草）
- ⏳ DE / SE / DI / RCP 工程团队 lead 邮件通知：见 §15.1.8（邮件文案已起草）

> **历史快照**（已完成）：Sponsor 完成 9 处决议（R2/R3/R4 + Q1–Q6）+ R2 机制设计 ack 后源文档批量修订完成；2026-05-06 双方对修订 diff 做最终签。

**修订映射** —— 详见 `governance/v0.2-second-round-signoff.md` §3：

- 03 §10 + CHANGELOG（v0.2 候选段）
- 03a §3.7 / §6.2 / §8.2 + CHANGELOG（小红书产品教育 / 真人医生二分 / 撤回窗收紧）
- 03e §1.1 / §2 全部表格 / §3.1–§3.3 / §5.1 / §5.3 / §5.4 / §6.1 / §6.2 / §8 + CHANGELOG（5→4 层 / RACI 重写 / 引用密度强化）
- 03f §2.1 / §2.4 / §3.4 / §4.5 / §4.6 / §5.2 / §6.1 / §6.2 / §8 / §9 + CHANGELOG（工具化 / 时效改 / HKEX / 兜底放宽 / 模板化 / 受众分层删 / 工具开源自建）

**新增** `governance/v0.2-second-round-signoff.md` — 第二轮签 packet（仅修订 diff）：
- §1 签字原则（不重新逐条 ack，对修订 diff 最终确认）
- §2 修订源文档清单
- §3 第一轮反馈 → 修订映射 verify 表
- §4 风险预警（法务可能要求 R2 机制补强 / 真人医生判定指南 timeline / 实证库工具选型 v0.2 落地后才做）
- §5 5 条签字预读 checklist
- §6 签字栏
- §7 签后 24h 内落地操作（packet §9 完整版）+ 后续工作启动节点

### 15.1.1 市场 review 摘要（2026-05-07）

22 条中：

- 🟢 **接受 14 条**（D6 / §1 平台定位 / §3.2 / §3.6 / §6.1 尺寸 / §8.3 / §9 / D12 / §2 文案分层 / §3.1 / §3.3 / §1.2 / 跨文档 + onboarding 1 个月 + 速查卡 v0.2 落地后做）
- 🟡 **接受+配套 4 条**（§4 培训 / D11 T4-T5 合并 / §6.1 RACI 待确认 / §6.2 培训和工具）
- 🔴 **5 红点冲突需 Sponsor 裁决**：
  - **R1 D7**：小红书可做产品功能演示（推翻原"不卖产品"定位）
  - **R2 D14**：大区可独立发布（推翻原"大区不能独发"机制）
  - **R3 D20**：SourceID 体系可否省略（挑战 03f 核心机制 — 需澄清"全省略"还是"轻量化"）
  - **R4 D23**：UI claim 不走 RFC+法务（与监管语境冲突，法务预计反对）
  - **R5 §8**：受众分层适配不用，但 §1.2 矩阵接受（内部矛盾，待澄清）

**实证库工具选型反馈**：自建或利用工具（待 v0.2 落地后由 Sponsor + 法务 + 工程三方决议会议）。

详细分析（含每个红点的接受成本 / Sponsor 建议立场 / 修订预案）见 feedback-marketing.md。

### 15.1.2 法务 review 摘要（2026-05-07，与市场同日）

法务 review 全部 30 条 + 共同 7 条完成：

- 🟢 **完全接受 22 条**（绝大部分 03a/03e/03f 红线 + 共同 7 条全部）
- 🟡 **接受+修改细节 4 条**：
  - **L1 D5 真人医生**：禁代言 + 允许"产品使用介绍"形态
  - **L2 §8.2 撤回时间窗**：保守一些（建议公众号 1h / 微博 6h / LinkedIn 6h / 抖音视频号小红书 2h+公告）
  - **L3 D25 媒体偏差兜底**：24h → **3 工作日**
  - **L4 §3.3 招股材料**：明确按 **HKEX** Listing Rules + Inside Information Rules
- 🔴 **完全反对 0 条**
- ❓ **5 处"无需"待澄清**：§5.5 / D18 / §2.4 / §4.6 / §9——语义"无需我意见"还是"无需存在"待会议中逐条问清
- **实证库工具**：法务"倾向于利用开源自建" → 与市场"自建或利用工具"兼容 → **结论：开源自建**（候选 NocoDB / Baserow / 自建 PG+FastAPI）

**关键交叉对比**（法务对市场 5 红点的隐含表态）：

| 红点 | 综合状态 |
|---|---|
| **R1 D7 小红书做产品演示** | 🟢 双方倾向兼容 — L1 允许"使用介绍"延伸到小红书；走折中方案 |
| **R2 D14 大区独发** | 🔴 真正冲突 — 市场要 vs 法务 ✓ ack 原 RACI |
| **R3 D20 SourceID 省略** | 🔴 真正冲突 — 市场想省略 vs 法务 ✓ ack 完整体系；需澄清"全省略 vs 轻量化" |
| **R4 D23 UI claim** | 🟡 法务隐含坚持，未明确表态 — 折中分级方案待会上确认 |
| **R5 §8 受众分层** | 🟢 双方兼容 — 删 03f §5.2，§1.2 管底线，引用源偏好回 03e §2.2 |

**5 红点收敛到 2 真冲突**（R2 / R3）+ R4 法务态度待会上确认。

### 15.1.3 综合 resolution（自动汇总产出）

`governance/v0.2-batch-review-resolution.md` 编制完成 — 10 章 / 把市场 + 法务两份独立反馈交叉对比、给出 60min 会议议程：

- §1 综合状态（25 条 / 2 真冲突 / 4 法务新提 / 5 澄清 / 4 配套）
- §2 已达成共识可直接落地（19 决议 + L1–L4 + R1/R5 兼容方案）
- §3 真正需 Sponsor 拍板的 2 红点（R2 / R3 折中方案 + 待决议清单）
- §4 R4 UI claim 分级方案（关联 R3）
- §5 法务"无需" 5 处澄清逐条建议默认方向
- §6 黄色配套项归属与 timeline
- §7 **Sponsor 60min 三方会议议程**（6 议题 / 各议题估时 / 决议产出）
- §8 修订源文档预案 v2（升级版，按预案落地的 19 处源文档修订）
- §9 第二轮签发出条件
- §10 时间线（最快 5 工作日 / 考虑会议排期 7–10 工作日）

### 15.1.4 Sponsor 三红点裁决（2026-05-07，路径选 C）

Sponsor 选 packet §8 变体 C 路径（直接修订源文档 → 第二轮签，跳过三方会议）。**这是合规的——packet §8 明文允许"Sponsor 修订源文档 + 重发第二轮签"**，三方会议是路径之一不是必经。

**三红点裁决**（详见 `governance/v0.2-sponsor-decisions.md`）：

| 红点 | 裁决 |
|---|---|
| **R2 大区独发** | **可独发 + 事后 review** —— 大区接受市场立场获独发权；增加每周 100% / 7 天内总部+法务 review + 3 次违规取消独发权机制兜底合规 |
| **R3 SourceID** | **保留完整 SourceID + 工具化** —— 接受法务立场不轻量化；通过工具能力（一键注册 / 反向追踪 / 撤稿监测自动化 / 文案自动校验 / Audit Trail）降低市场操作负担 |
| **R4 UI claim** | **法务统一** —— 接受法务立场，UI claim 改动统一走 RFC + 法务，不分级 |

**5 红点全部解决**（R1/R5 双方兼容 + R2/R3/R4 Sponsor 裁决）。

### 15.1.5 剩余 6 处待 Sponsor 拍板（阻塞修源文档）

法务 5 处"无需"语义澄清 + §6.1 RACI 重写方向，**需 Sponsor 一次性回复**才能进入修源文档阶段：

| # | 条目 | 建议默认 |
|---|---|---|
| Q1 | §5.5 医患纠纷统一口径 | A 保留 |
| Q2 | D18 集采 / 一致性评价禁忌 | A 保留 |
| Q3 | §2.4 客户 case 时效 | C 按合同期限或年度孰短 |
| Q4 | §4.6 学术合作 PI 书面确认 | A 保留+合同模板化 |
| Q5 | §9 14 条自检清单 | A 保留 14 条 |
| Q6 | §6.1 RACI 重写方向 | 统一"大区独发+事后 review"+ 1 行危机例外 |

详见 sponsor-decisions.md §3。

### 15.1.6 决议完成后路径

Sponsor 完成 Q1–Q6 + R2 机制设计 ack 后：

1. T+0 Sponsor 修订源文档（按 sponsor-decisions.md §1 + §3 + resolution.md §7 修订预案 v3）
2. T+0~+1 编制第二轮签 packet（仅含修订 diff + 第二轮签字栏）
3. T+1 发第二轮签
4. T+2~+3 双方对修订版做最终 ack
5. T+3 v0.2 升版完成 → packet §9 落地

**预计最快 3 工作日**（无再争议）。

### 15.1.7 风险提示（已闭环）

- ~~R2 法务可能对事后 review 机制提补充意见~~ → 第二轮签时法务 B Chen 直接 ack 修订，无补强要求；6 个月评估抽样降级条款保留
- ~~R3 工具化是软承诺~~ → 已写入 03f §6.1 + second-round-signoff §7"v0.2 落地后 3 天内三方决议 + 30 天内 RFC"硬节点
- ~~R4 UI claim 法务统一会影响工程 sprint~~ → 工程团队邮件通知（见 §15.1.8）含此条；产品+工程在 v0.2 升版后 sprint planning 时单独沟通

### 15.1.8 通知文案（待 Sponsor 发送）

#### #brand-updates Release Note（建议直接复制粘贴）

```
🎉 Voice Layer v0.2 已签发布

Voice 层 v0.1 → v0.2 升级完成（C Yang + B Chen · 2026-05-06 双签 · 落地 2026-05-07）。

📦 升版内容（4 份文档 / ~1,570 行修订）：
1. 03-brand-voice.md §10 子文档体系（v0.1 已建立 / v0.2 升级状态）
2. 03a-social-media-voice.md v0.2（社交媒体）—— 新增小红书产品教育白名单 + 真人医生「代言 vs 使用介绍」二分（含 8 条护栏）+ 撤回时间窗收紧（公众号 1h / 微博 6h / LinkedIn 6h / 抖音视频号小红书 2h+公告）
3. 03e-china-regionalization.md v0.2（华语区域化）—— 医院 5 层 → 4 层（T4 内含 T4-A 公立基层 / T4-B 新业态）+ §6.1 RACI 重写为「大区独发 + 事后 review」+ 4 类前置双签例外（危机响应 / 客户共发布 / MNC 学术 / Pharma 客户）
4. 03f-evidence-attestation.md v0.2（声明实证）—— L1–L4 实证 + SourceID 体系（工具化承诺）+ 撤稿响应完整版 + HKEX 招股流程 + 媒体兜底放宽至 3 工作日 + 学术合作合同模板化 + 实证库锁定开源自建

⚠️ 工程团队请重点关注：
- 03f §4.3：UI claim 改动统一走 RFC + 法务审（不分级）—— sprint planning 时预留法务审节点
- 03f §6.1 实证库工具：v0.2 落地后 3 天内 Sponsor + 法务 + 工程三方决议会议；30 天内 RFC

⏭️ 下一步：
- 30 天内：实证库工具选型 RFC + 法务出真人医生「判定指南」v0.2.1 patch + 案例库
- 1 个月内：onboarding 培训启动
- v0.2.1 patch：市场新人速查卡 10 条核心红线
- voice gap #4（交互组件 a11y）/ #5（动效指引）继续推进

📚 详读：governance/v0.2-second-round-signoff.md（升版主文档）
```

#### 工程团队 Lead 邮件（DE / SE / DI / RCP 各一封同文）

```
主题：[Brand Voice v0.2 升版] DE/SE/DI/RCP 工程团队请关注 UI claim 改动流程

各位 Lead：

Voice 层 v0.2 已于 2026-05-06 经市场 + 法务双签发布，2026-05-07 完成升版落地。

📌 与工程团队直接相关的两条变更：

1. **UI claim 改动流程统一**（03f §4.3）
   UI 上的性能 / 准确率 / 覆盖范围 / 案例计数等数字 claim 改动**统一走 RFC + 法务审**——不分级、不快速通道。
   行动：在下次 sprint planning 时预留法务审节点（同步审 / 异步审 / 法务驻场任选其一，请与法务对接确定形式）。

2. **实证库工具选型**（03f §6.1）
   工具锁定为开源自建（候选 NocoDB / Baserow / 自建 PG+FastAPI）。
   行动：v0.2 落地后 3 天内 Sponsor 召集 Sponsor + 法务 + 工程三方决议会议；30 天内 RFC 完成。请提名工程对接人。

📌 间接影响（信息周知）：

- 03e §6.1 RACI 改为「大区独发 + 事后 review」——大区市场可独立发布对外内容，但 100% 事后 review 7 天内由总部+法务执行；3 次违规取消独发权
- 03e §1.1 受众分层 5 层 → 4 层（T4 内含 T4-A 公立基层 / T4-B 新业态）——产品文档 / Demo 涉及医院分层时按新版表述
- 03a §6.2 真人医生「代言 vs 使用介绍」二分——产品演示视频中如出现医生身份，需走 §6.2 8 条护栏

完整变更：governance/v0.2-second-round-signoff.md

如有疑问 ping #brand-updates。

Sponsor (Yog)
```

### 15.1.9 v0.2 升版后立即启动（按 second-round-signoff §7）

- [ ] **T+3 天内**：Sponsor 召集 Sponsor + 法务 + 工程三方决议会议——实证库工具选型（NocoDB / Baserow / PG+FastAPI）
- [ ] **T+30 天内**：实证库工具选型 RFC 完成
- [ ] **T+30 天内**：法务出真人医生"判定指南"v0.2.1 patch + 案例库
- [ ] **T+1 个月内**：onboarding 培训启动（市场反馈：1 个月周期）
- [ ] **v0.2.1 patch**：市场新人速查卡 10 条核心红线
- [ ] **强制层（B）**：把 25 条核心红线同步进 `.claude/brand-voice-guidelines.md`
- [x] **gap #4 起草** ✅ 完成（04a-component-accessibility.md v0.1 草稿，详见 §16）
- [ ] **gap #5 起草**：voice gap #5 动效指引

---

## 16. 2026-05-07 voice gap #4 交互组件 a11y 起草会话产物

**新增**：

- `04a-component-accessibility.md` v0.1 —— 11 章 / ~640 行；覆盖：
  - §0 适用范围（13 React 组件 + Logo 系统的工程级 a11y；不覆盖静态资产 / 业务文案 / 后端 API）
  - §1 标准与目标（WCAG 2.1 AA 强制 + AAA 高合规建议 + 11 条关键 WCAG 标准映射）
  - §2 颜色与对比度（4 产品色 × 4 背景对比度矩阵 + 三大徽章对比度 + 色盲测试 Daltonism + 反白态）
  - §3 键盘交互（焦点环规范 + Tab order 原则 + 5 类组件 trap 处理 + 快捷键不覆盖原生）
  - §4 屏幕阅读器 aria（6 类组件完整规范：信任徽章 / Nano-Citation / CoT / Diff View / Disclosure / Logo）
  - §5 触控目标（移动 44×44 + hit area 扩展 + 信任徽章 + Nano-Citation 移动端处理）
  - §6 减动画偏好（prefers-reduced-motion 全 kit 兜底 + 动效阈值 5s + 自动播放规则）
  - §7 文字与可读性（最小字号阶梯 + 行距字距 ≥ 1.5 / ≥ 0.12em + 中英混排）
  - §8 i18n 溢出（中英长度 × 1.5–2.0 / 信任徽章 `--full` 溢出处理 + RTL 当前不支持）
  - §9 测试与 enforcement（5 类工具 axe-core / Pa11y / Lighthouse / WAVE / Color Oracle / 屏幕阅读器 + CI 集成阈值 0 critical / Lighthouse ≥ 95 + 设计师 / QA checklist）
  - §11 14 条自检清单

**修订**：

- `04-visual-system.md` —— 新增 §11「视觉系统子文档」段，正式建立 04 主文档 + 04a/b/c 子文档层级关系（命名规则跟随 03a/b/c/d/e/f）

### 16.1 锁定决策（待三签确认）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 04a 文档定位 | 04 主文档管"组件如何呈现"；04a 管"组件工程实现 / a11y / 测试维度落地" | 04 §11 + 04a §0.3 |
| WCAG 标的 | 强制 AA / 高合规场景（临床决策辅助 / 招股 / 监管对接）建议 AAA | 04a §1.1 + §1.2 |
| 不依赖颜色 | 信息传递必须有形状/文字/位置冗余标识；DE `#2563EB` 与 RCP `#0F62FE` 在红绿盲下相近，同界面同时使用必须配合 wordmark/icon | 04a §2.3 |
| 触控目标 | 移动端 ≥ 44×44 px 强制（含信任徽章 hit area 扩展 + Nano-Citation 强制 padding）| 04a §5 |
| 减动画偏好 | 全 kit 强制 prefers-reduced-motion 检测 + 等价静态形态；CoT 动画在 reduce 模式下保留 5 圆点稳态 | 04a §6.1 |
| RTL 不支持 | 当前 brand kit 不支持 RTL；如未来纳入需视觉+法务联评 | 04a §8.2 |
| CI 阈值 | axe-core 0 critical / 0 serious；Lighthouse a11y ≥ 95；任一不达 fail CI | 04a §9.2 |
| 签字组合 | 涉工程实现，签字组合需含 **Tech Lead**（市场+法务+Tech Lead 三签）—— 与 03a/03e/03f 仅市场+法务双签不同 | 06 §2.1 |

### 16.2 待办（追加 #5 后回填）

1. ~~**填补 voice gap #5 动效指引**~~ ✅ 完成（v0.1 草稿，详见 §17）
2. **04a + 04b 联合升 v0.2 三签**：建议打包做 04 子文档批次三签（市场+Tech Lead+法务），单批次 review 成本更优
3. **04a 落地动作**（签后）：CI 集成（axe-core / Pa11y / Lighthouse）+ react 包 v0.2.0 a11y patch + QA 测试用例库 v0.2.1 patch（`docs/qa/a11y-test-cases.md`）
4. **04b 落地动作**（签后）：注入 motion tokens 到 `ai-tokens.css`（4 ease + 4 duration）+ react 包 v0.2.0 motion patch（通用 Spinner / Skeleton / Modal / Toast 组件实现）

---

## 17. 2026-05-07 voice gap #5 动效指引起草会话产物

**新增**：

- `04b-motion-guidelines.md` v0.1 —— 13 章 / ~620 行；覆盖：
  - §0 适用范围（覆盖通用 UI 动效；不覆盖 CoT / Logo 入场 / Diff View / Disclosure / 业务动效）
  - §1 设计原则（4 条：服务功能 / 节制 / 性能优先 / 减动画兜底）
  - §2 缓动 + 时长 token（4 ease cubic-bezier + 4 duration micro/short/medium/long；待注入 ai-tokens.css）
  - §3 **通用加载状态**（**CoT 替代核心补位**）—— 4 档分级 + 通用 spinner 规范（弧线单段 800ms 匀速 + 与 CoT 5 圆点呼吸显式视觉区分）+ Skeleton + Progress bar + 不显示 loading 的场景
  - §4 页面切换（路由淡入 / tabs / 抽屉 / 通用入场）
  - §5 侧边面板 / 模态框 / 抽屉 / Tooltip（缓动 / 时长 / 关闭三方式 + 焦点管理继承 04a）
  - §6 微交互反馈（hover / pressed / focus / 表单振动三冗余 + 提交按钮 loading）
  - §7 Toast / Notification（4 类滞留时长 + 撤稿响应高合规告警 aria-live="assertive" + 与 03f §3 协调）
  - §8 Skeleton + Progressive Loading（列表 / 图像渐进加载）
  - §9 错误状态动效（克制原则；不用情绪化插画；自动滚动 + 焦点同步）
  - §10 减动画偏好（继承 04a §6 + 个别保留极短 50ms + 振动 / 抖动 / 闪烁完全禁用）
  - §11 性能预算（60fps 底线 + GPU 加速 + will-change 用完即清 + 审计工具）
  - §13 14 条自检清单

**修订**：

- `04-visual-system.md` §11 子文档清单加入 04b 行（v0.1 待三签升 v0.2）
- `discovery-report-CN.md` 修订追溯段追加 #5 起草记录

### 17.1 锁定决策（待三签确认）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 04b 文档定位 | 04 主文档管"品牌动效"（CoT/Logo）；04b 管"通用 UI 动效"（除品牌动效外的全部）| 04 §11 + 04b §0.3 |
| 缓动 token | 4 标准 cubic-bezier（ease-out/in/in-out/linear）；不用 bounce / spring / overshoot | 04b §2.1 |
| 时长 token | 4 档（micro 100 / short 200 / medium 300 / long 500）；95% 动效 ≤ medium；永不超过 500ms | 04b §2.2 |
| 通用 spinner 规范 | 弧线单段 stroke=2.5px + 800ms 匀速 + 按 BrandScope 注入产品色 —— **与 CoT 5 圆点呼吸 1.2s 显式视觉区分** | 04b §3.2 |
| 加载状态分级 | < 100ms 不显示 / 100ms–1s spinner / 1s–10s skeleton / > 10s progress bar | 04b §3.1 |
| 侧边面板缓动 | 入场 ease-out / 退出 ease-in / 时长 300ms / 关闭三方式（点击遮罩 + Esc + 关闭按钮）| 04b §5.1 |
| Toast 滞留 | success 3s / info 5s / warning 7s / **error + 撤稿响应不自动消失** | 04b §7.2 + §7.4 |
| 错误反馈三冗余 | 振动 + 红框 + 错误文字（继承 04a §2.3 不依赖颜色）；reduce-motion 关振动 | 04b §6.4 |
| 性能底线 | 60fps（中端设备不掉帧）；仅动画 transform + opacity；will-change 用完即清 | 04b §11 |
| 签字组合 | 涉工程 + 视觉 + 合规（撤稿响应 Toast）= 市场+Tech Lead+法务三签 | 与 04a 一致 |

### 17.2 04 子文档批次三签建议

累计 04a + 04b 共 ~1,260 行 / 23 章草稿，建议打包做 04 子文档批次三签：

| 维度 | 04a + 04b 合并批次 | 各自独立批次 |
|---|---|---|
| 签字成本 | 单次 review（约 4–5h 市场 + 6–8h Tech Lead + 4–5h 法务） | 双次 review × 2（成本翻倍）|
| 上下文连贯 | 04a 和 04b 在 reduce-motion / 焦点 / aria-live 多处交叉引用 | 拆分会损失上下文 |
| 实施依赖 | ai-tokens.css motion 注入 + react 包 a11y/motion patch 一次性做 | 两次工程动作 |
| **建议** | ⭐ 合并批次 | 不推荐 |

**待办**：编制 04 子文档批次三签 packet（结构参 `governance/v0.2-batch-review-packet.md`）—— 内容覆盖 04a + 04b。

### 17.3 待办（追加 #6 后回填）

1. ~~**填补 voice gap #6 摄影 / 插画过渡期政策**~~ ✅ 完成（v0.1 草稿，详见 §18）
2. **04a + 04b + 04c 联合升 v0.2 三签**：建议打包做 04 子文档批次三签（市场+Tech Lead+法务），单批次 review 比拆三次成本低 60%+

---

## 18. 2026-05-07 voice gap #6 摄影 / 插画过渡期政策起草会话产物

**新增**：

- `04c-photography-illustration-interim.md` v0.1 —— 9 章 / ~520 行；覆盖：
  - §0 适用范围（覆盖过渡期临时素材；不覆盖 04 §7 红线 / 母品牌 v1.1 §8 主规范 / 视频 / 品牌 logo）
  - §1 过渡期定义（起点 v1.0 锁定 / 终点 W2 交付 / 估期 6–12 个月）
  - §2 摄影 4 优先级来源（P0 自摄 / P1 母品牌 / P2 CC0 / P3 客户授权）+ 内容白名单 + 过渡期专属禁忌 9 条 + SOP + PII 模糊化
  - §3 插画 dot-spiral 母题 7 维细化 + 4 优先级来源 + **AI 生成插画 FTC 红线扩展**（仅几何抽象 / 非医学 / 设计师重绘）+ 过渡期专属禁忌 8 条
  - §4 临时素材库（独立 schema 字段 + 4 类来源差异化复审节奏 + 用途反向追踪 + 撤回流程对接 03f §3.4）
  - §5 空状态处理（母品牌 placeholder box / dot-spiral 抽象 / 文字 + icon）
  - §6 W2 交付后迁移规程（30 天时间窗 + 替换 vs 保留分类 + 临时素材库归档 + **本文档归档为 .archived.md** + 迁移期合规风险）
  - §7 交叉引用 04 / 04a / 04b / 03a / 03e / 03f / 母品牌 v1.1
  - §8 12 条自检清单

**修订**：

- `04-visual-system.md` §11 子文档清单加入 04c 行（v0.1 待三签升 v0.2，标注"本文档随 W2 交付归档"）
- `discovery-report-CN.md` 修订追溯段追加 #6 起草记录

### 18.1 锁定决策（待三签确认）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 04c 文档定位 | 04 §7 红线不动；母品牌 v1.1 §8 主规范不动；04c 仅在过渡期定义"安全可用范围"+ 临时素材 SOP | 04c §0.2 + §0.3 |
| 过渡期估期 | 6–12 个月；母品牌 W2 交付为终点 | 04c §1.1 |
| 摄影 P0 优先 | 自摄 + 知情同意书优先；P2 CC0 / P3 客户授权次之；不允许"职业模特拍摄"过渡期投入 | 04c §2.1 + §2.3 |
| 真人医生政策延伸 | 摄影中真人医生按 03a §6.2 二分（代言禁 / 使用介绍允许 8 条护栏）；患者出镜过渡期一律禁 | 04c §2.3 |
| AI 生成插画 FTC 扩展 | 仅几何抽象 / 非医学 / 设计师重绘后入库 / 保留 prompt 留痕；AI 生成医学影像绝对禁止（继承 04 §7） | 04c §3.3 |
| dot-spiral 母题 | 节点圆点 6/8/12px 三档 / 间距 2-3 倍 / 单产品色 + 中性 / 4 形态（直/弧/螺旋/网格）/ stroke ≤ 2px / 不渐变阴影 3D | 04c §3.1 |
| 过渡期插画禁忌 | 卡通 / Q 版 / 情绪化 / 医学影像创作 / 患者形象 / 拟人化 AI / 故障艺术 / 伪纹理 / 过度装饰 | 04c §3.4 |
| 临时素材库 | 独立 schema（INTERIM-YYYY-NNNN）+ 不混入实证库 SourceID（EVID-YYYY-NNNN）+ P2 CC0 季度复审最严 | 04c §4 |
| W2 交付迁移 | T+30 天时间窗 + 替换 vs 保留分类 + **本文档归档为 .archived.md** + 主体规则并入 04 §7 永久版 | 04c §6 |
| 迁移期铁律 | 迁移期内**新启动**物料禁止用临时素材；只能用 W2 资产 | 04c §6.6 |
| 签字组合 | 涉视觉 + 合规（FTC / 知情同意 / PII）= 市场+Tech Lead+法务三签（与 04a/04b 一致）| 与 04a/04b 一致 |

### 18.2 04 子文档批次三签建议（更新）

累计 04a + 04b + 04c 共 **~1,780 行 / 36 章草稿**，建议打包做 04 子文档批次三签：

| 维度 | 04a + 04b + 04c 合并批次 ⭐ | 各自独立批次 |
|---|---|---|
| 签字成本 | 单次 review（约 5–6h 市场 + 8–10h Tech Lead + 6–8h 法务） | 三次 review × 3（成本 ×3）|
| 上下文连贯 | 三文档在 reduce-motion / 焦点 / aria-live / 不依赖颜色 / 真人医生政策延伸 / 撤稿响应分类处理多处交叉引用 | 拆分严重损失上下文 |
| 实施依赖 | ai-tokens.css motion tokens 注入 + react 包 a11y/motion patch + 临时素材库基础设施一次性做 | 三次工程动作分散 |
| 法务专项 | 04c FTC 扩展 + 知情同意书模板 + PII 模糊化 + 04a a11y AAA 触发 + 04b 撤稿响应 Toast——三者法务联读连贯 | 法务需重新建立上下文 ×3 |
| **建议** | ⭐⭐ 强烈建议合并 | 不推荐 |

**待办**：编制 04 子文档批次三签 packet（结构参 `governance/v0.2-batch-review-packet.md`）—— 内容覆盖 04a + 04b + 04c。

### 18.3 待办（追加 04 批次 packet 后回填）

1. ~~**编制 04 子文档批次三签 packet**~~ ✅ 完成（详见 §19）
2. **三签流程启动**：Sponsor 把 packet 发市场 / Tech Lead / 法务 → 5 工作日内回复 → 三方答疑会议（如有红点）→ Sponsor 修订 → 第二轮签 → 三签留痕 → 落地操作

---

## 19. 2026-05-07 04 子文档批次三签 packet 编制（**进入 review pending**）

### 19.1 状态

- **当前状态**：✅ **三签完成**（C Yang 市场 + ZL Chen Tech Lead + Bruce Chen 法务 · 2026-05-08 三签）→ Sponsor 落地操作完成（2026-05-08）
- **批次内容**：04 §11（已建立段，已升级 04a/b/c 状态为 v0.2 已签）+ 04a v0.2 + 04b v0.2 + 04c v0.2（共 3 份子文档，~1,780 行）
- **签字组合**：市场 C Yang + Tech Lead ZL Chen + 法务 Bruce Chen（三签，按 06 §2.1 + §2.2）
- **批次升版**：04 子文档体系 v0.1 → **v0.2**（minor）✅ 完成 —— 不影响 04 主文档（已 v0.2）
- **packet 路径**：`governance/04-subdocs-batch-review-packet.md`（§12 签字栏已留痕）

### 19.1.0 三签完成 + Sponsor 落地操作完成（2026-05-08）

**三签留痕**：04 子文档批次 v0.2 经 **C Yang（市场负责人）+ ZL Chen（Tech Lead）+ Bruce Chen（法务）** 于 **2026-05-08** 三签（`governance/04-subdocs-batch-review-packet.md` §12 签字栏；Sponsor Yog 同日流程留痕）。

**Sponsor 落地操作**（按 packet §10 · 完成于 2026-05-08）：

- ✅ 升版号写入：04a / 04b / 04c 顶部 v0.1 → **v0.2**
- ✅ 签字留痕：每份 CHANGELOG 加 v0.2 三签段（C Yang + ZL Chen + Bruce Chen · 2026-05-08）
- ✅ 04 §11 子文档清单状态升 v0.2 已签（3 行同步）
- ✅ HANDOFF §13.2 voice gaps 4/5/6 状态升"v0.2 已签"
- ✅ HANDOFF §19.1 状态升"三签完成"
- ✅ discovery-report-CN.md 修订追溯加"04 子文档批次 v0.2 三签完成"段
- ✅ brand-voice-guidelines.md §9/§10/§11 状态从"04 候选"升级为"已签"
- ⏳ docs/ 站同步：用户本地 `node scripts/sync-docs.mjs`
- ⏳ #brand-updates 通知 + 工程团队 lead 邮件：见 §19.1.1（文案已起草）

### 19.1.1 通知文案（待 Sponsor 发送）

#### #brand-updates Release Note（建议直接复制粘贴）

```
🎉 04 子文档批次 v0.2 已签发布

04 视觉系统子文档批次 v0.1 → v0.2 升级完成（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签 · 落地 2026-05-08）。

📦 升版内容（3 份子文档 / ~1,780 行 / 34 决议）：
1. 04a-component-accessibility.md v0.2（交互组件 a11y）—— WCAG 2.1 AA 强制 + AAA 高合规建议；4 产品色对比度矩阵 + 色盲测试；6 类组件 aria；触控 44×44；prefers-reduced-motion 全 kit 兜底；CI 集成（axe-core / Pa11y / Lighthouse 0 critical / ≥ 95）
2. 04b-motion-guidelines.md v0.2（动效指引）—— 4 缓动 + 4 时长 token；通用 spinner 与 CoT 显式视觉区分；加载 4 档分级；Toast 4 类滞留（撤稿响应不自动消失）；错误反馈三冗余；性能 60fps 底线
3. 04c-photography-illustration-interim.md v0.2（过渡期摄影插画）—— 4 优先级摄影源 + dot-spiral 母题 7 维细化 + AI 生成插画 FTC 红线扩展 + 17 条过渡期禁忌 + 摄影 SOP + PII 模糊化 + 临时素材库（独立 schema）+ W2 交付后 30 天迁移规程

⚠️ 工程团队请重点关注：
- 04a §9.2：CI 阈值 axe-core 0 critical / 0 serious + Lighthouse a11y ≥ 95；新建 .github/workflows/a11y.yml
- 04b §2.3 / B10：ai-tokens.css 注入 motion tokens（4 ease + 4 duration + reduce-motion 兜底）
- packet §10.2：react 包 v0.2.0 升级路径（a11y patch + motion patch + 撤回工具）—— 60 天内启动

⏭️ 下一步：
- 30 天内：法务交付《过渡期摄影申请表》+《过渡期摄影知情同意书》模板
- 60 天内：react 包 v0.2.0 发布（含 a11y + motion patch）
- v0.2.1 patch：dot-spiral 母题范例库 + QA a11y 测试用例库（docs/qa/a11y-test-cases.md）+ 04 子文档速查卡

📚 详读：governance/04-subdocs-batch-review-packet.md（packet §4 列出全部 34 决议 A1–A8 / B1–B10 / C1–C11 / X1–X5）
```

#### 工程团队 Lead 邮件（DE / SE / DI / RCP 各一封同文）

```
主题：[04 子文档批次 v0.2 升版] DE/SE/DI/RCP 工程团队 a11y CI + motion tokens + react v0.2.0 升级路径

各位 Lead：

04 子文档批次 v0.2 已于 2026-05-08 经市场 + Tech Lead + 法务三签发布并完成升版落地。

📌 与工程团队直接相关的三条变更：

1. **a11y CI 集成**（04a §9.2 / A7）
   axe-core 0 critical / 0 serious；Lighthouse a11y ≥ 95；任一不达 fail CI；moderate 警告允许 ≤ 5 但需 ticket 跟踪。
   行动：在 .github/workflows/ 新建 a11y.yml；下次 sprint 排期 baseline 评估。

2. **Motion tokens 注入**（04b §2.3 / B10）
   ai-tokens.css 末尾追加 4 ease（cubic-bezier ease-out / in / in-out / linear）+ 4 duration（micro 100 / short 200 / medium 300 / long 500）+ reduce-motion 时长归零兜底。
   行动：直接修改 ai-tokens.css 末尾追加 motion tokens 段；不破坏现有 token；本周内可落地。

3. **react 包 v0.2.0 升级路径**（packet §10.2）
   含 a11y patch（13 组件 aria-label / role / aria-expanded / aria-controls 全覆盖 + 焦点环 token 化 + Spinner / Skeleton / Toast / ProgressBar 新组件）+ motion patch（动效改用 token）+ 撤回工具（与 03f §3.4 撤稿响应协同）。
   行动：60 天内启动；请提名工程对接人。

📌 间接影响（信息周知）：

- 04c §6.4：W2 交付 T+30 迁移规程——迁移期内新启动物料只能用 W2 资产
- 04a §8.2：RTL 当前不支持（如未来需求纳入需视觉+法务联评）
- packet §10.4：法务 30 天内交付《过渡期摄影申请表》+《知情同意书》模板

完整变更：governance/04-subdocs-batch-review-packet.md（含 34 决议 + 三签留痕）

如有疑问 ping #brand-updates。

Sponsor (Yog)
```

### 19.1.2 v0.2 升版后立即启动（按 packet §10.4）

- [ ] **T+3 天内**：Sponsor 召集实证库工具选型三方决议会议（继承 voice 层 v0.2 §15.1.9 待办；候选 NocoDB / Baserow / PG+FastAPI；与 04c 临时素材库基础设施复用）
- [ ] **T+30 天内**：法务交付《过渡期摄影申请表》+《知情同意书》模板（C3）
- [ ] **T+30 天内**：法务出真人医生"判定指南"v0.2.1 patch（继承 voice 层 v0.2 §15.1.9）
- [ ] **T+30 天内**：实证库工具选型 RFC 完成（继承 voice 层 v0.2 §15.1.9）
- [ ] **T+60 天内**：react 包 v0.2.0 发布（含 a11y + motion patch + 撤回工具）
- [ ] **T+60 天内**：a11y CI 集成（axe-core / Pa11y / Lighthouse）
- [ ] **v0.2.1 patch**：dot-spiral 母题范例库 + QA a11y 测试用例库 + 04 子文档速查卡 + 市场新人速查卡（继承 voice 层）
- [ ] **voice gap #7-#10**：邮件模板 / 错误边界态 / 竞品对比 / NPM SemVer—— 04 三签完成后可推进

### 19.2 Packet 产物

`governance/04-subdocs-batch-review-packet.md` —— 12 章 / ~600 行；单一入口让三审阅人不必翻 3 份源文档。覆盖：

- §1 一段话上下文 + §2 升版判定（minor / 三签依据 / 与 voice 层 v0.2 协同）
- §3 详读优先级与时间预算（市场 ~3.5h / **Tech Lead ~5h** / 法务 ~3.5h）
- §4 **34 条要 ack 的决策清单**（A1–A8 + B1–B10 + C1–C11 + X1–X5 跨文档协同）
- §5 市场负责人专项 review checklist（13 条）—— UI 一致性 / dot-spiral / 撤回流程 / 培训 / 与 voice 层协同
- §6 **Tech Lead 专项 review checklist（新角色，21 条）**—— CI 集成 / token 影响面 / 性能预算 / 工程实现 / 工具基础设施 / react 包升级路径
- §7 法务专项 review checklist（19 条）—— FTC 红线扩展 / 知情同意 / PII / a11y AAA 触发 / 撤稿 Toast 高合规告警 / 临时素材合规链 / HKEX 延伸
- §8 共同 review checklist（6 条）
- §9 反馈与退回流程（争议处理 + 部分接受场景）
- §10 三签后落地操作 SOP（文档侧 / 工程侧 / 通知侧 / 后续工作启动）
- §11 源文档清单
- §12 签字栏（市场 / Tech Lead / 法务 / Sponsor 四栏）

### 19.3 与 voice 层 v0.2 双签 packet 的关键差异

| 维度 | voice 层 v0.2 | **04 子文档批次** |
|---|---|---|
| 签字组合 | 市场 + 法务（双签）| **市场 + Tech Lead + 法务（三签）** |
| 文档数 | 4（03 + 03a + 03e + 03f）| 3（04a + 04b + 04c）+ 04 §11 状态升级 |
| 总行数 | ~1,570 行 | ~1,780 行 |
| 决议条数 | 25 条 | **34 条**（A8 + B10 + C11 + X5 跨协同）|
| 单签字人时长 | ~3h | 市场 3.5h / **Tech Lead 5h** / 法务 3.5h |
| 工程依赖 | 弱（仅 SourceID 工具选型）| **强**（CI 集成 / motion tokens 注入 / react 包 v0.2.0 / 临时素材库基础设施）|
| 法务专项重点 | 撤稿响应 + 客户合同 + HKEX | **FTC 扩展 + 知情同意书模板 + PII + a11y AAA + 临时素材合规链** |
| 第二轮 packet 是否需要 | 是（已生成 v0.2-second-round-signoff.md）| 视反馈情况——预计 1 轮主签字+ 1 轮修订签 |

### 19.4 Sponsor 即时动作清单

- [ ] 把 `governance/04-subdocs-batch-review-packet.md` 链接发 **市场 + Tech Lead + 法务三方**（建议主题"04 子文档批次三签 packet · 5 工作日内回复"）
- [ ] 邮件正文附 §3 时间预算（Tech Lead 5h 最重）+ §4 34 条决议条数预告（让对方先排期）
- [ ] 在 #brand-updates 同步本批次进入 review pending 状态
- [ ] 锁定 review 期间的工作流：起草新 gap 暂停（继续推 #7 邮件模板 / #8 错误边界态等会增加签字人压力）；可并行 = 工程层 / 强制层
- [ ] 准备 60min 答疑会议日程（按"如有红点 T+5 三方会议"路径，参 voice 层 §15.1.4）

### 19.5 三签 review 期间的工作约束

**04 批次 review 期间不再起草新 voice gap / 04 子文档**。理由：

1. 避免再次累积未签批次（03/03a/03e/03f 已 v0.2 签 + 04a/04b/04c 候选签——再加只会加大签字人压力）
2. 签字过程可能触发回退 / 修订；先稳定本批
3. 04b §B10 motion tokens 注入 + 04c 临时素材库基础设施依赖签字落地后才能召集工程决议会

review 期间可推进的工作：

- ✅ **强制层（B）已完成**（2026-05-07）—— `governance/brand-voice-guidelines.md` 编制完成；详见 §20
- **工程层（A）**：包重装 + NPM 首发演练（voice 层 v0.2 落地后 §15.1.9 待办之一，未启动）
- **VitePress 站准备**：把 04a / 04b / 04c 接入 docs/visual/ 目录的脚本可以预备，但**不要 commit**——等签字完成后再合入

---

## 20. 2026-05-07 强制层（B）落地：brand-voice-guidelines.md 编制

### 20.1 状态

✅ **完成**（2026-05-07）—— 浓缩版规范让 `brand-voice:brand-voice-enforcement` 技能在内容生产中**自动应用** voice 层 v0.2 已签 + 04 批次 v0.2 候选共 **59 条核心红线**。

### 20.2 产物

`governance/brand-voice-guidelines.md` —— 16 章 / ~580 行；浓缩 + 重组（不是 59 条列表，按"写作场景 / 元素 / 红线"重组成实操手册）：

- §0 使用说明（何时应用 / 何时不应用 / 优先级层级）
- §1 品牌基础（主语言 / 定位 / 命名铁律 / 缩写）
- §2 写作微规则（第二人称 / 数字 / 引用 / 段落 / emoji / 24h 措辞）
- §3 禁词全集（中英 + AI 医学专属 + 催促 FOMO）
- §4 数据 claim 实证（L1–L4 / 8 类 claim 矩阵 / SourceID 铁律 / 11 项不允许来源 / 跨场景一致）
- §5 真人医生政策（代言禁 vs 使用介绍 8 条护栏 / 患者出镜禁 / PII 模糊化）
- §6 社交渠道分场景（8 平台定位 / 单一公众号 / 小红书 v0.2 白名单 / 危机沉默 / 撤回时间窗 / emoji 例外 / hashtag 白名单）
- §7 中国大陆受众分层（4 层 + 3 层 / 5 维文案分层 / 跨层 case / 政策语境 / 县域禁忌 / 大区独发权）
- §8 撤稿响应规程（6 项铁律 / 7 类物料分类 / HKEX 专项）
- §9 视觉与 a11y（颜色对比度 / 不依赖颜色 / 触控 / 键盘 / aria / RTL / CI 阈值）
- §10 动效规则（缓动+时长 token / spinner 与 CoT 区分 / 加载分级 / Toast / 三冗余 / 60fps / reduce-motion）
- §11 摄影 / 插画过渡期（红线 / 4 优先级 / AI 生成 FTC 扩展 / dot-spiral 7 维 / 8 条禁忌 / 临时素材库 / W2 迁移）
- §12 治理与审批（决策权矩阵速查 / 客户合同 L4 三签 / UI claim 铁律 / 媒体兜底 / 客户 case 时效 / 学术合同模板化）
- §13 **20 条核心红线自检清单**（一页可读）
- §14 **常见错误对照表**（18 个反例→正例）
- §15 版本与来源映射（章节→源文档→签字状态）

### 20.3 部署位置

**注意**：原计划部署到 `.claude/brand-voice-guidelines.md`（让 brand-voice-enforcement 技能自动加载），但 `.claude/` 在沙盒中是受保护位置无法直接写入。

**实际部署**：`governance/brand-voice-guidelines.md`

**用户本地启用步骤**（让 brand-voice-enforcement 技能自动加载）：

```bash
cd /Users/yogyoung/Documents/EvidenceTech-Brand-Package/EvidenceTech-Brand-Package
mkdir -p .claude

# 方案 A：symlink（推荐——单一来源，修订即同步）
ln -sf ../governance/brand-voice-guidelines.md .claude/brand-voice-guidelines.md

# 方案 B：copy（如 .claude/ 不允许 symlink）
cp governance/brand-voice-guidelines.md .claude/brand-voice-guidelines.md
```

### 20.4 维护节奏

- 任何源文档升版（含 v0.2.1 patch）→ 本指南**同步更新**
- 每季度对照源文档差异审计一次
- 发现源文档与本指南不一致：**以源文档为准**，本指南立即修订

### 20.5 锁定决策

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 浓缩 + 重组结构 | 不简单列 59 条；按"写作场景 / 元素 / 红线"组织成 16 章实操手册 | §20.2 |
| 优先级层级 | 04 §7 红线 > 母品牌 v1.1 > 子文档 > 本指南 | brand-voice-guidelines §0.3 |
| 部署位置 | `governance/brand-voice-guidelines.md`（沙盒）+ symlink/copy 到 `.claude/`（用户本地启用） | §20.3 |
| §9/§10/§11 状态 | ✅ 04 批次 v0.2 已签（2026-05-08）；§9/§10/§11 状态从"04 候选"升级为"已签"；§15 来源映射同步更新 | §20.2 + brand-voice-guidelines §15 |
| 维护节奏 | 源文档升版同步更新；每季度审计；冲突以源文档为准 | §20.4 |

### 20.6 用户即时动作（启用技能自动应用）

- [ ] 本地执行 §20.3 的 symlink 或 copy 命令——让 brand-voice-enforcement 技能自动加载
- [ ] （可选）测试技能是否正确加载——尝试让 AI 写一段品牌文案，看是否自动应用了 59 条红线（如禁词扫描 / SourceID 标记 / 真人医生政策检查 / dot-spiral 母题等）
- [ ] 04 批次 v0.2 三签完成后，本指南 §9/§10/§11 状态从"候选"升级为"已签"——Sponsor 或助理修订一行

### 19.6 三签流程预期时间线

```
T+0  Sponsor 把 packet 发三方（邮件 / Slack）
T+1–2 三方各自详读 packet（市场 ~3.5h / Tech Lead ~5h / 法务 ~3.5h）
T+3   双方各自标注 ack 或 ⚠️ 待讨论
T+5   如有 ⚠️：Sponsor 召集 60min 四方答疑（Sponsor + 三签字人）
T+6   共识修订（如需）+ 编制第二轮签 packet
T+7   三方第二轮签字完成 → 进入 §10 落地操作（24h 内完成）
```

最快 5 个工作日（无争议）；有争议 7–10 个工作日（含工程方案重新评估）。

### 19.7 锁定决策

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 批次范围 | 04a + 04b + 04c 一次签；不拆分（X1–X5 跨文档协同破坏成本太高）| packet §1 + §9 |
| 签字组合 | 市场 + Tech Lead + 法务三签 | packet §2 |
| 升版判定 | minor（v0.1 → v0.2）；不属 major / 紧急 | packet §2 |
| 法务交付物 | 《过渡期摄影申请表》+《知情同意书》模板——v0.2 落地后 30 天内交付（解耦于本签字）| packet §10.4 |
| 工程依赖 | ai-tokens.css motion 注入 + react 包 v0.2.0 + CI 集成 + 临时素材库——v0.2 落地后 60 天内启动 | packet §10.2 + §10.4 |
| Review 期间约束 | 不起草新 gap / 子文档；强制层 / 工程层 / VitePress 预备可并行 | §19.5 |
| 反馈退回 | 在 packet 决议条目后追加"⚠️ 待讨论"；Sponsor 30min 内召集四方 | packet §9 |
| 部分接受 | 不推荐——拆分破坏跨文档协同 | packet §9 |

**Sponsor 即时动作清单**：

- [ ] 把 `governance/v0.2-batch-review-resolution.md` 链接发市场 + 法务（建议主题"v0.2 双签三方会议 — 60min — 议程见 resolution.md §7"）
- [ ] 提议会议时间（建议 T+1 或 T+2 工作日内）
- [ ] **会前要求双方预读 resolution.md**（必读，避免会议中现场综述消耗时间）
- [ ] 会议主持人：Sponsor 自任或指派
- [ ] 会议纪要：建议 Sponsor 助理（即本会话延续）记录
- [ ] #brand-updates 同步：v0.2 进入"both sides reviewed, tri-party meeting scheduled for [日期]"

### 15.1.5 修订源文档预案 v2（待会后落地，**当前未生效**）

resolution.md §7 列出 19 处源文档预计修订（合并市场反馈 + 法务新提 + 综合裁决）：

**03a 社交媒体**：

| 章节 | 修订 | 触发 |
|---|---|---|
| §3.7 小红书 | 加"机制 / 操作 / 信任层"演示白名单 + 医生使用介绍；保留医美 + 患者不出镜禁令 | R1 + L1 |
| §6.2 真人医生政策 | 重写为"代言 vs 使用介绍"二分；加合规要求清单 + 禁忌清单 | L1 |
| §8.2 撤回时间窗 | 收紧（公众号 1h / 微博 6h / LinkedIn 6h / 抖音视频号小红书 2h+公告）| L2 |
| §5.5 | 视澄清结果删除或保留 | 法务"无需"待澄清 |

**03e 华语区域化**：

| 章节 | 修订 | 触发 |
|---|---|---|
| §1.1 | 5 层 → **4 层**（合并 T4+T5 为"基层与新业态"）| D11 |
| §2.2 引用密度分层 | 强化（接 03f §5.2 删除）| R5 |
| §6.1 RACI | 拆 A / B 类；A 类大区独发+抽查；B 类仍走总部+法务 | R2（待会议） |
| §6.2 本地化申请单 | B 类用申请单；A 类先发后报 | R2（待会议） |
| §4.5 集采 / 一致性评价 | 视澄清结果删除或保留 | 法务"无需"待澄清 |

**03f 声明实证**：

| 章节 | 修订 | 触发 |
|---|---|---|
| §2.1 SourceID 字段 | 按 L 级分必填 / 选填（L1/L2 简化版 / L3/L4 完整版）| R3（待会议澄清"全省略 vs 轻量化"）|
| §3.3 招股材料 | 明确按 HKEX Listing Rules + Inside Information Rules | L4 |
| §4.3 UI claim | 分级：静态 RFC+法务 / 动态 dashboard 直读+报警 / AB SourceID / 临床三签 | R4（待会议） |
| §4.5 媒体偏差兜底 | 24h → 3 工作日 | L3 |
| §5.2 受众分层适配 | **删除** | R5 |
| §2.4 客户 case 时效 | 视澄清调整 | 法务"无需"待澄清 |
| §4.6 学术合作发布 | 视澄清调整 | 法务"无需"待澄清 |
| §9 14 条自检 | 视澄清调整 | 法务"无需"待澄清 |

### 15.2 Review Packet 产物

`governance/v0.2-batch-review-packet.md` —— 11 章 / ~400 行；单一入口让审阅人不必翻 4 份源文档。覆盖：

- §1 一段话上下文 + §2 升版判定（minor / 双签依据）
- §3 详读优先级与时间预算（市场 ~3h / 法务 ~3h）
- §4 **25 条要 ack 的决策清单**（D1–D25，按 4 份文件分组）
- §5 市场负责人专项 review checklist（22 条）—— 渠道 / 受众分层 / 内容生产责任 / 培训需求
- §6 法务专项 review checklist（30 条）—— 监管邻接 / 真人医生代言 / 实证链 / 撤稿响应 / 互联网医院 / 跨境数据
- §7 共同 review checklist（双方都该看）
- §8 反馈与退回流程（争议处理）
- §9 双签后落地操作（升版号写入 / 签字留痕 / 同步 docs / HANDOFF 更新 / 通知工程 / 启动后续）
- §10 源文档清单
- §11 签字栏（市场 / 法务 / Sponsor）

### 15.3 Review 期间的工作约束

**v0.2 review 期间不再起草新 voice gap 子文档**。理由：

1. 避免再次累积未签批次（已经一次性 4 处变更，再加只会加大签字人压力）
2. 签字过程可能触发回退 / 修订；先稳定本批
3. 03f §6.1 实证库工具选型依赖签字落地后才能召集三方决议会

review 期间可推进的工作：

- **强制层（B）**：把已锁定的 25 条决议中的核心红线（D5 真人医生 / D8 同行禁忌 / D14 大区不能独发 / D21 11 项不允许来源 / D22 撤稿响应铁律）同步进 `.claude/brand-voice-guidelines.md`，让 brand-voice 技能在后续写作中自动生效——**这一步不影响双签内容**，可以并行
- **工程层（A）**：包名重命名后的 `react/` 与 `docs/` 重装重建；NPM 首次发布演练
- **VitePress 站准备**：把 03a / 03e / 03f 接入 docs/voice/ 目录的工作可以预备脚本，但**不要 commit**——等签字完成后再合入

### 15.4 双签流程预期时间线（建议）

```
T+0  Sponsor (Yog) 把 packet 发给市场负责人 + 法务（邮件 / Slack）
T+1  市场 / 法务各自详读 packet（~3h 各自）
T+3  双方各自标注 ack 或 ⚠️ 待讨论
T+5  如有 ⚠️：Sponsor 召集 30min 三方答疑
T+6  共识修订（如需）+ 重发第二轮签
T+7  双方签字完成 → 进入 §9 落地操作（24h 内完成）
```

最快 5 个工作日（无争议）；有争议 7–10 个工作日。

### 15.5 Sponsor 即时动作清单

- [ ] 把 `governance/v0.2-batch-review-packet.md` 链接发给市场负责人 + 法务（邮件主题建议："Voice v0.2 双签 review packet · 请 5 工作日内回复"）
- [ ] 邮件正文附 §3 时间预算 + §4 决议条数预告（让对方先排期）
- [ ] 在 #brand-updates 同步本批次进入 review pending 状态
- [ ] 锁定 review 期间的工作流：起草新 gap 暂停；强制层 / 工程层并行可推
- [ ] 准备 30min 答疑会议日程（按 T+5 时间线）

### 15.6 v0.2 batch review packet 锁定决策

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 批次范围 | 03 §10 + 03a + 03e + 03f 一次签；不拆分 | packet §1 |
| 签字组合 | 市场负责人 + 法务（voice 层规则）；Tech Lead 不签但通知 | packet §2 |
| 升版判定 | minor（v0.1 → v0.2）；不属 major / 紧急 | packet §2 |
| 实证库工具选型 | **解耦于本签字**——v0.2 签完后由 Sponsor + 法务 + 工程三方另启决议会 | packet §7 + §9.3 |
| Review 期间约束 | 不起草新 voice gap；强制层 / 工程层 / VitePress 预备可并行 | §15.3 |
| 反馈退回 | 在 packet 决议条目后追加"⚠️ 待讨论"；Sponsor 30min 内召集三方 | packet §8 |

---

## 21. 2026-05-08 react 包 v0.1.0 首发完成

### 21.1 状态

- **当前状态**：✅ **`@yogyoung-code/ai-brand-kit@0.1.0` 真首发完成**（2026-05-08）
- **registry**：GitHub Packages（`https://npm.pkg.github.com`）
- **dist-tags**：`latest: 0.1.0` + `rc: 0.1.0-rc.1`（rc 演练版本保留作 audit trail）
- **GitHub repo**：`yogyoung-code/ai-brand-kit`（README + CHANGELOG + v0.1.0 tag）
- **GitHub Release**：v0.1.0 release page 已发（含 release note + Stats + Roadmap）

### 21.2 真发布走通的完整链路

按 06a §7.2 SOP + react/PUBLISH.md 跑了完整流程：

| 步骤 | 状态 | 备注 |
|---|---|---|
| 0.1 生成 PAT（classic · write:packages + read:packages + repo · 90 天）| ✅ | 后期发现需 read:packages 同时勾选——已回填 PUBLISH.md §0.1 |
| 0.2 配 `~/.npmrc`（用户级 + chmod 600）| ✅ | 后期发现 cp .npmrc.example 易遗漏占位符——已回填 .npmrc.example + PUBLISH.md §0.2 |
| 1.2 npm version 0.1.0-rc.1（prerelease 演练）| ✅ | |
| 1.2 重装 + build + dry-run + publish --tag rc | ✅ | 中途遇 EPRIVATE（package.json 含 private:true）→ 移除 + 回填 06a §7.4 / PUBLISH.md 故障排查 |
| 1.2 客户接入测试（/tmp/test-rc · 39 exports + 12 SVG）| ✅ | |
| 1.3 npm version 0.1.0 + build + publish（latest tag）| ✅ | |
| 1.3 GitHub repo init（README + CHANGELOG）+ git push + tag v0.1.0 + push tag | ✅ | 中途遇 git PAT 认证（GitHub 禁用密码认证）→ 用 PAT 嵌 URL 一次 push 后改回纯 URL |
| 1.3 GitHub Release page 发 release note（模板 2）| ✅ | |

### 21.3 沿途回填到文档（防下次踩坑）

| 文档 | 回填内容 |
|---|---|
| `06a-npm-semver.md` §7.4 | 加"package.json 不含 private:true"+ "publishConfig.registry / access 双层防护"校验项 |
| `react/PUBLISH.md` §0.1 | PAT 必须**同时**勾选 write:packages + read:packages（GitHub Packages 把 read/write 分开认证）+ 不能用 fine-grained token（必须 classic）|
| `react/PUBLISH.md` §0.2 | 不要 `cp .npmrc.example ~/.npmrc`（占位符易遗漏）；推荐直接 `cat > ~/.npmrc <<EOF` 写最简 2 行 |
| `react/PUBLISH.md` §4 故障排查 | 新增 4 条：EPRIVATE / GET 401 但 PUT 成功（缺 read:packages）/ fine-grained token 不支持 / 占位符未替换 |
| `react/PUBLISH.md` §5 校验清单 | 新增第 15 条"双层防护配置 + 无 private 字段"|
| `react/.npmrc.example` 顶部 | 加 ⚠️⚠️⚠️ 警告：复制后必须替换占位符 + 推荐 cat 写法 |

### 21.4 沿途遇到的坑（学习记录）

1. **EPRIVATE**：v0 阶段 `package.json` 设的 `"private": true` 防止任何 publish；与 `publishConfig.access: restricted` 本质冲突——已移除 `private` 字段
2. **PAT scope 半权限**：之前 PAT 只勾 `write:packages` 没勾 `read:packages`——publish 能成功但 `npm view` / `curl GET` / `npm install` 报 401（GitHub Packages read/write 分开认证）
3. **fine-grained vs classic PAT**：fine-grained 对 GitHub Packages npm registry 支持不全；必须用 classic
4. **cp .npmrc.example 陷阱**：模板 97 行注释 + 占位符 `ghp_REPLACE_WITH_YOUR_PERSONAL_ACCESS_TOKEN` 易遗忘替换 → 401
5. **Git 不会从 ~/.npmrc 取 PAT**：git push 用 HTTPS 时 GitHub 禁用密码认证；需 PAT 嵌 URL / credential helper / SSH key
6. **zsh INTERACTIVE_COMMENTS**：默认关闭——粘贴含 `#` 注释的命令会报 `command not found: #`；用 `setopt INTERACTIVE_COMMENTS` 开启或避免 `#` 注释
7. **GitHub Packages UI 索引延迟**：刚发布 1-5 分钟内 npm view / GitHub Packages UI 可能查不到；不影响真实 publish 状态——直接 `curl` API 或 `npm install` 测试更可靠

### 21.5 v0.1.0 真发布锁定数据（为后续 baseline）

| 维度 | v0.1.0 |
|---|---|
| Tarball entries | 27 |
| Packed size | 1.0 MB |
| Unpacked size | 3.3 MB |
| Main exports | 39 |
| Token exports | 11 |
| 12 master-brand SVG | 全部入包 |
| dist/styles.css | 14.8 KB |
| 校验通过项 | exports 9 条全过 / typecheck 0 error / dist hash baseline 已存 |

### 21.6 后续任务节点（按 06a §13 + packet §10.4）

- **T+30 天内**：实证库工具选型三方决议会议（NocoDB / Baserow / PG+FastAPI · 与 04c 临时素材库基础设施复用）
- **T+30 天内**：法务交付《过渡期摄影申请表》+《知情同意书》模板
- **T+30 天内**：法务真人医生"判定指南"v0.2.1 patch
- **T+30 天内**：实证库工具选型 RFC
- **T+60 天内**：a11y CI 集成（axe-core / Pa11y / Lighthouse）
- **T+60 天内**：ai-tokens.css 注入 motion tokens（B10）
- **T+60 天内**：react 包 v0.2.0 发布（含 a11y + motion patch + Spinner / Skeleton / Toast / ProgressBar）
- **当前 review pending**：06a v0.1 → v0.2 双签（packet 已编制）
- **可即时启动**：voice gap #7 邮件 / #8 错误边界态 / #9 竞品对比

### 21.7 锁定决策

| 决策 | 锁定值 | 依据 |
|---|---|---|
| react 包正式首发版本 | v0.1.0 | publish 完成 2026-05-08 |
| 临时阶段包名 | `@yogyoung-code/ai-brand-kit`（Sponsor 个人 GitHub 账号 · v0.x.x 阶段）| 06 §5.4 |
| 客户锁版要求 | v0.x.x 必须**精确锁版** `0.1.0` ✓ 而非 `^0.1.0` ❌ | 06a §2.3 + §9.1 |
| Registry | GitHub Packages（`https://npm.pkg.github.com`）restricted access | 06 §5.4 |
| package.json 防护 | 无 `private: true`；保留 `publishConfig.registry` + `publishConfig.access: restricted` 双层防护 | 06a §7.4（v0.1 → v0.2 候选回填）|
| PAT 要求 | classic（非 fine-grained）+ 同时含 write:packages + read:packages（+ repo if private repo）| react/PUBLISH.md §0.1（首发后回填）|
| Git push 模式 | PAT 嵌 URL 一次性 push 完改回纯 URL；或后续配 osxkeychain credential helper | react/PUBLISH.md §0.1（首发后回填）|

---

## 22. 2026-05-08 voice gap #7 邮件模板起草会话产物

### 22.1 状态

✅ **完成 v0.1 草稿**（2026-05-08）—— `03c-email-templates-voice.md` 14 章 / ~700 行 / 10 个核心模板库；待市场 + 法务双签升 v0.2

### 22.2 锁定决策（待双签确认）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 邮件分类维度 | 按"目的"分 6 类（C1 事务性 / C2 营销 / C3 客户支持 / C4 内部 / C5 PR / C6 紧急-撤稿响应）| 03c §1 |
| 签字门槛分级 | C1 TL 单签 / C2 双签每模板 / C3 客户支持 lead 单签 / C4 自审 / C5 PR+法务双签 / C6 三签 | 03c §1.1 |
| 跨产品邮件签字 | 上调一级（双签变三签）| 03c §1.2 |
| 大区独发权（继承 03e §6.1）| 仅 C2 + C4 可独发；不可独发 C5 + C6；事后 100% review 7 工作日内 | 03c §1.3 |
| 域名分层 | noreply/brand/support/[name]/pr/legal @medsci-ai.com（v0.x.x）| 03c §2.1 |
| MSH org 迁移后域名 | 切到 `@medsci.com.cn`（与 06a §12 NPM 包迁移同步）| 03c §2.2 |
| From 显示名 | 不允许"Sales Team" / "Marketing Department"（去人称化降低打开率 + 反钓鱼判定可疑）| 03c §2.3 |
| 反钓鱼配置 | DKIM/SPF/DMARC 必须配 · DMARC ≥ quarantine（v1.0+ → reject）| 03c §2.4 |
| 主题行 | ≤ 50 字符 / 禁全大写 / 禁词清单（紧急/限时/免费/100%/保证）/ 不用[Re:][Fwd:]假装回复 | 03c §3 |
| emoji 邮件特异 | C1 完全禁；C2 白名单 ≤ 2 个；C3 镜像礼貌；C5 完全禁；C6 仅 ⚠️ 一次主题行 | 03c §4.6 |
| **真人医生 邮件 body 内禁照片**（继承 03a §6.2）| 文字提及 OK；头像 / 视频 / GIF 不允许；patient 永远不允许（即使匿名）| 03c §6 |
| endorsement 出现规则 | 对外邮件**必须**；内部邮件可省 | 03c §4.3 + §7 |
| 4 产品 BrandScope 色条 | DE/SE/DI/RCP 邮件签名档左侧 4px 色条；伞标级用渐变 | 03c §7.3 |
| 退订合规 | 营销邮件必含退订链接（PIPL §17 / CAN-SPAM / CASL / GDPR）；事务性必含"为何收到"段；退订 ≤ 1 工作日生效 | 03c §8 |
| 双 opt-in 推荐 | 不允许 pre-checked 营销订阅复选框；注册后系统发确认订阅事务性邮件 | 03c §8.5 |
| **撤稿响应邮件**（继承 03f §3.4）| R1 客户告警 T+24h 三签 / R2 媒体勘误 T+3 工作日 / R3 内部通知 / R4 监管 T+72h；保留 7 年 | 03c §9 |
| 中英协同 | CN 主版 + EN 仅"存在感保留模式"（继承 03a §3.3）；双语 CN 在上 EN 在下；不允许 CN/EN 混用 | 03c §10 |
| 附件命名 | `[YYYYMMDD]-[产品]-[类型]-[版本].[扩展名]` 强制；不暴露 PII | 03c §11.1 |
| 加密附件 | 客户合同 / 法律 / 财务 → 256-bit AES PDF；密码不在同邮件发 | 03c §11.5 |
| 模板库 10 个 | M1 产品发布 / M2 营销活动 / M3 客户成功 / M4 客户支持 / M5 续约 / M6 撤稿响应 / M7 监管公告 / M8 媒体采访 / M9 法务文件 / M10 onboarding | 03c §12 |

### 22.3 与已签 spec 的协同（信息周知）

- 03 §10 子文档清单：03c 行升级为 v0.1 草稿
- 03f §3.4 撤稿响应：邮件渠道层补充 R1-R4 4 子类（与社交 03a §5.1 + UI 04b §7.4 三处统一）
- 03a §6.2 真人医生：邮件 body 内禁照片（在社交平台限制基础上额外约束）
- 04c §2.3 患者出镜：邮件 body 内永远不允许（强化）
- 06a §12 MSH org 迁移：邮件域名切换与 NPM 包迁移同步

### 22.4 待办

1. **市场 + 法务双签**（按 03 §9 + 06 §2.1）
2. **VitePress 同步**：将 03c 接入 docs/voice/ 目录，更新 sidebar；运行 `scripts/sync-docs.mjs`
3. **强制层（B）**：03c 的核心红线（C1-C6 分类 + 退订合规 + §6 真人医生 8 条护栏 + §9 撤稿响应 4 子类）同步进 `governance/brand-voice-guidelines.md`（v0.3 候选）
4. **工程联动**：C1 事务性邮件模板与产品工程对接（注册确认 / 密码重置 / 订阅状态等系统触发邮件）
5. **退订系统上线**：≤ 1 工作日生效校验（涉工程实施 + 法务签字）
6. **DMARC 配置**：v0.x.x 阶段先 DMARC quarantine；进入 v1.0 后升 reject（涉信息安全配置）
7. **协同 03d 错误边界态**：建议 03c + 03d 起草完成后做一次 voice 层 v0.3 双签批次（合并 §10 子文档清单升版）

### 22.5 下一步候选

1. **gap #8 错误边界态**（产品 UI 高频 + 临床后果敏感 + 与 react v0.2.0 a11y patch 协同）—— 三签（市场 + Tech Lead + 法务）
2. **gap #9 竞品对比**（Legal 邻接最重 + BD 用得到）—— 双签（市场 + 法务）+ 法务详读
3. **03c v0.1 → v0.2 双签**（先稳定本批次再继续）—— 与 v0.2 voice 层 / 04 批次签字流程一致
4. **06a v0.1 → v0.2 双签**（治理收尾，让 react v0.1.0 真有规则约束）—— Tech Lead + Sponsor 双签
5. **v0.2.1 patch 候选**：市场新人速查卡 + 真人医生判定指南 + 邮件模板速查卡

### 22.6 v0.1 体量与签字成本预估

| 维度 | 03c v0.1 |
|---|---|
| 行数 | ~700 |
| 章节 | 14 |
| 模板数 | 10 个核心模板（M1-M10）|
| 签字组合 | 市场 + 法务双签（与 03a / 03e / 03f 一致）|
| 签字时长 | 市场 ~3h（含模板审）+ 法务 ~3h（含 §8 退订 / §9 撤稿 / §11 加密详读）|
| 协同子文档 | 与 03d 错误边界态批次合签更经济（60% review 成本节省）|

---

## 23. 2026-05-08 voice gap #8 错误 / 边界 / 空态文案起草会话产物

### 23.1 状态

✅ **完成 v0.1 草稿**（2026-05-08）—— `03d-error-and-empty-state-voice.md` 14 章 / ~830 行 / 30 个核心模板；待市场 + Tech Lead + 法务**三签**升 v0.2

### 23.2 锁定决策（待三签确认）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 错误分类维度 | **三维矩阵**：来源 6 类 × 严重度 4 级 × **临床敏感度 4 级**（本子文档核心特异维度）| 03d §1 |
| 临床敏感度 4 级 | clinical-critical（直接影响临床决策 / 处方）/ clinical-adjacent（影响数据展示 / 引用）/ business / cosmetic | 03d §1.3 |
| 4 产品默认敏感度 | DE 默认 clinical-critical/adjacent；SE 默认 clinical-adjacent/business；DI 默认 business（涉客户医生 PII 升 clinical-adjacent）；RCP 默认 business（涉医生反馈直接影响临床决策时升 clinical-adjacent）| 03d §1.4 |
| 文案 4 段式 | What happened / Why / What to do / Where to get help —— info / cosmetic 可豁免；clinical-critical 即使 info 也必须 4 段式 | 03d §2 |
| 错误码命名空间 | ERR-COMMON-* / ERR-DE-* / ERR-SE-* / ERR-DI-* / ERR-RCP-* | 03d §3.1 |
| 错误码编号区段 | 001-099 系统/网络 / 100-199 业务 / 200-299 验证 / 300-399 权限 / 400-499 配额 / 500-599 临床特殊 / 600-699 数据/引用 / 700-799 集成 / 900-999 内部 | 03d §3.2 |
| **CN 用户可见 + EN 内部码双轨**（继承决议 #4）| 用户可见 → CN；错误码 / 日志 / 监控 → EN；EN 用户可见仅 EN 单语场景 | 03d §3.3 + §11 |
| **18 禁忌措辞** | 10 通用（"未知错误" / "系统繁忙" / "您输入不正确" / 道歉过度 / "Oops" / "请联系管理员" / 单独 "Permission Denied" / 技术术语暴露 / 绝对化 / 承诺式 / 反问 / emoji / 全大写 / 长篇道歉无 actionable）+ 4 临床额外（"AI 替你判断" / "肯定 X 病症" / 单独"建议立即停药"  / "AI 治好"）| 03d §4 |
| 空态 6 子类 | E1 never had data / E2 cleared / E3 loading / E4 error fallback / E5 offline / E6 unauthorized | 03d §5 |
| **PITL 核验提示触发条件** | confidence < 0.7 / 涉处方建议 / 引用 SourceID 失效 / 用户标注复杂病例 | 03d §6.1 |
| **撤稿告警 UI** | 全屏阻塞 Toast + aria-live="assertive"（继承 04b §7.4）+ 不允许"忽略" + 触发 R1 客户告警邮件（继承 03c §9）| 03d §6.2 |
| confidence 阈值显示 | ≥ 0.7 < 0.9 显示数值 + 证据强度 L1-L4（不弹 Toast 不阻塞）| 03d §6.3 |
| 求助路径 3 级 | L1 自助 / L2 客户支持（support@medsci-ai.com）/ L3 紧急 hotline + 临床支持专线；critical+clinical-critical → L2+L3 双路径 | 03d §8 |
| 工单自动创建 | complex error / critical 自动创建 TASK-YYYY-NNNNN；不含 PII（继承 04c §2.5）| 03d §8.3 |
| 共享错误码不重复翻译 | ERR-COMMON-* 4 产品文案完全一致；例外仅 §6 临床特殊段差异化 | 03d §9.2 |
| 错误监控阈值 | 高频错误 > 1% 用户触发工程 review；任意 1 次 clinical-critical 触发法务+产品 review | 03d §9.3 |
| 30 个核心模板锁定 | 10 ERR-COMMON / 6 ERR-DE / 4 ERR-SE / 4 ERR-DI / 4 ERR-RCP / 6 EMPTY | 03d §10 |
| **lint / CI / 季度审计** | scripts/lint-error-copy.mjs（CI 集成）+ axe-core/Pa11y/Lighthouse（继承 04a）+ 法务+产品 PM 季度抽样 ≥ 100 条 | 03d §12 |
| 错误码注册表 | governance/error-codes-registry.md（待落地）+ 字段：ID / 三维分类 / CN+EN 文案 / 触发频率 / 法务 review 状态 | 03d §12.4 |

### 23.3 与已签 spec 的协同（信息周知）

- 不修改 03 §1.1 决议 #4（CN 用户可见 / EN 代码层）—— 实施细化
- 不修改 04a §4 aria 规范 / §3 焦点管理 / §2.3 不依赖颜色 / §5 触控 44×44 —— 协同引用
- 不修改 04b §6.4 三冗余 / §7.2 Toast 滞留 / §9 错误克制原则 / §10 reduce-motion —— 协同引用
- 不修改 03f §3.4 撤稿响应铁律 —— 实施细化 UI 层呈现
- 不修改 03c §9 撤稿响应邮件 R1 模板 —— 触发 R1 邮件
- 03 §10 子文档清单：03d 行升级为 v0.1 草稿

### 23.4 与 03c 邮件模板的合签建议

03c v0.1 + 03d v0.1 体量加起来 ~1,530 行 / 28 章 / 60 决议条数。建议合并 voice 层 v0.3 双签 / 三签批次：

| 维度 | 合签批次 ⭐ | 拆开签 |
|---|---|---|
| 签字组合 | 市场 + 法务 + Tech Lead 三签（**取 03d 三签为基线** · 因 03d 涉工程实施需 TL）| 03c 双签 + 03d 三签分两次 |
| 签字成本 | 单次 review（约 4-5h 市场 + 5-6h Tech Lead + 4-5h 法务）| 双次 review × 2（成本翻倍）|
| 上下文连贯 | 03c §9 撤稿响应邮件 R1 与 03d §6.2 撤稿告警 UI 协同；可一并 review | 拆分会损失上下文 |
| 协同子文档 | 03 §10 子文档清单一次升版（v0.2 → v0.3 候选）| 两次升版 |
| **建议** | ⭐ 合签批次 | 不推荐 |

### 23.5 待办

1. **编制 voice 层 v0.3 三签 packet**（结构参 04 子文档批次 packet · 覆盖 03 §10 + 03c + 03d）
2. **市场 + Tech Lead + 法务三签**（按 03 §9 + 06 §2.1）
3. **VitePress 同步**：将 03c + 03d 接入 docs/voice/ 目录，更新 sidebar；运行 `scripts/sync-docs.mjs`
4. **强制层（B）**：03c + 03d 核心红线同步进 `governance/brand-voice-guidelines.md`（v0.3 候选 · ~70 条红线）
5. **工程联动**（v0.3 落地后启动）：
   - `scripts/lint-error-copy.mjs` 落地（03d §12.1）
   - `governance/error-codes-registry.md` 落地（03d §12.4）
   - 错误码 lint 接入 GitHub Actions CI（03d §12.1）
   - 错误监控接入（Sentry / 自建 · 03d §9.3）
6. **法务 + 临床顾问季度审计**：抽样 ≥ 100 条 UI 错误文案；任何 clinical-critical 缺 PITL 提示 / 求助路径 → 立即修复

### 23.6 下一步候选

1. **编制 voice 层 v0.3 三签 packet**（覆盖 03c + 03d）—— 推荐 ⭐⭐
2. **gap #9 竞品对比**（剩最后 1 个 voice gap 未起草）—— 法务邻接最重；BD 急用；双签
3. **06a v0.1 → v0.2 双签**（治理收尾）
4. **v0.2.1 patch 候选**：市场新人速查卡 + 真人医生判定指南 + 错误文案速查卡
5. **休息一下** —— v0.1.0 真发布 + 03c + 03d 起草都是大里程碑，今天可以收工

### 23.7 v0.1 体量与签字成本预估

| 维度 | 03d v0.1 |
|---|---|
| 行数 | ~830 |
| 章节 | 14 |
| 模板数 | 30 个核心模板（T-COMMON-* 10 / T-DE-* 6 / T-SE-* 4 / T-DI-* 4 / T-RCP-* 4 / T-EMPTY-* 6）|
| 签字组合 | **三签**（市场 + Tech Lead + 法务）—— 涉工程实施 + 临床敏感 + 监管措辞 |
| 签字时长（独立批次）| 市场 ~3h（含模板审）+ Tech Lead ~4h（含工程实施评估）+ 法务 ~4h（含 §4 禁忌 / §6 临床特殊 / §11 中英对照详读）|
| 协同子文档 | 与 03c 合签更经济（60% review 成本节省 · §23.4）|
| **Voice gap 进度** | **8/10**（剩 #9 竞品对比 1 个未起草）|

---

## 24. 2026-05-08 voice gap #9 竞品对比起草会话产物 · ✨ Voice gap 100% 完成

### 24.1 状态

✅ **完成 v0.1 草稿**（2026-05-08）—— `03g-competitive-and-comparison-voice.md` 12 章 / ~750 行 / 10 个核心场景模板；待市场 + 法务**双签**升 v0.2

🎉 **本会话起完最后 1 个 voice gap，10 个 Coverage Gaps 全部覆盖完毕**：

| Gap # | 子文档 | 状态 |
|---|---|---|
| #1 社交媒体 | 03a-social-media-voice.md | ✅ v0.2 已签 |
| #2 华语区域化 | 03e-china-regionalization.md | ✅ v0.2 已签 |
| #3 声明实证 | 03f-evidence-attestation.md | ✅ v0.2 已签 |
| #4 交互组件 a11y | 04a-component-accessibility.md | ✅ v0.2 已签 |
| #5 动效指引 | 04b-motion-guidelines.md | ✅ v0.2 已签 |
| #6 摄影插画过渡 | 04c-photography-illustration-interim.md | ✅ v0.2 已签 |
| #7 邮件模板 | 03c-email-templates-voice.md | ✅ v0.1 草稿（待 v0.3 双签）|
| #8 错误边界态 | 03d-error-and-empty-state-voice.md | ✅ v0.1 草稿（待 v0.3 三签）|
| **#9 竞品对比** | **03g-competitive-and-comparison-voice.md** | ✅ **v0.1 草稿（本会话 · 待 v0.4 双签）** |
| #10 NPM SemVer | 06a-npm-semver.md | ✅ v0.1 草稿（待 v0.2 TL+Sponsor 双签）|

### 24.2 锁定决策（待双签确认）

| 决策 | 锁定值 | 依据 |
|---|---|---|
| 同行分类 | C1 直接竞品（同领域 AI 医疗 SaaS）/ C2 间接竞品（传统 CDS）/ C3 兄弟业务（梅斯医生 严格不互换）/ C4 上下游伙伴（非竞品）| 03g §1.1 |
| 鉴别 4 问题 | 是否含同行品牌名 / 是否暗示我方更好 / 是否引用同行未公开材料 / 是否会被解读为贬损虚假宣传 | 03g §1.2 |
| **5 条公开声明铁律 R1-R5** | R1 不点名 / R2 不暗示业内最强 / R3 不引用同行内部材料 / R4 不挑起监管纠纷 / R5 公开渠道不做 vs 对比 | 03g §2 |
| 内部 Battle Card 限定 | 仅 BD/销售/客户支持白名单 + 不打印 + 不外发邮件 + 加密存储 + 访问日志 7 年 + 季度法务审计 | 03g §3.1 |
| Battle Card 字段 11 项 | 同行品牌名 / 公司 / 定位 / 功能 / 客户类型 / 公开数据 / 监管资质 / 近期动态 / 我方对应能力（不褒贬）/ 客户对话 talking points / 法务 review 状态 | 03g §3.2 |
| Battle Card 严禁字段 6 项 | 同行弱点 / 同行客户负评 / 挖角剧本 / 内部消息 / 离职员工口述 / 个人评价 | 03g §3.3 |
| Battle Card 信息源（继承 03f §2.3）| 仅同行官网/官方白皮书/SEC/HKEX/同行评议论文/NMPA/FDA/EMA 公开/IDC/Gartner/Frost & Sullivan/主流媒体 | 03g §3.4 |
| 客户问 vs 应答 4 步原则 | 不诋毁 → 客户驱动（"你为什么对比"）→ 聚焦自己 → 鼓励客户自评 | 03g §4.1 |
| 媒体应答 | 礼貌不评价 + 转向行业层面 + 聚焦自己 + 必要时提供资料；24h 内 PR + 法务通知（即使没问题）| 03g §5 |
| RFP 投标响应 3 策略 | 重新框定（不直接对比）/ 提供评估框架（不含品牌名）/ 直接拒绝并说明 + 法务 + 市场双签**每次响应**（不可批量授权 + 大区独发不允许）| 03g §6 |
| 学术合作论文 | 法务 + 临床顾问 + 论文 PI 三签（继承 03f §4.6）| 03g §7.2 |
| 同行撤稿 / 监管事件 | 公开渠道沉默 + 仅内部 Battle Card 更新；客户主动问时聚焦自己（不评价同行）| 03g §8 |
| 跨境 | NMPA 严格 / FTC（出海） / HKEX 信披强制要求按法务+Sponsor+港交所联系人四方逐字 | 03g §9 |
| 客户主动提供同行内部信息处理 | 当场拒收 + 不进 Battle Card / 销售脚本 / 邮件留痕 + 24h 内法务报告 | 03g §10.10 |
| 10 个核心场景模板锁定 | T-COMP-CUST-1/2 / T-COMP-MEDIA-1/2 / T-COMP-RFP-1 / T-COMP-RETRACT-1 / T-COMP-INTERNAL-1 / T-COMP-COMP-1 / T-COMP-AVOID-1/2 | 03g §10 |
| 签字组合 | **双签**（市场 + 法务）—— 与 03a / 03c 一致；R1-R5 调整需 Sponsor 三签 | 03g §12.1 |

### 24.3 与已签 spec 的协同

- 不修改 03 §6 禁词清单 / §5.4 兄弟业务不互换 —— 实施细化
- 不修改 03a §5.4 同行竞品默认沉默 —— 实施细化（公开渠道 vs 内部 Battle Card 双轨）
- 不修改 03f §3.4 撤稿响应铁律（涉同行论文被撤稿）—— 协同引用
- 不修改 03c §M8 媒体采访模板 —— 实施细化（媒体涉同行问题应答）

### 24.4 签字策略建议

03g 与 03c / 03d 不能同批合签（签字组合不一致）：

| 子文档 | 签字组合 | 体量 |
|---|---|---|
| 03c v0.1 | 市场 + 法务双签 | ~700 行 |
| 03d v0.1 | 市场 + Tech Lead + 法务**三签** | ~830 行 |
| 03g v0.1 | 市场 + 法务双签 | ~750 行 |

**推荐策略**：

- **方案 A**：03c + 03g 合签（双签批次 v0.3 · 共 ~1,450 行）+ 03d 单独三签（v0.3 三签）
- **方案 B**：03c + 03d + 03g 一起三签（取 03d 三签为基线 · 体量大但一次性 · ~2,280 行）
- **方案 C**：三个分别独立签（最贵）

推荐 ⭐⭐ **方案 A**（双签和三签性质不同；与 voice 层 v0.2 双签 / 04 批次 v0.2 三签结构一致）

### 24.5 待办

1. **编制 voice 层 v0.3 双签 packet**（覆盖 03 §10 + 03c + 03g · 双签批次）
2. **编制 voice 层 v0.3 三签 packet**（覆盖 03d 单独 · 三签批次）
3. **市场 + 法务双签**（03c + 03g）+ **三签**（03d）
4. **VitePress 同步**：03c + 03d + 03g 接入 docs/voice/ 目录，更新 sidebar；运行 `scripts/sync-docs.mjs`
5. **强制层（B）**：03c + 03d + 03g 核心红线同步进 `governance/brand-voice-guidelines.md`（v0.3 候选 · ~85 条红线）
6. **Battle Card 模板与实证库工具基础设施集成**（继承 03f §6.1 工具决议会议）
7. **销售 / 客户支持 / PR onboarding 培训**（与 voice 层 v0.2 onboarding 协同 · 1 个月内）

### 24.6 下一步候选

1. ⭐⭐ **编制 voice 层 v0.3 双签 packet**（覆盖 03c + 03g · 简单批次先做）
2. **编制 voice 层 v0.3 三签 packet**（覆盖 03d · 单独批次）
3. **06a v0.1 → v0.2 双签**（治理收尾，让 react v0.1.0 真有规则约束）
4. **v0.2.1 patch 候选**：市场新人速查卡 + 真人医生判定指南 + Battle Card 模板初稿（利用 03g §3）
5. **休息一下** —— **Voice gap 100% 完成 + v0.1.0 真发布 + 03c/03d/03g 起草** 是巨大里程碑！

### 24.7 voice gap 全景里程碑

```
          v0.2 已签              v0.1 草稿（待签）
voice 层  03a 03e 03f             03c 03d 03g
04 批次   04a 04b 04c             —
06 治理   —                       06a

总计   6 个 v0.2 已签        4 个 v0.1 待签

体量统计：
- v0.2 已签：03a (~440) + 03e (~440) + 03f (~480) + 04a (~640) + 04b (~620) + 04c (~520) ≈ 3,140 行
- v0.1 草稿：03c (~700) + 03d (~830) + 03g (~750) + 06a (~750) ≈ 3,030 行
- 总文档体量：~6,170 行（不含 governance / packet / 主文档）

里程碑：
- 2026-05-05 ~v1.0 锁定
- 2026-05-06 voice 层 v0.2 双签
- 2026-05-07 04 批次 v0.2 候选 + 强制层 brand-voice-guidelines
- 2026-05-08 04 批次 v0.2 三签 + react v0.1.0 真首发 + voice gap 全部 10 个起草完成 + voice 层 v0.3 双签（03c + 03g）+ voice 层 v0.3 三签（03d）+ **06a NPM SemVer v0.2 双签 · ✨ Voice gap 10/10 完整闭环**
```

---

## 25. 2026-05-08 voice 层 v0.3 双签完成 + Sponsor 落地操作完成（03c + 03g）

### 25.1 状态

✅ **双签完成**（C Yang 市场 + Bruce Chen 法务 + Sponsor Yog 流程留痕 · 2026-05-08）→ Sponsor 落地操作完成（2026-05-08）

### 25.2 双签留痕

voice 层 v0.3 双签 batch（03c + 03g）经 **C Yang（市场负责人）+ Bruce Chen（法务）** 于 **2026-05-08** 双签（`governance/v0.3-batch-review-packet.md` §11 签字栏）；Sponsor Yog 同日流程留痕。

### 25.3 Sponsor 落地操作（按 packet §9 · 完成于 2026-05-08）

- ✅ 升版号写入：03c / 03g 顶部 v0.1 → **v0.2**
- ✅ 签字留痕：每份 CHANGELOG 加 v0.2 双签段（C Yang + Bruce Chen · 2026-05-08）
- ✅ 03 §10 子文档清单：03c / 03g 状态升 v0.2 已签
- ✅ HANDOFF §13.2 voice gap #7 / #9 状态升"v0.2 已签"
- ✅ §24 全景里程碑统计更新（含 v0.3 双签完成）
- ⏳ docs/ 站同步：用户本地 `node scripts/sync-docs.mjs`
- ⏳ #brand-updates 通知：见 §25.5（release note 文案已起草）
- ⏳ DE / SE / DI / RCP 工程团队 lead 邮件：见 §25.5
- ⏳ 销售 / BD / 客户支持 / PR lead 邮件：见 §25.5

### 25.4 38 决议全部锁定

| 维度 | 锁定值 |
|---|---|
| X1-X2 03 §10 升版 | 03c / 03g 状态升 v0.2 已签；03 主文档版本号 v0.3 |
| E1-E18 邮件渠道 | 6 类邮件 + 签字门槛 + 域名分层 + 主题行禁词 + endorsement / 真人医生 body 内禁照片 / 退订合规 / 撤稿响应 R1-R4 / 中英协同 / 附件规范全部锁定 |
| G1-G18 竞品对比 | 同行 4 类 + 5 条公开声明铁律 R1-R5 + Battle Card 规范（11 字段 + 严禁 6 项 + 季度法务审计）+ 客户应答 4 步 + 媒体 24h 通知 + RFP 双签每次 + 学术三签 + 同行撤稿沉默全部锁定 |

### 25.5 通知文案（待 Sponsor 发送）

#### #brand-updates Release Note

```
🎉 Voice Layer v0.3 双签发布（03c 邮件 + 03g 竞品对比）

Voice 层 v0.2 → v0.3 升级完成（C Yang + Bruce Chen · 2026-05-08 双签 · Sponsor Yog 同日落地）。

📦 升版内容（2 份子文档 / ~1,450 行 / 38 决议）：
1. 03c-email-templates-voice.md v0.2（邮件模板与渠道）—— 6 类邮件 + 签字门槛矩阵 + 10 模板库 + 退订合规（PIPL §17 / CAN-SPAM / CASL / GDPR）+ 真人医生邮件 body 内禁照片 + 撤稿响应 R1-R4 子类
2. 03g-competitive-and-comparison-voice.md v0.2（竞品对比 / 同行表述）—— 5 条公开声明铁律 R1-R5 + 内部 Battle Card 规范 + 客户问 4 步应答 + RFP 投标 3 策略 + 学术合作三签 + 同行撤稿沉默

⚠️ 工程团队请重点关注：
- 03c §2.4 / E7：DKIM/SPF/DMARC 配置（≤ 30 天 IT 工单跟踪）
- 03c §8 / E13：退订系统 ≤ 1 工作日生效校验（产品工程 sprint）
- 03c §8.5 / E14：双 opt-in 注册流程上线（≤ 60 天与 react v0.2.0 一起）
- 03c 事务性邮件模板系统集成：与 react v0.2.0 一起做（60 天）

📌 销售 / BD / 客户支持 / PR 团队请重点关注：
- 03g §2 / G3-G7：5 条公开声明铁律 —— 公开渠道不点名 / 不暗示 / 不引用同行内部 / 不挑监管 / 不公开 vs
- 03g §3 / G9-G12：内部 Battle Card 限定（白名单 / 不打印外发 / 严禁 6 项字段 / 季度法务审计）
- 03g §4 / G13：客户问 vs 4 步应答（不诋毁 → 客户驱动 → 聚焦自己 → 鼓励评估）
- 03g §6 / G15：RFP 投标响应 3 策略 + 法务+市场双签每次（不可批量授权）

⏭️ 下一步：
- 30 天内：销售 / BD / 客户支持 / PR onboarding 培训追加 1-2 周
- 30 天内：DKIM/SPF/DMARC 配置 + 退订系统 ≤ 1 工作日生效校验 + Battle Card 加密 SaaS 决议会议
- 60 天内：事务性邮件系统集成 + 双 opt-in 注册流程上线（与 react v0.2.0 一起）
- voice gap 进度：6 v0.2 已签（03a/03e/03f）+ 2 v0.2 已签（03c/03g · 本批）+ 04 批次 v0.2 三签（04a/04b/04c）= 8/10
- 待签：03d 错误边界态（v0.3 三签 packet 待编制）+ 06a NPM SemVer（双签 packet 已就绪）

📚 详读：governance/v0.3-batch-review-packet.md（packet §4 列出全部 38 决议 X1-X2 / E1-E18 / G1-G18）
```

#### 工程团队 Lead 邮件（DE / SE / DI / RCP）

```
主题：[Brand Voice v0.3 升版] DE/SE/DI/RCP 工程团队 - 邮件系统集成 + DMARC + 退订系统升级

各位 Lead：

Voice 层 v0.3 已于 2026-05-08 经市场 + 法务双签发布并完成升版落地（03c 邮件 + 03g 竞品对比）。

📌 与工程团队直接相关的 4 条变更：

1. **DKIM/SPF/DMARC 配置**（03c §2.4 / E7）
   v0.x.x 阶段 DMARC ≥ quarantine；v1.0+ → reject。
   行动：IT 工单创建（≤ 30 天）；与基础架构团队对接 6 个域名（noreply/brand/support/[name]/pr/legal）配置。

2. **退订系统 ≤ 1 工作日生效校验**（03c §8 / E13）
   现有 EDM 工具评估（≤ 30 天）；如不支持升级或替换。

3. **双 opt-in 注册流程**（03c §8.5 / E14）
   产品工程 sprint 任务（≤ 60 天）；用户注册时不允许 pre-checked 营销订阅复选框；系统发"确认订阅"事务性邮件。

4. **事务性邮件模板系统集成**（03c §M10 onboarding 等）
   与 react v0.2.0 一起做（60 天）；C1 事务性邮件模板对接产品工程触发点。

📌 间接影响（信息周知）：

- 03c §C1 事务性邮件 TL 单签 + 法务一次性 review 模板：你团队可独立发布事务性邮件但需每个新模板法务 review
- 03c §11 附件规范：命名 + PII + 水印 + 加密 256-bit AES
- 03g 不直接涉工程，但邮件中含产品比较内容须按 §2 R1-R5 审核

完整变更：governance/v0.3-batch-review-packet.md

如有疑问 ping #brand-updates。

Sponsor (Yog)
```

#### 销售 / BD / 客户支持 / PR Lead 邮件

```
主题：[Brand Voice v0.3 升版] 销售/BD/客户支持/PR - 客户对话 + Battle Card + 应答框架

各位 Lead：

Voice 层 v0.3 已于 2026-05-08 经市场 + 法务双签发布并完成升版落地。

📌 销售 / BD 直接关注：

1. **客户问 vs 4 步应答**（03g §4 / G13）
   不诋毁 → 客户驱动（"你为什么对比"）→ 聚焦自己（带数据 + SourceID）→ 鼓励客户自评
   行动：销售脚本按 §4.2 模板更新；onboarding 培训（≤ 30 天）

2. **内部 Battle Card 规范**（03g §3 / G9-G12）
   白名单 + 不打印 + 不外发邮件附件 + 不公开演示展示 + 不分享个人 LinkedIn
   严禁 6 项字段：同行弱点 / 客户负评 / 挖角剧本 / 内部消息 / 离职员工口述 / 个人评价
   行动：清理现有 Battle Card 严禁项；加密 SaaS 部署决议会议（≤ 30 天）

3. **RFP 投标响应 3 策略**（03g §6 / G15）
   重新框定 / 提供评估框架 / 直接拒绝；法务+市场双签每次响应；大区独发不允许
   行动：现有 RFP 模板 review；法务 SLA 锁定（≤ 24h 审完）

📌 客户支持 / PR 直接关注：

4. **媒体应答 24h 内 PR + 法务通知**（03g §5 / G14）
   即使没问题也通知；留 audit trail
   行动：媒体应答模板更新；24h 通知机制建立

5. **客户主动提供同行内部信息**（03g §10.10 / G18）
   当场拒收 + 不进 Battle Card / 销售脚本 / 邮件留痕 + 24h 内法务报告
   行动：销售话术培训；不破坏关系前提下拒绝

6. **撤稿响应邮件 R1**（03c §9 / E15）
   T+24h 三签发出客户告警邮件；保留 7 年
   行动：撤稿响应 SOP 与 03f §3.4 协调

完整变更：governance/v0.3-batch-review-packet.md

如有疑问 ping #brand-updates。

Sponsor (Yog)
```

#### 大区市场 Lead 邮件

```
主题：[Brand Voice v0.3 升版] 大区市场 - 大区独发权限 + 区域邮件 / Battle Card 红线

各位大区 Lead：

Voice 层 v0.3 已于 2026-05-08 经市场 + 法务双签发布。

📌 大区独发权变更（继承 03e §6.1 + 本批次细化）：

- 邮件大区独发权（03c §1.3 / E4）：
  - ✅ 可独发：C2 营销邮件 + C4 内部协同
  - ❌ 不可独发：C5 PR / C6 紧急-撤稿响应
  - 事后 100% review by 总部+法务（7 工作日内）
  - 3 次违规取消独发权（继承 03e）

- 竞品对比大区独发权（03g §6 / G15）：
  - ❌ RFP 投标响应**不允许**大区独发
  - 必须法务+市场双签每次响应
  - ARR ≥ 100 万跨产品 → Sponsor 信息周知

📌 区域 Battle Card：
- 不可基于"区域客户私下吐槽"创建本地 BC（继承 §3.3 严禁字段）
- 同行客户主动接触挖单：按 §10.9 处理（不主动询问 / 不接收同行内部信息）

完整变更：governance/v0.3-batch-review-packet.md

如有疑问 ping #brand-updates 或邮件总部市场。

Sponsor (Yog)
```

### 25.6 v0.3 升版后立即启动（按 packet §9.4）

- [ ] **T+30 天内**：销售 / BD / 客户支持 / PR onboarding 培训（追加 1-2 周到 voice 层 v0.2 onboarding）
- [ ] **T+30 天内**：DKIM/SPF/DMARC 配置完成（IT 工单跟踪）
- [ ] **T+30 天内**：退订系统 ≤ 1 工作日生效校验
- [ ] **T+30 天内**：Battle Card 加密 SaaS 与 03f §6.1 实证库工具基础设施同决议会议
- [ ] **T+60 天内**：事务性邮件模板系统集成（与 react v0.2.0 一起）
- [ ] **T+60 天内**：双 opt-in 注册流程上线
- [ ] **强制层（B）更新**：03c + 03g 核心红线同步进 `governance/brand-voice-guidelines.md`（v0.3 候选 · ~85 条红线）
- [ ] **下一签字流程**：03d 三签 packet（v0.3 三签批次 · 待编制）+ 06a 双签 packet（已编制）
- [ ] **v0.3.1 patch 候选**：销售新人速查卡 + Battle Card 模板初稿 + 邮件模板速查卡

### 25.7 锁定决策

| 决策 | 锁定值 |
|---|---|
| voice 层版本号 | v0.2 → **v0.3** |
| 03c 状态 | **v0.2 已签**（C Yang + Bruce Chen · 2026-05-08）|
| 03g 状态 | **v0.2 已签**（C Yang + Bruce Chen · 2026-05-08）|
| 03 主文档 | §10 子文档清单更新；主文档版本号同步升 v0.3 |
| 38 决议全部锁定 | X1-X2 + E1-E18 + G1-G18 |
| 后续工作锁定 | T+30 天培训 + IT 配置 + 退订校验；T+60 天系统集成；强制层 brand-voice-guidelines v0.3 候选 |

---

## 26. 2026-05-08 voice 层 v0.3 三签完成（03d）+ Sponsor 落地操作完成 · ✨ Voice gap 9/10 v0.2 已签

### 26.1 状态

✅ **三签完成**（C Yang 市场 + ZL Chen Tech Lead + Bruce Chen 法务 + Sponsor Yog 流程留痕 · 2026-05-08）→ Sponsor 落地操作完成（2026-05-08）

🎉 **voice 层 v0.3 完整闭环**（双签 03c+03g + 三签 03d 全部完成）+ **voice gap 9/10 v0.2 已签**（仅剩 06a NPM SemVer 双签待发起）

### 26.2 三签留痕

03d 三签批次经 **C Yang（市场负责人）+ ZL Chen（Tech Lead）+ Bruce Chen（法务）** 于 **2026-05-08** 三签（`governance/v0.3-tri-batch-review-packet.md` §12 签字栏 · §5/§6/§7 共 49 处 ✓ ack 等同逐条签字）；Sponsor Yog 同日流程留痕。

### 26.3 Sponsor 落地操作（按 packet §10 · 完成于 2026-05-08）

- ✅ 升版号写入：03d 顶部 v0.1 → **v0.2**
- ✅ 签字留痕：CHANGELOG 加 v0.2 三签段（C Yang + ZL Chen + Bruce Chen · 2026-05-08）
- ✅ 03 §10 子文档清单：03d 状态升 v0.2 已签
- ✅ HANDOFF §13.2 voice gap #8 状态升"v0.2 已签"
- ✅ §9 开场建议状态更新（含 v0.3 三签完成）
- ✅ §24 全景里程碑统计更新
- ⏳ docs/ 站同步：用户本地 `node scripts/sync-docs.mjs`
- ⏳ #brand-updates 通知 + 工程 / 产品 PM / 客户支持 / 设计 lead 邮件：见 §26.5

### 26.4 25 决议全部锁定

| 维度 | 锁定值 |
|---|---|
| D1-D4 错误分类 | 三维矩阵（来源 6 类 × 严重度 4 级 × 临床敏感度 4 级）+ 4 产品默认敏感度 |
| D5-D8 4 段式 + 错误码命名 | What/Why/Action/Help + 5 命名空间 + 9 编号区段 + CN/EN 双轨 |
| D9-D11 18 禁忌 | 10 通用 + 4 临床额外 + 错误码不允许形态 |
| D12 空态 6 子类 | E1-E6 全部锁定 |
| D13-D16 临床场景特殊 | PITL 触发条件 + 文案模板 + 撤稿告警全屏阻塞 + confidence 阈值显示 |
| D17-D18 a11y + 动效协同 | 继承 04a / 04b（不修改）|
| D19-D22 求助 + 跨产品 + Enforcement | L1-L3 求助 + ERR-COMMON 统一 + 错误监控阈值 + lint+CI+季度审计 |
| D23 30 模板锁定 | T-COMMON-* 10 / T-DE-* 6 / T-SE-* 4 / T-DI-* 4 / T-RCP-* 4 / T-EMPTY-* 6 |
| D24 错误码注册表 | governance/error-codes-registry.md（30 天内创建）|
| D25 决策权矩阵 | 临床敏感度阈值调整三签 / 临床场景特殊处理 Sponsor 三签 / 错误码命名空间变更 TL+Sponsor 双签 |

### 26.5 通知文案（待 Sponsor 发送）

#### #brand-updates Release Note

```
🎉 Voice Layer v0.3 三签发布（03d 错误边界态）· Voice 层 v0.3 完整闭环

Voice 层 v0.3 三签批次完成（C Yang + ZL Chen + Bruce Chen · 2026-05-08 三签 · Sponsor Yog 同日落地）。

📦 升版内容（1 份子文档 / ~830 行 / 25 决议 / 30 模板库）：
03d-error-and-empty-state-voice.md v0.2（错误 / 边界 / 空态文案）—— 错误三维分类（来源 × 严重度 × **临床敏感度**）+ 4 段式 + 错误码命名 5 空间 + 18 禁忌（10 通用 + 4 临床额外）+ 空态 6 子类 + PITL/撤稿/SourceID 临床特殊处理 + a11y/动效协同（继承 04a/04b）+ 求助 3 级 + 30 模板库 + lint+CI+季度审计

🎯 Voice 层 v0.3 完整闭环：
- 双签批次（03c 邮件 + 03g 竞品对比）2026-05-08 已签
- 三签批次（03d 错误边界态）2026-05-08 已签
- 03 主文档版本号 v0.3
- voice gap 9/10 v0.2 已签（仅剩 #10 06a NPM SemVer 双签待发起）

⚠️ 工程团队请重点关注：
- D6/D7 错误码命名空间 5 个 + 9 编号区段 → 错误码迁移评估
- D22 lint + CI 集成 → 30 天内落地 scripts/lint-error-copy.mjs
- D24 错误码注册表 → 30 天内创建 governance/error-codes-registry.md
- D21 错误监控接入（Sentry / 自建）→ 高频错误 > 1% / clinical-critical 任意 1 次告警
- react v0.2.0 错误反馈 patch（与 a11y + motion 一起 60 天内）

📌 产品 PM / 客户支持 / 设计 / 法务请重点关注：
- D3-D4 临床敏感度 4 级 + 4 产品默认值（DE clinical-critical/adjacent）
- D9-D10 18 禁忌措辞（特别 4 临床额外）→ 文案审计
- D13-D15 PITL 核验提示 + 撤稿告警全屏阻塞 + R1 邮件触发（与 03f §3.4 + 03c §9 协同）
- D19 求助 3 级 + clinical-critical 必双路径（L2+L3）
- D23 30 模板库 → 销售 / 客户支持 onboarding 培训

⏭️ 下一步：
- 30 天内：lint + 错误码注册表 + 错误监控落地 + onboarding 培训追加 1 周
- 60 天内：react v0.2.0 错误反馈 patch + 错误码迁移（如适用）
- v0.3.1 patch：错误文案速查卡 + 临床敏感度判定速查卡 + 30 模板速查卡
- 06a NPM SemVer 双签 packet（已编制 · TL + Sponsor 双签）→ 完成 voice gap 10/10 全闭环

📚 详读：governance/v0.3-tri-batch-review-packet.md（packet §4 列出全部 25 决议 D1-D25）
```

#### 工程团队 Lead 邮件（DE / SE / DI / RCP）

```
主题：[Brand Voice v0.3 三签升版] DE/SE/DI/RCP 工程团队 - 错误码命名 + lint + 监控 + react v0.2.0

各位 Lead：

03d 错误 / 边界 / 空态文案 v0.3 已于 2026-05-08 经市场 + Tech Lead + 法务三签发布。

📌 与工程团队直接相关的 5 条变更：

1. **错误码命名规则**（D6/D7）
   5 命名空间：ERR-COMMON-* / ERR-DE-* / ERR-SE-* / ERR-DI-* / ERR-RCP-*
   9 编号区段：001-099 系统/网络 ... 500-599 临床特殊 ... 900-999 内部
   行动：现有错误码评估 + 60 天内迁移（如有冲突）

2. **CN/EN 双轨**（D8）
   每个错误码必有：EN 内部码（日志/监控）+ CN 用户可见 + EN 用户可见对照 1:1 等价
   行动：i18n 工具评估；现有错误代码补充 CN 文案

3. **lint + CI 集成**（D22）
   scripts/lint-error-copy.mjs（检测 18 禁忌 + 错误码命名 + 4 段式）
   axe-core / Pa11y / Lighthouse（继承 04a §9.2）
   行动：30 天内落地 lint 脚本 + 接入 GitHub Actions

4. **错误监控**（D21）
   高频错误 > 1% 用户触发工程 review
   任意 1 次 clinical-critical 触发法务 + 产品 review
   行动：Sentry / 自建评估；告警规则配置；30 天内接入

5. **react 包 v0.2.0 错误反馈 patch**
   与 04 批次 a11y + motion patch 一起做（60 天内）
   新组件评估：<ErrorAlert /> / <EmptyState /> / <ClinicalAlert /> 或继承 04b 已规划组件
   行动：sprint planning 排期

📌 错误码注册表（D24）
governance/error-codes-registry.md（30 天内创建）
字段：ID / 三维分类 / CN+EN 文案 / 触发频率 / 法务 review 状态
与 03f §6.1 实证库工具同基础设施复用

完整变更：governance/v0.3-tri-batch-review-packet.md

如有疑问 ping #brand-updates。

Sponsor (Yog)
```

#### 产品 PM / 客户支持 / 设计 / 法务 Lead 邮件

```
主题：[Brand Voice v0.3 三签升版] 产品/客户支持/设计/法务 - 临床敏感度 + 18 禁忌 + 30 模板

各位 Lead：

03d 错误 / 边界 / 空态文案 v0.3 已于 2026-05-08 经市场 + Tech Lead + 法务三签发布。

📌 产品 PM 重点：

1. **临床敏感度 4 级**（D3）
   clinical-critical（直接影响临床决策 / 处方）严重度自动升 critical + 必含 PITL 提示
   clinical-adjacent（影响数据展示 / 引用）建议 ≥ warning + 必含数据状态
   business 标准 / cosmetic 后台修复

2. **4 产品默认敏感度**（D4）
   DE 默认 clinical-critical/adjacent；SE 默认 clinical-adjacent/business
   DI 默认 business（涉客户医生 PII 升 clinical-adjacent）
   RCP 默认 business（涉医生反馈直接影响临床决策时升 clinical-adjacent）

3. **PITL 核验提示触发**（D13）
   confidence < 0.7 / 涉处方 / 引用 SourceID 失效 / 用户标注复杂病例

📌 客户支持重点：

4. **求助路径 3 级**（D19）
   L1 自助（FAQ + 错误码搜索）/ L2 客户支持（support@medsci-ai.com + 工单）/ L3 紧急 hotline
   critical+clinical-critical 必双路径 L2+L3
   工单自动创建 TASK-YYYY-NNNNN（不含 PII）

5. **30 模板库**（D23）
   T-COMMON-* 10 / T-DE-* 6 / T-SE-* 4 / T-DI-* 4 / T-RCP-* 4 / T-EMPTY-* 6
   onboarding 培训追加 1 周（错误文案 + 临床场景特殊处理）

📌 设计重点：

6. **a11y + 动效协同**（D17/D18 · 继承 04a/04b）
   role="alert" / role="status" / 焦点自动跳转 / 不依赖颜色 / 触控 44×44
   错误反馈三冗余（振动 + 红框 + 错误文字）/ Toast 滞留 / reduce-motion / 错误状态克制

📌 法务重点：

7. **18 禁忌措辞**（D9/D10）
   10 通用（"未知错误" / "系统繁忙" / 道歉过度 等）+ 4 临床额外（"AI 替你判断" / "肯定 X 病症" / "立即停药" / "AI 治好"）
   季度抽样审计 ≥ 100 条文案

8. **撤稿告警**（D15）
   T+0 全屏阻塞 + aria-live="assertive" + 触发 R1 客户告警邮件
   与 03f §3.4 + 03c §9 协同形成完整撤稿响应 trail

完整变更：governance/v0.3-tri-batch-review-packet.md

如有疑问 ping #brand-updates。

Sponsor (Yog)
```

### 26.6 v0.3 三签升版后立即启动（按 packet §10.4）

- [ ] **T+30 天内**：onboarding 培训追加 1 周（错误文案 + 临床场景特殊处理）
- [ ] **T+30 天内**：`scripts/lint-error-copy.mjs` 落地 + CI 集成
- [ ] **T+30 天内**：`governance/error-codes-registry.md` 创建
- [ ] **T+30 天内**：错误监控接入（Sentry / 自建）
- [ ] **T+60 天内**：react 包 v0.2.0 错误反馈 patch（与 a11y + motion patch 一起）
- [ ] **T+60 天内**：错误码迁移（如适用）
- [ ] **强制层（B）更新**：03c + 03d + 03g 核心红线同步进 `governance/brand-voice-guidelines.md`（v0.3 候选 · ~95 条红线）
- [ ] **下一签字流程**：06a 双签 packet（已编制 · TL + Sponsor 双签）→ 完成 voice gap 10/10 全闭环
- [ ] **v0.3.1 patch 候选**：错误文案速查卡 + 临床敏感度判定速查卡 + 30 模板速查卡

### 26.7 voice 层 v0.3 完整闭环里程碑

| 子文档 | 状态 | 签字 |
|---|---|---|
| 03 主文档 §10 | v0.3 | 双签 + 三签均含 §10 升版决议 |
| 03a 社交 | v0.2 | 已签 2026-05-06 |
| 03c 邮件 | v0.2 | **已签 2026-05-08（双签批次）** |
| 03d 错误边界态 | **v0.2** | **已签 2026-05-08（三签批次 · 本会话）** |
| 03e 区域化 | v0.2 | 已签 2026-05-06 |
| 03f 实证 | v0.2 | 已签 2026-05-06 |
| 03g 竞品 | v0.2 | **已签 2026-05-08（双签批次）** |

**voice 层完整 = 7 个子文档全 v0.2 已签**；voice gap 9/10 v0.2 已签（仅剩 #10 06a NPM SemVer 06 治理子文档）。

### 26.8 锁定决策

| 决策 | 锁定值 |
|---|---|
| voice 层 v0.3 三签批次状态 | ✅ 完成（C Yang + ZL Chen + Bruce Chen · 2026-05-08）|
| 03d 状态 | **v0.2 已签** |
| 25 决议全部锁定 | D1-D25 |
| voice 层 v0.3 全闭环 | 双签（03c + 03g）+ 三签（03d）+ 主文档 §10 |
| 后续工作锁定 | T+30 天 lint + 错误码注册表 + 错误监控 + 培训；T+60 天 react v0.2.0 错误反馈 patch |
| 下一签字 | 06a 双签 packet（已编制 · 待发起）|

---

## 27. 2026-05-08 06a NPM SemVer v0.2 双签完成 · ✨ Voice gap 10/10 完整闭环

### 27.1 状态

✅ **双签完成**（ZL Chen Tech Lead + Yog Sponsor · 2026-05-08）→ Sponsor 落地操作完成（2026-05-08）

🎉 **Voice gap 全部 10/10 v0.2 已签** + **NPM SemVer 治理规则正式生效** + **react v0.1.0 真有规则约束**

### 27.2 双签留痕

06a 双签批次经 **ZL Chen（Tech Lead）+ Yog（Sponsor）** 于 **2026-05-08** 双签（`governance/06a-signoff-packet.md` §11 签字栏）。

**与之前批次的关键差异**：
- voice 层 v0.2 / v0.3 双签 + 04 批次 / v0.3 三签 / Sponsor = 流程留痕
- **06a 双签：Sponsor (Yog) 是实质签字人**（涉对外发布契约 / 客户依赖 / MSH org 迁移决策）

### 27.3 Sponsor 落地操作（按 packet §9 · 完成于 2026-05-08）

- ✅ 升版号写入：06a 顶部 v0.1 → **v0.2**
- ✅ 签字留痕：CHANGELOG 加 v0.2 双签段（ZL Chen + Yog · 2026-05-08）
- ✅ 06 §5.5 子文档清单：06a 状态升 v0.2 已签
- ✅ 06 §7 修订履历追加 06a v0.2 双签条目
- ✅ HANDOFF §13.2 voice gap #10 状态升"v0.2 已签"
- ✅ §9 开场建议状态更新（含 06a 双签完成 + voice gap 10/10）
- ✅ §24 全景里程碑统计更新
- ⏳ docs/ 站同步：用户本地 `node scripts/sync-docs.mjs`
- ⏳ #brand-updates 通知 + DE/SE/DI/RCP 工程团队 lead 邮件：见 §27.5

### 27.4 16 决议全部锁定

| 维度 | 锁定值 |
|---|---|
| N1-N5 | 双轨版本号 + v0.x.x → v1.0.0 6 项升级条件 + SemVer 严格定义 + 签字门槛分级 + v0.x.x 早期发布期规则 |
| N6 | **27 项 Breaking Change A1-A27**（API 7 / Token 3 / 视觉 4 / a11y 4 / Peer dep 3 / 图像 2 / 包层 4）|
| N7 | 双向触发矩阵 13 类（文档变更**单纯不触发**；仅翻译为代码 / token / 资产时才触发）|
| N8-N9 | Deprecation ≥ 1 minor + Prerelease 4 标签（alpha/beta/rc/next）|
| N10-N11 | 半自动发布原则 + 14 校验清单（含 §15 防 EPRIVATE / §7.6 沙盒只读限制）|
| N12 | **永不 unpublish 红线**（除合规事故）—— Sponsor 实质签字 |
| N13 | **客户支持窗口**：current 全支持 / n-1 6 月安全 / n-2 不再支持 —— Sponsor 实质签字 |
| N14 | 依赖治理 + SBOM 入实证库 + 7 年保留（HKEX 对齐）|
| N15 | 多包预留（pnpm + changesets）+ **当前已接近 1.2 MB packed 触发线** |
| N16 | **MSH org 迁移即 MAJOR (A24)** + 30 天双包并行 —— Sponsor 实质签字 |

### 27.5 通知文案（待 Sponsor 发送）

#### #brand-updates Release Note

```
🎉 06a NPM SemVer v0.2 双签发布 · ✨ Voice gap 10/10 完整闭环

06a NPM SemVer 治理规则 v0.2 双签升版完成（ZL Chen Tech Lead + Yog Sponsor · 2026-05-08 双签）。

📦 升版内容（1 份子文档 / ~720 行 / 16 决议 N1-N16）：
06a-npm-semver.md v0.2（NPM 包 SemVer 治理）—— 双轨版本号映射 + 27 项 Breaking Change 清单 A1-A27 + 双向触发矩阵 + Deprecation/Prerelease/半自动发布/回滚 + 客户接入指南 + 依赖治理 + SBOM 入实证库 + 多包预留 + MSH org 迁移即 MAJOR

🎯 Voice gap 全部 10/10 v0.2 已签：
- 03a 社交 / 03e 区域化 / 03f 实证（v0.2 · 2026-05-06）
- 04a a11y / 04b 动效 / 04c 摄影插画（v0.2 · 2026-05-08 · 04 批次三签）
- 03c 邮件 / 03g 竞品（v0.2 · 2026-05-08 · v0.3 双签）
- 03d 错误边界态（v0.2 · 2026-05-08 · v0.3 三签）
- 06a NPM SemVer（v0.2 · 2026-05-08 · 06a 双签）

🎯 react 包 v0.1.0 真有规则约束：
- 客户接入须精确锁版（v0.x.x 不允许 ^0.1.0）
- v0.x.x 阶段任何变更走 MINOR
- v1.0.0 升级须满足 6 项条件
- MSH org 迁移即 MAJOR

⚠️ 工程团队请重点关注：
- N6 27 项 Breaking Change A1-A27（升 MAJOR 触发清单）
- N10 半自动发布原则（CI dry-run；人工 publish）
- N11 14 条 publish 前校验清单（含防 EPRIVATE / 沙盒只读限制）
- N15 拆包评估（已接近 1.2 MB packed 触发线 · 与 v1.0.0 + MSH 迁移同步评估）
- N16 MSH org 迁移即 MAJOR（包名变更 30 天双包并行）

⏭️ 下一步：
- 30 天内：scripts/verify-exports.mjs 接入 CI + GitHub Actions release.yml dry-run pipeline + a11y CI
- 60 天内：react 包 v0.2.0 发布（含 a11y + motion patch + 错误反馈 patch + Spinner/Skeleton/Toast/ProgressBar 新组件）
- v0.3.1 patch：dist-tag 操作手册 + 客户精确锁版指南卡 + Migration Guide 模板
- 强制层 brand-voice-guidelines v0.3 候选（~95 条红线含 03c/03d/03g + 06a）
- MSH org 创建后启动 §12 30 天迁移规程

📚 详读：governance/06a-signoff-packet.md（packet §4 列出全部 16 决议 N1-N16）
```

#### 工程团队 Lead 邮件（DE / SE / DI / RCP）

```
主题：[06a NPM SemVer v0.2 双签升版] DE/SE/DI/RCP 工程团队 - SemVer 规则正式生效

各位 Lead：

06a NPM SemVer 治理规则 v0.2 已于 2026-05-08 经 Tech Lead + Sponsor 双签发布。

📌 与工程团队直接相关的 6 条变更：

1. **客户精确锁版要求**（N5 / 06a §2.3）
   v0.x.x 阶段客户接入须精确锁版 0.1.0 ✓ 不允许 ^0.1.0 ❌
   行动：所有 react 包 README / 客户文档强调精确锁版

2. **27 项 Breaking Change A1-A27**（N6 / §3）
   升 MAJOR 触发清单（API 7 / Token 3 / 视觉 4 / a11y 4 / Peer dep 3 / 图像 2 / 包层 4）
   行动：sprint planning 时按清单评估变更影响

3. **半自动发布**（N10 / §7.1）
   CI 完成构建 + 测试 + dry-run；最终 npm publish 由 Tech Lead 本地工作账号人工触发
   CI **绝不**做真 publish / 自动 npm version / 自动 dist-tag latest
   行动：30 天内 .github/workflows/release.yml dry-run pipeline 落地

4. **14 条校验清单**（N11 / §7.4）
   含包大小 baseline（packed 1.0 MB / unpacked 3.3 MB · 增长警戒线 packed > 1.2 MB / unpacked > 4 MB → 拆包评估）
   含 §15 防 EPRIVATE 校验（package.json 不含 private:true）
   行动：每次 publish 前必跑

5. **scripts/verify-exports.mjs 接入 CI**（§7.5）
   行动：30 天内集成 GitHub Actions

6. **MSH org 迁移即 MAJOR**（N16 / §12）
   包名变更触发 MAJOR；30 天双包并行 + codemod + Migration Guide
   行动：MSH org 创建后由 Sponsor 协调启动迁移规程

📌 间接影响（信息周知）：

- N7 双向触发矩阵：voice / 文档变更**单纯不触发** NPM 版本变更；仅翻译为代码 / token / 资产时才触发
- N12 永不 unpublish 红线：除合规事故；> 24h 仅 deprecate
- N13 客户支持窗口：current 全支持 / n-1 6 月安全 / n-2 不再支持
- N14 SBOM 入实证库：每次 publish 生成 SBOM 入 03f §6.1 实证库工具基础设施
- N15 拆包评估：已接近 1.2 MB packed 触发线（v0.1.0 已 1.0 MB · 90% 是 SVG）；与 v1.0.0 + MSH 迁移同步评估

完整变更：governance/06a-signoff-packet.md + 06a-npm-semver.md v0.2

如有疑问 ping #brand-updates。

Yog (Sponsor) + ZL Chen (Tech Lead)
```

### 27.6 v0.2 双签升版后立即启动（按 packet §9.4）

- [ ] **T+30 天内**：`scripts/verify-exports.mjs` 接入 CI（与 04 批次 a11y CI 同步）
- [ ] **T+30 天内**：`.github/workflows/release.yml` dry-run pipeline 落地（半自动发布）
- [ ] **T+30 天内**：`.github/workflows/a11y.yml`（继承 04 批次 packet §10.2）
- [ ] **T+30 天内**：v0.3.1 patch 候选——dist-tag 操作手册 + 客户精确锁版指南卡 + Migration Guide 模板
- [ ] **T+60 天内**：react 包 v0.2.0 发布（含 a11y + motion patch + 错误反馈 patch + Spinner / Skeleton / Toast / ProgressBar / ErrorAlert 新组件）
- [ ] **强制层（B）更新**：03c + 03d + 03g + 06a 核心红线同步进 `governance/brand-voice-guidelines.md`（v0.3 候选 · ~95 条红线）
- [ ] **MSH org 创建后**：启动 §12 30 天迁移规程（T+0 deprecate 旧包 → T+1 发 @medsci v1.0.0 → T+30 客户必迁完 → T+90 旧包 archive）

### 27.7 完整签字闭环里程碑（截至 2026-05-08）

```
voice 层：
  03 主文档     v0.3 ✅
  03a 社交     v0.2 ✅ (2026-05-06)
  03c 邮件     v0.2 ✅ (2026-05-08 · v0.3 双签)
  03d 错误     v0.2 ✅ (2026-05-08 · v0.3 三签)
  03e 区域化   v0.2 ✅ (2026-05-06)
  03f 实证     v0.2 ✅ (2026-05-06)
  03g 竞品     v0.2 ✅ (2026-05-08 · v0.3 双签)

04 视觉系统：
  04 主文档     v0.2 ✅
  04a a11y     v0.2 ✅ (2026-05-08 · 04 批次三签)
  04b 动效     v0.2 ✅ (2026-05-08 · 04 批次三签)
  04c 摄影插画  v0.2 ✅ (2026-05-08 · 04 批次三签)

06 治理：
  06 主文档     v1.0
  06a NPM SemVer v0.2 ✅ (2026-05-08 · 06a 双签 · 本批)

工程层：
  react 包 v0.1.0 ✅ 真发布 (2026-05-08 · GitHub Packages)

强制层：
  brand-voice-guidelines.md v0.2（59 条红线 · 待升 v0.3 候选 ~95 条）
```

**Voice gap 进度：10/10 v0.2 已签 ✨ 完整闭环**

### 27.8 锁定决策

| 决策 | 锁定值 |
|---|---|
| 06a NPM SemVer 状态 | **v0.2 已签**（ZL Chen + Yog · 2026-05-08）|
| 16 决议全部锁定 | N1-N16 |
| Sponsor 实质签字门槛建立 | 06a 模式：涉对外发布契约 / 客户依赖 / MSH org 迁移决策 → Sponsor 实质签字（与流程留痕区分）|
| 后续工作锁定 | T+30 天 verify-exports CI + release.yml dry-run + a11y CI；T+60 天 react v0.2.0；强制层 v0.3 候选 ~95 条；MSH org 创建后 30 天迁移规程 |
| 全签字闭环 | voice 层 7 子文档 + 04 批次 3 子文档 + 06a 1 子文档 = 11 子文档全 v0.2 已签；voice gap 10/10 完整闭环；react v0.1.0 真有规则约束 |

---

## 28. 2026-05-08 强制层 brand-voice-guidelines v0.3 候选编制完成

### 28.1 状态

✅ **完成**（2026-05-08）—— `governance/brand-voice-guidelines.md` v0.2 → **v0.3 候选**；从 59 条核心红线扩充至 **~136 条决议浓缩**（4 新章节 §15-§18）

### 28.2 产物

`governance/brand-voice-guidelines.md` v0.3 候选 · 19 章 · ~1,150 行（v0.2 ~580 行 → 净增 ~570 行）

**新增 4 章节**：

| 章节 | 来源 | 决议 |
|---|---|---|
| **§15 邮件渠道** | 03c v0.2 | 18 决议 E1-E18（邮件分类 / 签字门槛 / 大区独发 / 发件人 / 主题行 / 真人医生 / endorsement / **退订合规铁律** / 撤稿响应 R1-R4 / 中英协同 / 附件加密）|
| **§16 错误 / 边界 / 空态** | 03d v0.2 | 25 决议 D1-D25（三维分类矩阵 / 4 段式 / 错误码命名 / **18 禁忌**（10 通用 + 4 临床）/ 空态 6 子类 / **PITL 核验** / 撤稿告警全屏阻塞 / 求助 3 级 / a11y + 动效协同）|
| **§17 竞品 / 同行表述** | 03g v0.2 | 18 决议 G1-G18（同行 4 类 / **5 条公开声明铁律 R1-R5** / Battle Card 限定 + 字段 11 项 + 严禁 6 项 / 客户 4 步应答 / 媒体 / RFP / 学术 / 同行撤稿 / 客户提供同行内部信息当场拒收）|
| **§18 NPM 包发布** | 06a v0.2 | 16 决议 N1-N16（双轨版本号 / SemVer 严格定义 / **27 项 Breaking Change A1-A27** / 双向触发矩阵 / Deprecation / Prerelease / 半自动发布 + 14 校验 / 回滚 / 客户支持窗口 / 依赖治理 + SBOM / 多包预留 / **MSH 迁移即 MAJOR**）|

### 28.3 §13 自检清单扩充

新增 §13.1-§13.4 4 个子节，覆盖 §15-§18 关键红线（约 22 条新自检项）：

- §13.1 邮件渠道追加 6 条
- §13.2 错误 / 边界 / 空态追加 7 条
- §13.3 竞品 / 同行追加 6 条
- §13.4 NPM 包发布追加 6 条

合计 §13 = 20 条核心红线 + 25 条新追加 = **~45 条自检红线**。

### 28.4 §14 反例对照表扩充

新增 14 条反例 → 正例对照（覆盖邮件 / 错误 / 竞品 / NPM 4 大新维度）：

- 邮件 4 条（"Sales Team" 发件人 / 营销主题行垃圾词 / 邮件嵌头像 / 营销无退订）
- 错误 3 条（"未知错误" 4 段式 / "建议立即停药" PITL / "Oops" 卡通化）
- 竞品 4 条（销售对话评价同行 / Battle Card 含负评 / RFP 含 vs 表 / 接收同行内部信息）
- NPM 3 条（v0.x.x 用 ^0.1.0 / 治愈表述 / 撤稿后 unpublish）

### 28.5 §19 版本与来源映射扩充

新增 4 行覆盖 §15-§18：

| 章节 | 来源 | 状态 |
|---|---|---|
| §15 邮件渠道 | 03c | v0.2 已签（v0.3 双签）|
| §16 错误 / 边界 / 空态 | 03d | v0.2 已签（v0.3 三签）|
| §17 竞品 / 同行表述 | 03g | v0.2 已签（v0.3 双签）|
| §18 NPM 包发布 | 06a | v0.2 已签（06a 双签）|

### 28.6 v0.3 候选状态

本指南**当前 v0.3 候选状态**——4 新章节内容浓缩自 4 个已签源文档（03c / 03d / 03g / 06a v0.2 已签），但本指南**自身未走签字流程**——仅作为强制层让 brand-voice-enforcement 技能自动应用。

**升 v0.3 完整状态决策路径**：
1. 选项 A：本指南视为"导出件"（不走独立签字）→ 立即标 v0.3 完整
2. 选项 B：本指南走 Sponsor 拍板（不走双签三签流程）→ 简单流程
3. 选项 C：本指南走类似源文档的双签流程 → 治理过重

→ **推荐选项 A**（参考 v0.2 模式：本指南是源文档浓缩，源文档已签即生效；本指南升版只是同步 + 在 §0 顶部 ack）

### 28.7 用户即时动作

- [ ] 决策升 v0.3 完整路径（A / B / C；推荐 A）
- [ ] 如选 A：将本指南顶部"v0.3 候选"改为"v0.3"（移除候选标注）
- [ ] 重新 symlink / copy 到 `.claude/brand-voice-guidelines.md`（如启用 brand-voice-enforcement 技能自动加载）
- [ ] 测试技能自动加载是否生效（让 AI 写一段品牌文案，验证是否应用 §15-§18 新红线）

### 28.8 锁定决策

| 决策 | 锁定值 |
|---|---|
| 强制层 v0.3 候选编制 | ✅ 完成（2026-05-08）|
| 决议总数 | ~136 条（25 voice 层 v0.2 + 34 04 批次 + 18 03c + 25 03d + 18 03g + 16 06a）|
| 章节数 | 19 章（v0.2 15 章 → v0.3 19 章）|
| 行数 | ~580 → ~1,150（净增 ~570）|
| 维护节奏 | 任何源文档升版 → 本指南同步；每季度审计；以源文档为准 |



---

::: tip 文档来源
本页由 `scripts/sync-docs.mjs` 自动从 kit 根的 [`HANDOFF.md`](https://github.com/) 同步。**不要直接编辑此文件**——所有修改请改源文件后重跑 sync 脚本。
:::
