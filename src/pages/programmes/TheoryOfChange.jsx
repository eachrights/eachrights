import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Target,
  Lightbulb,
  Route,
  Sprout,
  Scale,
  GraduationCap,
  HeartPulse,
  Leaf,
  BriefcaseBusiness,
  BookOpen,
  MessagesSquare,
  Megaphone,
  Landmark,
  HandHelping,
  TrendingUp,
} from "lucide-react";

// Same image the Home page uses beside its Theory of Change block.
import theoryOfChangeImage from "../../assets/videos/rightsintoaction.png";

/* =========================================================
   THEORY OF CHANGE PAGE
========================================================= */

/* ---------- The story in four beats ---------- */
const story = [
  {
    label: "The Challenge",
    icon: Target,
    text: "Systemic inequalities limit vulnerable and marginalized groups and communities from accessing basic rights and influencing decisions in Kenya.",
  },
  {
    label: "The Assumption",
    icon: Lightbulb,
    text: "With knowledge, resources, platforms and action on structural barriers, people can become effective agents of change.",
  },
  {
    label: "The Strategic Response",
    icon: Route,
    text: "EACHRights works through five interconnected justice programmes using rights-based advocacy, community engagement and policy reform.",
  },
  {
    label: "The Change",
    icon: Sprout,
    text: "Capacity and voice grow, access to services improves, resilience strengthens, and systems become more responsive and accountable.",
  },
];

/* ---------- The six-step change mechanism ---------- */
const mechanism = [
  {
    verb: "Empower",
    icon: BookOpen,
    color: "#0F9D8A",
    text: "We equip vulnerable and marginalized groups and communities with knowledge, skills, information and tools to understand and claim their rights.",
  },
  {
    verb: "Engage",
    icon: MessagesSquare,
    color: "#F59E0B",
    text: "We create platforms for communities, civil society, government and other stakeholders to participate in dialogue, decision-making and solutions to issues affecting them.",
  },
  {
    verb: "Advocate",
    icon: Megaphone,
    color: "#7C3AED",
    text: "We use evidence, research, policy engagement, public awareness and strategic advocacy to amplify community voices and demand action on rights issues.",
  },
  {
    verb: "Influence",
    icon: Landmark,
    color: "#2563EB",
    text: "We engage duty bearers, policymakers and institutions to influence laws, policies, budgets, programmes and practices that affect vulnerable and marginalized groups.",
  },
  {
    verb: "Improve",
    icon: HandHelping,
    color: "#3FA535",
    text: "We work with communities, partners and institutions to address barriers, strengthen accountability and contribute to better access to essential services and rights.",
  },
  {
    verb: "Advance",
    icon: TrendingUp,
    color: "#0B5C7E",
    text: "We support sustained community action, stronger systems and continued advocacy that contribute to greater equality, dignity, inclusion and social justice.",
  },
];

