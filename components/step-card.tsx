import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type StepCardProps = {
  index: number
  title: string
  description: string
  icon: LucideIcon
  tone: "primary" | "secondary" | "tertiary" | "muted"
}

const TONE_STYLES: Record<StepCardProps["tone"], string> = {
  primary:
    "bg-gradient-to-br from-[oklch(0.88_0.15_350)] to-[oklch(0.78_0.2_355)] text-white",
  secondary:
    "bg-gradient-to-br from-[oklch(0.88_0.12_305)] to-[oklch(0.78_0.16_305)] text-white",
  tertiary:
    "bg-gradient-to-br from-[oklch(0.92_0.11_55)] to-[oklch(0.82_0.17_50)] text-[oklch(0.28_0.12_40)]",
  muted:
    "bg-gradient-to-br from-[oklch(0.92_0.1_165)] to-[oklch(0.82_0.13_170)] text-[oklch(0.28_0.12_170)]",
}

const NUMBER_STYLES: Record<StepCardProps["tone"], string> = {
  primary: "bg-[oklch(0.98_0.02_350)] text-[oklch(0.55_0.22_355)]",
  secondary: "bg-[oklch(0.98_0.02_305)] text-[oklch(0.5_0.2_305)]",
  tertiary: "bg-[oklch(0.98_0.02_55)] text-[oklch(0.5_0.18_55)]",
  muted: "bg-[oklch(0.98_0.02_165)] text-[oklch(0.4_0.16_170)]",
}

export function StepCard({
  index,
  title,
  description,
  icon: Icon,
  tone,
}: StepCardProps) {
  return (
    <div className="group relative flex flex-col items-center gap-5 text-center">
      <div
        className={cn(
          "relative flex size-28 items-center justify-center rounded-[40%_60%_55%_45%/55%_45%_60%_40%] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 animate-blob",
          TONE_STYLES[tone]
        )}
      >
        <Icon className="size-10 drop-shadow-sm" />
        <span
          className={cn(
            "absolute -top-2 -right-2 flex size-9 items-center justify-center rounded-full font-black shadow-lg ring-4 ring-background",
            NUMBER_STYLES[tone]
          )}
        >
          {index}
        </span>
      </div>
      <h3 className="font-headline text-xl font-bold text-[oklch(0.36_0.14_340)]">
        {title}
      </h3>
      <p className="max-w-[220px] text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}
