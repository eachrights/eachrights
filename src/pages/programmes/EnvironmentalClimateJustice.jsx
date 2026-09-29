import { motion } from "framer-motion";
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
    title: "Climate Resilience & Adaptation",
    items: [
      "Promote environmental and climate adaptation and mitigation strategies.",
      "Build climate resilience among vulnerable and marginalised communities.",
      "Support sustainable natural resource management.",
    ],
  },
  {
    icon: Scale,
    title: "Rights, Policy & Accountability",
    items: [
      "Strengthen environmental and climate accountability.",
      "Promote environmental rights and justice.",
      "Advocate for effective environmental and climate policies and governance.",
    ],
  },
  {
    icon: Users,
    title: "Community & Youth Participation",
    items: [
      "Promote youth and community participation in climate action.",
      "Support community-led environmental protection and conservation initiatives.",
    ],
  },
  {
    icon: Search,
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

export default function EnvironmentalClimateJustice() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-forest text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={environmentImage}
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
              <Leaf size={24} strokeWidth={1.7} />
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Environmental &amp; Climate Justice Programme
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Advancing environmental rights, climate resilience and
              accountability for vulnerable and marginalised communities.
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
          a floating full-width statement block.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

          <div>
            <h2 className="max-w-xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Protecting people, communities and the environment
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-gray-600">
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
                Reducing the impact of environmental and climate change on
                vulnerable and marginalised communities.
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
            We work with communities and partners to advance climate
            resilience, environmental protection and accountability.
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
        </div>
      </section>

    </main>
  );
}

