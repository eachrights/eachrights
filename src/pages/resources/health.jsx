import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
  Eye,
  FileText,
  HeartPulse,
  Mail,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

import healthPhoto from "../../assets/impact/impact-3.png"; // swap for a health-specific photo

// The file list lives in its own JSON file, so adding a PDF never means
// touching this component:
//   src/data/health-tools.json
//
// Each entry: { county, title, description, date, size, url, thumbnail? }
//   county    : one of the slugs in COUNTIES below
//               ("kilifi" | "kwale" | "migori" | "homa-bay").
//   url       : a Google Drive link (written by scripts/generate-health-tools.mjs),
//               any other full https:// link, or "" for "Coming soon".
//   id        : the Drive file ID (added by the script). Entries with an id and
//               a size get View + Download buttons; others get a single Open.
//   thumbnail : optional cover image URL. If missing or broken, a document
//               icon is shown instead.
import toolsData from "../../data/health-tools.json";

// ============================================================
// COUNTIES — add or rename here and the tabs/sections follow.
// ============================================================

const COUNTIES = [
  { slug: "kilifi", name: "Kilifi" },
  { slug: "kwale", name: "Kwale" },
  { slug: "migori", name: "Migori" },
  { slug: "homa-bay", name: "Homa Bay" },
];

const countyName = (slug) =>
  COUNTIES.find((c) => c.slug === slug)?.name ?? slug;

const PAGE_SIZE = 8; // files shown per county before "Show more"

const TICKER_SECONDS_PER_ITEM = 7;
const TICKER_MIN_SECONDS = 60;

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

/** Thumbnail with a fallback icon if there's no image or it fails to load. */
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

