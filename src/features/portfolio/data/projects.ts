import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "vizioroom",
    title: "VizioRoom",
    logo: "/project-logo/vizio.svg",
    period: {
      start: "December 2024",
      end: "February 2025",
    },
    link: "https://vizio-room-designer.vercel.app/",
    slug: "vizioroom",
    cover: "/project-showcase/vizioroom-showcase.png",
    github: "https://github.com/Kashan-2912/ai-interior-designer",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Clerk",
      "Replicate",
      "NeonDB",
      "Appwrite",
      "Paddle Payments",
    ],
    description: `- AI-powered Interior Designer web app
- Users upload a screenshot of any room and receive AI-redesigned results based on custom pre-defined options
- Integrated Replicate API for AI image generation
- Clerk authentication, Appwrite storage, NeonDB for data persistence
- Paddle for subscription-based payments`,
    isExpanded: true,
  },
  {
    id: "smartflex",
    title: "SmartFlex",
    logo: "/project-logo/smartflex.png",
    period: {
      start: "June 2025",
      end: "September 2025",
    },
    link: "http://smartflex-xi.vercel.app/",
    slug: "smartflex",
    cover: "/project-showcase/smartflex-showcase.png",
    github: "https://github.com/Kashan-2912/smartflex",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Google Gemini",
      "Convex",
      "Clerk",
    ],
    description: `- AI-powered fitness training app
- Generates personalized workout and diet plans in real-time through voice interaction via VapiAI
- Built with Vapi AI for voice and Google Gemini for intelligence
- Convex for real-time backend, Clerk for auth
- Completely free to use`,
  },
  {
    id: "gitquest",
    title: "GitQuest",
    logo: "/project-logo/gitquest.png",
    period: {
      start: "January 2026",
      end: "Present",
    },
    link: "https://gitquest.is-a.software/",
    slug: "gitquest",
    cover: "/project-showcase/gitquest-showcase.png",
    github: "https://github.com/Kashan-2912/gitquest",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Google Gemini",
      "GitHub",
      "Vercel",
    ],
    description: `- Transforms any GitHub profile into a unique D&D-inspired fantasy creature
- Powered by Google Gemini AI
- Creatures scale from CR 0 to CR 20+ based on contribution history
- Stunning 3D card effects and a global leaderboard
- Embeddable GitHub README widget to showcase your creature`,
  },
  {
    id: "share-pad",
    title: "Share Pad",
    logo: "/project-logo/sharepad.png",
    period: {
      start: "February 2026",
      end: "March 2026",
    },
    link: "https://share-mypad.vercel.app/",
    slug: "sharepad",
    cover: "/project-showcase/sharepad-showcase.png",
    github: "https://github.com/Kashan-2912/textarea-share",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    description: `- Modern, ephemeral collaborative notepad that lives entirely in the URL
- Content compressed with LZ-String and stored in the URL hash — no database, no login
- Rich text editing via Slate.js
- One-click export to .txt, .md, or .html
- Premium dark-first UI with electric border animations and magnetic cursor effects`,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    logo: "/project-logo/portfolio-light.svg",
    logoDark: "/project-logo/portfolio-dark.svg",
    period: {
      start: "March 2026",
      end: "Present",
    },
    link: "https://www.itzkashan.dev/",
    slug: "portfolio",
    cover: "/project-showcase/portfolio-showcase.png",
    github: "https://github.com/Kashan-2912/modern-portfolio",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],
    description: `- Modern, responsive portfolio website
- Built with Next.js and Tailwind CSS
- Includes a dynamic testimonial marquee and GitHub contributions
- Represents my projects, experiences, education, blog rss feed and bookmarks.
- Deployed on Vercel, and DNS configured with domain.`,
  },
  {
    id: "ezyshopper",
    title: "EzyShopper",
    logo: "/project-logo/ezyshopper.png",
    period: {
      start: "November 2023",
      end: "March 2024",
    },
    link: "https://ezyshopper.vercel.app/",
    slug: "ezyshopper",
    cover: "/project-showcase/ezyshopper-showcase.png",
    github: "https://github.com/Kashan-2912/ezyshopper",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Redis",
      "Stripe",
    ],
    description: `- Full-stack MERN e-commerce application
- Redis caching for performance optimization
- Stripe payment gateway integration
- User authentication and product management
- Responsive and modern UI with Tailwind CSS`,
  },
  {
    id: "kissan360",
    title: "Kissan360",
    logo: "/project-logo/fms.png",
    period: {
      start: "June 2025",
      end: "September 2025",
    },
    link: "https://kissan360.vercel.app/",
    slug: "kissan360",
    cover: "/project-showcase/kissan360-showcase.png",
    github: "https://github.com/Kashan-2912/kissan360",
    skills: [
      "React",
      "Tailwind CSS",
      "Redux",
      "NestJS",
    ],
    description: `- Production-grade Farm Management System
- Built with ReactJS, TailwindCSS, Formik, Yup (for validation) and Redux state management
- Contains Sell and Purchase screens with responsive layouts
- Different UIs for small and large devices
- Integrated NestJS backend by calling API endpoints in collaboration with the backend team`,
  },
  {
    id: "serene-heights-lahore",
    title: "Serene Heights Lahore",
    logo: "/project-logo/serene-light.webp",
    logoDark: "/project-logo/serene-dark.webp",
    period: {
      start: "February 2026",
      end: "March 2026",
    },
    link: "https://www.sereneheightslahore.com/",
    slug: "serene-heights",
    cover: "/project-showcase/serenelahore-showcase.png",
    github: "https://github.com/Kashan-2912/serene-new-proj",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Vercel",
    ],
    description: `- Production website for a landmark 19-storey mixed-use commercial development on Gulberg Main Boulevard, Lahore
- Developed from Figma designs to a fully deployed production site
- Smooth animations with Framer Motion
- Deployed on Vercel with GoDaddy domain configuration
- Showcases building configuration, commercial floors, hotel apartments, architecture, and amenities`,
  },
  {
    id: "ava",
    title: "AVA",
    logo: "/project-logo/ava.png",
    period: {
      start: "December 2025",
      end: "March 2026",
    },
    link: "https://ava-spline-1.vercel.app/",
    slug: "ava",
    cover: "/project-showcase/ava-showcase.png",
    github: "https://github.com/Kashan-2912/ava-spline-upwork",
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Spline",
      "TypeScript",
    ],
    description: `- 24/7 AI-powered front desk voice agent
- Conversational AI that converts calls into booked revenue, day or night
- Animated Spline 3D scenes that react to voice input during calls
- Interactive 3D visual experience powered by Spline Runtime
- Built as an Upwork freelance project`,
  },
  {
    id: "clario-docs",
    title: "Clario Docs",
    logo: "/project-logo/clario.png",
    period: {
      start: "October 2024",
      end: "November 2024",
    },
    link: "https://clario-roan.vercel.app/",
    slug: "clario-docs",
    cover: "/project-showcase/clario-showcase.png",
    github: "https://github.com/Kashan-2912/clarioo",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
    ],
    description: `- Transform API specs into beautiful documentation
- Upload OpenAPI or Postman collections for AI-powered docs generation
- Supabase backend with Framer Motion animations
- OpenRouter API for AI processing, MDX version control editor.
- No coding required`,
  },
  {
    id: "artlab",
    title: "ArtLab",
    logo: "/project-logo/artlab.png",
    period: {
      start: "April 2024",
      end: "May 2024",
    },
    link: "https://artlab-seven.vercel.app/",
    slug: "artlab",
    cover: "/project-showcase/artlab-showcase.png",
    github: "https://github.com/Kashan-2912/artlab",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Google Gemini",
      "MongoDB",
      "Clerk",
    ],
    description: `- AI-powered art generation platform
- Google Gemini integration for creative AI capabilities
- MongoDB for data storage, Clerk for authentication`,
  },
  {
    id: "learnify",
    title: "Learnify",
    logo: "/project-logo/learnify.png",
    period: {
      start: "June 2023",
      end: "August 2023",
    },
    link: "https://learnify-skillup.netlify.app/",
    slug: "learnify",
    cover: "/project-showcase/learnify-showcase.png",
    github: "https://github.com/Kashan-2912/Learnify-Skillup",
    skills: [
      "React",
      "Tailwind CSS",
      "Firebase",
    ],
    description: `- Comprehensive e-LMS platform for learners and administrators
- Course creation, real-time analytics, interactive quizzes
- Notification system and certification tracking
- Firebase backend for real-time data`,
  },
  {
    id: "moodify",
    title: "Moodify",
    logo: "/project-logo/moodify.png",
    period: {
      start: "October 2023",
      end: "November 2023",
    },
    link: "https://moodify-moods.netlify.app/",
    slug: "moodify",
    cover: "/project-showcase/moodify-showcase.png",
    github: "https://github.com/Kashan-2912/Moodify",
    skills: [
      "Next.js",
      "React",
      "Firebase",
      "Tailwind CSS",
    ],
    description: `- Mood tracking and journaling application
- Firebase for real-time data storage
- Clean, responsive UI with Tailwind CSS`,
  },
  {
    id: "filmpire",
    title: "Filmpire",
    logo: "/project-logo/filmpire.png",
    period: {
      start: "February 2023",
      end: "March 2023",
    },
    link: "https://filmpire-movies-app.netlify.app/",
    slug: "filmpire",
    cover: "/project-showcase/filmpire-showcase.png",
    github: "https://github.com/Kashan-2912/Filmpire-Movie-App",
    skills: [
      "React",
      "Redux",
      "JavaScript",
    ],
    description: `- Feature-rich movie discovery application
- TMDB API integration for real-time movie data
- Redux state management
- Material UI for polished component design`,
  },
  {
    id: "cyberfiction-clone",
    title: "Cyberfiction Clone",
    logo: "/project-logo/cyberfiction.png",
    period: {
      start: "May 2023",
      end: "June 2023",
    },
    link: "https://cyberfiction-clone1.netlify.app/",
    slug: "cyberfiction-clone",
    cover: "/project-showcase/cyberfiction-showcase.png",
    github: "https://github.com/Kashan-2912/Cyberfiction-clone",
    skills: [
      "HTML5",
      "JavaScript",
      "CSS3",
      "GSAP",
    ],
    description: `- Scroll-based animation website clone
- GSAP-powered smooth animations and transitions
- Vanilla HTML/CSS/JavaScript implementation`,
  },
]
