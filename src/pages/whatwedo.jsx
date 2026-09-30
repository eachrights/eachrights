import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Briefcase,
  ExternalLink,
  Globe2,
  HeartPulse,
  Leaf,
  Mail,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";

/* =========================================================
   PROGRAMME PHOTO IMPORTS
========================================================= */

import educationPhoto from "../assets/impact/impact-1.jpg";
import genderPhoto from "../assets/impact/impact-2.png";
import healthPhoto from "../assets/impact/impact-3.png";
import environmentalPhoto from "../assets/impact/impact-4.png";
import economicPhoto from "../assets/impact/impact-5.png";
import institutionalPhoto from "../assets/impact/impact-8.png";
import uprPhoto from "../assets/impact/impact-9.png";
import heroPhoto from "../assets/impact/heroImpact.png";

/* =========================================================
   EXTERNAL PLATFORM
========================================================= */

const SRHR_PORTAL_URL = "https://eachrights.github.io/srhr/";

/* =========================================================
   PROGRAMMES
========================================================= */
// Not a sequence — a set of focus areas — so cards below are
// unordered and identified by name, not by a numeric marker.

const programmes = [
  {
    name: "Education",
    path: "/programmes/education-justice",
    icon: BookOpenCheck,
    photo: educationPhoto,
    stat: "Access & quality",
    blurb:
      "Advancing equitable access to quality education and strengthening the right to learn, working with schools, communities and duty-bearers to address barriers to education.",
  },
  {
    name: "Gender",
    path: "/programmes/gender-justice",
    icon: Users,
    photo: genderPhoto,
    stat: "Equality & protection",
    blurb:
      "Promoting gender equality, dignity and protection for women, girls and vulnerable groups while challenging harmful practices and gender-based violence.",
  },
  {
    name: "Health",
    path: "/programmes/health-justice",
    icon: HeartPulse,
    photo: healthPhoto,
    stat: "Health & SRHR",
    blurb:
      "Advocating for equitable access to health services and the realization of the right to health, including Sexual and Reproductive Health and Rights.",
  },
  {
    name: "Environment and Climate Change",
    path: "/programmes/environmental-climate-justice",
    icon: Leaf,
    photo: environmentalPhoto,
    stat: "Accountability & resilience",
    blurb:
      "Supporting communities to address environmental challenges and climate-related injustices while promoting rights-based approaches to environmental protection.",
  },
  {
    name: "Economic Justice, Business and Human Rights",
    path: "/programmes/economic-justice",
    icon: Briefcase,
    photo: economicPhoto,
    stat: "Rights & accountability",
    blurb:
      "Advancing economic and social rights while promoting responsible business conduct and accountability for human rights impacts affecting communities.",
  },
  {
    name: "Institutional Growth and Sustainability",
    path: "/programmes/institutional-growth-sustainability",
    icon: ShieldCheck,
    photo: institutionalPhoto,
    stat: "Capacity & sustainability",
    blurb:
      "Strengthening organisational capacity, governance, partnerships and resource mobilisation to sustain EACHRights' long-term impact and effectiveness.",
  },
  {
    name: "Universal Periodic Review",
    path: "/processes/universal-periodic-review",
    icon: Globe2,
    photo: uprPhoto,
    stat: "UN human rights engagement",
    blurb:
      "Engaging with the United Nations Universal Periodic Review mechanism to contribute evidence, strengthen accountability and advance human rights commitments.",
  },
];

/* =========================================================
   PROCESSES / HUMAN RIGHTS ENGAGEMENT
========================================================= */

const processes = [
  {
    name: "Universal Periodic Review",
    path: "/processes/universal-periodic-review",
    icon: Globe2,
    stat: "UN engagement",
    blurb:
      "Engaging with the United Nations Universal Periodic Review mechanism to contribute evidence, strengthen accountability and advance human rights commitments.",
  },
];

/* =========================================================
   SRHR ADVOCACY
========================================================= */

const srhrAdvocacyLink = {
  name: "SRHR Advocacy Portal",
  url: SRHR_PORTAL_URL,
  blurb:
    "Explore the dedicated EACHRights portal documenting Sexual and Reproductive Health and Rights advocacy and related work across the region.",
};

/* =========================================================
   HERO FACTS
========================================================= */

