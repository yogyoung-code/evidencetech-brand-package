import type { IconProps } from "./common";
import { resolveIconAria } from "./common";

/**
 * Rapid Clinical Pulse 锐脉单笔描线 — production v1.0。
 *
 * 几何（02 §1.3 + §1.7.1，2026-05-06 production-grade 化）：
 * - Waypoints 与 v0 占位一致：左侧平段（H 9 @ y=12）→ 主峰 (11,4) → 急降谷 (12.5,19)
 *   → 次峰 (14,9) → 右侧平段（H 22 @ y=13）。右侧平段是贯穿横线（02 §1.7.1）的锚点。
 * - **Corner fillet 配方与 DE icon 共用**：peak/trough/次峰 r=0.25，baseline 转换 r=1.5。
 *   两者并排（02 §4.1 横向矩阵 lockup）时形成最强家族 rhyme。
 * - Stroke 2px、round caps/joins，与 DE 一致。
 *
 * 决策档案：preview/rcp-iconography/README.md（含 A/B/C 三变体对比与选定理由）。
 */
export function RCPPulseIcon({ size = "1em", title, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      {...resolveIconAria(title)}
      {...rest}
    >
      <path
        d="M 2 12 L 7.8288 12 A 1.5 1.5 0 0 0 9.284 10.8638 L 10.6516 5.3935 A 0.25 0.25 0 0 1 11.1429 5.4292 L 12.3009 17.0087 A 0.25 0.25 0 0 0 12.7969 17.0209 L 13.857 9.953 A 0.25 0.25 0 0 1 14.3384 9.9023 L 15.135 12.0267 A 1.5 1.5 0 0 0 16.5395 13 L 22 13"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
