# Token 浏览器

`ai-tokens.css` 中所有 CSS 变量的可视化检索。点击色块或 token 名复制到剪贴板。源文件：[`/ai-tokens.css`](/ai-tokens.css)。

<div id="token-browser"></div>

<style>
.tb-section { margin: 32px 0; }
.tb-section h3 { font-size: 16px; margin: 0 0 12px; color: var(--vp-c-text-1); }
.tb-grid { display: grid; gap: 8px; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); }
.tb-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s;
}
.tb-card:hover { border-color: var(--vp-c-brand-1); transform: translateY(-1px); }
.tb-card.copied { border-color: #16A34A; }
.tb-swatch {
  width: 36px; height: 36px;
  border-radius: 6px;
  flex-shrink: 0;
  border: 1px solid rgba(0,0,0,0.05);
  position: relative;
}
.tb-swatch::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%) 0 0 / 12px 12px,
              linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%) 6px 6px / 12px 12px;
  z-index: -1;
}
.tb-info { flex: 1; min-width: 0; }
.tb-name { font-family: ui-monospace, monospace; font-size: 12px; color: var(--vp-c-text-1); font-weight: 600; word-break: break-all; }
.tb-value { font-family: ui-monospace, monospace; font-size: 11px; color: var(--vp-c-text-2); margin-top: 2px; }
.tb-tag {
  display: inline-block;
  padding: 1px 6px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  margin-left: 6px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}
.tb-non-color {
  width: 36px; height: 36px;
  border-radius: 6px;
  flex-shrink: 0;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ui-monospace, monospace;
  font-size: 10px;
  color: var(--vp-c-text-2);
  text-align: center;
  padding: 2px;
}
.tb-empty { padding: 24px; text-align: center; color: var(--vp-c-text-2); font-size: 14px; }
</style>

