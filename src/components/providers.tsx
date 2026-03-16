"use client"

import { AppProgressProvider } from "@bprogress/next"
import { Provider as JotaiProvider } from "jotai"
import { ThemeProvider } from "next-themes"

import { TooltipProvider as BaseTooltipProvider } from "@/components/base/ui/tooltip"
import { TooltipProvider as RadixTooltipProvider } from "@/components/ui/tooltip"

import { ConsentManagerClient } from "./consent-manager-client"
import { Toaster } from "./ui/sonner"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <JotaiProvider>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        enableColorScheme
        storageKey="theme"
        defaultTheme="system"
        attribute="class"
      >
        <ConsentManagerClient>
          <AppProgressProvider
            color="var(--foreground)"
            height="2px"
            delay={500}
            options={{ showSpinner: false }}
          >
            <BaseTooltipProvider>
              <RadixTooltipProvider>{children}</RadixTooltipProvider>
            </BaseTooltipProvider>
          </AppProgressProvider>

          <Toaster position="top-center" />
        </ConsentManagerClient>
      </ThemeProvider>
    </JotaiProvider>
  )
}