const heroFacts = [
  {
    value: "07",
    label: "Core programmes",
  },
  {
    value: "East Africa",
    label: "Regional reach",
  },
  {
    value: "UPR",
    label: "UN engagement",
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const gridVariants = {
  hidden: {},
  shown: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  shown: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

/* =========================================================
   PROGRAMME CARD
========================================================= */
// Photo (or icon panel, when no photo exists) sits in a fixed
// frame at the top; name and blurb live in a legible panel
// below it. Border + icon-shift on hover, not a full recolor —
// the same restrained language as ProcessCard, so the two
// sections read as one system rather than two different kits.
//
// The frame is 3:2 to match the source photos' native ratio
// (1536×1024), so object-cover never has to crop them.

function ProgrammeCard({ name, blurb, icon: Icon, photo, stat, path }) {
  return (
    <motion.article variants={cardVariants} className="h-full">
      <Link
        to={path}
        className="group flex h-full flex-col overflow-hidden border border-forest/12 bg-white transition-colors duration-300 hover:border-forest"
      >
        <div className="relative aspect-[3/2] w-full overflow-hidden bg-forest-light">
          {photo ? (
            <>
              <img
                src={photo}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover grayscale-[30%] transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
              />
              <span className="pointer-events-none absolute inset-0 bg-forest/15 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-forest">
              <Icon size={32} strokeWidth={1.4} className="text-accent" />
            </div>
          )}

          {photo && (
            <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center bg-white text-forest shadow-sm">
              <Icon size={17} strokeWidth={1.8} />
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-sm font-semibold text-forest/55">{stat}</p>

          <h3 className="mt-2 font-display text-xl font-bold leading-snug text-forest sm:text-2xl">
            {name}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-7 text-ink/65">{blurb}</p>

          <span className="mt-6 inline-flex items-center gap-2 border-t border-forest/10 pt-5 text-sm font-bold text-forest transition-colors duration-300 group-hover:text-forest-dark">
            Read more
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({
  name,
  blurb,
  icon: Icon,
  path,
  stat,
}) {
  return (
    <motion.article variants={cardVariants}>
      <Link
        to={path}
        className="group block h-full border border-forest/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-lg"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center bg-forest-light">
            <Icon
              size={24}
              className="text-forest"
              strokeWidth={1.7}
            />
          </span>

          <ArrowRight
            size={18}
            className="text-forest/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-forest"
          />
        </div>

        <p className="mt-7 text-sm font-semibold text-forest/60">
          {stat}
        </p>

        <h3 className="mt-2 font-display text-2xl font-bold text-forest">
          {name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-ink/65">
          {blurb}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-forest">
          Explore this process
          <ArrowRight size={15} />
        </span>
      </Link>
    </motion.article>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function WhatWeDo() {
  return (
    <main className="min-h-screen bg-paper font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="relative isolate min-h-[420px] overflow-hidden bg-forest text-paper sm:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-accent" />

        <img
          src={heroPhoto}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6 py-10 sm:min-h-[440px] sm:px-8 sm:py-12 lg:min-h-[480px] lg:px-12 lg:py-16">

          <Link
            to="/"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="mt-3 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 bg-accent" />
            <p className="text-sm font-semibold text-white/70">
              OUR WORK
            </p>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            What we do
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            EACHRights promotes, protects and advances Economic and Social Rights
           across East Africa. We work with groups and communities,
            institutions and partners to address barriers to rights,
            strengthen accountability and support lasting social justice.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#programmes"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Explore our programmes
              <ArrowRight size={16} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Get involved
            </Link>
          </div>

          {/* Credibility strip */}
          <div className="mt-8 grid max-w-3xl grid-cols-3 gap-x-4 gap-y-6 border-t border-white/15 pt-6 sm:flex sm:flex-wrap sm:gap-x-10">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {fact.value}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-white px-6 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">

          <div>
            <span className="block h-1 w-14 bg-accent" />

            <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl">
              Rights into action
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="font-display text-2xl font-bold leading-snug text-forest sm:text-3xl">
              We work to create an environment where people can claim their
              rights and live with dignity
            </p>

            <p className="mt-6 text-lg leading-8 text-ink/70">
              Our work combines research, advocacy, capacity building and
              public interest litigation with community engagement and
              institutional partnerships. Across our programmes, we focus on
              the structural barriers that prevent people from fully enjoying
              their Economic and Social Rights.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROGRAMMES
      ===================================================== */}

      <section
        id="programmes"
        className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-18 lg:px-12"
      >
        <div className="max-w-3xl">
          <span className="block h-1 w-14 bg-accent" />

          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-forest sm:text-5xl">
            Seven Strategic Focus Areas, One commitment to justice
          </h2>

          <p className="mt-5 text-lg leading-8 text-ink/65">
            Our programmes respond to interconnected rights challenges
            affecting groups and communities across East Africa. Each programme combines
            evidence, community engagement, advocacy and partnerships to
            advance practical and sustainable change.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={gridVariants}
          className="mt-9 grid gap-px bg-forest/12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {programmes.map((programme) => (
            <ProgrammeCard
              key={programme.path}
              {...programme}
            />
          ))}
        </motion.div>
      </section>   

    </main>
  );
}
