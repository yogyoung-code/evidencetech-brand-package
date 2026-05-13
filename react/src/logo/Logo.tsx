import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import {
  WORDMARK_ICON_GAP_RATIO,
  WORDMARK_SIZES,
  RCP_WORDMARK_TEXT,
  WORDMARK_PARTS,
  type Product,
  type WordmarkSize,
} from "../tokens";
import {
  DEEcgIcon,
  DIConstellationIcon,
  RCPPulseIcon,
  SEBarsIcon,
  type IconProps,
} from "../icons";
import type { ReverseProp } from "../types";
import { EndorsementSignature } from "./EndorsementSignature";

const PRODUCT_ICON: Record<Product, (props: IconProps) => ReactNode> = {
  de: DEEcgIcon,
  se: SEBarsIcon,
  di: DIConstellationIcon,
  rcp: RCPPulseIcon,
};

export interface LogoProps extends HTMLAttributes<HTMLSpanElement>, ReverseProp {
  /** 产品。决定 icon、wordmark 拼写、是否带 RCP 贯穿横线。 */
  product: Product;
  /** 尺寸阶梯（02 §1.4）。也可传具体 px。 */
  size?: WordmarkSize | number;
  /**
   * 在 wordmark 下方渲染 endorsement signature。
   * 传 `"cn"` 或 `"en"` 切换语种；不传则不显示。
   * 当尺寸 < `wm-sm`（28px）时签名自动隐藏（02 §2.2）。
   */
  endorsement?: "cn" | "en";
}

function resolveFontSize(size: WordmarkSize | number | undefined): number {
  if (typeof size === "number") return size;
  if (size && size in WORDMARK_SIZES) return WORDMARK_SIZES[size].wordmarkPx;
  return WORDMARK_SIZES["wm-md"].wordmarkPx;
}

function resolveIconSize(size: WordmarkSize | number | undefined): number {
  if (typeof size === "number") return Math.round(size * 1.06);
  if (size && size in WORDMARK_SIZES) return WORDMARK_SIZES[size].iconPx;
  return WORDMARK_SIZES["wm-md"].iconPx;
}

/**
 * 完整 Logo · icon + wordmark（可选 endorsement signature）。
 *
 * - DE / SE / DI：图标（产品色） + 双色 wordmark（prefix 产品色 + suffix 黑）
 * - RCP：图标（产品色） + "RCP" 三字母全黑 + **贯穿横线**（产品色，
 *   icon 右缘 -2px → P 字母右缘 +0.15em，z-index 在文字下方但在 icon 之上）
 *
 * `reverse` 反白态：所有色全部翻为白色（02 §1.6）；RCP 横线一并白色（02 §1.7.1）。
 */
export function Logo({
  product,
  size = "wm-md",
  reverse = false,
  endorsement,
  className,
  style,
  ...rest
}: LogoProps) {
  const fontPx = resolveFontSize(size);
  const iconPx = resolveIconSize(size);
  const gapPx = Math.round(fontPx * WORDMARK_ICON_GAP_RATIO);

  const Icon = PRODUCT_ICON[product];
  const composed = ["logo", `logo--${product}`, className].filter(Boolean).join(" ");

  // Logo 容器：横向排布 icon + wordmark，签名在下方。
  const containerStyle: CSSProperties = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
    ...style,
  };

  const rowStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    isolation: "isolate", // 让 z-index 在 RCP 横线场景下生效
    position: "relative",
  };

  const iconColor = reverse ? "#FFFFFF" : `var(--${product}-primary)`;

  // RCP 分支：包含贯穿横线
  if (product === "rcp") {
    const overshoot = "var(--rcp-throughline-overshoot, 0.15em)";
    const lineThickness = "var(--rcp-throughline-thickness, 0.09em)";
    const lineBottom = "var(--rcp-throughline-anchor-bottom, 40%)";
    const lineColor = reverse ? "#FFFFFF" : "var(--rcp-throughline-color, #0F62FE)";

    return (
      <span className={composed} style={containerStyle} {...rest}>
        <span style={rowStyle}>
          <span
            className="logo-icon"
            style={{
              color: iconColor,
              width: iconPx,
              height: iconPx,
              flexShrink: 0,
              zIndex: 2,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon size={iconPx} title="RCP" />
          </span>
          <span
            className="rcp-text"
            style={{
              fontFamily: "var(--wordmark-font, 'Teko', system-ui, sans-serif)",
              fontWeight: "var(--wordmark-weight, 600)" as unknown as number,
              lineHeight: "var(--wordmark-line-height, 0.85)" as unknown as number,
              letterSpacing: "var(--wordmark-letter-spacing, 0)",
              fontSize: `${fontPx}px`,
              color: reverse ? "#FFFFFF" : "#000000",
              position: "relative",
              paddingLeft: gapPx,
              zIndex: 2,
              whiteSpace: "nowrap",
            }}
          >
            {RCP_WORDMARK_TEXT}
            <span
              aria-hidden
              style={{
                content: '""',
                position: "absolute",
                left: "-2px",
                right: `calc(-1 * ${overshoot})`,
                bottom: lineBottom,
                height: lineThickness,
                background: lineColor,
                borderRadius: "2px",
                zIndex: -1,
                display: "block",
              }}
            />
          </span>
        </span>
        {endorsement && fontPx >= 28 ? (
          <span
            style={{
              marginTop: Math.round(fontPx * 0.21),
              alignSelf: "flex-start",
            }}
          >
            <EndorsementSignature
              lang={endorsement}
              wordmarkSize={fontPx}
              reverse={reverse}
            />
          </span>
        ) : null}
      </span>
    );
  }

  // DE / SE / DI 分支：双色 wordmark
  const parts = WORDMARK_PARTS[product];
  return (
    <span className={composed} style={containerStyle} {...rest}>
      <span style={rowStyle}>
        <span
          className="logo-icon"
          style={{
            color: iconColor,
            width: iconPx,
            height: iconPx,
            flexShrink: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon size={iconPx} title={`${parts.prefix}${parts.suffix}`} />
        </span>
        <span
          className="wordmark"
          style={{
            fontFamily: "var(--wordmark-font, 'Teko', system-ui, sans-serif)",
            fontWeight: "var(--wordmark-weight, 600)" as unknown as number,
            lineHeight: "var(--wordmark-line-height, 0.85)" as unknown as number,
            letterSpacing: "var(--wordmark-letter-spacing, 0)",
            fontSize: `${fontPx}px`,
            paddingLeft: gapPx,
            whiteSpace: "nowrap",
          }}
        >
          <span
            className="wm-prefix"
            style={{ color: reverse ? "#FFFFFF" : `var(--${product}-primary)` }}
          >
            {parts.prefix}
          </span>
          <span
            className="wm-suffix"
            style={{ color: reverse ? "#FFFFFF" : "#000000" }}
          >
            {parts.suffix}
          </span>
        </span>
      </span>
      {endorsement && fontPx >= 28 ? (
        <span
          style={{
            marginTop: Math.round(fontPx * 0.21),
            alignSelf: "flex-start",
          }}
        >
          <EndorsementSignature
            lang={endorsement}
            wordmarkSize={fontPx}
            reverse={reverse}
          />
        </span>
      ) : null}
    </span>
  );
}
