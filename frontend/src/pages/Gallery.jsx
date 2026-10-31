import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { GALLERY, GALLERY_CATEGORIES, BUSINESS, img } from "@/site.config";
import { trackEvent } from "@/lib/analytics";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const photos = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((p) => p.category === filter)),
    [filter],
  );

  const open = (index) => {
    setActive(index);
    trackEvent("gallery_lightbox_open", { category: filter, index });
  };

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((a) => (a + 1) % photos.length);
      if (e.key === "ArrowLeft") setActive((a) => (a - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, photos.length]);

  return (
    <>
      <Seo
        title="Surfing Photos & Experiences in Gokarna | SurfKarnataka"
        description="Surfing, surf lessons, students, instructors and the Gokarna coastline — browse the SurfKarnataka gallery and follow us on Instagram for daily ocean moments."
      />

      <section className="noise relative overflow-hidden bg-ocean pb-20 pt-36 text-cream md:pb-28 md:pt-48">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <Reveal>
            <p className="eyebrow text-sand">Gallery</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-tight md:text-7xl">
              Life Between the Waves.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/80 md:text-lg">
              Surfing, lessons, students and the Gokarna coast — moments from the water,
              captured as they happened.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div
            className="flex flex-wrap gap-3"
            role="tablist"
            aria-label="Filter gallery by category"
          >
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                data-testid={`filter-${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                onClick={() => {
                  setFilter(cat);
                  trackEvent("gallery_filter", { category: cat });
                }}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  filter === cat
                    ? "border-ocean bg-ocean text-cream"
                    : "border-sand bg-white text-charcoal/70 hover:border-ocean hover:text-ocean"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-12 columns-2 gap-4 md:columns-3 md:gap-6">
            <AnimatePresence mode="popLayout">
              {photos.map((photo, i) => (
                <motion.figure
                  layout
                  key={photo.src}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="group mb-4 break-inside-avoid md:mb-6"
                >
                  <button
                    type="button"
                    data-testid={`gallery-item-${i}`}
                    onClick={() => open(i)}
                    aria-label={`View photo: ${photo.alt}`}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-xl"
                  >
                    <img
                      src={img(photo.src, 900)}
                      alt={photo.alt}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        photo.ratio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                      }`}
                    />
                  </button>
                  <figcaption className="sr-only">{photo.alt}</figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal delay={0.1}>
            <div className="mt-20 flex flex-col items-start gap-6 rounded-2xl border border-sand/70 bg-sand-light/40 p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div>
                <h2 className="font-display text-3xl font-medium tracking-tight text-ocean md:text-4xl">
                  The Ocean, Daily.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/70 md:text-base">
                  Follow SurfKarnataka on Instagram for fresh sessions, wave days and life
                  on the Gokarna coast.
                </p>
              </div>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="gallery-instagram-btn"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ocean px-7 py-3.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ocean-deep"
              >
                <Instagram className="h-4 w-4" /> {BUSINESS.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && photos[active] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            data-testid="gallery-lightbox"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ocean-deep/95 p-4 md:p-10"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
          >
            <button
              type="button"
              data-testid="lightbox-close-btn"
              aria-label="Close photo viewer"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors duration-300 hover:bg-cream hover:text-ocean"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              data-testid="lightbox-prev-btn"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                setActive((a) => (a - 1 + photos.length) % photos.length);
              }}
              className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors duration-300 hover:bg-cream hover:text-ocean md:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              data-testid="lightbox-next-btn"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                setActive((a) => (a + 1) % photos.length);
              }}
              className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors duration-300 hover:bg-cream hover:text-ocean md:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <motion.figure
              key={photos[active].src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={img(photos[active].src, 1800)}
                alt={photos[active].alt}
                className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain"
              />
              <figcaption className="mt-4 text-center text-sm text-cream/70">
                {photos[active].alt}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
