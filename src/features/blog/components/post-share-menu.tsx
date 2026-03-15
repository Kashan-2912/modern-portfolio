"use client"

import { ShareMenu } from "@/components/share-menu"

export function PostShareMenu({ title, url }: { title: string; url: string }) {
  return <ShareMenu title={title} url={url} />
}
