import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, MessageCircle, ExternalLink } from "lucide-react";
import Logo from "@/components/Logo";
import { BUSINESS, NAV_LINKS, waLink, GENERAL_MESSAGE } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const Footer = () => (
  <footer data-testid="site-footer" className="bg-ocean text-cream">
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="inline-flex rounded-2xl bg-cream px-4 py-2">
            <Logo className="h-14 w-auto" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            {BUSINESS.description}
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              aria-label="SurfKarnataka on Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors duration-300 hover:bg-cream hover:text-ocean"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors duration-300 hover:bg-cream hover:text-ocean"
            >
              <MessageCircle className="h-4.5 w-4.5" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              data-testid="footer-phone-link"
              aria-label={`Call SurfKarnataka on ${BUSINESS.phoneDisplay}`}
              onClick={() => trackEvent("call_click", { source: "footer" })}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors duration-300 hover:bg-cream hover:text-ocean"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
            <a
              href={BUSINESS.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-directions-link"
              aria-label="Get directions to SurfKarnataka"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 transition-colors duration-300 hover:bg-cream hover:text-ocean"
            >
              <MapPin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sand">
            Explore
          </h3>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  data-testid={`footer-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-sand">
            Find Us
          </h3>
          <address className="mt-6 text-sm not-italic leading-relaxed text-cream/70">
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
            className="mt-4 block text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-google-business-link"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-sand transition-colors duration-300 hover:text-cream"
          >
            Find us on Google <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-8 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
        <p data-testid="footer-copyright">
          © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
        </p>
        <p>Gokarna · Karnataka · India</p>
      </div>
    </div>
  </footer>
);

export default Footer;
