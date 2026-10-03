// scripts/generate-upr-tools.mjs
//
// Reads ONE Google Drive folder and writes src/data/upr-tools.json, which the
// UPR advocacy tools page imports. For every PDF it also renders the FIRST
// PAGE to a small image (public/docs/upr/thumbs/<id>.png) so the page can show
// each document's cover. Run it on your own machine, then commit the results:
//
//   npm run generate:upr
//   (= node --env-file=.env scripts/generate-upr-tools.mjs)
//
// One-time setup for the cover images:   npm install -D pdf-to-img
// Needs Node 20.6+ and a GOOGLE_API_KEY in your local .env (never commit it).
//
// WHAT IT DOES
//   - New file in the Drive folder   -> new entry (title taken from the file name)
//                                       and, for PDFs, a first-page cover image.
//   - File already in the JSON       -> keeps the title, description, date and
//                                       thumbnail you've edited; refreshes the
//                                       size and link from Drive.
//   - File removed from Drive        -> its entry (and cover image) is dropped.
//   - Entries with no "id" (old local files, hand-written ones) are left alone.
//
// Covers are only rendered once per file. To rebuild them all, run:
//   node --env-file=.env scripts/generate-upr-tools.mjs --covers
//
// If the API key is missing or Drive can't be reached, the script warns and
// leaves the existing JSON untouched.

