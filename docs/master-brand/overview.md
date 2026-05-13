# 母品牌（MedSci Healthcare）总览

AI Brand Kit 挂在 MedSci Healthcare Brand Guidelines v1.1 之下。母品牌资产由用户上传的 `梅斯logo中英文版.ai` 派生，输出 4 变体 × 3 构图 = 12 SVG 与配套规范文档。

## 4 变体 × 3 构图

| 变体 | EN（仅英文） | CN（仅中文） | Full（双行） |
|---|---|---|---|
| **Default** 多色 | [`default-en.svg`](/assets/master-brand/default-en.svg) | [`default-cn.svg`](/assets/master-brand/default-cn.svg) | [`default-full.svg`](/assets/master-brand/default-full.svg) |
| **Reverse** 反白 | [`reverse-en.svg`](/assets/master-brand/reverse-en.svg) | [`reverse-cn.svg`](/assets/master-brand/reverse-cn.svg) | [`reverse-full.svg`](/assets/master-brand/reverse-full.svg) |
| **Mono Navy** 单色深蓝 | [`mono-navy-en.svg`](/assets/master-brand/mono-navy-en.svg) | [`mono-navy-cn.svg`](/assets/master-brand/mono-navy-cn.svg) | [`mono-navy-full.svg`](/assets/master-brand/mono-navy-full.svg) |
| **Mono Black** 单色黑 | [`mono-black-en.svg`](/assets/master-brand/mono-black-en.svg) | [`mono-black-cn.svg`](/assets/master-brand/mono-black-cn.svg) | [`mono-black-full.svg`](/assets/master-brand/mono-black-full.svg) |

实时预览见 [母品牌 logo 变体 demo](/demos/master-brand-logos)。

## 配套规范（v1.0 · 2026-05-06）

| 文档 | 内容 |
|---|---|
| [Clear-Space 与最小尺寸](/master-brand/clear-space) | ½X 最小净空 · 1X 推荐 · 数字 / 印刷最小尺寸表 · 校验清单 |
| [A11y 对比度（64 组）](/master-brand/a11y) | 4 变体 × 8 代表背景下 WCAG 2.1 评级 + 推荐使用规则 + 红线 |
| [图层结构](/master-brand/layers) | 6 层索引 + 颜色 token 替换矩阵 + 允许 / 不允许的拆分 + viewBox 裁切方法 |
| [使用规范（usage.html 视觉档案）](/master-brand/usage) | 把上面三件 + PNG 栅格阶梯合并为视觉档案（iframe 嵌入） |

## 75 PNG 栅格

5 个高度档：24 / 48 / 96 / 192 / 512 px，每变体 × 每构图 5 张；reverse 额外提供深底衬底版。共 75 张 + manifest.json。

完整索引：[`/assets/master-brand/png/manifest.json`](/assets/master-brand/png/manifest.json)
所有 PNG：[`/assets/master-brand/png/`](/assets/master-brand/png/)

## 颜色配方（default 变体）

| Token | Hex | 角色 |
|---|---|---|
| `--master-navy` | `#001A51` | Icon 主深色 |
| `--master-blue` | `#005AA4` | Icon 中段 + Wordmark |
| `--master-cyan` | `#00AEDB` | Icon 高光 |
| `--master-gray` | `#666666` | Slogan |

`reverse` 把全部替换为 `#FFFFFF`，slogan 用 `rgba(255,255,255,0.78)`。
`mono-navy` 全部 `#001A51`。
`mono-black` 全部 `#000000`。

## 协同 AI Brand Kit

母品牌偏离条款（已 Sponsor 拍板）见 [总览 §2](/foundation/overview#_2-经-sponsor-拍板的-v1-1-母品牌偏离条款)。AI Brand Kit 在母品牌之上：
- 沿用：字距 / 间距 / 圆角 / a11y 基线 / "no emoji" / "no AI 医学影像" 等红线
- 偏离：色彩（4 产品独立色）/ 主语言（中文）/ 字体（新增 Teko + IBM Plex）/ 渐变（每产品 hero）

## React 包接入

```jsx
import { MasterBrandLogo, CoBrandLockup } from '@yogyoung-code/ai-brand-kit';

<MasterBrandLogo variant="default" comp="full" />
<MasterBrandLogo variant="reverse" comp="cn" />
<CoBrandLockup product="de" master="default" />
```

详见 [组件 → 母品牌 2 组件](/components/master-brand-comp)。

## 后续 v1.1 增量（等母品牌团队补）

- Slogan 反白色官方 sign-off（当前用 78% 白）
- Logo motion 反白态
- ICC color profile + Pantone 印刷色值
- 视频片头模板
