"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  ChevronDown,
  Heart,
  Menu,
  Plus,
  Search,
  ShoppingBag,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string
  matchPrefix?: string
  hasMenu?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/shop", matchPrefix: "/shop", hasMenu: true },
  { label: "Tin tức", href: "/news", matchPrefix: "/news" },
  { label: "Giới thiệu", href: "/about", matchPrefix: "/about" },
]

const SHOP_CATEGORIES: { label: string; href: string; tag?: string }[] = [
  { label: "Váy dự tiệc", href: "/shop?c=vay-du-tiec" },
  { label: "Áo croptop", href: "/shop?c=ao-croptop" },
  { label: "Đồ đi biển", href: "/shop?c=do-di-bien" },
  { label: "Y2K Style", href: "/shop?c=y2k", tag: "HOT" },
  { label: "Vintage 90s", href: "/shop?c=vintage" },
  { label: "Xem tất cả danh mục", href: "/shop" },
]

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/"
  if (item.matchPrefix) return pathname.startsWith(item.matchPrefix)
  return pathname === item.href
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[oklch(0.92_0.04_340)]/60 bg-background/80 backdrop-blur-xl">
      {/* Promo strip */}
      <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[oklch(0.82_0.18_350)] via-[oklch(0.82_0.15_305)] to-[oklch(0.88_0.1_165)] py-1.5 text-[11px] font-semibold text-white">
        <Heart className="size-3 fill-white" />
        Freeship toàn quốc cho đơn đầu tiên — dùng code
        <span className="mx-1 rounded-full bg-white/25 px-2 py-0.5 font-black tracking-widest">
          HELLOLOOP
        </span>
      </div>

      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-6 py-3">
        {/* LEFT — logo + nav */}
        <div className="flex items-center gap-8">
          {/* mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Menu"
            className="size-10 cursor-pointer rounded-full text-[oklch(0.42_0.1_340)] hover:bg-[oklch(0.96_0.04_340)] md:hidden"
          >
            <Menu className="size-5" />
          </Button>

          <Link
            href="/"
            aria-label="StyleLoop — về trang chủ"
            className="group flex items-center gap-2 transition-transform duration-200 hover:scale-105"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.24_355)] to-[oklch(0.75_0.18_305)] font-script text-xl font-black text-white shadow-lg shadow-pink-300/40">
              S
            </span>
            <span className="font-headline text-2xl font-black tracking-tight text-[oklch(0.36_0.14_340)] italic">
              Style<span className="text-[oklch(0.68_0.24_355)]">Loop</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item)
              return (
                <div key={item.label} className="group/nav relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200",
                      active
                        ? "bg-[oklch(0.95_0.07_350)] text-[oklch(0.55_0.22_355)]"
                        : "text-[oklch(0.42_0.1_340)] hover:bg-[oklch(0.96_0.04_340)] hover:text-[oklch(0.55_0.22_355)]"
                    )}
                  >
                    {item.label}
                    {item.hasMenu && (
                      <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-hover/nav:rotate-180" />
                    )}
                    {active && (
                      <span
                        aria-hidden
                        className="absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[oklch(0.68_0.24_355)]"
                      />
                    )}
                  </Link>

                  {/* Categories dropdown on "Cửa hàng" */}
                  {item.hasMenu && (
                    <div className="invisible absolute top-full left-0 z-50 pt-3 opacity-0 transition-[opacity,transform] duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100">
                      <div className="w-60 overflow-hidden rounded-2xl border border-[oklch(0.92_0.04_340)] bg-white/95 p-2 shadow-[0_20px_50px_-15px_oklch(0.4_0.2_340/0.3)] backdrop-blur-xl">
                        <p className="px-3 pt-1.5 pb-2 text-[11px] font-bold tracking-widest text-[oklch(0.58_0.1_340)] uppercase">
                          Danh mục
                        </p>
                        {SHOP_CATEGORIES.map((cat, idx) => (
                          <Link
                            key={cat.label}
                            href={cat.href}
                            className={cn(
                              "group/cat flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200",
                              idx === SHOP_CATEGORIES.length - 1
                                ? "mt-1 border-t border-[oklch(0.94_0.03_340)] pt-2.5 text-[oklch(0.55_0.22_355)] hover:bg-[oklch(0.96_0.05_350)]"
                                : "text-[oklch(0.36_0.14_340)] hover:bg-[oklch(0.96_0.05_350)] hover:text-[oklch(0.55_0.22_355)]"
                            )}
                          >
                            <span>{cat.label}</span>
                            {cat.tag && (
                              <span className="rounded-full bg-[oklch(0.93_0.1_95)] px-1.5 py-0.5 text-[9px] font-black tracking-wider text-[oklch(0.48_0.18_70)]">
                                {cat.tag}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT — search + actions */}
        <div className="flex items-center gap-1.5">
          {/* Search — inline on desktop */}
          <div className="relative hidden lg:block">
            <Input
              type="text"
              placeholder="Tìm váy, croptop, Y2K..."
              aria-label="Tìm sản phẩm"
              className="w-60 rounded-full border-[1.5px] border-[oklch(0.9_0.06_340)] bg-white/80 px-5 py-2 pr-10 text-sm shadow-sm transition-colors focus-visible:border-[oklch(0.78_0.18_350)] focus-visible:ring-2 focus-visible:ring-[oklch(0.88_0.15_350/0.4)]"
            />
            <Search className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[oklch(0.58_0.12_340)]" />
          </div>

          {/* Search icon — mobile */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Tìm kiếm"
            className="size-10 cursor-pointer rounded-full text-[oklch(0.42_0.1_340)] hover:bg-[oklch(0.96_0.04_340)] hover:text-[oklch(0.55_0.22_355)] lg:hidden"
          >
            <Search className="size-5" />
          </Button>

          {/* Giỏ hàng / Thanh toán thuê */}
          <Link href="/cart" aria-label="Giỏ hàng">
            <Button
              variant="ghost"
              size="icon"
              className="relative size-10 cursor-pointer rounded-full text-[oklch(0.42_0.1_340)] hover:bg-[oklch(0.96_0.04_340)] hover:text-[oklch(0.55_0.22_355)]"
            >
              <ShoppingBag className="size-5" />
              <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-[oklch(0.68_0.24_355)] text-[10px] font-black text-white ring-2 ring-background">
                2
              </span>
            </Button>
          </Link>

          {/* Thông báo */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Thông báo"
            className="relative size-10 cursor-pointer rounded-full text-[oklch(0.42_0.1_340)] hover:bg-[oklch(0.96_0.04_340)] hover:text-[oklch(0.55_0.22_355)]"
          >
            <Bell className="size-5" />
            <span className="absolute top-2 right-2 size-2 rounded-full bg-[oklch(0.68_0.24_355)] ring-2 ring-background" />
          </Button>

          {/* CTA — Cho thuê đồ */}
          <Link href="/account/owner/new" className="hidden sm:inline-flex">
            <Button className="h-auto cursor-pointer rounded-full bg-gradient-to-r from-[oklch(0.68_0.24_355)] to-[oklch(0.74_0.2_335)] px-4 py-2 text-[13px] font-bold text-white shadow-[0_6px_16px_-6px_oklch(0.68_0.24_355/0.55)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_oklch(0.68_0.24_355/0.7)] active:translate-y-0">
              <Plus className="size-3.5" />
              Cho thuê đồ
            </Button>
          </Link>

          {/* Tài khoản */}
          <Link href="/account" aria-label="Tài khoản của tôi" className="ml-1">
            <Avatar className="size-10 cursor-pointer ring-2 ring-[oklch(0.88_0.13_350)] ring-offset-2 ring-offset-background transition-transform duration-200 hover:scale-105">
              <AvatarImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBixHHYZVqp19yPuDTKIWBEwx-R0Ybt4P8_fMiXC7DRpe3bkIbn3CRPCd0_5umTgOjW8aGFajsaCoBXkibXYF_bCjlbm09lOcN00x8STitg_cKGRfCD4CUlbDwDxeT2_33FvwFiE8BKRf6OAUHB9utmGiD7dRJfkHdTBikBSmwyYiaxcENYClVESsAW_fJ537RFxg4ARXpmigdqBjezIiZiVE0fG6J_f0Md1GuoWPMb-qrjIycEwXRxue3nP4Y1EmubRx0PMiOqC78"
                alt="User avatar"
              />
              <AvatarFallback className="bg-[oklch(0.88_0.13_350)] text-[oklch(0.35_0.15_340)]">
                SL
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </nav>
    </header>
  )
}
