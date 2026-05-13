# Publishing `@yogyoung-code/ai-brand-kit` — Step-by-Step Runbook

> 本文是 `06a-npm-semver.md` §7.2 SOP 的可执行版本——给 Tech Lead 在本地工作站照着跑。
>
> **前置条件**：06a 双签已升 v0.2（治理规则正式生效）；GitHub Packages 仓库 `yogyoung-code/ai-brand-kit` 已建。

---

## 0. 一次性配置（首次发布前）

### 0.1 创建 GitHub Personal Access Token (PAT)

1. 访问 https://github.com/settings/tokens
2. 点 **Generate new token (classic)**
3. 配置：
   - **Note**：`yogyoung-code/ai-brand-kit npm publish`
   - **Expiration**：90 days（过期前续期）
   - **Scopes**（**必须同时勾选 write + read · 缺一不可**）：
     - [x] `write:packages`（发布包到 GitHub Packages · `npm publish` 必需）
     - [x] `read:packages`（拉自己的包 · `npm view` / `npm install` / 客户接入测试必需）
     - [x] `repo`（如包关联私有 repo · 当前是 public 可不勾）

> ⚠️ **常见错误**：只勾 `write:packages` 不勾 `read:packages` → `npm publish` 能成功（PUT），但 `npm view` / `npm install` 报 HTTP 401（GET 失败）。GitHub Packages 把 read 和 write 分开认证。
>
> ⚠️ **必须用 classic token，不要用 fine-grained personal access token** —— fine-grained PAT 对 GitHub Packages npm registry 支持不全，会有静默失败。
4. 生成后**立即复制 token**（页面刷新后看不到）；保存到密码管理器

### 0.2 配置本地 `~/.npmrc`

> ⚠️ **不要 `cp react/.npmrc.example ~/.npmrc`** —— 那会把 97 行注释模板搬过来，且很容易忘记替换 `ghp_REPLACE_WITH_YOUR_PERSONAL_ACCESS_TOKEN` 占位符 → 401 认证失败。
>
> **推荐**：直接用 `cat` 写入仅 2 行的最简内容。

```bash
# 把真实 PAT 直接写入（注意：把 PASTE_YOUR_REAL_PAT 替换成你刚生成的 token）
cat > ~/.npmrc <<EOF
@yogyoung-code:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=PASTE_YOUR_REAL_PAT
EOF

# 编辑替换占位符
open -e ~/.npmrc
# 在编辑器里把 PASTE_YOUR_REAL_PAT 替换为你的 PAT（ghp_ 开头 ~40 字符）

# 收紧权限到仅自己可读
chmod 600 ~/.npmrc
```

### 0.3 验证认证

```bash
npm whoami --registry=https://npm.pkg.github.com
# 应输出你的 GitHub 用户名（yogyoung-code）；如失败检查 PAT
```

### 0.4 一次性 git config（如未配）

```bash
git config user.name "你的名字"
git config user.email "yog.young@gmail.com"
```

---

## 1. 推荐首发流程：v0.1.0-rc.1 → v0.1.0（两步）

### 1.1 为什么 prerelease 演练先行

按 06a §6 + §8.2：

- prerelease（rc / beta / alpha）**不打 latest 标签** → 客户默认 `npm install` 不会拉到
- prerelease **可 unpublish ≤ 24h** → 出问题可重来
- 验证整条发布管道（PAT / .npmrc / dry-run / pack / GitHub Packages 显示）后再正式发 v0.1.0

### 1.2 Step-by-step 演练（v0.1.0-rc.1）

```bash
# Step A — 切到 react 目录 + 改版本
cd /Users/yogyoung/Documents/EvidenceTech-Brand-Package/EvidenceTech-Brand-Package/react
npm version 0.1.0-rc.1 --no-git-tag-version
# 这一步只改 package.json，不创建 git tag（rc 演练不需要 tag）

# Step B — 重装 + build
rm -rf node_modules package-lock.json dist
npm install
npm run build

# Step C — 校验产物（按 06a §7.4 14 条）
ls -la dist/                                # 应有 index.* / tokens.* / styles.css / assets/
du -sh dist/                                # 应在 3-4 MB 内
node ../scripts/verify-exports.mjs          # 9 条 exports 全部解析（如脚本已落地）
npx tsc --noEmit                            # 0 error
node -e "console.log(Object.keys(require('./dist/index.cjs')).length)"  # 应输出 39

# Step D — dry-run 校验
npm publish --dry-run --tag rc
# 检查输出末尾包含：
#   "name: @yogyoung-code/ai-brand-kit"
#   "version: 0.1.0-rc.1"
#   "package size: ~1.0 MB"
#   "total files: 27"

# Step E — 真发 prerelease（不打 latest）
npm publish --tag rc

# Step F — 验证 GitHub Packages 上看到
npm view @yogyoung-code/ai-brand-kit --registry=https://npm.pkg.github.com
# 应显示：
#   versions: ['0.1.0-rc.1']
#   dist-tags: { rc: '0.1.0-rc.1' }     ← 注意 latest 仍为空（或不存在）
#   maintainers: [yogyoung-code]

# Step G — 客户接入测试（在临时目录）
mkdir -p /tmp/test-install && cd /tmp/test-install
npm init -y
echo "@yogyoung-code:registry=https://npm.pkg.github.com" > .npmrc
npm install @yogyoung-code/ai-brand-kit@rc
ls node_modules/@yogyoung-code/ai-brand-kit/dist/                # 应有 dist/index.cjs 等
node -e "
const kit = require('@yogyoung-code/ai-brand-kit');
console.log('exports count:', Object.keys(kit).length);
console.log('first 5:', Object.keys(kit).slice(0, 5));
"
# 应显示 39 exports
```

