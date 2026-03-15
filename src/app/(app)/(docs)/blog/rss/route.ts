import { SITE_INFO } from "@/config/site"
import { getAllDocs } from "@/features/doc/data/documents"

export const revalidate = false
export const dynamic = "force-static"

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export function GET() {
  const allPosts = getAllDocs()

  const itemsXml = allPosts
    .map(
      (post) =>
        `<item>
          <title>${escapeXml(post.metadata.title)}</title>
          <link>${SITE_INFO.url}/blog/${post.slug}</link>
          <description>${escapeXml(post.metadata.description || "")}</description>
          <pubDate>${new Date(post.metadata.createdAt).toISOString()}</pubDate>
        </item>`
    )
    .join("\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${escapeXml(`Blog | ${SITE_INFO.name}`)}</title>
      <link>${SITE_INFO.url}</link>
      <description>${escapeXml(SITE_INFO.description)}</description>
      ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  })
}