import { readFile, writeFile, mkdir, readdir, rm, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUTPUT = path.join(ROOT, "src/data/upr-tools.json");
const THUMBS_DIR = path.join(ROOT, "public/docs/upr/thumbs");
const THUMBS_URL = "/docs/upr/thumbs";

// Width of the cover image, as a fraction of a standard page (612px wide at 1.0).
// 0.65 gives roughly a 400px-wide cover: sharp on the page, small on disk.
const COVER_SCALE = 0.65;

const REBUILD_COVERS = process.argv.includes("--covers");

// ------------------------------------------------------------
// THE DRIVE FOLDER
//   The ID is the last part of the folder URL:
//   https://drive.google.com/drive/folders/<FOLDER_ID>
//   The folder must be shared as "Anyone with the link: Viewer".
// ------------------------------------------------------------
const FOLDER_ID = "1zA5cBQitTv-65a9KFugm0taSyOBAyPUf";

const API_KEY = process.env.GOOGLE_API_KEY;

// Accepts a bare folder ID or a pasted folder URL (with or without ?usp=sharing)
// and returns just the ID.
function cleanId(value) {
  const text = String(value ?? "").trim();
  const match = text.match(/folders\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : text.split(/[?&#\s]/)[0];
}

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

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function listFolder(folderId) {
  const files = [];
  let pageToken;

  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed = false and mimeType != 'application/vnd.google-apps.folder'`,
      fields:
        "nextPageToken, files(id, name, mimeType, size, modifiedTime, webViewLink)",
      orderBy: "name",
      pageSize: "200",
      key: API_KEY,
    });
    if (pageToken) params.set("pageToken", pageToken);

    const res = await fetch(`https://www.googleapis.com/drive/v3/files?${params}`);
    if (!res.ok) {
      const body = await res.text();
      const hint =
        res.status === 404
          ? `\nHint: Drive returns 404 when the folder ID is wrong OR the folder is not shared as "Anyone with the link: Viewer". Folder ID used: "${folderId}"`
          : "";
      throw new Error(
        `Drive API ${res.status} for folder ${folderId}: ${body}${hint}`
      );
    }

    const data = await res.json();
    files.push(...(data.files ?? []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return files;
}

// ------------------------------------------------------------
// First-page cover images
// ------------------------------------------------------------

let pdfModulePromise;
function loadPdfRenderer() {
  pdfModulePromise ??= import("pdf-to-img").catch(() => null);
  return pdfModulePromise;
}

async function downloadFile(fileId) {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error(`download failed (${res.status})`);
  }
  return Buffer.from(await res.arrayBuffer());
}

/** Renders page 1 of the PDF to public/docs/upr/thumbs/<id>.png.
    Returns the public URL, or "" if it couldn't be made. */
async function makeCover(file) {
  const isPdf =
    file.mimeType === "application/pdf" || /\.pdf$/i.test(file.name || "");
  if (!isPdf) return "";

  const outPath = path.join(THUMBS_DIR, `${file.id}.png`);
  const url = `${THUMBS_URL}/${file.id}.png`;

  if (!REBUILD_COVERS && (await exists(outPath))) return url;

  const mod = await loadPdfRenderer();
  if (!mod) {
    if (!makeCover.warned) {
      console.warn(
        "[upr-tools] Cover images skipped: run `npm install -D pdf-to-img` once, then run this again."
      );
      makeCover.warned = true;
    }
    return "";
  }

  try {
    const buffer = await downloadFile(file.id);
    const document = await mod.pdf(buffer, { scale: COVER_SCALE });
    for await (const page of document) {
      await mkdir(THUMBS_DIR, { recursive: true });
      await writeFile(outPath, page);
      return url; // first page only
    }
    return "";
  } catch (error) {
    console.warn(
      `[upr-tools] Could not make a cover for "${file.name}": ${error.message}`
    );
    return "";
  }
}

async function readExisting() {
  try {
    return JSON.parse(await readFile(OUTPUT, "utf8"));
  } catch {
    return [];
  }
}

// A thumbnail value we wrote ourselves (safe to replace), as opposed to one
// you typed in by hand.
function isAutoThumbnail(value) {
  return (
    !value ||
    value.startsWith("https://drive.google.com/thumbnail") ||
    value.startsWith(`${THUMBS_URL}/`)
  );
}

async function main() {
  if (!API_KEY) {
    console.warn(
      "[upr-tools] GOOGLE_API_KEY not set (check your .env file). Keeping the existing JSON."
    );
    return;
  }

  const folderId = cleanId(FOLDER_ID);
  if (!folderId || folderId.startsWith("PASTE_")) {
    console.warn(
      "[upr-tools] No folder ID set. Paste your Drive folder ID into FOLDER_ID at the top of the script."
    );
    return;
  }

  const existing = await readExisting();
  const existingById = new Map(existing.filter((e) => e.id).map((e) => [e.id, e]));

  const files = await listFolder(folderId);

  const fresh = [];
  let covers = 0;

  for (const file of files) {
    const previous = existingById.get(file.id) ?? {};

    const cover = await makeCover(file);
    if (cover) covers += 1;

    const thumbnail = !isAutoThumbnail(previous.thumbnail)
      ? previous.thumbnail // one you set yourself
      : cover || `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`;

    fresh.push({
      id: file.id,
      // You can edit these in the JSON and they'll be kept:
      title: previous.title || titleFromName(file.name),
      description: previous.description ?? "",
      date: previous.date || (file.modifiedTime ?? "").slice(0, 10),
      thumbnail,
      // Always refreshed from Drive:
      size: formatSize(file.size),
      url: file.webViewLink || `https://drive.google.com/file/d/${file.id}/view`,
    });
  }

  console.log(
    `[upr-tools] ${fresh.length} file(s) found in Drive, ${covers} first-page cover(s) ready`
  );

  // Remove cover images for files that no longer exist in Drive.
  try {
    const keep = new Set(files.map((f) => `${f.id}.png`));
    for (const name of await readdir(THUMBS_DIR)) {
      if (/^[A-Za-z0-9_-]{20,}\.png$/.test(name) && !keep.has(name)) {
        await rm(path.join(THUMBS_DIR, name));
      }
    }
  } catch {
    // thumbs folder doesn't exist yet; nothing to clean
  }

  // Keep entries that did not come from Drive (no id).
  const kept = existing.filter((e) => !e.id);

  const result = [...fresh, ...kept];

  await mkdir(path.dirname(OUTPUT), { recursive: true });
  await writeFile(OUTPUT, JSON.stringify(result, null, 2) + "\n", "utf8");

  console.log(
    `[upr-tools] Wrote ${result.length} entr${result.length === 1 ? "y" : "ies"} to ${path.relative(process.cwd(), OUTPUT)}`
  );
}

main().catch((error) => {
  console.warn(
    `[upr-tools] Sync failed, keeping the existing JSON.\n${error.message}`
  );
});
