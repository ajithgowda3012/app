// ─────────────────────────────────────────────────────────────────────────────
// SurfKarnataka — central site configuration
// Edit THIS file to update business info, WhatsApp, experiences, photos & reviews.
// ─────────────────────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: "SurfKarnataka",
  legalName: "Surf Karnataka",
  tagline: "Surf school in Gokarna, Karnataka",
  description:
    "SurfKarnataka is a surf school on the coast of Gokarna, Karnataka — helping travellers and first-timers learn to surf, read the ocean and catch their own waves.",
  phoneDisplay: "+91 88675 64051",
  phoneHref: "tel:+918867564051",
  whatsappNumber: "918867564051",
  instagram: "https://www.instagram.com/surfkarnataka/",
  instagramHandle: "@surfkarnataka",
  googleBusiness: "https://share.google/NNeiwGUfU66UjDQzt",
  addressLines: ["Dubbansasi, Bhavikodla", "Gokarna, Karnataka 581319", "India"],
  addressFull: "Dubbansasi, Bhavikodla, Gokarna, Karnataka 581319, India",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Surf+Karnataka,+Dubbansasi,+Bhavikodla,+Gokarna,+Karnataka+581319",
  mapsEmbed:
    "https://www.google.com/maps?q=Surf+Karnataka,+Dubbansasi,+Bhavikodla,+Gokarna,+Karnataka+581319&output=embed",
};

// Google Analytics 4 — set REACT_APP_GA_MEASUREMENT_ID in frontend/.env to activate.
// Until then nothing is tracked.
export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || "";

// ── WhatsApp ──────────────────────────────────────────────────────────────────
export const waLink = (message) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const GENERAL_MESSAGE =
  "Hi SurfKarnataka! I'd like to know more about surfing sessions in Gokarna. Please share the available sessions and pricing.";

export const bookingMessage = (experienceName) =>
  `Hi SurfKarnataka! I'm interested in booking a ${experienceName.toLowerCase()} session in Gokarna.\n\nPreferred date:\nNumber of participants:\n\nPlease share the available sessions and pricing.`;

// ── Images (swap these URLs to replace photos site-wide) ─────────────────────
export const img = (base, w = 1600) => `${base}&w=${w}&auto=format&fit=crop`;

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1532484468512-fd9df0aa70f4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxzdXJmZXIlMjBzdW5zZXQlMjB3YXZlfGVufDB8fHx8MTc5MzQ4ODMxNnww&ixlib=rb-4.1.0&q=85",
  aboutInstructor: "https://images.unsplash.com/photo-1489633908075-1c914e8ee5ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxzdXJmZXIlMjBwb3J0cmFpdCUyMGJlYWNofGVufDB8fHx8MTc5MzQ4ODMxNnww&ixlib=rb-4.1.0&q=85",
  locationGokarna: "https://images.unsplash.com/photo-1771945484043-3a17fbf57a4b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHx0cm9waWNhbCUyMGJlYWNoJTIwYWVyaWFsJTIwY29hc3RhbHxlbnwwfHx8fDE3OTM0ODgzMTZ8MA&ixlib=rb-4.1.0&q=85",
  introSide: "https://images.unsplash.com/photo-1590767433546-94047b163cd9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDB8fHx8MTc5MzQ4OTQ1Nnww&ixlib=rb-4.1.0&q=85",
};

