import type { CSSProperties, HTMLAttributes } from "react";
import {
  RCP_WORDMARK_TEXT,
  WORDMARK_PARTS,
  WORDMARK_SIZES,
  type Product,
  type WordmarkSize,
} from "../tokens";
import type { ReverseProp } from "../types";

export interface WordmarkProps extends HTMLAttributes<HTMLSpanElement>, ReverseProp {
  /** 产品。决定 wordmark 拼写、着色锚点（DE/SE/DI 双色 / RCP 三字母全黑）。 */
  product: Product;
  /** 尺寸阶梯。等价于 02 §1.4 的六档。也可传具体 px。 */
  size?: WordmarkSize | number;
}

function resolveFontSize(size: WordmarkSize | number | undefined): number {
  if (typeof size === "number") return size;
  if (size && size in WORDMARK_SIZES) return WORDMARK_SIZES[size].wordmarkPx;
  return WORDMARK_SIZES["wm-md"].wordmarkPx; // 默认 32px
}

/**
 * Wordmark — 仅文字部分（不带图标）。
 *
 * 用法（02 §1.8）：与完整 `Logo` 对等的合法呈现形态，适用全部场景——
 * 紧凑环境（标签页 title、CSV 文件名、文本邮件签名）与常规视觉场景
 * （hero 标题、营销 banner、社媒头像、文档章节标题等）皆可。
 *
 * RCP 在此组件中渲染为纯黑 "RCP" 三字母——**不带贯穿横线**
 * （横线视为完整 logo 的视觉资产）。如需横线，请用 `<Logo product="rcp">`。
 */
export function Wordmark({
  product,
  size = "wm-md",
  reverse = false,
  className,
  style,
  ...rest
}: WordmarkProps) {
  const fontPx = resolveFontSize(size);
  const composed = ["wordmark", `wordmark--${product}`, className].filter(Boolean).join(" ");

  const baseStyle: CSSProperties = {
    fontFamily: "var(--wordmark-font, 'Teko', system-ui, sans-serif)",
    fontWeight: "var(--wordmark-weight, 500)" as unknown as number,
    lineHeight: "var(--wordmark-line-height, 1.2)" as unknown as number,
    letterSpacing: "var(--wordmark-letter-spacing, -0.025em)",
    fontSize: `${fontPx}px`,
    whiteSpace: "nowrap",
    display: "inline-block",
    ...style,
  };

  if (product === "rcp") {
    return (
      <span className={composed} style={baseStyle} {...rest}>
        <span style={{ color: reverse ? "#FFFFFF" : "#000000" }}>{RCP_WORDMARK_TEXT}</span>
      </span>
    );
  }

  const parts = WORDMARK_PARTS[product];
  return (
    <span className={composed} style={baseStyle} {...rest}>
      <span
        className="wm-prefix"
        style={{
          color: reverse ? "#FFFFFF" : "var(--product-primary)",
        }}
      >
        {parts.prefix}
      </span>
      <span
        className="wm-suffix"
        style={{
          color: reverse ? "#FFFFFF" : "#000000",
        }}
      >
        {parts.suffix}
      </span>
    </span>
  );
}
