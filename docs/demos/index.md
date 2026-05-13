# Demo 集合

把 kit 中所有 preview HTML 通过 iframe 内嵌，方便对照 spec 看实际渲染。所有 demo 来自 `preview/` 目录的 self-contained 单文件，可独立打开。

## 索引

| 类别 | Demo | 用途 |
|---|---|---|
| Logo / Wordmark | [Wordmark 矩阵](/demos/wordmarks) | 4 产品 logo + endorsement signature 在不同尺寸 / 背景下的渲染 |
| Logo / Wordmark | [Endorsement 颜色对比](/demos/endorsement-color) | endorsement signature 灰度决策档案 |
| Logo / Wordmark | [Endorsement 对齐对比](/demos/endorsement-alignment) | endorsement signature 对齐方式决策档案 |
| Logo / Wordmark | [图标方向（DI / RCP）](/demos/icon-directions) | DI 星座 + RCP 锐脉的图标设计档案（含其他备选方向） |
| Iconography | [RCP Iconography v1.0](/demos/rcp-iconography) | RCP 3 变体对比（A / B / C，C 已选） |
| Iconography | [DI Iconography v1.0](/demos/di-iconography) | DI 3 变体对比（A / B / C，C 已选 · Hub-as-Star） |
| Iconography | [VGI Mark 12 SVG](/demos/vgi-mark) | glyph 6 + compact 2 + full 4 资产预览 |
| 信任层 | [信任徽章 / CoT / Diff View](/demos/visual-system) | 实时渲染三大信任徽章 + CoT 动画 + Diff View + 图像政策 |
| 母品牌 | [母品牌 Logo 变体](/demos/master-brand-logos) | 4 变体 × 3 构图预览 |
| 母品牌 | [母品牌使用规范](/demos/master-brand-usage) | PNG 阶梯 / Clear-Space / A11y / 图层 视觉档案 |
| React 包 | [React 9 段视觉验证（live）](/demos/react-components) | 13 组件实时演示（importmap ESM + dist/） |
| React 包 | [React 9 段截图存档](/demos/react-screenshots) | v1.0 锁定时点的视觉档案，改版前后对照 diff |

## 与 Spec 的关系

每个 demo 旁边的「决策回溯」按钮（如 RCP variant C 选定原因）链接回对应 spec 章节。Spec 是规则的 source of truth，demo 是渲染的 source of truth。两者出现冲突时——以 spec 为准，demo 是 bug 待修复。
