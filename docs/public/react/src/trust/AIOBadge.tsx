import type { CSSProperties, HTMLAttributes } from "react";
import { FoldedDocCheckIcon } from "../icons";
import type { ReverseProp } from "../types";

export interface AIOBadgeProps extends HTMLAttributes<HTMLSpanElement>, ReverseProp {
  /**
   * 显示完整描述 "AIO Official"。默认仅显示 "AIO" 三字母。
   * 注意：AIO = AI Optimization（AI 检索优化），**不是 All-In-One**
   * （HANDOFF §6 已澄清的常见误读）。
   */
  full?: boolean;
}

const REVERSE_STYLE: CSSProperties = {
  background: "rgba(255, 255, 255, 0.10)",
  color: "#FFFFFF",
};

/**
 * AIO Official 徽章。经 DeepLabeling 治理的厂家官方核准说明书内容。
 *
 * 默认：深灰填充（neutral-700） + 产品色文字 + "AIO" 三字母。
 * `full`：显示 "AIO Official"。
 * `reverse`：深色背景下使用 `rgba(255,255,255,0.10)` 半透白填充 + 白文字。
 */
export function AIOBadge({
  full = false,
  reverse = false,
  className,
  style,
  ...rest
}: AIOBadgeProps) {
  const composed = ["badge-aio", full && "badge-aio--full", className]
    .filter(Boolean)
    .join(" ");
  const finalStyle: CSSProperties | undefined = reverse
    ? { ...REVERSE_STYLE, ...style }
    : style;

  return (
    <span className={composed} style={finalStyle} {...rest}>
      <FoldedDocCheckIcon className="badge-aio-icon" />
      {full ? "AIO Official" : "AIO"}
    </span>
  );
}
