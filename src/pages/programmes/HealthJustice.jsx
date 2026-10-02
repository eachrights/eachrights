import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Target,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Users,
  Baby,
  Scale,
  Search,
  CheckCircle2,
  ChevronDown,
  FileText,
  MapPin,
} from "lucide-react";

// Same image the Health programme uses on the Home page.
import healthImage from "../../assets/impact/impact-3.png";

/* =========================================================
   The ten focus areas grouped into the four pillars they
   actually represent, rather than one flat list.
========================================================= */

const pillars = [
  {
    icon: Users,
    color: "#0F9D8A",
    title: "Access and Equity in Healthcare",
    items: [
      "Advocate for equitable access to quality, affordable, accessible, and acceptable healthcare services.",
      "Address social, economic, geographical, and institutional barriers to healthcare.",
      "Address the specific health needs of vulnerable and marginalized groups and communities.",
    ],
  },
  {
    icon: Baby,
    color: "#F59E0B",
    title: "Sexual, Reproductive and Maternal Health",
    items: [
      "Promote the realization of sexual and reproductive health and rights (SRHR).",
      "Advocate for improved access to maternal, newborn, child, and adolescent health services.",
    ],
  },
  {
    icon: Scale,
    color: "#7C3AED",
    title: "Governance and Accountability",
    items: [
      "Strengthen meaningful community participation in health governance and decision-making.",
      "Promote accountability among health institutions and duty bearers.",
      "Promote access to accurate, timely, and understandable health information.",
    ],
  },
  {
    icon: Search,
    color: "#2563EB",
    title: "Rights, Research and Advocacy",
    items: [
      "Promote the realization of the right to the highest attainable standard of health.",
      "Conduct research, advocacy, capacity building, and partnerships to advance health justice.",
    ],
  },
];

const outcomes = [
  "Increased awareness of the right to health.",
  "Improved access to quality and equitable healthcare services.",
  "Greater awareness and protection of sexual and reproductive health and rights.",
  "Increased community participation in health decision-making.",
  "Strengthened accountability among health institutions and duty bearers.",
  "Improved access to relevant and reliable health information.",
  "Greater attention to the health needs of underserved communities.",
  "Stronger implementation of health-related laws, policies, and budgets.",
  "Increased evidence-based advocacy for health justice and equity.",
];

/* =========================================================
   HEALTH ADVOCACY TOOLS — one list of tools per county.
   Pick the county from the dropdown to see its tools.

   To edit:
   - change a county name, or add/remove a county object
   - each tool has: type, title, description, and an optional
     url (link to the PDF / page). Leave url as "" for no link.
   - all the "TODO" text below is placeholder content
========================================================= */

