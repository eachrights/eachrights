import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

import {
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowUpRight,
  GraduationCap,
  Scales,
  Heartbeat,
  Leaf,
  Briefcase,
  ShieldCheck,
  Globe,
  MagnifyingGlass,
  Megaphone,
  Users,
  Gavel,
  FileText,
  Quotes,
  Bank,
  Images,
  Handshake,
  UsersThree,
  ChalkboardTeacher,
  Newspaper,
  MapPin,
} from "@phosphor-icons/react";

import CountUp from "../components/CountUp.jsx";

import hero1 from "../assets/hero/hero-1.png";
import hero2 from "../assets/hero/hero-2.png";
import hero3 from "../assets/hero/hero-3.png";
import hero4 from "../assets/hero/hero-4.png";

import impact1 from "../assets/impact/impact-1.jpg";
import impact2 from "../assets/impact/impact-2.png";
import impact3 from "../assets/impact/impact-3.png";
import impact4 from "../assets/impact/impact-4.png";
import impact5 from "../assets/impact/impact-5.png";
import impact6 from "../assets/impact/impact-6.png";
import impact7 from "../assets/impact/impact-7.png";
import impact8 from "../assets/impact/impact-8.png";
import impact9 from "../assets/impact/impact-9.png";

import commitmentImage from "../assets/videos/evidence.png";
import educationJusticeImage from "../assets/videos/rightsintoaction.png";

// ============================================================
// STRATEGIC PLAN PDF
// ============================================================
// Bundled the same way Publications.jsx links its PDFs: imported
// as a static asset so Vite resolves it to a real, hashed URL at
// build time instead of relying on a /documents/... path in public/.
import strategicPlan2026 from "../assets/publications/STRATEGIC PLAN 2026-2030.pdf";
import strategicPlan2026Thumb from "../assets/publication-thumbs/STRATEGIC PLAN 2026-2030.png";

/* =========================================================
   CONTENT
========================================================= */

const HERO_INTERVAL = 2000;
const SRHR_PORTAL_URL = "https://eachrights.github.io/srhr/";


const heroSlides = [
  {
    label: "Advancing human rights since 2010",
    title: "Rights realized",
    highlight: "not just recognized",
    description:
      "EACHRights works to promote, protect, and advance social and economic rights across East Africa.",
    image: hero1,
  },
  {
    label: "Communities at the centre",
    title: "Dignity begins",
    highlight: "with equal opportunity",
    description:
      "We work with groups and communities to build an environment where people can claim their rights and live with dignity.",
    image: hero2,
  },
  {
    label: "Evidence into action",
    title: "Research becomes",
    highlight: "action for justice",
    description:
      "Through research, advocacy, capacity building and public interest litigation, we turn human rights principles into action.",
    image: hero3,
  },
  {
    label: "Systems that deliver rights",
    title: "Advancing Rights",
    highlight: "Strengthening Systems Transforming Lives",
    description:
      "EACHRights strengthens systems that enable people to realise their rights. We work with groups and communities, civil society, government and other stakeholders to improve policies, institutional capacity, accountability, financing, evidence, participation and coordination, creating more responsive, inclusive and sustainable systems for the delivery of social and economic rights.",
    image: hero4,
  },
];


/* Taken from the goal statement. */
const focusAreas = [
  {
    icon: GraduationCap,
    color: "sky",
    title: "Education",
    text: "Enabling groups and communities to fully realize their right to education.",
  },
  {
    icon: Heartbeat,
    color: "rose",
    title: "Health",
    text: "Enabling groups and communities to fully realize their right to health.",
  },
  {
    icon: Scales,
    color: "violet",
    title: "Gender",
    text: "Challenging gender and economic inequalities.",
  },
  {
    icon: Leaf,
    color: "green",
    title: "Environment and Climate Change",
    text: "Reducing the impact of environmental and climate change vulnerabilities.",
  },
  {
    icon: Leaf,
    color: "green",
    title: "Economic, Business and Human Rights",
    text: "Advancing economic and social rights for groups and communities.",
  },
];

/*
|--------------------------------------------------------------------------
| PROGRAMMES
|--------------------------------------------------------------------------
| Institutional Growth and Sustainability has no dedicated photo yet, so
| `image` is left unset for it — the preview panel below falls back to a
| solid background when a programme has no image. Add an
| `../assets/impact/impact-7.png` (or similar) and set it here once one
| exists.
*/

