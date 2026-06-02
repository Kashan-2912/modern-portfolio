"use client"

import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  ClientSideOptionsProvider,
  CookieBanner,
} from "@c15t/nextjs/client"
import posthog from "posthog-js"

type GtagConsentState = "granted" | "denied"

function updateGtagConsent(state: GtagConsentState) {
  if (typeof window === "undefined") return
  const win = window as typeof window & { dataLayer?: unknown[] }
  win.dataLayer = win.dataLayer || []
  win.dataLayer.push(["consent", "update", { analytics_storage: state }])
}

export function ConsentManagerClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ConsentManagerProvider
      options={{
        mode: "offline",
        consentCategories: ["necessary", "measurement"],
      }}
    >
      <ClientSideOptionsProvider
        callbacks={{
          onConsentSet({ preferences }) {
            updateGtagConsent(preferences.measurement ? "granted" : "denied")
            if (preferences.measurement) {
              posthog.opt_in_capturing()
            } else {
              posthog.opt_out_capturing()
            }
          },
        }}
      >
        <CookieBanner />
        <ConsentManagerDialog />
        {children}
      </ClientSideOptionsProvider>
    </ConsentManagerProvider>
  )
}
