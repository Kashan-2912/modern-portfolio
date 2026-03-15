<div align="center">

# ✦ itzkashan.dev

**A minimal, pixel-perfect developer portfolio & blog — built with obsessive attention to detail.**

[![Live Site](https://img.shields.io/badge/▸_LIVE-itzkashan.dev-000?style=for-the-badge&logo=vercel&logoColor=white)](https://itzkashan.dev)
[![Next.js](https://img.shields.io/badge/Next.js_16-000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/MIT-green?style=for-the-badge)](./LICENSE)


---

## ⚡ What Makes This Different

This isn't a template. It's a **hand-crafted, performance-obsessed** portfolio built from scratch with a design language inspired by terminal UIs, engineering blueprints, and pixel-grid aesthetics.

- 🔲 **Blueprint Grid System** — Double-line borders, crosshatch separators, and screen-line patterns create a distinctive engineering aesthetic
- 🌗 **Flawless Dark/Light Mode** — Every element, every border, every shadow — meticulously tuned for both themes
- ⚡ **Static-First Architecture** — `force-static` routes, cached data readers, zero client-side data fetching where possible
- 📱 **Responsive to the Pixel** — From 320px mobile to ultrawide — every breakpoint is intentional

---

## 🧩 Sections

| Section | Description |
|---|---|
| **Profile Header** | Avatar with electric glow effect, verified badge, name pronunciation, job title, vCard download |
| **Overview** | Flip-text sentences, location with live timezone, contact info |
| **About** | Rich markdown bio with highlighted stats |
| **Testimonials** | Auto-scrolling marquee of recommendations |
| **GitHub Contributions** | Live contribution graph pulled from GitHub |
| **Tech Stack** | 50+ technology icons organized in a visual grid |
| **Projects** | **Dual-view** (list ≡ / grid ⊞ toggle) with collapsible details, theme-aware logos, ongoing indicators, and full MDX detail pages at `/projects/[slug]` |
| **Experience** | Timeline with company logos, animated ping for current roles |
| **Education** | Academic history with institution details |
| **Blog** | MDX-powered blog with syntax highlighting, TOC, keyboard navigation, and RSS feed |
| **Certifications** | Certificate cards with credential links |
| **Bookmarks** | Curated developer reads and resources |

---

## 🛠 Tech Stack

<div align="center">

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS v4, CSS Variables, `tw-animate-css` |
| **UI** | Radix UI, Base UI, Lucide Icons, `cmdk` (⌘K search) |
| **Content** | MDX (`next-mdx-remote`), `fumadocs-core` (TOC), `gray-matter` |
| **Markdown** | `react-markdown`, `remark-gfm`, `rehype-pretty-code` (Shiki) |
| **Animation** | Motion (Framer Motion), `react-fast-marquee` |
| **State** | Jotai, nuqs (URL state) |
| **Forms** | React Hook Form + Zod |
| **Analytics** | PostHog, OpenPanel |
| **Fonts** | Geist Sans & Geist Mono |
| **Media** | Sharp (image optimization), `react-medium-image-zoom` |
| **SEO** | JSON-LD (`schema-dts`), RSS feed, OG images, sitemap |
| **Deploy** | Vercel (Edge, Static) |

</div>

---

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- pnpm 9+

### Installation

```bash
# Clone
git clone https://github.com/Kashan-2912/modern-portfolio.git
cd modern-portfolio

# Install
pnpm install

# Run
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — that's it.

### Environment Variables

Create a `.env` file with your configuration:

```env
APP_URL=http://localhost:3000

# Analytics (optional)
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_OPENPANEL_CLIENT_ID=
```

---

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   └── (app)/
│       ├── page.tsx              # Homepage — all sections
│       └── (docs)/
│           ├── blog/[slug]/      # Blog post pages (MDX)
│           └── projects/[slug]/  # Project detail pages (MDX)
├── components/                   # Shared UI components
│   ├── base/                     # Primitives (collapsible, dialog, etc.)
│   ├── ui/                       # Design system (button, tag, prose)
│   ├── mdx.tsx                   # MDX renderer
│   └── markdown.tsx              # Markdown renderer
├── config/                       # Site config, nav, constants
├── features/
│   ├── portfolio/
│   │   ├── components/           # All portfolio sections
│   │   ├── data/                 # Projects, experience, education, certs, etc.
│   │   └── types/                # TypeScript types
│   ├── blog/                     # Blog components
│   ├── doc/                      # Document reader (MDX content)
│   │   └── content/
│   │       ├── blog/             # Blog MDX files
│   │       └── projects/         # Project MDX files
│   └── project/                  # Project document reader
└── lib/                          # Utilities (cn, rehype plugins)
```

---

## ✨ Design Details

### The Grid Language

Every section is wrapped in the signature **panel system** — double-line borders on the sides, crosshatch separators between sections, and `screen-line-before` / `screen-line-after` pseudo-elements creating the blueprint grid effect.

### Typography

- **Geist Sans** — Primary typeface for headings and body
- **Geist Mono** — Code blocks, technical details, metadata

### Color System

- CSS custom properties for all colors — instantly themeable
- `--color-edge` for grid lines, `--color-accent` for highlights
- HSL-based palette that shifts cleanly between light and dark

### Animations

- **Flip text** — Rotating taglines in the overview
- **Testimonial marquee** — Infinite scroll with pause-on-hover
- **Ping indicators** — Animated dots for current job / ongoing projects
- **Collapsible sections** — Smooth expand/collapse with chevron rotation

---

## 📝 Content Management

All content is **data-driven** — edit TypeScript files, not components:

| Content | File |
|---|---|
| Personal info | `src/features/portfolio/data/user.ts` |
| Projects | `src/features/portfolio/data/projects.ts` |
| Experience | `src/features/portfolio/data/experiences.ts` |
| Education | `src/features/portfolio/data/education.ts` |
| Certifications | `src/features/portfolio/data/certifications.ts` |
| Bookmarks | `src/features/portfolio/data/bookmarks.ts` |
| Blog posts | `src/features/doc/content/blog/*.mdx` |
| Project pages | `src/features/doc/content/projects/*.mdx` |

---

## 📄 License

MIT © [M. Kashan Ashraf](https://itzkashan.dev)

---

<div align="center">

**Built with obsessive attention to detail.**

[Live Site](https://itzkashan.dev) · [LinkedIn](https://www.linkedin.com/in/muhammad-kashan-ashraf) · [GitHub](https://github.com/Kashan-2912)

</div>