### 1.3 rc.1 验证通过 → 正式发 v0.1.0

```bash
cd /Users/yogyoung/Documents/EvidenceTech-Brand-Package/EvidenceTech-Brand-Package/react

# Step H — 改版本到正式 0.1.0（这次创建 git tag）
npm version 0.1.0 --no-git-tag-version
# 注：因为 rc.1 已经把 package.json 改过，现在改回 0.1.0；--no-git-tag-version 防止 npm 自动 tag
# 我们手动 tag 在 Step K

# Step I — 重 build（确保 dist/ 与 package.json 版本一致）
npm run build

# Step J — dry-run（最后确认）
npm publish --dry-run
# 应输出 version: 0.1.0（非 rc）
# tag 默认 latest

# Step K — 真发布（默认进 latest）
npm publish

# Step L — 创建 git tag + push
cd ..  # 回到 kit 根
git add react/package.json react/CHANGELOG.md
git commit -m "release: react v0.1.0 first publish"
git tag -a react-v0.1.0 -m "react package v0.1.0 first release"
git push origin main --follow-tags

# Step M — 验证 latest tag
npm view @yogyoung-code/ai-brand-kit --registry=https://npm.pkg.github.com
# 应显示：
#   versions: ['0.1.0-rc.1', '0.1.0']
#   dist-tags: { latest: '0.1.0', rc: '0.1.0-rc.1' }

# Step N — 在 GitHub Release 页发布 release note
# 参 governance/06a-release-notes-template.md → "v0.1.0 first release" 模板
# Tag 选 react-v0.1.0；Title "react v0.1.0"；body 复制模板内容并填入实际数值
```

---

## 2. 后续升版（v0.1.0 之后）

### 2.1 PATCH（v0.1.0 → v0.1.1）

仅 bug fix；TL 单签即可。

```bash
cd react
# 写代码 + 测试
npm version patch --no-git-tag-version  # 0.1.0 → 0.1.1
npm install && npm run build
npm publish --dry-run                    # 校验
npm publish

cd ..
git add react/package.json react/CHANGELOG.md
git commit -m "release: react v0.1.1"
git tag -a react-v0.1.1 -m "react v0.1.1 patch"
git push origin main --follow-tags
```

### 2.2 MINOR（v0.1.0 → v0.2.0）

新增组件 / 新 token / 向后兼容；TL + Sponsor 双签。

```bash
# 同 PATCH 但 npm version minor
cd react
npm version minor --no-git-tag-version  # 0.1.0 → 0.2.0
# ... 后续步骤同 PATCH
```

### 2.3 MAJOR（v1.0.0 → v2.0.0）

任一 breaking change（27 项清单 §3）；三签（TL + Sponsor + 域专项）。

**额外要求**：

- Migration Guide **必须**随 v2.0.0 同时发布（写在 `migrations/v2-migration.md`）
- v1.x 末版必须 deprecate（按 06a §5）
- 如涉 MSH org 迁移：跑 `06a-npm-semver.md` §12 30 天迁移规程

---

## 3. 紧急回滚

### 3.1 prerelease 出问题（≤ 24h）

```bash
# 删 npm 上的 prerelease 版本
npm unpublish @yogyoung-code/ai-brand-kit@0.1.0-rc.1 --registry=https://npm.pkg.github.com

# 然后修复 → 改版本号到 rc.2 → 重发
```

### 3.2 正式版出问题

按 06a §8——**永不 unpublish 正式版**（除合规事故 ≤ 24h）；改用 deprecate：

```bash
npm deprecate @yogyoung-code/ai-brand-kit@0.1.0 \
  "Critical bug fixed in 0.1.1; please upgrade" \
  --registry=https://npm.pkg.github.com

# 然后发 0.1.1 patch
```

### 3.3 合规事故（FTC / 个人信息 / 客户授权违约）

走 06 §2.4 紧急修订流程（24h Market+Legal 旁路）：

```bash
# ≤ 24h 内可 unpublish
npm unpublish @yogyoung-code/ai-brand-kit@0.1.0 --registry=https://npm.pkg.github.com --force

# 通知矩阵：
# 1. #brand-updates 紧急 broadcast
# 2. DE/SE/DI/RCP lead 邮件 + Slack
# 3. GitHub Release 页加 ⚠️ Deprecated banner
# 4. 入实证库 audit trail
```

---

## 4. 故障排查

