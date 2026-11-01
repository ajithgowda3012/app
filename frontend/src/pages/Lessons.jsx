import { Waves, Backpack, CheckCircle2 } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { WhatsAppButton } from "@/components/Buttons";
import { EXPERIENCES, TO_CARRY, WE_PROVIDE, img } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

// Jump-to pills at the top for fast access to any lesson.
const JumpPills = () => {
  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const lenis = window.__lenis;
      if (lenis) lenis.scrollTo(el, { offset: -110 });
      else el.scrollIntoView({ behavior: "smooth", block: "start" });
      trackEvent("lesson_jump", { id });
    }
  };
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="flex flex-wrap gap-3" role="navigation" aria-label="Jump to a lesson">
        {EXPERIENCES.map((exp) => (
          <button
            key={exp.id}
            type="button"
            data-testid={`jump-pill-${exp.id}`}
            onClick={() => jump(exp.id)}
            className="rounded-full border border-appborder bg-surface px-5 py-2.5 text-sm font-semibold text-body transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-brand-text"
          >
            {exp.name}
          </button>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = ({ experience, flip }) => (
  <section
    id={experience.id}
    data-testid={`lesson-section-${experience.id}`}
    className="scroll-mt-32 border-b border-appborder py-16 last:border-b-0 md:py-20"
  >
    <div
      className={`mx-auto grid max-w-7xl items-start gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10 ${
        flip ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <Reveal>
        <div className="group overflow-hidden rounded-2xl border border-appborder">
          <img
            src={img(experience.image, 1400)}
            alt={experience.alt}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Reveal>
      <div>
        <Reveal><p className="eyebrow">{experience.level}</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-4xl font-medium tracking-tight text-strong md:text-5xl">
            {experience.name}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-base leading-relaxed text-body md:text-lg">
            {experience.description}
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-8">
            <WhatsAppButton
              experience={experience}
              label={`Enquire About ${experience.name}`}
              source={`lessons_page_${experience.id}`}
              testId={`wa-enquire-${experience.id}`}
              className="px-7 py-3.5"
            />
            <p className="mt-4 max-w-md text-xs leading-relaxed text-muted">
              A WhatsApp enquiry is not a confirmed booking — we will reply with current
              availability, session times and pricing.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

const Essentials = () => (
  <section className="bg-surface py-16 md:py-20">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <Reveal><p className="eyebrow">Good to Know</p></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-5xl">
          What to Carry, What We Provide.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <Reveal delay={0.1} className="h-full">
          <div className="h-full rounded-2xl border border-appborder bg-app p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand text-brand-text">
                <Backpack className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight text-strong">You bring</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {TO_CARRY.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-body">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="h-full">
          <div className="h-full rounded-2xl border border-appborder bg-app p-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-text)]">
                <Waves className="h-5 w-5" />
              </span>
              <h3 className="font-display text-2xl font-medium tracking-tight text-strong">We provide</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {WE_PROVIDE.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-body">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.25}>
        <p className="mt-8 text-sm text-muted">
          Essentials are indicative — we'll confirm exactly what to bring for your session on WhatsApp.
        </p>
      </Reveal>
    </div>
  </section>
);

const Lessons = () => (
  <>
    <Seo
      title="Surfing Lessons in Gokarna | SurfKarnataka"
      description="Beginner, intermediate, private and group surfing lessons in Gokarna, Karnataka. See how each session works and enquire on WhatsApp for times and pricing."
    />
    <section className="noise relative overflow-hidden bg-[var(--accent)] pb-16 pt-40 text-[var(--accent-text)] md:pb-20 md:pt-56">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal><p className="eyebrow text-[var(--secondary)]">Surf Lessons in Gokarna</p></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[0.92] tracking-tight md:text-7xl">
            Surfing Experiences for Every Level.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--accent-text)]/85 md:text-lg">
            Four ways to get into the water — from your very first wave to focused
            one-to-one coaching. Every experience is confirmed personally over WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex items-center gap-2 text-sm text-[var(--accent-text)]/70">
            <Waves className="h-4 w-4 text-[var(--secondary)]" aria-hidden="true" />
            Gokarna · Karnataka · Arabian Sea
          </div>
        </Reveal>
      </div>
    </section>

    <div className="pt-10">
      <JumpPills />
    </div>

    {EXPERIENCES.map((exp, i) => (
      <ExperienceSection key={exp.id} experience={exp} flip={i % 2 === 1} />
    ))}

    <Essentials />
  </>
);

export default Lessons;
