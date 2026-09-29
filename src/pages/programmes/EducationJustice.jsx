import { motion } from "framer-motion";
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
} from "lucide-react";

// Same image the Education programme uses on the Home page.
import educationImage from "../../assets/impact/impact-1.png";

/* =========================================================
   The twelve focus areas grouped into the four pillars they
   actually represent, rather than one flat list.
========================================================= */

const pillars = [
  {
    icon: Users,
    title: "Access & Equity in Learning",
    items: [
      "Promote access to education for vulnerable and marginalized groups and communities.",
      "Promote access to education for children and young people living in urban informal settlements.",
      "Advance equitable access to education for children and communities in rural, arid, and semi-arid areas.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Inclusive Learning",
    items: [
      "Strengthen foundational learning and access to quality early childhood education.",
      "Promote inclusive education for learners facing disability, discrimination, exclusion, and other barriers.",
      "Advocate for safe, inclusive, accessible, and child-friendly learning environments.",
    ],
  },
  {
    icon: BookOpen,
    title: "Pathways Beyond the Classroom",
    items: [
      "Promote girl-child education, including enrolment, retention, completion, and transition across levels of education.",
      "Support education, skills development, vocational opportunities, and lifelong learning for young people.",
      "Promote adult and continuing education, including literacy and skills development opportunities.",
    ],
  },
  {
    icon: Search,
    title: "Policy, Research & Accountability",
    items: [
      "Monitor and advocate for the implementation of education laws, policies, plans, programmes, and budgets.",
      "Conduct research and advocacy on emerging and persistent education justice issues.",
      "Strengthen the capacity and participation of communities, parents, learners, teachers, and other education stakeholders.",
    ],
  },
];

const outcomes = [
  "Increased access to quality and inclusive education.",
  "Improved enrolment, retention, completion, and transition.",
  "Stronger foundational learning and early childhood education.",
  "Improved opportunities for learners in underserved communities.",
  "Greater access to vocational, adult, and continuing education.",
  "Stronger community participation in education accountability.",
];

export default function EducationJustice() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-forest text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={educationImage}
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
              <GraduationCap size={24} strokeWidth={1.7} />
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Education Justice Programme
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Advancing the right to quality, inclusive, equitable, and
              accessible education for vulnerable and marginalized
              communities.
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
          INTRODUCTION — the citation stays front and center;
          it's the one place this page earns a distinct voice.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-forest bg-forest-soft px-8 py-8 sm:px-10 sm:py-10"
          >
            <p className="text-lg leading-8 text-ink/85 sm:text-xl">
              &ldquo;Education is both a human right in itself and an
              indispensable means of realizing other human rights. As an
              empowerment right, education is the primary vehicle by which
              economically and socially marginalized adults and children can
              lift themselves out of poverty and obtain the means to
              participate fully in their communities.&rdquo;
            </p>

            <cite className="mt-6 block text-sm font-medium not-italic text-forest">
              General Comment No. 13 on the Right to Education, para. 1
            </cite>
          </motion.blockquote>

          <div className="mt-10 space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex flex-col gap-6 rounded-2xl bg-forest p-8 text-white sm:flex-row sm:items-center sm:p-10"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
              <Target size={22} strokeWidth={1.7} />
            </div>

            <p className="text-xl font-semibold leading-8 sm:text-2xl">
              To enhance the right to education among vulnerable and
              marginalized groups and communities.
            </p>
          </motion.div>
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
            Our interventions address the social, economic, geographical,
            and institutional barriers that prevent children, young people,
            and adults from accessing and benefiting from education.
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
        <div className="mx-auto max-w-4xl">
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
        </div>
      </section>

    </main>
  );
}
