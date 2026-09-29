import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Target,
  ArrowRight,
  ArrowLeft,
  Users,
  Baby,
  Scale,
  Search,
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
    title: "Access & Equity in Healthcare",
    items: [
      "Advocate for equitable access to quality, affordable, accessible, and acceptable healthcare services.",
      "Address social, economic, geographical, and institutional barriers to healthcare.",
      "Address the specific health needs of vulnerable and marginalized groups and communities.",
    ],
  },
  {
    icon: Baby,
    title: "Sexual, Reproductive & Maternal Health",
    items: [
      "Promote the realization of sexual and reproductive health and rights (SRHR).",
      "Advocate for improved access to maternal, newborn, child, and adolescent health services.",
    ],
  },
  {
    icon: Scale,
    title: "Governance & Accountability",
    items: [
      "Strengthen meaningful community participation in health governance and decision-making.",
      "Promote accountability among health institutions and duty bearers.",
      "Promote access to accurate, timely, and understandable health information.",
    ],
  },
  {
    icon: Search,
    title: "Rights, Research & Advocacy",
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

export default function HealthJustice() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-forest text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={healthImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Legibility overlays */}
        <div className="absolute inset-0 -z-10 bg-forest/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
    

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <HeartPulse size={24} strokeWidth={1.7} />
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Health Justice Programme
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Promoting equitable access to healthcare and advancing the
              right to health for vulnerable and marginalized communities.
            </p>
          </motion.div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
          INTRODUCTION — narrative alongside goal, rather than
          a separate full-width statement section below it.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          <div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Advancing the right to health for all
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-gray-600">
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
                communities are often disproportionately affected —
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

          <aside className="lg:pt-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-forest p-7 text-white"
            >
              <div className="flex items-center gap-2.5 text-white/70">
                <Target size={18} />
                <span className="text-sm font-medium">Programme goal</span>
              </div>
              <p className="mt-4 text-xl font-semibold leading-8">
                Promoting access to healthcare among vulnerable and
                marginalized groups and communities.
              </p>
            </motion.div>
          </aside>

        </div>
      </section>

      {/* =====================================================
          FOCUS AREAS — four pillars instead of one flat list
      ===================================================== */}
      <section className="bg-forest-soft px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl text-3xl font-bold text-ink sm:text-4xl">
            Four pillars of intervention
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Our interventions address the barriers that prevent vulnerable
            and marginalized communities from fully realizing their right
            to health.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl bg-white p-7 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-snug text-forest">
                    {pillar.title}
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="border-t border-gray-100 pt-3 text-sm leading-6 text-gray-600 first:border-t-0 first:pt-0"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPECTED OUTCOMES — an editorial list, not a card grid
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="max-w-xl text-3xl font-bold text-ink sm:text-4xl">
            What changes as a result
          </h2>

          <motion.ol
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid gap-x-10 sm:grid-cols-2"
          >
            {outcomes.map((item, index) => (
              <li
                key={item}
                className="flex gap-4 border-t border-gray-100 py-4 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
              >
                <span className="text-sm text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-7 text-gray-600">{item}</span>
              </li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
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
        </div>
      </section>

    </main>
  );
}
