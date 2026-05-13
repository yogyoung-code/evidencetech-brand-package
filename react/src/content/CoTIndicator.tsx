import type { CSSProperties, HTMLAttributes } from "react";

export type CoTState = "loading" | "done" | "error";

export interface CoTIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * 节点数。短推理用 5（默认），长推理用 7（04 §4）。
   * 6 是允许的中间态。
   */
  dots?: 5 | 6 | 7;
  /**
   * 状态：
   * - `loading`：循环呼吸（dot-spiral 演化）
   * - `done`：所有点同步淡出（产品侧通常切换到结果显示）
   * - `error`：所有点变灰 + 静止
   */
  state?: CoTState;
}

/**
 * CoT 思维链动画 · dot-spiral 演化版（04 §4）。
 *
 * 几何固定：6px 圆点 / 14px 间距 / 1.2s 周期 / 80ms 错峰。
 * 仅在 AI 处理上下文使用——禁止当作通用 spinner（04 §4 禁忌）。
 * 自动支持 `prefers-reduced-motion: reduce` 降级（由 ai-tokens.css 处理）。
 */
export function CoTIndicator({
  dots = 5,
  state = "loading",
  className,
  style,
  ...rest
}: CoTIndicatorProps) {
  const composed = ["cot-trace", `cot-trace--${state}`, className].filter(Boolean).join(" ");

  const stateStyle: CSSProperties | undefined =
    state === "error"
      ? { opacity: 0.4 }
      : state === "done"
        ? { opacity: 0 }
        : undefined;

  const finalStyle: CSSProperties | undefined =
    stateStyle || style ? { ...stateStyle, ...style } : undefined;

  return (
    <span
      className={composed}
      style={finalStyle}
      role="status"
      aria-live="polite"
      aria-label={
        state === "loading" ? "AI 推理中" : state === "error" ? "推理失败" : "推理完成"
      }
      {...rest}
    >
      {Array.from({ length: dots }, (_, i) => (
        <span
          key={i}
          className="cot-dot"
          style={state === "error" ? { animation: "none", opacity: 0.4 } : undefined}
        />
      ))}
    </span>
  );
}
