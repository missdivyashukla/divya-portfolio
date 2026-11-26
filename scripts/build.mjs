// Zero-dependency build: copies src/ to dist/. Cloudflare Pages serves dist/.
import { cpSync, rmSync, existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "src");
const dist = join(root, "dist");

// Fail early with a clear message if the repository folders were flattened on upload.
const required = [
  "src/index.html",
  "src/css/styles.css",
  "src/js/main.js",
  "src/_headers",
  "src/assets/catalyst-hero.png",
  "src/assets/catalyst-avatar.png",
];
const absent = required.filter((f) => !existsSync(join(root, f)));
if (absent.length) {
  console.error("Project structure is incomplete. Missing:\n  " + absent.join("\n  "));
  console.error("\nThe folders src/css, src/js, src/assets and scripts must exist in the repository.");
  console.error("If files were uploaded without their folders, re-upload with the folder structure intact (see README).");
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
