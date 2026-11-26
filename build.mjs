// Zero-dependency build: copies src/ to dist/. Cloudflare Pages serves dist/.
import { cpSync, rmSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
const dist = join(root, "dist");

if (!existsSync(join(src, "index.html"))) {
  console.error("src/index.html is missing");
  process.exit(1);
}
rmSync(dist, { recursive: true, force: true });
cpSync(src, dist, { recursive: true });

// Check every local asset referenced from index.html exists in dist.
const html = readFileSync(join(dist, "index.html"), "utf8");
const refs = [...html.matchAll(/(?:src|href)="((?:assets|css|js)\/[^"]+)"/g)].map((m) => m[1]);
const missing = refs.filter((r) => !existsSync(join(dist, r)));
if (missing.length) {
  console.error("Missing files referenced in index.html:", missing);
  process.exit(1);
}
console.log(`Built dist/ (${refs.length} local references checked).`);
