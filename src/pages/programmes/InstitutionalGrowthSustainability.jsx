import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Target,
  ArrowRight,
  ShieldCheck,
  Users2,
  TrendingUp,
  Wallet,
  ClipboardCheck,
  Megaphone,
  Database,
  BarChart3,
} from "lucide-react";

// Same image the Institutional Growth and Sustainability programme uses on the Home page.
import institutionalImage from "../../assets/impact/impact-8.png";

/* =========================================================
   Intervention focus areas
========================================================= */

const focusAreas = [
  {
    icon: ShieldCheck,
    color: "#0F9D8A",
    text: "Strengthen organizational leadership and governance.",
  },
  {
    icon: Users2,
    color: "#F59E0B",
    text: "Human Resource Management.",
  },
  {
    icon: TrendingUp,
    color: "#7C3AED",
    text: "Fundraising and resource mobilization.",
  },
  {
    icon: Wallet,
    color: "#2563EB",
    text: "Strengthen finance systems and internal controls.",
  },
  {
    icon: ClipboardCheck,
    color: "#3FA535",
    text: "Risk and compliance.",
  },
  {
    icon: Megaphone,
    color: "#0B5C7E",
    text: "Communication and visibility.",
  },
  {
    icon: Database,
    color: "#DB2777",
    text: "Data and Information System Management and Security.",
  },
  {
    icon: BarChart3,
    color: "#EA580C",
    text: "Monitoring, Evaluation, and Learning.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function InstitutionalGrowthSustainability() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={institutionalImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Legibility overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                <Building2 size={28} strokeWidth={1.7} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Focus Area
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Institutional Growth
              <span className="block text-gold">and Sustainability</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Building a resilient, well-governed organisation capable of
              sustaining its human rights impact over the long term.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#interventions"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
              >
                Explore our focus areas
                <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
          INTRODUCTION — placeholder narrative; replace with
          the actual strategic-plan text once available.
          Narrative on the left, goal as a sticky card on the right.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,1fr] lg:gap-16">

          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                About this focus area
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                A stronger institution for lasting impact
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Sustained human rights work depends on more than programmes
                alone &mdash; it depends on the strength of the institution
                behind them. Sound governance, a diversified resource base,
                and capable systems and staff are what allow an organisation
                to keep delivering impact over the long term, even as needs
                and funding landscapes shift.
              </p>
              <p>
                The Institutional Growth and Sustainability focus area is
                designed to strengthen EACHRights&rsquo; internal foundations
                &mdash; governance, resourcing, and organisational capacity
                &mdash; so that our other programmes can be delivered
                effectively and sustained well into the future.
              </p>
            </div>
          </div>

          <div className="lg:pt-24">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-forest p-8 text-white shadow-xl sm:p-10 lg:sticky lg:top-28"
            >
              <Target
                size={110}
                strokeWidth={1.2}
                className="absolute -right-4 -top-4 text-white/10"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="h-1 w-12 rounded-full bg-gold" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Programme goal
                </p>
                <p className="mt-3 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                  To build a resilient, well-governed organisation capable of
                  sustaining its human rights impact over the long term.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERVENTION FOCUS AREAS
      ===================================================== */}
      <section
        id="interventions"
        className="scroll-mt-20 bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Focus areas
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Intervention focus areas
            </h2>
          </motion.div>

          <div
            className={`mt-14 grid gap-6 ${
              focusAreas.length === 1
                ? "mx-auto max-w-2xl"
                : focusAreas.length === 2
                ? "mx-auto max-w-4xl md:grid-cols-2"
                : focusAreas.length === 3
                ? "md:grid-cols-3"
                : "sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {focusAreas.map(({ icon: Icon, color, text }, index) => (
              <motion.article
                key={text}
                {...fadeUp}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border-t-8 bg-white p-6 shadow-lg transition-shadow hover:shadow-xl sm:p-7"
                style={{ borderTopColor: color }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={24} strokeWidth={1.8} />
                  </div>
                  <span
                    className="font-display text-4xl font-bold opacity-20"
                    style={{ color }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-5 text-base font-semibold leading-7 text-ink">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12 lg:py-20">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Building2 size={26} strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Support Institutional Growth and Sustainability
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to strengthen the institution behind our human
            rights work, so it can keep delivering impact for years to come.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
