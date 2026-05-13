/**
 * 母品牌 logo 资产规格 — 与 assets/master-brand/ 12 文件结构一致。
 * 对应 02-brand-architecture.md §4.3.1 的变体选用规则。
 */

export type MasterBrandVariant =
  | "default"     // 原色 — 浅底
  | "reverse"     // 白 + 78% 白 slogan — 深底
  | "mono-navy"   // #001A51 单色 — 母品牌 navy 印刷
  | "mono-black"; // #000000 单色 — 传真/低预算印刷

export type MasterBrandLayout =
  | "en"    // 仅英文（dot-spiral + MedSci Healthcare + Improving Healthcare Quality）
  | "cn"    // 仅中文（dot-spiral + MedSci 梅斯 + 改善医疗质量）
  | "full"; // 原 .ai 完整画布（EN 在上 + CN 在下）

export const MASTER_BRAND_VARIANTS: readonly MasterBrandVariant[] = [
  "default",
  "reverse",
  "mono-navy",
  "mono-black",
] as const;

export const MASTER_BRAND_LAYOUTS: readonly MasterBrandLayout[] = ["en", "cn", "full"] as const;

/**
 * 02 §1.4 + master brand W2 决策：母品牌 logo 高度方向最小可用尺寸。
 * 低于此 dot-spiral 节点会糊化、字符细节丢失。
 */
export const MASTER_BRAND_MIN_HEIGHT_PX = 24;
