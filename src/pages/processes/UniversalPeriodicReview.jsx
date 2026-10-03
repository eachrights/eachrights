import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Handshake,
  Globe2,
  Scale,
  Users,
  Layers,
  FileText,
  FileCheck2,
  TrendingUp,
  CheckCircle2,
  CalendarDays,
  Target,
  Network,
  Megaphone,
} from "lucide-react";

// Hero photo (same image as the Theory of Change page). Swap for another if you prefer.
import uprHeroImage from "../../assets/videos/rightsintoaction.png";

/* =========================================================
   DATA
========================================================= */

// A cycle can optionally carry a `link` ({ to, label }); when present it is
// shown as a button under the cycle's detail text.
const cycles = [
  {
    year: "2010",
    label: "1st Cycle",
    color: "#0F9D8A",
    //detail: " recommendations received · 192 accepted,",

  },
  {
    year: "2015",
    label: "2nd Cycle",
    color: "#F59E0B",
    detail: "253 recommendations received · 192 accepted, 61 noted",
  },
  {
    year: "2020",
    label: "3rd Cycle",
    color: "#7C3AED",
    detail: "319 recommendations received · 261 accepted, 53 noted",
    link: {
      to: "/resources/upr-advocacy-tools",
      label: "UPR Advocacy Tools",
    },
  },
  {
    year: "2025",
    label: "4th Cycle",
    color: "#2563EB",
    detail: "339 recommendations received · 233 accepted, 106 noted",
  },
];

// Hero figures — the reach of the UPR Kenya coalition.
const heroStats = [
  { icon: Users, value: "400+", label: "Member organisations coordinated in Kenya" },
  { icon: Layers, value: "30+", label: "Thematic groups" },
  { icon: FileText, value: "40+", label: "Civil society reports submitted in the 4th cycle" },
  { icon: Globe2, value: "20+", label: "Countries supported" },
];

// The coalition's thematic groups are organised into three clusters.
const clusters = [
  "Civil and Political Rights",
  "Economic, Social and Cultural Rights",
  "Group Rights",
];

/* =========================================================
   Strategic focus area: intervention focus areas
========================================================= */

const focusAreas = [
  {
    icon: Network,
    color: "#0F9D8A",
    text: "Coordination of UPR Kenya.",
  },
  {
    icon: Megaphone,
    color: "#F59E0B",
    text: "Advocacy on EACHRights thematic focus areas using the UPR mechanism.",
  },
];

