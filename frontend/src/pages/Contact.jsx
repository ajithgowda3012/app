import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Instagram,
  MapPin,
  ExternalLink,
  Send,
} from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { BUSINESS, EXPERIENCES, waLink, bookingMessage } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const inputClass =
  "w-full rounded-xl border border-sand bg-white px-4 py-3.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/15";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    experience: "",
    date: "",
    participants: "",
    message: "",
  });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi SurfKarnataka! I'd like to enquire about a surfing session in Gokarna.`,
      ``,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.experience && `Interested in: ${form.experience}`,
      form.date && `Preferred date: ${form.date}`,
      form.participants && `Number of participants: ${form.participants}`,
      form.message && `Message: ${form.message}`,
      ``,
      `Please share the available sessions and pricing.`,
    ]
      .filter((l) => l !== false)
      .join("\n");
    trackEvent("contact_form_submit", { experience: form.experience || "general" });
    window.open(waLink(lines), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Seo
        title="Contact SurfKarnataka | Surf School in Gokarna"
        description="Get in touch with SurfKarnataka in Gokarna, Karnataka — call, WhatsApp, directions and a quick enquiry form to plan your surfing session."
      />

      <section className="noise relative overflow-hidden bg-ocean pb-20 pt-36 text-cream md:pb-28 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-sand">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
              Let's Get You Into The Water.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
              Questions about sessions, timings or the waves this week? Reach out — we
              reply personally, usually on WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:gap-20 md:px-10">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ocean md:text-4xl">
                {BUSINESS.legalName}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <address className="mt-6 text-base not-italic leading-relaxed text-charcoal/75">
                {BUSINESS.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <a
                  href={BUSINESS.phoneHref}
                  data-testid="contact-call-btn"
                  onClick={() => trackEvent("call_click", { source: "contact_page" })}
                  className="flex items-center gap-4 rounded-2xl border border-sand/70 bg-white p-5 transition-colors duration-300 hover:border-ocean"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean text-cream">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Call Now
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-charcoal">
                      {BUSINESS.phoneDisplay}
                    </span>
                  </span>
                </a>
                <a
                  href={waLink(bookingMessage("surfing"))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp-btn"
                  onClick={() => trackEvent("whatsapp_click", { source: "contact_page" })}
                  className="flex items-center gap-4 rounded-2xl border border-sand/70 bg-white p-5 transition-colors duration-300 hover:border-ocean"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Chat on WhatsApp
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-charcoal">
                      {BUSINESS.phoneDisplay}
                    </span>
                  </span>
                </a>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-instagram-btn"
                  className="flex items-center gap-4 rounded-2xl border border-sand/70 bg-white p-5 transition-colors duration-300 hover:border-ocean"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-turquoise text-cream">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Instagram
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-charcoal">
                      {BUSINESS.instagramHandle}
                    </span>
                  </span>
                </a>
                <a
                  href={BUSINESS.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-directions-btn"
                  className="flex items-center gap-4 rounded-2xl border border-sand/70 bg-white p-5 transition-colors duration-300 hover:border-ocean"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sand text-ocean">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Get Directions
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-charcoal">
                      Gokarna, Karnataka
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={BUSINESS.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-google-business-link"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean transition-colors duration-300 hover:text-turquoise"
              >
                Find us on Google Business <ExternalLink className="h-4 w-4" />
              </a>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-10 overflow-hidden rounded-2xl border border-sand/70">
                <iframe
                  title="Map showing SurfKarnataka in Gokarna, Karnataka"
                  src={BUSINESS.mapsEmbed}
                  loading="lazy"
                  data-testid="contact-map"
                  className="aspect-[16/10] w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <form
                data-testid="contact-form"
                onSubmit={handleSubmit}
                className="rounded-2xl border border-sand/70 bg-white p-7 md:p-10"
              >
                <h2 className="font-display text-3xl font-medium tracking-tight text-ocean">
                  Plan Your Session
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/60">
                  Fill this in and we will open WhatsApp with your enquiry ready to send.
                  Nothing is stored or submitted anywhere else.
                </p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="cf-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Your Name *
                    </label>
                    <input
                      id="cf-name"
                      data-testid="form-name-input"
                      type="text"
                      required
                      value={form.name}
                      onChange={set("name")}
                      placeholder="Full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Phone Number *
                    </label>
                    <input
                      id="cf-phone"
                      data-testid="form-phone-input"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 ..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-experience" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Interested Experience
                    </label>
                    <select
                      id="cf-experience"
                      data-testid="form-experience-select"
                      value={form.experience}
                      onChange={set("experience")}
                      className={inputClass}
                    >
                      <option value="">Not sure yet</option>
                      {EXPERIENCES.map((exp) => (
                        <option key={exp.id} value={exp.name}>
                          {exp.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cf-date" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Preferred Date
                    </label>
                    <input
                      id="cf-date"
                      data-testid="form-date-input"
                      type="date"
                      value={form.date}
                      onChange={set("date")}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="cf-participants" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Number of Participants
                    </label>
                    <input
                      id="cf-participants"
                      data-testid="form-participants-input"
                      type="number"
                      min="1"
                      value={form.participants}
                      onChange={set("participants")}
                      placeholder="e.g. 2"
                      className={inputClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="cf-message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/50">
                      Message
                    </label>
                    <textarea
                      id="cf-message"
                      data-testid="form-message-input"
                      rows="4"
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Anything we should know — experience level, questions, timings…"
                      className={inputClass}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  data-testid="form-submit-btn"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ocean px-8 py-4 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ocean-deep sm:w-auto"
                >
                  <Send className="h-4 w-4" /> Send Enquiry via WhatsApp
                </button>
                <p className="mt-4 text-xs leading-relaxed text-charcoal/50">
                  This opens WhatsApp with your message prefilled — it is an enquiry, not a
                  confirmed booking. We will confirm availability personally.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
