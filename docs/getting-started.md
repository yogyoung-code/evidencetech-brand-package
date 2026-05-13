# 入门指南

本站是梅斯健康 AI Brand Kit 的内部文档站点。读完本页（5 分钟）就能知道去哪里查需要的内容。

## 如果你是…

### 工程师（需要把 kit 接入产品）

1. **CSS Token**：[`ai-tokens.css`](/ai-tokens.css) — 直接 import 到产品 globals.css（在母品牌 `colors_and_type.css` 之后）
2. **React 组件**：参 [组件总览](/components/overview)；当前 13 组件都在 `@yogyoung-code/ai-brand-kit` v0.1.0
3. **接入示例**：

   ```html
   <body class="brand-de">  <!-- 或 brand-se / brand-di / brand-rcp -->
     <span class="badge-pitl">…PITL</span>
     <span class="badge-aio">…AIO</span>
     <span class="vgi-mark">…VGI™</span>
   </body>
   ```

4. **图标资产**：参 [资产下载](/assets-browser/downloads) 取 SVG / PNG
5. **整改清单**：参 [05 整改清单](/governance/rectification) 看你的产品要改什么

### 设计师（要做新材料 / 修改现有材料）

1. **看四产品色与字体**：[Brand Architecture](/architecture/brand-architecture) §1
2. **看 wordmark 怎么用**：[Wordmark 矩阵 demo](/demos/wordmarks)（实时渲染）
3. **看信任徽章 / CoT / Diff View**：[Visual System](/visual/visual-system) + [demo](/demos/visual-system)
4. **母品牌 logo 用法**：[母品牌总览](/master-brand/overview) → [使用规范 usage.html](/demos/master-brand-usage)（含 PNG 阶梯 + Clear-Space + A11y + 图层）
5. **写文案前先读**：[Brand Voice](/voice/brand-voice) 的禁词清单与命名规则

### BD / 市场 / 投资者沟通

1. **30 秒速读**：[首页](/) 或 [总览（README）](/foundation/overview)
2. **架构选择背景**：[00 架构锁定](/foundation/architecture)
3. **母品牌偏离条款**：[总览 §2](/foundation/overview#_2-经-sponsor-拍板的-v1-1-母品牌偏离条款) — 这是合规文档，不是 bug

### Sponsor / Brand Lead（要批 RFC / 改锁定决策）

1. **看 Handoff §3**：[已锁定决策](/foundation/handoff#_3-不要重新讨论的锁定决策-避免回炉)
2. **变更流程**：[06 Governance](/governance/governance) §2

## 站点导航

- 顶部 nav 按 6 个域分组：基础 / 设计系统 / 母品牌 / 组件 / 资产 / 治理
- 左侧 sidebar 在每个域内提供细分章节
- 右侧 outline 自动生成的本页目录
- 顶部右上角搜索框：全站 markdown 内容全文搜索

## 文档更新流程

文档 single source of truth 在 kit 根目录的 markdown 文件：

```
EvidenceTech-Brand-Package/
├── README.md                          ← 总览
├── HANDOFF.md                         ← 会话上下文
├── 00-architecture-locked.md
├── 01-gap-audit.md
├── 02-brand-architecture.md
├── 03-brand-voice.md
├── 04-visual-system.md
├── 05-rectification-checklist.md
├── 06-governance.md
└── assets/master-brand/{CLEAR-SPACE,A11Y-CONTRAST,LAYERS}.md
```

修改源 markdown 后运行：

```bash
node scripts/sync-docs.mjs   # 把源 markdown 同步到 docs/
cd docs && npm run build     # 重新构建静态站点
```

详见 [站点部署 / 维护](/governance/site-deploy)。
