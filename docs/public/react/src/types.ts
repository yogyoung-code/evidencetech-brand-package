import type { Product, WordmarkSize } from "./tokens";

export type { Product, WordmarkSize };

/** 通用反白态：在产品 hero 渐变 / 深色背景下使用。 */
export interface ReverseProp {
  /** 反白态：用于深色背景。文字、图标、描边切换为白色 / 半透白。 */
  reverse?: boolean;
}

/** 适用于多产品着色的组件。未传则继承外层 BrandScope。 */
export interface ProductProp {
  /** 强制覆盖产品色。通常省略，由 `BrandScope` 提供。 */
  product?: Product;
}

export interface LangProp {
  /** 文案语言。中文为默认（v1.1 偏离条款）。 */
  lang?: "cn" | "en";
}
