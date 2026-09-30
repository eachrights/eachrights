import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  LayoutGrid,
  Globe2,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Mail,
} from "lucide-react";

import resourcesPhoto from "../assets/hero/resources-photo.png";

// ============================================================
// RESOURCE LINK CARDS
// Each card has its own colour pair (from → to).
// ============================================================

const resourceLinks = [
  {
    title: "Portals",
    tagline: "Dashboards & tools",
    description:
      "Our live dashboards and tracking tools, including the SRHR Portal and the UPR Recommendations Tracking Dashboard.",
    chips: ["SRHR Portal", "UPR Dashboard"],
    icon: LayoutGrid,
    to: "/resources/portals",
    from: "#0F9D8A",
    to2: "#0A6B5E",
  },
  {
    title: "Publications",
    tagline: "Research & reports",
    description:
      "Strategic plans, annual reports and programme research produced by EACHRights — organised by cluster, ready to read or download.",
    chips: ["Strategic Plans", "Annual Reports", "Programmes"],
    icon: FileText,
    to: "/resources/publications",
    from: "#7C3AED",
    to2: "#5B21B6",
  },
  {
    title: "UPR Advocacy Tools",
    tagline: "UN engagement",
    description:
      "Tools to support engagement with the Universal Periodic Review, from tracking recommendations to following up on their implementation.",
    chips: ["Recommendations", "Submissions", "Follow-up"],
    icon: Globe2,
    to: "/resources/upr-advocacy-tools",
    from: "#2563EB",
    to2: "#1E40AF",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Resources() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* ======================================================
          HERO
      ====================================================== */}

      <header className="relative isolate overflow-hidden bg-neutral-900 text-white">
        <img
          src={resourcesPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Home
            </Link>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Resource Hub
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Resources<span className="text-gold">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Everything EACHRights publishes and builds &mdash; research,
              reports and live dashboards &mdash; gathered in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#resources"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
              >
                Browse resources
                <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </header>

      {/* ======================================================
          CARDS
      ====================================================== */}

      <section id="resources" className="scroll-mt-20 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Explore
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Three ways into our work.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Choose a collection to start exploring our dashboards, research
              and advocacy tools.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resourceLinks.map(
              ({ title, tagline, description, chips, icon: Icon, to, from, to2 }, index) => (
                <motion.div
                  key={title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={to}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 sm:p-9"
                    style={{
                      backgroundImage: `linear-gradient(145deg, ${from} 0%, ${to2} 100%)`,
                      boxShadow: `0 18px 40px -20px ${to2}`,
                    }}
                  >
                    {/* Decorative shapes */}
                    <Icon
                      size={190}
                      strokeWidth={0.8}
                      className="pointer-events-none absolute -right-10 -top-10 text-white/10 transition duration-500 group-hover:scale-110 group-hover:rotate-6"
                      aria-hidden="true"
                    />
                    <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full border-[24px] border-white/5" />

                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-white/25">
                        <Icon size={26} strokeWidth={1.7} />
                      </div>

                      <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white/75">
                        {tagline}
                      </p>

                      <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                        {title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-white/85">
                        {description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {chips.map((chip) => (
                          <span
                            key={chip}
                            className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-8">
                      <span
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold transition duration-300 group-hover:gap-3"
                        style={{ color: to2 }}
                      >
                        Explore
                        <ArrowUpRight
                          size={16}
                          className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ======================================================
          CLOSING CTA
      ====================================================== */}

      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12 lg:py-20">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Mail size={26} strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Can&rsquo;t find what you&rsquo;re looking for?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Reach out and our team will point you to the right document or
            dashboard.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
            >
              Contact us
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
