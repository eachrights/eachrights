import { motion } from "framer-motion";
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
    title: "Decent Work & Economic Inclusion",
    items: [
      "Promote the right to decent work and employment.",
      "Protect labour rights and workplace equality.",
      "Promote inclusive economic opportunities for vulnerable and marginalised groups.",
    ],
  },
  {
    icon: Scale,
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
    title: "Community Rights & Access to Remedy",
    items: [
      "Promote community rights and meaningful participation.",
      "Promote access to remedy and justice for affected communities.",
      "Promote environmental responsibility and corporate accountability.",
    ],
  },
  {
    icon: Search,
    title: "Knowledge, Advocacy & Capacity",
    items: [
      "Conduct research, advocacy and policy engagement.",
      "Build capacity and awareness on economic rights and responsible business.",
    ],
  },
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

export default function EconomicJustice() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-forest text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={economicJusticeImage}
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
              <BriefcaseBusiness size={24} strokeWidth={1.7} />
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Economic Justice Programme
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Advancing economic rights, decent work and responsible business
              practices that respect people, communities and the environment.
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
          INTRODUCTION — narrative alongside goal & frameworks,
          rather than a floating full-width statement block.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          <div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Where economic rights meet responsible business
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-gray-600">
              <p>
                The violation of economic rights can have a profound impact
                on individuals, workers and communities. Businesses in
                Kenya, as elsewhere in the world, can make significant
                contributions to human rights and economic development —
                through employment creation, public revenue, goods and
                services, and investments that improve people&rsquo;s
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

          <aside className="space-y-6 lg:pt-1">
            <div className="rounded-2xl bg-forest p-7 text-white">
              <div className="flex items-center gap-2.5 text-white/70">
                <Target size={18} />
                <span className="text-sm font-medium">Programme goal</span>
              </div>
              <p className="mt-4 text-xl font-semibold leading-8">
                A society with equal economic opportunities for all
                individuals.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-7">
              <p className="text-sm font-medium text-gray-500">Guided by</p>
              <ul className="mt-4 space-y-4">
                <li className="border-t border-gray-100 pt-4 text-sm leading-6 text-gray-700">
                  UN Guiding Principles on Business and Human Rights
                </li>
                <li className="border-t border-gray-100 pt-4 text-sm leading-6 text-gray-700">
                  Environmental, Social and Governance (ESG) Framework
                </li>
              </ul>
            </div>
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
            Our focus areas fall into four connected pillars of work, each
            reinforcing the others.
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
        </div>
      </section>

    </main>
  );
}
