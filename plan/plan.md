# SurfKarnataka — Premium Surf School Website

A five-page, photography-led website for SurfKarnataka, a surf school in Gokarna, Karnataka. Its one job: move a visitor from discovering the school to starting a WhatsApp conversation, while looking like a premium international surf brand and ranking for "surfing in Gokarna" searches.

## Who it's for

- Domestic and international travellers researching things to do in Gokarna and coastal Karnataka
- Beginners and intermediate surfers looking for lessons, mostly browsing on phones
- The business owner, who needs to update photos, lesson details and reviews without touching code structure

## Core features and experience

- Five pages with one consistent header, footer and navigation: Home, Surf Lessons, About Us, Gallery, Contact
- Persistent "Book Your Session" button in the header plus a floating WhatsApp button on every page
- WhatsApp-first booking: every CTA opens wa.me/918867564051 with a prefilled message that names the chosen experience (Beginner, Intermediate, Private, Group); the site never claims a booking is confirmed
- Homepage: cinematic hero with the headline "Find Your Wave. Discover Your Freedom.", introduction, four editable experience cards (photo, description, Learn More, WhatsApp button), four "Why SurfKarnataka" highlights, gallery preview, reviews section, "Find Us in Gokarna" location block with Google Maps directions, and a final call-to-action
- Surf Lessons page: one detailed section per experience with editable fields (description, duration, price, inclusions, requirements, session times, level) marked clearly as placeholders, plus a five-step illustrative learning journey
- About page: the SurfKarnataka story, surfing philosophy, teaching approach and editable instructor profile cards (no invented names or credentials until real ones are supplied)
- Gallery: filterable categories (Surfing, Surf Lessons, Students, Instructors, Beach & Ocean, Surf Lifestyle), click-to-expand lightbox, lazy loading, and an Instagram call-to-action
- Contact page: verified business details (Surf Karnataka, Dubbansasi Bhavikodla Gokarna 581319, +91 88675 64051), Call Now / WhatsApp / Instagram / Get Directions buttons, and an enquiry form (name, phone, experience, date, participants, message) that opens WhatsApp with the filled-in message — no fake "submitted" confirmation
- All content (business info, WhatsApp number, experiences, images) lives in one central configuration so the owner can edit it in one place; all sample photos are swappable
- SEO from day one: unique titles and descriptions per page, sitemap, robots.txt, canonicals, Open Graph, LocalBusiness structured data with only verified details, descriptive alt text, fast-loading optimised images, proper 404 page
- Google Analytics 4 prepared but inactive: the Measurement ID stays as a configurable placeholder until supplied
- Reviews: a testimonial section ready to display genuine reviews; it launches with a "Find us on Google" button and switches to real pasted reviews once the owner supplies them

## User flow

Discover (hero, intro, experiences) → Explore (lesson details, gallery, about) → Trust (reviews, location, real contact details) → Enquire (WhatsApp with a prefilled, experience-specific message)

## UI/UX feel

- Premium editorial coastal aesthetic: deep ocean blue, muted turquoise, warm sand beige, off-white, charcoal text — no gradients, no clutter
- Awwwards-level craft: a distinctive display typeface for headings paired with a clean sans body font, a large kinetic hero with a masked line-by-line headline reveal on load, one slow editorial marquee, smooth momentum scrolling, subtle scroll-reveal animations and micro-interactions, and one gentle parallax moment in the hero
- Generous whitespace, left-aligned editorial layouts, photography treated as the hero of every section
- Original simple wave-mark logo for SurfKarnataka, used as favicon and replaceable later
- Mobile-first: thumb-friendly buttons, clean slide-in menu, no horizontal scroll, fast load on slow connections

## Implementation phases

**Phase 1 (built now — MVP):** The complete five-page website with the full design system, all sections above, WhatsApp booking with prefilled messages, contact form-to-WhatsApp, gallery with lightbox, centralised editable content, full SEO setup (metadata, sitemap, robots, structured data), placeholder sample photography, the "Find us on Google" reviews fallback, and GA4 prepared but inactive. Verified end-to-end on mobile, tablet and desktop preview.

**Phase 2 (later, on request):** Swap in real business photography, paste genuine Google reviews into the testimonials section, fill in real lesson prices, durations and schedules, add instructor profiles with real names and photos, activate GA4 with the real Measurement ID, and connect a custom domain.

**Phase 3 (later, on request):** Publish the site on Emergent hosting, submit the sitemap in Google Search Console, and any additions the business asks for (blog, seasonal announcements, multi-language content).

## Assumptions

- No verified reviews have been pasted yet, so the site launches with the "Find us on Google" button; pasted reviews replace it the moment they are provided
- All prices, durations, session times, inclusions and instructor details stay as clearly marked editable placeholders until the business confirms them — nothing is invented
- Sample surfing photography (properly licensed stock) is used for launch, organised so every image can be swapped later
- No booking database, accounts or payments — WhatsApp is the only booking channel, and the contact form hands off to WhatsApp
- Analytics ships inactive; nothing is tracked until a Measurement ID is added
- The site is reviewed in preview first; publishing (50 credits/month) happens only on the owner's go-ahead
- The Instagram and Google Business links are used only as links — no content is scraped from either
