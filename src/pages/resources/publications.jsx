import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FileText,
  Download,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  BookOpen,
} from "lucide-react";

import publicationsHero from "../../assets/publications/publications-hero.png";

// ============================================================
// PUBLICATION PDFs
// ============================================================

import strategicPlan2026 from "../../assets/publications/STRATEGIC PLAN 2026-2030.pdf";
import educationSchools from "../../assets/publications/Build Us More Schools (Full Version).pdf";
import surveyReport from "../../assets/publications/EACHRights Perception Survey Report.pdf";
import strategicPlan2023 from "../../assets/publications/EACHRights Trust Strategic Plan 4 (2019-2023).pdf";
import strategicPlan2011 from "../../assets/publications/EACHRights_Trust_Strategic_Plan_2011-2012.pdf";
import annualReport2020 from "../../assets/publications/EACHRights-Annual-Report-2020.pdf";
import ssnfgm from "../../assets/publications/Shifts in Social Norms Around FGMC in Garissa County.pdf";

// ============================================================
// PUBLICATION THUMBNAILS
// ============================================================

import strategicPlan2026Thumb from "../../assets/publication-thumbs/STRATEGIC PLAN 2026-2030.png";
import educationSchoolsThumb from "../../assets/publication-thumbs/Build Us More Schools (Full Version).png";
import surveyReportThumb from "../../assets/publication-thumbs/EACHRights Perception Survey Report.png";
import strategicPlan2023Thumb from "../../assets/publication-thumbs/EACHRights Trust Strategic Plan 4 (2019-2023).png";
import strategicPlan2011Thumb from "../../assets/publication-thumbs/EACHRights_Trust_Strategic_Plan_2011-2012.png";
import annualReport2020Thumb from "../../assets/publication-thumbs/EACHRights-Annual-Report-2020.png";
import ssnfgmThumb from "../../assets/publication-thumbs/Shifts in Social Norms Around FGMC in Garissa County.png";

/*
|--------------------------------------------------------------------------
| STRUCTURE — one page, arranged into clear clusters
|--------------------------------------------------------------------------
| 1. Strategic Plans
| 2. Annual Reports
| 3. Economic and Social Rights
| 4. Programmes — split into the 5 active programmes, and within each
|    programme, into Baseline Research / Mid-term Reports /
|    Policy & Advocacy Briefs.
|
| Category publications carry `category`. Programme publications carry
| `programme` and `docType` instead. Empty groups simply don't render —
| no placeholders.
*/

const PROGRAMMES = [
  "Education Justice",
  "Gender Justice",
  "Health Justice",
  "Environmental & Climate Justice",
  "Economic Justice, Business and Human Rights",
];

const DOC_TYPES = ["Baseline Research", "Mid-term Reports", "Policy & Advocacy Briefs"];

// ============================================================
// PUBLICATIONS DATA
// ============================================================

const publications = [
  {
    title: "Strategic Plan 2026–2030",
    category: "Strategic Plans",
    year: "2026",
    description:
      "EACHRights Strategic Plan 2026–2030 provides a five-year roadmap for advancing human rights, dignity and social justice, with a focus on vulnerable and marginalized communities.",
    pdf: strategicPlan2026,
    thumb: strategicPlan2026Thumb,
  },
  {
    title: "Strategic Plan 2019–2023",
    category: "Strategic Plans",
    year: "2019",
    description:
      "EACHRights' fourth strategic plan focused on strengthening advocacy, capacity building, knowledge management, partnerships and institutional development to advance economic, social and cultural rights.",
    pdf: strategicPlan2023,
    thumb: strategicPlan2023Thumb,
  },
  {
    title: "Strategic Plan 2011–2012",
    category: "Strategic Plans",
    year: "2011",
    description:
      "EACHRights' first strategic plan established the organisation's direction for promoting human rights, with particular emphasis on economic, social and cultural rights and social justice.",
    pdf: strategicPlan2011,
    thumb: strategicPlan2011Thumb,
  },
  {
    title: "EACHRights Annual Report 2020",
    category: "Annual Reports",
    year: "2020",
    description:
      "The 2020 annual report highlights EACHRights' work in child rights advocacy, education, prevention of harmful practices, Universal Periodic Review engagement and partnerships during the COVID-19 period.",
    pdf: annualReport2020,
    thumb: annualReport2020Thumb,
  },
  {
    title: "EACHRights Perception Survey Report",
    category: "Economic and Social Rights",
    year: "2011",
    description:
      "A survey exploring public awareness and understanding of economic, social and cultural rights among government actors, civil society and communities in selected areas of Nairobi.",
    pdf: surveyReport,
    thumb: surveyReportThumb,
  },
  {
    title: "Build Us More Schools!",
    programme: "Education Justice",
    docType: "Baseline Research",
    year: "2024",
    description:
      "A research report examining the need for quality, free public schools in Mabatini and Ngei Wards in Mathare, Nairobi, highlighting community voices and calls for improved access to education.",
    pdf: educationSchools,
    thumb: educationSchoolsThumb,
  },
  {
    title: "Shifts in Social Norms Around FGM/C in Garissa County",
    programme: "Gender Justice",
    docType: "Baseline Research",
    year: "2025",
    description:
      "A 2025 study examining changing social norms around FGM/C in Garissa County and highlighting the role of community dialogue, youth engagement, religious leaders and education.",
    pdf: ssnfgm,
    thumb: ssnfgmThumb,
  },
];

