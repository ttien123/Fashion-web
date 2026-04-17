import { Heart } from "lucide-react"

import { cn } from "@/lib/utils"

export type TestimonialCardProps = {
  quote: string
  author: string
  image: string
  imageAlt: string
  rotation: "rotated-card-1" | "rotated-card-2" | "rotated-card-3"
  accent?: "pink" | "peach" | "mint"
}

const WASHI: Record<NonNullable<TestimonialCardProps["accent"]>, string> = {
  pink: "washi-pink",
  peach: "washi-peach",
  mint: "washi-mint",
}

export function TestimonialCard({
  quote,
  author,
  image,
  imageAlt,
  rotation,
  accent = "pink",
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative w-full max-w-[300px] bg-white p-4 pb-14 shadow-2xl shadow-pink-200/40 transition-all duration-500 hover:rotate-0 hover:-translate-y-2 hover:shadow-pink-300/60",
        rotation
      )}
    >
      <span
        aria-hidden
        className={cn(
          "washi -top-3 left-1/2 -translate-x-1/2 -rotate-3",
          WASHI[accent]
        )}
      />
      <div className="relative mb-4 aspect-square overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="size-full object-cover grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
        <Heart className="absolute top-2 right-2 size-6 fill-[oklch(0.72_0.22_350)] stroke-white drop-shadow-md animate-twinkle" />
      </div>
      <p className="text-center font-headline text-sm italic leading-relaxed text-[oklch(0.36_0.14_340)]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-script text-2xl font-bold text-[oklch(0.6_0.22_355)]">
        {author}
      </p>
    </div>
  )
}
