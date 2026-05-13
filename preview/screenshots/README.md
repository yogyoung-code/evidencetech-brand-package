# React 9 段视觉验证 · 截图存档

把 `react/demo/index.html` 的 9 段实时演示在 puppeteer headless chromium 下渲染并保存为 PNG，作为 v1.0 锁定时点的视觉决策档案。

## 生成

```bash
# 在 kit 根目录
cd react && npm install && npm run build       # 确保 dist 已构建
cd .. && npm install puppeteer                  # 首次约 200MB chromium 下载
node scripts/build-react-demo-screenshots.mjs   # 输出 9 张到 preview/screenshots/react-demo/
```

脚本会：
1. 启动本地 HTTP 服务器（端口 8765；importmap 需要 http:// 不能 file://）
2. 用 puppeteer headless chromium 打开 demo
3. 等 React 渲染（9 个 `<section>` 出现）+ 字体加载完毕 + 图片加载完毕 + 600ms 让 CoT 动画稳定到一个相位
4. 按 9 段 `<section>` 元素分别截图（1280×900 viewport · 2x deviceScaleFactor）
5. 保存到 `preview/screenshots/react-demo/section-{n}-{slug}.png`
6. 写 `manifest.json`（含 React 包版本 / 截图日期 / 各段对应的 spec 锚点）

## 9 段对应

| n | slug | 标题 | 决策档案 |
|---|---|---|---|
| 1 | trust-badges | 三大信任徽章 · 四产品 scope | 04 Visual System |
| 2 | trust-badges-reverse | 信任徽章 · 反白态 | 04 Visual System |
| 3 | logo-ladder | Logo · 尺寸阶梯 + endorsement signature | 02 Brand Architecture |
| 4 | logo-reverse | Logo · 反白态（Hero / 深底） | 02 Brand Architecture |
| 5 | wordmark-only | Wordmark · text-only 退化态 | 02 Brand Architecture |
| 6 | content-scenarios | 正文场景 · NanoCitation / CoT / Diff / Disclosure | 04 Visual System |
| 7 | family-lockup | 家族 Lockup | 02 Brand Architecture |
| 8 | master-brand-logo | 母品牌 MedSci Healthcare logo · 4 变体 × 3 构图 | 母品牌总览 |
| 9 | cobrand-lockup | Co-Brand Lockup · 母品牌 + 产品 wordmark | 02 §4.3 |

## 何时重跑

- React 包发新版（version bump）前后
- 修改任何信任徽章 / Logo / Wordmark / 母品牌 logo 的 token 后
- 每季度母品牌 v1.1 sync 后

## 不能替代的

- 静态截图无法验证 CoT 动画 / NanoCitation 交互 — 这些仍需 [live demo](../../react/demo/index.html) 验证
- 截图只是某一时刻的视觉，[spec](../../) 才是规则的 source of truth

## 视觉档案入口

[`index.html`](./index.html) 渲染 9 段截图为卡片矩阵，含 meta bar 与决策档案跳转链接。

**注意**：本页通过 `<script src="react-demo/manifest.js">` 加载数据（`file://` 也能跑）。如果你看到「尚未生成截图」的空状态——

1. 确认 `react-demo/` 目录下有 9 个 PNG + `manifest.json` + `manifest.js`
2. 若 `manifest.js` 没有：截图脚本是旧版（在 2026-05-07 之前的版本只生成 .json）。重跑一次 `node scripts/build-react-demo-screenshots.mjs` 即可补上 `manifest.js`
3. 若 `manifest.js` 有但仍空状态：手动刷新本页（`Cmd+Shift+R` 强刷绕过缓存）

## 沙盒说明

这个脚本不能在沙盒（aarch64 + 磁盘受限）下跑通——puppeteer chromium 拉的是 x86-64，playwright 也因磁盘满 ENOSPC 失败。**必须在用户 Mac 本地跑**。脚本本身已 ready-to-run，本地 `npm install puppeteer` 后直接执行即可。
