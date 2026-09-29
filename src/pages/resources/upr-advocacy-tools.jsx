import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
  Eye,
  FileText,
  Globe2,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";

import uprPhoto from "../../assets/impact/impact-9.png";

// The file list itself lives in its own JSON file, not here, so adding a
// new PDF never means touching this component:
//   src/data/upr-tools.json
//
// Each entry: { title, description, date, size, url, thumbnail? }
//   url       : "/docs/upr/your-file.pdf" for a file placed in public/docs/upr/,
//               or a full https:// link.
//   thumbnail : optional. "/docs/upr/thumbs/your-file.jpg" (a cover image
//               placed in public/docs/upr/thumbs/). If missing or broken,
//               a neutral document icon is shown instead.
//
// A generator script keeps this file honest as you add PDFs — see
// scripts/generate-upr-tools.mjs. Run it after dropping new files into
// public/docs/upr/ and it appends a placeholder entry for anything the
// JSON doesn't already list yet, without touching what you've already
// written.
import toolsData from "../../data/upr-tools.json";

const PAGE_SIZE = 12;

/* Seconds of scroll time allotted to each item. Bigger = slower.
   The total duration grows with the number of items so the speed stays
   comfortable whether there are 5 files or 50. */
const TICKER_SECONDS_PER_ITEM = 7;
const TICKER_MIN_SECONDS = 60;

/* Right-to-left ticker, like a news/advert banner. The track holds two
   identical sets of items; translating by half its width loops seamlessly.
   Pauses on hover/focus so it doesn't fight someone trying to click or read. */
const TICKER_CSS = `
@keyframes eachr-ticker-rtl {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.eachr-ticker-track {
  animation: eachr-ticker-rtl var(--ticker-duration, 90s) linear infinite;
  will-change: transform;
}
.eachr-ticker:hover .eachr-ticker-track,
.eachr-ticker:focus-within .eachr-ticker-track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .eachr-ticker-track { animation: none; }
  .eachr-ticker { overflow-x: auto; }
  .eachr-ticker-dup { display: none; }
}
`;

/** Thumbnail image with a graceful fallback icon if there's no image or it
    fails to load. */
function Thumb({ src, className = "", iconSize = 20 }) {
  const [failed, setFailed] = useState(false);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt=""
        loading="lazy"
        onError={() => setFailed(true)}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <span
      className={`flex items-center justify-center bg-forest text-accent ${className}`}
    >
      <FileText size={iconSize} strokeWidth={1.7} />
    </span>
  );
}

