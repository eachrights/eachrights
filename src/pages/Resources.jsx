import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, LayoutGrid, ArrowUpRight, ArrowLeft, Sparkles, Mail } from "lucide-react";

import resourcesPhoto from "../assets/hero/resources-photo.png";

// ============================================================
// RESOURCE LINK CARDS
// ============================================================

const resourceLinks = [
  {
    title: "Publications",
    tagline: "Research & reports",
    description:
      "Strategic plans, annual reports and programme research produced by EACHRights — organised by cluster, ready to read or download.",
    stat: "Strategic Plans · Annual Reports · Programmes",
    icon: FileText,
    to: "/resources/publications",
  },
  {
    title: "Portals",
    tagline: "Dashboards & tools",
    description:
      "Our live dashboards and tracking tools, including the SRHR Portal and the UPR Recommendations Tracking Dashboard.",
    stat: "SRHR Portal · UPR Dashboard",
    icon: LayoutGrid,
    to: "/resources/portals",
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Resources() {
  return (
    <main className="bg-white font-sans text-ink">
      {/* ======================================================
          HERO
      ====================================================== */}

      <header className="relative isolate min-h-[420px] overflow-hidden bg-forest text-paper sm:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-accent" />

        <img
          src={resourcesPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6 py-10 sm:min-h-[440px] sm:px-8 sm:py-12 lg:min-h-[480px] lg:px-12 lg:py-16">
          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Home
          </Link>

          <div className="mt-3 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 bg-accent" />
            <p className="text-sm font-semibold text-white/70">RESOURCE HUB</p>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Resources
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            Everything EACHRights publishes and builds — research, reports
            and live dashboards — gathered in one place.
          </p>
        </div>
      </header>

      {/* ======================================================
          CARDS
      ====================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {resourceLinks.map(({ title, tagline, description, stat, icon: Icon, to }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={to}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-forest/20 hover:shadow-2xl hover:shadow-forest/10"
                >
                  {/* Decorative oversized watermark icon */}
                  <Icon
                    size={140}
                    strokeWidth={1}
                    className="pointer-events-none absolute -right-6 -top-6 text-forest/[0.04] transition duration-500 group-hover:scale-110 group-hover:text-forest/[0.06]"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-forest to-forest-dark text-white shadow-md shadow-forest/20 transition duration-300 group-hover:scale-105">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#6fa82f]">
                      {tagline}
                    </p>

                    <h2 className="mt-1.5 font-display text-2xl font-bold text-ink">{title}</h2>

                    <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>

                    <p className="mt-4 border-t border-gray-100 pt-4 text-xs font-medium text-gray-400">
                      {stat}
                    </p>
                  </div>

                  <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-forest">
                    Explore
                    <ArrowUpRight
                      size={16}
                      className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          CLOSING CTA STRIP
      ====================================================== */}

      <section className="bg-forest-soft px-6 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-forest text-white">
              <Sparkles size={16} />
            </div>
            <div>
              <h2 className="font-display text-base font-bold text-forest sm:text-lg">
                Can't find what you're looking for?
              </h2>
              <p className="mt-1 max-w-md text-sm leading-6 text-forest/70">
                Reach out and our team will point you to the right document or dashboard.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest-dark"
          >
            <Mail size={15} />
            Contact us
          </a>
        </div>
      </section>
    </main>
  );
}
