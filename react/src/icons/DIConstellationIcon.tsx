import type { IconProps } from "./common";
import { resolveIconAria } from "./common";

/**
 * DeepInsight 星座节点网络 — production v1.0（variant C · Hub-as-Star）。
 *
 * 几何（02 §1.3 + icon-directions-preview.html DI-2，2026-05-06 production-grade 化）：
 * - 6 节点位置不变；5 条邻接边不变（N1–N2、N2–N3、N2–N4、N4–N5、N5–N6）。
 * - **节点统一 r=1.3**（普通），hub 内圆 r=1.4；hub 用 **双环结构**（内 r=1.4 实心 +
 *   外环 r=2.4 描边 stroke=1.0）表达"被发现的 Rising Star KOL"语义。
 * - **连线 trim 到节点外缘**（不再穿过圆心）：line gap=0.2，stroke=1.3，opacity=0.5
 *   压暗让 hub 视觉跳出。
 * - **几何上限**：N5–N6 距离仅 6.2 单位，hub 外环外缘 2.9 是上限——不能再扩。
 *
 * 决策档案：preview/di-iconography/README.md（含 A/B/C 三变体对比与选定理由）。
 *
 * 入场动画（CSS 端实现，本组件仅渲染静态结构）：nodes-emerge — 阶段 1 lines fade-in
 * 60ms 错峰；阶段 2 ordinary 节点 r-pop 80ms 错峰；阶段 3 hub 大幅过冲收尾。
 * 总时长 ~1.3s。详见 02 §1.7 + preview/di-iconography/index.html 的 demo。
 */
export function DIConstellationIcon({ size = "1em", title, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      {...resolveIconAria(title)}
      {...rest}
    >
      {/* 5 条连线 · trim 到节点外缘 */}
      <line x1="5.7481" y1="8.8321" x2="9.2519" y2="11.1679" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" opacity={0.5} />
      <line x1="9.9615" y1="13.4" x2="8.5385" y2="17.1" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" opacity={0.5} />
      <line x1="11.4" y1="10.8" x2="14.1" y2="7.2" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" opacity={0.5} />
      <line x1="15.6012" y1="7.3742" x2="17.2575" y2="11.1599" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" opacity={0.5} />
      <line x1="19.2519" y1="17.0074" x2="19.6362" y2="18.5448" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" opacity={0.5} />

      {/* Hub 外环（描边） */}
      <circle cx="18.5" cy="14" r="2.4" fill="none" stroke="currentColor" strokeWidth={1} />

      {/* 5 个 ordinary 节点 + hub 内圆 */}
      <circle cx="4.5" cy="8" r="1.3" fill="currentColor" />
      <circle cx="10.5" cy="12" r="1.3" fill="currentColor" />
      <circle cx="8" cy="18.5" r="1.3" fill="currentColor" />
      <circle cx="15" cy="6" r="1.3" fill="currentColor" />
      <circle cx="18.5" cy="14" r="1.4" fill="currentColor" />
      <circle cx="20" cy="20" r="1.3" fill="currentColor" />
    </svg>
  );
}
