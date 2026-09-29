/**
 * Scans public/docs/upr/ for files and makes sure every one of them has an
 * entry in src/data/upr-tools.json. Existing entries (matched by "url") are
 * left untouched — this only ADDS placeholder entries for new files, it
 * never edits or removes what you've already written.
 *
 * Run it after dropping new PDFs into public/docs/upr/:
 *   node scripts/generate-upr-tools.mjs
 *
 * Then open src/data/upr-tools.json and replace the placeholder title /
 * description on any new entry (they're easy to find — description says
 * "TODO: replace with a real description.").
 */

import { readdirSync, statSync, readFileSync, writeFileSync } from "fs";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const FILES_DIR = join(__dirname, "..", "public", "docs", "upr");
const DATA_FILE = join(__dirname, "..", "src", "data", "upr-tools.json");

// Turns "kenya-upr-briefing-note.pdf" into "Kenya Upr Briefing Note".
function titleFromFilename(filename) {
  const base = filename.replace(extname(filename), "");
  return base
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function walk(dir, base = "") {
  const entries = readdirSync(dir);
  let files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const relPath = base ? `${base}/${entry}` : entry;
    if (statSync(fullPath).isDirectory()) {
      files = files.concat(walk(fullPath, relPath));
    } else {
      files.push({ fullPath, relPath });
    }
  }
  return files;
}

function main() {
  let existing = [];
  try {
    existing = JSON.parse(readFileSync(DATA_FILE, "utf8"));
  } catch {
    console.log("No existing upr-tools.json found — starting fresh.");
  }

  const existingUrls = new Set(existing.map((item) => item.url));

  let found;
  try {
    found = walk(FILES_DIR);
  } catch {
    console.error(`Could not read ${FILES_DIR}. Create it and add your PDFs first.`);
    process.exit(1);
  }

  let added = 0;

  for (const { fullPath, relPath } of found) {
    const url = `/docs/upr/${relPath.replace(/\\/g, "/")}`;
    if (existingUrls.has(url)) continue;

    const sizeBytes = statSync(fullPath).size;
    const sizeMb = (sizeBytes / (1024 * 1024)).toFixed(1);

    existing.push({
      title: titleFromFilename(relPath.split("/").pop()),
      description: "TODO: replace with a real description.",
      date: "",
      size: `${sizeMb} MB`,
      url,
    });
    added += 1;
  }

  writeFileSync(DATA_FILE, JSON.stringify(existing, null, 2) + "\n");
  console.log(`Done. Added ${added} new file(s). Total: ${existing.length}.`);
  if (added > 0) {
    console.log("Open src/data/upr-tools.json and fill in the TODO descriptions.");
  }
}

main();
