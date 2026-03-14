import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function NotFound({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-[calc(100svh-5.5rem)] flex-col items-center justify-center",
        className
      )}
    >
      <svg
        className="h-28 w-full text-foreground"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 320"
        fill="none"
      >
        <path
          d="M0 0h64v320H0zM192 0h64v64h-64zM128 64h64v64h-64zM64 128h64v64h-64zM128 192h64v64h-64zM192 256h64v64h-64zM384 0h64v64h-64zM448 0h64v64h-64zM320 64h64v64h-64zM512 64h64v64h-64zM320 128h256v64h-256zM320 192h64v64h-64zM512 192h64v64h-64zM320 256h64v64h-64zM512 256h64v64h-64z"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <h1 className="my-6 text-8xl font-medium tracking-tighter tabular-nums">
        404
      </h1>

      <Button asChild>
        <Link href="/">
          Go to Home
          <ArrowRightIcon />
        </Link>
      </Button>
    </div>
  )
}
