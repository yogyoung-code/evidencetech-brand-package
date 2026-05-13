#!/usr/bin/env bash
# 一键重建：VitePress 文档站 + React 包 + Demo 截图归档
# 三个步骤独立，前一个失败不会阻断后续。

set -u
ROOT="$(cd "$(dirname "$0")" && pwd)"
PASS=()
FAIL=()

step() {
  local name="$1"; shift
  echo ""
  echo "═══════════════════════════════════════════════════"
  echo "▶ $name"
  echo "═══════════════════════════════════════════════════"
  if "$@"; then
    PASS+=("$name")
  else
    FAIL+=("$name")
    echo "✗ $name 失败（继续后续步骤）"
  fi
}

# 1) VitePress 文档站
build_docs() {
  cd "$ROOT/docs" && npm run build
}

# 2) React 包（tsup）
build_react() {
  cd "$ROOT/react" && npm run build
}

# 3) Demo 截图归档（需要 puppeteer，且脚本可能需要 demo dev server）
build_screenshots() {
  cd "$ROOT" && node scripts/build-react-demo-screenshots.mjs
}

step "docs build (VitePress)"        build_docs
step "react build (tsup)"            build_react
step "demo screenshots (puppeteer)"  build_screenshots

echo ""
echo "═══════════════════════════════════════════════════"
echo "结果汇总"
echo "═══════════════════════════════════════════════════"
for n in "${PASS[@]}"; do echo "  ✓ $n"; done
for n in "${FAIL[@]}"; do echo "  ✗ $n"; done
echo ""

[ ${#FAIL[@]} -eq 0 ] && exit 0 || exit 1
