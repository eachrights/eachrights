import { Link } from "react-router-dom";
import {
  Info,
  UsersThree,
  Users,
  FileText,
  SquaresFour,
  Globe,
  BookOpen,
  EnvelopeSimple,
  FacebookLogo,
  LinkedinLogo,
  InstagramLogo,
  XLogo,
} from "@phosphor-icons/react";

const ABOUT_LINKS = [
  { name: "Who we are", path: "/who-we-are/our-story", icon: Info },
  { name: "Leadership", path: "/who-we-are/team", icon: UsersThree },
  { name: "Our team", path: "/who-we-are/team", icon: Users },
  { name: "Strategic plan", path: "/resources", icon: FileText },
];

const WORK_LINKS = [
  { name: "Programmes", path: "/what-we-do", icon: SquaresFour },
  { name: "Universal Periodic Review", path: "/processes/universal-periodic-review", icon: Globe },
  { name: "Publications", path: "/resources", icon: BookOpen },
];

const CONNECT_LINKS = [
  { name: "Contact us", path: "/contact", icon: EnvelopeSimple },
  { name: "Facebook", path: "https://www.facebook.com/EACHRights", external: true, icon: FacebookLogo },
  { name: "LinkedIn", path: "https://www.linkedin.com/company/100748351/", external: true, icon: LinkedinLogo },
  { name: "Instagram", path: "https://www.instagram.com/eachrights/", external: true, icon: InstagramLogo },
  { name: "X(twitter)", path: "https://x.com/EACHRights", external: true, icon: XLogo },
];

/* Shared link styling: icon sits in the brand lime, text turns forest on hover. */
const LINK_CLASS =
  "group inline-flex items-center gap-2 text-xs text-ink transition-colors hover:text-forest";

function FooterLink({ link }) {
  const Icon = link.icon;
  const content = (
    <>
      <Icon
        size={15}
        weight="duotone"
        className="shrink-0 text-[#8DC63F] transition-colors group-hover:text-forest"
        aria-hidden="true"
      />
      {link.name}
    </>
  );

  return link.external ? (
    <a href={link.path} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
      {content}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <Link to={link.path} className={LINK_CLASS}>
      {content}
    </Link>
  );
}

function LinkColumn({ title, links }) {
  return (
    <div>
      <h5 className="mb-2 text-xs font-semibold text-gray-500">{title}</h5>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.name}>
            <FooterLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-paper py-7 font-sans text-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-4">

          {/* Organisation */}
          <div className="col-span-2 md:col-span-1">
            {/* Brand wordmark: forest green + lime accent */}
            <div className="mb-2 font-display text-lg font-bold">
              <span className="text-forest">EACH</span>
              <span className="text-[#8DC63F]">Rights</span>
            </div>

            <p className="mb-1 text-xs text-gray-500">
              The East African Centre for Human Rights
            </p>

            <p className="text-xs leading-4.5 text-gray-500">
              Apartment N5, Nine Planets Apartments
              <br />
              Kabarnet Road, Nairobi
              <br />
              P.O. Box 19494–00100
            </p>
          </div>

          <LinkColumn title="ABOUT" links={ABOUT_LINKS} />
          <LinkColumn title="Our work" links={WORK_LINKS} />
          <LinkColumn title="Connect" links={CONNECT_LINKS} />
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-forest/10 pt-4 text-[10px] text-gray-500">
          <span>
            © 2026 The East African Centre for Human Rights (
            <span className="font-bold">
              <span className="text-forest">EACH</span>
              <span className="text-[#8DC63F]">Rights</span>
            </span>
            ). All rights reserved.
          </span>

          <span className="flex gap-3">
            <a href="#" className="hover:text-forest">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-forest">
              Terms
            </a>
          </span>
        </div>

      </div>
    </footer>
  );
}
