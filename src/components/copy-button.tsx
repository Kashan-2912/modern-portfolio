"use client"

import { CheckIcon, ClipboardIcon, XIcon } from "lucide-react"
import { useWebHaptics } from "web-haptics/react"

import type { CopyState } from "@/hooks/use-copy-to-clipboard"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import type { Event } from "@/lib/events"
import { trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

type CopyButtonProps = React.ComponentProps<typeof Button> & {
  text?: string | (() => string)
  event?: Event["name"]
  onCopySuccess?: (text: string) => void
  onCopyError?: (error: Error) => void
}

export function CopyButton({
  text,
  size = "icon-sm",
  event,
  onCopySuccess,
  onCopyError,
  className,
  ...props
}: CopyButtonProps) {
  const { trigger } = useWebHaptics({ debug: true })
  const { state, copy } = useCopyToClipboard({
    onCopySuccess: (copiedValue) => {
      trigger("success")
      onCopySuccess?.(copiedValue)
      if (event) {
        trackEvent({
          name: event,
          properties: { code: copiedValue },
        })
      }
    },
    onCopyError: (error) => {
      trigger("error")
      onCopyError?.(error)
    },
  })

  return (
    <Button
      variant="secondary"
      size={size}
      className={cn(className)}
      onClick={() => {
        if (text) copy(text)
      }}
      {...props}
    >
      <CopyStateIcon state={state} />
    </Button>
  )
}

export function CopyStateIcon({ state }: { state: CopyState }) {
  if (state === "done") return <CheckIcon />
  if (state === "error") return <XIcon />
  return <ClipboardIcon />
}
