import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "http://localhost:3000",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
]

export const X_USERNAME = "@itzKashan2912"
export const GITHUB_USERNAME = "Kashan-2912"
export const SOURCE_CODE_GITHUB_REPO = "Kashan-2912/modern-portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Kashan-2912/modern-portfolio"

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source: "kashanashraf-portfolio",
}
