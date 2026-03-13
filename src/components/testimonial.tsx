import Image from "next/image"

import { cn } from "@/lib/utils"

export function Testimonial({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex h-full flex-col gap-4 p-4", className)} {...props} />
  )
}

export function TestimonialQuote({
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn("flex-1 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export function TestimonialAuthor({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-3", className)}
      {...props}
    />
  )
}

export function TestimonialAvatar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("relative size-8 shrink-0", className)}
      {...props}
    />
  )
}

export function TestimonialAvatarImg({
  src,
  alt,
  className,
  ...props
}: React.ComponentProps<typeof Image>) {
  if (!src) {
    return (
      <div
        className={cn(
          "flex size-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground",
          className
        )}
      >
        {typeof alt === "string" ? alt.charAt(0) : "?"}
      </div>
    )
  }

  return (
    <Image
      className={cn("rounded-full", className)}
      src={src}
      alt={alt}
      width={32}
      height={32}
      unoptimized
      {...props}
    />
  )
}

export function TestimonialAvatarRing({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "absolute inset-0 rounded-full ring-1 ring-border",
        className
      )}
      {...props}
    />
  )
}

export function TestimonialAuthorName({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-sm font-medium leading-tight", className)}
      {...props}
    />
  )
}

export function TestimonialAuthorTagline({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

export function TestimonialVerifiedBadge() {
  return null
}
