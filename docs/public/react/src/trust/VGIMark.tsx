import type { CSSProperties, HTMLAttributes } from "react";
import { ShieldOutlineIcon } from "../icons";
import type { LangProp, ReverseProp } from "../types";

export type VGIVariant = "compact" | "full" | "glyph";

export interface VGIMarkProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children" | "lang">,
    LangProp,
    ReverseProp {
  /**
   * - `compact`（默认）：胶囊 + glyph + "VGI™"
   * - `full`：胶囊 + glyph + "VGI · 验证型生成式智能™"（lang=cn）
   *           或 "VGI · Verified Generative Intelligence™"（lang=en）
   * - `glyph`：仅图标，无胶囊与文字（适合 favicon、移动端紧凑）
   */
  variant?: VGIVariant;
  /**
   * glyph 变体下的图标尺寸（默认 20px）。
   * compact / full 变体下此 prop 无效（尺寸由父级 font-size 决定）。
   */
  glyphSize?: number | string;
}

const FULL_TEXT_CN = "VGI · 验证型生成式智能";
const FULL_TEXT_EN = "VGI · Verified Generative Intelligence";

const REVERSE_STYLE: CSSProperties = {
  background: "transparent",
  borderColor: "rgba(255, 255, 255, 0.6)",
  color: "#FFFFFF",
};

/**
 * VGI Ingredient Mark · 跨产品共用的 ingredient 徽章。
 *
 * 形态：透明/半透白填充 + 产品色描边 + 产品色文字与 glyph。
 * Glyph 与 PITL 同款盾牌（语义都是"经验证"），但全部 stroke-only。
 *
 * "VGI™" 缩写永远用 Inter（不论中英文上下文）；全名部分按 lang 切换字体族。
 */
export function VGIMark({
  variant = "compact",
  lang = "cn",
  reverse = false,
  glyphSize = 20,
  className,
  style,
  ...rest
}: VGIMarkProps) {
  if (variant === "glyph") {
    const composed = ["vgi-mark-glyph-only", className].filter(Boolean).join(" ");
    return (
      <ShieldOutlineIcon
        size={glyphSize}
        title="VGI"
        className={composed}
        style={style}
        {...(rest as React.SVGAttributes<SVGSVGElement>)}
      />
    );
  }

  const isFull = variant === "full";
  const fullText = lang === "cn" ? FULL_TEXT_CN : FULL_TEXT_EN;
  const composed = ["vgi-mark", isFull && "vgi-mark--full", className]
    .filter(Boolean)
    .join(" ");
  const finalStyle: CSSProperties | undefined = reverse
    ? { ...REVERSE_STYLE, ...style }
    : style;

  return (
    <span className={composed} style={finalStyle} {...rest}>
      <ShieldOutlineIcon className="vgi-mark-icon" />
      {isFull ? (
        <>
          {fullText}
          <sup style={{ fontSize: "0.6em", marginLeft: "0.1em" }}>™</sup>
        </>
      ) : (
        <>
          VGI
          <sup style={{ fontSize: "0.6em", marginLeft: "0.05em" }}>™</sup>
        </>
      )}
    </span>
  );
}
