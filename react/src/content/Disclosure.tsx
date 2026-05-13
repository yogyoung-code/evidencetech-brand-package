import type { HTMLAttributes, ReactNode } from "react";

export interface DisclosureProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface DisclosureLevelProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  /**
   * 渲染元素 tag（默认 `p`）。L1 在 SEO 场景可改 `h2`/`h3`，
   * L3 在引用场景可改 `cite` 或 `aside`。
   */
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "div" | "aside" | "cite";
}

type LevelComponent = (props: DisclosureLevelProps) => JSX.Element;

interface DisclosureComponent {
  (props: DisclosureProps): JSX.Element;
  L1: LevelComponent;
  L2: LevelComponent;
  L3: LevelComponent;
}

function makeLevel(levelClass: string, defaultTag: DisclosureLevelProps["as"]): LevelComponent {
  const Level = ({ as, className, children, ...rest }: DisclosureLevelProps) => {
    const Tag = (as ?? defaultTag) as "p";
    const composed = [levelClass, className].filter(Boolean).join(" ");
    return (
      <Tag className={composed} {...rest}>
        {children}
      </Tag>
    );
  };
  return Level;
}

const DisclosureBase = ({ className, children, ...rest }: DisclosureProps) => {
  const composed = ["disclosure", className].filter(Boolean).join(" ");
  return (
    <div className={composed} {...rest}>
      {children}
    </div>
  );
};

/**
 * Progressive Disclosure 容器（04 §6）。
 *
 * 三层级 typography：
 * - **L1**（核心结论）：18px / 700 / 产品色
 * - **L2**（证据摘要）：16px / 400 / neutral-700
 * - **L3**（溯源细节）：14px / 400 / neutral-500
 *
 * 默认展开规则不在本组件管辖——产品侧按场景决定（紧急/警告全展开；
 * 桌面 L1+L2 默认 + L3 可展开；移动仅 L1 默认）。
 */
export const Disclosure: DisclosureComponent = Object.assign(DisclosureBase, {
  L1: makeLevel("disclosure-l1", "p"),
  L2: makeLevel("disclosure-l2", "p"),
  L3: makeLevel("disclosure-l3", "p"),
});
