import { ChevronDownIcon } from "lucide-react"
import { Slot } from "radix-ui"
import React from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"

export function CollapsibleList<T>({
  items,
  max = 3,

  keyExtractor,
  renderItem,
}: {
  items: T[]
  max?: number

  keyExtractor?: (item: T) => string
  renderItem: (item: T) => React.ReactNode
}) {
  return (
    <Collapsible className="group/collapsible">
      {items.slice(0, max).map((item, index) => (
        <Slot.Root
          key={typeof keyExtractor === "function" ? keyExtractor(item) : index}
          className="border-b border-edge"
        >
          {renderItem(item)}
        </Slot.Root>
      ))}

      <CollapsibleContent>
        {items.slice(max).map((item, index) => (
          <Slot.Root
            key={
              typeof keyExtractor === "function"
                ? keyExtractor(item)
                : max + index
            }
            className="border-b border-edge"
          >
            {renderItem(item)}
          </Slot.Root>
        ))}
      </CollapsibleContent>

      {items.length > max && (
        <div className="flex h-12 items-center justify-center pb-px">
          <CollapsibleTrigger
            className="group/button inline-flex h-8 shrink-0 items-center justify-center gap-1 rounded-lg border border-transparent border-none bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground transition-all outline-none select-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <span className="hidden group-data-closed/collapsible:block">
              Show More
            </span>

            <span className="hidden group-data-open/collapsible:block">
              Show Less
            </span>

            <ChevronDownIcon className="group-data-open/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </div>
      )}
    </Collapsible>
  )
}
