/**
 * @yogyoung-code/ai-brand-kit · React 实现
 * 实现 v1.0 锁定的 11 个组件（信任层 7 + Logo 系统 4）。
 *
 * 接入流程：
 *   1. import "@yogyoung-code/ai-brand-kit/styles.css"
 *   2. <BrandScope product="de"> ... </BrandScope> 包住产品根
 *   3. 直接使用任一组件，--product-primary 自动着色
 */

// Primitives
export { BrandScope, BrandScopeInline } from "./primitives";
export type { BrandScopeProps } from "./primitives";

// Trust layer (7)
export {
  PITLBadge,
  AIOBadge,
  VGIMark,
} from "./trust";
export type {
  PITLBadgeProps,
  AIOBadgeProps,
  VGIMarkProps,
  VGIVariant,
} from "./trust";

export {
  NanoCitation,
  CoTIndicator,
  DiffView,
  DiffAdded,
  DiffRemoved,
  Disclosure,
} from "./content";
export type {
  NanoCitationProps,
  CoTIndicatorProps,
  CoTState,
  DiffViewProps,
  DisclosureProps,
  DisclosureLevelProps,
} from "./content";

// Logo system (4)
export { Logo, Wordmark, EndorsementSignature } from "./logo";
export type {
  LogoProps,
  WordmarkProps,
  EndorsementSignatureProps,
} from "./logo";

// Master brand (MedSci Healthcare)
export {
  MasterBrandLogo,
  CoBrandLockup,
  masterBrandLogoFilename,
  masterBrandLogoUrl,
  MASTER_BRAND_VARIANTS,
  MASTER_BRAND_LAYOUTS,
  MASTER_BRAND_MIN_HEIGHT_PX,
} from "./master-brand";
export type {
  MasterBrandLogoProps,
  CoBrandLockupProps,
  MasterBrandLogoUrlOptions,
  MasterBrandVariant,
  MasterBrandLayout,
} from "./master-brand";

// Icons (re-export for advanced use)
export {
  ShieldCheckIcon,
  ShieldOutlineIcon,
  FoldedDocCheckIcon,
  DEEcgIcon,
  SEBarsIcon,
  DIConstellationIcon,
  RCPPulseIcon,
} from "./icons";
export type { IconProps } from "./icons";

// Tokens
export {
  PRODUCT_PRIMARY,
  PRODUCT_PRIMARY_RGB,
  ENDORSEMENT_COLOR,
  ENDORSEMENT_COLOR_REVERSE,
  ENDORSEMENT_RATIO,
  ENDORSEMENT_MIN_WORDMARK_PX,
  WORDMARK_ICON_GAP_RATIO,
  WORDMARK_SIZES,
  WORDMARK_PARTS,
  RCP_WORDMARK_TEXT,
  RCP_FULL_NAME,
} from "./tokens";
export type { Product, WordmarkSize } from "./tokens";

// Shared types
export type { ReverseProp, ProductProp, LangProp } from "./types";
