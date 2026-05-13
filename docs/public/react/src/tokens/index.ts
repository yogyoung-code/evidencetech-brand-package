/**
 * 四产品 primary token + endorsement signature 灰度 + 关键派生比例。
 *
 * 这些常量与 `ai-tokens.css` 中的 CSS 变量值严格一致；任何变更两处必须同步
 * 并按 `06-governance.md` §2 流程走 RFC。
 *
 * 不要直接把这些值塞进组件 inline style；优先依赖 CSS 变量与产品 scope class。
 * 这里导出仅供消费方需要在 JS 侧（例如 Canvas 渲染、PDF 生成）拿到色值时使用。
 */

export type Product = "de" | "se" | "di" | "rcp";

export type WordmarkSize = "wm-xl" | "wm-lg" | "wm-md" | "wm-sm" | "wm-xs" | "wm-min";

export const PRODUCT_PRIMARY: Record<Product, string> = {
  de: "#2563EB", // DeepEvidence · Tailwind blue-600
  se: "#9333EA", // SeekEvidence · Tailwind purple-600
  di: "#0891B2", // DeepInsight · teal-600（暂定）
  rcp: "#0F62FE", // Rapid Clinical Pulse · IBM Blue 60
};

export const PRODUCT_PRIMARY_RGB: Record<Product, [number, number, number]> = {
  de: [37, 99, 235],
  se: [147, 51, 234],
  di: [8, 145, 178],
  rcp: [15, 98, 254],
};

/** 母品牌 v1.1 中专用于 Logo Slogan 的 neutral-600 灰度。 */
export const ENDORSEMENT_COLOR = "#666666";
export const ENDORSEMENT_COLOR_REVERSE = "rgba(255, 255, 255, 0.78)";

/** signature 字号 = wordmark 字号 × 此比例（参 02 §2.2）。 */
export const ENDORSEMENT_RATIO = 0.42;

/** wordmark 与 icon 间距 = wordmark 字号 × 此比例（参 02 §1.3）。 */
export const WORDMARK_ICON_GAP_RATIO = 0.2;

/**
 * Wordmark 尺寸阶梯（02 §1.4）。
 * key = size token；value = [wordmarkPx, iconPx]。
 */
export const WORDMARK_SIZES: Record<WordmarkSize, { wordmarkPx: number; iconPx: number }> = {
  "wm-xl": { wordmarkPx: 88, iconPx: 95 },
  "wm-lg": { wordmarkPx: 48, iconPx: 52 },
  "wm-md": { wordmarkPx: 32, iconPx: 34 },
  "wm-sm": { wordmarkPx: 28, iconPx: 30 },
  "wm-xs": { wordmarkPx: 20, iconPx: 22 },
  "wm-min": { wordmarkPx: 16, iconPx: 18 },
};

/** wordmark < 28px 时 endorsement signature 不显示。参 02 §2.2。 */
export const ENDORSEMENT_MIN_WORDMARK_PX = 28;

/** Wordmark 双色构造（DE/SE/DI）。RCP 不在此表，由独立组件承载。 */
export const WORDMARK_PARTS: Record<
  Exclude<Product, "rcp">,
  { prefix: string; suffix: string }
> = {
  de: { prefix: "Deep", suffix: "Evidence" },
  se: { prefix: "Seek", suffix: "Evidence" },
  di: { prefix: "Deep", suffix: "Insight" },
};

/** RCP 永远是 "RCP" 三字母全黑 + 彩色贯穿横线。参 02 §1.2.2 / §1.2.3。 */
export const RCP_WORDMARK_TEXT = "RCP";
export const RCP_FULL_NAME = "Rapid Clinical Pulse";
