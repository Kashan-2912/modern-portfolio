import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "svype",
    companyName: "Svype",
    companyLogo: "/experience-logo/svype-logo.png",
    companyWebsite: "https://svype.net/",
    positions: [
      {
        id: "1",
        title: "Junior Software Engineer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Redesigned and revamped [Serene Heights Nathia Gali](https://sereneheightsnathiagali.com/), a luxury winter resort website.
- Developed [Serene Heights Lahore](https://sereneheightslahore.com/) from Figma designs — a 19-storey mixed-use commercial development site.
- Working with Next.js, React, Node.js, Python, AI Agents, AI Automation (n8n), RAG, LLMs, and AI Development.`,
        skills: [
          "Next.js",
          "React",
          "Node.js",
          "Python",
          "AI Agents",
          "n8n",
          "RAG",
          "LLMs",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "sybrid",
    companyName: "Sybrid Private Limited",
    companyLogo: "/experience-logo/sybrid-logo.png",
    companyWebsite: "https://www.sybrid.com/",
    positions: [
      {
        id: "1",
        title: "Full Stack Intern",
        employmentPeriod: {
          start: "2024",
          end: "2025",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Worked on a production-grade app using ReactJS, MantineUI, Formik, Yup and Redux state management.
- Built fully responsive Sell and Purchase screens with different UIs for small vs large devices.
- Integrated NestJS backend by calling API endpoints in close collaboration with the backend team.
- Project live at [Kissan360](https://kissan360.vercel.app/).`,
        skills: [
          "React",
          "MantineUI",
          "Formik",
          "Yup",
          "Redux",
          "NestJS",
        ],
      },
    ],
  },
  {
    id: "devsinz",
    companyName: "Devsinz",
    companyWebsite:
      "https://www.linkedin.com/company/devsinz-intern-connect",
    positions: [
      {
        id: "1",
        title: "Frontend Web Developer",
        employmentPeriod: {
          start: "2024",
          end: "2024",
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Worked on building an e-LMS for students and teachers called Learnify.
- Learnify is a comprehensive e-LMS platform with course creation, real-time analytics, interactive quizzes, notification system and certification tracking.
- Built with a mobile-responsive design, intuitive interface, and robust features.`,
        skills: [
          "React",
          "Next.js",
          "Tailwind CSS",
          "REST APIs",
        ],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    companyLogo: "/experience-logo/upwork-logo.png",
    positions: [
      {
        id: "2",
        title: "Full Stack Web Developer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Worked on a wide range of projects on Upwork — from fixing TailwindCSS styling issues and optimizing Vercel deployments to building full-stack web applications.
- Proficient in React, Next.js, AI integrations, Firebase, and RESTful APIs.
- Experienced in turning designs into responsive, high-performance UIs.
- Successfully delivered projects to 3+ satisfied clients with consistent positive feedback and repeat collaboration.`,
        skills: [
          "React",
          "Next.js",
          "Firebase",
          "REST APIs",
          "AI Integrations",
          "Vercel",
          "Tailwind CSS",
        ],
      },
      {
        id: "1",
        title: "Website Designer & Developer",
        employmentPeriod: {
          start: "2024",
          end: "2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description: `- Worked as bug fixer on 2 client projects on Fiverr — fixed styling issues, optimized UIs, and implemented new features.
- Converted 1 React project completely to Next.js for performance optimization and SEO accessibility.
- Successfully delivered projects to 2+ satisfied clients with consistent positive feedback.`,
        skills: [
          "React",
          "Next.js",
          "CSS",
          "Bug Fixing",
          "SEO",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
]