/** One clickable card in the ticker: thumbnail, county and title. */
function TickerItem({ item, hidden }) {
  const content = (
    <>
      <Thumb
        src={item.thumbnail}
        className="h-16 w-12 shrink-0 border border-forest/15"
        iconSize={18}
      />
      <span className="w-44 text-left">
        <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-forest/55">
          {countyName(item.county)}
        </span>
        <span className="line-clamp-2 block text-sm font-semibold leading-snug text-forest">
          {item.title}
        </span>
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

/** Scrolling strip of files, right to left. The second copy is hidden from
    assistive tech and the tab order so each file is met only once. */
function FileTicker({ items }) {
  if (!items.length) return null;

  const duration = Math.max(
    TICKER_MIN_SECONDS,
    items.length * TICKER_SECONDS_PER_ITEM
  );

  const renderItems = (hidden = false) =>
    items.map((item, index) => (
      <TickerItem
        key={`${item.county}-${item.title}-${index}${hidden ? "-dup" : ""}`}
        item={item}
        hidden={hidden}
      />
    ));

  return (
    <div
      role="region"
      aria-label="Featured health files"
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

/** A single file row with View + Download (local files) or Open (external). */
function ToolRow({ item }) {
  const isExternal = /^https?:\/\//i.test(item.url || "");
  // Files synced from Google Drive carry an "id". Binary files (PDFs, etc.)
  // have a size and can be downloaded directly; native Google Docs/Sheets
  // have no size, so they only get "Open".
  const canDownloadFromDrive = Boolean(item.id && item.size);
  const downloadUrl = canDownloadFromDrive
    ? `https://drive.google.com/uc?export=download&id=${item.id}`
    : item.url;
  const meta = [item.date, item.size].filter(Boolean).join("  ·  ");

  return (
    <div className="flex items-center gap-4 border border-forest/12 bg-white px-5 py-4 transition duration-200 hover:border-forest hover:shadow-md">
      <Thumb
        src={item.thumbnail}
        className="h-14 w-11 shrink-0"
        iconSize={20}
      />

      <div className="min-w-0 flex-1">
        <h4 className="truncate font-display text-base font-bold text-forest sm:text-lg">
          {item.title}
        </h4>
        <p className="mt-0.5 line-clamp-1 text-sm leading-6 text-ink/60">
          {item.description}
        </p>
      </div>

      <div className="hidden shrink-0 text-xs text-ink/50 sm:block">{meta}</div>

      {item.url ? (
        isExternal && !canDownloadFromDrive ? (
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
              href={downloadUrl}
              {...(isExternal ? {} : { download: true })}
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

export default function Health() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("az"); // "az" | "za" | "newest" | "oldest"
  const [counts, setCounts] = useState({}); // per-county visible count
  const prefersReducedMotion = useReducedMotion();

  // Active tab lives in the URL (?county=kilifi) so a county can be linked to.
  const requested = searchParams.get("county");
  const active = COUNTIES.some((c) => c.slug === requested) ? requested : "all";

  const selectCounty = (slug) => {
    if (slug === "all") setSearchParams({}, { replace: true });
    else setSearchParams({ county: slug }, { replace: true });
  };

  // Files matching the search + sort, grouped by county.
  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matches = toolsData.filter((tool) =>
      !q ? true : `${tool.title} ${tool.description}`.toLowerCase().includes(q)
    );

    const sorter = {
      az: (a, b) => a.title.localeCompare(b.title),
      za: (a, b) => b.title.localeCompare(a.title),
      newest: (a, b) => (b.date || "").localeCompare(a.date || ""),
      oldest: (a, b) => (a.date || "").localeCompare(b.date || ""),
    }[sort];

    return Object.fromEntries(
      COUNTIES.map((c) => [
        c.slug,
        matches.filter((t) => t.county === c.slug).sort(sorter),
      ])
    );
  }, [query, sort]);

  const totalFor = (slug) =>
    toolsData.filter((t) => t.county === slug).length;

  const shownCounties =
    active === "all" ? COUNTIES : COUNTIES.filter((c) => c.slug === active);

  const matchCount = shownCounties.reduce(
    (sum, c) => sum + grouped[c.slug].length,
    0
  );

  return (
    <main className="min-h-screen bg-paper font-sans text-ink">
      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="relative isolate min-h-[420px] overflow-hidden bg-forest text-paper sm:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-accent" />

        <img
          src={healthPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6 py-10 sm:min-h-[440px] sm:px-8 sm:py-12 lg:min-h-[480px] lg:px-12 lg:py-16">
          <Link
            to="/resources/upr-advocacy-tools"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Advocacy Tools
          </Link>

          <div className="mt-3 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 bg-accent" />
            <p className="text-sm font-semibold uppercase text-white/70">
              Thematic area
            </p>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Health
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            County-level health briefings, reports and advocacy materials from
            Kilifi, Kwale, Migori and Homa Bay.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#tools"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Browse by county
              <ArrowRight size={16} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              <HeartPulse size={16} />
              Contact our health team
            </Link>
          </div>
        </div>
      </header>

      <FileTicker items={toolsData} />

      {/* =====================================================
          FILE LIBRARY — divided by county
      ===================================================== */}

      <section
        id="tools"
        className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="max-w-2xl">
          <span className="block h-1 w-14 bg-accent" />
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            Health files by county
          </h2>
          <p className="mt-4 leading-8 text-ink/70">
            {toolsData.length} file{toolsData.length === 1 ? "" : "s"} across{" "}
            {COUNTIES.length} counties. Pick a county, or search and sort
            across all of them.
          </p>
        </div>

        {/* County tabs */}
        <div
          role="tablist"
          aria-label="Filter files by county"
          className="mt-8 flex flex-wrap gap-2"
        >
          {[{ slug: "all", name: "All counties" }, ...COUNTIES].map((c) => {
            const isActive = active === c.slug;
            const total =
              c.slug === "all" ? toolsData.length : totalFor(c.slug);
            return (
              <button
                key={c.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => selectCounty(c.slug)}
                className={`inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "border-forest bg-forest text-white"
                    : "border-forest/25 bg-white text-forest hover:border-forest"
                }`}
              >
                {c.slug !== "all" && <MapPin size={14} />}
                {c.name}
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    isActive ? "bg-white/20" : "bg-forest/10"
                  }`}
                >
                  {total}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search + sort */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <label className="relative block flex-1">
            <span className="sr-only">Search health files</span>
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/50"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setCounts({});
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
          {matchCount} file{matchCount === 1 ? "" : "s"}
          {active !== "all" && ` in ${countyName(active)}`}
          {query && ` matching "${query}"`}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${active}-${sort}-${query}`}
            initial={{
              opacity: prefersReducedMotion ? 1 : 0,
              y: prefersReducedMotion ? 0 : 10,
            }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            className="mt-4 space-y-12"
          >
            {matchCount === 0 ? (
              <div className="border border-dashed border-forest/25 bg-white px-6 py-14 text-center">
                <p className="font-display text-xl font-bold text-forest">
                  No files match your search
                </p>
                <p className="mt-2 text-sm text-ink/60">
                  Try a different word, another county, or clear the search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    selectCounty("all");
                  }}
                  className="mt-5 inline-flex items-center gap-2 bg-forest px-5 py-2.5 text-sm font-bold text-white transition hover:bg-forest-dark"
                >
                  Show all files
                </button>
              </div>
            ) : (
              shownCounties.map((county) => {
                const files = grouped[county.slug];
                // While searching, hide counties with no hits in the "All" view.
                if (active === "all" && query && files.length === 0) return null;

                const limit = counts[county.slug] ?? PAGE_SIZE;
                const visible = files.slice(0, limit);

                return (
                  <section
                    key={county.slug}
                    id={county.slug}
                    aria-labelledby={`county-${county.slug}`}
                    className="scroll-mt-24"
                  >
                    <div className="flex items-center justify-between gap-4 border-b-2 border-forest/15 pb-3">
                      <h3
                        id={`county-${county.slug}`}
                        className="flex items-center gap-2.5 font-display text-2xl font-bold text-forest"
                      >
                        <MapPin size={20} className="text-accent" />
                        {county.name} County
                      </h3>
                      <span className="text-sm font-semibold text-ink/50">
                        {files.length} file{files.length === 1 ? "" : "s"}
                      </span>
                    </div>

                    {files.length > 0 ? (
                      <>
                        <div className="mt-4 flex flex-col gap-3">
                          {visible.map((item, index) => (
                            <ToolRow
                              key={`${item.title}-${index}`}
                              item={item}
                            />
                          ))}
                        </div>

                        {limit < files.length && (
                          <div className="mt-6 flex justify-center">
                            <button
                              type="button"
                              onClick={() =>
                                setCounts((prev) => ({
                                  ...prev,
                                  [county.slug]: limit + PAGE_SIZE,
                                }))
                              }
                              className="inline-flex items-center gap-2 border border-forest px-6 py-3 text-sm font-bold text-forest transition hover:bg-forest hover:text-white"
                            >
                              Show {Math.min(PAGE_SIZE, files.length - limit)}{" "}
                              more from {county.name}
                            </button>
                          </div>
                        )}
                      </>
                    ) : (
                      <p className="mt-4 border border-dashed border-forest/20 bg-white px-5 py-6 text-sm text-ink/55">
                        No files for {county.name} yet.
                      </p>
                    )}
                  </section>
                );
              })
            )}
          </motion.div>
        </AnimatePresence>
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
                Can&rsquo;t find your county&rsquo;s file?
              </h2>
              <p className="mt-1 max-w-md text-sm leading-6 text-forest/70">
                Reach out and our team will guide you to the right document or
                share what&rsquo;s still in progress.
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
