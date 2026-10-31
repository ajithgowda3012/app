import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import WaveMark from "@/components/WaveMark";
import { NAV_LINKS, waLink, GENERAL_MESSAGE, BUSINESS } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-300 ${
      isActive ? "text-ocean" : "text-charcoal/60 hover:text-ocean"
    }`;

  return (
    <>
      <header
        data-testid="site-header"
        className="fixed inset-x-0 top-0 z-50 border-b border-sand/60 bg-cream/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
          <Link
            to="/"
            data-testid="header-logo"
            className="flex items-center gap-2.5"
            aria-label="SurfKarnataka home"
          >
            <WaveMark className="h-8 w-8" />
            <span className="font-display text-xl font-semibold tracking-tight text-ocean md:text-2xl">
              SurfKarnataka
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={linkClass}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waLink(GENERAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-book-session-btn"
              onClick={() => trackEvent("whatsapp_click", { source: "header" })}
              className="hidden items-center gap-2 rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ocean-deep sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Book Your Session
            </a>
            <button
              type="button"
              data-testid="mobile-menu-btn"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand text-ocean lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-ocean text-cream lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <div className="flex items-center gap-2.5">
                <WaveMark className="h-8 w-8" tone="light" />
                <span className="font-display text-xl font-semibold">SurfKarnataka</span>
              </div>
              <button
                type="button"
                data-testid="mobile-menu-close-btn"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/30"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 pt-10" aria-label="Mobile navigation">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`block border-b border-cream/10 py-4 font-display text-3xl font-medium transition-colors duration-300 ${
                      location.pathname === l.to ? "text-sand" : "text-cream"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="pt-8"
              >
                <a
                  href={waLink(GENERAL_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="mobile-book-session-btn"
                  onClick={() => {
                    trackEvent("whatsapp_click", { source: "mobile_menu" });
                    setOpen(false);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ocean"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book Your Session
                </a>
                <p className="pt-6 text-sm text-cream/60">{BUSINESS.phoneDisplay}</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
