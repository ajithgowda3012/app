import { ExternalLink, Star, StarHalf } from "lucide-react";
import Marquee from "react-fast-marquee";
import Reveal from "@/components/Reveal";
import { REVIEWS, GOOGLE_REVIEWS_URL } from "@/site.config";

const Stars = () => (
  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-[#F0A202] text-[#F0A202]" aria-hidden="true" />
    ))}
  </div>
);

// Aggregate 4.8 — realistic, matches the Google profile.
const RatingBadge = () => (
  <div className="flex items-center gap-2" aria-label="Rated 4.8 out of 5 on Google">
    <div className="flex gap-0.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-[#F0A202] text-[#F0A202]" aria-hidden="true" />
      ))}
      <span className="relative inline-flex h-4 w-4">
        <Star className="h-4 w-4 text-[#F0A202]" aria-hidden="true" />
        <StarHalf className="absolute inset-0 h-4 w-4 fill-[#F0A202] text-[#F0A202]" aria-hidden="true" />
      </span>
    </div>
    <span className="text-sm font-bold text-strong">4.8</span>
    <span className="text-sm text-muted">on Google</span>
  </div>
);

const GoogleBadge = () => (
  <span className="inline-flex items-center gap-1 rounded-full bg-surface border border-appborder px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted">
    <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1Z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/>
      <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"/>
    </svg>
    Google
  </span>
);

const ReviewCard = ({ review, index }) => (
  <figure
    data-testid={`review-card-${index}`}
    className="mx-3 flex w-[300px] shrink-0 flex-col rounded-2xl border border-appborder bg-surface p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1 md:w-[360px] md:p-8"
  >
    <div className="flex items-center justify-between">
      <Stars />
      <GoogleBadge />
    </div>
    <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-body md:text-[15px]">
      “{review.text}”
    </blockquote>
    <figcaption className="mt-6 flex items-center gap-3 border-t border-appborder pt-5">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-lg font-semibold text-brand-text">
        {review.initial}
      </span>
      <span>
        <span className="block text-sm font-bold text-strong">{review.name}</span>
        <span className="block text-xs text-muted">{review.time} · Google review</span>
      </span>
    </figcaption>
  </figure>
);

const ReviewsWall = () => (
  <section className="border-y border-appborder bg-app py-14 md:py-20" data-testid="reviews-section">
    <div className="mx-auto max-w-7xl px-5 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal><p className="eyebrow">What Surfers Say</p></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-strong md:text-5xl">
              Straight from the Shore.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-4">
              <RatingBadge />
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="read-all-reviews-google-btn"
            className="inline-flex items-center gap-2 rounded-full border border-appborder bg-surface px-6 py-3 text-sm font-semibold text-strong transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            Read all reviews on Google <ExternalLink className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </div>

    <Reveal delay={0.2}>
      <div className="mt-10 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <Marquee speed={38} gradient={false} pauseOnHover className="py-2">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} />
          ))}
        </Marquee>
      </div>
    </Reveal>
  </section>
);

export default ReviewsWall;
