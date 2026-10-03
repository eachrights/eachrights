import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Target,
  ArrowRight,
  ArrowUpRight,
  Users,
  Quote,
  CheckCircle2,
  FileText,
} from "lucide-react";

// Same image the Education programme uses on the Home page.
import educationImage from "../../assets/impact/impact-1.jpg";

/* =========================================================
   Where the education advocacy tools live.
========================================================= */

const ADVOCACY_PATH = "/resources/upr-advocacy-tools/education";

/* =========================================================
   Intervention focus areas
========================================================= */

const focusAreas = [
  {
    icon: Users,
    color: "#0F9D8A",
    text: "Promote access to education for vulnerable and marginalized groups and communities.",
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
          INTERVENTION FOCUS AREAS
      ===================================================== */}
      <section
        id="pillars"
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

          {/* Education advocacy tools link */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mt-12 flex max-w-4xl flex-col items-start gap-6 overflow-hidden rounded-2xl p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-10"
            style={{
              backgroundImage:
                "linear-gradient(145deg, #F59E0B 0%, #B45309 100%)",
              boxShadow: "0 18px 40px -20px #B45309",
            }}
          >
            <FileText
              size={160}
              strokeWidth={0.8}
              className="pointer-events-none absolute -right-8 -top-8 text-white/10"
              aria-hidden="true"
            />

            <div className="relative max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                Advocacy tools
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Education advocacy tools
              </h3>
              <p className="mt-2 leading-7 text-white/85">
                Guides, briefings and reports to support education advocacy,
                ready to read or download.
              </p>
            </div>

            <Link
              to={ADVOCACY_PATH}
              className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#B45309] transition hover:gap-3"
            >
              View education advocacy tools
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
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
