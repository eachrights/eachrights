import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Target,
  ArrowRight,
  ArrowLeft,
  Users,
  ShieldCheck,
  BookOpen,
  Search,
  Quote,
  CheckCircle2,
} from "lucide-react";

// Same image the Education programme uses on the Home page.
import educationImage from "../../assets/impact/impact-1.jpg";

/* =========================================================
   The twelve focus areas grouped into the four pillars they
   actually represent, rather than one flat list.
========================================================= */

const pillars = [
  {
    icon: Users,
    title: "Access & Equity in Learning",
    color: "#0F9D8A",
    items: [
      "Promote access to education for vulnerable and marginalized groups and communities.",
      "Promote access to education for children and young people living in urban informal settlements.",
      "Advance equitable access to education for children and communities in rural, arid, and semi-arid areas.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Inclusive Learning",
    color: "#F59E0B",
    items: [
      "Strengthen foundational learning and access to quality early childhood education.",
      "Promote inclusive education for learners facing disability, discrimination, exclusion, and other barriers.",
      "Advocate for safe, inclusive, accessible, and child-friendly learning environments.",
    ],
  },
  {
    icon: BookOpen,
    title: "Pathways Beyond the Classroom",
    color: "#7C3AED",
    items: [
      "Promote girl-child education, including enrolment, retention, completion, and transition across levels of education.",
      "Support education, skills development, vocational opportunities, and lifelong learning for young people.",
      "Promote adult and continuing education, including literacy and skills development opportunities.",
    ],
  },
  {
    icon: Search,
    title: "Policy, Research & Accountability",
    color: "#2563EB",
    items: [
      "Monitor and advocate for the implementation of education laws, policies, plans, programmes, and budgets.",
      "Conduct research and advocacy on emerging and persistent education justice issues.",
      "Strengthen the capacity and participation of communities, parents, learners, teachers, and other education stakeholders.",
    ],
  },
];

const levels = [
  "Pre-primary",
  "Primary",
  "Junior school",
  "Secondary & senior school",
  "Vocational",
  "Adult & continuing",
];

const outcomes = [
  "Increased access to quality and inclusive education.",
  "Improved enrolment, retention, completion, and transition.",
  "Stronger foundational learning and early childhood education.",
  "Improved opportunities for learners in underserved communities.",
  "Greater access to vocational, adult, and continuing education.",
  "Stronger community participation in education accountability.",
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function EducationJustice() {
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
          src={educationImage}
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
                <GraduationCap size={28} strokeWidth={1.7} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Programme 02
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Education Justice
              <span className="block text-gold">Programme</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Advancing the right to quality, inclusive, equitable, and
              accessible education for vulnerable and marginalized
              communities.
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
          Narrative on the left, the citation as a sticky
          pull-quote on the right.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,1fr] lg:gap-16">

          {/* Narrative */}
          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                About the programme
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Education is a right, and the key to every other one.
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Education is both a fundamental human right and an essential
                means of realizing other human rights. It enables
                economically and socially marginalized children and adults to
                overcome poverty and participate meaningfully in their
                communities. It also plays an important role in empowering
                women, protecting children from exploitative and hazardous
                labour and sexual exploitation, promoting human rights and
                democracy, protecting the environment, and advancing
                sustainable development.
              </p>

              <p>
                The Education Justice Programme therefore seeks to promote
                the right to quality, inclusive, equitable, and accessible
                education for all, with particular attention to vulnerable
                and marginalized groups and communities. The programme
                recognizes that barriers to education are often
                interconnected with poverty, geographical location, gender,
                disability, displacement, insecurity, inadequate
                infrastructure, and other social and economic factors.
              </p>

              <p>
                The programme covers{" "}
                <strong className="text-ink">
                  pre-primary, primary, junior, secondary and senior school,
                  vocational, adult, and continuing education
                </strong>
                , spanning girl-child education, foundational learning and
                early childhood education, education for children in urban
                informal settlements, education for children in rural, arid,
                and semi-arid areas, and education among young people.
              </p>
            </div>

            {/* Learning levels covered */}
            <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                Levels we cover
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {levels.map((level) => (
                  <span
                    key={level}
                    className="rounded-full border border-forest/15 bg-forest-soft px-4 py-1.5 text-sm font-medium text-forest"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Pull-quote */}
          <div className="lg:pt-24">
            <motion.blockquote
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-forest p-8 text-white shadow-xl sm:p-10 lg:sticky lg:top-28"
            >
              <Quote
                size={90}
                strokeWidth={1.2}
                className="absolute -right-3 -top-3 text-white/10"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="h-1 w-12 rounded-full bg-gold" />
                <p className="mt-6 text-lg leading-8 text-white/95">
                  &ldquo;Education is both a human right in itself and an
                  indispensable means of realizing other human rights. As an
                  empowerment right, education is the primary vehicle by which
                  economically and socially marginalized adults and children can
                  lift themselves out of poverty and obtain the means to
                  participate fully in their communities.&rdquo;
                </p>
                <cite className="mt-6 block text-sm font-medium not-italic text-gold">
                  General Comment No. 13 on the Right to Education, para. 1
                </cite>
              </div>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOAL BANNER
      ===================================================== */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded-2xl bg-gradient-to-r from-forest to-forest/85 p-8 text-white shadow-lg sm:flex-row sm:items-center sm:p-12"
        >
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Target size={30} strokeWidth={1.7} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our goal
            </p>
            <p className="mt-2 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
              To enhance the right to education among vulnerable and
              marginalized groups and communities.
            </p>
          </div>
        </motion.div>
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
              Our interventions address the social, economic, geographical,
              and institutional barriers that prevent children, young people,
              and adults from accessing and benefiting from education. Select
              a pillar to explore it.
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
            <GraduationCap size={26} strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Support the Education Justice Programme
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to advance the right to education and create
            opportunities for vulnerable and marginalized communities.
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
