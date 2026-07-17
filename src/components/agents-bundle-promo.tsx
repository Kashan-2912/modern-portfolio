"use client"

import { forwardRef, useEffect, useState } from "react"
import { XIcon } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import Image from "next/image"

import { cn } from "@/lib/utils"

const GUMROAD_URL = "https://kashan162.gumroad.com/l/oqltt"

const STATS = [
  { value: "290+", label: "Workflows" },
  { value: "50+", label: "Platforms" },
  { value: "100s", label: "Hours saved" },
  { value: "1-click", label: "Import to n8n" },
] as const

type StickyChatPillProps = {
  isOpen: boolean
  showShimmer?: boolean
  onClick: () => void
  label?: string
  className?: string
}

/** Exact Clarity RCM sticky-chat-pill DOM + classes. */
export const StickyChatPill = forwardRef<
  HTMLButtonElement,
  StickyChatPillProps
>(function StickyChatPill(
  {
    isOpen,
    showShimmer = false,
    onClick,
    label = "Agents Bundle",
    className,
  },
  ref
) {
  const shimmer = showShimmer && !isOpen

  return (
    <button
      ref={ref}
      type="button"
      data-sticky-chat-pill
      data-shimmer-active={shimmer ? "true" : "false"}
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls="agents-bundle-panel"
      aria-label={label}
      className={cn(
        "pointer-events-auto relative z-10 flex cursor-pointer items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-[14px] text-[15px] leading-none font-semibold tracking-[-0.2px] text-black transition-all hover:border-[#D1D5DB] md:px-7 md:py-[16px] md:text-[16px] dark:border-zinc-700 dark:bg-black dark:text-white dark:hover:border-zinc-500",
        shimmer
          ? "sticky-chat-pill--shimmer"
          : "shadow-[0_2px_6px_rgba(10,10,10,0.08),0_8px_24px_rgba(10,10,10,0.12)] hover:shadow-[0_3px_8px_rgba(10,10,10,0.10),0_12px_30px_rgba(10,10,10,0.16)]",
        className
      )}
    >
      {shimmer ? (
        <span
          aria-hidden
          className="sticky-chat-pill-shimmer-ring pointer-events-none"
        />
      ) : null}
      <svg
        width="16"
        height="16"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-[1] shrink-0 text-[#ff2d00]"
        aria-hidden
      >
        <path
          d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z"
          fill="currentColor"
        />
      </svg>
      <span className="relative z-[1]">{label}</span>
    </button>
  )
})

function StickyChatPillCta({
  href,
  label = "Get the Agents Bundle",
  className,
}: {
  href: string
  label?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-sticky-chat-pill
      data-shimmer-active="true"
      aria-label={label}
      className={cn(
        "pointer-events-auto relative z-10 flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-[14px] text-[15px] leading-none font-semibold tracking-[-0.2px] text-black transition-all hover:border-[#D1D5DB] md:px-7 md:py-[16px] md:text-[16px] dark:border-zinc-700 dark:bg-black dark:text-white dark:hover:border-zinc-500",
        "sticky-chat-pill--shimmer",
        className
      )}
    >
      <span
        aria-hidden
        className="sticky-chat-pill-shimmer-ring pointer-events-none"
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-[1] shrink-0 text-[#ff2d00]"
        aria-hidden
      >
        <path
          d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5L7 1Z"
          fill="currentColor"
        />
      </svg>
      <span className="relative z-[1]">{label}</span>
    </a>
  )
}

export function AgentsBundlePromo({
  className,
}: {
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <div
      className={cn(
        "pointer-events-none fixed top-[calc(4.5rem+env(safe-area-inset-top,0px))] right-3 z-[70] block sm:right-8",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {open ? (
          <motion.div
            key="panel"
            id="agents-bundle-panel"
            role="dialog"
            aria-label="Ultimate Agents Bundle for Agencies"
            initial={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.92, y: -12 }
            }
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={
              reducedMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 0.94, y: -8 }
            }
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 28,
              mass: 0.85,
            }}
            className="pointer-events-auto w-[min(100vw-1.5rem,22rem)] origin-top-right overflow-hidden rounded-2xl border border-[#E8EAED] bg-white shadow-[0_2px_4px_rgba(13,17,23,0.04),0_8px_32px_rgba(13,17,23,0.08),0_32px_64px_-24px_rgba(13,17,23,0.10)] dark:border-zinc-700 dark:bg-zinc-950"
          >
            <div className="relative">
              <Image
                src="/promos/agents-bundle-cover.png"
                alt="Workflow Automation Bundle — Digital Transform Suite"
                width={704}
                height={560}
                className="h-48 w-full object-cover object-top sm:h-56"
                priority
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute top-2.5 right-2.5 flex size-8 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
                aria-label="Close promo"
              >
                <XIcon className="size-4" />
              </button>
            </div>

            <div className="space-y-4 p-4 sm:p-5">
              <div className="space-y-2">
                <h2 className="text-[1.35rem] leading-[1.15] font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                  Ultimate Agents Bundle{" "}
                  <em className="font-serif font-semibold text-[#ff2d00] italic">
                    for Agencies
                  </em>
                </h2>
                <p className="text-[0.8125rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Stop building automations from scratch. Import{" "}
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                    battle-tested AI agent workflows
                  </span>{" "}
                  and ship client projects in hours—not weeks.
                </p>
              </div>

              <dl className="grid grid-cols-2 gap-2">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-zinc-200/90 bg-white/70 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900/70"
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-base font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                      {stat.value}
                    </dd>
                    <p className="text-[0.6875rem] font-medium text-zinc-500 dark:text-zinc-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </dl>

              <StickyChatPillCta href={GUMROAD_URL} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="trigger"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 26,
            }}
            className="pointer-events-auto"
          >
            <StickyChatPill
              isOpen={false}
              showShimmer
              onClick={() => setOpen(true)}
              label="Agents Bundle"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
