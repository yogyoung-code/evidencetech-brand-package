#!/usr/bin/env bash
# 部署 3 个站点到 Vercel（CLI 直推预构建静态文件）
# 使用前提：
#   1. 已安装 Vercel CLI:  npm i -g vercel
#   2. 已 vercel login
#   3. docs 已 build 过（dist/ 存在）—— 没 build 先跑 ./rebuild-all.sh
#
# 项目命名约定（首次 deploy 会创建对应 project，之后 .vercel/ 记忆）：
#   - evidencetech-docs     → VitePress 文档站
#   - evidencetech-site     → 营销站
#   - evidencetech-preview  → 决策档案

set -u
ROOT="$(cd "$(dirname "$0")" && pwd)"
PROD_FLAG="${PROD_FLAG:---prod}"   # 默认 prod；预览 deploy 用 PROD_FLAG="" ./deploy-vercel.sh

PASS=()
FAIL=()

deploy_site() {
  local name="$1" cwd="$2" project="$3"
  echo ""
  echo "═══════════════════════════════════════════════════"
  echo "▶ 部署 $name → Vercel project: $project"
  echo "  目录: $cwd"
  echo "═══════════════════════════════════════════════════"
  if [ ! -d "$cwd" ]; then
    echo "✗ 目录不存在：$cwd"
    FAIL+=("$name (目录缺失)")
    return
  fi
  ( cd "$cwd" && vercel deploy $PROD_FLAG --yes --name "$project" ) \
    && PASS+=("$name") \
    || FAIL+=("$name")
}

# 1) docs：部署预构建产物 dist/
DOCS_DIST="$ROOT/docs/.vitepress/dist"
if [ ! -d "$DOCS_DIST" ]; then
  echo "⚠ docs/.vitepress/dist 不存在，先跑 ./rebuild-all.sh"
  exit 1
fi

# docs 的 vercel.json 在 docs/ 根，dist 里没有 → 复制一份过去
cp "$ROOT/docs/vercel.json" "$DOCS_DIST/vercel.json" 2>/dev/null || true

deploy_site "docs (VitePress 文档站)"  "$DOCS_DIST"        "evidencetech-docs"
deploy_site "site (营销站)"            "$ROOT/site"        "evidencetech-site"
deploy_site "preview (决策档案)"       "$ROOT/preview"     "evidencetech-preview"

echo ""
echo "═══════════════════════════════════════════════════"
echo "结果汇总"
echo "═══════════════════════════════════════════════════"
for n in "${PASS[@]}"; do echo "  ✓ $n"; done
for n in "${FAIL[@]}"; do echo "  ✗ $n"; done
echo ""
echo "▶ 后续：在 Vercel Dashboard 给每个 project 绑子域名"
echo "  evidencetech-docs    → docs.<your-root>"
echo "  evidencetech-site    → www.<your-root>  (或 root)"
echo "  evidencetech-preview → preview.<your-root>"

[ ${#FAIL[@]} -eq 0 ] && exit 0 || exit 1
