"use client"

import { GithubIcon, GlobeIcon, ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Tag } from "@/components/ui/tag"
import { getSkillIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

import type { Project } from "../../types/projects"

export function ProjectCardItem({ project }: { project: Project }) {
  const isOngoing = !project.period.end || project.period.end === "Present"

  return (
    <div
      className={cn(
        "group flex flex-col gap-2 p-2 transition-[background-color] ease-out hover:bg-accent-muted",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {/* Cover Image */}
      {project.cover ? (
        <div className="relative select-none rounded-xl [&_img]:w-full [&_img]:h-auto [&_img]:object-cover [&_img]:rounded-xl">
          <Image
            src={project.cover}
            alt={project.title}
            width={1200}
            height={630}
            quality={100}
            unoptimized
          />

          <div className="pointer-events-none absolute inset-0 rounded-xl" />

          {/* {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 left-3 rounded-md bg-transparent px-3 py-1.5 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm transition-colors text-white"
            >
              Preview
            </a>
          )} */}
        </div>
      ) : (
        <div className="flex h-60 w-full items-center justify-center rounded-xl bg-muted sm:h-64">
          <span className="text-sm text-muted-foreground">No Preview</span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col gap-3 p-2">
        {/* Title + Icons */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg leading-snug font-medium text-balance">
            {project.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit Site"
                className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <GlobeIcon className="size-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                title="View on GitHub"
                className="flex size-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        {project.description && (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.description
              .replace(/^- /gm, "")
              .replace(/\n/g, ". ")
              .slice(0, 150)}
            {project.description.length > 150 ? "..." : ""}
          </p>
        )}

        {/* Tech Tags */}
        {project.skills.length > 0 && (
          <div className="space-y-1.5 object-bottom">
            <span className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
              Technologies
            </span>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  title={skill}
                >
                  {getSkillIcon(skill)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-edge pt-3">
          {isOngoing ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-info/15 px-2.5 py-0.5 text-xs font-semibold text-info">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-info opacity-50" />
                <span className="relative inline-flex size-full rounded-full bg-info" />
              </span>
              Building
            </span>
          ) : (
            <span className="inline-flex items-center rounded-full bg-[#80ae1e] px-2.5 py-0.5 text-xs font-medium text-black">
              Completed
            </span>
          )}

          {project.slug ? (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              View Details
              <ArrowUpRightIcon className="size-3.5" />
            </Link>
          ) : project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-muted-foreground transition-colors hover:text-foreground"
            >
              View Details
              <ArrowUpRightIcon className="size-3.5" />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}
