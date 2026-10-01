import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import logo from "../assets/logo.jpeg";

/* =========================================================
   MAIN NAVIGATION

   Every link below is a plain <a>, not a React Router
   <Link>/<NavLink>. That's deliberate: clicking any nav item
   — including the one for the page you're already on —
   triggers a full page reload and lands at the top of the
   page, rather than a client-side route swap that leaves
   your scroll position untouched. Active-state styling is
   done by hand (isActivePath) since <a> has no built-in
   concept of the current route.
========================================================= */

const whoWeAreLinks = [
  { name: "Our Story", path: "/who-we-are/our-story" },
  { name: "Meet Our Team", path: "/who-we-are/team" },
];

const navLinks = [
  { name: "Resources", path: "/resources" },
  { name: "Gallery", path: "/gallery" },
  { name: "Opportunities", path: "/opportunities" },
  { name: "Donors", path: "/donors" },
  { name: "Contact", path: "/contact" },
];

// Kept for any page (e.g. the "/what-we-do" overview) that still wants to
// list programmes, processes, or the external SRHR portal — no longer
// rendered as a navbar dropdown.
const programmeLinks = [
  { name: "Education Justice Programme", path: "/programmes/education-justice" },
  { name: "Gender Justice Programme", path: "/programmes/gender-justice" },
  { name: "Health Justice Programme", path: "/programmes/health-justice" },
  { name: "Environmental & Climate Justice Programme", path: "/programmes/environmental-climate-justice" },
  { name: "Economic Justice, Business and Human Rights Programme", path: "/programmes/economic-justice" },
  { name: "Theory of Change", path: "/programmes/theory-of-change" },
];

const processLinks = [
  { name: "Universal Periodic Review", path: "/processes/universal-periodic-review" },
];

// External destination — opens in a new tab rather than being routed
// through React Router, since it lives on a separate site entirely.
// Surfaced in a slim utility bar above the main nav, modelled on how
// mizizielimu.org surfaces its "Microdata Portal" link above their nav.
const srhrAdvocacyLink = {
  name: "SRHR Project Advocacy Portal",
  description: "Visit our dedicated SRHR advocacy portal",
  url: "https://eachrights.github.io/srhr/",
};

function navLinkClasses(active) {
  return `relative text-sm font-semibold transition ${
    active ? "text-forest" : "text-ink/70 hover:text-forest"
  } after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-[#8DC63F] after:transition-all ${
    active ? "after:w-full" : "after:w-0"
  }`;
}

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);
  const { pathname } = useLocation();

  const isActivePath = (path) => pathname === path;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileWhoWeAreOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* ======================================================
          UTILITY BAR — sits above the main nav, mirrors the
          slim bar mizizielimu.org uses for its Microdata Portal
          link. EACHRights only has one such destination for now.
      ====================================================== */}
      <div className="bg-forest-dark">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-1.5 lg:px-8">
          <a
            href={srhrAdvocacyLink.url}
            target="_blank"
            rel="noopener noreferrer"
            title={srhrAdvocacyLink.description}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 transition hover:text-white"
          >
            {srhrAdvocacyLink.name}
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* ======================================================
          MAIN NAV
      ====================================================== */}
      <div className="border-b border-forest/10 bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
          {/* LOGO — doubles as the Home link */}
          <a
            href="/"
            aria-label="Home"
            className={`shrink-0 transition ${
              isActivePath("/") ? "opacity-100" : "opacity-90 hover:opacity-100"
            }`}
          >
            <img src={logo} alt="EACHRights" className="h-13 w-auto object-contain" />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 md:flex">
            {/* WHO WE ARE — hover flyout, not itself a link */}
            <div className="group/who relative">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-ink/70 transition group-hover/who:text-forest"
                aria-haspopup="true"
              >
                Who We Are
                <ChevronDown size={16} className="transition group-hover/who:rotate-180" />
              </button>

              <div className="invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition duration-150 group-hover/who:visible group-hover/who:opacity-100">
                <div className="border border-forest/10 bg-white p-2 shadow-xl">
                  {whoWeAreLinks.map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      className="flex items-center justify-between gap-3 px-3 py-2.5 text-sm text-ink/75 transition hover:bg-forest-light/60 hover:text-forest"
                    >
                      <span>{link.name}</span>
                      <ChevronRight size={14} className="shrink-0 text-forest-dark/40" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* HOW WE WORK — direct navigation link */}
            <a href="/how-we-work" className={navLinkClasses(isActivePath("/how-we-work"))}>
              How We Work
            </a>

            {/* WHAT WE DO — direct navigation link, no dropdown */}
            <a href="/what-we-do" className={navLinkClasses(isActivePath("/what-we-do"))}>
              What We Do
            </a>

            {navLinks.map((link) => (
              <a key={link.path} href={link.path} className={navLinkClasses(isActivePath(link.path))}>
                {link.name}
              </a>
            ))}

            <a
              href="/contact"
              className="bg-[#8DC63F] px-5 py-2.5 text-sm font-bold text-forest transition hover:brightness-105"
            >
              Get Involved
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="text-forest md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {mobileMenuOpen && (
          <div className="border-t border-forest/10 bg-paper px-6 py-4 md:hidden">
            <div className="flex flex-col divide-y divide-forest/10">
              {/* WHO WE ARE ACCORDION */}
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-sm font-semibold text-ink/70"
                  onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
                  aria-expanded={mobileWhoWeAreOpen}
                >
                  Who We Are
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobileWhoWeAreOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {mobileWhoWeAreOpen && (
                  <div className="flex flex-col pb-2 pl-3">
                    {whoWeAreLinks.map((link) => (
                      <a
                        key={link.path}
                        href={link.path}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-between py-2 text-sm text-ink/65"
                      >
                        <span>{link.name}</span>
                        <ChevronRight size={14} className="shrink-0 text-forest-dark/40" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* HOW WE WORK */}
              <a
                href="/how-we-work"
                onClick={closeMobileMenu}
                className={`py-3 text-sm font-semibold ${
                  isActivePath("/how-we-work") ? "text-forest" : "text-ink/70"
                }`}
              >
                How We Work
              </a>

              {/* WHAT WE DO */}
              <a
                href="/what-we-do"
                onClick={closeMobileMenu}
                className={`py-3 text-sm font-semibold ${
                  isActivePath("/what-we-do") ? "text-forest" : "text-ink/70"
                }`}
              >
                What We Do
              </a>

              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={closeMobileMenu}
                  className={`py-3 text-sm font-semibold ${
                    isActivePath(link.path) ? "text-forest" : "text-ink/70"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* SRHR PORTAL — external, matches the utility-bar link above */}
              <a
                href={srhrAdvocacyLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="flex items-center justify-between py-3 text-sm font-semibold text-ink/70"
              >
                {srhrAdvocacyLink.name}
                <ExternalLink size={14} className="shrink-0 text-forest-dark/40" />
              </a>
            </div>

            <a
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-4 block bg-[#8DC63F] px-5 py-3 text-center text-sm font-bold text-forest transition hover:brightness-105"
            >
              Get Involved
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
