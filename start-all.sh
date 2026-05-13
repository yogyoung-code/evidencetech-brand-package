#!/usr/bin/env bash
# 一键启动 AI Brand Kit 全部站点
# - VitePress 文档站  → http://localhost:5173
# - Site 营销站       → http://localhost:5174
# - Preview 决策档案  → http://localhost:5175

set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$ROOT/.logs"
mkdir -p "$LOG_DIR"

echo "→ 启动 VitePress 文档站 (docs/) at :5173"
( cd "$ROOT/docs" && npx vitepress dev --port 5173 --host 127.0.0.1 \
    > "$LOG_DIR/docs.log" 2>&1 ) &
PID_DOCS=$!

echo "→ 启动 Site 营销站 (site/) at :5174"
( cd "$ROOT/site" && python3 -m http.server 5174 --bind 127.0.0.1 \
    > "$LOG_DIR/site.log" 2>&1 ) &
PID_SITE=$!

echo "→ 启动 Preview 决策档案 (preview/) at :5175"
( cd "$ROOT/preview" && python3 -m http.server 5175 --bind 127.0.0.1 \
    > "$LOG_DIR/preview.log" 2>&1 ) &
PID_PREVIEW=$!

echo ""
echo "✓ 已启动 3 个本地服务："
echo "  • 文档站   http://localhost:5173"
echo "  • 营销站   http://localhost:5174"
echo "  • 决策档案 http://localhost:5175"
echo ""
echo "日志：$LOG_DIR/{docs,site,preview}.log"
echo "停止：kill $PID_DOCS $PID_SITE $PID_PREVIEW  （或 Ctrl-C）"
echo ""

# 自动在默认浏览器打开
sleep 2
open "http://localhost:5173" 2>/dev/null || true

# 前台等待，Ctrl-C 一起停掉
trap "kill $PID_DOCS $PID_SITE $PID_PREVIEW 2>/dev/null; exit 0" INT TERM
wait
