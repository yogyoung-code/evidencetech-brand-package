// Copy master brand SVG assets from kit root → react/dist/assets/master-brand/
// (Mirror to react/src/assets/master-brand/ during build for parity with copy-css.mjs.)
import { readdirSync, copyFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const kitRoot = resolve(here, "..", "..");
const sourceDir = resolve(kitRoot, "assets", "master-brand");
const srcMirror = resolve(here, "..", "src", "assets", "master-brand");
const distOut = resolve(here, "..", "dist", "assets", "master-brand");

if (!existsSync(sourceDir) || !statSync(sourceDir).isDirectory()) {
  console.error(`[copy-master-brand] Source not found: ${sourceDir}`);
  process.exit(1);
}

mkdirSync(srcMirror, { recursive: true });
mkdirSync(distOut, { recursive: true });

const files = readdirSync(sourceDir).filter((f) => f.endsWith(".svg"));
let count = 0;
for (const f of files) {
  copyFileSync(resolve(sourceDir, f), resolve(srcMirror, f));
  copyFileSync(resolve(sourceDir, f), resolve(distOut, f));
  count++;
}

console.log(`[copy-master-brand] Copied ${count} SVG files`);
console.log(`  source: ${sourceDir}`);
console.log(`  → ${srcMirror}`);
console.log(`  → ${distOut}`);
