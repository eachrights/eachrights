import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Scale,
  ArrowRight,
  ArrowUpRight,
  Users,
  Landmark,
  FileCheck,
  FileText,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

// Same image the Gender programme uses on the Home page.
import genderImage from "../../assets/impact/impact-2.png";

/* =========================================================
   Where the gender advocacy tools live.
========================================================= */

const ADVOCACY_PATH = "/resources/upr-advocacy-tools/gender";

/* =========================================================
   Intervention focus areas
========================================================= */

const focusAreas = [
  {
    icon: Users,
    color: "#0F9D8A",
    text: "Intersecting issues of gender norms, gender inequality, and gender-based violence in Kenya.",
  },
  {
    icon: Landmark,
    color: "#F59E0B",
    text: "Strengthen the participation of women in governance and decision-making.",
  },
  {
    icon: FileCheck,
    color: "#7C3AED",
    text: "Monitor the implementation of gender responsive policies, laws, and budgets.",
  },
];

const outcomes = [
  "Greater awareness of gender equality and women's rights.",
  "Increased participation of women in governance and decision-making.",
  "Improved implementation of gender-responsive laws, policies, and budgets.",
  "Stronger prevention and response to gender-based violence.",
  "Improved access to justice and protection for women and girls.",
  "Greater accountability among duty bearers and institutions.",
];

/* =========================================================
   VIDEOS — copied from the Gallery page
========================================================= */

const videos = [
  {
    title: "Operationalization of Garissa, Kenya Children's Assemblies",
    description:
      "Highlights from EACHRights programmes, community engagement and human rights work.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=dMBuKyPTfS8",
  },
  {
    title: "Marsabit Integrated Child Policy",
    description:
      "Stories, conversations and activities from EACHRights' work across East Africa.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=wftZlROyuPA",
  },
];

