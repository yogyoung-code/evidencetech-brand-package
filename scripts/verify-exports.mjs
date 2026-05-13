#!/usr/bin/env node
/**
 * verify-exports.mjs — 校验 react/package.json 的 exports 字段全部子路径在 dist/ 中可解析
 *
 * 引用：06a-npm-semver.md §7.5
 * 用法：
 *   node scripts/verify-exports.mjs                   # 默认校验 react/
 *   node scripts/verify-exports.mjs ./packages/foo    # 校验指定包目录
 *
 * 退出码：
 *   0 = 所有 exports 解析成功
 *   1 = 至少一条 exports 解析失败 → CI 阻塞
 *
 * 集成 CI：
 *   .github/workflows/release.yml:
 *     - run: node scripts/verify-exports.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 解析包目录（默认 react/）
const pkgDir = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(__dirname, '..', 'react');

const pkgJsonPath = path.join(pkgDir, 'package.json');

if (!fs.existsSync(pkgJsonPath)) {
  console.error(`❌ 未找到 ${pkgJsonPath}`);
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));

if (!pkg.exports) {
  console.warn(`⚠️  ${pkg.name} 没有 exports 字段；跳过校验`);
  process.exit(0);
}

const issues = [];

/**
 * 校验单个 export 路径
 *
 * @param {string} relativePath - 如 "./dist/index.js" 或 "./dist/assets/*.svg"
 * @param {string} label - 显示用标签
 */
function checkPath(relativePath, label) {
  if (typeof relativePath !== 'string') {
    issues.push({ label, path: String(relativePath), exists: false, note: 'not a string' });
    return;
  }

  const cleaned = relativePath.startsWith('./') ? relativePath.slice(2) : relativePath;
  const fullPath = path.join(pkgDir, cleaned);

  if (cleaned.includes('*')) {
    // glob 模式：检查父目录存在 + 至少有一个匹配文件
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      issues.push({ label, path: relativePath, exists: false, note: 'glob dir missing' });
      return;
    }
    const pattern = path.basename(cleaned).replace(/\*/g, '.*');
    const matchRegex = new RegExp(`^${pattern}$`);
    const files = fs.readdirSync(dir).filter((f) => matchRegex.test(f));
    if (files.length === 0) {
      issues.push({
        label,
        path: relativePath,
        exists: false,
        note: 'glob matches no files',
      });
      return;
    }
    issues.push({
      label,
      path: relativePath,
      exists: true,
      note: `glob matches ${files.length} files`,
    });
  } else {
    // 精确路径
    issues.push({
      label,
      path: relativePath,
      exists: fs.existsSync(fullPath),
    });
  }
}

// 遍历 exports 字段
for (const [exportKey, value] of Object.entries(pkg.exports)) {
  if (typeof value === 'string') {
    checkPath(value, exportKey);
  } else if (typeof value === 'object' && value !== null) {
    for (const [condition, condPath] of Object.entries(value)) {
      checkPath(condPath, `${exportKey}:${condition}`);
    }
  } else {
    issues.push({
      label: exportKey,
      path: String(value),
      exists: false,
      note: 'unsupported export value type',
    });
  }
}

// 输出结果
console.log(`\n📦 ${pkg.name}@${pkg.version} — exports 校验\n`);
console.table(issues);

const failed = issues.filter((x) => !x.exists);

if (failed.length > 0) {
  console.error(`\n❌ ${failed.length} / ${issues.length} 条 exports 解析失败`);
  console.error(`\n失败明细：`);
  for (const f of failed) {
    console.error(`  - [${f.label}] ${f.path}${f.note ? ` (${f.note})` : ''}`);
  }
  console.error(`\n→ 检查 dist/ 是否已 build；或检查 package.json exports 字段是否与实际产物一致\n`);
  process.exit(1);
}

console.log(`\n✅ ${issues.length} 条 exports 全部解析成功\n`);
process.exit(0);
