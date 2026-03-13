import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Muhammad Kashan",
  lastName: "Ashraf",
  displayName: "M. Kashan Ashraf",
  username: "kashanashraf",
  gender: "male",
  pronouns: "he/him",
  bio: "Developer. Building things on the web.",
  flipSentences: [
    "Developer. Building things on the web.",
    "Software Engineer",
    "Open Source Enthusiast",
  ],
  address: "Islamabad, Pakistan",
  phoneNumber: "+923458032912",
  email: "mkashan2912@gmail.com",
  website: "http://localhost:3000",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Software Engineer",
      company: "Self-Employed",
      website: "http://localhost:3000",
      experienceId: "",
    },
  ],
  about: `
- **Software Engineer** passionate about building high-quality web applications.
- Skilled in **Next.js**, **React**, **TypeScript**, and modern front-end technologies.
- Passionate about exploring new technologies and turning ideas into reality.
`,
  avatar: "/pic.png",
  ogImage: "/pic.png",
  namePronunciationUrl: "/voice.mp3",
  timeZone: "Asia/Karachi",
  keywords: ["developer", "portfolio", "software engineer"],
  dateCreated: "2026-03-13", // YYYY-MM-DD
}
