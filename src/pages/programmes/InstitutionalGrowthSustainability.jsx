import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Target,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  Users2,
  Megaphone,
  Database,
  BarChart3,
} from "lucide-react";

// Same image the Institutional Growth and Sustainability programme uses on the Home page.
import institutionalImage from "../../assets/impact/impact-8.png";

/* =========================================================
   Placeholder intervention areas — swap in the actual
   strategic-plan text for this focus area once available.
   `label` is the short name shown under each step button.
========================================================= */

const interventions = [
  {
    icon: ShieldCheck,
    color: "#0F9D8A",
    label: "Governance",
    title: "Strengthen governance",
    text: "Reinforce board oversight, policies and accountability systems that underpin sound institutional practice.",
  },
  {
    icon: TrendingUp,
    color: "#F59E0B",
    label: "Resources",
    title: "Diversify resource mobilization",
    text: "Broaden and stabilize our funding base to reduce reliance on any single source and support long-term planning.",
  },
  {
    icon: Users2,
    color: "#7C3AED",
    label: "People and Systems",
    title: "Invest in people and systems",
    text: "Build staff capacity, knowledge management and operational systems that keep the organisation effective as it grows.",
  },
  {
    icon: Megaphone,
    color: "#2563EB",
    label: "Visibility",
    title: "Communication and visibility",
    text: "Enhance our communication strategies and visibility to increase awareness and support for our work.",
  },
  {
    icon: Database,
    color: "#3FA535",
    label: "Data and Security",
    title: "Data and Information System Management and Security",
    text: "Data and information system management and security is a critical aspect of institutional growth and sustainability. It involves implementing robust data management practices, ensuring data privacy and security, and leveraging technology to enhance operational efficiency.",
  },
  {
    icon: BarChart3,
    color: "#0B5C7E",
    label: "MEL",
    title: "Monitoring, Evaluation and Learning",
    text: "Monitoring, evaluation, and learning (MEL) is a crucial component of institutional growth and sustainability. It involves systematically tracking progress, assessing the effectiveness of programs and initiatives, and using insights gained to inform decision-making and continuous improvement.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function InstitutionalGrowthSustainability() {
  const [active, setActive] = useState(0);
  const current = interventions[active];
  const CurrentIcon = current.icon;
  const goPrev = () => setActive((i) => (i === 0 ? interventions.length - 1 : i - 1));
  const goNext = () => setActive((i) => (i === interventions.length - 1 ? 0 : i + 1));

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
          INTERVENTION FOCUS AREAS — interactive, six steps
          (same pattern as the Theory of Change mechanism)
      ===================================================== */}
      <section id="interventions" className="scroll-mt-20 bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Focus areas
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Six foundations of a lasting institution.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Our interventions address the governance, resourcing and
              capacity foundations this focus area is built on. Select one to
              explore it.
            </p>
          </motion.div>

          {/* Step selector */}
          <div className="relative mt-14">
            <div className="absolute left-[8.33%] right-[8.33%] top-8 hidden h-1 rounded-full bg-forest/10 lg:block" aria-hidden="true">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: current.color }}
                animate={{ width: `${(active / (interventions.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="relative grid grid-cols-3 gap-y-8 lg:grid-cols-6">
              {interventions.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === active;
                const isPassed = index <= active;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    aria-pressed={isActive}
                    aria-label={`Focus area ${index + 1}: ${item.title}`}
                    className="group flex flex-col items-center gap-3 text-center focus:outline-none"
                  >
                    <motion.span
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white shadow-md group-focus-visible:ring-4 group-focus-visible:ring-forest/30"
                      style={{
                        borderColor: isPassed ? item.color : "#D1D5DB",
                        color: isPassed ? item.color : "#9CA3AF",
                        boxShadow: isActive ? `0 10px 25px -8px ${item.color}` : undefined,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </motion.span>
                    <span
                      className="rounded-full px-3 py-1.5 text-xs font-bold uppercase leading-snug tracking-wider text-white transition-opacity sm:px-4"
                      style={{ backgroundColor: item.color, opacity: isActive ? 1 : 0.55 }}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="mx-auto mt-12 max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border-l-8 bg-white p-8 shadow-lg sm:p-10"
                style={{ borderLeftColor: current.color }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: current.color }}
                  >
                    <CurrentIcon size={24} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Focus area {active + 1} of {interventions.length}
                    </p>
                    <h3 className="text-xl font-bold leading-snug sm:text-2xl" style={{ color: current.color }}>
                      {current.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-lg leading-8 text-gray-600">{current.text}</p>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:-translate-x-0.5"
                  >
                    <ArrowLeft size={16} />
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition hover:translate-x-0.5"
                  >
                    Next
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
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
