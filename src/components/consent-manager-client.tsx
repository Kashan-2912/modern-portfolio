"use client"

import {
  ConsentManagerDialog,
  ConsentManagerProvider,
  ClientSideOptionsProvider,
  CookieBanner,
} from "@c15t/nextjs/client"
import posthog from "posthog-js"

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