// ── Surfing experiences (editable offerings) ─────────────────────────────────
// Fields left null are shown as "being finalised" placeholders — replace with
// confirmed business details when available.
export const EXPERIENCES = [
  {
    id: "beginner",
    name: "Beginner Surfing",
    short: "Your very first wave, with an instructor beside you the whole way.",
    description:
      "Never touched a surfboard? This is where it starts. We begin on the sand with the basics, then move into gentle, forgiving waves where your instructor stays right beside you until you're standing and riding on your own.",
    image:
      "https://images.unsplash.com/photo-1607429289259-456053385f53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHRvJTIwc3VyZnxlbnwwfHx8fDE3OTM0ODgzMTZ8MA&ixlib=rb-4.1.0&q=85",
    alt: "Beginner surfer practising on a soft board in gentle Gokarna waves",
    level: "No experience needed",
    duration: null,
    price: null,
    includes: [],
    requirements: [],
    times: [],
  },
  {
    id: "intermediate",
    name: "Intermediate Surfing",
    short: "You can stand. Now learn to read waves and ride them properly.",
    description:
      "For surfers who already pop up with confidence and want more: paddling out back, positioning, wave selection, turning and building real control on the face of the wave.",
    image:
      "https://images.unsplash.com/photo-1597382048067-7923725a1524?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxsZWFybmluZyUyMHRvJTIwc3VyZnxlbnwwfHx8fDE3OTM0ODgzMTZ8MA&ixlib=rb-4.1.0&q=85",
    alt: "Intermediate surfer riding along the face of a clean wave",
    level: "Comfortable standing on green or white waves",
    duration: null,
    price: null,
    includes: [],
    requirements: [],
    times: [],
  },
  {
    id: "private",
    name: "Private Surfing Sessions",
    short: "One instructor, one surfer — a session shaped entirely around you.",
    description:
      "A private session gives you the instructor's full attention: your pace, your goals, your waves. Ideal if you want to progress quickly, prefer learning alone, or have something specific to work on.",
    image:
      "https://images.unsplash.com/photo-1502933691298-84fc14542831?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHw0fHxsZWFybmluZyUyMHRvJTIwc3VyZnxlbnwwfHx8fDE3OTM0ODgzMTZ8MA&ixlib=rb-4.1.0&q=85",
    alt: "One-to-one surf coaching session in the ocean",
    level: "All levels",
    duration: null,
    price: null,
    includes: [],
    requirements: [],
    times: [],
  },
  {
    id: "group",
    name: "Group Surfing Sessions",
    short: "Learn together — friends, family or fellow travellers on the same waves.",
    description:
      "Bring your people. Group sessions keep the energy high and the memories shared, with instruction for everyone in the water. Great for friends, couples, families and solo travellers who want company.",
    image:
      "https://images.unsplash.com/photo-1745594151310-d771b97211cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxzdXJmYm9hcmQlMjBzYW5kJTIwYmVhY2h8ZW58MHx8fHwxNzkzNDg4MzE2fDA&ixlib=rb-4.1.0&q=85",
    alt: "Group of surfers heading to the ocean with their boards",
    level: "All levels",
    duration: null,
    price: null,
    includes: [],
    requirements: [],
    times: [],
  },
];

// ── Learning journey (illustrative) ──────────────────────────────────────────
export const LEARNING_JOURNEY = [
  {
    title: "Introduction & basic surfing concepts",
    text: "Meet your instructor, get comfortable, and understand what a session looks like from beach to wave.",
  },
  {
    title: "Understanding the surfboard & the ocean",
    text: "Learn the parts of the board, how waves form, and how to read the water before you enter it.",
  },
  {
    title: "Paddling & positioning",
    text: "Where to lie, how to paddle efficiently, and where to wait for the right wave.",
  },
  {
    title: "The pop-up technique",
    text: "Practise the jump from lying to standing on the sand until it becomes muscle memory.",
  },
  {
    title: "Into the water — guided practice",
    text: "Time to surf. Your instructor stays close while you catch real waves and put it all together.",
  },
];

// ── Why SurfKarnataka ─────────────────────────────────────────────────────────
export const HIGHLIGHTS = [
  {
    title: "Learn at Your Own Pace",
    text: "No rushing, no pressure. Every session moves at the speed you're comfortable with.",
  },
  {
    title: "Experience Gokarna",
    text: "Karnataka's laid-back coastal town meets the open Arabian Sea — slow mornings, warm water, honest waves.",
  },
  {
    title: "Guided Surfing Sessions",
    text: "An instructor in the water with you — from your first paddle to your first proper ride.",
  },
  {
    title: "A Memorable Ocean Experience",
    text: "More than a lesson: salt water, morning light and a story you'll keep retelling.",
  },
];

