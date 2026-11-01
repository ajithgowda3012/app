import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { NAV_LINKS, waLink, GENERAL_MESSAGE } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const Header = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(
    () => scrollY.on("change", (y) => setScrolled(y > 40)),
    [scrollY],
  );

  return (
    <motion.header
      data-testid="site-header"
      initial={{ y: "-130%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 md:top-6"
    >
      <div
        className={`flex w-fit items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-1.5 backdrop-blur-2xl transition-all duration-500 md:gap-3 md:py-2 md:pl-2 md:pr-2 ${
          scrolled
            ? "border-sand/70 bg-cream/85 shadow-[0_10px_44px_-12px_rgba(4,47,75,0.4)]"
            : "border-cream/20 bg-ocean-deep/40 shadow-[0_10px_44px_-12px_rgba(0,0,0,0.55)]"
        }`}
      >
        <Link
          to="/"
          data-testid="header-logo"
          aria-label="SurfKarnataka home"
          className="flex shrink-0 items-center rounded-full bg-cream px-3 py-1.5"
        >
          <Logo className="h-9 w-auto md:h-10" />
        </Link>

        <nav
          className="flex items-center gap-1 md:gap-2"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((l) => {
            const active =
              l.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(l.to);
            return (
              <Link
                key={l.to}
                to={l.to}
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`relative rounded-full px-3 py-2 text-xs font-semibold tracking-wide transition-colors duration-300 md:px-4 md:text-sm ${
                  active
                    ? scrolled
                      ? "text-ocean"
                      : "text-cream"
                    : scrolled
                      ? "text-charcoal/60 hover:text-ocean"
                      : "text-cream/70 hover:text-cream"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className={`absolute inset-0 rounded-full ${
                      scrolled ? "bg-sand/70" : "bg-cream/20"
                    }`}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <a
          href={waLink(GENERAL_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="header-book-session-btn"
          onClick={() => trackEvent("whatsapp_click", { source: "header" })}
          className="hidden shrink-0 items-center gap-2 rounded-full bg-ocean px-5 py-2.5 text-xs font-semibold text-cream transition-colors duration-300 hover:bg-ocean-deep sm:inline-flex md:text-sm"
        >
          <MessageCircle className="h-4 w-4" />
          Book
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
