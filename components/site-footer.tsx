import Link from "next/link"
import { Camera, Globe, Heart, Sparkles, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type FooterColumn = {
  title: string
  links: { label: string; href: string }[]
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Về StyleLoop",
    links: [
      { label: "Giới thiệu", href: "#" },
      { label: "Blog thời trang", href: "#" },
      { label: "Tuyển dụng", href: "#" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Trung tâm trợ giúp", href: "#" },
      { label: "Quy trình thuê đồ", href: "#" },
      { label: "Bảo hiểm trang phục", href: "#" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative mt-20 w-full overflow-hidden rounded-t-[48px] bg-gradient-to-br from-[oklch(0.96_0.05_350)] via-[oklch(0.95_0.06_305)] to-[oklch(0.95_0.07_55)] dark:bg-zinc-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-[20%] size-96 rounded-full bg-[oklch(0.88_0.13_350/0.4)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-[10%] size-80 rounded-full bg-[oklch(0.85_0.14_305/0.4)] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-10 py-16 font-body text-sm md:grid-cols-4">
        <div className="space-y-6">
          <Link
            href="#"
            className="flex items-center gap-2"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.24_355)] to-[oklch(0.75_0.18_305)] font-script text-xl font-black text-white shadow-lg shadow-pink-300/40">
              S
            </span>
            <span className="font-headline text-2xl font-black italic tracking-tight text-[oklch(0.36_0.14_340)]">
              Style<span className="text-[oklch(0.68_0.24_355)]">Loop</span>
            </span>
          </Link>
          <p className="max-w-xs leading-relaxed text-[oklch(0.4_0.05_340)]">
            Nền tảng thuê đồ thời trang hàng đầu dành cho Gen Z Việt Nam. Xây
            dựng cộng đồng phong cách bền vững & cùng nhau toả sáng. ✨
          </p>
          <div className="flex gap-3">
            {[Globe, Users, Camera].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                aria-label="Social"
                className="flex size-11 items-center justify-center rounded-full bg-white text-[oklch(0.6_0.22_355)] shadow-sm shadow-pink-200/50 transition-all hover:scale-110 hover:bg-[oklch(0.68_0.24_355)] hover:text-white"
              >
                <Icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title} className="flex flex-col gap-4">
            <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-[oklch(0.36_0.14_340)] uppercase">
              <Sparkles className="size-3 fill-[oklch(0.68_0.24_355)] stroke-[oklch(0.5_0.2_340)]" />
              {column.title}
            </h4>
            {column.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-[oklch(0.45_0.05_340)] transition-all hover:translate-x-1 hover:text-[oklch(0.55_0.22_355)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest text-[oklch(0.36_0.14_340)] uppercase">
            <Heart className="size-3 fill-[oklch(0.68_0.24_355)] stroke-[oklch(0.5_0.2_340)]" />
            Newsletter
          </h4>
          <p className="text-[oklch(0.45_0.05_340)]">
            Nhận ưu đãi thuê đồ hàng tuần 💌
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Email của bạn..."
              className="flex-grow rounded-full border-2 border-[oklch(0.9_0.06_340)] bg-white px-4 py-2 text-xs outline-none focus-visible:border-[oklch(0.78_0.18_350)] focus-visible:ring-2 focus-visible:ring-[oklch(0.88_0.15_350/0.3)]"
            />
            <Button
              type="submit"
              className="rounded-full bg-gradient-to-r from-[oklch(0.68_0.24_355)] to-[oklch(0.74_0.2_335)] px-5 text-xs font-black text-white shadow-md shadow-pink-300/40 transition-all hover:scale-105"
            >
              Gửi
            </Button>
          </div>
          <p className="mt-4 font-script text-lg text-[oklch(0.55_0.2_340)]">
            made with ♡ in Saigon
          </p>
          <p className="text-xs text-[oklch(0.5_0.04_340)]">
            © 2026 StyleLoop Vietnam — The Editorial Curator
          </p>
        </div>
      </div>
    </footer>
  )
}
