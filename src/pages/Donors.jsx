import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroImage = "/donors/donors-hero.png";

const currentDonors = [
  {
    name: "Oxfam IBIS",
    logo: "/donors/OXFAM.jpg",
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

function DonorCard({ donor }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {/* LOGO */}
      <div className="flex min-h-[230px] items-center justify-center border-b border-gray-100 bg-white px-8 py-10">
        <div className="flex h-[175px] w-full items-center justify-center rounded-2xl bg-gray-50 px-8 py-7 transition-colors duration-300 group-hover:bg-gray-100">
          {donor.logo ? (
            <img
              src={donor.logo}
              alt={`${donor.name} logo`}
              loading="lazy"
              className="block h-auto max-h-[135px] w-auto max-w-[290px] object-contain"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center px-5 text-center"
              aria-label={`${donor.name} logo unavailable`}
            >
              <span className="text-xl font-bold leading-snug text-gray-400">
                {donor.name}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-bold leading-snug text-ink">
          {donor.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
          {donor.description}
        </p>

        <div className="mt-6 border-t border-gray-100 pt-4">
          <span className="text-sm font-semibold text-forest">
            Development Partner
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function DonorGrid({ donors }) {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {donors.map((donor, index) => (
        <motion.div
          key={donor.name}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.5,
            delay: Math.min(index * 0.08, 0.4),
          }}
        >
          <DonorCard donor={donor} />
        </motion.div>
      ))}
    </div>
  );
}

function Donors() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-900 py-20 text-white lg:py-28">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />

        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[50px] border-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Link
              to="/"
              className="mb-8 inline-flex items-center text-sm font-medium text-white/80 transition hover:text-white"
            >
              ← Back to Home
            </Link>

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Partnerships & Support
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Our Donors & Partners
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              Our work is made possible through the commitment and support of
              development partners, philanthropic organizations and institutions
              that share our vision for a just and equitable society.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-forest">
              Working Together
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Partnerships That Advance Justice
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              EACHRights values strategic partnerships that strengthen our
              ability to promote and protect human rights, amplify community
              voices and create meaningful change. We are grateful to the
              organizations that have supported our work and contributed to
              advancing social and economic justice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CURRENT DONORS */}
      <section className="bg-forest-soft py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-forest" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-forest">
                Current Partners
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Current Donors
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We acknowledge the current partners whose support contributes to
              the implementation and sustainability of our programmes.
            </p>
          </div>

          <DonorGrid donors={currentDonors} />
        </div>
      </section>

      {/* PAST DONORS */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-forest" />

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-forest">
                Previous Partnerships
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Past Donors
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We remain grateful to organizations that have previously
              partnered with EACHRights and contributed to our work and
              institutional development.
            </p>
          </div>

          <DonorGrid donors={pastDonors} />
        </div>
      </section>

      {/* PARTNERSHIP MESSAGE */}
      <section className="border-t border-gray-100 bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-forest p-8 text-white shadow-xl sm:p-12 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white/70">
                  Strategic Partnerships
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                  Partner With EACHRights
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">
                  We welcome partnerships with organizations and institutions
                  that share our commitment to human dignity, equality,
                  inclusion and social justice across East Africa.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-forest transition hover:bg-gray-100"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm leading-7 text-gray-500">
            EACHRights is committed to responsible partnerships, transparency
            and accountability in the implementation of programmes supported
            through donor and development partner funding.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Donors;