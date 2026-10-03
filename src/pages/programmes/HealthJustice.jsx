import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Target,
  ArrowRight,
  ArrowUpRight,
  Baby,
  CheckCircle2,
  FileText,
  MapPin,
} from "lucide-react";

// Same image the Health programme uses on the Home page.
import healthImage from "../../assets/impact/impact-3.png";

/* =========================================================
   Health advocacy materials live on this page. County chips
   deep-link to the matching tab (?county=<slug>).
========================================================= */

const ADVOCACY_PATH = "/resources/upr-advocacy-tools/health";

const advocacyCounties = [
  { slug: "kilifi", name: "Kilifi" },
  { slug: "kwale", name: "Kwale" },
  { slug: "migori", name: "Migori" },
  { slug: "homa-bay", name: "Homa Bay" },
];

/* =========================================================
   Intervention focus areas
========================================================= */

const focusAreas = [
  {
    icon: HeartPulse,
    color: "#0F9D8A",
    text: "Promote the realization of the right to health.",
  },
  {
    icon: Baby,
    color: "#F59E0B",
    text: "Promote the realization of sexual and reproductive health and rights (SRHR).",
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

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function HealthJustice() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        <img
          src={healthImage}
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
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
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
          style={{
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,1fr] lg:gap-16">

          <div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6 }}
            >
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

        </div>
      </section>

      {/* =====================================================
          HEALTH ADVOCACY MATERIALS
      ===================================================== */}
      <section
        id="advocacy-materials"
        className="scroll-mt-20 px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl p-8 text-white shadow-xl sm:p-12"
          style={{
            backgroundImage:
              "linear-gradient(145deg, #EF4444 0%, #991B1B 100%)",
            boxShadow: "0 18px 40px -20px #991B1B",
          }}
        >
          <FileText
            size={220}
            strokeWidth={0.8}
            className="pointer-events-none absolute -right-10 -top-10 text-white/10"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-[26px] border-white/5" />

          <div className="relative grid gap-8 lg:grid-cols-[1.4fr,1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                Health advocacy materials
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Read and download our county health files
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-white/85">
                Briefings, reports and advocacy materials from Kilifi,
                Kwale, Migori and Homa Bay, gathered in one place and
                organised by county.
              </p>

              <Link
                to={ADVOCACY_PATH}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#991B1B] transition hover:gap-3"
              >
                View health advocacy materials
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Jump to a county
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {advocacyCounties.map((county) => (
                  <Link
                    key={county.slug}
                    to={`${ADVOCACY_PATH}?county=${county.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 transition hover:bg-white/25"
                  >
                    <MapPin size={14} />
                    {county.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12 lg:py-20">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
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