function getYouTubeVideoId(url) {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtube.com")) {
      videoId = parsedUrl.searchParams.get("v") || "";

      if (!videoId && parsedUrl.pathname.startsWith("/shorts/")) {
        videoId = parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0];
      }

      if (!videoId && parsedUrl.pathname.startsWith("/embed/")) {
        videoId = parsedUrl.pathname.split("/embed/")[1]?.split("/")[0];
      }
    }

    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.replace("/", "").split("/")[0];
    }

    return videoId;
  } catch {
    return "";
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

export default function GenderJustice() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={genderImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        {/* Legibility overlays */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                <Scale size={28} strokeWidth={1.7} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Programme 01
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Gender Justice
              <span className="block text-gold">Programme</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Promoting gender equality, meaningful participation, access to
              justice, and equal opportunities for women and men.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pillars"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
              >
                Explore our focus areas
                <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Get Involved
              </Link>
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
          INTRODUCTION
          Narrative on the left, programme goal as a sticky
          card on the right.
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.25fr,1fr] lg:gap-16">

          <div>
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                About the programme
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Advancing equality, dignity and participation
              </h2>
            </motion.div>

            <div className="mt-8 space-y-5 text-base leading-8 text-gray-600">
              <p>
                Despite Kenya&rsquo;s ratification of international, regional,
                and national frameworks promoting gender equality, achieving
                substantive gender equality remains a challenge. Women and
                girls facing social, economic, cultural, and other forms of
                adversity are particularly affected by discrimination,
                unequal access to opportunities, violence, and limited
                participation in decision-making.
              </p>

              <p>
                The Gender Justice Programme seeks to contribute to a
                society where women and men enjoy equal rights and
                opportunities across all sectors. The programme applies a
                human rights-based approach to address structural and
                systemic barriers to gender equality while promoting
                meaningful participation, empowerment, accountability, and
                access to justice.
              </p>
            </div>
          </div>

          <div className="lg:pt-24">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-forest p-8 text-white shadow-xl sm:p-10 lg:sticky lg:top-28"
            >
              <Scale
                size={110}
                strokeWidth={1.2}
                className="absolute -right-4 -top-4 text-white/10"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="h-1 w-12 rounded-full bg-gold" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Programme goal
                </p>
                <p className="mt-3 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                  A society where both women and men enjoy equal rights and
                  opportunities across all sectors, including meaningful
                  participation in governance and decision-making.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERVENTION FOCUS AREAS
      ===================================================== */}
      <section
        id="pillars"
        className="scroll-mt-20 bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Focus areas
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Intervention focus areas
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {focusAreas.map(({ icon: Icon, color, text }, index) => (
              <motion.article
                key={text}
                {...fadeUp}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border-t-8 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl sm:p-9"
                style={{ borderTopColor: color }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: color }}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <span
                    className="font-display text-5xl font-bold opacity-20"
                    style={{ color }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-6 text-lg font-semibold leading-8 text-ink">
                  {text}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Gender advocacy tools link */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative mx-auto mt-12 flex max-w-4xl flex-col items-start gap-6 overflow-hidden rounded-2xl p-8 text-white shadow-xl sm:flex-row sm:items-center sm:justify-between sm:p-10"
            style={{
              backgroundImage:
                "linear-gradient(145deg, #EC4899 0%, #9D174D 100%)",
              boxShadow: "0 18px 40px -20px #9D174D",
            }}
          >
            <FileText
              size={160}
              strokeWidth={0.8}
              className="pointer-events-none absolute -right-8 -top-8 text-white/10"
              aria-hidden="true"
            />

            <div className="relative max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                Advocacy tools
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Gender advocacy tools
              </h3>
              <p className="mt-2 leading-7 text-white/85">
                Guides, briefings and reports to support gender advocacy,
                ready to read or download.
              </p>
            </div>

            <Link
              to={ADVOCACY_PATH}
              className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#9D174D] transition hover:gap-3"
            >
              View gender advocacy tools
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VIDEOS — same cards as the Gallery page
      ===================================================== */}
      <section id="videos" className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Watch
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              From our work.
            </h2>
          </motion.div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {videos.map((video, index) => {
              const videoId = getYouTubeVideoId(video.url);
              const isActive = activeVideo === index;

              return (
                <motion.article
                  key={`${video.title}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 2) * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {videoId && !isActive ? (
                      <button
                        type="button"
                        onClick={() => setActiveVideo(index)}
                        className="absolute inset-0 h-full w-full"
                        aria-label={`Play ${video.title}`}
                      >
                        <img
                          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                          alt={video.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          onError={(event) => {
                            event.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                          }}
                        />

                        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8DC63F] text-forest shadow-xl transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                            <PlayCircle
                              size={26}
                              strokeWidth={2}
                              className="sm:h-7 sm:w-7"
                            />
                          </span>
                        </div>
                      </button>
                    ) : videoId ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
                        title={video.title}
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-2 px-4 text-center text-sm text-white/70">
                        <PlayCircle size={28} strokeWidth={1.5} />
                        Add a valid YouTube URL to display this video.
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <span className="bg-[#8DC63F]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest-dark">
                        Video
                      </span>

                      <span className="text-xs text-ink/50">{video.date}</span>
                    </div>

                    <h3 className="line-clamp-3 font-display text-base font-bold leading-snug text-forest">
                      {video.title}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/65">
                      {video.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPECTED CHANGE — card grid, same style as the
          Theory of Change programme cards
      ===================================================== */}
      <section className="bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
              Expected change
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Creating lasting change.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Through research, advocacy, capacity building, partnerships,
              and community engagement, the programme seeks to strengthen
              systems that advance gender equality and protect the rights
              of women and girls.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((item, index) => (
              <motion.article
                key={item}
                {...fadeUp}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="h-1.5 w-full bg-gradient-to-r from-forest via-[#8DC63F] to-gold" />
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-white">
                      <CheckCircle2 size={26} strokeWidth={1.7} />
                    </div>
                    <span className="font-display text-4xl font-bold text-forest/15 transition-colors group-hover:text-[#8DC63F]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-6 text-lg font-semibold leading-8 text-forest">{item}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12 lg:py-20">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Scale size={26} strokeWidth={1.7} />
          </div>

          <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
            Support gender justice
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            Partner with us to promote equality, participation,
            accountability, and the protection of human rights across East
            Africa.
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
        </motion.div>
      </section>

    </main>
  );
}
