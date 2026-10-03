import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BriefcaseBusiness,
  Target,
  ArrowRight,
  ArrowUpRight,
  Users,
  Scale,
  Handshake,
  CheckCircle2,
  FileText,
} from "lucide-react";

// Same image the Economic Justice programme uses on the Home page.
import economicJusticeImage from "../../assets/impact/impact-5.png";

/* =========================================================
   Where the economic advocacy tools live.
========================================================= */

const ADVOCACY_PATH = "/resources/upr-advocacy-tools/economics";

/* =========================================================
   Intervention focus areas
========================================================= */

const focusAreas = [
  {
    icon: Users,
    color: "#0F9D8A",
    text: "Promote the right to decent work and employment.",
  },
  {
    icon: Scale,
    color: "#F59E0B",
    text: "Enhance adherence to the Guiding Principles on Business and Human Rights.",
  },
  {
    icon: Handshake,
    color: "#7C3AED",
    text: "Promote adherence to the Environmental, Social, and Governance Framework.",
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

          {/* Economic advocacy tools link */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mt-12 flex max-w-4xl flex-col items-start gap-6 overflow-hidden rounded-2xl p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-10"
            style={{
              backgroundImage:
                "linear-gradient(145deg, #0EA5E9 0%, #075985 100%)",
              boxShadow: "0 18px 40px -20px #075985",
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
                Economic advocacy tools
              </h3>
              <p className="mt-2 leading-7 text-white/85">
                Guides, briefings and reports to support economic justice and
                business and human rights advocacy, ready to read or
                download.
              </p>
            </div>

            <Link
              to={ADVOCACY_PATH}
              className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#075985] transition hover:gap-3"
            >
              View economic advocacy tools
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
