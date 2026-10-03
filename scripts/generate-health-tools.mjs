// scripts/generate-health-tools.mjs
//
// Reads one Google Drive folder per county and writes src/data/health-tools.json,
// which the Health page imports. Run it on your own machine, then commit the JSON:
//
//   npm run generate:health
//   (= node --env-file=.env scripts/generate-health-tools.mjs)
//
// Needs Node 20.6+ (for --env-file and built-in fetch).
//
// WHAT IT DOES
//   - New file in a Drive folder     -> new entry (title taken from the file name).
//   - File already in the JSON       -> keeps the title, description, date and
//                                       thumbnail you've edited; refreshes the
//                                       size, link and county from Drive.
//   - File removed from Drive        -> its entry is dropped.
//   - Entries with no "id" (written by hand) are always left alone.
//
// If the API key is missing or Drive can't be reached, the script warns and
// leaves the existing JSON untouched.

import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT = path.resolve(__dirname, "../src/data/health-tools.json");

// ------------------------------------------------------------
// PASTE YOUR DRIVE FOLDER IDS HERE
//   The ID is the last part of the folder URL:
//   https://drive.google.com/drive/folders/<FOLDER_ID>
//   Each folder must be shared as "Anyone with the link: Viewer".
// ------------------------------------------------------------
   const COUNTY_FOLDERS = {
     Kilifi: "1iV9KATrVI7Mfq3rzI0xpOKcU5l-IXi-J",
     Kwale: "1lC51ir0bgOVKJfhQpak59b5bLG1mADmb",
     Migori: "1HoDqiVpZOMoPEPpxDpUMyuuI_tqIIkTt",
     "Homabay": "1QPBuYG5ZokxKon4ph0Cm5qSpIf9cMDzJ",
   };

const API_KEY = process.env.GOOGLE_API_KEY;

const isPlaceholder = (id) => !id || id.startsWith("PASTE_");

function formatSize(bytes) {
  const n = Number(bytes);
  if (!n) return ""; // Google Docs/Sheets have no byte size
  if (n < 1024 * 1024) return `${Math.max(1, Math.round(n / 1024))} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

function titleFromName(name) {
  return name
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function listFolder(folderId) {
  const files = [];
  let pageToken;

  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed = false and mimeType != 'application/vnd.google-apps.folder'`,
      fields: "nextPageToken, files(id, name, size, modifiedTime, webViewLink)",
      orderBy: "name",
      pageSize: "200",
      key: API_KEY,
    });
    if (pageToken) params.set("pageToken", pageToken);

    const res = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`);
    if (!res.ok) {
      const body = await res.text();
      throw new Error(`Drive API ${res.status} for folder ${folderId}: ${body}`);
    }

    const data = await res.json();
    files.push(...(data.files ?? []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return files;
}

async function readExisting() {
  try {
    return JSON.parse(await readFile(OUTPUT, "utf8"));
  } catch {
    return [];
  }
}

async function main() {
  if (!API_KEY) {
    console.warn(
      "[health-tools] GOOGLE_API_KEY not set (check your .env file). Keeping the existing JSON."
    );
    return;
  }

  const counties = Object.entries(COUNTY_FOLDERS).filter(([slug, id]) => {
    if (isPlaceholder(id)) {
      console.warn(`[health-tools] No folder ID set for "${slug}". Skipping it.`);
      return false;
    }
    return true;
  });

  if (counties.length === 0) {
    console.warn("[health-tools] No folder IDs configured. Nothing to do.");
    return;
  }

  const existing = await readExisting();
  const existingById = new Map(existing.filter((e) => e.id).map((e) => [e.id, e]));

  const synced = new Set(counties.map(([slug]) => slug));
  const fresh = [];

  for (const [county, folderId] of counties) {
    const files = await listFolder(folderId);

    for (const file of files) {
      const previous = existingById.get(file.id) ?? {};
      fresh.push({
        id: file.id,
        county,
        // You can edit these in the JSON and they'll be kept:
        title: previous.title || titleFromName(file.name),
        description: previous.description ?? "",
        date: previous.date || (file.modifiedTime ?? "").slice(0, 10),
        thumbnail:
          previous.thumbnail ||
          `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
        // Always refreshed from Drive:
        size: formatSize(file.size),
        url:
          file.webViewLink || `https://drive.google.com/file/d/${file.id}/view`,
      });
    }

    console.log(`[health-tools] ${county}: ${files.length} file(s)`);
  }

  // Keep hand-written entries (no id) and anything from counties we didn't sync.
  const kept = existing.filter((e) => !e.id || !synced.has(e.county));

  const result = [...fresh, ...kept];

  await mkdir(path.dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, JSON.stringify(result, null, 2) + "\n", "utf8");

  console.log(
    `[health-tools] Wrote ${result.length} entr${result.length === 1 ? "y" : "ies"} to ${path.relative(process.cwd(), OUTPUT)}`
  );
}

main().catch((error) => {
  console.warn(
    `[health-tools] Sync failed, keeping the existing JSON.\n${error.message}`
  );
});
