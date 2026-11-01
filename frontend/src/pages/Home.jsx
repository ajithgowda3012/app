import { useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Waves,
  MapPin,
  Instagram,
} from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import ExperienceCard from "@/components/ExperienceCard";
import ReviewsWall from "@/components/ReviewsWall";
import { WhatsAppButton } from "@/components/Buttons";
import {
  BUSINESS,
  EXPERIENCES,
  HIGHLIGHTS,
  GALLERY,
  MARQUEE_ITEMS,
  IMAGES,
  img,
} from "@/site.config";

const lineReveal = {
  hidden: { y: "112%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.3 + i * 0.16, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);

  return (
    <section ref={ref} className="noise relative flex min-h-[100svh] items-end overflow-hidden bg-[var(--accent)]">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={img(IMAGES.hero, 2400)}
          alt="Surfer riding a golden wave on the Gokarna coast at sunset"
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-44 md:px-10 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mb-7 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--secondary)] md:text-sm"
        >
          Surf School · Gokarna, Karnataka
        </motion.p>
        <h1 className="font-display text-6xl font-medium leading-[0.92] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
          {["Find Your Wave.", "Discover Your", "Freedom."].map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1.5">
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
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/90 md:text-lg"
        >
          Experience the joy of surfing with SurfKarnataka in Gokarna, Karnataka.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-11 flex flex-wrap items-center gap-4"
        >
          <WhatsAppButton
            label="Book Your Session"
            source="hero"
            tone="light"
            testId="hero-book-session-btn"
            className="px-8 py-4 text-base"
          />
          <Link
            to="/lessons"
            data-testid="hero-explore-lessons-btn"
            className="group inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-app hover:text-strong"
          >
            Explore Surf Lessons
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 right-8 hidden text-white/65 md:block"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em]"
        >
          Scroll
          <span className="h-10 w-px bg-app/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const EditorialMarquee = () => (
  <div className="border-y border-[var(--accent)]/10 bg-[var(--secondary)] py-5" data-testid="editorial-marquee">
    <Marquee speed={32} gradient={false} pauseOnHover>
      {MARQUEE_ITEMS.map((item) => (
        <span key={item} className="mx-10 flex items-center gap-10">
          <span className="font-display text-2xl italic text-strong md:text-3xl">{item}</span>
          <Waves className="h-5 w-5 text-brand" aria-hidden="true" />
        </span>
      ))}
    </Marquee>
  </div>
);

const Intro = () => (
  <section className="relative overflow-hidden py-24 md:py-36">
    <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-12 md:px-10">
      <div className="md:col-span-7">
        <Reveal><p className="eyebrow">Welcome to SurfKarnataka</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-6xl">
            Your Surfing Journey Starts Here.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            SurfKarnataka is a surf school on the shores of Gokarna — a quiet coastal town
            where the Arabian Sea rolls in slow and steady. Whether you have never stood on
            a board or you are chasing cleaner rides, we teach you to read the ocean, move
            with it and build the confidence to catch your own waves.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            Every session is guided by an instructor in the water with you. You learn at your
            pace, on real Gokarna waves, and leave with more than a lesson — an active,
            honest coastal experience you will remember.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-10">
            <Link
              to="/lessons"
              data-testid="intro-lessons-link"
              className="group inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-strong transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              See How You'll Learn
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="md:col-span-5">
        <Reveal delay={0.2} className="relative h-full">
          <div className="group overflow-hidden rounded-2xl border border-appborder md:mt-16">
            <img
              src={img(IMAGES.introSide, 1200)}
              alt="Surf lesson on the beach in warm light"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Experiences = () => (
  <section className="bg-surface py-24 md:py-36">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal><p className="eyebrow">Surfing Experiences</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-6xl">
              Choose How You Want to Surf.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <Link
            to="/lessons"
            data-testid="experiences-view-all-link"
            className="group inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-strong transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            All Surf Lessons
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        <p className="mt-10 text-sm text-muted">
          Session details, schedules and pricing are shared on enquiry — message us on
          WhatsApp and we will plan the right session for you.
        </p>
      </Reveal>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="bg-[var(--accent)] py-24 text-white md:py-36">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <Reveal><p className="eyebrow text-[var(--secondary)]">Why SurfKarnataka</p></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          The Ocean, the Town, the Way We Teach.
        </h2>
      </Reveal>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-app/15 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.title} delay={0.08 * i} className="h-full">
            <div
              data-testid={`highlight-${i}`}
              className="flex h-full flex-col bg-[var(--accent)] p-8 transition-colors duration-500 hover:bg-[var(--accent-deep)] md:p-10"
            >
              <span className="font-display text-4xl italic text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{h.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75">{h.text}</p>
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
            <Reveal><p className="eyebrow">Moments from the Water</p></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-6xl">
                Gokarna, Through Our Lens.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="gallery-instagram-link"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--accent-deep)]"
            >
              <Instagram className="h-4 w-4" /> {BUSINESS.instagramHandle}
            </a>
          </Reveal>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {preview.map((photo, i) => (
            <Reveal key={photo.alt} delay={0.07 * i} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <div
                data-testid={`gallery-preview-img-${i}`}
                className="group h-full overflow-hidden rounded-xl"
              >
                <img
                  src={img(photo.src, i === 0 ? 1400 : 800)}
                  alt={photo.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    i === 0 ? "aspect-square h-full md:aspect-[4/4.2]" : "aspect-[4/3] md:aspect-[4/4.2]"
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => <ReviewsWall />;

const Location = () => (
  <section className="py-24 md:py-36">
    <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
      <div>
        <Reveal><p className="eyebrow">Location</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-6xl">
            Find Us in Gokarna.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <address className="mt-8 flex items-start gap-3 text-base not-italic leading-relaxed text-body">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-strong">{BUSINESS.legalName}</strong>
              <br />
              {BUSINESS.addressLines.map((line) => (
                <span key={line}>{line}<br /></span>
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
              className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[var(--accent-deep)]"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
            <WhatsAppButton label="Chat on WhatsApp" source="location" tone="outline" testId="location-whatsapp-btn" />
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <div className="overflow-hidden rounded-2xl border border-appborder">
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
    <div className="absolute inset-0 bg-[var(--accent)]/70" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-5 md:px-10">
      <Reveal>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
          Your Next Wave Is Waiting.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
          Ready to experience surfing in Gokarna? Get in touch with us and plan your session.
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
            className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-app hover:text-strong"
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