// Publications featured in the hero carousel — newest first.
const heroPublications = [...publications]
  .sort((a, b) => Number(b.year) - Number(a.year))
  .slice(0, 4);

const HERO_PUB_INTERVAL = 5000;

// ============================================================
// PUBLICATION THUMBNAIL COMPONENT
// ============================================================

function PublicationThumb({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-forest-soft"
        aria-label="Publication preview unavailable"
      >
        <FileText size={34} className="text-forest/40" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-100">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-forest-soft">
          <FileText size={34} className="text-forest/30" strokeWidth={1.5} />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

// ============================================================
// PUBLICATION CARD — full size, with description
// ============================================================

function PublicationCard({ publication, index }) {
  const badgeLabel = publication.docType || publication.category;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.2) }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-gray-100">
        <PublicationThumb src={publication.thumb} alt={`${publication.title} publication cover`} />

        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-600 shadow-sm">
          PDF
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-forest">{badgeLabel}</p>

        <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-ink">{publication.title}</h3>

        <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-500">
          <CalendarDays size={13} aria-hidden="true" />
          <span>Published {publication.year}</span>
        </div>

        <p className="mt-3 line-clamp-4 flex-1 text-xs leading-5 text-gray-600">{publication.description}</p>

        <div className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-4">
          <a
            href={publication.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-forest px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-forest-dark focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
          >
            <ExternalLink size={13} />
            View
          </a>

          <a
            href={publication.pdf}
            download
            className="inline-flex items-center gap-1.5 rounded-lg border border-forest/20 px-3.5 py-2 text-xs font-semibold text-forest transition hover:bg-forest-soft focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2"
          >
            <Download size={13} />
            Download
          </a>
        </div>
      </div>
    </motion.article>
  );
}

// ============================================================
// A GRID OF CARDS — reused for every group below
// ============================================================

