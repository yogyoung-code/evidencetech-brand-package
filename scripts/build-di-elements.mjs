// 计算 DI icon 三变体几何（节点 + 连线 trim）。
//
// 输入：节点 (cx, cy, r)，连线邻接对 [from, to]，每变体的 trim gap
// 输出：每变体的 SVG element 列表（lines + circles + extras）
//
// Trim 算法：每条 N_a→N_b 连线，起点向 N_a 外移 (r_a + gap)，终点向 N_b 内移 (r_b + gap)。

const NODES_BASE = {
  N1: { cx: 4.5,  cy: 8,    r_base: 1.2, role: "ordinary" },
  N2: { cx: 10.5, cy: 12,   r_base: 1.5, role: "ordinary" },
  N3: { cx: 8,    cy: 18.5, r_base: 1.2, role: "ordinary" },
  N4: { cx: 15,   cy: 6,    r_base: 1.5, role: "ordinary" },
  N5: { cx: 18.5, cy: 14,   r_base: 2.4, role: "hub" },         // Rising Star
  N6: { cx: 20,   cy: 20,   r_base: 1.2, role: "ordinary" },
};

const EDGES = [
  ["N1", "N2"],
  ["N2", "N3"],
  ["N2", "N4"],
  ["N4", "N5"],
  ["N5", "N6"],
];

// 每变体的几何参数
// nodes[K].r = 节点的填充半径（实际渲染圆的尺寸）
// nodes[K].trimR = 线条 trim 用的视觉外缘半径（hub 的环结构需要单独指定）
const VARIANTS = {
  A: {
    name: "A · 占位精修",
    desc: "保留占位的节点尺寸阶层（1.2/1.5/2.4），连线 trim 到节点外缘修复『线穿圆心』问题。其他不变。",
    nodes: {
      N1: { r: 1.2 }, N2: { r: 1.5 }, N3: { r: 1.2 },
      N4: { r: 1.5 }, N5: { r: 2.4 }, N6: { r: 1.2 },
    },
    line: { stroke: 1.4, opacity: 0.55, gap: 0 },
    hubExtras: null,
  },
  B: {
    name: "B · 与 DE/RCP family rhyme",
    desc: "节点统一 r=1.5，hub r=2.5（比占位 2.4 略大 0.1，保持 hub 视觉主导）。线条 stroke 提到 1.6 + 满 opacity（与 DE/RCP 一致）。无环装饰，靠尺寸阶层与线条满 opacity 表达 hub 权重。",
    nodes: {
      N1: { r: 1.5 }, N2: { r: 1.5 }, N3: { r: 1.5 },
      N4: { r: 1.5 }, N5: { r: 2.5 }, N6: { r: 1.5 },
    },
    line: { stroke: 1.6, opacity: 1.0, gap: 0.3 },
    hubExtras: null,
  },
  C: {
    name: "C · Hub-as-Star 语义强化",
    desc: "普通节点均一化 r=1.3，hub 用双环结构（内 r=1.4 实心 + 外环 r=2.4 中心、stroke=1.0、外缘 2.9）表达『Rising Star』。线条 stroke=1.3、opacity=0.5 压暗，让 hub 视觉跳出。注：N5–N6 距离仅 6.2 单位，hub 外环已是几何上限——不能再扩。",
    nodes: {
      N1: { r: 1.3 }, N2: { r: 1.3 }, N3: { r: 1.3 },
      N4: { r: 1.3 }, N5: { r: 1.4, trimR: 2.9 }, N6: { r: 1.3 },
    },
    line: { stroke: 1.3, opacity: 0.5, gap: 0.2 },
    hubExtras: { ringR: 2.4, ringStroke: 1.0, ringOpacity: 1.0 },
  },
};

function fmt(v) {
  return Number.parseFloat(Number(v).toFixed(4)).toString();
}

function trimLine(a, b, ra, rb, gap) {
  const dx = b.cx - a.cx;
  const dy = b.cy - a.cy;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const startOffset = ra + gap;
  const endOffset = rb + gap;
  return {
    x1: a.cx + ux * startOffset,
    y1: a.cy + uy * startOffset,
    x2: b.cx - ux * endOffset,
    y2: b.cy - uy * endOffset,
  };
}

function buildVariant(key, v) {
  const lines = [];
  const circles = [];
  const extras = [];

  // Draw lines first so circles paint on top (handles any micro-overlap with edge-trim gracefully).
  // Use trimR if provided (hub with ring), otherwise fall back to r (filled-only nodes).
  for (const [aKey, bKey] of EDGES) {
    const a = NODES_BASE[aKey];
    const b = NODES_BASE[bKey];
    const ra = v.nodes[aKey].trimR ?? v.nodes[aKey].r;
    const rb = v.nodes[bKey].trimR ?? v.nodes[bKey].r;
    const t = trimLine(a, b, ra, rb, v.line.gap);
    lines.push({
      type: "line",
      x1: t.x1, y1: t.y1, x2: t.x2, y2: t.y2,
      stroke: v.line.stroke, opacity: v.line.opacity,
    });
  }

  // Hub outer ring (Variant B/C) drawn before hub fill so fill paints on top.
  if (v.hubExtras) {
    const hub = NODES_BASE.N5;
    extras.push({
      type: "circle",
      cx: hub.cx, cy: hub.cy, r: v.hubExtras.ringR,
      fill: "none", stroke: "currentColor",
      strokeWidth: v.hubExtras.ringStroke,
      opacity: v.hubExtras.ringOpacity,
    });
  }

  // Nodes (filled circles)
  for (const k of Object.keys(NODES_BASE)) {
    const n = NODES_BASE[k];
    const r = v.nodes[k].r;
    circles.push({
      type: "circle",
      cx: n.cx, cy: n.cy, r,
      fill: "currentColor",
    });
  }

  return { lines, extras, circles };
}

function elementsToSvg(elems) {
  const out = [];
  for (const e of elems) {
    if (e.type === "line") {
      out.push(
        `<line x1="${fmt(e.x1)}" y1="${fmt(e.y1)}" x2="${fmt(e.x2)}" y2="${fmt(e.y2)}" stroke="currentColor" stroke-width="${fmt(e.stroke)}" stroke-linecap="round" opacity="${e.opacity}"/>`,
      );
    } else if (e.type === "circle") {
      const parts = [
        `cx="${fmt(e.cx)}"`, `cy="${fmt(e.cy)}"`, `r="${fmt(e.r)}"`,
        e.fill ? `fill="${e.fill}"` : null,
        e.stroke ? `stroke="${e.stroke}"` : null,
        e.strokeWidth !== undefined ? `stroke-width="${fmt(e.strokeWidth)}"` : null,
        e.opacity !== undefined && e.opacity !== 1 ? `opacity="${e.opacity}"` : null,
      ].filter(Boolean);
      out.push(`<circle ${parts.join(" ")}/>`);
    }
  }
  return out;
}

const result = {};
for (const [key, v] of Object.entries(VARIANTS)) {
  const built = buildVariant(key, v);
  // Order in SVG: lines → extras (hub ring) → nodes (filled circles on top)
  const ordered = [...built.lines, ...built.extras, ...built.circles];
  result[key] = {
    name: v.name,
    desc: v.desc,
    line: v.line,
    nodes: v.nodes,
    hubExtras: v.hubExtras,
    elements: ordered,
    svgInner: elementsToSvg(ordered).join("\n  "),
  };
}

console.log(JSON.stringify(result, null, 2));
