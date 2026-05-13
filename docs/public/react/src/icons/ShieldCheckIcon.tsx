import type { IconProps } from "./common";
import { resolveIconAria } from "./common";

/**
 * PITL Verified glyph：盾牌 + 勾选（filled）。
 * 路径来自 04-visual-system.md §2.1。
 */
export function ShieldCheckIcon({ size = "1em", title, ...rest }: IconProps) {
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
        fill="currentColor"
      />
      <path
        d="M9 12 l2 2 4-4"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
