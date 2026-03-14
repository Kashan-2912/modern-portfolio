import type { Experience } from "../types/experiences"

export const EDUCATION: Experience[] = [
  {
    id: "bscs",
    companyLogo: "/education-logo/cui_pic.png",
    companyName: "COMSATS University Islamabad",
    positions: [
      {
        id: "1",
        title: "Bachelor of Science in Computer Science",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        icon: "education",
        description: `- Relevant courses include Data Structures and Algorithms, OOP, Database Systems, Computer Networks, Software Engineering, AI, Machine Learning, Mobile App Development, and Web Technologies.
- Participated in COMPETE'24, a university-level competitive Web Development event.
- Participated in GDSC Bootcamps on Build with AI.`,
        skills: [
          "Graph Theory",
          "DAA",
          "Information Security",
          "COAL",
          "Compiler Consturction",
          "DevOps",  
          "DSA",
          "OOP",
          "AI",
          "Machine Learning",
          "Software Engineering",
          "Web Technologies",
          "System Design",
          "DBMS",
          "Computer Networks",
          "Mobile App Development",
        ],
      },
    ],
  },
  {
    id: "hssc",
    companyName: "Pre-Engineering | Intermediate (HSSC)",
    positions: [
      {
        id: "1",
        title: "Pre-Engineering | Intermediate (HSSC)",
        employmentPeriod: {
          start: "2020",
          end: "2022",
        },
        icon: "education",
        description:
          "- Secured 93% marks in the Federal Board examinations with strong academic performance in Mathematics, Physics, and Chemistry.",
      },
    ],
  },
  {
    id: "ssc",
    companyName: "Secondary School | SSC",
    positions: [
      {
        id: "1",
        title: "Secondary School | SSC",
        employmentPeriod: {
          start: "2018",
          end: "2020",
        },
        icon: "education",
        description:
          "- Achieved 96% marks in Federal Board SSC examinations with exceptional performance in Physics and Mathematics.\n- Ranked number 1 in the institution.",
      },
    ],
  },
]
