import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  PlayCircle,
  ArrowLeft,
  ArrowRight,
  Newspaper,
  Tv,
  Radio,
  ArrowUpRight,
} from "lucide-react";

import storiesHero from "../assets/gallery/stories-voices-moments.png";

/*
|--------------------------------------------------------------------------
| ADD YOUR LOCAL PHOTOS HERE
|--------------------------------------------------------------------------
| Import each photo from your assets folder, then reference it below with
| a short title and description for the caption.
*/

import photo1 from "../assets/gallery/photo-1.jpg";
import photo2 from "../assets/gallery/photo-2.jpg";
import photo3 from "../assets/gallery/photo-3.png";
import photo4 from "../assets/gallery/photo-4.jpg";
import photo5 from "../assets/gallery/photo-5.jpg";
import photo6 from "../assets/gallery/photo-6.jpg";
import photo7 from "../assets/gallery/photo-7.jpg";
import photo8 from "../assets/gallery/photo-8.jpg";
import photo9 from "../assets/gallery/photo-9.jpg";
import photo10 from "../assets/gallery/photo-10.jpg";
import photo11 from "../assets/gallery/photo-11.jpg";

/*
|--------------------------------------------------------------------------
| ADD YOUR LOCAL (DOWNLOADED) MEDIA VIDEOS HERE
|--------------------------------------------------------------------------
| 1. Put the video files in src/assets/gallery/media/ (mp4 works best).
| 2. Import each one below, e.g.
|      import ntvClip from "../assets/gallery/media/ntv-clip.mp4";
|      import ntvPoster from "../assets/gallery/media/ntv-clip.jpg"; // optional
| 3. Reference it in the mediaCoverage list further down with
|      video: ntvClip,
|      poster: ntvPoster,   // optional thumbnail
*/

import tvClip1 from "../assets/gallery/media/tv-clip-1.mp4";
import tvClip2 from "../assets/gallery/media/tv-clip-2.mp4";
import tvClip3 from "../assets/gallery/media/tv-clip-3.mp4";
import radioClip1 from "../assets/gallery/media/radio-clip-1.mp3";

const photos = [
  /*{
    image: photo1,
    title: "Kenya Children's Assemblies Launch",
    description: "The launch of the Kenya Children's Assemblies (KCA) in Marsabit County.",
  },
  {
    image: photo2,
    title: "Field Visit, Kibiko Primary School",
    description: "Field visit by ERIKS Development Partners to assess the ECO Gardens established under the Eco Justice Clubs at Kibiko Primary School in Nairobi.",
  },
  {
    image: photo3,
    title: "Baseline Survey Validation",
    description: "Meeting for the validation of the Baseline Survey Report for SRHR under the Strengthening Grant.",
  },
  {
    image: photo4,
    title: "Field Visit, Marsabit",
    description: "The EACHRights team meeting with community leaders in Marsabit County.",
  },*/
   {
    image: photo5,
    title: "",
    description: "Training of Community Child Protection Champions in Marsabit County.",
  },
   {
    image: photo6,
    title: "",
    description: "UPR Child Rights and Education Cluster Stakeholders’ Meeting to Advance the Finalisation of CSO Action Points on the State UPR Implementation Plan.",
  },
   {
    image: photo7,
    title: "",
    description: "Eco-Justice Club Members Nurturing Gardens at Paranae Primary School, Kajiado County.",
  },
   {
    image: photo8,
    title: "",
    description: "Training Learners on Climate Change Mitigation at Kikambala Primary School, Kilifi County.",
  },
   {
    image: photo9,
    title: "",
    description: "Multi-Stakeholder Meeting to Review and Strengthen the Draft Kilifi County Adolescent and Young People (AYP) Health Strategy 2025–2030.",
  },
   {
    image: photo10,
    title: "",
    description: "Consultative Meeting with the Sexual Violence UPR Thematic Group.",
  },
   {
    image: photo11,
    title: "",
    description: "Community dialogue with school BoM and residence in Turkana county.",
  },
];

const PHOTO_INTERVAL = 5000;