| 症状 | 原因 | 解决 |
|---|---|---|
| `npm publish` 报 401 / 403 / ENEEDAUTH | PAT 过期 / scope 错 / `~/.npmrc` 缺 `_authToken` | 检查 `~/.npmrc` · `npm whoami --registry=https://npm.pkg.github.com` 验证 · 重新生成 PAT（含 write:packages + read:packages scope）|
| `npm view` / `npm install` / `curl GET` 报 HTTP 401（**但 publish 能成功**）| PAT 只有 `write:packages` 没 `read:packages` | 编辑现有 PAT 或重生：必须**同时**勾选 write:packages + read:packages（GitHub Packages 把 read/write 分开认证）|
| 用了 fine-grained PAT 总是奇怪报错 | fine-grained PAT 对 GitHub Packages npm registry 支持不全 | 重新生成 **classic** token（write:packages + read:packages）|
| `npm publish` 报 EPRIVATE | `package.json` 含 `"private": true` | **移除该字段**——它是 v0 阶段过度保护残留；移除后双层防护仍在（`publishConfig.registry` + `publishConfig.access: restricted`）|
| `npm publish` 报 422 (already exists) | 版本号已发过 | 升版（不要试图重发同版本号）|
| `npm publish` 报 404 (no repo) | GitHub repo 未建 / `repository.url` 错 | 检查 package.json `repository.url` |
| `npm view` 看不到刚发的版本 | GitHub Packages 索引延迟 | 等 1-2 分钟重试 |
| 客户 `npm install` 报 401 | 客户未配 .npmrc + PAT | 客户在自己仓库根加 `.npmrc` 含 `_authToken` |
| `npm publish --dry-run` tarball 含意外文件 | `.npmignore` 未生效 / `files` 字段错 | 检查 package.json `files: ["dist", "README.md"]` |
| dist/ 大小异常（> 5 MB） | 母品牌资产无意中混入大文件 | 跑 `du -sh dist/assets/master-brand/*` 排查 |

---

## 5. 14 条 Publish 前自检（06a §7.4 完整清单）

每次 `npm publish` 前必跑：

```bash
# 自动化所有可机器校验项
cd react

# 1-2. 签字门槛 + CHANGELOG（人工 review）
echo "请确认 §2.2 签字门槛通过 + CHANGELOG 已写"

# 3-4. 干跑
npm publish --dry-run

# 5. 包大小（baseline ≤ packed 1.2 MB / unpacked 4 MB）
npm pack --dry-run --json | python3 -c "import json,sys; d=json.load(sys.stdin)[0]; print(f'packed: {d[\"size\"]/1024:.1f} KB; unpacked: {d[\"unpackedSize\"]/1024:.1f} KB; entries: {d[\"entryCount\"]}')"

# 6. peer deps
node -e "const p=require('./package.json'); console.log('peer:', p.peerDependencies)"

# 7. engines
node -e "const p=require('./package.json'); console.log('node:', p.engines.node)"

# 8. exports 字段
node ../scripts/verify-exports.mjs

# 9. 主入口 require
node -e "console.log('exports:', Object.keys(require('./dist/index.cjs')).length, 'tokens:', Object.keys(require('./dist/tokens.cjs')).length)"

# 10. styles.css 大小（baseline 14.8 KB）
ls -la dist/styles.css

# 11. 12 SVG
ls dist/assets/master-brand/*.svg | wc -l   # 应输出 12

# 12. typecheck
npx tsc --noEmit

# 13. 包名 + 版本号
node -e "const p=require('./package.json'); console.log(p.name, p.version)"

# 14. 当前 git status 干净
git status --porcelain

# 15. 双层防护 + 无 private 字段（防 EPRIVATE）
node -e "
const p = require('./package.json');
const issues = [];
if (p.private === true) issues.push('❌ private: true 必须移除');
if (p.publishConfig?.registry !== 'https://npm.pkg.github.com')
  issues.push('❌ publishConfig.registry 应锁 GitHub Packages');
if (p.publishConfig?.access !== 'restricted')
  issues.push('❌ publishConfig.access 应为 restricted');
console.log(issues.length === 0 ? '✓ 防护配置正确' : issues.join('\n'));
"
```

全部通过后即可 `npm publish`。

---

## 6. 引用文档

- `06-governance.md` §1 品牌包 SemVer-like / §5.4 NPM 发布规程 / §5.5 治理子文档清单
- `06a-npm-semver.md` v0.2 完整 SemVer / breaking change / deprecation / prerelease / 半自动发布 / 回滚 / 客户接入 / 依赖治理 / 多包预留 / MSH org 迁移
- `governance/06a-signoff-packet.md` 双签 packet
- `governance/06a-release-notes-template.md` Release note 模板（v0.1.0-rc.1 / v0.1.0 / v0.x.x patch / v0.x.x minor / v1.0.0 / MAJOR）
- `react/CHANGELOG.md` 包级 changelog
- `react/.npmrc.example` PAT 配置模板
- `scripts/verify-exports.mjs` exports 字段校验脚本
