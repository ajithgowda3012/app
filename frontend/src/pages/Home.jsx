import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Waves,
  MapPin,
  MessageCircle,
  Instagram,
  ExternalLink,
  Quote,
} from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import ExperienceCard from "@/components/ExperienceCard";
import { WhatsAppButton } from "@/components/Buttons";
import {
  BUSINESS,
  EXPERIENCES,
  HIGHLIGHTS,
  GALLERY,
  REVIEWS,
  MARQUEE_ITEMS,
  IMAGES,
  img,
  waLink,
  GENERAL_MESSAGE,
} from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const lineReveal = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.25 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section ref={ref} className="noise relative flex min-h-[100svh] items-end overflow-hidden bg-ocean">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src={img(IMAGES.hero, 2200)}
          alt="Surfer riding a wave at golden hour on the Gokarna coast"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/40 to-transparent"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 md:px-10 md:pb-28">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-sand md:text-sm"
        >
          Surf School · Gokarna, Karnataka
        </motion.p>
        <h1 className="font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl">
          {["Find Your Wave.", "Discover Your", "Freedom."].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                custom={i}
                variants={lineReveal}
                initial="hidden"
                animate="visible"
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg"
        >
          Experience the joy of surfing with SurfKarnataka in Gokarna, Karnataka.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <WhatsAppButton
            label="Book Your Session"
            source="hero"
            tone="light"
            testId="hero-book-session-btn"
            className="px-8 py-4 text-base"
          />
          <Link
            to="/surf-lessons"
            data-testid="hero-explore-lessons-btn"
            className="inline-flex items-center gap-2 rounded-full border border-cream/60 px-8 py-4 text-base font-semibold text-cream transition-colors duration-300 hover:bg-cream hover:text-ocean"
          >
            Explore Surf Lessons <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const EditorialMarquee = () => (
  <div className="border-y border-ocean/10 bg-sand py-5" data-testid="editorial-marquee">
    <Marquee speed={35} gradient={false} pauseOnHover>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="mx-10 flex items-center gap-10">
          <span className="font-display text-2xl italic text-ocean md:text-3xl">{item}</span>
          <Waves className="h-5 w-5 text-turquoise" aria-hidden="true" />
        </span>
      ))}
    </Marquee>
  </div>
);

