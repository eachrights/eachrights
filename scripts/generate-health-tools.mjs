// scripts/generate-health-tools.mjs
//
// Scans public/docs/health/<county>/ for files and writes
// src/data/health-tools.json, which the Health page imports.
//
//   node scripts/generate-health-tools.mjs
//
// Folder layout:
//   public/docs/health/kilifi/*.pdf
//   public/docs/health/kwale/*.pdf
//   public/docs/health/migori/*.pdf
//   public/docs/health/homa-bay/*.pdf
//   public/docs/health/thumbs/<same-file-name>.jpg|png|webp   (optional)
//
// WHAT IT DOES
//   - New file in a county folder  -> new entry (title taken from the file name).
//   - File already in the JSON     -> keeps the title, description, date and
//                                     thumbnail you've edited; refreshes the
//                                     size and county from disk.
//   - File deleted from the folder -> its entry is dropped.
//   - Entries whose url is not under /docs/health/ (hand-written, external
//     links, "Coming soon" placeholders) are left alone.

import { readdir, readFile, writeFile, stat, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DOCS_DIR = path.join(ROOT, "public/docs/health");
const THUMBS_DIR = path.join(DOCS_DIR, "thumbs");
const OUTPUT = path.join(ROOT, "src/data/health-tools.json");
const URL_PREFIX = "/docs/health";

// Must match COUNTIES in Health.jsx. Folder name = slug.
const COUNTY_SLUGS = ["kilifi", "kwale", "migori", "homa-bay"];

const THUMB_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function titleFromName(fileName) {
  return path
    .basename(fileName, path.extname(fileName))
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function findThumbnail(fileName) {
  const base = path.basename(fileName, path.extname(fileName));
  for (const ext of THUMB_EXTENSIONS) {
    if (await exists(path.join(THUMBS_DIR, base + ext))) {
      return `${URL_PREFIX}/thumbs/${base}${ext}`;
    }
  }
  return "";
}

async function readExisting() {
  try {
    return JSON.parse(await readFile(OUTPUT, "utf8"));
  } catch {
    return [];
  }
}

async function main() {
  const existing = await readExisting();
  const existingByUrl = new Map(existing.map((e) => [e.url, e]));

  const fresh = [];

  for (const county of COUNTY_SLUGS) {
    const dir = path.join(DOCS_DIR, county);

    if (!(await exists(dir))) {
      await mkdir(dir, { recursive: true });
      console.log(`[health-tools] Created empty folder public/docs/health/${county}`);
      continue;
    }

    const entries = await readdir(dir, { withFileTypes: true });
    const files = entries
      .filter((e) => e.isFile() && !e.name.startsWith("."))
      .map((e) => e.name)
      .sort((a, b) => a.localeCompare(b));

    for (const fileName of files) {
      const url = `${URL_PREFIX}/${county}/${encodeURI(fileName)}`;
      const info = await stat(path.join(dir, fileName));
      const previous = existingByUrl.get(url) ?? {};

      fresh.push({
        county,
        // You can edit these in the JSON and they'll be kept:
        title: previous.title || titleFromName(fileName),
        description: previous.description ?? "",
        date: previous.date || info.mtime.toISOString().slice(0, 10),
        thumbnail: previous.thumbnail || (await findThumbnail(fileName)),
        // Always refreshed from disk:
        size: formatSize(info.size),
        url,
      });
    }

    console.log(`[health-tools] ${county}: ${files.length} file(s)`);
  }

  // Keep entries that don't point into /docs/health/ (external or hand-written).
  const kept = existing.filter((e) => !(e.url || "").startsWith(`${URL_PREFIX}/`));

  const result = [...fresh, ...kept];

  await mkdir(path.dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, JSON.stringify(result, null, 2) + "\n", "utf8");

  console.log(
    `[health-tools] Wrote ${result.length} entr${result.length === 1 ? "y" : "ies"} to ${path.relative(ROOT, OUTPUT)}`
  );
}

main().catch((error) => {
  console.error(`[health-tools] Failed: ${error.message}`);
  process.exit(1);
});
