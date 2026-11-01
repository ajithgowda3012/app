import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WhatsAppButton } from "@/components/Buttons";
import { img } from "@/site.config";

const ExperienceCard = ({ experience, tall = false }) => (
  <article
    data-testid={`experience-card-${experience.id}`}
    className="group relative flex flex-col overflow-hidden rounded-2xl border border-sand/70 bg-white"
  >
    <div className={`relative overflow-hidden ${tall ? "aspect-[4/3] md:aspect-[16/11]" : "aspect-[4/3]"}`}>
      <img
        src={img(experience.image, 1200)}
        alt={experience.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </div>
    <div className="flex flex-1 flex-col p-6 md:p-8">
      <h3 className="font-display text-2xl font-medium tracking-tight text-ocean md:text-3xl">
        {experience.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70 md:text-base">
        {experience.short}
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          to={`/lessons#${experience.id}`}
          data-testid={`learn-more-${experience.id}`}
          className="inline-flex items-center gap-1.5 rounded-full border border-ocean px-5 py-2.5 text-sm font-semibold text-ocean transition-colors duration-300 hover:bg-ocean hover:text-cream"
        >
          Learn More <ArrowUpRight className="h-4 w-4" />
        </Link>
        <WhatsAppButton
          experience={experience}
          label="Enquire"
          source={`experience_card_${experience.id}`}
          testId={`wa-book-${experience.id}`}
          className="px-5 py-2.5"
        />
      </div>
    </div>
  </article>
);

export default ExperienceCard;
