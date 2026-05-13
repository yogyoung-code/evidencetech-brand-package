import type { ImgHTMLAttributes } from "react";
import {
  type MasterBrandLayout,
  type MasterBrandVariant,
  MASTER_BRAND_MIN_HEIGHT_PX,
} from "./types";
import { masterBrandLogoUrl } from "./url";

export interface MasterBrandLogoProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "height" | "width" | "alt"> {
  /**
   * 变体：默认彩色 / 反白 / 单色 navy / 单色黑。
   * 对应 02 §4.3.1 的场景表。
   */
  variant?: MasterBrandVariant;
  /**
   * 构图：英文 / 中文 / 双语。
   */
  layout?: MasterBrandLayout;
  /**
   * 高度（CSS px）。最小 24，低于此触发警告。默认 32。
   * 宽度自动按 SVG 宽高比保持。
   */
  height?: number;
  /**
   * 资产前缀 URL（默认 ""，即站点根 `/assets/master-brand/`）。
   * 详见 `masterBrandLogoUrl`。
   */
  baseUrl?: string;
  /**
   * a11y label。如不传，按 layout / variant 推一个合理默认值。
   */
  alt?: string;
}

const DEFAULT_ALTS: Record<MasterBrandLayout, string> = {
  en: "MedSci Healthcare",
  cn: "MedSci 梅斯",
  full: "MedSci Healthcare · 梅斯",
};

/**
 * 母品牌 MedSci Healthcare 完整 logo（dot-spiral + wordmark + slogan）。
 *
 * 用法：
 *   1. 把 `assets/master-brand/` 里的 12 个 SVG 复制到你的站点静态资源目录
 *      （例：`public/assets/master-brand/`）
 *   2. 渲染组件，组件内部生成 `<img src="/assets/master-brand/{variant}-{layout}.svg">`
 *
 *   也可以传 `baseUrl` 指向 CDN 或自定义 prefix。
 *
 * 注意：
 *   - 母品牌 logo 不允许重新着色 / 拉伸 / 添加阴影（02 §6 红线沿用）
 *   - 反白 + mono 不允许混用在同一画面（02 §4.3.1 禁忌）
 *   - 高度 < 24px 时 dot-spiral 糊化，组件控制台 warn
 *   - 与 AI 子品牌产品 wordmark 同框时，按 02 §4.3 的 lockup 规则布局
 */
export function MasterBrandLogo({
  variant = "default",
  layout = "cn",
  height = 32,
  baseUrl = "",
  alt,
  className,
  style,
  ...rest
}: MasterBrandLogoProps) {
  if (typeof window !== "undefined" && height < MASTER_BRAND_MIN_HEIGHT_PX) {
    // eslint-disable-next-line no-console
    console.warn(
      `[MasterBrandLogo] height=${height}px 低于最小可用尺寸 ${MASTER_BRAND_MIN_HEIGHT_PX}px。dot-spiral 节点将糊化。`,
    );
  }

  const src = masterBrandLogoUrl({ variant, layout, baseUrl });
  const accessibleAlt = alt ?? DEFAULT_ALTS[layout];

  return (
    <img
      src={src}
      alt={accessibleAlt}
      height={height}
      style={{ width: "auto", height, ...style }}
      className={className}
      {...rest}
    />
  );
}