const programmes = [
  {
    title: "Education",
    description:
      "Advancing equitable access to quality education and strengthening the right to learn.",
    icon: GraduationCap,
    color: "sky",
    image: impact1,
    link: "/programmes/education-justice",
  },
  {
    title: "Gender",
    description:
      "Promoting gender equality, dignity and protection for women, girls and vulnerable groups.",
    icon: Scales,
    color: "violet",
    image: impact2,
    link: "/programmes/gender-justice",
  },
  {
    title: "Health",
    description:
      "Advocating for equitable access to health and the realization of the right to health.",
    icon: Heartbeat,
    color: "rose",
    image: impact3,
    link: "/programmes/health-justice",
  },
  {
    title: "Environment and Climate Change",
    description:
      "Supporting groups and communities to address environmental challenges and climate-related injustices.",
    icon: Leaf,
    color: "green",
    image: impact4,
    link: "/programmes/environmental-climate-justice",
  },
  {
    title: "Economic Justice, Business and Human Rights",
    description:
      "Advancing economic and social rights for groups and communities.",
    icon: Briefcase,
    color: "amber",
    image: impact5,
    link: "/programmes/economic-justice",
  },
  {
    title: "Universal Periodic Review",
    description:
      "Our engagement with the UN's Universal Periodic Review mechanism to advance human rights accountability.",
    icon: Globe,
    color: "teal",
    image: impact9,
    link: "/processes/universal-periodic-review",
  },
  {
    title: "Institutional Growth and Sustainability",
    description:
      "Strengthening our organisational capacity, governance and resource base to sustain long-term impact.",
    icon: ShieldCheck,
    color: "forest",
    image: impact8,
    link: "/programmes/institutional-growth-sustainability",
  },
];

const impactStats = [
  { value: 120, suffix: "+", label: "Research initiatives" },
  { value: 4500, suffix: "+", label: "Networking, collaboration and partnerships" },
  { value: 32, suffix: "", label: "Social movement and grassroots initiatives" },
  { value: 67, suffix: "%", label: "Training and capacity building" },
  { value: 67, suffix: "%", label: "Lobbying and advocacy" },
  { value: 67, suffix: "%", label: "Community and public awareness" },
];

/* Mirrors the six approaches on the How We Work page. */
const approaches = [
  {
    title: "Research",
    description:
      "Undertaking baseline studies, surveys, position papers and policy briefs to build evidence-based programmes.",
    icon: MagnifyingGlass,
    color: "amber",
  },
  {
    title: "Networking, collaboration, and partnerships",
    description:
      "Working with CSOs, NGOs, INGOs, government and the private sector to advance rights for groups and communities.",
    icon: Handshake,
    color: "teal",
  },
  {
    title: "Social movement building and grassroots community mobilization",
    description:
      "Supporting groups and communities to organize around common concerns and lead citizen-driven campaigns.",
    icon: UsersThree,
    color: "violet",
  },
  {
    title: "Training and capacity building",
    description:
      "Strengthening the knowledge and skills of groups and communities, CSOs, local leaders, government agencies and partners.",
    icon: ChalkboardTeacher,
    color: "sky",
  },
  {
    title: "Lobbying and advocacy",
    description:
      "Engaging decision-makers with credible evidence to drive legal, policy and structural reforms.",
    icon: Megaphone,
    color: "rose",
  },
  {
    title: "Community and public awareness creation",
    description:
      "Educating the public and encouraging collective action to address local challenges and promote human rights.",
    icon: Newspaper,
    color: "green",
  },
];

/** Who bears the weight when rights guaranteed on paper aren't realized in practice. */
const challengeGroups = [
  "Groups and communities living in poverty, with the least power to demand accountability.",
  "Women and girls facing gender-based discrimination and exclusion.",
  "Informal workers with little legal protection or bargaining power.",
  "Groups and communities on the frontline of environmental and climate harm.",
];

/** The three outcomes the Strategic Plan 2026–2030 is built to deliver. */
const strategicAims = [
  {
    icon: Users,
    text: "Groups and communities equipped to know, claim and defend their economic, social and cultural rights.",
  },
  {
    icon: Bank,
    text: "Institutions across Kenya, Uganda and Tanzania held to their human rights obligations.",
  },
  {
    icon: ShieldCheck,
    text: "A resilient, well-governed organisation with the capacity to sustain this work long-term.",
  },
];

/* `counties` is optional and shown as chips under the country. Add or
   remove names freely; the list below only includes counties named in the
   team bios, so please complete it with the full list. */
