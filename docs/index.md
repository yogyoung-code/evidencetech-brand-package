---
layout: home
title: 梅斯健康 AI Brand Kit
titleTemplate: ":title"

hero:
  name: AI Brand Kit
  text: 梅斯健康 · AI 子品牌系统
  tagline: branded house with shared trust layer · DeepEvidence / SeekEvidence / DeepInsight / Rapid Clinical Pulse
  image:
    src: /assets/master-brand/default-en.svg
    alt: MedSci Healthcare
  actions:
    - theme: brand
      text: 入门指南
      link: /getting-started
    - theme: alt
      text: 总览（README）
      link: /foundation/overview
    - theme: alt
      text: Demo 集合
      link: /demos/

features:
  - icon: 🧱
    title: Branded House
    details: 4 产品各保留独立色相 · 通过共享信任层 + 命名 + endorsement signature 绑定为家族
    link: /foundation/architecture
    linkText: 查看架构锁定

  - icon: 🛡
    title: 共享信任层
    details: PITL Verified · AIO Official · VGI™ · Nano-Citation · CoT 动画 · Diff View
    link: /visual/visual-system
    linkText: 查看 Visual System

  - icon: 🅰
    title: Wordmark + Endorsement
    details: Teko Bold mixed-case · 双色配方 · 由 梅斯健康 出品 · #666666 灰
    link: /architecture/brand-architecture
    linkText: 查看 Brand Architecture

  - icon: 🏛
    title: 母品牌 v1.1 兼容
    details: 12 SVG · 75 PNG · Clear-Space spec · WCAG 64 组对比度 · 图层结构
    link: /master-brand/overview
    linkText: 查看母品牌

  - icon: ⚛
    title: React 包 v0.1.0（真发布）
    details: '@yogyoung-code/ai-brand-kit · 13 组件 · GitHub Packages latest · 已发布 2026-05-08'
    link: /components/overview
    linkText: 查看组件

  - icon: 🗣
    title: Brand Voice v0.3（7 子文档全签）
    details: '03a 社交 / 03c 邮件 / 03d 错误态 / 03e 区域化 / 03f 实证 / 03g 竞品 · voice gap 10/10 闭环'
    link: /voice/brand-voice
    linkText: 查看 Voice 层

  - icon: 📐
    title: 治理 + 强制层 v0.3
    details: '06 主治理 · 06a NPM SemVer 双签 · brand-voice-guidelines ~136 条决议浓缩 · RFC 流程'
    link: /governance/brand-voice-guidelines
    linkText: 查看强制层
---

<style>
.VPHero .image-bg {
  background: radial-gradient(ellipse at center, #00AEDB22 0%, transparent 65%) !important;
}
</style>

## 30 秒速读

四个 AI 产品在并排时通过 4 件事被识别为同一家族：

1. 同一 wordmark 字体（Teko Bold mixed-case，RCP 例外为缩写）
2. 同一 endorsement signature（"由 梅斯健康 出品" / "by MedSci Healthcare"，固定 `#666666`）
3. 同一信任层（PITL Verified / AIO Official / VGI™），通过 `--product-primary` 自动着色
4. 同一交互模式（纳米引用 [n] / CoT 动画 / Diff View 红绿 / Progressive Disclosure）

## 四产品矩阵

| 产品 | 主色（Wordmark + UI Primary） | 设计语言 |
|---|---|---|
| **DeepEvidence** | `#2563EB` Tailwind blue-600 | 圆角 + 阴影（shadcn 风格） |
| **SeekEvidence** | `#9333EA` Tailwind purple-600 | 圆角 + 阴影（shadcn 风格） |
| **DeepInsight** | `#0891B2` teal-600（暂定） | TBD |
| **Rapid Clinical Pulse** | `#0F62FE` IBM Blue 60 | IBM Carbon（Plex Sans/Mono、零圆角输入） |

## 当前状态（2026-05-08）

### ✅ 全签字闭环（11 子文档全 v0.2 已签）

**Voice 层 v0.3（7 子文档）**
- 03 主文档 · v0.3 ✅
- 03a 社交 · v0.2 ✅（2026-05-06）
- 03c 邮件 · v0.2 ✅（2026-05-08 · v0.3 双签）
- 03d 错误 / 边界 / 空态 · v0.2 ✅（2026-05-08 · v0.3 三签）
- 03e 区域化 · v0.2 ✅（2026-05-06）
- 03f 实证声明 · v0.2 ✅（2026-05-06）
- 03g 竞品对比 · v0.2 ✅（2026-05-08 · v0.3 双签）

**Visual System v0.2（4 子文档）**
- 04 主文档 · v0.2 ✅
- 04a 组件 a11y · v0.2 ✅（2026-05-08 · 04 批次三签）
- 04b 动效指引 · v0.2 ✅（2026-05-08 · 04 批次三签）
- 04c 摄影 / 插画过渡期 · v0.2 ✅（2026-05-08 · 04 批次三签）

**Governance（2 子文档）**
- 06 主文档 · v1.0
- 06a NPM SemVer · v0.2 ✅（2026-05-08 · 06a 双签 · Sponsor 实质签字）

**工程层 + 强制层**
- ✅ React 组件包 `@yogyoung-code/ai-brand-kit@0.1.0` 真发布（GitHub Packages · latest tag）
- ✅ 强制层 `brand-voice-guidelines.md` v0.3 候选（19 章 · ~136 条决议浓缩）
- ✅ Voice gap **10/10 完整闭环** ✨

### ⏳ 进行中 / 待启动

- ⬜ 工程实施层（30/60 天）：CI 集成 · 错误监控 · DKIM/SPF/DMARC · 退订系统 · react v0.2.0
- ⬜ 实证库工具选型（NocoDB / Baserow / PG+FastAPI 三方决议）
- ⬜ v0.3.1 patch 候选：速查卡 / Battle Card 模板 / 真人医生判定指南
- ⬜ 通知发送（5 类邮件 · 文案已就绪）+ 培训追加 1-2 周
- ⬜ 03b 海外推广子文档（occupation gap · 暂未起草）
- ⬜ MSH org 创建后启动 30 天迁移规程

详见 [2026-05-08 单日里程碑总览](/foundation/session-2026-05-08) · [Handoff §21-§28](/foundation/handoff)。
