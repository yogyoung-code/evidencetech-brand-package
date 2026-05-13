# RCP Icon · 生产级矢量化候选包

**状态**：✅ v1.0 已选定（2026-05-06）— **变体 C** 入产线
**已落地**：`react/src/icons/RCPPulseIcon.tsx`、`02-brand-architecture.md` §1.3 表格状态

**承接**：HANDOFF §5 第 3 项「DI / RCP 图标生产级矢量化」、`02-brand-architecture.md` §1.3 RCP icon 几何（占位 SVG → production-grade）。

---

## 包含内容

| 文件 | 说明 |
|---|---|
| `index.html` | 三变体并排对比页（多尺寸 / 反白态 / family rhyme / 几何审视 / 入场动画） |
| `paths.json` | 三变体 path `d` 属性（自动生成） |
| `variant-{a,b,c}/icon.svg` | 默认色 (`#0F62FE`) standalone svg |
| `variant-{a,b,c}/icon-reverse.svg` | 反白色 (`#FFFFFF`) standalone svg |
| `variant-{a,b,c}/icon-animated.svg` | 含 SMIL stroke-draw 入场动画 |

打开方式：

```bash
# 在仓库根
python3 -m http.server 8080
# 访问 http://localhost:8080/preview/rcp-iconography/
```

---

## 三变体差异

所有变体共享相同 waypoints（02 §1.3 定义的「左侧平段 → 主峰 y=4 → 急降谷 y=19 → 次峰 y=9 → 右侧平段 y=13」）。差异仅在 corner fillet 半径上。

| 变体 | peak r | trough r | 次峰 r | baseline 转换 r | 风格 |
|---|---|---|---|---|---|
| **A · 硬角精修** | 0 | 0 | 0 | 0 | 全直线，仅靠 `stroke-linejoin: round` 视觉软化。最锐利。 |
| **B · 软角 fillet** | 0.5 | 0.5 | 0.4 | 1.0 | 中等 fillet，保留 ECG 锐度但削去硬刺。 |
| **C · 与 DE 几何对齐** ⭐ | 0.25 | 0.25 | 0.25 | 1.5 | 复用 DE icon 的 fillet 配方，family rhyme 最强。 |

⭐ = 推荐。理由：

1. **家族识别度** — DE 与 RCP 都是单笔 ECG 图标，是四产品中最相邻的视觉对。共享 fillet 配方让两者并排时（02 §4.1 横向矩阵 lockup）"系出同源"。
2. **可对外解释** — 几何决策可单句表达："peak r=0.25 / baseline r=1.5，与 DE 一致"。
3. **小尺寸代价** — 在 16px 渲染时，C 的 baseline arc (r=1.5) 会经过 sub-pixel 抗锯齿，比 A 略软；对比测试中差异 < 1px，可接受。

---

## 入场动画规格（02 §1.7.1 阶段 1）

- **总时长**：1.2s
- **缓动**：`cubic-bezier(0.65, 0, 0.35, 1)`（near-ease-out，让笔触落点有"收笔感"）
- **方向**：单笔从 `M 2 12` 向右描线，依次过左平段 → 主峰 → 谷底 → 次峰 → 右平段
- **path 总长**：使用 `pathLength="100"` 归一化，便于与 wordmark fade-in 时序对齐
- **降级**：`prefers-reduced-motion: reduce` 应在产品集成时禁用动画（standalone .svg 内不能感知此 query；交付端处理）

---

## 选定后落地

Sponsor 选定 X（A/B/C）后：

1. 把 `variant-x/icon.svg` 中的 path `d` 写入 `react/src/icons/RCPPulseIcon.tsx`
2. 把整个 `variant-x/` 目录复制 / 软链到 `assets/icons/rcp/` 作为生产资产位置（v1.x 引入 assets 目录时）
3. 在 `02-brand-architecture.md` §1.3 备注里追加 v1.0 production-grade 化决策记录（peak/baseline 半径、动画时长、决策理由）
4. 删除其他两个 variant 目录与 `index.html`（保留 `paths.json` 与 `README.md` 作为决策档案）

---

## 路径长度备忘（stroke-draw 时序参考）

| 变体 | path 总长（24×24 viewBox 单位） | 备注 |
|---|---|---|
| A | 51.20 | 全直线，最长 |
| B | 37.86 | r=0.5/1.0 fillet 抹掉较多角落 |
| C | 43.87 | DE 配方 fillet |

注：所有 standalone svg 已设 `pathLength="100"` 归一化，stroke-draw 动画时序与
实际几何长度解耦。1.2s 动画在三变体中视觉感知一致。

---

## 不在范围

- DI 图标矢量化（独立任务，HANDOFF §5 第 3 项的另一半）
- RCP 应用动画（loading / 数据更新等运行时态）— 仅入场动画在本包内
- 多色变体 — RCP icon 永远单色（产品色或反白）
