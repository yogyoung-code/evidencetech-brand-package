# Demo · React 9 段截图存档

把 [`react/demo/index.html`](/react/demo/index.html) 的 9 段实时演示在 headless chromium 下渲染并保存为 PNG，作为 **v1.0 锁定时点的视觉决策档案**。未来 React 包改版前对照此档案，确保视觉不退化。

<div style="margin: 16px 0;">
  <a href="/preview/screenshots/index.html" target="_blank" rel="noopener" style="display:inline-block;padding:6px 12px;border:1px solid #CBD5E1;border-radius:6px;color:#005AA4;text-decoration:none;font-size:13px;margin-right:8px;">↗ 在新窗口打开</a>
  <a href="/components/overview" style="display:inline-block;padding:6px 12px;border:1px solid #CBD5E1;border-radius:6px;color:#005AA4;text-decoration:none;font-size:13px;">📖 查看组件总览</a>
</div>

<iframe
  src="/preview/screenshots/index.html"
  loading="lazy"
  style="width:100%;height:2400px;border:1px solid #E2E8F0;border-radius:8px;background:white;"
  title="React 9 段截图存档"
></iframe>

## 与 React live demo 的关系

- [Live demo](/demos/react-components) — 当前 React 包真实渲染，验证交互（CoT 动画 / NanoCitation 点击）
- 本档案 — 静态截图，存档某一时刻的视觉。改版前后做 diff

两者并存，不互相替代。

## 重新生成

```bash
cd react && npm run build
npm install puppeteer
node scripts/build-react-demo-screenshots.mjs
```

详见 [`preview/screenshots/README.md`](/preview/screenshots/README.md)。
