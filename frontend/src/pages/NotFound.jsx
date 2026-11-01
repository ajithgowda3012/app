import { Link } from "react-router-dom";
import { Waves } from "lucide-react";
import Seo from "@/components/Seo";
import { WhatsAppButton } from "@/components/Buttons";

const NotFound = () => (
  <>
    <Seo
      title="Page Not Found | SurfKarnataka"
      description="The page you're looking for drifted out with the tide. Head back to SurfKarnataka's homepage or get in touch on WhatsApp."
    />
    <section className="noise relative flex min-h-[80svh] items-center overflow-hidden bg-[var(--accent)] pt-20 text-white">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <Waves className="h-10 w-10 text-brand" aria-hidden="true" />
        <h1 className="mt-8 max-w-2xl font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
          This Wave Slipped Past.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
          The page you're looking for isn't here — it may have moved or never existed.
          Let's get you back to the shore.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/"
            data-testid="notfound-home-btn"
            className="inline-flex items-center gap-2 rounded-full bg-app px-8 py-4 text-sm font-semibold text-strong transition-colors duration-300 hover:bg-[var(--secondary)]"
          >
            Back to Home
          </Link>
          <WhatsAppButton
            label="Chat on WhatsApp"
            source="notfound"
            tone="outlineLight"
            testId="notfound-whatsapp-btn"
          />
        </div>
      </div>
    </section>
  </>
);

export default NotFound;
