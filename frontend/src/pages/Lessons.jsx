import {
  Clock,
  IndianRupee,
  ListChecks,
  ShieldCheck,
  CalendarDays,
  BarChart3,
  Waves,
} from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { WhatsAppButton } from "@/components/Buttons";
import { EXPERIENCES, LEARNING_JOURNEY, img } from "@/site.config";

const Field = ({ icon: Icon, label, value, items, testId }) => {
  const isEmpty = items ? items.length === 0 : value === null || value === undefined || value === "";
  return (
    <div data-testid={testId} className="border-t border-appborder py-4">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
        {label}
      </div>
      {isEmpty ? (
        <p className="mt-2 text-sm italic text-muted">
          To be confirmed — ask us on WhatsApp for current details.
        </p>
      ) : items ? (
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-strong/80">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="mt-2 text-sm text-strong/80">{value}</p>
      )}
    </div>
  );
};

const ExperienceSection = ({ experience, flip }) => (
  <section
    id={experience.id}
    data-testid={`lesson-section-${experience.id}`}
    className="scroll-mt-32 border-b border-appborder py-20 last:border-b-0 md:py-28"
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
        <Reveal delay={0.2}>
          <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
            <Field icon={Clock} label="Duration" value={experience.duration} testId={`duration-${experience.id}`} />
            <Field icon={IndianRupee} label="Price" value={experience.price} testId={`price-${experience.id}`} />
            <Field icon={ListChecks} label="What's Included" items={experience.includes} testId={`includes-${experience.id}`} />
            <Field icon={ShieldCheck} label="Requirements" items={experience.requirements} testId={`requirements-${experience.id}`} />
            <Field icon={CalendarDays} label="Session Times" items={experience.times} testId={`times-${experience.id}`} />
            <Field icon={BarChart3} label="Suitable Level" value={experience.level} testId={`level-${experience.id}`} />
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10">
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

const LearningJourney = () => (
  <section className="bg-[var(--accent)] py-24 text-white md:py-36">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <Reveal><p className="eyebrow text-[var(--secondary)]">The Learning Journey</p></Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl">
          From the Sand to Your First Ride.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
          An illustrative look at how a first session usually unfolds — the exact programme
          is shaped by your instructor and the ocean on the day.
        </p>
      </Reveal>
      <div className="mt-16 grid gap-6 md:grid-cols-5">
        {LEARNING_JOURNEY.map((step, i) => (
          <Reveal key={step.title} delay={0.08 * i} className="h-full">
            <div
              data-testid={`journey-step-${i + 1}`}
              className="flex h-full flex-col rounded-2xl border border-white/15 bg-[var(--accent-deep)]/60 p-7 transition-colors duration-500 hover:border-brand/50"
            >
              <span className="font-display text-4xl italic text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium leading-snug tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Lessons = () => (
  <>
    <Seo
      title="Surfing Lessons in Gokarna | SurfKarnataka"
      description="Beginner, intermediate, private and group surfing lessons in Gokarna, Karnataka. See how each session works and enquire on WhatsApp for times and pricing."
    />
    <section className="noise relative overflow-hidden bg-[var(--accent)] pb-20 pt-40 text-white md:pb-28 md:pt-56">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal><p className="eyebrow text-[var(--secondary)]">Surf Lessons in Gokarna</p></Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[0.92] tracking-tight md:text-7xl">
            Surfing Experiences for Every Level.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Four ways to get into the water — from your very first wave to focused
            one-to-one coaching. Every experience is confirmed personally over WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex items-center gap-2 text-sm text-white/65">
            <Waves className="h-4 w-4 text-brand" aria-hidden="true" />
            Gokarna · Karnataka · Arabian Sea
          </div>
        </Reveal>
      </div>
    </section>

    {EXPERIENCES.map((exp, i) => (
      <ExperienceSection key={exp.id} experience={exp} flip={i % 2 === 1} />
    ))}

    <LearningJourney />
  </>
);

export default Lessons;
