import type { IconProps } from "./common";
import { resolveIconAria } from "./common";

/**
 * VGI Ingredient Mark glyph：盾牌 + 勾选（描边）。
 * 与 PITL 同款几何，但全部 stroke、不填充——表达"经验证"语义同时
 * 保留 VGI 的"ingredient（可移植到任何宿主品牌）"形式特征。
 */
export function ShieldOutlineIcon({ size = "1em", title, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      {...resolveIconAria(title)}
      {...rest}
    >
      <path
        d="M12 2 L4 6 v6 c0 5 3.5 9 8 10 c4.5-1 8-5 8-10 V6 L12 2 Z"
        stroke="currentColor"
        strokeWidth={2}
        fill="none"
      />
      <path
        d="M9 12 l2 2 4-4"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
