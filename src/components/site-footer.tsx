import { RssIcon } from "lucide-react"

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"

export function SiteFooter({
  width = "default",
}: {
  width?: "default" | "wide"
}) {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div
        data-width={width}
        className="screen-line-before mx-auto border-x border-edge pt-4 data-[width=wide]:container data-[width=default]:md:max-w-3xl"
      >
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Inspired by chanhdai design
        </p>

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          The source code is available on{" "}
          <a
            className="link transition-[color] hover:text-foreground"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://github.com/Kashan-2912"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.github className="size-4" />
              <span className="sr-only">GitHub</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://www.linkedin.com/in/muhammad-kashan-ashraf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.linkedin className="size-4" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href="https://x.com/itzKashan2912"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.x className="size-4" />
              <span className="sr-only">X</span>
            </a>

            <Separator />

            <a
              className="flex items-center text-muted-foreground transition-[color] hover:text-foreground"
              href={`${SITE_INFO.url}/rss`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RssIcon className="size-4" />
              <span className="sr-only">RSS</span>
            </a>

          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-edge", className)} {...props} />
}