const regions = [
  {
    country: "Kenya",
    description:
      "Home base for our national advocacy, research and litigation work.",
    counties: ["Nairobi", "Kajiado", "Marsabit", "Garissa", "Homa Bay", "Migori", "Kilifi", "Kwale", "Turkana"],
  },
  {
    country: "Uganda",
    description:
      "Partnerships supporting group and community-level rights education and monitoring.",
  },
  {
    country: "Tanzania",
    description:
      "Cross-border research and coalition work on shared regional challenges.",
  },
];

/* Countries EACHRights has worked in previously. Replace the placeholder
   entries below with the real ones; `period` is optional. The section
   lays them out automatically and hides itself if the list is empty. */
const previousCountries = [
  {
    country: "Rwanda",
    //description: "Briefly describe the work done here.",
  },
  {
    country: "Burundi",
    //description: "Briefly describe the work done here.",
  },
  {
    country: "Madagascar",
    //description: "Briefly describe the work done here.",
  },
  {
    country: "South Sudan",
    //description: "Briefly describe the work done here.",
  },
  {
    country: "Comoros",
    //description: "Briefly describe the work done here.",
  },
  {
    country: "Sudan",
    //description: "Briefly describe the work done here.",
  },
  {
    country: "Somalia",
    //description: "Briefly describe the work done here.",
  },
];

/* Add new platforms here; the section lays them out automatically. */
const platforms = [
  {
    type: "Portal",
    title: "SRHR Portal",
    description:
      "Explore EACHRights' Sexual and Reproductive Health and Rights portal.",
    icon: Heartbeat,
    color: "rose",
    url: SRHR_PORTAL_URL,
    /* Optional: shows a live, non-interactive preview of the site in the card. */
    preview: SRHR_PORTAL_URL,
  },
];

const preloadSources = [
  ...heroSlides.map((s) => s.image),
  ...programmes.map((p) => p.image).filter(Boolean),
];

/* =========================================================
   HOOKS
========================================================= */

/** Auto-advancing slider; pauses on request and restarts on manual change. */
function useSlider(total, paused) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(
      () => setCurrent((prev) => (prev + 1) % total),
      HERO_INTERVAL
    );
    return () => clearInterval(id);
  }, [total, paused, current]);

  return [current, setCurrent];
}

