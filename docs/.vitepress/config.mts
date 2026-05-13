import { defineConfig } from 'vitepress';

// 母品牌色
const MASTER_NAVY = '#001A51';
const MASTER_BLUE = '#005AA4';
const MASTER_CYAN = '#00AEDB';

export default defineConfig({
  title: '梅斯健康 AI Brand Kit',
  description:
    'MedSci Healthcare 旗下 4 个 AI 产品（DeepEvidence / SeekEvidence / DeepInsight / Rapid Clinical Pulse）的子品牌系统 · v1.0 · branded house with shared trust layer',
  lang: 'zh-CN',
  cleanUrls: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  appearance: 'dark',

  // 排除 public/ 下经 symlink 暴露的 .md 文件（它们是规范文档源，不应作为 VitePress 页面处理）
  srcExclude: [
    'public/**/*.md',
    'public/**/*.MD',
    'node_modules/**',
  ],

  head: [
    ['meta', { name: 'theme-color', content: MASTER_NAVY }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/master-brand/default-en.svg' }],
  ],

  themeConfig: {
    logo: '/assets/master-brand/mono-navy-en.svg',
    siteTitle: 'AI Brand Kit',

    nav: [
      { text: '入门', link: '/getting-started' },
      {
        text: '基础',
        items: [
          { text: '总览（README）', link: '/foundation/overview' },
          { text: 'Handoff', link: '/foundation/handoff' },
          { text: '2026-05-08 单日里程碑', link: '/foundation/session-2026-05-08' },
          { text: '架构锁定（00）', link: '/foundation/architecture' },
          { text: '现状审计（01）', link: '/foundation/audit' },
        ],
      },
      {
        text: '设计系统',
        items: [
          { text: 'Brand Architecture（02）', link: '/architecture/brand-architecture' },
          { text: 'Brand Voice（03）', link: '/voice/brand-voice' },
          { text: '— 03a 社交媒体', link: '/voice/03a-social-media' },
          { text: '— 03c 邮件模板', link: '/voice/03c-email-templates' },
          { text: '— 03d 错误 / 边界 / 空态', link: '/voice/03d-error-empty-state' },
          { text: '— 03e 区域化（华语）', link: '/voice/03e-china-regionalization' },
          { text: '— 03f 实证声明', link: '/voice/03f-evidence-attestation' },
          { text: '— 03g 竞品对比', link: '/voice/03g-competitive' },
          { text: 'Visual System（04）', link: '/visual/visual-system' },
          { text: '— 04a 组件 a11y', link: '/visual/04a-accessibility' },
          { text: '— 04b 动效指引', link: '/visual/04b-motion' },
          { text: '— 04c 摄影 / 插画过渡期', link: '/visual/04c-photography-illustration' },
        ],
      },
      {
        text: '母品牌',
        items: [
          { text: '母品牌总览', link: '/master-brand/overview' },
          { text: 'Clear-Space', link: '/master-brand/clear-space' },
          { text: 'A11y 对比度', link: '/master-brand/a11y' },
          { text: '图层结构', link: '/master-brand/layers' },
          { text: '使用规范（usage.html）', link: '/master-brand/usage' },
        ],
      },
      {
        text: '组件',
        items: [
          { text: '组件总览', link: '/components/overview' },
          { text: '信任层 7', link: '/components/trust-layer' },
          { text: 'Logo 4', link: '/components/logo' },
          { text: '母品牌 2', link: '/components/master-brand-comp' },
        ],
      },
      {
        text: '资产',
        items: [
          { text: 'Token 浏览器', link: '/assets-browser/tokens' },
          { text: '资产下载', link: '/assets-browser/downloads' },
          { text: 'Demo 集合', link: '/demos/' },
        ],
      },
      {
        text: '治理',
        items: [
          { text: 'Governance（06）', link: '/governance/governance' },
          { text: '06a NPM SemVer', link: '/governance/06a-npm-semver' },
          { text: '强制层 · brand-voice-guidelines（v0.3）', link: '/governance/brand-voice-guidelines' },
          { text: '整改清单（05）', link: '/governance/rectification' },
          { text: '签字留痕（packets）', link: '/governance/v0.2-signoff' },
          { text: '站点部署', link: '/governance/site-deploy' },
        ],
      },
    ],

    sidebar: {
      '/foundation/': [
        {
          text: 'Foundation',
          items: [
            { text: '总览（README）', link: '/foundation/overview' },
            { text: 'Handoff（会话上下文）', link: '/foundation/handoff' },
            { text: '2026-05-08 单日里程碑总览', link: '/foundation/session-2026-05-08' },
            { text: '00 · 架构锁定', link: '/foundation/architecture' },
            { text: '01 · 现状审计', link: '/foundation/audit' },
          ],
        },
      ],
      '/architecture/': [
        {
          text: 'Brand Architecture',
          items: [
            { text: '02 · Logo · Wordmark · Endorsement', link: '/architecture/brand-architecture' },
          ],
        },
      ],
      '/voice/': [
        {
          text: 'Brand Voice（v0.3 · 7 子文档全签）',
          items: [
            { text: '03 · 主文档（CN-default · 命名 · 写作规则）', link: '/voice/brand-voice' },
            { text: '03a · 社交媒体语音', link: '/voice/03a-social-media' },
            { text: '03c · 邮件模板（v0.3 双签）', link: '/voice/03c-email-templates' },
            { text: '03d · 错误 / 边界 / 空态（v0.3 三签）', link: '/voice/03d-error-empty-state' },
            { text: '03e · 区域化（华语）', link: '/voice/03e-china-regionalization' },
            { text: '03f · 实证声明流程', link: '/voice/03f-evidence-attestation' },
            { text: '03g · 竞品对比（v0.3 双签）', link: '/voice/03g-competitive' },
          ],
        },
      ],
      '/visual/': [
        {
          text: 'Visual System（v0.2 · 4 子文档全签）',
          items: [
            { text: '04 · 主文档（信任徽章 · CoT · Diff View · 图像政策）', link: '/visual/visual-system' },
            { text: '04a · 组件 a11y', link: '/visual/04a-accessibility' },
            { text: '04b · 动效指引', link: '/visual/04b-motion' },
            { text: '04c · 摄影 / 插画过渡期', link: '/visual/04c-photography-illustration' },
          ],
        },
      ],
      '/master-brand/': [
        {
          text: '母品牌',
          items: [
            { text: '总览', link: '/master-brand/overview' },
            { text: 'Clear-Space 与最小尺寸', link: '/master-brand/clear-space' },
            { text: 'A11y 对比度（64 组）', link: '/master-brand/a11y' },
            { text: '图层结构', link: '/master-brand/layers' },
            { text: '使用规范（usage.html 内嵌）', link: '/master-brand/usage' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件参考',
          items: [
            { text: '总览', link: '/components/overview' },
            { text: '信任层（7 组件）', link: '/components/trust-layer' },
            { text: 'Logo 系统（4 组件）', link: '/components/logo' },
            { text: '母品牌（2 组件）', link: '/components/master-brand-comp' },
          ],
        },
      ],
      '/governance/': [
        {
          text: '治理 / 流程文档',
          items: [
            { text: '06 · Governance（主文档）', link: '/governance/governance' },
            { text: '06a · NPM SemVer（v0.2 双签）', link: '/governance/06a-npm-semver' },
            { text: '强制层 · brand-voice-guidelines（v0.3 · ~136 条决议）', link: '/governance/brand-voice-guidelines' },
            { text: '05 · 整改清单', link: '/governance/rectification' },
            { text: '站点部署 / 维护', link: '/governance/site-deploy' },
          ],
        },
        {
          text: '签字留痕（已签 packets）',
          collapsed: false,
          items: [
            { text: 'voice 层 v0.2 双签留痕', link: '/governance/v0.2-signoff' },
            { text: 'voice 层 v0.2 决议矩阵', link: '/governance/v0.2-resolution' },
            { text: '04 子文档批次三签 packet', link: '/governance/04-batch-packet' },
            { text: 'voice 层 v0.3 双签 packet（03c + 03g）', link: '/governance/v0.3-packet' },
            { text: 'voice 层 v0.3 三签 packet（03d）', link: '/governance/v0.3-tri-packet' },
            { text: '06a 双签 packet（NPM SemVer）', link: '/governance/06a-packet' },
          ],
        },
      ],
      '/assets-browser/': [
        {
          text: '资产',
          items: [
            { text: 'Token 浏览器', link: '/assets-browser/tokens' },
            { text: '资产下载', link: '/assets-browser/downloads' },
          ],
        },
      ],
      '/demos/': [
        {
          text: 'Demo 集合（preview HTML 内嵌）',
          items: [
            { text: '总览', link: '/demos/' },
            { text: 'Wordmark 矩阵', link: '/demos/wordmarks' },
            { text: '信任徽章 · CoT · Diff View', link: '/demos/visual-system' },
            { text: '图标方向（DI / RCP）', link: '/demos/icon-directions' },
            { text: 'RCP Iconography v1.0', link: '/demos/rcp-iconography' },
            { text: 'DI Iconography v1.0', link: '/demos/di-iconography' },
            { text: 'VGI Mark 12 SVG', link: '/demos/vgi-mark' },
            { text: '母品牌 Logo 变体', link: '/demos/master-brand-logos' },
            { text: '母品牌使用规范', link: '/demos/master-brand-usage' },
            { text: 'Endorsement 颜色对比', link: '/demos/endorsement-color' },
            { text: 'Endorsement 对齐对比', link: '/demos/endorsement-alignment' },
            { text: 'React 包 9 段视觉验证（live）', link: '/demos/react-components' },
            { text: 'React 9 段截图存档', link: '/demos/react-screenshots' },
          ],
        },
      ],
    },

    socialLinks: [],

    footer: {
      message: '内部文档 · 仅供 MedSci Healthcare 内部品牌 / 工程 / BD 团队参考',
      copyright: 'AI Brand Kit · v1.0 visual locked 2026-05-05 · voice 层 v0.3 + 04 批次 v0.2 + 06a v0.2 全签 · react v0.1.0 真发布 · 强制层 v0.3（136 条决议）· 更新 2026-05-08',
    },

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdatedText: '最后更新',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            displayDetails: '显示详情',
            resetButtonTitle: '重置',
            backButtonTitle: '关闭',
            noResultsText: '无结果',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
          },
        },
      },
    },
  },

  vite: {
    server: {
      fs: {
        // 允许访问父目录（用于 symlink 到 ../../preview, ../../assets 等）
        allow: ['..', '../..'],
        // symlink 目标不要 strict 检查（避免 fs.allow 误判）
        strict: false,
      },
    },
    // dev 启动时强制预打包 Vue / @vueuse/core，避免按需优化与 symlink 同时触发
    // "optimized info should be defined" 缓存错乱
    optimizeDeps: {
      include: ['vue', '@vueuse/core'],
      // 每次启动重建缓存（开发场景下损耗可忽略）
      force: true,
    },
  },
});
