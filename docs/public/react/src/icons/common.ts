import type { SVGAttributes } from "react";

export interface IconProps extends Omit<SVGAttributes<SVGSVGElement>, "children"> {
  /** 图标尺寸。默认 `1em`，跟随父级 font-size。 */
  size?: number | string;
  /** 备用 `aria-label`。装饰性图标可省略，组件会自动 aria-hidden。 */
  title?: string;
}

export function resolveIconAria(title: string | undefined) {
  if (title) return { role: "img" as const, "aria-label": title };
  return { "aria-hidden": true as const };
}
