import type { HTMLAttributes, KeyboardEvent, MouseEvent } from "react";

export interface NanoCitationProps extends Omit<HTMLAttributes<HTMLSpanElement>, "onClick"> {
  /** 引用编号。显示为 `[n]`。 */
  index: number;
  /**
   * 用户激活回调（点击、Enter、Space）。
   * 产品侧实现侧边溯源面板（04 §3.4 规范）。
   */
  onActivate?: (index: number) => void;
}

/**
 * 纳米级引用 `[n]`：句末上标方括号数字。
 *
 * 规则（04 §3）：
 * - 多引用并列不加逗号：`...AI 加速发展[1][2][3]。`
 * - hover 底色 `rgba(0,0,0,0.05)`，250ms 渐入
 * - focus-visible 2px 产品色外环，offset 1px（无障碍）
 * - 键盘可达：Tab 抵达，Enter/Space 触发
 *
 * 本组件只负责 `[n]` 上标交互；侧边溯源面板请在产品侧实现。
 */
export function NanoCitation({
  index,
  onActivate,
  className,
  onKeyDown,
  ...rest
}: NanoCitationProps) {
  const composed = ["nano-citation", className].filter(Boolean).join(" ");

  const activate = () => {
    if (onActivate) onActivate(index);
  };

  const handleClick = (_e: MouseEvent<HTMLSpanElement>) => {
    activate();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (onKeyDown) onKeyDown(e);
    if (e.defaultPrevented) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      activate();
    }
  };

  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={`引用 ${index}`}
      className={composed}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      [{index}]
    </span>
  );
}