// ── Gallery ───────────────────────────────────────────────────────────────────
export const GALLERY_CATEGORIES = [
  "All",
  "Surfing",
  "Surf Lessons",
  "Students",
  "Instructors",
  "Beach & Ocean",
  "Surf Lifestyle",
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1526342122811-2a9c8512023d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxzdXJmZXIlMjBvY2VhbiUyMHdhdmVzfGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "Surfer riding powerfully down the face of an ocean wave", category: "Surfing", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1498330177096-689e3fb901ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxzdXJmZXIlMjBvY2VhbiUyMHdhdmVzfGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "Large blue wave breaking near the shore", category: "Surfing", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1527731149372-fae504a1185f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxzdXJmZXIlMjBvY2VhbiUyMHdhdmVzfGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "Surfers paddling out into deep green ocean waves", category: "Surfing", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1590767433546-94047b163cd9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDB8fHx8MTc5MzQ4OTQ1Nnww&ixlib=rb-4.1.0&q=85", alt: "Surf instructor giving a lesson on the beach", category: "Surf Lessons", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1730761970652-2e45c1ab3fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDB8fHx8MTc5MzQ4OTQ1Nnww&ixlib=rb-4.1.0&q=85", alt: "Instructor helping a student balance on a surfboard in the water", category: "Surf Lessons", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1730799305374-03769d19590e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDB8fHx8MTc5MzQ4OTQ1Nnww&ixlib=rb-4.1.0&q=85", alt: "Instructor and student reviewing surf technique on the shore", category: "Surf Lessons", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1597382048067-7923725a1524?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxsZWFybmluZyUyMHRvJTIwc3VyZnxlbnwwfHx8fDE3OTM0ODk0NTV8MA&ixlib=rb-4.1.0&q=85", alt: "Student standing up on a surfboard for the first time", category: "Students", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1526485856375-9110812fbf35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxsZWFybmluZyUyMHRvJTIwc3VyZnxlbnwwfHx8fDE3OTM0ODk0NTV8MA&ixlib=rb-4.1.0&q=85", alt: "Student catching a wave in golden hour light", category: "Students", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1607429289259-456053385f53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMHRvJTIwc3VyZnxlbnwwfHx8fDE3OTM0ODk0NTV8MA&ixlib=rb-4.1.0&q=85", alt: "Beginner student practising the pop-up on a soft-top board", category: "Students", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1616641611019-0830e6383a50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwyfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHBvcnRyYWl0fGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "Surf instructor holding a board in a tropical setting", category: "Instructors", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1554757716-46f23cad3134?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwzfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHBvcnRyYWl0fGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "Instructor walking toward the ocean carrying a surfboard", category: "Instructors", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHBvcnRyYWl0fGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "Surf coach smiling on the beach", category: "Instructors", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1468413253725-0d5181091126?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGNvYXN0bGluZSUyMGJlYWNofGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "Lush tropical coastline meeting the blue ocean", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1509233725247-49e657c54213?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwyfHx0cm9waWNhbCUyMGNvYXN0bGluZSUyMGJlYWNofGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "Palm trees framing a quiet tropical beach", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1544945582-052b29cd29e4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzN8MHwxfHNlYXJjaHwzfHx0cm9waWNhbCUyMGNvYXN0bGluZSUyMGJlYWNofGVufDB8fHx8MTc5MzQ4OTQ1NXww&ixlib=rb-4.1.0&q=85", alt: "White sand shoreline under clear skies", category: "Beach & Ocean", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1555979864-7a8f9b4fddf8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwYWVyaWFsJTIwY29hc3RhbHxlbnwwfHx8fDE3OTM0ODgzMTZ8MA&ixlib=rb-4.1.0&q=85", alt: "Bird's-eye view of waves rolling onto the beach", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1551304885-7d8cc4ac849e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHxzdXJmYm9hcmQlMjBzYW5kJTIwYmVhY2h8ZW58MHx8fHwxNzkzNDg4MzE2fDA&ixlib=rb-4.1.0&q=85", alt: "Surfboard resting on the sand at sunset", category: "Surf Lifestyle", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1589819798346-1ab9a611a315?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwxfHxzdXJmYm9hcmQlMjBzYW5kJTIwYmVhY2h8ZW58MHx8fHwxNzkzNDg4MzE2fDA&ixlib=rb-4.1.0&q=85", alt: "Surfer walking along the beach with a board", category: "Surf Lifestyle", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1669574273770-4bf874c5896d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwyfHxzdXJmYm9hcmQlMjBvbiUyMHNhbmQlMjBsaWZlc3R5bGV8ZW58MHx8fHwxNzkzNDg5NDU1fDA&ixlib=rb-4.1.0&q=85", alt: "Surfer carrying a board along the shoreline at sunset", category: "Surf Lifestyle", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1551304885-277107370841?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxzdXJmYm9hcmQlMjBvbiUyMHNhbmQlMjBsaWZlc3R5bGV8ZW58MHx8fHwxNzkzNDg5NDU1fDA&ixlib=rb-4.1.0&q=85", alt: "Classic white surfboard resting on warm sand", category: "Surf Lifestyle", ratio: "portrait" },
];

// ── Reviews ───────────────────────────────────────────────────────────────────
// Paste genuine Google reviews here ({ name, text }) and they will appear
// automatically. Empty → the site shows a "Find us on Google" button instead.
export const REVIEWS = [];

// ── Instructors ───────────────────────────────────────────────────────────────
// Add real instructor profiles here ({ name, bio, experience, photo, alt }).
// No invented names or credentials — empty until the business supplies them.
export const INSTRUCTORS = [];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Surf Lessons", to: "/surf-lessons" },
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export const MARQUEE_ITEMS = [
  "Surfing in Gokarna",
  "Beginner Friendly",
  "Private Sessions",
  "Group Sessions",
  "Karnataka Coast",
  "Arabian Sea",
];
