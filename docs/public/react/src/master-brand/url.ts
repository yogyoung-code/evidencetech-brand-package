import type { MasterBrandLayout, MasterBrandVariant } from "./types";

export interface MasterBrandLogoUrlOptions {
  variant?: MasterBrandVariant;
  layout?: MasterBrandLayout;
  /**
   * 资产前缀 URL。常见值：
   * - `""`（默认）→ 假设 12 文件在站点根的 `/assets/master-brand/` 下
   * - `"https://cdn.example.com"` → CDN 托管
   * - `"/static"` → 应用 prefix
   * 不要在末尾加 `/` 与 `/master-brand/`，组件自动拼接。
   */
  baseUrl?: string;
}

/**
 * 把 variant + layout 解析成 SVG 文件名。
 *
 * @example
 *   masterBrandLogoFilename("reverse", "cn") // → "reverse-cn.svg"
 */
export function masterBrandLogoFilename(
  variant: MasterBrandVariant,
  layout: MasterBrandLayout,
): string {
  return `${variant}-${layout}.svg`;
}

/**
 * 生成完整 logo URL，供 React 组件 / Next/Image / Image Picker 直接使用。
 *
 * @example
 *   masterBrandLogoUrl({ variant: "reverse", layout: "cn", baseUrl: "/static" })
 *   // → "/static/master-brand/reverse-cn.svg"
 *
 *   masterBrandLogoUrl({})
 *   // → "/assets/master-brand/default-cn.svg"
 */
export function masterBrandLogoUrl({
  variant = "default",
  layout = "cn",
  baseUrl = "",
}: MasterBrandLogoUrlOptions = {}): string {
  const trimmed = baseUrl.replace(/\/$/, "");
  return `${trimmed}/assets/master-brand/${masterBrandLogoFilename(variant, layout)}`;
}
