import { Heart, MapPin, Sparkles, Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ProductCardProps = {
  title: string
  pricePerDay: string
  image: string
  imageAlt: string
  owner: {
    handle: string
    avatar: string
    location: string
  }
  rating: number
  availability: {
    label: string
    tone: "success" | "danger"
  }
}

export function ProductCard({
  title,
  pricePerDay,
  image,
  imageAlt,
  owner,
  rating,
  availability,
}: ProductCardProps) {
  return (
    <div className="group relative">
      <div
        aria-hidden
        className="absolute -inset-0.5 -z-10 rounded-[28px] bg-gradient-to-br from-[oklch(0.82_0.18_350)] via-[oklch(0.85_0.13_305)] to-[oklch(0.88_0.1_165)] opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative overflow-hidden rounded-[26px] bg-card ring-1 ring-foreground/5 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-pink-200/50">
        <div className="relative h-80 overflow-hidden rounded-b-[8px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[oklch(0.28_0.09_340/0.3)] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <button
            type="button"
            aria-label="Lưu vào yêu thích"
            className="group/heart absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white/85 text-[oklch(0.68_0.24_355)] shadow-lg shadow-pink-300/30 backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-[oklch(0.6_0.26_355)]"
          >
            <Heart className="size-5 transition-all group-hover/heart:fill-[oklch(0.68_0.24_355)]" />
          </button>

          <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[oklch(0.35_0.12_340)] shadow-md backdrop-blur-md">
            <Sparkles className="size-3 fill-[oklch(0.85_0.15_95)] stroke-[oklch(0.6_0.18_95)]" />
            hot pick
          </div>

          <div className="sticker absolute bottom-4 left-4 rounded-full bg-gradient-to-r from-[oklch(0.68_0.24_355)] to-[oklch(0.74_0.21_340)] px-4 py-1.5 font-black text-white">
            {pricePerDay}
          </div>
        </div>

        <div className="space-y-3 p-5">
          <h3 className="font-headline text-lg leading-tight font-bold text-[oklch(0.36_0.14_340)]">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Avatar className="size-7 ring-2 ring-[oklch(0.88_0.12_350)]">
              <AvatarImage src={owner.avatar} alt={owner.handle} />
              <AvatarFallback className="bg-[oklch(0.92_0.08_350)] text-[oklch(0.45_0.15_340)]">
                {owner.handle.slice(1, 3).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="font-semibold text-[oklch(0.35_0.1_340)]">
              {owner.handle}
            </span>
            <span className="ml-auto flex items-center gap-1 text-xs">
              <MapPin className="size-3.5" />
              {owner.location}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 rounded-full bg-[oklch(0.94_0.1_95)] px-2.5 py-1 text-sm font-black text-[oklch(0.45_0.14_70)]">
              <Star className="size-3.5 fill-[oklch(0.7_0.2_70)] stroke-[oklch(0.55_0.18_70)]" />
              <span>{rating.toFixed(1)}</span>
            </div>
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs font-bold",
                availability.tone === "success"
                  ? "bg-[oklch(0.9_0.12_165)] text-[oklch(0.38_0.14_170)]"
                  : "bg-[oklch(0.92_0.14_25)] text-[oklch(0.48_0.2_25)]"
              )}
            >
              {availability.label}
            </span>
          </div>

          <Button className="h-auto w-full translate-y-4 rounded-full bg-gradient-to-r from-[oklch(0.8_0.13_305)] to-[oklch(0.75_0.18_335)] py-3 font-black text-white opacity-0 shadow-lg shadow-purple-200/50 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:shadow-xl">
            Thuê ngay 🌸
          </Button>
        </div>
      </div>
    </div>
  )
}
