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
  hero: "https://images.unsplash.com/photo-1613693692851-204a395d0ec7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxzcmklMjBsYW5rYSUyMHN1cmZ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85",
  aboutInstructor: "https://images.unsplash.com/photo-1746106075291-92d791c187e6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxzdXJmJTIwaW5zdHJ1Y3RvciUyMGFzaWF8ZW58MHx8fHwxNzkzNTE4MDExfDA&ixlib=rb-4.1.0&q=85",
  locationGokarna: "https://images.unsplash.com/photo-1734120113639-0d034e85c377?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxnb2thcm5hJTIwYmVhY2h8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85",
  introSide: "https://images.unsplash.com/photo-1772791615983-c13f6e773082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxzcmklMjBsYW5rYSUyMHN1cmZ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85",
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
      "https://images.unsplash.com/photo-1645484031499-d3d7483e3e5f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBzdXJmZXJ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85",
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
      "https://images.unsplash.com/photo-1630697863146-aa9bee30ee73?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBzdXJmZXJ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85",
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
      "https://images.unsplash.com/photo-1599237109212-0e2a94156af8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxkYXJrJTIwc2tpbiUyMHN1cmZlcnxlbnwwfHx8fDE3OTM1MTgwMTF8MA&ixlib=rb-4.1.0&q=85",
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
      "https://images.unsplash.com/photo-1609365635346-524d0024684f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwyfHxnb2ElMjBzdXJmfGVufDB8fHx8MTc5MzUxODAxMXww&ixlib=rb-4.1.0&q=85",
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
  { src: "https://images.unsplash.com/photo-1520443240718-fce21901db79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwyfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMGFzaWF8ZW58MHx8fHwxNzkzNTE4MDExfDA&ixlib=rb-4.1.0&q=85", alt: "Surfer riding a warm, sunny barrel wave", category: "Surfing", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1527731149372-fae504a1185f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxzcmklMjBsYW5rYSUyMHN1cmZ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Stylish turn on an open ocean wave", category: "Surfing", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1645484013576-1bc341a4207f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHw0fHxpbmRpYSUyMHN1cmZpbmd8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Surfer in action on a tropical wave", category: "Surfing", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1599237109212-0e2a94156af8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxkYXJrJTIwc2tpbiUyMHN1cmZlcnxlbnwwfHx8fDE3OTM1MTgwMTF8MA&ixlib=rb-4.1.0&q=85", alt: "Surf lesson setup on a sunny beach", category: "Surf Lessons", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1554787990-fd7a431e3b0a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxnb2thcm5hJTIwYmVhY2h8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Instructor teaching a student in the water", category: "Surf Lessons", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1590393275627-0c48482c60e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHw0fHxnb2ElMjBzdXJmfGVufDB8fHx8MTc5MzUxODAxMXww&ixlib=rb-4.1.0&q=85", alt: "Instructor pushing a student into a gentle beginner wave", category: "Surf Lessons", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1593359652766-b77c5795bd65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxnb2thcm5hJTIwYmVhY2h8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Student successfully popping up on a learner board", category: "Students", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1668487103952-299943240474?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxzdXJmJTIwbGVzc29uJTIwYXNpYXxlbnwwfHx8fDE3OTM1MTgwMTF8MA&ixlib=rb-4.1.0&q=85", alt: "Student paddling out through clear water", category: "Students", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1772791615983-c13f6e773082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxzcmklMjBsYW5rYSUyMHN1cmZ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Student on the beach after a surf lesson in warm light", category: "Students", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1746106075291-92d791c187e6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHw0fHxzdXJmJTIwaW5zdHJ1Y3RvciUyMGFzaWF8ZW58MHx8fHwxNzkzNTE4MDExfDA&ixlib=rb-4.1.0&q=85", alt: "Surf instructor holding a board in warm light", category: "Instructors", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1599237109212-0e2a94156af8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxkYXJrJTIwc2tpbiUyMHN1cmZlcnxlbnwwfHx8fDE3OTM1MTgwMTF8MA&ixlib=rb-4.1.0&q=85", alt: "Instructor heading to the surf with a board", category: "Instructors", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1645484013523-a8f0cae92612?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBzdXJmZXJ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Candid portrait of a surf coach in the sun", category: "Instructors", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1650730005180-2c849af5d6cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwzfHxrZXJhbGElMjBjb2FzdHxlbnwwfHx8fDE3OTM1MTc5OTR8MA&ixlib=rb-4.1.0&q=85", alt: "Lush palms lining the tropical coast", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1646299588107-40fabeca07da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxrZXJhbGElMjBjb2FzdHxlbnwwfHx8fDE3OTM1MTc5OTR8MA&ixlib=rb-4.1.0&q=85", alt: "Aerial of a turquoise hidden cove on the coast", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1517053589573-a5473fadffbd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxzcmklMjBsYW5rYSUyMHN1cmZ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Palm-fringed shoreline in golden light", category: "Beach & Ocean", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1645484031373-ca139e67d7ed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODl8MHwxfHNlYXJjaHw0fHxzdXJmJTIwbGlmZXN0eWxlJTIwaW5kaWF8ZW58MHx8fHwxNzkzNTE4MDExfDA&ixlib=rb-4.1.0&q=85", alt: "Moody palm trees over the coastline", category: "Beach & Ocean", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1559140097-6e6ca59e70ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdXJmZXJ8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Surfboard resting on warm sand at golden hour", category: "Surf Lifestyle", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1586164354790-a6782cfa8794?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA4Mzl8MHwxfHNlYXJjaHwxfHxzdXJmJTIwaW5zdHJ1Y3RvciUyMGFzaWF8ZW58MHx8fHwxNzkzNTE4MDExfDA&ixlib=rb-4.1.0&q=85", alt: "Surfboard detail glowing at golden hour", category: "Surf Lifestyle", ratio: "portrait" },
  { src: "https://images.unsplash.com/photo-1621951289270-b942dc5f4320?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODh8MHwxfHNlYXJjaHwxfHxnb2ElMjBzdXJmfGVufDB8fHx8MTc5MzUxODAxMXww&ixlib=rb-4.1.0&q=85", alt: "Silhouetted surfer walking along the beach at sunset", category: "Surf Lifestyle", ratio: "landscape" },
  { src: "https://images.unsplash.com/photo-1641192936002-80e89555786f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxnb2thcm5hJTIwYmVhY2h8ZW58MHx8fHwxNzkzNTE3OTk0fDA&ixlib=rb-4.1.0&q=85", alt: "Wide sunset view over the waves from the beach", category: "Surf Lifestyle", ratio: "portrait" },
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
