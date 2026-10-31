import { Waves, Compass, HeartHandshake } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { WhatsAppButton } from "@/components/Buttons";
import { INSTRUCTORS, IMAGES, GALLERY, img } from "@/site.config";

const Philosophy = [
  {
    icon: Waves,
    title: "The ocean decides",
    text: "No two sessions are alike. We read the conditions and shape every lesson around what the sea is actually doing that day.",
  },
  {
    icon: Compass,
    title: "Progress over performance",
    text: "Standing up once matters more than looking the part. We build real skills, one honest wave at a time.",
  },
  {
    icon: HeartHandshake,
    title: "Everyone is welcome",
    text: "Age, fitness and experience don't gatekeep the ocean here. If you want to try, we'll find your way in.",
  },
];

const About = () => (
  <>
    <Seo
      title="About SurfKarnataka | Surf School in Gokarna"
      description="The story of SurfKarnataka — a surf school in Gokarna, Karnataka built on a love for the ocean, honest teaching and the laid-back coast of the Arabian Sea."
    />

    <section className="noise relative overflow-hidden bg-ocean pb-20 pt-36 text-cream md:pb-28 md:pt-48">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-sand">Our Story</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
            About SurfKarnataka.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
            A surf school born where Karnataka's temple town meets the open sea.
          </p>
        </Reveal>
      </div>
    </section>

    <section className="py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-sand/70">
              <img
                src={img(IMAGES.aboutInstructor, 1400)}
                alt="SurfKarnataka instructor walking along the beach with a surfboard"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="-mt-16 ml-auto w-3/4 overflow-hidden rounded-2xl border-4 border-cream shadow-xl md:-mt-24">
              <img
                src={img(GALLERY[0].src, 900)}
                alt={GALLERY[0].alt}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:pt-10">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-tight tracking-tight text-ocean md:text-5xl">
              Where Gokarna Meets the Waves.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-base leading-relaxed text-charcoal/75 md:text-lg">
              Gokarna has always been a place people come to slow down — temple streets,
              quiet coves, and long stretches of sand on the Arabian Sea. SurfKarnataka
              grew out of that same spirit: the belief that this coastline is one of the
              most generous places in India to learn to surf.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-charcoal/75 md:text-lg">
              We started the school to share what the ocean here gives so freely — gentle
              learner-friendly waves, warm water and space to fail, laugh and try again.
              Our teaching is personal and unhurried: small moments on the sand, real time
              in the water, and an instructor beside you until the wave is yours.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 text-base leading-relaxed text-charcoal/75 md:text-lg">
              For us, surfing is not a performance. It is mornings of salt and sunlight,
              the patience of the sea, and the grin nobody can wipe off after a first ride.
              That is the experience we teach toward — every single session.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="border-y border-sand/70 bg-sand-light/50 py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Our Surfing Philosophy</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-ocean md:text-6xl">
            How We Think About the Ocean.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {Philosophy.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i} className="h-full">
              <div
                data-testid={`philosophy-${i}`}
                className="flex h-full flex-col rounded-2xl border border-sand/70 bg-white p-8 md:p-10"
              >
                <p.icon className="h-7 w-7 text-turquoise" aria-hidden="true" />
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight text-ocean">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/70 md:text-base">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">The People in the Water</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-ocean md:text-6xl">
            Meet Your Instructors.
          </h2>
        </Reveal>
        {INSTRUCTORS.length > 0 ? (
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {INSTRUCTORS.map((person, i) => (
              <Reveal key={person.name} delay={0.08 * i}>
                <article
                  data-testid={`instructor-${i}`}
                  className="overflow-hidden rounded-2xl border border-sand/70 bg-white"
                >
                  <img
                    src={img(person.photo, 900)}
                    alt={person.alt || `SurfKarnataka instructor ${person.name}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="p-7">
                    <h3 className="font-display text-2xl font-medium text-ocean">{person.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{person.bio}</p>
                    {person.experience && (
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-turquoise">
                        {person.experience}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.2}>
            <div
              data-testid="instructors-placeholder"
              className="mt-16 max-w-3xl rounded-2xl border border-sand/70 bg-white p-8 md:p-12"
            >
              <p className="text-base leading-relaxed text-charcoal/75 md:text-lg">
                Our instructor profiles are on their way. Every SurfKarnataka session is
                led in the water by a local instructor who knows these beaches and these
                waves — and we will introduce the team properly here soon. Until then,
                come say hello in person or on Instagram.
              </p>
            </div>
          </Reveal>
        )}
        <Reveal delay={0.25}>
          <div className="mt-16 rounded-2xl bg-ocean p-8 text-cream md:p-14">
            <h3 className="max-w-xl font-display text-3xl font-medium tracking-tight md:text-4xl">
              How We Teach
            </h3>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base">
              We start on the sand and move into the water only when you are ready. Your
              instructor stays close, gives simple and honest feedback, and keeps the
              session safe, relaxed and fun. Small groups, patient pacing, real waves —
              that is the SurfKarnataka approach.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                label="Ask Us Anything on WhatsApp"
                source="about_page"
                tone="light"
                testId="about-whatsapp-btn"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </>
);

export default About;
