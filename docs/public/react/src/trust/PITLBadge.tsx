import type { CSSProperties, HTMLAttributes } from "react";
import { ShieldCheckIcon } from "../icons";
import type { ReverseProp } from "../types";

export interface PITLBadgeProps extends HTMLAttributes<HTMLSpanElement>, ReverseProp {
  /**
   * 显示完整描述 "PITL Verified"。默认仅显示 3 字母缩写 "PITL"
   * （04 §2.1 v0.2 决定：UI 紧凑场景用缩写）。
   */
  full?: boolean;
}

const REVERSE_STYLE: CSSProperties = {
  background: "rgba(255, 255, 255, 0.15)",
  color: "#FFFFFF",
};

/**
 * PITL Verified 徽章。最高信任级——经 PITL 专家网络复核的 AI 输出。
 *
 * 默认（紧凑）：产品色填充 + 反白文字 + "PITL" 三字母。
 * `full`：显示 "PITL Verified"，padding/字号略增（用于 about 页与营销）。
 * `reverse`：深色背景下使用 `rgba(255,255,255,0.15)` 半透白填充 + 白文字。
 *
 * 必须挂在 `BrandScope` 内（或祖先有 `.brand-de/se/di/rcp` 中之一），
 * 否则 fallback 为 DE 蓝。
 */
export function PITLBadge({
  full = false,
  reverse = false,
  className,
  style,
  ...rest
}: PITLBadgeProps) {
  const composed = ["badge-pitl", full && "badge-pitl--full", className]
    .filter(Boolean)
    .join(" ");
  const finalStyle: CSSProperties | undefined = reverse
    ? { ...REVERSE_STYLE, ...style }
    : style;

  return (
    <span className={composed} style={finalStyle} {...rest}>
      <ShieldCheckIcon className="badge-pitl-icon" />
      {full ? "PITL Verified" : "PITL"}
    </span>
  );
}
