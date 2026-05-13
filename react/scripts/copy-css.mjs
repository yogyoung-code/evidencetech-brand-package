// Copy the v1.0 ai-tokens.css into dist as styles.css so consumers can do:
//   import "@yogyoung-code/ai-brand-kit/styles.css";
//
// Source of truth lives at the kit root (../ai-tokens.css). We mirror it into
// src/styles/ at build time and into dist/styles.css for distribution.
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const kitRoot = resolve(here, "..", "..");
const sourceCss = resolve(kitRoot, "ai-tokens.css");
const srcMirror = resolve(here, "..", "src", "styles", "ai-tokens.css");
const distOut = resolve(here, "..", "dist", "styles.css");

if (!existsSync(sourceCss)) {
  console.error(`[copy-css] Source not found: ${sourceCss}`);
  process.exit(1);
}

mkdirSync(dirname(srcMirror), { recursive: true });
mkdirSync(dirname(distOut), { recursive: true });

copyFileSync(sourceCss, srcMirror);
copyFileSync(sourceCss, distOut);

console.log(`[copy-css] ${sourceCss}`);
console.log(`           → ${srcMirror}`);
console.log(`           → ${distOut}`);
