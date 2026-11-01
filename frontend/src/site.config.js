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
  hero: "https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxzdXJmaW5nJTIwcG9wdXB8ZW58MHx8fHwxNzkzNTE1NzI2fDA&ixlib=rb-4.1.0&q=85",
  aboutInstructor: "https://images.unsplash.com/photo-1616641611019-0830e6383a50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHBvcnRyYWl0fGVufDB8fHx8MTc5MzUxNTcyMXww&ixlib=rb-4.1.0&q=85",
  locationGokarna: "https://images.unsplash.com/photo-1780552564315-7b63e8c01fda?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHx0cm9waWNhbCUyMGJlYWNoJTIwYWVyaWFsJTIwaW5kaWF8ZW58MHx8fHwxNzkzNTE1NzIxfDA&ixlib=rb-4.1.0&q=85",
  introSide: "https://images.unsplash.com/photo-1580331522941-58d0812c6d81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxzdXJmJTIwbGVzc29uJTIwd2FybXxlbnwwfHx8fDE3OTM1MTU3MjF8MA&ixlib=rb-4.1.0&q=85",
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
      "https://images.unsplash.com/photo-1505937059382-aab581fd88c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxzdXJmJTIwbGVzc29uJTIwd2FybXxlbnwwfHx8fDE3OTM1MTU3MjF8MA&ixlib=rb-4.1.0&q=85",
    alt: "Beginner surfer riding gentle whitewash in warm Gokarna water",
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
      "https://images.unsplash.com/photo-1523606772308-64a28db0ef2c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwyfHxzdXJmZXIlMjBib2FyZHNob3J0cyUyMGFjdGlvbnxlbnwwfHx8fDE3OTM1MTU3MjZ8MA&ixlib=rb-4.1.0&q=85",
    alt: "Intermediate surfer carving on an open wave face in boardshorts",
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
      "https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxzdXJmJTIwbGVzc29uJTIwd2FybXxlbnwwfHx8fDE3OTM1MTU3MjF8MA&ixlib=rb-4.1.0&q=85",
    alt: "Instructor and student walking into the water for a private surf session",
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
      "https://images.unsplash.com/photo-1458592918806-99f9cfbe41fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHw0fHxncm91cCUyMHN1cmZlcnMlMjBiZWFjaHxlbnwwfHx8fDE3OTM1MTU3MjF8MA&ixlib=rb-4.1.0&q=85",
    alt: "Group of friends carrying surfboards along the beach at golden hour",
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
  { src: "https://images.unsplash.com/photo-1530870110042-98b2cb110834?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODh8MHwxfHNlYXJjaHwxfHxzdXJmZXIlMjBib2FyZHNob3J0cyUyMGFjdGlvbnxlbnwwfHx8fDE3OTM1MTU3MjZ8MA&ixlib=rb-4.1.0&q=85", alt: "Surfer riding a warm, sunny barrel wave", category: "Surfing", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1638911886915-a3f2aca0975d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwzfHxzdXJmZXIlMjBib2FyZHNob3J0cyUyMHdhdmV8ZW58MHx8fHwxNzkzNTE1NzIxfDA&ixlib=rb-4.1.0&q=85", alt: "Stylish turn on an open ocean wave", category: "Surfing", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1609869846227-9eeb3a869f8c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzN8MHwxfHNlYXJjaHwxfHxzdXJmZXIlMjBib2FyZHNob3J0cyUyMHdhdmV8ZW58MHx8fHwxNzkzNTE1NzIxfDA&ixlib=rb-4.1.0&q=85", alt: "Surfer in action on a tropical wave", category: "Surfing", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1517699418036-fb5d179fef0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwyfHxzdXJmJTIwbGVzc29uJTIwd2FybXxlbnwwfHx8fDE3OTM1MTU3MjF8MA&ixlib=rb-4.1.0&q=85", alt: "Surf lesson setup on a sunny beach", category: "Surf Lessons", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1526342256246-b67e94be5c79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwzfHxzdXJmJTIwY29hY2hpbmclMjB3YXJtfGVufDB8fHx8MTc5MzUxNTcyNnww&ixlib=rb-4.1.0&q=85", alt: "Instructor teaching a student in the water", category: "Surf Lessons", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxzdXJmJTIwbGVzc29uJTIwd2FybXxlbnwwfHx8fDE3OTM1MTU3MjF8MA&ixlib=rb-4.1.0&q=85", alt: "Instructor pushing a student into a gentle beginner wave", category: "Surf Lessons", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1526342122811-2a9c8512023d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxzdXJmaW5nJTIwcG9wdXB8ZW58MHx8fHwxNzkzNTE1NzI2fDA&ixlib=rb-4.1.0&q=85", alt: "Student successfully popping up on a learner board", category: "Students", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1559627755-42212e5c5fdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxzdXJmaW5nJTIwcG9wdXB8ZW58MHx8fHwxNzkzNTE1NzI2fDA&ixlib=rb-4.1.0&q=85", alt: "Student paddling out through clear water", category: "Students", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1580331522941-58d0812c6d81?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHxzdXJmJTIwbGVzc29uJTIwd2FybXxlbnwwfHx8fDE3OTM1MTU3MjF8MA&ixlib=rb-4.1.0&q=85", alt: "Student walking up the sunny beach after a lesson", category: "Students", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1616641611019-0830e6383a50?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwyfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHBvcnRyYWl0fGVufDB8fHx8MTc5MzUxNTcyMXww&ixlib=rb-4.1.0&q=85", alt: "Surf instructor holding a board in warm light", category: "Instructors", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1554757716-46f23cad3134?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwzfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHBvcnRyYWl0fGVufDB8fHx8MTc5MzUxNTcyMXww&ixlib=rb-4.1.0&q=85", alt: "Instructor heading to the surf with a board", category: "Instructors", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA0MTJ8MHwxfHNlYXJjaHwxfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMHBvcnRyYWl0fGVufDB8fHx8MTc5MzUxNTcyMXww&ixlib=rb-4.1.0&q=85", alt: "Candid portrait of a surf coach in the sun", category: "Instructors", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1594057121927-df7ee084e53d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwYWVyaWFsJTIwaW5kaWF8ZW58MHx8fHwxNzkzNTE1NzIxfDA&ixlib=rb-4.1.0&q=85", alt: "Lush palms lining the tropical coast", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1780552363150-804bba12d272?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHx0cm9waWNhbCUyMGJlYWNoJTIwYWVyaWFsJTIwaW5kaWF8ZW58MHx8fHwxNzkzNTE1NzIxfDA&ixlib=rb-4.1.0&q=85", alt: "Aerial of a turquoise hidden cove on the coast", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1533090215800-bdf63af68c8d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHx0cm9waWNhbCUyMGNvYXN0bGluZSUyMHBhbG0lMjB0cmVlfGVufDB8fHx8MTc5MzUxNTcyNnww&ixlib=rb-4.1.0&q=85", alt: "Palm-fringed shoreline in golden light", category: "Beach & Ocean", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1664133178758-6df14ac28392?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHw0fHx0cm9waWNhbCUyMGNvYXN0bGluZSUyMHBhbG0lMjB0cmVlfGVufDB8fHx8MTc5MzUxNTcyNnww&ixlib=rb-4.1.0&q=85", alt: "Moody palm trees over the coastline", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxzdXJmYm9hcmQlMjBzYW5kJTIwc3Vuc2V0fGVufDB8fHx8MTc5MzUxNTcyMXww&ixlib=rb-4.1.0&q=85", alt: "Surfboard resting on warm sand at golden hour", category: "Surf Lifestyle", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1583790803390-56c0b919f7d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHw0fHxzdXJmYm9hcmQlMjBzYW5kJTIwc3Vuc2V0fGVufDB8fHx8MTc5MzUxNTcyMXww&ixlib=rb-4.1.0&q=85", alt: "Surfboard detail glowing at golden hour", category: "Surf Lifestyle", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1636353990836-b20b196dd41e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxzdXJmYm9hcmQlMjBzYW5kJTIwc3Vuc2V0fGVufDB8fHx8MTc5MzUxNTcyMXww&ixlib=rb-4.1.0&q=85", alt: "Silhouetted surfer walking along the beach at sunset", category: "Surf Lifestyle", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1514896818-d778f2fac2e5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxzdXJmZXIlMjBzdW5zZXQlMjB3YXZlfGVufDB8fHx8MTc5MzUxNTcyMXww&ixlib=rb-4.1.0&q=85", alt: "Wide sunset view over the waves from the beach", category: "Surf Lifestyle", ratio: "portrait" },
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
  { label: "Lessons", to: "/lessons" },
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
