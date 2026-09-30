import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Handshake,
  Eye,
  Target,
  ShieldCheck,
  Scale,
  HeartPulse,
} from "lucide-react";

import heroImg from "../../assets/ourstory/hero.png";
import missionImg from "../../assets/ourstory/mission.png";

/* =========================================================
   CONTENT
========================================================= */

const storyChapters = [
  {
    title: "Where it began",
    text: "EACHRights was founded by people who believed that every person, regardless of background or circumstance, is entitled to dignity and the full realization of their human rights.",
  },
  {
    title: "How we have grown",
    text: "What began as a small effort to support vulnerable and marginalized communities has grown into a regional organization working across research, advocacy, capacity building and public interest litigation.",
  },
  {
    title: "Shaped by the people we serve",
    text: "Along the way, our story has been shaped by the communities we serve, the partners we work alongside, and the challenges we continue to confront together.",
  },
];

const statements = [
  {
    icon: Eye,
    label: "Our Vision",
    text: "A just society that respects and upholds human rights and inherent dignity.",
  },
  {
    icon: Target,
    label: "Our Mission",
    text: "To promote and protect human dignity through the realization of social and economic rights for vulnerable and marginalized groups and communities.",
  },
  {
    icon: Handshake,
    label: "Goal Statement",
    text: "To achieve a just and equitable society where vulnerable and marginalized groups and communities can fully realize their rights to education and health, challenge gender and economic inequalities, and reduce the impact of environmental and climate vulnerabilities.",
  },
  
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We hold ourselves and our partners to the highest standards of ethics, honesty and truthfulness. We do the right thing even when no one is watching.",
  },
  {
    icon: Scale,
    title: "Transparency and Accountability",
    description:
      "We promote good governance, ensure fairness, build trust and take responsibility for our actions.",
  },
  {
    icon: Users,
    title: "Equity, Inclusion and Diversity",
    description:
      "We support fair treatment and full participation of all individuals, regardless of background or identity, and foster an environment where everyone feels valued.",
  },
  {
    icon: HeartPulse,
    title: "Human Dignity",
    description:
      "We uphold and protect the dignity of every person by treating them with respect, listening to them, and standing against discrimination.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description:
      "We promote collaborative efforts among staff, partners and communities to enhance effectiveness in achieving organisational goals.",
  },
];

/* =========================================================
   OUR STORY PAGE
========================================================= */

export default function OurStory() {
  const reduce = useReducedMotion();

  return (
    <main className="bg-paper font-sans text-ink">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-ink text-paper lg:min-h-[520px]">
        <img
          src={heroImg}
          alt="The EACHRights team together outdoors"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/55 to-black/10" />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-7xl px-6 pb-8 sm:px-8 lg:px-12 lg:pb-10"
        >
          <div className="mb-4 h-1 w-20 bg-[#8DC63F]" />

          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our story, rooted in dignity and justice
          </h1>
        </motion.div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.62fr_0.38fr] lg:gap-14">
          <p className="font-display text-3xl leading-snug text-forest sm:text-4xl">
            EACHRights promotes and protects human dignity through the
            realization of social and economic rights for vulnerable and
            marginalized groups and communities.
          </p>

          <p className="text-lg leading-8 text-ink/75 lg:pt-3">
            How EACHRights came to be, and the journey that continues to shape
            our work across East Africa.
          </p>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="bg-forest-light px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
              A story still being written
            </h2>

            <p className="mt-4 max-w-md text-lg leading-8 text-ink/70">
              Every campaign, case and partnership adds another chapter to our
              work advancing rights and justice across East Africa.
            </p>
          </div>

          <div className="relative border-l-2 border-[#8DC63F]/50 pl-8 sm:pl-12">
            {storyChapters.map((chapter) => (
              <article
                key={chapter.title}
                className="relative pb-8 last:pb-0"
              >
                <span className="absolute -left-[41px] top-2 h-4 w-4 rounded-full border-4 border-forest-light bg-[#8DC63F] sm:-left-[57px]" />

                <h3 className="font-display text-2xl font-bold text-forest">
                  {chapter.title}
                </h3>

                <p className="mt-2 max-w-xl text-lg leading-8 text-ink/75">
                  {chapter.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VISION / MISSION / GOAL / VALUES
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid border-t border-forest/15 md:grid-cols-2">
          {statements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`border-b border-forest/15 py-6 md:pr-10 ${
                  index % 2 === 1 ? "md:border-l md:pl-10 md:pr-0" : ""
                }`}
              >
                <div className="flex items-center gap-3 text-forest-dark">
                  <Icon
                    size={24}
                    className="text-[#8DC63F]"
                    strokeWidth={1.8}
                  />

                  <h2 className="text-lg font-bold">{item.label}</h2>
                </div>

                <p className="mt-3 font-display text-2xl leading-snug text-forest">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          WHERE OUR WORK IS FOCUSED
      ===================================================== */}

      <section className="bg-white px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
          <img
            src={missionImg}
            alt="An EACHRights facilitator speaking with community members"
            className="h-72 w-full object-cover sm:h-96 lg:h-[460px]"
          />

          <div>
            <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Where our work is focused
            </h2>

            <p className="mt-4 max-w-xl text-lg leading-8 text-ink/75">
              Our goal is to enable vulnerable and marginalized groups and
              communities to fully realize their rights to education and
              health, challenge gender and economic inequalities, and reduce
              the impact of environmental and climate change vulnerabilities.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOAL STATEMENT
      ===================================================== */}

      <section className="relative overflow-hidden bg-forest px-6 py-10 text-paper sm:px-8 lg:px-12 lg:py-12">
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full border-[25px] border-[#8DC63F]/10" />

        <div className="relative mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-display text-3xl leading-[1.2] text-white sm:text-4xl lg:text-5xl">
            To achieve a just and equitable society where vulnerable and
            marginalized groups and communities can fully realize their
            rights.
          </h2>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ===================================================== */}

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14 lg:px-12 lg:py-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
            Our values
          </h2>

          <p className="mt-4 max-w-sm text-lg leading-8 text-ink/70">
            Our values define how we work with communities, partners,
            institutions and one another.
          </p>
        </div>

        <ul className="border-t border-forest/15">
          {coreValues.map((value) => {
            const Icon = value.icon;

            return (
              <li
                key={value.title}
                className="grid gap-2 border-b border-forest/15 py-5 sm:grid-cols-[0.42fr_0.58fr] sm:gap-8"
              >
                <div className="flex items-start gap-3">
                  <Icon
                    size={24}
                    className="mt-1 shrink-0 text-[#8DC63F]"
                    strokeWidth={1.8}
                  />

                  <h3 className="font-display text-xl font-bold leading-snug text-forest">
                    {value.title}
                  </h3>
                </div>

                <p className="leading-7 text-ink/70">{value.description}</p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* =====================================================
          THEORY OF CHANGE
      ===================================================== */}

      <section className="bg-forest-light px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#8DC63F]">
              Our Approach
            </p>

            <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-forest sm:text-4xl">
              Explore our Theory of Change
            </h2>

            <p className="mt-3 leading-7 text-ink/70">
              Discover how our programmes, advocacy, partnerships and community
              engagement connect to the change we seek to achieve.
            </p>
          </div>

          <Link
            to="/programmes/theory-of-change"
            className="inline-flex shrink-0 items-center gap-2 bg-forest px-7 py-3.5 text-sm font-bold text-white transition hover:bg-forest-dark"
          >
            View Theory of Change
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
