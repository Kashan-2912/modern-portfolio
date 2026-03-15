import { getTableOfContents } from "fumadocs-core/content/toc"
import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { FramedImage } from "@/components/embed"
import { InlineTOC } from "@/components/inline-toc"
import { MDX } from "@/components/mdx"
import { Button } from "@/components/ui/button"
import { Prose } from "@/components/ui/typography"
import { SITE_INFO, X_USERNAME } from "@/config/site"
import { PROJECTS } from "@/features/portfolio/data/projects"
import {
  getAllProjectDocs,
  getProjectDocBySlug,
} from "@/features/project/data/project-documents"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export async function generateStaticParams() {
  const docs = getAllProjectDocs()
  return docs.map((doc) => ({ slug: doc.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const slug = (await params).slug
  const doc = getProjectDocBySlug(slug)
  const projectInfo = PROJECTS.find((p) => p.slug === slug)

  if (!doc) {
    return notFound()
  }

  const { title, description, createdAt } = doc.metadata
  const projectUrl = `/projects/${doc.slug}`
  const image = doc.metadata.image || projectInfo?.cover
  const ogImage =
    image ||
    `/og/simple?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`

  return {
    title,
    description,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      url: projectUrl,
      type: "article",
      publishedTime: new Date(createdAt).toISOString(),
      images: {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: "summary_large_image",
      site: X_USERNAME,
      creator: X_USERNAME,
      images: [ogImage],
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string
  }>
}) {
  const slug = (await params).slug
  const doc = getProjectDocBySlug(slug)
  const projectInfo = PROJECTS.find((p) => p.slug === slug)

  if (!doc) {
    notFound()
  }

  const toc = getTableOfContents(doc.content)
  const coverImage = doc.metadata.image || projectInfo?.cover

  return (
    <>
      <div className="flex items-center justify-between p-2 pl-4">
        <Button
          className="h-7 gap-2 border-none px-0 font-mono text-muted-foreground hover:text-foreground"
          variant="link"
          size="sm"
          asChild
        >
          <Link href="/#projects">
            <ArrowLeftIcon />
            Projects
          </Link>
        </Button>
      </div>

      <div className="screen-line-before screen-line-after">
        <div
          className={cn(
            "h-8",
            "before:absolute before:-left-[100vw] before:-z-1 before:h-full before:w-[200vw]",
            "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
          )}
        />
      </div>

      <Prose className="px-4">
        <h1 className="screen-line-after text-3xl font-semibold tracking-tight">
          {doc.metadata.title}
        </h1>

        <p className="text-muted-foreground">{doc.metadata.description}</p>

        {coverImage && (
          <FramedImage
            src={coverImage}
            alt={doc.metadata.title}
            className="w-full"
          />
        )}

        <InlineTOC items={toc} />

        <div>
          <MDX code={doc.content} />
        </div>
      </Prose>

      <div className="screen-line-before h-4 w-full" />
    </>
  )
}
