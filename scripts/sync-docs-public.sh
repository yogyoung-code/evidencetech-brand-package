#!/usr/bin/env bash
# 把仓库根的 4 个源（ai-tokens.css / assets / preview / react）
# 同步到 docs/public/ 下，作为 VitePress 构建的真实输入。
#
# 设计目标：
# - 替代原本的符号链接（symlink 在 Vercel CI 上失效）
# - 既适用本地 dev/build，也适用 Vercel 远程构建
# - 幂等：可重复运行；先 rm -rf 目标再写入，保证完全一致
# - 零外部依赖：只用 cp / tar / find（macOS BSD + Linux GNU 都内置；不依赖 rsync）
#
# 何时调用：
# - 本地手动：./scripts/sync-docs-public.sh
# - 自动：docs/package.json 的 prebuild / predev 钩子
# - Vercel CI：vercel-build.sh 首步

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

DEST="$ROOT/docs/public"
mkdir -p "$DEST"

# 1) 删除可能残留的 symlink（symlink 形态会让后续 cp 行为不一致）
for name in ai-tokens.css assets preview react; do
  if [ -L "$DEST/$name" ]; then
    rm "$DEST/$name"
    echo "→ 删除残留 symlink: docs/public/$name"
  fi
done

# 2) sync 函数：把 src 整个同步到 dst（先 rm -rf dst，再 tar 管道复制，排除 node_modules / .DS_Store / *.log）
sync_dir() {
  local src="$1" dst="$2"
  if [ ! -d "$src" ]; then
    echo "  ⚠ 源目录不存在：$src（跳过）"
    return 0
  fi
  rm -rf "$dst"
  mkdir -p "$dst"
  ( cd "$src" && tar \
      --exclude=node_modules \
      --exclude='.DS_Store' \
      --exclude='*.log' \
      -cf - . ) | ( cd "$dst" && tar -xf - )
}

echo "→ sync ai-tokens.css"
cp -f "$ROOT/ai-tokens.css" "$DEST/ai-tokens.css"

echo "→ sync assets/"
sync_dir "$ROOT/assets" "$DEST/assets"

echo "→ sync preview/"
sync_dir "$ROOT/preview" "$DEST/preview"

echo "→ sync react/   (排除 node_modules，保留 dist)"
sync_dir "$ROOT/react" "$DEST/react"

echo "✓ sync 完成"
du -sh "$DEST" 2>/dev/null || true
