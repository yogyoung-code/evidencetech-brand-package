import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import type { Product } from "../tokens";

const PRODUCT_CLASS: Record<Product, string> = {
  de: "brand-de",
  se: "brand-se",
  di: "brand-di",
  rcp: "brand-rcp",
};

export interface BrandScopeProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 产品 scope。会在容器加 `.brand-de / .brand-se / .brand-di / .brand-rcp`，
   * 让所有内层 component 通过 `--product-primary` 自动着色。
   */
  product: Product;
  /**
   * 渲染元素 tag（默认 `div`）。某些场景（如 footer 区或 inline 段）需要
   * 用 `span` 或 `section`，这里允许覆盖。
   */
  as?: "div" | "section" | "article" | "span";
  children?: ReactNode;
}

/**
 * 在产品根容器加 scope class，让信任层组件自动跟随产品色。
 * 等价于：`<div class="brand-de">…</div>`。
 *
 * 嵌套规则：四产品 scope 不允许相互嵌套。如需在同页同时出现 DE 与 SE 的徽章，
 * 用并列两个 `<BrandScope>` 而不是嵌套（命名冲突会导致 --product-primary 错位）。
 */
export function BrandScope({
  product,
  as = "div",
  className,
  children,
  ...rest
}: BrandScopeProps) {
  const Tag = as as "div";
  const composed = [PRODUCT_CLASS[product], className].filter(Boolean).join(" ");
  return (
    <Tag className={composed} {...rest}>
      {children}
    </Tag>
  );
}

/**
 * 同样的语义但只输出 inline style，不挂 class。
 * 用于无法引入 ai-tokens.css 的场景（如 Email 模板预览、PDF 渲染层）。
 */
export function BrandScopeInline({
  product,
  as = "span",
  style,
  className,
  children,
  ...rest
}: BrandScopeProps) {
  const Tag = as as "span";
  const composed = [PRODUCT_CLASS[product], className].filter(Boolean).join(" ");
  // CSS-in-JS 备份：在 ai-tokens.css 缺失时，--product-primary 仍然可用。
  const styleWithVar: CSSProperties = {
    // @ts-expect-error CSS variables not in CSSProperties
    "--product-primary": `var(--${product}-primary)`,
    ...style,
  };
  return (
    <Tag className={composed} style={styleWithVar} {...rest}>
      {children}
    </Tag>
  );
}
