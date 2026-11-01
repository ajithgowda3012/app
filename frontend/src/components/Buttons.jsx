import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight } from "lucide-react";
import { waLink, bookingMessage, GENERAL_MESSAGE } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

export const WhatsAppButton = ({
  experience,
  label = "Book on WhatsApp",
  source = "unknown",
  tone = "solid",
  className = "",
  testId,
}) => {
  const message = experience ? bookingMessage(experience.name) : GENERAL_MESSAGE;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300";
  const tones = {
    solid: "bg-[var(--accent)] text-white hover:bg-[var(--accent-deep)]",
    outline: "border border-[var(--accent)] text-strong hover:bg-[var(--accent)] hover:text-white",
    light: "bg-app text-strong hover:bg-[var(--secondary)]",
    outlineLight: "border border-white/60 text-white hover:bg-app hover:text-strong",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId || `wa-btn-${source}`}
      onClick={() =>
        trackEvent("whatsapp_click", {
          source,
          experience: experience ? experience.name : "general",
        })
      }
      className={`${base} ${tones[tone]} ${className}`}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
};

export const LinkButton = ({
  to,
  label,
  tone = "outline",
  className = "",
  testId,
  arrow = true,
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300";
  const tones = {
    solid: "bg-[var(--accent)] text-white hover:bg-[var(--accent-deep)]",
    outline: "border border-[var(--accent)] text-strong hover:bg-[var(--accent)] hover:text-white",
    outlineLight: "border border-white/60 text-white hover:bg-app hover:text-strong",
  };
  return (
    <Link to={to} data-testid={testId} className={`${base} ${tones[tone]} ${className}`}>
      {label}
      {arrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
};
