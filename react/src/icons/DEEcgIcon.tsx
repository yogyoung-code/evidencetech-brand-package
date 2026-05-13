import type { IconProps } from "./common";
import { resolveIconAria } from "./common";

/**
 * DeepEvidence 心跳描线（ECG）。
 * 路径来自 preview/wordmarks-preview.html `#ic-de` symbol。
 */
export function DEEcgIcon({ size = "1em", title, ...rest }: IconProps) {
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
        d="M 2 12 H 4.48 A 2 2 0 0 1 6.41 13.46 L 8.76 21.82 A 0.25 0.25 0 0 0 9.24 21.82 L 14.76 2.18 A 0.25 0.25 0 0 1 15.24 2.18 L 17.59 10.54 A 2 2 0 0 0 19.51 12 H 22"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(0, 1)"
      />
    </svg>
  );
}