const counties = [
  {
    name: "Kilifi",
    tools: [
      {
        type: "Policy brief",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
      {
        type: "Community scorecard",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
      {
        type: "Advocacy toolkit",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
    ],
  },
  {
    name: "Homa Bay",
    tools: [
      {
        type: "Policy brief",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
      {
        type: "Community scorecard",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
      {
        type: "Advocacy toolkit",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
    ],
  },
  {
    name: "Kwale",
    tools: [
      {
        type: "Policy brief",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
      {
        type: "Community scorecard",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
      {
        type: "Advocacy toolkit",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
    ],
  },
  {
    name: "Migori",
    tools: [
      {
        type: "Policy brief",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
      {
        type: "Community scorecard",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
      {
        type: "Advocacy toolkit",
        title: "Tool title", // TODO
        description: "Short description of the tool and how communities use it.", // TODO
        url: "",
      },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function HealthJustice() {
  const [active, setActive] = useState(0);
  const [countyName, setCountyName] = useState(counties[0].name);
  const current = pillars[active];
  const CurrentIcon = current.icon;
  const goPrev = () => setActive((i) => (i === 0 ? pillars.length - 1 : i - 1));
  const goNext = () => setActive((i) => (i === pillars.length - 1 ? 0 : i + 1));

  const selectedCounty =
    counties.find((county) => county.name === countyName) ?? counties[0];

  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={healthImage}
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
                <HeartPulse size={28} strokeWidth={1.7} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Programme 03
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Health Justice
              <span className="block text-gold">Programme</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Promoting equitable access to healthcare and advancing the
              right to health for vulnerable and marginalized communities.
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
          Narrative on the left, programme goal as a sticky
          card on the right.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,1fr] lg:gap-16">

          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                About the programme
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Advancing the right to health for all
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Article 43(1) of the Constitution of Kenya, 2010, guarantees
                every person the right to the highest attainable standard of
                health, which includes the right to healthcare services,
                including reproductive healthcare.
              </p>
              <p>
                Despite these constitutional guarantees, many people
                continue to experience barriers to accessing quality,
                affordable, accessible, and appropriate healthcare
                services. Vulnerable and marginalized groups and
                communities are often disproportionately affected &mdash;
                poverty, geographical isolation, discrimination, limited
                health infrastructure, inadequate information, and unequal
                access to services can prevent people from fully enjoying
                their right to health.
              </p>
              <p>
                The Health Justice Programme applies a{" "}
                <strong className="text-ink">
                  human rights-based approach
                </strong>{" "}
                that promotes participation, equality, non-discrimination,
                accountability, transparency, and access to information in
                health-related decision-making.
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
                  Promoting access to healthcare among vulnerable and
                  marginalized groups and communities.
                </p>
              </div>
            </motion.div>
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
              Our interventions address the barriers that prevent vulnerable
              and marginalized communities from fully realizing their right
              to health. Select a pillar to explore it.
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
          HEALTH ADVOCACY TOOLS — county dropdown
      ===================================================== */}
      <section id="tools" className="scroll-mt-20 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Health advocacy tools
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Tools for health advocacy in your county.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Choose a county to see the advocacy tools available for
              communities and partners working there.
            </p>
          </motion.div>

          {/* County dropdown */}
          <div className="mx-auto mt-10 max-w-md">
            <label
              htmlFor="county-select"
              className="block text-xs font-semibold uppercase tracking-[0.2em] text-forest"
            >
              Select a county
            </label>
            <div className="relative mt-2">
              <MapPin
                size={18}
                strokeWidth={1.8}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-forest"
                aria-hidden="true"
              />
              <select
                id="county-select"
                value={countyName}
                onChange={(event) => setCountyName(event.target.value)}
                className="w-full appearance-none rounded-xl border-2 border-forest/20 bg-white py-3.5 pl-11 pr-11 font-semibold text-ink shadow-sm transition focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/15"
              >
                {counties.map((county) => (
                  <option key={county.name} value={county.name}>
                    {county.name} County
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                strokeWidth={2}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-forest"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Tools for the selected county */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCounty.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-12"
            >
              <p className="text-center text-sm font-semibold text-gray-500">
                {selectedCounty.tools.length}{" "}
                {selectedCounty.tools.length === 1 ? "tool" : "tools"} for{" "}
                {selectedCounty.name} County
              </p>

              {selectedCounty.tools.length > 0 ? (
                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {selectedCounty.tools.map((tool, index) => {
                    const card = (
                      <>
                        <div className="h-1.5 w-full bg-gradient-to-r from-forest via-[#8DC63F] to-gold" />
                        <div className="flex flex-1 flex-col p-7">
                          <div className="flex items-center justify-between gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                              <FileText size={22} strokeWidth={1.7} />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wide text-forest/60">
                              {tool.type}
                            </span>
                          </div>

                          <h3 className="mt-5 text-lg font-bold leading-snug text-forest">
                            {tool.title}
                          </h3>
                          <p className="mt-2 leading-7 text-gray-600">
                            {tool.description}
                          </p>

                          {tool.url && (
                            <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-forest underline decoration-[#8DC63F] decoration-2 underline-offset-4">
                              Open tool
                              <ArrowUpRight size={15} />
                            </span>
                          )}
                        </div>
                      </>
                    );

                    const cardClass =
                      "group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl";

                    return tool.url ? (
                      <a
                        key={`${selectedCounty.name}-${index}`}
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cardClass}
                      >
                        {card}
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : (
                      <article key={`${selectedCounty.name}-${index}`} className={cardClass}>
                        {card}
                      </article>
                    );
                  })}
                </div>
              ) : (
                <p className="mt-6 text-center text-gray-500">
                  Tools for {selectedCounty.name} County are coming soon.
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          EXPECTED OUTCOMES — card grid, same style as the
          Theory of Change programme cards
      ===================================================== */}
      <section className="bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
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
            <HeartPulse size={26} strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Support the Health Justice Programme
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to promote equitable access to healthcare and
            advance the right to health for vulnerable and marginalized
            communities.
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
