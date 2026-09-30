import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Target,
  ArrowRight,
  ArrowLeft,
  Users,
  Scale,
  Handshake,
  Search,
  CheckCircle2,
} from "lucide-react";

// Same image the Economic Justice programme uses on the Home page.
import economicJusticeImage from "../../assets/impact/impact-5.png";

/* =========================================================
   The twelve focus areas grouped into the four pillars they
   actually represent, rather than one flat list.
========================================================= */

const pillars = [
  {
    icon: Users,
    color: "#0F9D8A",
    title: "Decent Work & Economic Inclusion",
    items: [
      "Promote the right to decent work and employment.",
      "Protect labour rights and workplace equality.",
      "Promote inclusive economic opportunities for vulnerable and marginalised groups.",
    ],
  },
  {
    icon: Scale,
    color: "#F59E0B",
    title: "Responsible Business & Corporate Accountability",
    items: [
      "Enhance adherence to the Guiding Principles on Business and Human Rights.",
      "Promote adherence to the Environmental, Social and Governance Framework.",
      "Strengthen business and human rights accountability.",
      "Encourage responsible investment and sustainable development.",
    ],
  },
  {
    icon: Handshake,
    color: "#7C3AED",
    title: "Community Rights & Access to Remedy",
    items: [
      "Promote community rights and meaningful participation.",
      "Promote access to remedy and justice for affected communities.",
      "Promote environmental responsibility and corporate accountability.",
    ],
  },
  {
    icon: Search,
    color: "#2563EB",
    title: "Knowledge, Advocacy & Capacity",
    items: [
      "Conduct research, advocacy and policy engagement.",
      "Build capacity and awareness on economic rights and responsible business.",
    ],
  },
];

const frameworks = [
  "UN Guiding Principles on Business and Human Rights",
  "Environmental, Social and Governance (ESG) Framework",
];

const outcomes = [
  "Increased awareness and protection of economic and labour rights.",
  "Improved access to decent work and employment opportunities.",
  "Greater respect for human rights by businesses.",
  "Increased adoption of responsible and sustainable business practices.",
  "Stronger implementation of the UN Guiding Principles on Business and Human Rights.",
  "Greater integration of ESG considerations into business decision-making.",
  "Improved participation of communities in business and development projects.",
  "Stronger accountability for business-related human rights impacts.",
  "Improved access to grievance mechanisms and effective remedies.",
  "Reduced negative environmental and social impacts associated with business activities.",
  "Stronger policies and practices supporting inclusive economic development.",
  "Increased economic opportunities for vulnerable and marginalised groups.",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function EconomicJustice() {
  const [active, setActive] = useState(0);
  const current = pillars[active];
  const CurrentIcon = current.icon;
  const goPrev = () => setActive((i) => (i === 0 ? pillars.length - 1 : i - 1));
  const goNext = () => setActive((i) => (i === pillars.length - 1 ? 0 : i + 1));

  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={economicJusticeImage}
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
                <BriefcaseBusiness size={28} strokeWidth={1.7} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Programme 05
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Economic Justice
              <span className="block text-gold">Programme</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Advancing economic rights, decent work and responsible business
              practices that respect people, communities and the environment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pillars"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
              >
                Explore our pillars
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
          INTRODUCTION
          Narrative on the left; goal and frameworks as a
          sticky stack on the right.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,1fr] lg:gap-16">

          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                About the programme
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Where economic rights meet responsible business
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                The violation of economic rights can have a profound impact
                on individuals, workers and communities. Businesses in
                Kenya, as elsewhere in the world, can make significant
                contributions to human rights and economic development
                &mdash; through employment creation, public revenue, goods
                and services, and investments that improve people&rsquo;s
                quality of life.
              </p>
              <p>
                At the same time, business activities can have negative
                impacts on human rights, including violations of labour
                rights, displacement of communities, inadequate consultation
                or compensation, unsafe working conditions and environmental
                pollution.
              </p>
              <p>
                The Economic Justice, Business and Human Rights Programme
                works at this intersection. Through research, advocacy,
                capacity building, community engagement and accountability
                initiatives, EACHRights seeks to promote economic
                opportunities and ensure that business activities respect
                the rights, dignity and wellbeing of individuals and
                communities.
              </p>
            </div>
          </div>

          <div className="lg:pt-24">
            <div className="space-y-6 lg:sticky lg:top-28">
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-forest p-8 text-white shadow-xl sm:p-10"
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
                    A society with equal economic opportunities for all
                    individuals.
                  </p>
                </div>
              </motion.div>

              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-forest/10 bg-forest-soft p-7 sm:p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                  Guided by
                </p>
                <ul className="mt-4 space-y-3">
                  {frameworks.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-gray-700">
                      <CheckCircle2
                        size={20}
                        strokeWidth={1.8}
                        className="mt-1 shrink-0 text-[#8DC63F]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOCUS AREAS — interactive pillars
          (same pattern as the Theory of Change mechanism)
      ===================================================== */}
      <section id="pillars" className="scroll-mt-20 bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Focus areas
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Four pillars of intervention.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Our focus areas fall into four connected pillars of work, each
              reinforcing the others. Select a pillar to explore it.
            </p>
          </motion.div>

          {/* Pillar selector */}
          <div className="relative mt-14">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-1 rounded-full bg-forest/10 md:block" aria-hidden="true">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: current.color }}
                animate={{ width: `${(active / (pillars.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                const isActive = index === active;
                const isPassed = index <= active;
                return (
                  <button
                    key={pillar.title}
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    aria-pressed={isActive}
                    aria-label={`Pillar ${index + 1}: ${pillar.title}`}
                    className="group flex flex-col items-center gap-3 text-center focus:outline-none"
                  >
                    <motion.span
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white shadow-md group-focus-visible:ring-4 group-focus-visible:ring-forest/30"
                      style={{
                        borderColor: isPassed ? pillar.color : "#D1D5DB",
                        color: isPassed ? pillar.color : "#9CA3AF",
                        boxShadow: isActive ? `0 10px 25px -8px ${pillar.color}` : undefined,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </motion.span>
                    <span
                      className="rounded-full px-4 py-1.5 text-xs font-bold uppercase leading-snug tracking-wider text-white transition-opacity"
                      style={{ backgroundColor: pillar.color, opacity: isActive ? 1 : 0.55 }}
                    >
                      {pillar.title}
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
                      Pillar {active + 1} of {pillars.length}
                    </p>
                    <h3 className="text-xl font-bold sm:text-2xl" style={{ color: current.color }}>
                      {current.title}
                    </h3>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {current.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-7 text-gray-600">
                      <span
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: current.color }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

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
          EXPECTED OUTCOMES — card grid, same style as the
          Theory of Change programme cards
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Expected outcomes
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              What changes as a result.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => (
              <motion.article
                key={item}
                {...fadeUp}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-forest via-[#8DC63F] to-gold" />
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                      <CheckCircle2 size={26} strokeWidth={1.7} />
                    </div>
                    <span className="font-display text-4xl font-bold text-forest/15 transition-colors group-hover:text-[#8DC63F]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-forest">{item}</p>
                </div>
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
            <BriefcaseBusiness size={26} strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Support economic justice
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to advance economic rights, decent work and
            responsible business practices across communities.
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
