// 计算 RCP icon 三变体路径。
//
// 输入：waypoints + 每角的 fillet 半径
// 输出：SVG `d` 属性字符串
//
// 算法：对每个 interior corner P_i，计算 fillet 弧
//   - 入向单位向量 u_in = (P_i - P_{i-1}) / |P_i - P_{i-1}|
//   - 出向单位向量 u_out = (P_{i+1} - P_i) / |P_{i+1} - P_i|
//   - 内角 α = π - acos(u_in · u_out)（u_in 反向是 P 指向前点，与 u_out 夹角即内角的补角）
//     正确写法：α = acos(-u_in · u_out)（因为 u_in 是入向的延伸，反向才是 P→A）
//     更稳健：u_PA = (P_{i-1} - P_i) / |..|；u_PB = (P_{i+1} - P_i) / |..|
//     α = acos(u_PA · u_PB)
//   - 切点距 d = r / tan(α/2)
//   - trim_back = P + d * u_PA
//   - trim_fwd  = P + d * u_PB
//   - sweep = u_in × u_out > 0 ? 1 : 0  (SVG y-down 下，正 cross = screen CW = sweep 1)

const WAYPOINTS = [
  { name: "P0", x: 2,    y: 12 },   // 左侧平段起点
  { name: "P1", x: 9,    y: 12 },   // 左侧平段终点 / 主峰起跳点
  { name: "P2", x: 11,   y: 4  },   // 主峰
  { name: "P3", x: 12.5, y: 19 },   // 急降谷底
  { name: "P4", x: 14,   y: 9  },   // 次级峰
  { name: "P5", x: 15.5, y: 13 },   // 右侧平段起点
  { name: "P6", x: 22,   y: 13 },   // 右侧平段终点（与贯穿横线对齐）
];

const VARIANTS = {
  A: {
    name: "A · 硬角精修",
    desc: "保留全直线，仅依赖 stroke-linejoin=round 视觉软化。最低改动。",
    radii: { P1: 0, P2: 0, P3: 0, P4: 0, P5: 0 },
  },
  B: {
    name: "B · 软角 fillet",
    desc: "中等 fillet：peak/trough 0.5 半径，baseline 转换 1.0。微妙圆润但保留 ECG 锐度。",
    radii: { P1: 1.0, P2: 0.5, P3: 0.5, P4: 0.4, P5: 1.0 },
  },
  C: {
    name: "C · 与 DE 几何对齐",
    desc: "复用 DE icon 的 fillet 配方：peak/trough 0.25 / baseline 1.5。家族 rhyme 最强。",
    radii: { P1: 1.5, P2: 0.25, P3: 0.25, P4: 0.25, P5: 1.5 },
  },
};

function unit(dx, dy) {
  const n = Math.hypot(dx, dy);
  return [dx / n, dy / n];
}

function fmt(v) {
  // 4 位小数足够；trailing zero 精简
  return Number.parseFloat(v.toFixed(4)).toString();
}

function buildPath(radii) {
  const pts = WAYPOINTS;
  const segments = [];
  segments.push(`M ${fmt(pts[0].x)} ${fmt(pts[0].y)}`);

  for (let i = 1; i < pts.length; i++) {
    const cur = pts[i];
    const r = i < pts.length - 1 ? radii[cur.name] : 0;

    if (!r || r <= 0) {
      segments.push(`L ${fmt(cur.x)} ${fmt(cur.y)}`);
      continue;
    }

    const prev = pts[i - 1];
    const next = pts[i + 1];

    // u_PA = (prev - cur)/|...|, u_PB = (next - cur)/|...|
    const [uax, uay] = unit(prev.x - cur.x, prev.y - cur.y);
    const [ubx, uby] = unit(next.x - cur.x, next.y - cur.y);

    // interior angle at cur
    const cos = uax * ubx + uay * uby;
    const alpha = Math.acos(Math.max(-1, Math.min(1, cos)));
    const halfAlpha = alpha / 2;
    const tanHalf = Math.tan(halfAlpha);
    if (tanHalf < 1e-6) {
      // 退化情况（U-turn 或共线），跳过 fillet
      segments.push(`L ${fmt(cur.x)} ${fmt(cur.y)}`);
      continue;
    }
    const d = r / tanHalf;

    // 入向（path 行进方向）单位向量 = (cur - prev)/|...|
    const [vinx, viny] = unit(cur.x - prev.x, cur.y - prev.y);
    // 出向单位向量 = (next - cur)/|...|
    const [voutx, vouty] = unit(next.x - cur.x, next.y - cur.y);

    const tx_back = cur.x + d * uax;
    const ty_back = cur.y + d * uay;
    const tx_fwd = cur.x + d * ubx;
    const ty_fwd = cur.y + d * uby;

    // sweep: SVG y-down，cross > 0 → screen 顺时针 → sweep 1
    const cross = vinx * vouty - viny * voutx;
    const sweep = cross > 0 ? 1 : 0;

    segments.push(`L ${fmt(tx_back)} ${fmt(ty_back)}`);
    segments.push(`A ${fmt(r)} ${fmt(r)} 0 0 ${sweep} ${fmt(tx_fwd)} ${fmt(ty_fwd)}`);
  }

  return segments.join(" ");
}

const result = {};
for (const [key, v] of Object.entries(VARIANTS)) {
  result[key] = {
    name: v.name,
    desc: v.desc,
    radii: v.radii,
    d: buildPath(v.radii),
  };
}

console.log(JSON.stringify(result, null, 2));