<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  const groups = [
    {
      title: '产品色（4 + Active）',
      tokens: [
        { name: '--de-primary', value: '#2563EB', tag: 'DE' },
        { name: '--se-primary', value: '#9333EA', tag: 'SE' },
        { name: '--di-primary', value: '#0891B2', tag: 'DI' },
        { name: '--rcp-primary', value: '#0F62FE', tag: 'RCP' },
        { name: '--product-primary', value: 'var(--de-primary)', tag: 'active scope' },
        { name: '--de-primary-rgb', value: '37, 99, 235', tag: 'rgb tuple' },
        { name: '--se-primary-rgb', value: '147, 51, 234', tag: 'rgb tuple' },
        { name: '--di-primary-rgb', value: '8, 145, 178', tag: 'rgb tuple' },
        { name: '--rcp-primary-rgb', value: '15, 98, 254', tag: 'rgb tuple' },
      ],
    },
    {
      title: 'Endorsement Signature',
      tokens: [
        { name: '--endorsement-color', value: '#666666' },
        { name: '--endorsement-color-reverse', value: 'rgba(255, 255, 255, 0.78)' },
        { name: '--endorsement-font-weight', value: '500', tag: 'weight' },
        { name: '--endorsement-ratio', value: '0.42', tag: 'em' },
      ],
    },
    {
      title: 'PITL · AIO · VGI 徽章共享',
      tokens: [
        { name: '--badge-radius', value: '9999px', tag: 'pill' },
        { name: '--badge-border-width', value: '1.5px' },
        { name: '--badge-padding-x', value: '8px' },
        { name: '--badge-padding-x-full', value: '12px' },
        { name: '--badge-padding-y', value: '3px' },
        { name: '--badge-padding-y-full', value: '5px' },
        { name: '--badge-icon-gap', value: '5px' },
        { name: '--badge-font-size', value: '12px' },
        { name: '--badge-font-size-full', value: '13px' },
        { name: '--badge-font-weight', value: '600' },
        { name: '--badge-letter-spacing', value: '0.04em' },
      ],
    },
    {
      title: 'PITL Verified',
      tokens: [
        { name: '--pitl-bg', value: 'var(--product-primary)' },
        { name: '--pitl-fg', value: '#FFFFFF' },
        { name: '--pitl-icon-fg', value: '#FFFFFF' },
      ],
    },
    {
      title: 'AIO Official',
      tokens: [
        { name: '--aio-bg', value: '#334155', tag: 'neutral-700' },
        { name: '--aio-fg', value: 'var(--product-primary)' },
        { name: '--aio-icon-fg', value: 'var(--product-primary)' },
      ],
    },
    {
      title: 'VGI Ingredient Mark',
      tokens: [
        { name: '--vgi-border', value: 'var(--product-primary)' },
        { name: '--vgi-bg', value: 'rgba(255, 255, 255, 0.5)' },
        { name: '--vgi-fg', value: 'var(--product-primary)' },
        { name: '--vgi-icon-fg', value: 'var(--product-primary)' },
      ],
    },
    {
      title: 'Nano-Citation',
      tokens: [
        { name: '--citation-color', value: 'var(--product-primary)' },
        { name: '--citation-font-size-em', value: '0.7' },
        { name: '--citation-font-weight', value: '600' },
        { name: '--citation-padding', value: '0 2px' },
        { name: '--citation-radius', value: '2px' },
        { name: '--citation-hover-bg', value: 'rgba(0, 0, 0, 0.05)' },
        { name: '--citation-panel-width', value: '400px' },
        { name: '--citation-panel-bg', value: '#FFFFFF' },
        { name: '--citation-panel-border', value: '#E2E8F0' },
        { name: '--citation-panel-shadow', value: '0 12px 32px rgba(0, 16, 55, 0.12)' },
        { name: '--citation-panel-anim-duration', value: '240ms' },
      ],
    },
    {
      title: 'CoT Animation',
      tokens: [
        { name: '--cot-dot-color', value: 'var(--product-primary)' },
        { name: '--cot-dot-size', value: '6px' },
        { name: '--cot-spacing', value: '14px' },
        { name: '--cot-cycle', value: '1.2s', tag: 'duration' },
        { name: '--cot-stagger', value: '80ms', tag: 'stagger' },
        { name: '--cot-easing', value: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      ],
    },
    {
      title: 'Diff View',
      tokens: [
        { name: '--diff-removed-color', value: '#DC2626', tag: 'error-500' },
        { name: '--diff-removed-bg', value: 'rgba(220, 38, 38, 0.08)' },
        { name: '--diff-removed-decor', value: 'line-through' },
        { name: '--diff-added-color', value: '#2E9F82', tag: 'success-500' },
        { name: '--diff-added-bg', value: '#E6F4EF', tag: 'success-100' },
        { name: '--diff-row-padding', value: '2px 4px' },
      ],
    },
    {
      title: 'Disclosure L1 / L2 / L3',
      tokens: [
        { name: '--disclosure-l1-size', value: '18px' },
        { name: '--disclosure-l1-weight', value: '700' },
        { name: '--disclosure-l1-color', value: 'var(--product-primary)' },
        { name: '--disclosure-l2-size', value: '16px' },
        { name: '--disclosure-l2-weight', value: '400' },
        { name: '--disclosure-l2-color', value: '#334155' },
        { name: '--disclosure-l3-size', value: '14px' },
        { name: '--disclosure-l3-weight', value: '400' },
        { name: '--disclosure-l3-color', value: '#64748B' },
        { name: '--disclosure-gap', value: '12px' },
      ],
    },
    {
      title: 'RCP 贯穿横线',
      tokens: [
        { name: '--rcp-throughline-thickness', value: '0.09em' },
        { name: '--rcp-throughline-color', value: 'var(--rcp-primary)' },
        { name: '--rcp-throughline-overshoot', value: '0.15em' },
        { name: '--rcp-throughline-anchor-bottom', value: '40%' },
      ],
    },
    {
      title: 'Wordmark',
      tokens: [
        { name: '--wordmark-font', value: '"Teko", system-ui, sans-serif' },
        { name: '--wordmark-weight', value: '600' },
        { name: '--wordmark-line-height', value: '0.85' },
        { name: '--wordmark-letter-spacing', value: '0' },
        { name: '--wordmark-icon-gap-ratio', value: '0.20' },
      ],
    },
    {
      title: '母品牌（master brand）',
      tokens: [
        { name: '--master-navy', value: '#001A51', tag: 'icon dark' },
        { name: '--master-blue', value: '#005AA4', tag: 'icon mid + wordmark' },
        { name: '--master-cyan', value: '#00AEDB', tag: 'icon highlight' },
        { name: '--master-gray', value: '#666666', tag: 'slogan' },
      ],
    },
  ];

  function isColor(v) {
    return /^#[0-9A-Fa-f]{3,8}$/.test(v) || v.startsWith('rgb') || v.startsWith('rgba');
  }

  function rgbTupleToHex(v) {
    const m = v.match(/(\d+),\s*(\d+),\s*(\d+)/);
    if (!m) return null;
    return '#' + [m[1], m[2], m[3]].map(n => parseInt(n).toString(16).padStart(2, '0')).join('').toUpperCase();
  }

  function copyText(text) {
    navigator.clipboard?.writeText(text).catch(() => {
      const t = document.createElement('textarea');
      t.value = text; document.body.appendChild(t);
      t.select(); document.execCommand('copy'); document.body.removeChild(t);
    });
  }

  const root = document.getElementById('token-browser');
  if (!root) return;

  let html = '';
  for (const g of groups) {
    html += `<div class="tb-section"><h3>${g.title}</h3><div class="tb-grid">`;
    for (const t of g.tokens) {
      const isHexColor = isColor(t.value);
      const rgbHex = !isHexColor ? rgbTupleToHex(t.value) : null;
      const swatchColor = isHexColor ? t.value : (rgbHex || null);
      let swatch;
      if (swatchColor) {
        swatch = `<span class="tb-swatch" style="background:${swatchColor}"></span>`;
      } else {
        swatch = `<span class="tb-non-color">${t.value.length > 6 ? t.value.slice(0, 5) + '…' : t.value}</span>`;
      }
      const tag = t.tag ? `<span class="tb-tag">${t.tag}</span>` : '';
      html += `<div class="tb-card" data-copy="${t.name}: ${t.value};">
        ${swatch}
        <div class="tb-info">
          <div class="tb-name">${t.name}${tag}</div>
          <div class="tb-value">${t.value}</div>
        </div>
      </div>`;
    }
    html += '</div></div>';
  }
  root.innerHTML = html;

  root.addEventListener('click', (e) => {
    const card = e.target.closest('.tb-card');
    if (!card) return;
    const text = card.dataset.copy;
    copyText(text);
    card.classList.add('copied');
    setTimeout(() => card.classList.remove('copied'), 600);
  });
});
</script>

## 用法说明

1. **点击色块或卡片** → 复制 `--token-name: value;` 到剪贴板
2. **`var(--xxx)` 引用** → 在你的 CSS / inline style 中直接使用
3. **改 product scope** → 顶层加 `class="brand-de"` / `brand-se` / `brand-di` / `brand-rcp`，所有依赖 `--product-primary` 的组件自动跟随
