import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { cache } from "react"

export type ProjectDocMetadata = {
  title: string
  description: string
  image?: string
  createdAt: string
  updatedAt?: string
}

export type ProjectDoc = {
  metadata: ProjectDocMetadata
  slug: string
  content: string
}

function parseFrontmatter(fileContent: string) {
  const file = matter(fileContent)

  return {
    metadata: file.data as ProjectDocMetadata,
    content: file.content,
  }
}

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx")
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8")
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)

  return mdxFiles.map<ProjectDoc>((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))

    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export const getAllProjectDocs = cache(() => {
  return getMDXData(
    path.join(process.cwd(), "src/features/doc/content/projects")
  ).sort(
    (a, b) =>
      new Date(b.metadata.createdAt).getTime() -
      new Date(a.metadata.createdAt).getTime()
  )
})

export function getProjectDocBySlug(slug: string) {
  return getAllProjectDocs().find((doc) => doc.slug === slug)
}