const Intro = () => (
  <section className="relative overflow-hidden py-24 md:py-36">
    <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-12 md:px-10">
      <div className="md:col-span-7">
        <Reveal>
          <p className="eyebrow">Welcome to SurfKarnataka</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-ocean md:text-6xl">
            Your Surfing Journey Starts Here.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-charcoal/75 md:text-lg">
            SurfKarnataka is a surf school on the shores of Gokarna — a quiet coastal town
            where the Arabian Sea rolls in slow and steady. Whether you have never stood on
            a board or you are chasing cleaner rides, we teach you to read the ocean, move
            with it and build the confidence to catch your own waves.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-charcoal/75 md:text-lg">
            Every session is guided by an instructor in the water with you. You learn at your
            pace, on real Gokarna waves, and leave with more than a lesson — an active,
            honest coastal experience you will remember.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10">
            <Link
              to="/about"
              data-testid="intro-about-link"
              className="inline-flex items-center gap-2 border-b border-ocean pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-ocean transition-colors duration-300 hover:text-turquoise hover:border-turquoise"
            >
              Our Story <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="md:col-span-5">
        <Reveal delay={0.2} className="relative h-full">
          <div className="overflow-hidden rounded-2xl border border-sand/70 md:mt-16">
            <img
              src={img(IMAGES.introSide, 1200)}
              alt="Surf instructor teaching a beginner lesson on a Gokarna beach"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Experiences = () => (
  <section className="bg-sand-light/50 py-24 md:py-36">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow">Surfing Experiences</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-ocean md:text-6xl">
              Choose How You Want to Surf.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Link
            to="/surf-lessons"
            data-testid="experiences-view-all-link"
            className="inline-flex items-center gap-2 border-b border-ocean pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-ocean transition-colors duration-300 hover:text-turquoise hover:border-turquoise"
          >
            All Surf Lessons <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {EXPERIENCES.map((exp, i) => (
          <Reveal key={exp.id} delay={0.08 * i}>
            <ExperienceCard experience={exp} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-10 text-sm text-charcoal/60">
          Session details, schedules and pricing are shared on enquiry — message us on
          WhatsApp and we will plan the right session for you.
        </p>
      </Reveal>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="bg-ocean py-24 text-cream md:py-36">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <Reveal>
        <p className="eyebrow text-sand">Why SurfKarnataka</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          The Ocean, the Town, the Way We Teach.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={0.08 * i} className="h-full">
            <div
              data-testid={`highlight-${i}`}
              className="flex h-full flex-col bg-ocean p-8 transition-colors duration-500 hover:bg-ocean-deep md:p-10"
            >
              <span className="font-display text-4xl italic text-turquoise">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">
                {h.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">{h.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const GalleryPreview = () => {
  const preview = [GALLERY[0], GALLERY[3], GALLERY[12], GALLERY[16], GALLERY[6]];
  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow">Moments from the Water</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-ocean md:text-6xl">
                Gokarna, Through Our Lens.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link
              to="/gallery"
              data-testid="gallery-preview-link"
              className="inline-flex items-center gap-2 rounded-full bg-ocean px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ocean-deep"
            >
              Explore Our Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {preview.map((photo, i) => (
            <Reveal
              key={photo.alt}
              delay={0.07 * i}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <Link
                to="/gallery"
                data-testid={`gallery-preview-img-${i}`}
                className="group block h-full overflow-hidden rounded-xl"
              >
                <img
                  src={img(photo.src, i === 0 ? 1400 : 800)}
                  alt={photo.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    i === 0 ? "aspect-square md:aspect-[4/4.2] h-full" : "aspect-[4/3] md:aspect-[4/4.2]"
                  }`}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => (
  <section className="border-y border-sand/70 bg-cream py-24 md:py-36">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <Reveal>
        <p className="eyebrow">What Surfers Say</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-ocean md:text-6xl">
          Straight from the Shore.
        </h2>
      </Reveal>
      {REVIEWS.length > 0 ? (
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={0.08 * i}>
              <figure
                data-testid={`review-${i}`}
                className="flex h-full flex-col rounded-2xl border border-sand/70 bg-white p-8"
              >
                <Quote className="h-6 w-6 text-turquoise" aria-hidden="true" />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-charcoal/75 md:text-base">
                  {r.text}
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-ocean">{r.name}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      ) : (
        <Reveal delay={0.2}>
          <div
            data-testid="reviews-google-fallback"
            className="mt-16 flex max-w-3xl flex-col items-start gap-6 rounded-2xl border border-sand/70 bg-white p-8 md:p-12"
          >
            <Quote className="h-8 w-8 text-turquoise" aria-hidden="true" />
            <p className="text-base leading-relaxed text-charcoal/75 md:text-lg">
              We would rather show you real words than make them up. Read what surfers and
              travellers say about us on our Google Business profile — and after your
              session, tell the world how it went.
            </p>
            <a
              href={BUSINESS.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="find-us-on-google-btn"
              className="inline-flex items-center gap-2 rounded-full bg-ocean px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ocean-deep"
            >
              Find us on Google <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      )}
    </div>
  </section>
);

const Location = () => (
  <section className="py-24 md:py-36">
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
      <div>
        <Reveal>
          <p className="eyebrow">Location</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-ocean md:text-6xl">
            Find Us in Gokarna.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <address className="mt-8 flex items-start gap-3 text-base not-italic leading-relaxed text-charcoal/75">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-turquoise" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-charcoal">{BUSINESS.legalName}</strong>
              <br />
              {BUSINESS.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </span>
          </address>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={BUSINESS.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="location-directions-btn"
              className="inline-flex items-center gap-2 rounded-full bg-ocean px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ocean-deep"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
            <WhatsAppButton
              label="Chat on WhatsApp"
              source="location"
              tone="outline"
              testId="location-whatsapp-btn"
            />
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <div className="overflow-hidden rounded-2xl border border-sand/70">
          <iframe
            title="Map showing SurfKarnataka in Gokarna, Karnataka"
            src={BUSINESS.mapsEmbed}
            loading="lazy"
            data-testid="location-map"
            className="aspect-[4/3] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </Reveal>
    </div>
  </section>
);

const FinalCta = () => (
  <section className="noise relative overflow-hidden py-28 md:py-44">
    <img
      src={img(IMAGES.locationGokarna, 2200)}
      alt="Aerial view of the tropical coastline near Gokarna"
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-ocean/70" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-5 md:px-10">
      <Reveal>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-cream md:text-6xl lg:text-7xl">
          Your Next Wave Is Waiting.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
          Ready to experience surfing in Gokarna? Get in touch with us and plan your
          session.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <WhatsAppButton
            label="Start Your Surfing Journey"
            source="final_cta"
            tone="light"
            testId="final-cta-whatsapp-btn"
            className="px-8 py-4 text-base"
          />
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-instagram-btn"
            className="inline-flex items-center gap-2 rounded-full border border-cream/60 px-8 py-4 text-base font-semibold text-cream transition-colors duration-300 hover:bg-cream hover:text-ocean"
          >
            <Instagram className="h-4 w-4" /> {BUSINESS.instagramHandle}
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

const Home = () => (
  <>
    <Seo
      title="SurfKarnataka | Surfing Lessons in Gokarna, Karnataka"
      description="Learn to surf in Gokarna with SurfKarnataka — beginner, intermediate, private and group surfing sessions on the Arabian Sea. Book your session via WhatsApp."
    />
    <Hero />
    <EditorialMarquee />
    <Intro />
    <Experiences />
    <WhyUs />
    <GalleryPreview />
    <Reviews />
    <Location />
    <FinalCta />
  </>
);

export default Home;
