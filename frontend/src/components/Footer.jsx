import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import Logo from "@/components/Logo";
import { BUSINESS, NAV_LINKS, waLink, GENERAL_MESSAGE } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const Footer = () => (
  <footer data-testid="site-footer" className="bg-[var(--accent-deep)] text-white">
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex items-center justify-center rounded-full bg-white p-1 ring-1 ring-white/20">
            <Logo className="h-14 w-14 rounded-full object-cover" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
            {BUSINESS.description}
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              aria-label="SurfKarnataka on Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 hover:bg-app hover:text-strong"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href={waLink(GENERAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-link"
              aria-label="Chat with SurfKarnataka on WhatsApp"
              onClick={() => trackEvent("whatsapp_click", { source: "footer" })}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 hover:bg-app hover:text-strong"
            >
              <MessageCircle className="h-4.5 w-4.5" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              data-testid="footer-phone-link"
              aria-label={`Call SurfKarnataka on ${BUSINESS.phoneDisplay}`}
              onClick={() => trackEvent("call_click", { source: "footer" })}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 hover:bg-app hover:text-strong"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
            <a
              href={BUSINESS.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-directions-link"
              aria-label="Get directions to SurfKarnataka"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors duration-300 hover:bg-app hover:text-strong"
            >
              <MapPin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--secondary)]">
            Explore
          </h3>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  data-testid={`footer-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-white/75 transition-colors duration-300 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--secondary)]">
            Find Us
          </h3>
          <address className="mt-6 text-sm not-italic leading-relaxed text-white/75">
            {BUSINESS.legalName}
            <br />
            {BUSINESS.addressLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
          <a
            href={BUSINESS.phoneHref}
            data-testid="footer-phone-text"
            className="mt-4 block text-sm text-white/75 transition-colors duration-300 hover:text-white"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-google-business-link"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--secondary)] transition-colors duration-300 hover:text-white"
          >
            Find us on Google <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
        <p data-testid="footer-copyright">
          © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
        </p>
        <p>Gokarna · Karnataka · India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
