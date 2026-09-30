import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Handshake, ShieldCheck } from "lucide-react";

const heroImage = "/donors/donors-hero.png";

const currentDonors = [
  {
    name: "Oxfam IBIS",
    logo: "/donors/OXFAM.jpg",
    description:
      "A current development partner supporting efforts that advance social justice, equality and human rights.",
  },
  {
    name: "CORD",
    logo: "/donors/cord.png",
    description:
      "A current development partner supporting efforts that advance social justice, equality and human rights.",
  },
  {
    name: "ERIKS Development Partner",
    logo: "/donors/ERIKS_DP Logotype_RGB.png",
    description:
      "A current development partner contributing to initiatives that strengthen rights, inclusion and sustainable development.",
  },
  {
    name: "AmplifyChange",
    logo: "/donors/AmplifyChange.jpg",
    description:
      "A current partner supporting initiatives that promote human rights, equality and meaningful community participation.",
  },
];

const pastDonors = [
  {
    name: "Amkeni Wakenya",
    logo: "/donors/amkeni_wakenya_donor.png",
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
  {
    name: "Global Initiative for Economic, Social and Cultural Rights",
    logo: "/donors/global initiative.png",
    description:
      "A former partner whose work aligns with the advancement and realization of economic, social and cultural rights.",
  },
  {
    name: "Wellspring Philanthropic Fund",
    logo: "/donors/Wellspring.png",
    description:
      "A former philanthropic partner that supported initiatives advancing equity, justice and community empowerment.",
  },
  {
    name: "UN Millennium Campaign",
    logo: null,
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
  {
    name: "Save the Children",
    logo: "/donors/savethechildren.jpg",
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
  {
    name: "Plan International",
    logo: "/donors/planinternational.jpg",
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
  {
    name: "Terre des Hommes",
    logo: "/donors/terrdeshommes.png",
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
  {
    name: "Open Society Initiative for Eastern Africa",
    logo: "/donors/opensocietyfoundation.png",
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
  {
    name: "Our Sign of Hope",
    logo: null,
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
  {
    name: "JAIKA Foundation",
    logo: null,
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
  {
    name: "ACCU",
    logo: null,
    description:
      "A former development partner that supported initiatives contributing to stronger communities and human rights.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

function DonorCard({ donor, current = false }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {/* accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-forest via-[#8DC63F] to-gold" />

      {/* LOGO */}
      <div className="px-7 pt-7">
        <div className="flex h-[170px] w-full items-center justify-center rounded-xl bg-gray-50 px-6 py-6 transition-colors duration-300 group-hover:bg-forest-soft">
          {donor.logo ? (
            <img
              src={donor.logo}
              alt={`${donor.name} logo`}
              loading="lazy"
              className="block h-auto max-h-[130px] w-auto max-w-full object-contain"
            />
          ) : (
            <div
              className="flex h-full w-full flex-col items-center justify-center gap-3 px-3 text-center"
              aria-label={`${donor.name} logo unavailable`}
            >
              <Handshake size={28} strokeWidth={1.5} className="text-forest/30" />
              <span className="text-lg font-bold leading-snug text-gray-400">
                {donor.name}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold leading-snug text-forest">
          {donor.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
          {donor.description}
        </p>

        <div className="mt-6 border-t border-gray-100 pt-4">
          <span
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
              current
                ? "bg-[#8DC63F]/15 text-forest"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                current ? "bg-[#8DC63F]" : "bg-gray-400"
              }`}
            />
            {current ? "Current partner" : "Former partner"}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function DonorGrid({ donors, current = false }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {donors.map((donor, index) => (
        <motion.div
          key={donor.name}
          {...fadeUp}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: Math.min((index % 3) * 0.08, 0.3) }}
        >
          <DonorCard donor={donor} current={current} />
        </motion.div>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-7 text-gray-600">{text}</p>
    </motion.div>
  );
}

function Donors() {
  return (
    <main className="min-h-screen bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-neutral-900 text-white">
        <img
          src={heroImage}
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
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                <Handshake size={28} strokeWidth={1.7} />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">
                Partnerships &amp; Support
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Our Donors
              <span className="block text-gold">&amp; Partners</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Our work is made possible through the commitment and support of
              development partners, philanthropic organizations and
              institutions that share our vision for a just and equitable
              society.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#current"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
              >
                Meet our partners
                <ArrowRight size={18} />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Partner with us
              </Link>
            </div>
          </motion.div>

          {/* Key figures */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-14 grid max-w-md grid-cols-2 gap-4 border-t border-white/15 pt-8"
          >
            <div>
              <dt className="font-display text-3xl font-bold text-gold sm:text-4xl">
                {currentDonors.length}
              </dt>
              <dd className="mt-1 text-xs leading-5 text-white/70 sm:text-sm">
                Current partners
              </dd>
            </div>
            <div>
              <dt className="font-display text-3xl font-bold text-gold sm:text-4xl">
                {pastDonors.length}
              </dt>
              <dd className="mt-1 text-xs leading-5 text-white/70 sm:text-sm">
                Past partners
              </dd>
            </div>
          </motion.dl>
        </div>

        <div
          className="absolute bottom-0 left-0 h-8 w-full bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          aria-hidden="true"
        />
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-forest p-8 text-center text-white shadow-xl sm:p-12"
          >
            <Handshake
              size={140}
              strokeWidth={1.1}
              className="pointer-events-none absolute -right-6 -top-6 text-white/10"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="mx-auto h-1 w-12 rounded-full bg-gold" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Working together
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Partnerships that advance justice
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                EACHRights values strategic partnerships that strengthen our
                ability to promote and protect human rights, amplify community
                voices and create meaningful change. We are grateful to the
                organizations that have supported our work and contributed to
                advancing social and economic justice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CURRENT DONORS
      ===================================================== */}
      <section id="current" className="scroll-mt-20 bg-forest-soft/40 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Current partners"
            title="Current Donors"
            text="We acknowledge the current partners whose support contributes to the implementation and sustainability of our programmes."
          />
          <div className="mt-14">
            <DonorGrid donors={currentDonors} current />
          </div>
        </div>
      </section>

      {/* =====================================================
          PAST DONORS
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Previous partnerships"
            title="Past Donors"
            text="We remain grateful to organizations that have previously partnered with EACHRights and contributed to our work and institutional development."
          />
          <div className="mt-14">
            <DonorGrid donors={pastDonors} />
          </div>
        </div>
      </section>

      {/* =====================================================
          TRANSPARENCY
      ===================================================== */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-4xl flex-col items-start gap-5 rounded-2xl border border-forest/10 bg-forest-soft p-7 sm:flex-row sm:items-center sm:p-9"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
            <ShieldCheck size={26} strokeWidth={1.7} />
          </div>
          <p className="text-sm leading-7 text-gray-700 sm:text-base">
            EACHRights is committed to responsible partnerships, transparency
            and accountability in the implementation of programmes supported
            through donor and development partner funding.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12 lg:py-20">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
            <Handshake size={26} strokeWidth={1.7} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Strategic partnerships
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Partner with EACHRights
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/70">
            We welcome partnerships with organizations and institutions that
            share our commitment to human dignity, equality, inclusion and
            social justice across East Africa.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold px-6 py-3 font-semibold text-forest transition hover:brightness-105"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

export default Donors;
