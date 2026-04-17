export type CategoryCardProps = {
  name: string
  itemCount: string
  image: string
  imageAlt: string
  accent?: "pink" | "lilac" | "peach" | "mint" | "butter"
}

const ACCENT_STYLES: Record<NonNullable<CategoryCardProps["accent"]>, string> = {
  pink: "from-[oklch(0.82_0.18_350)] to-[oklch(0.88_0.12_350)]",
  lilac: "from-[oklch(0.8_0.14_305)] to-[oklch(0.88_0.1_305)]",
  peach: "from-[oklch(0.86_0.13_55)] to-[oklch(0.92_0.08_55)]",
  mint: "from-[oklch(0.88_0.1_165)] to-[oklch(0.93_0.07_165)]",
  butter: "from-[oklch(0.93_0.1_95)] to-[oklch(0.96_0.06_95)]",
}

const DOT_COLOR: Record<NonNullable<CategoryCardProps["accent"]>, string> = {
  pink: "bg-[oklch(0.68_0.24_355)]",
  lilac: "bg-[oklch(0.65_0.2_305)]",
  peach: "bg-[oklch(0.68_0.2_55)]",
  mint: "bg-[oklch(0.6_0.15_165)]",
  butter: "bg-[oklch(0.7_0.18_95)]",
}

export function CategoryCard({
  name,
  itemCount,
  image,
  imageAlt,
  accent = "pink",
}: CategoryCardProps) {
  return (
    <div className="group relative flex-shrink-0">
      <div
        aria-hidden
        className={`absolute -inset-1 -z-10 rounded-[32px] bg-gradient-to-br ${ACCENT_STYLES[accent]} opacity-70 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md`}
      />
      <div className="relative h-72 w-[220px] cursor-pointer overflow-hidden rounded-[28px] bg-white p-2 shadow-xl shadow-pink-200/30 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-1.5deg]">
        <div className="relative size-full overflow-hidden rounded-[22px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={imageAlt}
            className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[oklch(0.2_0.08_340/0.7)] via-transparent to-transparent"
          />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center justify-between gap-2 rounded-full bg-white/95 px-3 py-1.5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${DOT_COLOR[accent]}`} />
                <p className="font-headline text-sm font-black text-[oklch(0.36_0.14_340)]">
                  {name}
                </p>
              </div>
              <p className="text-[10px] font-semibold text-muted-foreground">
                {itemCount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
