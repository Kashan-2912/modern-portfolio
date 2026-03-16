import posthog from "posthog-js"

// Initialize PostHog
if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_UI_HOST,
    defaults: "2026-01-30",
    cookieless_mode: "on_reject",
    opt_out_capturing_by_default: true,
  })
  posthog.has_opted_out_capturing() // Avoids accidental tracking without consent till c15t has loaded
}
