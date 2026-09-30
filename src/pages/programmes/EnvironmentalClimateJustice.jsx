import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Leaf,
  Target,
  ArrowRight,
  ArrowLeft,
  Sprout,
  Scale,
  Users,
  Search,
  CheckCircle2,
} from "lucide-react";

// Same image the Environment and Climate Change programme uses on the Home page.
import environmentImage from "../../assets/impact/impact-4.png";

/* =========================================================
   The ten focus areas grouped into the four pillars they
   actually represent, rather than one flat list.
========================================================= */

const pillars = [
  {
    icon: Sprout,
    color: "#0F9D8A",
    title: "Climate Resilience & Adaptation",
    items: [
      "Promote environmental and climate adaptation and mitigation strategies.",
      "Build climate resilience among vulnerable and marginalised communities.",
      "Support sustainable natural resource management.",
    ],
  },
  {
    icon: Scale,
    color: "#F59E0B",
    title: "Rights, Policy & Accountability",
    items: [
      "Strengthen environmental and climate accountability.",
      "Promote environmental rights and justice.",
      "Advocate for effective environmental and climate policies and governance.",
    ],
  },
  {
    icon: Users,
    color: "#7C3AED",
    title: "Community & Youth Participation",
    items: [
      "Promote youth and community participation in climate action.",
      "Support community-led environmental protection and conservation initiatives.",
    ],
  },
  {
    icon: Search,
    color: "#2563EB",
    title: "Awareness, Research & Advocacy",
    items: [
      "Increase climate change awareness and environmental education.",
      "Conduct research, advocacy and evidence generation.",
    ],
  },
];

const outcomes = [
  "Increased awareness of environmental and climate rights.",
  "Stronger community capacity to adapt to climate change.",
  "Greater adoption of sustainable environmental practices.",
  "Increased participation of vulnerable communities in environmental decision-making.",
  "Improved accountability for environmental and climate commitments.",
  "Stronger implementation of environmental and climate policies and laws.",
  "Increased youth and community engagement in climate action.",
  "Improved protection and sustainable management of natural resources.",
  "Stronger evidence-based environmental and climate advocacy.",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function EnvironmentalClimateJustice() {
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
          src={environmentImage}
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
                <Leaf size={28} strokeWidth={1.7} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Programme 04
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Environmental &amp; Climate Justice
              <span className="block text-gold">Programme</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Advancing environmental rights, climate resilience and
              accountability for vulnerable and marginalised communities.
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
                Protecting people, communities and the environment
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Climate change poses an existential threat to humanity and
                threatens ecosystems, livelihoods, health, food security,
                water resources and the enjoyment of human rights.
              </p>
              <p>
                Vulnerable and marginalised groups and communities often
                bear a disproportionate burden of environmental degradation
                and climate change despite contributing the least to the
                problem. Droughts, floods, rising temperatures, pollution,
                land degradation and biodiversity loss can deepen poverty
                and inequality.
              </p>
              <p>
                In response to Sustainable Development Goal 13 on Climate
                Action, EACHRights, through the Environmental and Climate
                Justice Programme, aims to reduce the impact of
                environmental and climate change on vulnerable and
                marginalised groups and communities, using a human
                rights-based approach that promotes participation,
                equality, non-discrimination, access to information,
                accountability and meaningful community engagement.
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
                  Reducing the impact of environmental and climate change on
                  vulnerable and marginalised communities.
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
              We work with communities and partners to advance climate
              resilience, environmental protection and accountability.
              Select a pillar to explore it.
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
            <Leaf size={26} strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Support environmental and climate justice
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to strengthen climate resilience, environmental
            protection and accountability for vulnerable communities.
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
