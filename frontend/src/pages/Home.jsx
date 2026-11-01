import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Waves, ChevronDown } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import ReviewsWall from "@/components/ReviewsWall";
import { WhatsAppButton } from "@/components/Buttons";
import { useTheme } from "@/context/ThemeContext";
import {
  BUSINESS,
  EXPERIENCES,
  LEARNING_JOURNEY,
  MARQUEE_ITEMS,
  IMAGES,
  img,
} from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const lineReveal = {
  hidden: { y: "112%" },
  visible: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.3 + i * 0.16, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const ref = useRef(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const dark = theme === "dark";
  const heroSrc = dark ? IMAGES.heroDark : IMAGES.hero;

  return (
    <section ref={ref} className="noise relative flex min-h-[92svh] items-end overflow-hidden bg-[var(--accent)]">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          key={heroSrc}
          src={img(heroSrc, 2200)}
          srcSet={`${img(heroSrc, 900)} 900w, ${img(heroSrc, 1600)} 1600w, ${img(heroSrc, 2200)} 2200w`}
          sizes="100vw"
          alt={dark ? "Surfer riding a wave at sunset on the Gokarna coast" : "Surfer riding a golden morning wave on the Gokarna coast"}
          className="h-full w-full object-cover"
          fetchpriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-44 md:px-10 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.34em] text-[var(--secondary)] md:text-sm"
        >
          Surf Karnataka · Gokarna, Karnataka
        </motion.p>
        <h1 className="font-display text-6xl font-medium leading-[0.92] tracking-tight text-white sm:text-7xl md:text-8xl">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <WhatsAppButton
            label="Book Your Session"
            source="hero"
            tone="light"
            testId="hero-book-session-btn"
            className="px-8 py-4 text-base"
          />
        </motion.div>
      </div>
    </section>
  );
};

const EditorialMarquee = () => (
  <div className="border-y border-[var(--accent)]/10 bg-[var(--secondary)] py-4" data-testid="editorial-marquee">
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
  <section className="relative overflow-hidden py-14 md:py-20">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-12 md:px-10">
      <div className="md:col-span-7">
        <Reveal><p className="eyebrow">Welcome to SurfKarnataka</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-5xl">
            Your Surfing Journey Starts Here.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            A surf school on the shores of Gokarna — a quiet coastal town where the Arabian
            Sea rolls in slow and steady. Whether you've never stood on a board or you're
            chasing cleaner rides, we teach you to read the ocean, move with it and build the
            confidence to catch your own waves — an instructor beside you, at your pace.
          </p>
        </Reveal>
      </div>
      <div className="md:col-span-5">
        <Reveal delay={0.2} className="relative">
          <div className="group overflow-hidden rounded-2xl border border-appborder">
            <img
              src={img(IMAGES.introSide, 1000)}
              alt="Surf lesson on the beach in warm light"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

// Compact pill-list: one experience expanded at a time, click to switch.
const Experiences = () => {
  const [openId, setOpenId] = useState(EXPERIENCES[0].id);
  return (
    <section className="bg-surface py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal><p className="eyebrow">Surfing Experiences</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-5xl">
            Choose How You Want to Surf.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {EXPERIENCES.map((exp, i) => {
            const open = openId === exp.id;
            return (
              <Reveal key={exp.id} delay={0.05 * i}>
                <div
                  data-testid={`exp-pill-${exp.id}`}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    open ? "border-brand bg-app" : "border-appborder bg-surface"
                  }`}
                >
                  <button
                    type="button"
                    data-testid={`exp-pill-btn-${exp.id}`}
                    aria-expanded={open}
                    onClick={() => {
                      setOpenId(open ? "" : exp.id);
                      trackEvent("experience_pill_toggle", { experience: exp.name });
                    }}
                    className="flex w-full items-center justify-between gap-4 rounded-full px-6 py-4 text-left md:px-8"
                  >
                    <span className="flex items-center gap-4">
                      <span className={`font-display text-xl italic ${open ? "text-brand" : "text-muted"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`font-display text-2xl font-medium tracking-tight md:text-3xl ${open ? "text-strong" : "text-body"}`}>
                        {exp.name}
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180 text-brand" : "text-muted"}`}
                      aria-hidden="true"
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-6 px-6 pb-6 pt-2 md:grid-cols-2 md:px-8 md:pb-8">
                          <div className="overflow-hidden rounded-xl">
                            <img
                              src={img(exp.image, 900)}
                              alt={exp.alt}
                              loading="lazy"
                              className="aspect-[4/3] w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{exp.level}</p>
                            <p className="mt-3 flex-1 text-base leading-relaxed text-body">{exp.description}</p>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                              <WhatsAppButton
                                experience={exp}
                                label="Enquire on WhatsApp"
                                source={`home_pill_${exp.id}`}
                                testId={`wa-book-${exp.id}`}
                                className="px-6 py-3"
                              />
                              <Link
                                to={`/lessons#${exp.id}`}
                                data-testid={`learn-more-${exp.id}`}
                                className="inline-flex items-center gap-1.5 rounded-full border border-appborder px-5 py-3 text-sm font-semibold text-strong transition-colors duration-300 hover:border-brand hover:text-brand"
                              >
                                Full details <ArrowUpRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8">
            <Link
              to="/lessons"
              data-testid="experiences-view-all-link"
              className="group inline-flex items-center gap-2 border-b border-[var(--accent)] pb-1 text-sm font-semibold uppercase tracking-[0.2em] text-strong transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              All Surf Lessons
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const Journey = () => (
  <section className="py-14 md:py-20">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <Reveal><p className="eyebrow">How You'll Learn</p></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-5xl">
          From the Sand to Your First Ride.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {LEARNING_JOURNEY.map((step, i) => (
          <Reveal key={step.title} delay={0.06 * i} className="h-full">
            <div data-testid={`journey-step-${i + 1}`} className="flex h-full flex-col rounded-2xl border border-appborder bg-surface p-6 transition-colors duration-300 hover:border-brand">
              <span className="font-display text-4xl italic text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-lg font-medium leading-snug tracking-tight text-strong">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Reviews = () => <ReviewsWall />;

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
    <Journey />
    <Reviews />
  </>
);

export default Home;
