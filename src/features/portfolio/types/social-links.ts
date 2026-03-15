export type SocialLink = {
  /** Icon image URL (absolute or path under /public) shown beside the title. */
  icon?: string
  title: string
  /** Optional handle/username or subtitle displayed under the title. */
  subtitle?: string
  /** External profile URL opened when the item is clicked. */
  href: string
  /** Whether the link should trigger a download instead of navigating. */
  download?: boolean
}
