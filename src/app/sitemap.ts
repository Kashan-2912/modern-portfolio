import type { MetadataRoute } from "next"

import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"
import { getAllProjectDocs } from "@/features/project/data/project-documents"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllDocs().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.updatedAt).toISOString(),
  }))

  const projects = getAllProjectDocs().map((project) => ({
    url: `${SITE_INFO.url}/projects/${project.slug}`,
    lastModified: project.metadata.updatedAt
      ? new Date(project.metadata.updatedAt).toISOString()
      : new Date(project.metadata.createdAt).toISOString(),
  }))

  const routes = ["", "/blog", "/testimonials"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes, ...posts, ...projects]
}
