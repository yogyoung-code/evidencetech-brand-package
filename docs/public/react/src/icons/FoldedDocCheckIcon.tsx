import type { IconProps } from "./common";
import { resolveIconAria } from "./common";

/**
 * AIO Official glyph：折角文件 + 勾选（filled）。
 *
 * v0.2 修订（04）：原 "印章 + 虚线 + 勾选" 三层 glyph 在 12px 下不清晰。
 * 改为 "折角文件 + 勾选" 后，与 "官方核准的说明书文件" 语义直接对齐。
 *
 * 注意：path 中 stroke="white" 的 fold-line 用于在深灰底（neutral-700）上
 * 显示折角细节。AIO 徽章默认是 #334155 填充，因此白色 stroke 可见。
 */
export function FoldedDocCheckIcon({ size = "1em", title, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      {...resolveIconAria(title)}
      {...rest}
    >
      <path d="M5 3 V21 H19 V9 L13 3 Z" fill="currentColor" />
      <path
        d="M13 3 V9 H19"
        stroke="#FFFFFF"
        strokeWidth={0.6}
        opacity={0.5}
        fill="none"
      />
      <path
        d="M8.5 14 l2.5 2.5 5-5"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
