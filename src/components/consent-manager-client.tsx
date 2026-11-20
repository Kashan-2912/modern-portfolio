"use client"

import {
  ConsentBanner,
  ConsentDialog,
} from "@c15t/nextjs"
import { ConsentProvider, local } from "@c15t/react"
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
    <ConsentProvider
      options={{
        mode: local(),
        consentCategories: ["necessary", "measurement"],
        callbacks: {
          onPermissionsChanged({ snapshot }) {
            const measurementGranted =
              snapshot.effectivePermissions.measurement
            updateGtagConsent(measurementGranted ? "granted" : "denied")
            if (measurementGranted) {
              posthog.opt_in_capturing()
            } else {
              posthog.opt_out_capturing()
            }
          },
        },
      }}
    >
      <ConsentBanner />
      <ConsentDialog />
      {children}
    </ConsentProvider>
  )
}
