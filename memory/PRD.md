# PRD — SurfKarnataka Website

## Original problem statement
Build a premium, minimalist, fully responsive five-page website for SurfKarnataka,
a surf school in Gokarna, Karnataka (Home, Surf Lessons, About Us, Gallery, Contact).
WhatsApp-first booking with prefilled messages, photography-led editorial design
(ocean blue / turquoise / sand / off-white / charcoal), full SEO setup, GA4 prepared
but inactive, no backend/database/auth, centralised editable content, no invented
business facts.

## Architecture
- React (CRA) + Tailwind CSS + framer-motion + lenis + react-fast-marquee + react-helmet-async
- No backend usage; WhatsApp (wa.me) is the only booking channel
- Single source of truth: `frontend/src/site.config.js` (business info, WhatsApp,
  experiences, gallery, reviews, instructors)
- SEO: static head + SportsActivityLocation JSON-LD in `public/index.html`,
  per-page meta via `Seo.jsx` (react-helmet-async), `robots.txt`, `llms.txt`,
  favicon.svg (wave mark). Canonical/og:url/og:image/sitemap.xml deliberately
  omitted until a production domain is connected.

## User personas
- Domestic/international travellers researching things to do in Gokarna (mobile-first)
- Beginner/intermediate surfers looking for lessons
- The business owner, editing content via site.config.js

## Core requirements (static)
1. Five pages with shared header/footer/navigation
2. WhatsApp booking CTAs with experience-specific prefilled messages; never claim confirmation
3. Editable experience cards (Beginner/Intermediate/Private/Group) with placeholder pricing/schedule
4. Filterable gallery with lightbox and lazy loading
5. Contact form that hands off to WhatsApp (no fake submission)
6. Reviews section: genuine reviews only, "Find us on Google" fallback
7. Full SEO: unique meta per page, structured data (verified facts only), robots, alt text, 404
8. GA4 prepared, inactive until Measurement ID supplied
9. Mobile-first responsive, floating WhatsApp button

## Implemented (2026-10-31)
- Complete five-page site with design system (Cormorant Garamond + Manrope, coastal palette)
- Home: kinetic hero with line-reveal + parallax, marquee, intro, 4 experience cards,
  Why SurfKarnataka, gallery preview, reviews (Google fallback), map + directions, final CTA
- Surf Lessons: 4 detailed sections with editable placeholder fields, 5-step learning journey
- About: story, philosophy, teaching approach, instructor placeholder (no invented people)
- Gallery: 20 photos, 7 category filters, lightbox with keyboard navigation, Instagram CTA
- Contact: verified business details, Call/WhatsApp/Instagram/Directions buttons, map embed,
  form-to-WhatsApp with validation
- Floating WhatsApp button, mobile slide-in menu, smooth momentum scrolling
- SEO package per farm-seo-setup skill; GA4 inactive (`REACT_APP_GA_MEASUREMENT_ID`)
- Owner guide in /app/README.md

## Verified
- All 5 pages + 404 render (desktop 1366, tablet 768, mobile 375), zero console errors
- WhatsApp links open wa.me/918867564051 with correct per-experience prefilled messages
- Contact form fills → opens WhatsApp with full enquiry; required-field validation works
- Gallery filters, lightbox open/next/close; mobile menu navigation
- robots.txt and llms.txt served as real files; unique titles per page; one H1 per page

## Pending (needs owner / production)
- Canonical URL, og:url, og:image, sitemap.xml — require the confirmed production domain
- Genuine Google reviews to paste into REVIEWS (site shows "Find us on Google" until then)
- Real prices, durations, session times, inclusions for the four experiences
- Real instructor names, photos and bios
- GA4 Measurement ID to activate analytics
- Real business photography to replace sample stock photos

## Backlog
- P0: Production domain → canonical/OG URLs/sitemap + Search Console submission (needs Deploy)
- P1: Real content swap (photos, reviews, lesson details, instructors)
- P2: Blog/seasonal updates, multi-language content

## Next tasks
1. Owner supplies real photos, reviews, prices, instructor profiles → fill site.config.js
2. Deploy (50 credits/month) + connect custom domain
3. Add canonical/OG/sitemap for the live domain, submit to Google Search Console,
   enable bot-prerender toggle and re-verify on the live domain