const achievements = [
  "Sustained dedication and commitment to the Universal Periodic Review process among Kenyan stakeholders throughout each cycle.",
  "A growing number of CSOs and thematic groups joining the process ahead of the 3rd Cycle.",
  "Stronger recognition of the indivisibility and interrelatedness of human rights, bringing together organisations across different thematic areas.",
  "Coordinated fundraising and resource mobilization that kept the Universal Periodic Review process running with support from multiple organisations.",
  "In-depth research for the Mid-Term Report that produced a credible baseline for the 3rd Cycle review.",
  "Evidence-based advocacy, using credible data to support assertions and propose solutions that benefit the people of Kenya.",
  "Reinforcement that the Universal Periodic Review is a process, not an event — tracking issues from submission drafting through to implementation and the next Mid-Term Report.",
  "Expanded participation from previously underrepresented thematic groups, including Social Justice Centres, Persons with Disabilities, Counter Trafficking, and HIV/AIDS groups.",
  "Growing recognition among organisations of the value of the Universal Periodic Review, leading more to seek funding to support the process.",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function UniversalPeriodicReview() {
  const [active, setActive] = useState(0);
  const current = cycles[active];
  const goPrev = () => setActive((i) => (i === 0 ? cycles.length - 1 : i - 1));
  const goNext = () => setActive((i) => (i === cycles.length - 1 ? 0 : i + 1));

  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        {/* Background photo */}
        <img
          src={uprHeroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Legibility overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:px-12 lg:pb-24 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <Link
              to="/resources"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Resources
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                <Globe2 size={28} strokeWidth={1.7} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Human Rights Mechanisms
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Universal Periodic
              <span className="block text-gold">Review (UPR KENYA)</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              A unique inter-governmental peer-review mechanism ensuring every
              UN Member State&rsquo;s human rights record is reviewed on equal
              footing, every five years.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kenya"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
              >
                Kenya&rsquo;s review cycles
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

          {/* Key figures — one frosted panel, hairline dividers between cells */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            aria-label="UPR Kenya in numbers"
            className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 shadow-2xl lg:grid-cols-4"
          >
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-black/45 p-5 backdrop-blur-md sm:p-6"
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-gold ring-1 ring-white/20"
                    aria-hidden="true"
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <dt className="mt-4 font-display text-4xl font-bold leading-none text-gold sm:text-5xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-5 text-white/80">
                    {stat.label}
                  </dd>
                </div>
              );
            })}
          </motion.dl>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
          WHAT IS THE UPR
          Narrative on the left, sticky card on the right.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,1fr] lg:gap-16">

          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                What is the Universal Periodic Review?
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                A State-driven peer-review process.
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                In 2006, the UN General Assembly adopted Resolution 60/251,
                establishing the Human Rights Council to promote universal
                respect for human rights and fundamental freedoms across
                Member States. One of its key mandates is the Universal
                Periodic Review (UPR), which ensures the fulfilment of each
                State&rsquo;s human rights obligations and commitments.
              </p>
              <p>
                Every one of the 194 UN Member States is reviewed every five
                years, under the same rules and supervision, regardless of
                size or political influence &mdash; giving each State an
                opportunity to declare what it has done to improve its human
                rights situation. The ultimate aim of the mechanism is to
                improve the human rights situation across all countries and
                to address human rights violations wherever they occur.
              </p>
            </div>
          </div>

          <div className="lg:pt-24">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-forest p-8 text-white shadow-xl sm:p-10 lg:sticky lg:top-28"
            >
              <Globe2
                size={110}
                strokeWidth={1.2}
                className="absolute -right-4 -top-4 text-white/10"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="h-1 w-12 rounded-full bg-gold" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  A process, not an event
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
                  Cooperation, not confrontation.
                </h3>
                <p className="mt-4 leading-7 text-white/80">
                  States must respond to every recommendation from their
                  peers and report on the implementation of recommendations
                  they previously accepted. The Universal Periodic Review
                  complements the work of UN treaty bodies and remains a
                  cooperative process requiring the full participation of the
                  State under review.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          KENYA'S UPR PROCESS — interactive cycle timeline
          (same pattern as the Theory of Change mechanism)
      ===================================================== */}
      <section id="kenya" className="scroll-mt-20 bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Kenya&rsquo;s Universal Periodic Review process
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Four cycles of review.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Kenya&rsquo;s human rights record has been reviewed by the UN
              Human Rights Council four times. Select a cycle to explore it.
            </p>
          </motion.div>

          {/* Cycle selector */}
          <div className="relative mt-14">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-1 rounded-full bg-forest/10 md:block" aria-hidden="true">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: current.color }}
                animate={{ width: `${(active / (cycles.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
              {cycles.map((cycle, index) => {
                const isActive = index === active;
                const isPassed = index <= active;
                return (
                  <button
                    key={cycle.year}
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    aria-pressed={isActive}
                    aria-label={`${cycle.label}, ${cycle.year}`}
                    className="group flex flex-col items-center gap-3 text-center focus:outline-none"
                  >
                    <motion.span
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white font-display text-sm font-bold shadow-md group-focus-visible:ring-4 group-focus-visible:ring-forest/30"
                      style={{
                        borderColor: isPassed ? cycle.color : "#D1D5DB",
                        color: isPassed ? cycle.color : "#9CA3AF",
                        boxShadow: isActive ? `0 10px 25px -8px ${cycle.color}` : undefined,
                      }}
                    >
                      {cycle.year}
                    </motion.span>
                    <span
                      className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity"
                      style={{ backgroundColor: cycle.color, opacity: isActive ? 1 : 0.55 }}
                    >
                      {cycle.label}
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
                key={current.year}
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
                    <CalendarDays size={24} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Cycle {active + 1} of {cycles.length}
                    </p>
                    <h3 className="text-2xl font-bold" style={{ color: current.color }}>
                      {current.label} &middot; {current.year}
                    </h3>
                  </div>
                </div>

                {current.detail && (
                  <p className="mt-5 text-lg leading-8 text-gray-600">{current.detail}</p>
                )}

                {current.link && (
                  <Link
                    to={current.link.to}
                    className="mt-5 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                    style={{ backgroundColor: current.color }}
                  >
                    {current.link.label}
                    <ArrowRight size={16} />
                  </Link>
                )}

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

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 max-w-3xl text-center leading-8 text-gray-600"
          >
            In 2019, Kenya Stakeholders on the Universal Periodic Review
            undertook in-depth research establishing the level of
            implementation of accepted recommendations, captured in a
            Mid-Term Report launched and submitted to the Human Rights
            Council in Geneva. The Outcome Document of the 3rd Cycle review
            was formally adopted by the Council in June 2020.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          STRATEGIC FOCUS AREA — goal + intervention focus areas
      ===================================================== */}
      <section
        id="focus-areas"
        className="scroll-mt-20 px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Strategic focus area
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Intervention focus areas
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              During the 4th Cycle review in Geneva in May 2025, Kenya
              received 339 recommendations. EACHRights will support all
              stakeholders to strengthen their implementation.
            </p>
          </motion.div>

          {/* Programme goal */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-12 flex max-w-4xl flex-col items-start gap-6 rounded-2xl bg-gradient-to-r from-forest to-forest/85 p-8 text-white shadow-lg sm:flex-row sm:items-center sm:p-10"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Target size={30} strokeWidth={1.7} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Programme goal
              </p>
              <p className="mt-2 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                To enhance the utilisation of the UPR mechanism.
              </p>
            </div>
          </motion.div>

          <div
            className={`mt-10 grid gap-6 ${
              focusAreas.length === 1
                ? "mx-auto max-w-2xl"
                : focusAreas.length === 2
                ? "mx-auto max-w-4xl md:grid-cols-2"
                : "md:grid-cols-3"
            }`}
          >
            {focusAreas.map(({ icon: Icon, color, text }, index) => (
              <motion.article
                key={text}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border-t-8 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl sm:p-9"
                style={{ borderTopColor: color }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <span
                    className="font-display text-5xl font-bold opacity-20"
                    style={{ color }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-6 text-lg font-semibold leading-8 text-ink">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          THE COALITION
      ===================================================== */}
      <section className="bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                The Coalition
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Kenya&rsquo;s Stakeholders Coalition on the Universal Periodic Review.
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                The Coalition, known as UPR Kenya, brings together a
                membership of over 400 organisations, divided into over 30
                thematic groups across three clusters. It is led by a
                Steering Committee with technical support from the Kenya
                National Commission on Human Rights (KNCHR) and the UN Office
                of the High Commissioner on Human Rights (OHCHR).
              </p>
              <p>
                EACHRights serves as the Coordinator and Secretariat of the
                Kenya Stakeholders Coalition on the Universal Periodic
                Review.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {clusters.map((cluster) => (
                <span
                  key={cluster}
                  className="rounded-full border border-forest/15 bg-white px-4 py-1.5 text-sm font-medium text-forest"
                >
                  {cluster}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { icon: Users, big: "400+", small: "Member organisations" },
              { icon: Scale, big: "EACHRights", small: "Coordinator and Secretariat" },
            ].map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.small}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="h-1.5 w-full bg-gradient-to-r from-forest via-[#8DC63F] to-gold" />
                  <div className="p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                      <Icon size={26} strokeWidth={1.7} />
                    </div>
                    <p className="mt-5 font-display text-2xl font-bold text-forest">
                      {card.big}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{card.small}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-xl sm:col-span-2"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-forest via-[#8DC63F] to-gold" />
              <div className="flex gap-5 p-7">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                  <FileCheck2 size={26} strokeWidth={1.7} />
                </div>
                <p className="text-sm leading-7 text-gray-600">
                  Technical support from the Kenya National Commission on
                  Human Rights (KNCHR) and the UN Office of the High
                  Commissioner on Human Rights (OHCHR).
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENTS — card grid
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Achievements
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              What the Coalition has achieved.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Progress made by Kenyan Universal Periodic Review Stakeholders
              during the 2nd Cycle process, including the development of the
              Mid-Term Report.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, index) => (
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
                  <p className="mt-6 text-sm leading-7 text-gray-600">{item}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY IT MATTERS
      ===================================================== */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-r from-forest to-forest/85 p-8 text-white shadow-lg sm:p-12"
        >
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[25px] border-white/5" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <TrendingUp size={36} strokeWidth={1.7} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Why it matters
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-9 sm:text-3xl lg:text-4xl lg:leading-tight">
                Advancing human rights nationally, regionally and globally.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
                No other universal mechanism of this kind exists. The
                Universal Periodic Review&rsquo;s ultimate aim is to improve
                the human rights situation in every country and address
                violations wherever they occur &mdash; and its success
                depends on sustained follow-through, not a single review
                event.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12 lg:py-20">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Handshake size={26} strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Get involved in the Universal Periodic Review process
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Learn how your organisation can join Kenya&rsquo;s Stakeholders
            Coalition on the Universal Periodic Review and contribute to
            advancing human rights across the country.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
            >
              Contact EACHRights
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Explore More Resources
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
