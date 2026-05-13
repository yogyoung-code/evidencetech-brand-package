import type { CSSProperties, HTMLAttributes } from "react";
import { ENDORSEMENT_RATIO, ENDORSEMENT_MIN_WORDMARK_PX } from "../tokens";
import type { LangProp, ReverseProp } from "../types";

export interface EndorsementSignatureProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children" | "lang">,
    LangProp,
    ReverseProp {
  /**
   * 直接指定签名字号（px）。优先级最高。
   * 既不传 size 也不传 wordmarkSize 时回落到 `13`（= 32px wordmark × 0.42）。
   */
  size?: number;
  /**
   * 派生模式：传入对应 wordmark 字号，签名字号 = wordmark × 0.42（02 §2.2）。
   * 当 wordmark < 28px 时自动 **不渲染**（视觉太小不可读）。
   */
  wordmarkSize?: number;
}

const CN_TEXT = "由 梅斯健康 出品";
const EN_TEXT = "by MedSci Healthcare";

/**
 * Endorsement Signature · "由 梅斯健康 出品" / "by MedSci Healthcare"。
 *
 * 颜色固定 `#666666`（v0.6 决策，与母品牌 v1.1 Logo Slogan grey 同源）。
 * 反白态使用 `rgba(255,255,255,0.78)`。
 *
 * 默认与 wordmark 左对齐，垂直距 wordmark cap-height × 0.30（约字号 × 0.21）。
 * 同页/同屏 endorsement 必须语言一致（02 §2.5）。
 */
export function EndorsementSignature({
  lang = "cn",
  reverse = false,
  size,
  wordmarkSize,
  className,
  style,
  ...rest
}: EndorsementSignatureProps) {
  // wordmark < 28px 时不渲染（02 §2.2）。
  if (wordmarkSize !== undefined && wordmarkSize < ENDORSEMENT_MIN_WORDMARK_PX) {
    return null;
  }

  const fontSize =
    size ??
    (wordmarkSize !== undefined
      ? Math.round(wordmarkSize * ENDORSEMENT_RATIO)
      : 13);

  const composed = [
    "endorsement-signature",
    lang === "en" && "endorsement-signature--en",
    reverse && "endorsement-signature--reverse",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const finalStyle: CSSProperties = { fontSize: `${fontSize}px`, ...style };

  return (
    <span className={composed} style={finalStyle} {...rest}>
      {lang === "cn" ? CN_TEXT : EN_TEXT}
    </span>
  );
}