/*
|--------------------------------------------------------------------------
| ADD YOUR FACEBOOK POSTS HERE
|--------------------------------------------------------------------------
| On Facebook, open a post, click its timestamp, and copy the address from
| the browser bar. The post must be public. Add "height" (in pixels) if a
| post is cut off or has too much empty space — posts with photos usually
| need 500–650, text-only posts 250–350. Posts scroll inside the column.
|
| While this list is empty, the page's latest posts are shown instead.
*/

const FACEBOOK_PAGE_URL = "https://www.facebook.com/EACHRights";

const facebookPosts = [
  // { url: "https://www.facebook.com/EACHRights/posts/PASTE_POST_ID", height: 650 },
];

const facebookPostSrc = (url) =>
  `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(url)}&show_text=true&width=350`;

const facebookPageSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  FACEBOOK_PAGE_URL
)}&tabs=timeline&width=350&height=480&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false`;

/*
|--------------------------------------------------------------------------
| ADD YOUR YOUTUBE VIDEOS HERE
|--------------------------------------------------------------------------
*/

const videos = [
  {
    title: "Operationalization of Garissa, Kenya Children's Assemblies",
    description:
      "Highlights from EACHRights programmes, community engagement and human rights work.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=dMBuKyPTfS8",
  },
  {
    title:
      "Restoring the Hope through Education: The Reading Rocket Project in Kenya",
    description:
      "Community-based activities and initiatives supporting human rights and social justice.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=Mry_WyjgLPM",
  },
  {
    title: "Hands-On Climate Action with the Reading Rocket Project",
    description:
      "Stories, conversations and activities from EACHRights' work across East Africa.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=KG_930uAXpQ",
  },
  {
    title: "Marsabit Integrated Child Policy",
    description:
      "Stories, conversations and activities from EACHRights' work across East Africa.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=wftZlROyuPA",
  },
  {
    title:
      "Voices of Resilience: Breaking Barriers to Girl Child Education in Garissa",
    description:
      "Breaking barriers and championing girl child education in Garissa County.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=ShcjWaMZ230",
  },
  {
    title:
      "Voices of Resilience: Breaking Barriers to Girl Child Education in Garissa",
    description:
      "Inspiring stories of resilience against FGM and in support of girl child education.",
    date: "Feb 10, 2025",
    url: "https://www.youtube.com/watch?v=rRGE51TG-7A",
  },
  {
    title: "Reconstituting the Garissa Children’s Assemblies",
    description:
      "Children participated in elections across six sub-counties in Garissa, creating platforms for children to express their views and advocate for issues that matter to them.",
    date: "Feb 3, 2025",
    url: "https://www.youtube.com/watch?v=mSEDTQTSOMc",
  },
  {
    title: "Impact of Climate Change on Education in Kilifi County",
    description:
      "Climate change is affecting lives and education in Kilifi County, disrupting learning and threatening the future of children.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=cc2o8fT9Efs",
  },
  {
    title:
      "Garissa Child Participation in Developing Guidelines for Management of Missing and Found Children",
    description:
      "Garissa children participated in the development of guidelines for the management of missing and found children.",
    date: "2026",
    url: "https://www.youtube.com/watch?v=gM0GXplEk2I",
  },
  {
    title:
      "Marsabit Children's Involvement in Guidelines for Managing Missing Children",
    description:
      "Marsabit children participated in developing guidelines for the management of missing children.",
    date: "Oct 18, 2024",
    url: "https://www.youtube.com/watch?v=paIm8O_MOvw",
  },
  {
    title: "Enchoro Enkai Eco Justice Club",
    description:
      "EACHRights held a two-day workshop at Enchorro Enkai Primary School in Kajiado South, empowering learners on environmental stewardship and supporting the launch of an Eco Justice Club.",
    date: "Oct 18, 2024",
    url: "https://www.youtube.com/watch?v=HHrP9cCvo5U",
  },
  {
    title: "Kikambala Eco Justice Club",
    description:
      "Eco-Justice Clubs empower learners to understand environmental challenges and adopt eco-friendly practices. This documentary highlights Kikambala Primary School’s Eco-Justice Club as they create an eco-garden and promote environmental stewardship.",
    date: "Oct 18, 2024",
    url: "https://www.youtube.com/watch?v=ZDb-C8ryo2M",
  },
  {
    title: "Child Participation Forum",
    description:
      "Children have the right to participate in matters affecting their lives. Their inclusion in programs addressing their needs is crucial. This documentary illustrates children educating their children against Child marriage in Bubisa,Marsabit county. Transcript and supporting the launch of an Eco Justice Club.",
    date: "Oct 18, 2024",
    url: "https://www.youtube.com/watch?v=4c_tLTLp3Hk",
  },
  {
    title: "Tunza Watoto Campaign",
    description:
      "EachRights in partnership with Standard Group carried out Tunza Watoto wetu Media Campaign. The Campaign focused on the effect of Covid -19 Pandemic on Child Rights violation.",
    date: "Dec 4, 2023",
    url: "https://www.youtube.com/watch?v=A442sUby8To",
  },
];

/*
|--------------------------------------------------------------------------
| ADD YOUR NEWSPAPER, TELEVISION & RADIO COVERAGE HERE
|--------------------------------------------------------------------------
| type   : "Newspaper" | "Television" | "Radio"
| outlet : the newspaper, TV station or radio station
| title  : headline, programme or segment title
| date   : shown as written, e.g. "12 Mar 2026"
| url    : link to the article, clip or recording. Leave "" if there is none
|          and the card will show without a link.
|          YouTube links (youtube.com or youtu.be) play inline on the card.
| video  : (optional) a downloaded video file imported at the top of this
|          file. It plays inline on the card, no url needed.
| poster : (optional) thumbnail image shown before a local video plays.
| audio  : (optional) a downloaded mp3 imported at the top of this file.
|          Shows a built-in audio player on the card (use with "Radio").
|
| Delete a whole group's entries and its tab disappears automatically.
*/

const MEDIA_TYPES = {
  Newspaper: { icon: Newspaper, action: "Read article" },
  Television: { icon: Tv, action: "Watch clip" },
  Radio: { icon: Radio, action: "Listen" },
};

const mediaCoverage = [
   {
    type: "Newspaper",
    outlet: "High Flyer Report",
    title: "Exclusive: Uganda Faces 4th UN Human Rights Review, Why Strong Laws Are Failing on the Ground",
    date: "2 Jun 2026",
    url: "https://highflyerreport.com/2026/06/02/exclusive-uganda-faces-4th-un-human-rights-review-why-strong-laws-are-failing-on-the-ground/",
  },
  {
    type: "Television",
    outlet: "TV47", // TODO
    title: "Programme or segment title", // TODO
    date: "2026", // TODO
    url: "https://youtu.be/1AcJKP-YwzU",
  },
  {
    type: "Television",
    outlet: "Citizen Tv", // TODO
    title: "Programme or segment title", // TODO
    date: "2026", // TODO
    url: "https://youtu.be/t3asXtTT9nc",
  },

  // ---------- Downloaded clips (files in src/assets/gallery/media/) ----------
  {
    type: "Television",
    outlet: "Radio Citizen Tv", // TODO
    title: "Programme or segment title", // TODO
    date: "2026", // TODO
    video: tvClip1,
  },
  {
    type: "Television",
    outlet: "", // TODO
    title: "First national conference on privatization of education", // TODO
    date: "2026", // TODO
    video: tvClip2,
  },
  {
    type: "Television",
    outlet: "RADIO CITIZEN", // TODO
    title: "Launching of the strategic plan", // TODO
    date: "2026", // TODO
    video: tvClip3,
  },
  {
    type: "Radio",
    outlet: "Bahari FM", // TODO
    title: "Dissemination of RMNCAH ACT", // TODO
    date: "2026", // TODO
    audio: radioClip1,
  },
];

/*
|--------------------------------------------------------------------------
| GET YOUTUBE VIDEO ID
|--------------------------------------------------------------------------
*/

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

/** A single newspaper / television / radio coverage card. */
function MediaCard({ item }) {
  const { icon: Icon, action } = MEDIA_TYPES[item.type];
  const videoId = getYouTubeVideoId(item.url);
  const [playing, setPlaying] = useState(false);

  // ---------- LOCAL VIDEO FILES: downloaded clips imported into the project ----------
  if (item.video) {
    return (
      <article className="group flex h-full flex-col overflow-hidden border border-forest/15 border-t-4 border-t-[#8DC63F] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-t-forest hover:shadow-xl">
        <div className="relative aspect-video overflow-hidden bg-black">
          <video
            src={item.video}
            poster={item.poster}
            controls
            playsInline
            preload="metadata"
            title={item.title}
            className="absolute inset-0 h-full w-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest/50">
              <Icon size={14} strokeWidth={1.75} />
              {item.type}
            </span>
            <span className="text-xs text-ink/50">{item.date}</span>
          </div>

          <p className="mt-4 text-sm font-bold text-forest-dark">{item.outlet}</p>

          <h3 className="mt-2 line-clamp-3 font-display text-lg font-bold leading-snug text-forest">
            {item.title}
          </h3>
        </div>
      </article>
    );
  }

  // ---------- LOCAL AUDIO FILES: downloaded mp3 clips ----------
  if (item.audio) {
    return (
      <article className="group flex h-full flex-col overflow-hidden border border-forest/15 border-t-4 border-t-[#8DC63F] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-t-forest hover:shadow-xl">
        <div className="flex aspect-video items-center justify-center bg-forest">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8DC63F] text-forest shadow-xl">
            <Icon size={28} strokeWidth={1.75} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest/50">
              <Icon size={14} strokeWidth={1.75} />
              {item.type}
            </span>
            <span className="text-xs text-ink/50">{item.date}</span>
          </div>

          <p className="mt-4 text-sm font-bold text-forest-dark">{item.outlet}</p>

          <h3 className="mt-2 line-clamp-3 font-display text-lg font-bold leading-snug text-forest">
            {item.title}
          </h3>

          <audio
            src={item.audio}
            controls
            preload="metadata"
            className="mt-auto w-full pt-5"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </article>
    );
  }

  // ---------- YOUTUBE ENTRIES: playable inline, like the Videos section ----------
  if (videoId) {
    return (
      <article className="group flex h-full flex-col overflow-hidden border border-forest/15 border-t-4 border-t-[#8DC63F] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-t-forest hover:shadow-xl">
        <div className="relative aspect-video overflow-hidden bg-black">
          {playing ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
              title={item.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 h-full w-full"
              aria-label={`Play ${item.title}`}
            >
              <img
                src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                onError={(event) => {
                  event.currentTarget.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                }}
              />

              <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8DC63F] text-forest shadow-xl transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <PlayCircle size={26} strokeWidth={2} className="sm:h-7 sm:w-7" />
                </span>
              </div>
            </button>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-forest/50">
              <Icon size={14} strokeWidth={1.75} />
              {item.type}
            </span>
            <span className="text-xs text-ink/50">{item.date}</span>
          </div>

          <p className="mt-4 text-sm font-bold text-forest-dark">{item.outlet}</p>

          <h3 className="mt-2 line-clamp-3 font-display text-lg font-bold leading-snug text-forest">
            {item.title}
          </h3>
        </div>
      </article>
    );
  }

  // ---------- EVERYTHING ELSE: original link card ----------
  const body = (
    <>
      <div className="flex items-center justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-[#8DC63F] transition group-hover:bg-[#8DC63F] group-hover:text-forest">
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wide text-forest/50">
          {item.type}
        </span>
      </div>

      <p className="mt-6 text-sm font-bold text-forest-dark">{item.outlet}</p>

      <h3 className="mt-2 font-display text-lg font-bold leading-snug text-forest">
        {item.title}
      </h3>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6 text-xs">
        <span className="text-ink/50">{item.date}</span>
        {item.url && (
          <span className="inline-flex items-center gap-1 font-bold text-forest underline decoration-[#8DC63F] decoration-2 underline-offset-4">
            {action}
            <ArrowUpRight size={14} />
          </span>
        )}
      </div>
    </>
  );

  const cardClass =
    "group flex h-full flex-col border border-forest/15 border-t-4 border-t-[#8DC63F] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-t-forest hover:shadow-xl";

  return item.url ? (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClass}
    >
      {body}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <div className={cardClass}>{body}</div>
  );
}

function Gallery() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [mediaFilter, setMediaFilter] = useState("All");
  const photoTimerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // --- Photo carousel: auto-advance + manual controls that reset the timer ---
  const startPhotoTimer = () => {
    clearInterval(photoTimerRef.current);
    photoTimerRef.current = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, PHOTO_INTERVAL);
  };

  useEffect(() => {
    startPhotoTimer();
    return () => clearInterval(photoTimerRef.current);
  }, []);

  useEffect(() => {
    photos.forEach((photo) => {
      const img = new Image();
      img.src = photo.image;
    });
  }, []);

  const goToPhoto = (index) => {
    setCurrentPhoto(index);
    startPhotoTimer();
  };
  const prevPhoto = () => goToPhoto((currentPhoto - 1 + photos.length) % photos.length);
  const nextPhoto = () => goToPhoto((currentPhoto + 1) % photos.length);

  const activePhoto = photos[currentPhoto];

  const photoMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, scale: 1.05 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 },
        transition: { duration: 0.9, ease: "easeInOut" },
      };

  // --- Media coverage: only show tabs for types that have entries ---
  const mediaTabs = ["All", ...Object.keys(MEDIA_TYPES).filter((type) =>
    mediaCoverage.some((item) => item.type === type)
  )];
  const visibleMedia =
    mediaFilter === "All"
      ? mediaCoverage
      : mediaCoverage.filter((item) => item.type === mediaFilter);

  return (
    <main className="min-h-screen bg-paper font-sans text-ink">

      {/* HERO — same design as the "What we do" page */}
      <header className="relative isolate min-h-[420px] overflow-hidden bg-forest text-paper sm:min-h-[440px] lg:min-h-[480px]">
        <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-accent" />

        <img
          src={storiesHero}
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
              OUR GALLERY
            </p>
          </div>

          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Stories, Voices and Moments
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            Videos and visual stories from EACHRights' programmes, community
            engagement and work to advance human rights across East Africa.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#videos"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Explore videos
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
            <div>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                {String(photos.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm text-white/60">Photos</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                {String(videos.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm text-white/60">Videos</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                East Africa
              </p>
              <p className="mt-1 text-sm text-white/60">Regional reach</p>
            </div>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            Watch our work in action
          </h2>

          <p className="mt-5 leading-8 text-ink/70">
            Our gallery brings together stories, events, programme activities
            and conversations that reflect the experiences of the communities
            and people we work with.
          </p>
        </motion.div>
      </section>

      {/* QUICK NAV — jump-to-section row. */}
      <section className="border-y border-forest/10 bg-forest-light">
        <div className="mx-auto flex max-w-7xl gap-8 px-6 py-4 text-sm font-semibold text-forest-dark lg:px-8">
          <a href="#photos" className="transition hover:text-forest">
            Photos
          </a>
          <a href="#videos" className="transition hover:text-forest">
            Videos
          </a>
          <a href="#media" className="transition hover:text-forest">
            In the media
          </a>
        </div>
      </section>

      {/* PHOTOS */}
      <section id="photos" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-forest sm:text-4xl">
            Moments from the field
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start">
          {/* PHOTO CAROUSEL */}
          <div>
            <div className="group relative overflow-hidden bg-forest-dark shadow-xl">
              <div className="relative aspect-[16/9] overflow-hidden">
                <AnimatePresence initial={false} mode="sync">
                  <motion.img
                    key={currentPhoto}
                    src={activePhoto.image}
                    alt={activePhoto.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    {...photoMotion}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPhoto}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute bottom-0 left-0 right-0 p-5 sm:p-6"
                  >
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                      {activePhoto.title}
                    </h3>
                    <p className="mt-1 max-w-xl text-sm leading-6 text-white/75">
                      {activePhoto.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={prevPhoto}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition hover:bg-black/60 group-hover:opacity-100"
                >
                  <ArrowLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={nextPhoto}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/30 text-white opacity-0 backdrop-blur-md transition hover:bg-black/60 group-hover:opacity-100"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {photos.map((photo, index) => (
                <button
                  key={photo.title}
                  type="button"
                  onClick={() => goToPhoto(index)}
                  aria-label={`Go to photo ${index + 1}`}
                  className="group/dot flex items-center justify-center p-1"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      currentPhoto === index ? "w-7 bg-[#8DC63F]" : "w-1.5 bg-forest/25 group-hover/dot:bg-forest/50"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* FACEBOOK — sits beside the carousel on large screens */}
          <aside>
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-forest">
                From our Facebook page
              </h3>

              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-forest-dark underline underline-offset-4 transition hover:text-forest"
              >
                Follow us
              </a>
            </div>

            {facebookPosts.length > 0 ? (
              <div className="h-[480px] space-y-4 overflow-y-auto">
                {facebookPosts.map((post) => (
                  <iframe
                    key={post.url}
                    title="EACHRights Facebook post"
                    src={facebookPostSrc(post.url)}
                    width="100%"
                    height={post.height ?? 500}
                    className="w-full bg-white shadow-sm"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    loading="lazy"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                ))}
              </div>
            ) : (
              <iframe
                title="EACHRights on Facebook"
                src={facebookPageSrc}
                width="100%"
                height="480"
                className="w-full bg-white shadow-sm"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                loading="lazy"
                allow="encrypted-media"
              />
            )}
          </aside>
        </div>
      </section>

      {/* VIDEOS — 4 per row on large screens */}
      <section
        id="videos"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8"
      >
        <div className="mb-10">
          <h2 className="font-display text-3xl font-bold text-forest sm:text-4xl">
            From our work
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((video, index) => {
            const videoId = getYouTubeVideoId(video.url);
            const isActive = activeVideo === index;

            return (
              <motion.article
                key={`${video.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: (index % 4) * 0.05,
                }}
                whileHover={{ y: -5 }}
                className="group flex flex-col overflow-hidden bg-white shadow-sm transition hover:shadow-xl"
              >

                {/* VIDEO / SHARP THUMBNAIL */}
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

                      {/* DARK OVERLAY */}
                      <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/20" />

                      {/* PLAY BUTTON */}
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
                      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
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

                {/* VIDEO DETAILS */}
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="bg-[#8DC63F]/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest-dark">
                      Video
                    </span>

                    <span className="text-xs text-ink/50">
                      {video.date}
                    </span>
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
      </section>

      {/* IN THE MEDIA — newspaper, television & radio */}
      {mediaCoverage.length > 0 && (
        <section
          id="media"
          aria-labelledby="media-title"
          className="border-t border-forest/10 bg-forest-light"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="block h-1 w-14 bg-[#8DC63F]" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-forest/60">
                  In the media
                </p>
                <h2
                  id="media-title"
                  className="mt-2 font-display text-3xl font-bold text-forest sm:text-4xl"
                >
                  Newspaper, Television and Radio
                </h2>
                <p className="mt-4 leading-8 text-ink/70">
                  Coverage of EACHRights' work and the issues we champion in
                  print, on screen and on the airwaves.
                </p>
              </div>

              {/* Filter tabs */}
              <div
                role="tablist"
                aria-label="Filter media coverage"
                className="flex flex-wrap gap-2"
              >
                {mediaTabs.map((tab) => {
                  const isActive = mediaFilter === tab;
                  const Icon = MEDIA_TYPES[tab]?.icon;

                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setMediaFilter(tab)}
                      className={`inline-flex items-center gap-2 border px-4 py-2 text-sm font-bold transition ${
                        isActive
                          ? "border-forest bg-forest text-white"
                          : "border-forest/25 bg-white text-forest hover:border-forest"
                      }`}
                    >
                      {Icon && <Icon size={16} strokeWidth={1.75} />}
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={mediaFilter}
                initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: prefersReducedMotion ? 1 : 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {visibleMedia.map((item, index) => (
                  <MediaCard key={`${item.type}-${item.title}-${index}`} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden bg-forest-dark px-6 py-16 text-paper">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[25px] border-paper/10" />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Follow our work.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-paper/80">
              Follow EACHRights for updates, stories, events and conversations
              about human rights and social justice across East Africa.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <a
              href="https://www.youtube.com/@eachrights7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8DC63F] px-6 py-3.5 font-bold text-forest shadow-lg transition hover:brightness-105"
            >
              <PlayCircle size={18} />
              Visit YouTube Channel
            </a>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Gallery;
