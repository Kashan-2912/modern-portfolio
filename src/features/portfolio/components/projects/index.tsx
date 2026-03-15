"use client"

import { ChevronDownIcon, LayoutGridIcon, LayoutListIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/base/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/base/ui/collapsible"
import { CollapsibleList } from "@/components/collapsible-list"

import { PROJECTS } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ProjectCardItem } from "./project-card-item"
import { ProjectItem } from "./project-item"

export function Projects() {
  const [view, setView] = useState<"list" | "grid">("grid")

  return (
    <Panel id="projects">
      <PanelHeader className="flex items-center justify-between">
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>

        <div className="flex items-center rounded-full border border-edge bg-muted/30 p-1">
          <button
            onClick={() => setView("grid")}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
              view === "grid"
                ? "bg-foreground text-background shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LayoutGridIcon className="size-3.5" />
            Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
              view === "list"
                ? "bg-foreground text-background shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LayoutListIcon className="size-3.5" />
            List
          </button>
        </div>
      </PanelHeader>

      {view === "list" ? (
        <CollapsibleList
          items={PROJECTS}
          max={5}
          renderItem={(item) => <ProjectItem project={item} />}
        />
      ) : (
        <Collapsible className="group/collapsible relative pt-4">
          {/* Absolute overlay for double vertical lines (like blog) */}
          <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-edge" />
            <div className="border-l border-edge" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PROJECTS.slice(0, 6).map((project) => (
              <ProjectCardItem key={project.id} project={project} />
            ))}
          </div>

          <CollapsibleContent>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PROJECTS.slice(6).map((project) => (
                <ProjectCardItem key={project.id} project={project} />
              ))}
            </div>
          </CollapsibleContent>

          {PROJECTS.length > 6 && (
            <div className="mt-6 flex items-center justify-center pb-2">
              <CollapsibleTrigger
                render={
                  <Button className="gap-2 border-none px-3" size="sm">
                    <span className="hidden group-data-closed/collapsible:block">
                      Show More
                    </span>
                    <span className="hidden group-data-open/collapsible:block">
                      Show Less
                    </span>
                    <ChevronDownIcon className="size-4 transition-transform duration-200 group-data-open/collapsible:rotate-180" />
                  </Button>
                }
              />
            </div>
          )}
        </Collapsible>
      )}
    </Panel>
  )
}