function PublicationGrid({ items }) {
  if (items.length === 0) return null;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((publication, index) => (
        <PublicationCard key={publication.title} publication={publication} index={index} />
      ))}
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Publications() {
  const [currentHeroPub, setCurrentHeroPub] = useState(0);
  const heroPubTimerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const strategicPlans = publications.filter((p) => p.category === "Strategic Plans");
  const annualReports = publications.filter((p) => p.category === "Annual Reports");
  const economicSocialRights = publications.filter((p) => p.category === "Economic and Social Rights");

  // ----------------------------------------------------------
  // HERO CAROUSEL
  // ----------------------------------------------------------

  const startHeroPubTimer = () => {
    clearInterval(heroPubTimerRef.current);

    heroPubTimerRef.current = setInterval(() => {
      setCurrentHeroPub((previous) => (previous + 1) % heroPublications.length);
    }, HERO_PUB_INTERVAL);
  };

  useEffect(() => {
    startHeroPubTimer();
    return () => clearInterval(heroPubTimerRef.current);
  }, []);

  const goToHeroPub = (index) => {
    setCurrentHeroPub(index);
    startHeroPubTimer();
  };

  const goToPreviousHeroPub = () => {
    goToHeroPub((currentHeroPub - 1 + heroPublications.length) % heroPublications.length);
  };

  const goToNextHeroPub = () => {
    goToHeroPub((currentHeroPub + 1) % heroPublications.length);
  };

  const activeHeroPub = heroPublications[currentHeroPub];

  const heroPubLabel = (publication) => publication.docType || publication.category;

  const heroPubMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, scale: 1.03 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
        transition: { duration: 0.55, ease: "easeInOut" },
      };

  return (
    <main className="bg-white font-sans text-ink">
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="relative isolate flex min-h-[720px] flex-col justify-center overflow-hidden bg-forest text-black sm:min-h-[600px] lg:min-h-[540px]">
        <img
          src={publicationsHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-36 -left-36 h-80 w-80 rounded-full border border-white/10"
          aria-hidden="true"
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-10">
          <div className="flex items-center justify-between">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/70 transition hover:text-black"
            >
              <ArrowLeft size={16} />
              Resources
            </Link>

            <Link
              to="/resources/portals"
              className="inline-flex items-center gap-1.5 rounded-full border border-black/15 bg-white/10 px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/20"
            >
              Explore our Portals
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-5 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* HERO CONTENT */}
            <div className="max-w-2xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <BookOpen size={20} strokeWidth={1.7} />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-black/60">
                Resources
              </p>

              <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Publications
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-black text-bold sm:text-base">
                Explore research, reports, strategic documents and programme
                publications produced by EACHRights to advance human rights,
                social justice and human dignity.
              </p>
            </div>

            {/* HERO RESOURCES */}
            <div className="mx-auto flex w-full max-w-lg flex-wrap justify-center gap-5">
              {/* PUBLICATION CAROUSEL */}
              <div className="w-full max-w-[210px]">
                <div className="group relative bg-white p-2 shadow-xl">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50">
                    <AnimatePresence initial={false} mode="sync">
                      <motion.div key={activeHeroPub.title} {...heroPubMotion} className="absolute inset-0">
                        <PublicationThumb
                          src={activeHeroPub.thumb}
                          alt={`${activeHeroPub.title} publication cover`}
                        />
                      </motion.div>
                    </AnimatePresence>

                    <button
                      type="button"
                      onClick={goToPreviousHeroPub}
                      aria-label="Previous featured publication"
                      className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-forest/10 bg-white/95 text-forest opacity-0 shadow-sm transition hover:bg-white focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-forest group-hover:opacity-100"
                    >
                      <ArrowLeft size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={goToNextHeroPub}
                      aria-label="Next featured publication"
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-forest/10 bg-white/95 text-forest opacity-0 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-forest group-hover:opacity-100"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>

                  <div className="p-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-forest/60">
                      {heroPubLabel(activeHeroPub)}
                    </p>

                    <h2 className="mt-1 text-xs font-bold leading-snug text-forest">{activeHeroPub.title}</h2>

                    <p className="mt-1 text-[10px] text-gray-500">{activeHeroPub.year}</p>
                  </div>
                </div>

                <div className="mt-3 flex justify-center gap-2" aria-label="Featured publications">
                  {heroPublications.map((publication, index) => (
                    <button
                      key={publication.title}
                      type="button"
                      onClick={() => goToHeroPub(index)}
                      aria-label={`Show ${publication.title}`}
                      aria-current={currentHeroPub === index ? "true" : undefined}
                      className="group/dot flex items-center justify-center p-1"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          currentHeroPub === index
                            ? "w-6 bg-accent"
                            : "w-1.5 bg-black/20 group-hover/dot:bg-black/40"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-6 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* ======================================================
          1. STRATEGIC PLANS
      ====================================================== */}

      <section className="px-6 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Strategic Plans
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/60">
            Our roadmaps for advancing human rights, dignity and social justice.
          </p>

          <div className="mt-6">
            <PublicationGrid items={strategicPlans} />
          </div>
        </div>
      </section>

      {/* ======================================================
          2. ANNUAL REPORTS
      ====================================================== */}

      <section className="px-6 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Annual Reports
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/60">
            A year-by-year record of our programmes, partnerships and impact.
          </p>

          <div className="mt-6">
            <PublicationGrid items={annualReports} />
          </div>
        </div>
      </section>

      {/* ======================================================
          3. ECONOMIC AND SOCIAL RIGHTS
      ====================================================== */}

      <section className="px-6 pt-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Economic and Social Rights
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/60">
            Research and survey work on economic, social and cultural rights.
          </p>

          <div className="mt-6">
            <PublicationGrid items={economicSocialRights} />
          </div>
        </div>
      </section>

      {/* ======================================================
          4. PROGRAMMES — 5 programmes, each split by doc type
      ====================================================== */}

      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">Programmes</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink/60">
            Baseline research, mid-term reports and policy &amp; advocacy briefs from each of our five programmes.
          </p>

          <div className="mt-10 flex flex-col gap-14">
            {PROGRAMMES.map((programme) => {
              const programmePubs = publications.filter((p) => p.programme === programme);
              if (programmePubs.length === 0) return null;

              return (
                <div key={programme}>
                  <h3 className="font-display text-xl font-bold text-forest">{programme}</h3>

                  <div className="mt-5 flex flex-col gap-8">
                    {DOC_TYPES.map((docType) => {
                      const docs = programmePubs.filter((p) => p.docType === docType);
                      if (docs.length === 0) return null;

                      return (
                        <div key={docType}>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest/60">
                            {docType}
                          </p>

                          <div className="mt-3">
                            <PublicationGrid items={docs} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================
          ACCESS INFORMATION
      ====================================================== */}

      <section className="bg-white px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="border border-forest/10 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-forest text-white">
                <Download size={23} />
              </div>

              <div>
                <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">Access our publications</h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  Our publications provide research, evidence, programme
                  information and institutional knowledge that contribute to
                  discussions on human rights, social justice and sustainable
                  development.
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base">
                  Publications are available in PDF format for online viewing
                  and download.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
