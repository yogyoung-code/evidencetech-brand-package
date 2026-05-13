import type { HTMLAttributes } from "react";

export type DiffViewProps = HTMLAttributes<HTMLSpanElement>;

/**
 * Diff View · AI 输出 vs 专家修订（04 §5）。
 *
 * 红色（删除线 + neutral 红底）= AI 错误 / 待删除
 * 绿色（success-500 + success-100 底）= 专家新增
 *
 * 复用母品牌 error / success token，**不开新色**——产品主色不能用作新增色，
 * 否则与产品识别冲突（04 §5 禁忌）。
 */

export function DiffRemoved({ className, children, ...rest }: DiffViewProps) {
  const composed = ["diff-removed", className].filter(Boolean).join(" ");
  return (
    <span className={composed} {...rest}>
      {children}
    </span>
  );
}

export function DiffAdded({ className, children, ...rest }: DiffViewProps) {
  const composed = ["diff-added", className].filter(Boolean).join(" ");
  return (
    <span className={composed} {...rest}>
      {children}
    </span>
  );
}

/**
 * 命名空间导出，方便用 `<DiffView.Removed>` / `<DiffView.Added>` 风格调用。
 * 也可直接 import `DiffRemoved` / `DiffAdded`。
 */
export const DiffView = {
  Removed: DiffRemoved,
  Added: DiffAdded,
};
