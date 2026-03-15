"use client"

import { LayoutGridIcon, LayoutListIcon } from "lucide-react"
import { useState } from "react"

import { CollapsibleList } from "@/components/collapsible-list"

import { PROJECTS } from "../../data/projects"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { ProjectCardItem } from "./project-card-item"
import { ProjectItem } from "./project-item"

export function Projects() {
  const [view, setView] = useState<"list" | "grid">("list")

  return (
    <Panel id="projects">
      <PanelHeader className="flex items-center justify-between">
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setView("list")}
            title="List View"
            className={`flex size-8 items-center justify-center rounded-md transition-colors ${
              view === "list"
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <LayoutListIcon className="size-4" />
          </button>
          <button
            onClick={() => setView("grid")}
            title="Grid View"
            className={`flex size-8 items-center justify-center rounded-md transition-colors ${
              view === "grid"
                ? "bg-accent text-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <LayoutGridIcon className="size-4" />
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
        <div className="relative pt-4">
          {/* Absolute overlay for double vertical lines (like blog) */}
          <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-edge" />
            <div className="border-l border-edge" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCardItem key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </Panel>
  )
}
