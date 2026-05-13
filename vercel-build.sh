#!/usr/bin/env bash
# Vercel CI 远程构建入口（用于 docs project）
#
# Vercel project 设置：
#   Root Directory:   .（仓库根）
#   Build Command:    bash vercel-build.sh
#   Output Directory: docs/.vitepress/dist
#   Install Command:  （留空，本脚本自行 install）
#
# 本脚本依次：
#   1. 安装 + 构建 react 包（产出 react/dist/，docs 站 demo 依赖）
#   2. 安装 docs 依赖
#   3. 构建 docs 站（prebuild 钩子会把 react/dist 等同步到 docs/public）

set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"

echo "═══════════════════════════════════════════════════"
echo "1/2  Build react package"
echo "═══════════════════════════════════════════════════"
cd "$ROOT/react"
npm install --no-audit --no-fund
npm run build

echo ""
echo "═══════════════════════════════════════════════════"
echo "2/2  Build docs (含 prebuild 同步)"
echo "═══════════════════════════════════════════════════"
cd "$ROOT/docs"
npm install --no-audit --no-fund
npm run build

echo ""
echo "✓ Vercel build 完成。Output: docs/.vitepress/dist"
