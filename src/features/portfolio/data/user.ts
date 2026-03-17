import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Muhammad Kashan",
  lastName: "Ashraf",
  displayName: "M. Kashan Ashraf",
  username: "kashanashraf",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack Developer specializing in MERN & Next.js.",
  flipSentences: [
    "Full Stack Developer | MERN & Next.js",
    "Building AI-Powered Web Apps",
    "Open Source Contributor",
    "BS Computer Science @ COMSATS",
  ],
  address: "Islamabad, Pakistan",
  phoneNumber: "+92 345 8032912", // WhatsApp
  email: "mkashan2912@gmail.com",
  website: "https://itzkashan.dev",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Full Stack Developer",
      company: "Upwork",
      website: "https://www.upwork.com/freelancers/~01ec288c31651818ea",
      experienceId: "Upwork",
    },
  ],
  about: `
- **Full Stack Developer** with hands-on experience across the **MERN stack** and **Next.js**, specializing in building production-ready, high-performance web applications.
- Proficient in **React**, **TypeScript**, **Node.js**, **MongoDB**, **PostgreSQL**, **TailwindCSS**, and cloud services like **Firebase** and **Appwrite**; comfortable with **Redux**, **Zustand**, **Framer Motion**, and **REST/GraphQL APIs**.
- Built <strong style="color:#a8e524">7+</strong> **full-stack projects** including AI-powered apps with **Gemini AI**, **Clerk Auth**, **Convex DB**, and **Stripe** payments — from fitness trainers to e-commerce platforms.
- <strong style="color:#a8e524">3</strong> **professional internships** — delivered frontend revamps at **Svype** (improved site speed by <strong style="color:#a8e524">20%</strong>), built pixel-perfect Figma-to-code at **Sybrid**, and developed a full e-learning platform at **Devsinz**.
- Open source contributor with <strong style="color:#a8e524">40+</strong> **stars** on [GitQuest](https://gitquest.is-a.software/) and [API Doc Generator](https://clario-roan.vercel.app/); pursuing **BS Computer Science** at **COMSATS University Islamabad** (CGPA: 3.48/4.00).
`,
  avatar: "/pic.png",
  ogImage: "/pic.png",
  namePronunciationUrl: "/voice.mp3",
  timeZone: "Asia/Karachi",
  keywords: [
  // Brand keywords (low competition, you should own these)
  "kashan ashraf",
  "kashan ashraf developer",
  "kashan ashraf portfolio",

  // Niche tech combos (low competition, high relevance)
  "nextjs freelance developer pakistan",
  "mern stack developer for hire",
  "ai web app developer nextjs",
  "clerk auth stripe integration developer",
  "convex database nextjs developer",

  // Geo-specific (low competition, high local demand)
  "freelance web developer islamabad",
  "react developer pakistan for hire",
  "comsats computer science developer",

  // Service/intent-based (people searching to hire)
  "hire nextjs developer pakistan",
  "fullstack developer portfolio mern",
  "upwork nextjs freelancer",

  // Niche project types (specific use cases)
  "ai powered web applications developer",
  "saas landing page developer nextjs",
  "typescript react portfolio developer",
],

  dateCreated: "2026-03-13", // YYYY-MM-DD
}
