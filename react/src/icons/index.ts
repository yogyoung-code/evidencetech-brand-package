/**
 * Icon SVG 组件集。所有 path 用 `currentColor`，由外层 component 决定色值。
 *
 * 几何来源（不可改）：
 * - 信任层 3 个：04 §2 + ai-tokens.css 中给出的 SVG path
 * - 产品 4 个：02 §1.3 + preview/wordmarks-preview.html 的 <symbol> defs
 *
 * 这些路径是 v1.0 锁定决策，任何修改按 06 §2 走 RFC。
 */
export { ShieldCheckIcon } from "./ShieldCheckIcon";
export { ShieldOutlineIcon } from "./ShieldOutlineIcon";
export { FoldedDocCheckIcon } from "./FoldedDocCheckIcon";
export { DEEcgIcon } from "./DEEcgIcon";
export { SEBarsIcon } from "./SEBarsIcon";
export { DIConstellationIcon } from "./DIConstellationIcon";
export { RCPPulseIcon } from "./RCPPulseIcon";
export type { IconProps } from "./common";
