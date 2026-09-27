import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, LayoutGrid } from "lucide-react";

// ============================================================
// PORTAL LINKS
// ============================================================
// Add the real destination URLs here once they're ready.

const portals = [
  {
    title: "SRHR Portal",
    description: "EACHRights' Sexual and Reproductive Health and Rights portal.",
    href: "https://eachrights.github.io/srhr/", // TODO: add SRHR Portal link
  },
  {
    title: "UPR Recommendations Tracking Dashboard",
    description:
      "Tracks Universal Periodic Review recommendations made to Kenya and their implementation status.",
    href: "#", // TODO: add UPR Dashboard link
  },
];

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Portals() {
  return (
    <main className="bg-white font-sans text-ink">
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-sm font-medium text-forest/70 transition hover:text-forest"
          >
            <ArrowLeft size={16} />
            Resources
          </Link>

          <span className="mt-6 block h-1 w-14 bg-forest" />

          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Portals
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-ink/60 sm:text-base">
            EACHRights' dashboards and portals.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {portals.map(({ title, description, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-forest-soft text-forest">
                    <LayoutGrid size={22} strokeWidth={1.7} />
                  </div>

                  <h2 className="mt-5 font-display text-xl font-bold text-ink">{title}</h2>

                  <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  Explore
                  <ArrowUpRight
                    size={15}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
