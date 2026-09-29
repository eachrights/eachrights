import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Target,
  Lightbulb,
  Scale,
  GraduationCap,
  HeartPulse,
  Leaf,
  BriefcaseBusiness,
} from "lucide-react";

// Same image the Home page uses beside its Theory of Change block.
import theoryOfChangeImage from "../../assets/videos/rightsintoaction.png";

/* =========================================================
   THEORY OF CHANGE PAGE
========================================================= */

const programmes = [
  {
    number: "01",
    title: "Gender Justice Programme",
    icon: Scale,
    points: [
      "Challenge harmful gender norms and promote gender equality",
      "Support survivors of gender-based violence through advocacy and service linkages",
      "Strengthen legal and social frameworks that protect women and marginalized genders",
    ],
  },
  {
    number: "02",
    title: "Education Justice Programme",
    icon: GraduationCap,
    points: [
      "Advocate for inclusion and equitable access to quality education, especially for marginalized children and learners with disabilities and vulnerable groups and communities",
      "Monitor policy implementation (e.g., CBE, capitation, teacher deployment)",
      "Address inequalities through policy advocacy and legal reform",
    ],
  },
  {
    number: "03",
    title: "Health Justice Programme",
    icon: HeartPulse,
    points: [
      "Promote access to sexual and reproductive health and rights (SRHR) services",
      "Push for the elimination of barriers to healthcare for marginalized populations",
      "Advocate for increased public health funding and accountability",
    ],
  },
  {
    number: "04",
    title: "Environmental and Climate Justice Programme",
    icon: Leaf,
    points: [
      "Build resilience of vulnerable communities to environmental and climate impacts",
      "Promote participation in environmental governance and policy processes",
      "Support advocacy on equitable access to climate financing and resources",
    ],
  },
  {
    number: "05",
    title: "Economic Justice, Business and Human Rights Programme",
    icon: BriefcaseBusiness,
    points: [
      "Address income inequalities through policy advocacy and legal reform",
      "Promote decent work and labor rights for all, especially in informal sectors",
      "Push for corporate accountability through the application of frameworks such as the Business and Human Rights Guiding Principles and the ESG Framework",
    ],
  },
];

export default function TheoryOfChange() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-forest text-white">

        {/* Background photo (same image as the Home page Theory of Change block) */}
        <img
          src={theoryOfChangeImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Legibility overlays */}
        <div className="absolute inset-0 -z-10 bg-forest/40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">


          <div className="mt-8 max-w-4xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <Compass size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Theory of Change
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85">
              Our Theory of Change outlines the approaches and intervention strategy
              pathways, which are reflected in the programmes and include the
              assumptions and the logical connections between the different levels
              of the organisation&rsquo;s Vision, Mission, and Goal Statement.
            </p>

          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
          PROBLEM STATEMENT & ASSUMPTION
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-forest/10 bg-forest-soft p-8 sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
              <Target size={24} strokeWidth={1.7} />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Problem Statement
            </p>
            <p className="mt-4 leading-7 text-gray-600">
              Systemic inequalities limit the ability of vulnerable and marginalized
              groups and communities to access basic rights and influence
              decision-making processes in Kenya.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-forest/10 bg-forest-soft p-8 sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/10 text-forest">
              <Lightbulb size={24} strokeWidth={1.7} />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Assumption
            </p>
            <p className="mt-4 leading-7 text-gray-600">
              If vulnerable and marginalized groups and communities are empowered
              with knowledge, resources, and platforms to advocate for their rights,
              and if structural barriers are addressed through coordinated,
              rights-based interventions, then these groups and communities can
              become effective agents of change, driving social justice.
            </p>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          PROGRAMME PATHWAYS
      ===================================================== */}

      <section className="bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Intervention Pathways
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Five programmes, one pathway to justice.
            </h2>
          </div>

          <div className="mt-14 space-y-6">
            {programmes.map((programme, index) => {
              const Icon = programme.icon;
              return (
                <motion.div
                  key={programme.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="grid gap-6 rounded-2xl border border-forest/10 bg-white p-8 shadow-sm sm:p-10 lg:grid-cols-[auto,1fr] lg:gap-10"
                >
                  <div className="flex items-start gap-4 lg:flex-col lg:items-start">
                    <span className="font-display text-3xl font-bold text-forest/15 sm:text-4xl">
                      {programme.number}
                    </span>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest">
                      <Icon size={26} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-forest sm:text-2xl">
                      {programme.title}
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {programme.points.map((point) => (
                        <li key={point} className="flex gap-3 leading-7 text-gray-600">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8DC63F]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          GET INVOLVED CTA
      ===================================================== */}

      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Support this programme
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us, or explore our other programme areas advancing
            economic, social and cultural rights across East Africa.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
            >
              Get Involved
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