/** One clickable card in the ticker: cover thumbnail + title. */
function TickerItem({ item, hidden }) {
  const content = (
    <>
      <Thumb
        src={item.thumbnail}
        className="h-16 w-12 shrink-0 border border-forest/15"
        iconSize={18}
      />
      <span className="line-clamp-3 w-44 text-left text-sm font-semibold leading-snug text-forest">
        {item.title}
      </span>
    </>
  );

  const base =
    "mx-2 flex shrink-0 items-center gap-3 border border-forest/12 bg-white p-2 pr-4";

  if (!item.url) {
    return <div className={base}>{content}</div>;
  }

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : undefined}
      title={item.title}
      className={`${base} transition duration-200 hover:-translate-y-0.5 hover:border-forest hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
    >
      {content}
      {!hidden && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  );
}

/** Scrolling strip of files, right to left, like an advert banner. Each
    item shows its thumbnail and is clickable (opens the file in a new tab).
    The second copy of the list is hidden from assistive tech and the tab
    order so screen-reader and keyboard users only meet each file once. */
function FileTicker({ items }) {
  if (!items.length) return null;

  const duration = Math.max(
    TICKER_MIN_SECONDS,
    items.length * TICKER_SECONDS_PER_ITEM
  );

  const renderItems = (hidden = false) =>
    items.map((item, index) => (
      <TickerItem
        key={`${item.title}-${index}${hidden ? "-dup" : ""}`}
        item={item}
        hidden={hidden}
      />
    ));

  return (
    <div
      role="region"
      aria-label="Featured advocacy files"
      className="eachr-ticker relative overflow-hidden border-y border-forest/10 bg-forest-light py-4"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
      }}
    >
      <style>{TICKER_CSS}</style>
      <div
        className="eachr-ticker-track flex w-max"
        style={{ "--ticker-duration": `${duration}s` }}
      >
        <div className="flex shrink-0">{renderItems()}</div>
        <div className="eachr-ticker-dup flex shrink-0" aria-hidden="true">
          {renderItems(true)}
        </div>
      </div>
    </div>
  );
}

function formatDate(value) {
  return value || "";
}

/** A single file row. Rows, not cards — much easier to scan when there
    are many, undivided files. Each row offers two separate actions:
    "View" opens the PDF in a new tab to preview, "Download" saves it
    straight to disk. External (https://) links only get "Open", since
    the download attribute is unreliable across origins and the file
    isn't actually ours to force-save. */
function ToolRow({ item }) {
  const isExternal = /^https?:\/\//i.test(item.url || "");
  const meta = [formatDate(item.date), item.size].filter(Boolean).join("  ·  ");

  return (
    <div className="flex items-center gap-4 border border-forest/12 bg-white px-5 py-4 transition duration-200 hover:border-forest hover:shadow-md">
      <Thumb
        src={item.thumbnail}
        className="h-14 w-11 shrink-0"
        iconSize={20}
      />

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-display text-base font-bold text-forest sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-sm leading-6 text-ink/60">
          {item.description}
        </p>
      </div>

      <div className="hidden shrink-0 text-xs text-ink/50 sm:block">{meta}</div>

      {item.url ? (
        isExternal ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 border border-forest/25 px-3 py-1.5 text-sm font-bold text-forest transition hover:border-forest hover:bg-forest hover:text-white"
          >
            Open
            <ArrowUpRight size={15} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : (
          <div className="flex shrink-0 items-center gap-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border border-forest/25 px-3 py-1.5 text-sm font-bold text-forest transition hover:border-forest hover:bg-forest hover:text-white"
            >
              <Eye size={15} />
              <span className="hidden sm:inline">View</span>
              <span className="sr-only sm:hidden">
                View (opens in a new tab)
              </span>
            </a>
            <a
              href={item.url}
              download
              className="inline-flex items-center gap-1.5 bg-forest px-3 py-1.5 text-sm font-bold text-white transition hover:bg-forest-dark"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Download</span>
              <span className="sr-only sm:hidden">Download</span>
            </a>
          </div>
        )
      ) : (
        <span className="shrink-0 text-xs text-ink/40">Coming soon</span>
      )}
    </div>
  );
}

export default function UprAdvocacyTools() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("az"); // "az" | "za" | "newest" | "oldest"
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const prefersReducedMotion = useReducedMotion();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = !q
      ? toolsData
      : toolsData.filter((tool) =>
          `${tool.title} ${tool.description}`.toLowerCase().includes(q)
        );

    const sorted = [...list];
    if (sort === "az") sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za") sorted.sort((a, b) => b.title.localeCompare(a.title));
    if (sort === "newest") sorted.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    if (sort === "oldest") sorted.sort((a, b) => (a.date || "").localeCompare(b.date || ""));
    return sorted;
  }, [query, sort]);

  const visible = filtered.slice(0, visibleCount);

  return (
    <main className="min-h-screen bg-paper font-sans text-ink">
      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="relative isolate min-h-[420px] overflow-hidden bg-forest text-paper sm:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-accent" />

        <img
          src={uprPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6 py-10 sm:min-h-[440px] sm:px-8 sm:py-12 lg:min-h-[480px] lg:px-12 lg:py-16">
          <Link
            to="/resources"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Resources
          </Link>

          <div className="mt-3 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 bg-accent" />
            <p className="text-sm font-semibold text-white/70">UN ENGAGEMENT</p>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            UPR advocacy tools
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            Guides, templates, briefings and reports to help communities and
            partners engage with the Universal Periodic Review and follow up
            on its recommendations.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Browse the files
              <ArrowRight size={16} />
            </a>

            <Link
              to="/processes/universal-periodic-review"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              <Globe2 size={16} />
              About our UPR work
            </Link>
          </div>
        </div>
      </header>

      <FileTicker items={toolsData} />

      {/* =====================================================
          FILE LIBRARY
      ===================================================== */}

      <section
        id="tools"
        className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="max-w-2xl">
          <span className="block h-1 w-14 bg-accent" />
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            All advocacy files
          </h2>
          <p className="mt-4 leading-8 text-ink/70">
            {toolsData.length} file{toolsData.length === 1 ? "" : "s"} available.
            Search by name, or sort the list below.
          </p>
        </div>

        {/* Search + sort */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <label className="relative block flex-1">
            <span className="sr-only">Search advocacy files</span>
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/50"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search files by name"
              className="w-full border border-forest/25 bg-white py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>

          <label className="relative block sm:w-52">
            <span className="sr-only">Sort files</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="w-full appearance-none border border-forest/25 bg-white py-3 pl-4 pr-9 text-sm font-semibold text-forest focus:border-forest focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="az">Name (A–Z)</option>
              <option value="za">Name (Z–A)</option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>
        </div>

        <p className="mt-6 text-sm text-ink/55" aria-live="polite">
          Showing {visible.length} of {filtered.length} file
          {filtered.length === 1 ? "" : "s"}
          {query && ` matching "${query}"`}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${sort}-${query}`}
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="mt-4"
          >
            {visible.length > 0 ? (
              <div className="flex flex-col gap-3">
                {visible.map((item, index) => (
                  <ToolRow key={`${item.title}-${index}`} item={item} />
                ))}
              </div>
            ) : (
              <div className="border border-dashed border-forest/25 bg-white px-6 py-14 text-center">
                <p className="font-display text-xl font-bold text-forest">
                  No files match your search
                </p>
                <p className="mt-2 text-sm text-ink/60">
                  Try a different word, or clear the search to see every file.
                </p>
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="mt-5 inline-flex items-center gap-2 bg-forest px-5 py-2.5 text-sm font-bold text-white transition hover:bg-forest-dark"
                >
                  Show all files
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {visibleCount < filtered.length && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="inline-flex items-center gap-2 border border-forest px-6 py-3 text-sm font-bold text-forest transition hover:bg-forest hover:text-white"
            >
              Show {Math.min(PAGE_SIZE, filtered.length - visibleCount)} more
            </button>
          </div>
        )}
      </section>

      {/* =====================================================
          CLOSING CTA STRIP
      ===================================================== */}

      <section className="bg-forest-soft px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-forest text-white">
              <Sparkles size={16} />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-forest sm:text-lg">
                Need help using these tools?
              </h2>
              <p className="mt-1 max-w-md text-sm leading-6 text-forest/70">
                Reach out and our team will guide you to the right file or
                support your UPR engagement.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-dark"
          >
            <Mail size={15} />
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
