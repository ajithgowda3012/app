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
    solid: "bg-ocean text-cream hover:bg-ocean-deep",
    outline: "border border-ocean text-ocean hover:bg-ocean hover:text-cream",
    light: "bg-cream text-ocean hover:bg-sand-light",
    outlineLight: "border border-cream/70 text-cream hover:bg-cream hover:text-ocean",
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
    solid: "bg-ocean text-cream hover:bg-ocean-deep",
    outline: "border border-ocean text-ocean hover:bg-ocean hover:text-cream",
    outlineLight: "border border-cream/70 text-cream hover:bg-cream hover:text-ocean",
  };
  return (
    <Link to={to} data-testid={testId} className={`${base} ${tones[tone]} ${className}`}>
      {label}
      {arrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
};