/* ---------- Programmes ---------- */
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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function TheoryOfChange() {
  const [active, setActive] = useState(0);
  const current = mechanism[active];
  const CurrentIcon = current.icon;

  const goPrev = () => setActive((i) => (i === 0 ? mechanism.length - 1 : i - 1));
  const goNext = () => setActive((i) => (i === mechanism.length - 1 ? 0 : i + 1));

  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">

        {/* Background photo (same image as the Home page Theory of Change block) */}
        <img
          src={theoryOfChangeImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Legibility overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-4xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
              <Compass size={28} strokeWidth={1.7} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
              Our Work / Programmes
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Theory of Change
            </h1>

            <p className="mt-4 text-lg font-medium text-gold sm:text-xl">
              A simple story of how our programmes create lasting social and
              economic change.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85">
              Our Theory of Change outlines the approaches and intervention strategy
              pathways, which are reflected in the programmes and include the
              assumptions and the logical connections between the different levels
              of the organisation&rsquo;s Vision, Mission, and Goal Statement.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#mechanism"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
              >
                See how change happens
                <ArrowRight size={18} />
              </a>
              <a
                href="#programmes"
                className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore the programmes
              </a>
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
          THE STORY IN FOUR BEATS
          Challenge → Assumption → Response → Change
      ===================================================== */}

      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              The Big Picture
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              From a problem we refuse to accept, to a change we can measure.
            </h2>
          </motion.div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* connector line (desktop only) */}
            <div
              className="absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-gradient-to-r from-forest/10 via-forest/40 to-forest/10 lg:block"
              aria-hidden="true"
            />

            {story.map((beat, index) => {
              const Icon = beat.icon;
              const isLast = index === story.length - 1;
              return (
                <motion.div
                  key={beat.label}
                  {...fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  whileHover={{ y: -6 }}
                  className={`relative rounded-2xl border p-7 shadow-sm transition-shadow hover:shadow-lg ${
                    isLast
                      ? "border-[#8DC63F]/40 bg-forest text-white"
                      : "border-forest/10 bg-forest-soft"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isLast ? "bg-white/15 text-white" : "bg-forest/10 text-forest"
                      }`}
                    >
                      <Icon size={24} strokeWidth={1.7} />
                    </div>
                    <span
                      className={`font-display text-3xl font-bold ${
                        isLast ? "text-white/25" : "text-forest/15"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p
                    className={`mt-6 text-xs font-semibold uppercase tracking-[0.2em] ${
                      isLast ? "text-[#8DC63F]" : "text-forest"
                    }`}
                  >
                    {beat.label}
                  </p>
                  <p className={`mt-3 leading-7 ${isLast ? "text-white/85" : "text-gray-600"}`}>
                    {beat.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CHANGE MECHANISM (interactive)
          Empower → Engage → Advocate → Influence → Improve → Advance
      ===================================================== */}

      <section id="mechanism" className="scroll-mt-20 bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              The EACHRights Change Mechanism
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Six steps that turn rights into action.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Select each step to see how we move communities from knowing their
              rights to shaping the systems that serve them.
            </p>
          </motion.div>

          {/* Step selector */}
          <div className="relative mt-14">
            {/* progress track (desktop) */}
            <div className="absolute left-[8.33%] right-[8.33%] top-8 hidden h-1 rounded-full bg-forest/10 lg:block" aria-hidden="true">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: current.color }}
                animate={{ width: `${(active / (mechanism.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="relative grid grid-cols-3 gap-y-8 lg:grid-cols-6">
              {mechanism.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === active;
                const isPassed = index <= active;
                return (
                  <button
                    key={step.verb}
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    aria-pressed={isActive}
                    aria-label={`Step ${index + 1}: ${step.verb}`}
                    className="group flex flex-col items-center gap-3 focus:outline-none"
                  >
                    <motion.span
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white shadow-md transition-colors group-focus-visible:ring-4 group-focus-visible:ring-forest/30"
                      style={{
                        borderColor: isPassed ? step.color : "#D1D5DB",
                        color: isPassed ? step.color : "#9CA3AF",
                        boxShadow: isActive ? `0 10px 25px -8px ${step.color}` : undefined,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.8} />
                    </motion.span>
                    <span
                      className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity sm:text-sm"
                      style={{
                        backgroundColor: step.color,
                        opacity: isActive ? 1 : 0.55,
                      }}
                    >
                      {step.verb}
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
                key={current.verb}
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
                      Step {active + 1} of {mechanism.length}
                    </p>
                    <h3 className="text-2xl font-bold" style={{ color: current.color }}>
                      {current.verb}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-lg leading-8 text-gray-600">{current.text}</p>

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

          {/* Tagline */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-14 text-center font-display text-lg italic text-forest sm:text-xl"
          >
            Stronger Communities
            <span className="mx-3 text-forest/30">|</span>
            Rights Realised
            <span className="mx-3 text-forest/30">|</span>
            A More Just Society
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          PROGRAMME PATHWAYS
      ===================================================== */}

      <section id="programmes" className="scroll-mt-20 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Intervention Pathways
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Five programmes, one pathway to justice.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Each programme applies the same six-step mechanism to a different
              part of people&rsquo;s lives.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
            {programmes.map((programme, index) => {
              const Icon = programme.icon;
              // First row: three cards; second row: two wider cards.
              const span = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
              return (
                <motion.article
                  key={programme.title}
                  {...fadeUp}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-xl ${span} ${
                    index === 4 ? "md:col-span-2" : ""
                  }`}
                >
                  {/* accent bar */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-forest via-[#8DC63F] to-gold" />

                  <div className="flex flex-1 flex-col p-7 sm:p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                        <Icon size={26} strokeWidth={1.7} />
                      </div>
                      <span className="font-display text-4xl font-bold text-forest/15 transition-colors group-hover:text-[#8DC63F]">
                        {programme.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold leading-snug text-forest">
                      {programme.title}
                    </h3>

                    <ul className="mt-5 flex-1 space-y-3">
                      {programme.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-7 text-gray-600">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8DC63F]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          GET INVOLVED CTA
      ===================================================== */}

      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Be part of the change
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
        </motion.div>
      </section>

    </main>
  );
}
