#!/usr/bin/env bash
# 把仓库根的 4 个源（ai-tokens.css / assets / preview / react）
# 同步到 docs/public/ 下，作为 VitePress 构建的真实输入。
#
# 设计目标：
# - 替代原本的符号链接（symlink 在 Vercel CI 上失效）
# - 既适用本地 dev/build，也适用 Vercel 远程构建
# - 幂等：可重复运行；rsync --delete 保证 docs/public 与源完全一致
#
# 何时调用：
# - 本地手动：./scripts/sync-docs-public.sh
# - 自动：docs/package.json 的 prebuild / predev 钩子
# - Vercel CI：build 命令首步

set -euo pipefail

# 找到仓库根（脚本所在目录的上级）
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

DEST="$ROOT/docs/public"

# 1) 确保 docs/public 存在
mkdir -p "$DEST"

# 2) 删除可能残留的 symlink（如果本地还是 symlink 形态，rsync 会拒绝写入）
for name in ai-tokens.css assets preview react; do
  if [ -L "$DEST/$name" ]; then
    rm "$DEST/$name"
    echo "→ 删除残留 symlink: docs/public/$name"
  fi
done

# 3) 同步 4 个源 → docs/public
RSYNC_FLAGS=(-a --delete --exclude=node_modules --exclude='.DS_Store' --exclude='*.log')

echo "→ sync ai-tokens.css"
cp -f "$ROOT/ai-tokens.css" "$DEST/ai-tokens.css"

echo "→ sync assets/  (4.7M)"
rsync "${RSYNC_FLAGS[@]}" "$ROOT/assets/" "$DEST/assets/"

echo "→ sync preview/ (1.5M)"
rsync "${RSYNC_FLAGS[@]}" "$ROOT/preview/" "$DEST/preview/"

echo "→ sync react/   (~1M，排除 node_modules)"
# react 子目录有 node_modules（不要）和 dist（要——demo 依赖）
rsync "${RSYNC_FLAGS[@]}" "$ROOT/react/" "$DEST/react/"

echo "✓ sync 完成"
du -sh "$DEST"
