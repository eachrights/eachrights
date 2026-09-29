import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Target,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  TrendingUp,
  Users2,
} from "lucide-react";

// Same image the Institutional Growth and Sustainability programme uses on the Home page.
import institutionalImage from "../../assets/impact/impact-8.png";

/* =========================================================
   Placeholder intervention areas — swap in the actual
   strategic-plan text for this focus area once available.
========================================================= */

const interventions = [
  {
    icon: ShieldCheck,
    title: "Strengthen governance",
    text: "Reinforce board oversight, policies and accountability systems that underpin sound institutional practice.",
  },
  {
    icon: TrendingUp,
    title: "Diversify resource mobilization",
    text: "Broaden and stabilize our funding base to reduce reliance on any single source and support long-term planning.",
  },
  {
    icon: Users2,
    title: "Invest in people and systems",
    text: "Build staff capacity, knowledge management and operational systems that keep the organisation effective as it grows.",
  },
  {
    icon: Users2,
    title: "Communication and visibility",
    text: "Enhance our communication strategies and visibility to increase awareness and support for our work.",
  },
  {
    icon: Users2,
    title: "Data and Information System Management and Security",
    text: "Data and information system management and security is a critical aspect of institutional growth and sustainability. It involves implementing robust data management practices, ensuring data privacy and security, and leveraging technology to enhance operational efficiency.",
  },
  {
    icon: Users2,
    title: "Monitoring, Evaluation and Learning",
    text: "Monitoring, evaluation, and learning (MEL) is a crucial component of institutional growth and sustainability. It involves systematically tracking progress, assessing the effectiveness of programs and initiatives, and using insights gained to inform decision-making and continuous improvement.",
  },
];

export default function InstitutionalGrowthSustainability() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-forest text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={institutionalImage}
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
              <Building2 size={24} strokeWidth={1.7} />
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Institutional Growth and Sustainability
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Building a resilient, well-governed organisation capable of
              sustaining its human rights impact over the long term.
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
          INTRODUCTION — placeholder narrative; replace with
          the actual strategic-plan text once available.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          <div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              A stronger institution for lasting impact
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-gray-600">
              <p>
                Sustained human rights work depends on more than programmes
                alone — it depends on the strength of the institution behind
                them. Sound governance, a diversified resource base, and
                capable systems and staff are what allow an organisation to
                keep delivering impact over the long term, even as needs and
                funding landscapes shift.
              </p>
              <p>
                The Institutional Growth and Sustainability focus area is
                designed to strengthen EACHRights' internal foundations —
                governance, resourcing, and organisational capacity — so
                that our other programmes can be delivered effectively and
                sustained well into the future.
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
                To build a resilient, well-governed organisation capable of
                sustaining its human rights impact over the long term.
              </p>
            </motion.div>
          </aside>

        </div>
      </section>

      {/* =====================================================
          FOCUS AREAS — six intervention areas
      ===================================================== */}
      <section className="bg-forest-soft px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl text-3xl font-bold text-ink sm:text-4xl">
            Intervention focus areas
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            Our interventions address the governance, resourcing and
            capacity foundations this focus area is built on.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {interventions.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl bg-white p-7 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <p className="mt-5 text-sm text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-1 text-lg font-bold leading-snug text-forest">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Support Institutional Growth and Sustainability
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to strengthen the institution behind our human
            rights work, so it can keep delivering impact for years to come.
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