function useScrolledPast(offset = 500) {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const onScroll = () => setPassed(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return passed;
}

function usePreload(sources) {
  useEffect(() => {
    sources.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [sources]);
}

/* =========================================================
   SHARED
========================================================= */

/* Vertical padding is kept deliberately tight so sections sit close
   together instead of leaving large empty bands between them. */
const SECTION = "px-6 py-8 sm:px-8 lg:px-12 lg:py-10";
const CONTAINER = "mx-auto max-w-7xl";

/* Maps each data item's `color` key to a tile gradient. All values stay
   within the brand's forest-green / lime-accent palette. */
const COLOR_GRADIENTS = {
  sky: "from-[#8DC63F] to-lime-600",
  rose: "from-emerald-400 to-forest",
  violet: "from-green-500 to-forest-dark",
  green: "from-lime-500 to-green-700",
  amber: "from-forest to-forest-dark",
  teal: "from-emerald-500 to-forest-dark",
  forest: "from-[#8DC63F] to-forest-dark",
};

function SectionHeading({ title, children, light = false }) {
  return (
    <div className="max-w-3xl">
      <h2
        className={`font-display text-4xl font-bold leading-tight sm:text-5xl ${
          light ? "text-white" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-8 ${
            light ? "text-white/70" : "text-ink/65"
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

function Fade({ children, keyId, reduce, className = "" }) {
  return (
    <motion.div
      key={keyId}
      initial={{ opacity: reduce ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: reduce ? 1 : 0 }}
      transition={{ duration: reduce ? 0 : 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Glossy gradient icon tile for light-background sections. */
function IconTile({ icon: Icon, gradient, size = 22, tileSize = 48, className = "" }) {
  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} shadow-lg shadow-black/15 ring-1 ring-black/5 transition-all duration-300 ${className}`}
      style={{ width: tileSize, height: tileSize }}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/0 to-black/10" />
      <Icon size={size} weight="duotone" className="relative text-white drop-shadow-sm" />
    </span>
  );
}

/** Translucent glass icon tile for dark forest-green sections. */
function GlassIconTile({ icon: Icon, size = 22, tileSize = 48 }) {
  return (
    <span
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white/10 shadow-lg shadow-black/20 ring-1 ring-white/15 backdrop-blur-sm"
      style={{ width: tileSize, height: tileSize }}
    >
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/0 to-transparent" />
      <Icon size={size} weight="duotone" className="relative text-[#8DC63F] drop-shadow-sm" />
    </span>
  );
}

/* =========================================================
   SECTIONS
========================================================= */

/** Full-bleed hero: images play as a background slideshow behind the message. */
function Hero() {
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [current, setCurrent] = useSlider(heroSlides.length, paused);
  const slide = heroSlides[current];
  const total = heroSlides.length;

  return (
    <header
      className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Background slideshow */}
      <AnimatePresence initial={false}>
        <motion.img
          key={current}
          src={slide.image}
          alt=""
          aria-hidden="true"
          initial={{ opacity: reduce ? 1 : 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: reduce ? 1 : 0 }}
          transition={{ duration: reduce ? 0 : 1.2 }}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Legibility overlays */}
      <div className="absolute inset-0 -z-10 bg-black/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Message */}
      <div className="mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-center gap-8 px-6 pb-24 pt-14 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" initial={false}>
            <Fade keyId={current} reduce={reduce}>
              <p className="flex items-center gap-3 text-sm font-semibold text-white/80">
                <span className="h-px w-10 bg-[#8DC63F]" />
                {slide.label}
              </p>

              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                {slide.title}
                <span className="block text-white/65">{slide.highlight}</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                {slide.description}
              </p>
            </Fade>
          </AnimatePresence>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 bg-[#8DC63F] px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Explore our work
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/who-we-are/our-story"
              className="inline-flex items-center gap-2 border border-white/60 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-forest"
            >
              Our story
            </Link>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 pb-8 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            {heroSlides.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show slide ${index + 1}: ${item.label}`}
                aria-current={current === index ? "true" : undefined}
                className="group py-3"
              >
                <span
                  className={`block h-1 transition-all duration-500 ${
                    current === index
                      ? "w-14 bg-[#8DC63F]"
                      : "w-7 bg-white/40 group-hover:bg-white"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setCurrent((current - 1 + total) % total)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-[#8DC63F] hover:text-[#8DC63F]"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={() => setCurrent((current + 1) % total)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition hover:border-[#8DC63F] hover:text-[#8DC63F]"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/** External platforms and tools. Driven by the `platforms` array above. */
function Platforms() {
  return (
    <section
      aria-labelledby="platforms-title"
      className="bg-white px-6 py-8 sm:px-8 lg:px-12 lg:py-10"
    >
      <div className={CONTAINER}>
        <div className="max-w-2xl">
          <span className="block h-1 w-14 bg-[#8DC63F]" />
          <h2
            id="platforms-title"
            className="mt-4 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl"
          >
            Platforms and tools
          </h2>
          <p className="mt-3 max-w-lg text-lg leading-8 text-ink/65">
            Online portals and resources from EACHRights.
          </p>
        </div>

        <ul className="mt-8 grid gap-8">
          {platforms.map((platform) => {
            const Icon = platform.icon;
            const host = new URL(platform.url).host;

            return (
              <li
                key={platform.title}
                className="grid overflow-hidden border border-forest/15 bg-paper lg:grid-cols-[1.15fr_0.85fr]"
              >
                {/* Preview inside a browser-style frame */}
                <div className="bg-forest-light p-5 sm:p-8">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="block bg-white shadow-xl ring-1 ring-forest/15"
                  >
                    <span className="flex items-center gap-3 border-b border-forest/10 bg-white px-4 py-2.5">
                      <span className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-forest/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-forest/20" />
                        <span className="h-2.5 w-2.5 rounded-full bg-forest/20" />
                      </span>
                      <span className="truncate bg-forest-light px-3 py-1 text-xs text-forest/70">
                        {host}
                      </span>
                    </span>

                    {platform.preview ? (
                      <span className="relative block aspect-[16/10] overflow-hidden bg-white">
                        {/* Site rendered at 3x size, scaled down to fit the frame */}
                        <iframe
                          src={platform.preview}
                          title=""
                          tabIndex={-1}
                          loading="lazy"
                          className="pointer-events-none absolute left-0 top-0 h-[300%] w-[300%] origin-top-left scale-[0.3333] border-0"
                        />
                      </span>
                    ) : null}
                  </a>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center border-t-4 border-[#8DC63F] p-8 lg:border-l lg:border-t-0 lg:p-12">
                  <IconTile icon={Icon} gradient={COLOR_GRADIENTS[platform.color]} size={24} tileSize={48} />

                  <p className="mt-6 text-sm font-semibold text-forest/60">
                    {platform.type}
                  </p>
                  <h3 className="mt-1 font-display text-3xl font-bold leading-tight text-forest">
                    {platform.title}
                  </h3>
                  <p className="mt-4 max-w-sm leading-7 text-ink/70">
                    {platform.description}
                  </p>

                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 self-start bg-forest px-6 py-3.5 text-sm font-bold text-white transition hover:bg-forest-dark"
                  >
                    Open the portal
                    <ArrowUpRight size={17} />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** "Who we are" intro, anchored by a large framed photo with a floating stat card. */
function Introduction() {
  return (
    <section
      aria-labelledby="intro-title"
      className="overflow-hidden bg-paper px-6 py-8 sm:px-8 lg:px-12 lg:py-12"
    >
      <div className={`${CONTAINER} grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16`}>
        {/* Image, framed with an offset accent border and a floating stat card */}
        <div className="relative order-1 lg:order-1">
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 -z-10 hidden h-full w-full border-2 border-[#8DC63F] sm:block"
          />
          <img
            src={impact7}
            alt=""
            aria-hidden="true"
            className="aspect-[3/2] w-full object-cover shadow-2xl shadow-forest-dark/25"
          />

          <div className="absolute -bottom-7 left-4 right-4 flex items-center gap-4 bg-forest px-6 py-5 text-white shadow-xl sm:left-8 sm:right-auto sm:max-w-[260px]">
            <span className="font-display text-4xl font-bold text-[#8DC63F]">
              Since 2010
            </span>
            <span className="text-sm leading-6 text-white/85">
              Years advancing human rights across East Africa
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="order-2 pt-10 sm:pt-12 lg:order-2 lg:pt-0">
          <span className="block h-1 w-14 bg-[#8DC63F]" />
          <h2
            id="intro-title"
            className="mt-4 font-display text-4xl font-bold leading-tight text-forest sm:text-5xl"
          >
            Who we are
          </h2>

          <p className="mt-5 max-w-xl font-display text-2xl font-bold leading-snug text-forest sm:text-3xl">
            The East African Centre for Human Rights seeks to promote, protect, and advance social and economic rights 
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/70">
            EACHRights is a non-partisan regional non-governmental organisation
            working with vulnerable and marginalized communities. Through
            research, advocacy, capacity building and public interest
            litigation, we work to build a society where people can claim
            their rights and live with dignity.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/who-we-are/our-story"
              className="inline-flex items-center gap-2 bg-forest px-6 py-3.5 text-sm font-bold text-white transition hover:bg-forest-dark"
            >
              Read our story
              <ArrowRight size={17} />
            </Link>
            <p className="text-sm font-semibold text-forest/60">
              Working across Kenya, Uganda &amp; Tanzania
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** The problem this work responds to: rights on paper vs. rights in practice. */
function Challenge() {
  return (
    <section className="bg-white" aria-labelledby="challenge-title">
      <div className={`${CONTAINER} grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-12 lg:py-10`}>
        <div>
          <p className="flex items-center gap-3 text-sm font-semibold text-forest/60">
            <span className="h-px w-10 bg-[#8DC63F]" />
            The challenge
          </p>
          <h2
            id="challenge-title"
            className="mt-4 font-display text-3xl font-bold leading-tight text-forest sm:text-4xl"
          >
            Rights guaranteed on paper are still out of reach in daily life
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-ink/70">
            Constitutions and international treaties across East Africa
            recognize economic, social and cultural rights. But recognition on
            its own does not put food on a table, keep a clinic stocked, or
            get children to school.
          </p>
          <p className="mt-3 max-w-xl leading-7 text-ink/65">
            This is not because these rights are aspirational. It is because
            the institutions meant to deliver them are under-resourced,
            under-monitored, or not held to account.
          </p>

          <div className="mt-6 space-y-3 border-t border-forest/10 pt-5">
            {challengeGroups.map((line) => (
              <p key={line} className="leading-7 text-ink/70">
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className="relative pb-8">
          <img
            src={impact3}
            alt=""
            aria-hidden="true"
            className="aspect-[3/2] w-full max-w-md object-cover"
          />
          <img
            src={impact2}
            alt=""
            aria-hidden="true"
            className="absolute bottom-0 -left-8 hidden aspect-[3/2] w-40 border-4 border-white object-cover shadow-xl sm:block lg:w-48"
          />
        </div>
      </div>
    </section>
  );
}

/** Short excerpt from the Strategic Plan 2026-2030, with the plan's three headline aims. */
function StrategicPlanHighlight() {
  return (
    <section
      aria-labelledby="strategic-plan-title"
      className="bg-forest px-6 py-8 sm:px-8 lg:px-12 lg:py-10 text-white"
    >
      <div className={CONTAINER}>
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
          <GlassIconTile icon={FileText} size={30} tileSize={64} />

          <div>
            <p className="flex items-center gap-3 text-sm font-semibold text-white/70">
              <span className="h-px w-10 bg-[#8DC63F]" />
              Strategic Plan 2026 &ndash; 2030
            </p>

            <h2
              id="strategic-plan-title"
              className="mt-3 font-display text-3xl font-bold italic leading-snug sm:text-4xl"
            >
              &ldquo;A just society that respects and upholds human rights and
              inherent dignity.&rdquo;
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-white/75">
              Our vision anchors a five-year plan built around seven strategic
              focus areas &mdash; from gender and education justice to
              institutional sustainability &mdash; developed through a
              participatory process with our staff and stakeholders.
            </p>

            <a
              href={strategicPlan2026}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#8DC63F] px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Read the full Strategic Plan
              <ArrowUpRight size={17} />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-white/15 pt-6 text-sm font-semibold text-white/70">
          Over the next five years, we&apos;re working toward:
        </p>
        <div className="mt-5 grid gap-6 sm:grid-cols-3 sm:gap-6">
          {strategicAims.map((aim) => {
            const Icon = aim.icon;
            return (
              <div key={aim.text} className="flex gap-4 border-t border-[#8DC63F] pt-4">
                <GlassIconTile icon={Icon} size={20} tileSize={44} />
                <p className="leading-7 text-white/85">{aim.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Programme explorer: choose from the list, preview on the right (large screens). */
function Programmes() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const selected = programmes[active];

  return (
    <section className={`bg-forest-light ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading title="Seven Strategic Focus Areas, One commitment to justice">
            All our areas of work seek to address the structural barriers that prevent communities from fully realizing their rights.
          </SectionHeading>
          <Link
            to="/what-we-do"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-forest transition hover:text-forest-dark"
          >
            View all our work
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <ul className="divide-y divide-forest/15 border-y border-forest/15">
            {programmes.map((programme, index) => {
              const Icon = programme.icon;
              const isActive = index === active;

              return (
                <li key={programme.title}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    onMouseEnter={() => setActive(index)}
                    aria-expanded={isActive}
                    className={`flex w-full items-center gap-4 border-l-4 px-5 py-5 text-left transition ${
                      isActive
                        ? "border-[#8DC63F] bg-white"
                        : "border-transparent hover:bg-white/60"
                    }`}
                  >
                    <IconTile
                      icon={Icon}
                      gradient={COLOR_GRADIENTS[programme.color]}
                      size={18}
                      tileSize={40}
                      className={isActive ? "ring-2 ring-[#8DC63F] ring-offset-2 scale-105" : "opacity-60"}
                    />
                    <span className="font-display text-xl font-bold text-forest sm:text-2xl">
                      {programme.title}
                    </span>
                  </button>

                  {isActive && (
                    <div className="bg-white px-5 pb-6 pl-[68px]">
                      <p className="max-w-md leading-7 text-ink/70">
                        {programme.description}
                      </p>
                      <Link
                        to={programme.link}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-forest underline decoration-[#8DC63F] decoration-2 underline-offset-4"
                      >
                        Read more
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="relative order-first min-h-[220px] overflow-hidden bg-forest sm:min-h-[300px] lg:order-none lg:min-h-[520px]">
            <AnimatePresence initial={false}>
              {selected.image ? (
                <motion.img
                  key={selected.title}
                  src={selected.image}
                  alt=""
                  aria-hidden="true"
                  initial={{ opacity: reduce ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: reduce ? 1 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.5 }}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <motion.div
                  key={selected.title}
                  initial={{ opacity: reduce ? 1 : 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: reduce ? 1 : 0 }}
                  transition={{ duration: reduce ? 0 : 0.5 }}
                  className="absolute inset-0 h-full w-full bg-forest-dark"
                />
              )}
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8 pt-24">
              <p className="font-display text-2xl font-bold text-white">
                {selected.title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-6 py-8 text-white sm:px-8 lg:px-12 lg:py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#8DC63F]/15 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 -z-10 h-96 w-96 rounded-full bg-[#8DC63F]/10 blur-[100px]"
      />

      <div className={CONTAINER}>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-10">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            Evidence of work, Stories of change
          </h2>
          <p className="max-w-md leading-7 text-white/70">
            Our work connects evidence, communities, institutions and
            decision-makers to advance social and economic rights.
          </p>
        </div>

        <dl className="mt-6 grid border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/15 py-4 sm:pr-6 lg:[&:not(:nth-child(3n+1))]:border-l lg:[&:not(:nth-child(3n+1))]:pl-6"
            >
              <dd className="font-display text-3xl font-bold text-white sm:text-4xl">
                <CountUp end={stat.value} duration={2} separator="," />
                {stat.suffix}
              </dd>
              <dt className="mt-1 max-w-xs text-sm leading-6 text-white/75">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={strategicPlan2026}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/80 underline decoration-[#8DC63F] decoration-2 underline-offset-4 transition hover:text-white"
          >
            Read the full Strategic Plan
            <ArrowUpRight size={16} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          <Link
            to="/gallery"
            className="group inline-flex items-center gap-2 border border-white/25 bg-white/5 px-5 py-3 text-sm font-bold text-white/85 backdrop-blur-sm transition hover:border-[#8DC63F] hover:bg-[#8DC63F]/10 hover:text-white"
          >
            <Images size={17} weight="duotone" className="text-[#8DC63F]" />
            View our gallery
            <ArrowRight size={16} className="text-[#8DC63F] transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Full-bleed pull-quote, anchoring the vision behind the day-to-day work. */
function QuoteBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-10 text-white sm:px-8 lg:px-12 lg:py-12">
      <img
        src={commitmentImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      <div className={`${CONTAINER} max-w-3xl`}>
        <GlassIconTile icon={Quotes} size={26} tileSize={56} />

        <p className="mt-5 font-display text-2xl font-bold leading-snug sm:text-3xl">
          Success looks like communities who know their rights, institutions
          that answer to the people they serve, and a region where dignity is
          not conditional on circumstance.
        </p>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className={`bg-paper ${SECTION}`}>
      <div className={CONTAINER}>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading title="Evidence. Advocacy. Action.">
            We combine knowledge, community power, institutional engagement and
            strategic legal action to advance human rights.
          </SectionHeading>
          <Link
            to="/how-we-work"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-forest transition hover:text-forest-dark"
          >
            How we work
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
          {approaches.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="border-t-4 border-[#8DC63F] pt-5">
                <IconTile icon={Icon} gradient={COLOR_GRADIENTS[item.color]} size={26} tileSize={52} />
                <h3 className="mt-4 font-display text-2xl font-bold text-forest">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-ink/65">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Founding story and Theory of Change, each anchored by a static image. */
function StoryAndChange() {
  return (
    <section className="bg-white">
      <div className={`${CONTAINER} grid lg:grid-cols-2`}>
        <div className="flex flex-col justify-center px-6 py-8 sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-bold leading-tight text-forest sm:text-4xl">
            A decade-plus of turning rights into action
          </h2>
          <p className="mt-4 max-w-lg leading-8 text-ink/70">
            Since 2010, our work has been rooted in the belief that dignity,
            equality and justice must be made real in people&apos;s daily lives.
          </p>
          <Link
            to="/who-we-are/our-story"
            className="mt-6 inline-flex items-center gap-2 self-start bg-forest px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
          >
            Read our story
            <ArrowRight size={17} />
          </Link>
        </div>
        <img
          src={commitmentImage}
          alt=""
          aria-hidden="true"
          className="aspect-[3/2] w-full object-cover"
        />
      </div>

      <div className={`${CONTAINER} grid lg:grid-cols-2`}>
        <img
          src={educationJusticeImage}
          alt=""
          aria-hidden="true"
          className="order-2 aspect-[3/2] w-full object-cover lg:order-1"
        />
        <div className="order-1 flex flex-col justify-center px-6 py-8 sm:px-8 lg:order-2 lg:px-12">
          <h2 className="font-display text-3xl font-bold leading-tight text-forest sm:text-4xl">
            From evidence to lasting change
          </h2>
          <p className="mt-4 max-w-lg leading-8 text-ink/70">
            Our Theory of Change connects the work we do today with the more
            just and equitable society we seek to build.
          </p>
          <Link
            to="/programmes/theory-of-change"
            className="mt-6 inline-flex items-center gap-2 self-start border border-forest px-6 py-3.5 text-sm font-bold text-forest transition hover:bg-forest hover:text-white"
          >
            Explore our Theory of Change
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** East African scope: kept compact — a tight three-column strip rather than
    a full section, so it reads as a quick fact row under the story/change
    blocks rather than another full-height section. */
function WhereWeWork() {
  return (
    <section className="border-y border-forest/10 bg-paper px-6 py-6 sm:px-8 lg:px-12">
      <div className={CONTAINER}>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="font-display text-xl font-bold leading-tight text-forest sm:text-2xl">
            East African in scope, community-rooted in practice
          </h2>
        </div>

        <div className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-3">
          {regions.map((region) => (
            <div key={region.country} className="border-t-2 border-[#8DC63F] pt-3">
              <h3 className="font-display text-lg font-bold text-forest">
                {region.country}
              </h3>
              <p className="mt-1 text-sm leading-6 text-ink/60">
                {region.description}
              </p>

              {region.counties?.length > 0 && (
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {region.counties.map((county) => (
                    <li
                      key={county}
                      className="border border-forest/15 bg-white px-2 py-0.5 text-xs font-medium text-forest/80"
                    >
                      {county}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Right-to-left marquee for the PreviousCountries section. The track holds
   two identical sets of cards; translating by half its width loops seamlessly. */
const MARQUEE_CSS = `
@keyframes eachr-marquee-rtl {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.eachr-marquee-track {
  animation: eachr-marquee-rtl 45s linear infinite;
  will-change: transform;
}
.eachr-marquee:hover .eachr-marquee-track,
.eachr-marquee:focus-within .eachr-marquee-track {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .eachr-marquee-track { animation: none; }
  .eachr-marquee { overflow-x: auto; }
  .eachr-marquee-dup { display: none; }
}
`;

/** Countries we have worked in previously, shown directly below "Where we work". */
function PreviousCountries() {
  if (!previousCountries.length) return null;

  const renderCard = (item, index, hidden = false) => (
    <li
      key={`${item.country}-${index}${hidden ? "-dup" : ""}`}
      className="group relative w-[260px] shrink-0 border border-forest/15 border-t-4 border-t-[#8DC63F] bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-t-forest hover:shadow-xl hover:shadow-forest/10 sm:w-[290px]"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-sm font-bold tracking-widest text-forest/40">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-[#8DC63F] transition group-hover:bg-[#8DC63F] group-hover:text-forest">
          <MapPin size={18} weight="duotone" />
        </span>
      </div>

      <h3 className="mt-8 font-display text-3xl font-bold leading-tight text-forest">
        {item.country}
      </h3>

      {item.period && (
        <p className="mt-1 text-sm font-semibold text-forest/60">{item.period}</p>
      )}

      {item.description && (
        <p className="mt-3 text-sm leading-6 text-ink/65">{item.description}</p>
      )}
    </li>
  );

  return (
    <section
      aria-labelledby="previous-countries-title"
      className="overflow-hidden bg-white px-6 py-10 sm:px-8 lg:px-12 lg:py-14"
    >
      <style>{MARQUEE_CSS}</style>

      <div className={CONTAINER}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="block h-1 w-14 bg-[#8DC63F]" />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-forest/60">
              Beyond our current footprint
            </p>
            <h2
              id="previous-countries-title"
              className="mt-2 font-display text-3xl font-bold leading-tight text-forest sm:text-4xl"
            >
              Countries we have worked in previously
            </h2>
          </div>

          <p className="flex items-baseline gap-2 text-forest">
            <span className="font-display text-5xl font-bold text-[#8DC63F]">
              {previousCountries.length}
            </span>
            <span className="max-w-[10rem] text-sm font-semibold leading-5 text-forest/70">
              additional countries across Africa
            </span>
          </p>
        </div>
      </div>

      {/* Full-width marquee with soft fade at both edges */}
      <div
        className="eachr-marquee relative mt-10 overflow-hidden py-3"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="eachr-marquee-track flex w-max">
          <ul className="flex shrink-0 gap-5 pr-5">
            {previousCountries.map((item, index) => renderCard(item, index))}
          </ul>
          {/* Duplicate set makes the loop seamless; hidden from assistive tech */}
          <ul aria-hidden="true" className="eachr-marquee-dup flex shrink-0 gap-5 pr-5">
            {previousCountries.map((item, index) => renderCard(item, index, true))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ScrollToTop({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-forest text-white shadow-xl transition hover:bg-forest-dark"
        >
          <ArrowUp size={19} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const showScrollTop = useScrolledPast();
  usePreload(preloadSources);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <SEO
        fullTitle="EACHRights | Advancing Human Rights & Social Justice in East Africa"
        description="EACHRights promotes and protects Economic, Social and Cultural Rights for groups and communities across East Africa."
        path="/"
      />

      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[60] bg-white px-5 py-3 text-sm font-bold text-forest focus:not-sr-only"
      >
        Skip to content
      </a>

      <Hero />

      <main id="main-content">
        <Introduction />
        <Challenge />
        <Programmes />
        <Impact />
        <QuoteBanner />
        <Approach />
        <StoryAndChange />
        <StrategicPlanHighlight />
        <WhereWeWork />
        <PreviousCountries />
        <Platforms />
      </main>

      <ScrollToTop visible={showScrollTop} />
    </div>
  );
}
