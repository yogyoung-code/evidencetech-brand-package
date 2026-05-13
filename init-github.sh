#!/usr/bin/env bash
# 初始化 git 仓库 → 创建 GitHub repo → 首次推送
#
# 用法：
#   ./init-github.sh                                  # 交互模式
#   ./init-github.sh -n my-repo                       # 指定仓库名
#   ./init-github.sh -n my-repo -v public             # 公开仓库
#   ./init-github.sh -n my-repo -v private -o my-org  # 推到组织
#
# 依赖：
#   - git (必需)
#   - gh CLI (推荐；https://cli.github.com)
#     若没装，脚本会输出手动建 repo 的步骤

set -u
ROOT="$(cd "$(dirname "$0")" && pwd)"

# ── 默认参数 ──
REPO_NAME=""
VISIBILITY="private"   # private | public
ORG=""                 # 组织名；空则推到个人
DEFAULT_BRANCH="main"

# ── 解析参数 ──
while getopts "n:v:o:b:h" opt; do
  case $opt in
    n) REPO_NAME="$OPTARG" ;;
    v) VISIBILITY="$OPTARG" ;;
    o) ORG="$OPTARG" ;;
    b) DEFAULT_BRANCH="$OPTARG" ;;
    h)
      head -16 "$0" | tail -n +2
      exit 0
      ;;
    *) exit 1 ;;
  esac
done

# ── 交互式补全仓库名 ──
if [ -z "$REPO_NAME" ]; then
  read -rp "GitHub 仓库名 [evidencetech-brand-package]: " REPO_NAME
  REPO_NAME="${REPO_NAME:-evidencetech-brand-package}"
fi

# ── 工具检查 ──
if ! command -v git >/dev/null 2>&1; then
  echo "✗ git 未安装"; exit 1
fi

HAS_GH=0
if command -v gh >/dev/null 2>&1; then
  if gh auth status >/dev/null 2>&1; then
    HAS_GH=1
  else
    echo "⚠ gh CLI 已装但未登录。运行：gh auth login"
  fi
fi

cd "$ROOT"

echo ""
echo "═══════════════════════════════════════════════════"
echo "Step 1/5  初始化本地 git 仓库"
echo "═══════════════════════════════════════════════════"
if [ -d ".git" ]; then
  echo "✓ 已是 git 仓库，跳过 init"
else
  git init -b "$DEFAULT_BRANCH"
  echo "✓ git init 完成（默认分支: $DEFAULT_BRANCH）"
fi

# 设置默认分支（兼容老版 git）
git symbolic-ref HEAD "refs/heads/$DEFAULT_BRANCH" 2>/dev/null || true

echo ""
echo "═══════════════════════════════════════════════════"
echo "Step 2/5  检查 .gitignore 与暂存"
echo "═══════════════════════════════════════════════════"
if [ ! -f ".gitignore" ]; then
  echo "✗ 缺 .gitignore——这会把 node_modules / .vercel / dist 全部提交进去。中止。"
  exit 1
fi
echo "✓ .gitignore 存在"

# 把 .vercel/、dist/ 等已存在的目录从 index 强制清出（防止 init 前的污染）
git rm -r --cached --ignore-unmatch \
  node_modules docs/node_modules react/node_modules \
  .vercel docs/.vercel site/.vercel preview/.vercel \
  docs/.vitepress/dist react/dist .logs \
  2>/dev/null || true

git add .

echo ""
echo "已暂存文件统计："
echo "  文件数：$(git diff --cached --name-only | wc -l | tr -d ' ')"
echo "  总大小：$(git diff --cached --name-only -z | xargs -0 du -ch 2>/dev/null | tail -1 | awk '{print $1}')"
echo ""
echo "前 10 大文件："
git diff --cached --name-only -z | xargs -0 du -h 2>/dev/null | sort -rh | head -10

echo ""
read -rp "继续吗？(y/N) " ans
[[ "$ans" =~ ^[Yy]$ ]] || { echo "中止"; exit 0; }

echo ""
echo "═══════════════════════════════════════════════════"
echo "Step 3/5  首次提交"
echo "═══════════════════════════════════════════════════"
if git log -1 --oneline >/dev/null 2>&1; then
  echo "✓ 已有提交记录，追加新提交"
  git commit -m "chore: snapshot before GitHub push" || echo "（没有新变更可提交）"
else
  git commit -m "chore: initial commit — AI Brand Kit v1.0

- 7 个核心规范文档（00–06 + 03 voice 子规范 + 04 visual 子规范）
- VitePress 文档站（46 页）
- 营销静态站（site/）
- 决策档案归档（preview/）
- React 包源码（@yogyoung-code/ai-brand-kit）
- 母品牌 logo 资产（12 SVG + 75 PNG）
- 启动 / 重建 / 部署脚本"
fi

echo ""
echo "═══════════════════════════════════════════════════"
echo "Step 4/5  创建 GitHub remote"
echo "═══════════════════════════════════════════════════"

if [ "$HAS_GH" -eq 1 ]; then
  TARGET="$REPO_NAME"
  [ -n "$ORG" ] && TARGET="$ORG/$REPO_NAME"

  # 检查 repo 是否已存在
  if gh repo view "$TARGET" >/dev/null 2>&1; then
    echo "✓ GitHub repo 已存在：$TARGET"
    REMOTE_URL=$(gh repo view "$TARGET" --json sshUrl -q .sshUrl)
  else
    echo "→ 用 gh 创建：$TARGET ($VISIBILITY)"
    if [ -n "$ORG" ]; then
      gh repo create "$ORG/$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push=false
    else
      gh repo create "$REPO_NAME" --"$VISIBILITY" --source=. --remote=origin --push=false
    fi
    REMOTE_URL=$(git remote get-url origin)
  fi

  # 确保 origin 设置正确
  if ! git remote get-url origin >/dev/null 2>&1; then
    git remote add origin "$REMOTE_URL"
  fi

  echo "✓ origin = $REMOTE_URL"

else
  echo ""
  echo "⚠ gh CLI 不可用。手动建 repo："
  echo ""
  echo "  1. 在 https://github.com/new 创建仓库 \"$REPO_NAME\"（$VISIBILITY）"
  echo "  2. 不要勾选 \"Initialize with README/.gitignore/License\""
  echo "  3. 创建后回到这里运行："
  echo ""
  echo "     git remote add origin git@github.com:<你的用户名>/$REPO_NAME.git"
  echo "     git push -u origin $DEFAULT_BRANCH"
  echo ""
  exit 0
fi

echo ""
echo "═══════════════════════════════════════════════════"
echo "Step 5/5  推送"
echo "═══════════════════════════════════════════════════"
git push -u origin "$DEFAULT_BRANCH"

echo ""
echo "✓ 完成。GitHub: $REMOTE_URL"
echo ""
echo "下一步（可选）—— 在 Vercel 切到 Git 集成模式："
echo "  1. https://vercel.com/new 选刚才那个 repo"
echo "  2. 重复 3 次创建 3 个 project，分别设 Root Directory:"
echo "     evidencetech-docs    → docs"
echo "     evidencetech-site    → site"
echo "     evidencetech-preview → preview"
echo "  3. docs project 注意：需先把 docs/public 的 4 个 symlink 改为实际复制"
echo "     （CLI 部署模式下不影响）"
