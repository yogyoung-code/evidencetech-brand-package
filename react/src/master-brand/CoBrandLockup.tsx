import type { CSSProperties, HTMLAttributes } from "react";
import { Logo } from "../logo";
import { WORDMARK_SIZES, type Product, type WordmarkSize } from "../tokens";
import { MasterBrandLogo } from "./MasterBrandLogo";
import type { MasterBrandLayout, MasterBrandVariant } from "./types";

export interface CoBrandLockupProps extends HTMLAttributes<HTMLDivElement> {
  /** 产品（DE / SE / DI / RCP）。决定右侧 wordmark。 */
  product: Product;
  /**
   * 产品 wordmark 尺寸。默认 `wm-md`（32px）。
   * 也可传具体 px。母品牌 logo 高度 = 此值 × 1.4（02 §4.3 规则）。
   */
  productSize?: WordmarkSize | number;
  /**
   * 母品牌 logo 变体（02 §4.3.1）：
   * - `default`（默认）→ 浅底
   * - `reverse` → 深底（也会让产品侧自动 reverse）
   * - `mono-navy` → 母品牌 navy 单色印刷
   * - `mono-black` → 传真 / 单色复印
   *
   * 注：mono 变体下产品 wordmark 仍按产品色渲染——如需"全 lockup 单色"，
   * 在容器外层用 CSS filter 或单色覆盖处理（02 §4.3.1 禁忌：不允许在 mono
   * 单色场景下保留产品色，需消费方手动）。
   */
  masterBrandVariant?: MasterBrandVariant;
  /**
   * 母品牌 logo 构图：英文 / 中文 / 完整双语。默认 `cn`。
   */
  masterBrandLayout?: MasterBrandLayout;
  /**
   * 是否在产品 wordmark 下方加 endorsement signature。
   * 默认与 `masterBrandLayout` 同语种（cn → cn / en → en / full → cn）。
   * 传 `false` 显式关闭。
   */
  endorsement?: "cn" | "en" | false;
  /**
   * 反白态。等同于 `masterBrandVariant="reverse"` + 产品 Logo 的 reverse=true。
   * 用于 hero 渐变 / 深底场景。
   */
  reverse?: boolean;
  /**
   * 母品牌 SVG 资产前缀 URL（默认 ""，即站点根 `/assets/master-brand/`）。
   */
  baseUrl?: string;
  /**
   * 母品牌 logo 与产品 wordmark 之间的水平间距（CSS px）。默认 24px。
   * 中间还有 1px neutral-300 竖分隔线，spec 02 §4.3。
   */
  gap?: number;
}

function resolveProductPx(size: WordmarkSize | number | undefined): number {
  if (typeof size === "number") return size;
  if (size && size in WORDMARK_SIZES) return WORDMARK_SIZES[size].wordmarkPx;
  return WORDMARK_SIZES["wm-md"].wordmarkPx;
}

/**
 * Co-brand Lockup · 母品牌 logo + AI 产品 wordmark 横向并排（02 §4.3）。
 *
 * 用于 IR 材料、M&A / 合作协议封面、产品 about 页"集团关系"区。
 *
 * 排版规则（自动按 spec 计算）：
 * - 母品牌 logo 高度 = 产品 wordmark 高度 × 1.4（视觉重量平衡）
 * - 中间 1px `neutral-300` 竖分隔线
 * - 竖分隔线高度 = 母品牌 logo 高度 × 0.6
 * - 反白态下分隔线 → `rgba(255,255,255,0.3)`
 *
 * 禁忌（02 §6 / §4.3.1）：
 * - 不允许重新着色母品牌 logo
 * - 不允许在 mono 单色场景下保留 AI 子品牌彩色（消费方需手动处理）
 * - 不允许把产品 wordmark 放在母品牌 logo 左侧（顺序固定：母左 / 产右）
 */
export function CoBrandLockup({
  product,
  productSize = "wm-md",
  masterBrandVariant,
  masterBrandLayout = "cn",
  endorsement,
  reverse = false,
  baseUrl = "",
  gap = 24,
  className,
  style,
  ...rest
}: CoBrandLockupProps) {
  // reverse 顶层 → 母品牌 reverse + 产品 reverse
  const effectiveVariant = reverse ? "reverse" : (masterBrandVariant ?? "default");

  // 尺寸
  const productPx = resolveProductPx(productSize);
  const masterBrandPx = Math.round(productPx * 1.4);
  const dividerPx = Math.round(masterBrandPx * 0.6);

  // 默认 endorsement 跟 masterBrandLayout 走（cn/en）；full 默认中文
  const endorsementResolved =
    endorsement === false
      ? undefined
      : (endorsement ?? (masterBrandLayout === "en" ? "en" : "cn"));

  const dividerColor = reverse ? "rgba(255, 255, 255, 0.3)" : "#CBD5E1"; // neutral-300

  const containerStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap,
    ...style,
  };

  const dividerStyle: CSSProperties = {
    width: 1,
    height: dividerPx,
    background: dividerColor,
    flexShrink: 0,
  };

  const composed = ["co-brand-lockup", className].filter(Boolean).join(" ");

  return (
    <div className={composed} style={containerStyle} {...rest}>
      <MasterBrandLogo
        variant={effectiveVariant}
        layout={masterBrandLayout}
        height={masterBrandPx}
        baseUrl={baseUrl}
      />
      <span aria-hidden style={dividerStyle} />
      <Logo
        product={product}
        size={typeof productSize === "number" ? productSize : productSize}
        reverse={reverse}
        endorsement={endorsementResolved}
      />
    </div>
  );
}
