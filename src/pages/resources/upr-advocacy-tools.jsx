import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Download,
  FileSpreadsheet,
  FileText,
  Globe2,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";

import uprPhoto from "../../assets/impact/impact-9.png";

/*
|--------------------------------------------------------------------------
| ADD YOUR UPR ADVOCACY FILES HERE
|--------------------------------------------------------------------------
| title       : the file's name as visitors should see it
| description : one or two sentences on what it is and who it is for
| category    : any group name you like, e.g. "Guides", "Templates",
|               "Briefings", "Submissions". Tabs are created automatically
|               from the categories you use here.
| format      : "PDF" | "DOCX" | "XLSX" | "PPTX" | "LINK". Optional: if left
|               out, it is worked out from the file extension in the url.
| size        : optional, shown as written, e.g. "2.4 MB"
| date        : optional, shown as written, e.g. "Mar 2026"
| url         : where the file lives. Put files in your project's
|               public/docs/upr/ folder and use "/docs/upr/file-name.pdf",
|               or paste a full https:// link.
|
| The entries below are PLACEHOLDERS — replace them with your real files.
| Delete every entry in a category and its tab disappears automatically.
*/

const tools = [
  {
    title: "UPR advocacy guide",
    description:
      "A step-by-step guide to engaging with each stage of the Universal Periodic Review cycle.",
    category: "Guides",
    format: "PDF",
    size: "",
    date: "2026",
    url: "",
  },
  {
    title: "Stakeholder submission template",
    description:
      "A ready-to-fill template for preparing a civil society submission to the UPR.",
    category: "Templates",
    format: "DOCX",
    size: "",
    date: "2026",
    url: "",
  },
  {
    title: "Recommendations tracking sheet",
    description:
      "A spreadsheet for recording UPR recommendations and tracking their implementation status.",
    category: "Templates",
    format: "XLSX",
    size: "",
    date: "2026",
    url: "",
  },
  {
    title: "Kenya UPR briefing note",
    description:
      "A short briefing on the recommendations Kenya has received and what they mean for communities.",
    category: "Briefings",
    format: "PDF",
    size: "",
    date: "2026",
    url: "",
  },
  {
    title: "Mid-term implementation report",
    description:
      "Civil society findings on progress made against accepted UPR recommendations.",
    category: "Reports",
    format: "PDF",
    size: "",
    date: "2026",
    url: "",
  },
  {
    title: "Community awareness slides",
    description:
      "A presentation for explaining the UPR and its recommendations in community meetings.",
    category: "Presentations",
    format: "PPTX",
    size: "",
    date: "2026",
    url: "",
  },
];

/* Works out the file format from the url when "format" is not set. */
function getFormat(item) {
  if (item.format) return item.format.toUpperCase();
  const match = item.url?.match(/\.([a-z0-9]+)(?:\?|#|$)/i);
  return match ? match[1].toUpperCase() : "LINK";
}

function FileIcon({ format, size = 22 }) {
  const Icon = format === "XLSX" || format === "CSV" ? FileSpreadsheet : FileText;
  return <Icon size={size} strokeWidth={1.7} />;
}

/** A single file card. */
function ToolCard({ item }) {
  const format = getFormat(item);
  const isExternal = /^https?:\/\//i.test(item.url || "");
  const meta = [item.date, item.size].filter(Boolean).join("  ·  ");

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center bg-forest text-accent transition group-hover:bg-accent group-hover:text-forest">
          <FileIcon format={format} />
        </span>
        <span className="border border-forest/20 px-2 py-0.5 text-xs font-bold text-forest/70">
          {format}
        </span>
      </div>

      <p className="mt-5 text-sm font-semibold text-forest/55">{item.category}</p>

      <h3 className="mt-1.5 font-display text-xl font-bold leading-snug text-forest">
        {item.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-ink/65">{item.description}</p>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-forest/10 pt-4 text-xs">
        <span className="text-ink/50">{meta}</span>
        {item.url ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-forest">
            {isExternal ? "Open" : "Download"}
            {isExternal ? <ArrowUpRight size={15} /> : <Download size={15} />}
          </span>
        ) : (
          <span className="text-ink/40">Coming soon</span>
        )}
      </div>
    </>
  );

  const cardClass =
    "group flex h-full flex-col border border-forest/12 border-t-4 border-t-accent bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-t-forest hover:shadow-xl";

  return item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      {...(!isExternal ? { download: true } : {})}
      className={cardClass}
    >
      {body}
      <span className="sr-only">
        {isExternal ? "(opens in a new tab)" : "(downloads the file)"}
      </span>
    </a>
  ) : (
    <div className={cardClass}>{body}</div>
  );
}

export default function UprAdvocacyTools() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const prefersReducedMotion = useReducedMotion();

  // Only show tabs for categories that have entries.
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(tools.map((tool) => tool.category)))],
    []
  );

  const visibleTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const inCategory = category === "All" || tool.category === category;
      const inSearch =
        !q ||
        `${tool.title} ${tool.description} ${tool.category}`
          .toLowerCase()
          .includes(q);
      return inCategory && inSearch;
    });
  }, [category, query]);

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

      {/* =====================================================
          FILE LIBRARY
      ===================================================== */}

      <section
        id="tools"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="block h-1 w-14 bg-accent" />
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              All advocacy files
            </h2>
            <p className="mt-4 leading-8 text-ink/70">
              Search by name or filter by type. Files open or download
              directly.
            </p>
          </div>

          {/* Search */}
          <label className="relative block w-full lg:w-80">
            <span className="sr-only">Search advocacy files</span>
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest/50"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search files"
              className="w-full border border-forest/25 bg-white py-3 pl-10 pr-4 text-sm text-ink placeholder:text-ink/40 focus:border-forest focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </label>
        </div>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Filter files by type"
          className="mt-8 flex flex-wrap gap-2"
        >
          {categories.map((tab) => {
            const isActive = category === tab;
            const count =
              tab === "All"
                ? tools.length
                : tools.filter((tool) => tool.category === tab).length;

            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setCategory(tab)}
                className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "border-forest bg-forest text-white"
                    : "border-forest/25 bg-white text-forest hover:border-forest"
                }`}
              >
                {tab}
                <span
                  className={`text-xs font-semibold ${
                    isActive ? "text-white/70" : "text-forest/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-ink/55" aria-live="polite">
          Showing {visibleTools.length} of {tools.length} files
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${category}-${query}`}
            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            className="mt-6"
          >
            {visibleTools.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visibleTools.map((item, index) => (
                  <ToolCard key={`${item.title}-${index}`} item={item} />
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
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                  }}
                  className="mt-5 inline-flex items-center gap-2 bg-forest px-5 py-2.5 text-sm font-bold text-white transition hover:bg-forest-dark"
                >
                  Show all files
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* =====================================================
          CLOSING CTA STRIP
      ===================================================== */}

      <section className="bg-forest-soft px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
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
