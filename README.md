# SurfKarnataka — Site Guide

A five-page marketing website for SurfKarnataka, a surf school in Gokarna, Karnataka.
Stack: React (CRA) + Tailwind CSS + framer-motion. No backend or database — all
bookings happen through WhatsApp.

## Editing content (one file)

Almost everything lives in **`frontend/src/site.config.js`**:

| What | Where |
|---|---|
| Business name, address, phone, Instagram, Google links, map embed | `BUSINESS` |
| WhatsApp number + prefilled booking messages | `BUSINESS.whatsappNumber`, `bookingMessage()` |
| Surfing experiences (name, description, price, duration, includes, requirements, times, level) | `EXPERIENCES` |
| Learning journey steps | `LEARNING_JOURNEY` |
| "Why SurfKarnataka" highlights | `HIGHLIGHTS` |
| Gallery photos and categories | `GALLERY`, `GALLERY_CATEGORIES` |
| Reviews (paste genuine Google reviews as `{ name, text }`) | `REVIEWS` |
| Instructor profiles (add real `{ name, bio, experience, photo }`) | `INSTRUCTORS` |

Fields left empty (`null` / `[]`) display an honest "to be confirmed" placeholder on
the Surf Lessons page. Fill them in `site.config.js` when the business confirms details.

## Replacing photos

Photos are URLs in `site.config.js` (`IMAGES`, `EXPERIENCES[].image`, `GALLERY`).
Swap a URL and it updates everywhere the photo is used. Keep images landscape/portrait
as indicated by the `ratio` field in `GALLERY` for a tidy grid.

## Environment variables

- `REACT_APP_BACKEND_URL` — platform-provided, do not change.
- `REACT_APP_GA_MEASUREMENT_ID` (optional) — set to your GA4 Measurement ID
  (e.g. `G-XXXXXXX`) in `frontend/.env` to activate Google Analytics. Until then
  nothing is tracked.

## Running

`yarn start` (frontend, port 3000). The backend service is unused by the site itself.

## SEO

- Per-page titles/descriptions: `frontend/src/components/Seo.jsx` used on each page.
- Static head + LocalBusiness JSON-LD: `frontend/public/index.html`.
- `robots.txt` and `llms.txt`: `frontend/public/`.
- Canonical URLs, `og:url`, `og:image` and `sitemap.xml` are intentionally omitted
  until the production domain is connected — add them then (one host, consistently).

## Google Search Console (after deploying with a custom domain)

1. Add the domain as a property in Google Search Console.
2. Verify ownership (DNS record or HTML tag method).
3. Create `frontend/public/sitemap.xml` with the real domain, redeploy, then submit
   `https://yourdomain.com/sitemap.xml` in Search Console.
4. Use "URL Inspection" to request indexing of the homepage and each page.
