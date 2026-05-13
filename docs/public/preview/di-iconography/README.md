# DI Icon · 生产级矢量化候选包

**状态**：✅ v1.0 已选定（2026-05-06）— **变体 C · Hub-as-Star** 入产线
**已落地**：`react/src/icons/DIConstellationIcon.tsx`、`02-brand-architecture.md` §1.3、`preview/wordmarks-preview.html` ic-di symbol

**承接**：HANDOFF §5 第 3 项「DI / RCP 图标生产级矢量化」（RCP 已 ✅ 完成 2026-05-06）、`02-brand-architecture.md` §1.3 DI icon（占位 SVG → production-grade）。

---

## 包含内容

| 文件 | 说明 |
|---|---|
| `index.html` | 三变体并排对比页（多尺寸 / 反白态 / 与 DE/SE/RCP family rhyme / 几何审视 / 入场动画） |
| `elements.json` | 三变体几何（节点 + 连线 trim 后端点，自动生成） |
| `variant-{a,b,c}/icon.svg` | 默认色 (`#0891B2`) standalone svg |
| `variant-{a,b,c}/icon-reverse.svg` | 反白色 (`#FFFFFF`) standalone svg |
| `variant-{a,b,c}/icon-animated.svg` | 含 SMIL nodes-emerge 入场动画（lines fade-in → ordinary nodes scale-pop → hub pop） |

打开方式：

```bash
# 在仓库根
python3 -m http.server 8080
# 访问 http://localhost:8080/preview/di-iconography/
# 或直接 file:// 打开 index.html（HTML 全部 inline，无外链依赖）
```

---

## 共享几何（所有变体）

6 个节点位置不变，5 条邻接边不变（来自 `icon-directions-preview.html` 已选定 DI-2）：

| Node | (cx, cy) | 角色 |
|---|---|---|
| N1 | (4.5, 8)    | ordinary |
| N2 | (10.5, 12)  | ordinary（中枢） |
| N3 | (8, 18.5)   | ordinary |
| N4 | (15, 6)    | ordinary |
| **N5** | **(18.5, 14)** | **Hub · Rising Star KOL** |
| N6 | (20, 20)    | ordinary |

边：N1–N2、N2–N3、N2–N4、N4–N5、N5–N6。

**通用改进**（三变体共有）：连线 trim 到节点外缘（不再穿过圆心），修复占位的「线穿过填充圆」问题。

---

## 三变体差异

| 变体 | 节点尺寸 | 线条 | Hub 装饰 | 风格 |
|---|---|---|---|---|
| **A · 占位精修** | 1.2 / 1.5 / 2.4（保持占位阶层） | stroke=1.4, opacity=0.55, gap=0 | 无 | 改动最小 |
| **B · family rhyme** ⭐ | 统一 1.5，hub 2.5 | stroke=1.6, opacity=1.0, gap=0.3 | 无 | 与 DE/RCP stroke 同源 |
| **C · Hub-as-Star** | 统一 1.3，hub 内 1.4 + 外环 r=2.4 stroke=1.0 | stroke=1.3, opacity=0.5, gap=0.2 | 双环 | 语义最强 |

⭐ = 推荐。理由：

1. **Family rhyme** — DE/RCP 都是 stroke=2、满 opacity 单色描线。B 让 DI 的连线（stroke=1.6 + 满 opacity）尽量接近这个风格，矩阵 lockup 时不显突兀。
2. **Hub 视觉权重靠尺寸阶层** — 普通节点 r=1.5、hub r=2.5（1.67×），无装饰即可建立"被发现的明星"语义。简单可靠，不在小尺寸糊掉。
3. **不超出几何上限** — N5–N6 距离仅 6.2 单位，C 的双环结构是几何上限（外环外缘 2.9 + N6 trim 1.5 + gap 0.4 ≈ 4.8，留给线条只有 1.4 单位）。在小于 28px 的渲染下双环糊作一团。B 没这个问题。

---

## 入场动画规格（DI 专用 · nodes-emerge）

DI 的入场动效与 DE/SE/RCP 不同，符合 02 §1.7 通用规则但有自己的脉络。

| 阶段 | 时间 | 动作 | 缓动 |
|---|---|---|---|
| 1 · 网络成形 | 0 – 590ms | 5 条线依次 fade-in，60ms 错峰，每条 350ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| 2 · 节点登场 | 400 – 1040ms | 5 个 ordinary 节点 r 从 0 → r×1.08 → r，80ms 错峰，每个 320ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| 3 · Hub 加冕 | 800 – 1280ms | Hub 节点（含外环）r 从 0 → r×1.18 → r×0.95 → r，480ms | 同上，多段过冲 |

**总时长**：~1.3s（02 §1.7 通用规则 1.4–2.0s 区间，DI 略短因为 6 个节点同时调度容易显冗长）。

**降级**：`prefers-reduced-motion: reduce` 应在产品集成时禁用动画（standalone .svg 内不能感知此 query；交付端处理）。

---

## 选定后落地

Sponsor 选定 X（A/B/C）后：

1. 把 `variant-x/elements.json` 中的 elements 数组转换成 React 组件，写入 `react/src/icons/DIConstellationIcon.tsx`
2. 在 `02-brand-architecture.md` §1.3 备注里追加 v1.0 production-grade 化决策记录（节点尺寸、线条 stroke / opacity、hub 装饰、动画时长、决策理由）
3. 在 HANDOFF.md §5 把"DI 图标生产级矢量化"行从 ⬜ 改为 ✅
4. 落选两个 variant 目录与 index.html 可保留作决策档案，或归档（按 RCP 同样处理）

---

## 与 RCP 决策档案的对应

`preview/rcp-iconography/` 已完成（2026-05-06，选定 variant C）。本目录是 DI 的并行决策。两组档案一起构成「v1.x 图标 production 化」的完整记录。
