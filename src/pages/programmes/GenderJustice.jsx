import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Scale,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Users,
  Landmark,
  FileCheck,
  Gavel,
  BriefcaseBusiness,
  BookOpen,
  Search,
} from "lucide-react";

// Same image the Gender programme uses on the Home page.
import genderImage from "../../assets/impact/impact-2.png";

/* =========================================================
   The eight focus areas grouped into the four pillars they
   actually represent, rather than one uniform 4-up grid.
========================================================= */

const pillars = [
  {
    title: "Equality, Norms & Protection",
    items: [
      {
        icon: Scale,
        title: "Gender Equality & Social Norms",
        text: "Address intersecting issues of gender norms, discrimination, gender inequality, and harmful practices that limit the rights and opportunities of women and girls.",
      },
      {
        icon: ShieldCheck,
        title: "Gender-Based Violence",
        text: "Promote prevention, protection, access to justice, and accountability in addressing gender-based violence and supporting survivors.",
      },
    ],
  },
  {
    title: "Participation & Policy",
    items: [
      {
        icon: Users,
        title: "Women in Governance",
        text: "Strengthen the meaningful participation and representation of women in leadership, governance, and decision-making processes.",
      },
      {
        icon: FileCheck,
        title: "Gender-Responsive Policies",
        text: "Monitor and advocate for the effective implementation of gender-responsive policies, laws, programmes, and budgets.",
      },
    ],
  },
  {
    title: "Justice & Economic Empowerment",
    items: [
      {
        icon: Gavel,
        title: "Access to Justice",
        text: "Support efforts to remove barriers to justice and strengthen access to legal information, remedies, protection, and accountability.",
      },
      {
        icon: BriefcaseBusiness,
        title: "Economic Empowerment",
        text: "Advocate for equal access to economic opportunities, employment, education, skills, resources, and social protection.",
      },
    ],
  },
  {
    title: "Knowledge & Capacity",
    items: [
      {
        icon: BookOpen,
        title: "Capacity Building",
        text: "Build the capacity of communities, institutions, duty bearers, and other stakeholders to promote and protect gender equality.",
      },
      {
        icon: Search,
        title: "Research & Advocacy",
        text: "Generate evidence on gender justice issues and use research, advocacy, partnerships, and public engagement to influence positive change.",
      },
    ],
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

export default function GenderJustice() {
  return (
    <main className="bg-white font-sans text-ink">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative isolate overflow-hidden bg-forest text-white">
        {/* Background photo (same image as the Home page programme card) */}
        <img
          src={genderImage}
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
              <Scale size={24} strokeWidth={1.7} />
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
              Gender Justice Programme
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
              Promoting gender equality, meaningful participation, access to
              justice, and equal opportunities for women and men.
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
          INTRODUCTION
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start">

            <div>
              <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
                Advancing equality, dignity and participation
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Despite Kenya's ratification of international, regional, and
                national frameworks promoting gender equality, achieving
                substantive gender equality remains a challenge. Women and
                girls facing social, economic, cultural, and other forms of
                adversity are particularly affected by discrimination,
                unequal access to opportunities, violence, and limited
                participation in decision-making.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                The Gender Justice Programme seeks to contribute to a
                society where women and men enjoy equal rights and
                opportunities across all sectors. The programme applies a
                human rights-based approach to address structural and
                systemic barriers to gender equality while promoting
                meaningful participation, empowerment, accountability, and
                access to justice.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-forest p-8 text-white sm:p-10"
            >
              <div className="flex items-center gap-2.5 text-white/70">
                <Scale size={18} />
                <span className="text-sm font-medium">Programme goal</span>
              </div>

              <p className="mt-5 text-xl font-semibold leading-8">
                A society where both women and men enjoy equal rights and
                opportunities across all sectors, including meaningful
                participation in governance and decision-making.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOCUS AREAS — four pillars instead of one flat grid
      ===================================================== */}
      <section className="bg-forest-soft px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <h2 className="max-w-xl text-3xl font-bold text-ink sm:text-4xl">
            Where we focus our efforts
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-gray-600">
            The programme works across four interconnected pillars that
            influence gender equality, participation, protection, and
            access to justice.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl bg-white p-7 sm:p-8"
              >
                <h3 className="text-lg font-bold leading-snug text-forest">
                  {pillar.title}
                </h3>

                <div className="mt-5 space-y-5">
                  {pillar.items.map(({ icon: Icon, title, text }) => (
                    <div
                      key={title}
                      className="flex gap-4 border-t border-gray-100 pt-5 first:border-t-0 first:pt-0"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="font-semibold text-ink">{title}</p>
                        <p className="mt-1.5 text-sm leading-6 text-gray-600">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EXPECTED CHANGE
      ===================================================== */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            <div>
              <h2 className="text-3xl font-bold text-ink sm:text-4xl">
                Creating lasting change
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                Through research, advocacy, capacity building, partnerships,
                and community engagement, the programme seeks to strengthen
                systems that advance gender equality and protect the rights
                of women and girls.
              </p>
            </div>

            <motion.ol
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
            >
              {outcomes.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-4 border-t border-gray-100 py-4 first:border-t-0"
                >
                  <span className="text-sm text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-7 text-gray-600">{item}</span>
                </li>
              ))}
            </motion.ol>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-forest px-6 py-16 text-center text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
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
        </div>
      </section>

    </main>
  );
}
