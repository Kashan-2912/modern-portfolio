import type { Testimonial } from "../types/testimonials"

/**
 * TESTIMONIALS_1: Long quotes (more than 50 characters)
 * TESTIMONIALS_2: Short quotes (50 characters or fewer)
 */

export const TESTIMONIALS_1: Testimonial[] = [
  {
    authorAvatar: "/spline-job.jpg",
    authorName: "Upwork Client",
    authorTagline: "Spline and Next.js Expert Needed",
    url: "https://www.upwork.com/freelancers/~01ec288c31651818ea#702292547842158592",
    quote:
      "Really enjoyed working together! The project was completed timely with great communication.",
    date: "2026-03-02",
  },
  {
    authorAvatar: "/fixux-job.png",
    authorName: "Upwork Client",
    authorTagline: "Fix UX For Vibe Coded App",
    url: "https://www.upwork.com/freelancers/~01ec288c31651818ea#702292547842158593",
    quote:
      "Muhammad K did a fantastic job with the UI and usability of the app. He is a good designer and has a nice eye for usability. I will definitely use him again.",
    date: "2025-08-27",
  },
  {
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    authorName: "Daniel R.",
    authorTagline: "Founder, SaaS Startup",
    url: "https://www.upwork.com/freelancers/~01ec288c31651818ea#review-saas",
    quote:
      "Kashan rebuilt our entire dashboard in Next.js and it's night and day. Page loads went from 4s to under 1s. He thinks about the user experience, not just the code. Highly recommend.",
    date: "2025-11-14",
  },
  {
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    authorName: "Sarah M.",
    authorTagline: "Product Manager @ E-commerce Co.",
    url: "https://www.upwork.com/freelancers/~01ec288c31651818ea#review-ecom",
    quote:
      "We hired Kashan for a React migration and he delivered ahead of schedule. Clean code, zero bugs in production. He even refactored parts we didn't ask for — just because he noticed they could be better.",
    date: "2025-12-03",
    style: { maxWidth: 416 },
  },
]

export const TESTIMONIALS_2: Testimonial[] = [
  {
    authorAvatar: "https://ui-avatars.com/api/?name=Vercel+Client&background=16A34A&color=fff&size=64",
    authorName: "Upwork Client",
    authorTagline: "Fix Vercel Deployment",
    url: "https://www.upwork.com/freelancers/~01ec288c31651818ea#702292547842158594",
    quote:
      "5 stars! Fast communication. Effective execution. Thank you so much!",
    date: "2025-04-02",
  },
  {
    authorAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
    authorName: "James T.",
    authorTagline: "CTO, Fintech Startup",
    url: "https://www.upwork.com/freelancers/~01ec288c31651818ea#review-fintech",
    quote: "Solid dev. Ships fast, communicates well.",
    date: "2026-01-18",
  },
  {
    authorAvatar: "https://randomuser.me/api/portraits/women/68.jpg",
    authorName: "Amira K.",
    authorTagline: "Design Lead @ Agency",
    url: "https://www.upwork.com/freelancers/~01ec288c31651818ea#review-agency",
    quote: "Pixel-perfect implementation from Figma. Will hire again.",
    date: "2026-02-09",
  },
]
