"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Bell,
  ChevronDown,
  Heart,
  Menu,
  Plus,
  Search,
  ShoppingBag,
  X,
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileShopOpen, setMobileShopOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[oklch(0.92_0.04_340)]/60 bg-background/80 backdrop-blur-xl">
      {/* Promo strip */}
      <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-[oklch(0.82_0.18_350)] via-[oklch(0.82_0.15_305)] to-[oklch(0.88_0.1_165)] px-3 py-1.5 text-center text-[11px] font-semibold text-white">
        <Heart className="size-3 shrink-0 fill-white" />
        <span className="truncate">
          Freeship cho đơn đầu tiên — dùng code
          <span className="mx-1 inline-flex rounded-full bg-white/25 px-2 py-0.5 font-black tracking-widest">
            HELLOLOOP
          </span>
        </span>
      </div>

      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between gap-2 px-4 py-3 lg:gap-4 lg:px-6">
        {/* LEFT — hamburger (mobile) + logo + nav (desktop) */}
        <div className="flex items-center gap-2 lg:gap-6">
          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="size-10 shrink-0 cursor-pointer rounded-full text-[oklch(0.42_0.1_340)] hover:bg-[oklch(0.96_0.04_340)] hover:text-[oklch(0.55_0.22_355)] lg:hidden"
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>

          <Link
            href="/"
            aria-label="StyleLoop — về trang chủ"
            onClick={closeMobile}
            className="group flex shrink-0 items-center gap-2 transition-transform duration-200 hover:scale-105"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.24_355)] to-[oklch(0.75_0.18_305)] font-script text-xl font-black text-white shadow-lg shadow-pink-300/40">
              S
            </span>
            <span className="font-headline text-xl font-black tracking-tight text-[oklch(0.36_0.14_340)] italic lg:text-2xl">
              Style<span className="text-[oklch(0.68_0.24_355)]">Loop</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
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
                              "flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200",
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

        {/* RIGHT — actions */}
        <div className="flex items-center gap-1 lg:gap-1.5">
          {/* Search — desktop inline */}
          <div className="relative hidden lg:block">
            <Input
              type="text"
              placeholder="Tìm váy, croptop, Y2K..."
              aria-label="Tìm sản phẩm"
              className="w-60 rounded-full border-[1.5px] border-[oklch(0.9_0.06_340)] bg-white/80 px-5 py-2 pr-10 text-sm shadow-sm transition-colors focus-visible:border-[oklch(0.78_0.18_350)] focus-visible:ring-2 focus-visible:ring-[oklch(0.88_0.15_350/0.4)]"
            />
            <Search className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-[oklch(0.58_0.12_340)]" />
          </div>

          {/* Search — mobile icon */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Tìm kiếm"
            className="size-10 cursor-pointer rounded-full text-[oklch(0.42_0.1_340)] hover:bg-[oklch(0.96_0.04_340)] hover:text-[oklch(0.55_0.22_355)] lg:hidden"
          >
            <Search className="size-5" />
          </Button>

          {/* Giỏ hàng */}
          <Link href="/cart" aria-label="Giỏ hàng" onClick={closeMobile}>
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

          {/* Thông báo — desktop only (tiết kiệm không gian mobile) */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Thông báo"
            className="relative hidden size-10 cursor-pointer rounded-full text-[oklch(0.42_0.1_340)] hover:bg-[oklch(0.96_0.04_340)] hover:text-[oklch(0.55_0.22_355)] lg:inline-flex"
          >
            <Bell className="size-5" />
            <span className="absolute top-2 right-2 size-2 rounded-full bg-[oklch(0.68_0.24_355)] ring-2 ring-background" />
          </Button>

          {/* CTA — Cho thuê đồ (desktop only) */}
          {/* <Link
            href="/account/owner/new"
            className="ml-1 hidden lg:inline-flex"
          >
            <Button className="h-auto cursor-pointer rounded-full bg-gradient-to-r from-[oklch(0.68_0.24_355)] to-[oklch(0.74_0.2_335)] px-4 py-2 text-[13px] font-bold text-white shadow-[0_6px_16px_-6px_oklch(0.68_0.24_355/0.55)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_oklch(0.68_0.24_355/0.7)] active:translate-y-0">
              <Plus className="size-3.5" />
              Cho thuê đồ
            </Button>
          </Link> */}

          {/* Tài khoản */}
          <Link
            href="/account"
            aria-label="Tài khoản của tôi"
            onClick={closeMobile}
            className="ml-1"
          >
            <Avatar className="size-9 cursor-pointer ring-2 ring-[oklch(0.88_0.13_350)] ring-offset-2 ring-offset-background transition-transform duration-200 hover:scale-105 lg:size-10">
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

      {/* ─── Mobile drawer ─── */}
      <div
        className={cn(
          "overflow-hidden border-t border-[oklch(0.92_0.04_340)]/60 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 pt-3 pb-5">
          {/* Mobile search */}
          <div className="relative mb-3">
            <Input
              type="text"
              placeholder="Tìm váy, croptop, Y2K..."
              aria-label="Tìm sản phẩm"
              className="w-full rounded-full border-[1.5px] border-[oklch(0.9_0.06_340)] bg-white/90 px-5 py-2.5 pr-10 text-sm shadow-sm"
            />
            <Search className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[oklch(0.58_0.12_340)]" />
          </div>

          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item)
            if (item.hasMenu) {
              return (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileShopOpen((v) => !v)}
                    aria-expanded={mobileShopOpen}
                    className={cn(
                      "flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200",
                      active
                        ? "bg-[oklch(0.95_0.07_350)] text-[oklch(0.55_0.22_355)]"
                        : "text-[oklch(0.36_0.14_340)] hover:bg-[oklch(0.96_0.05_350)]"
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "size-4 opacity-70 transition-transform duration-200",
                        mobileShopOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-[max-height,opacity] duration-300",
                      mobileShopOpen
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="mt-1 ml-2 space-y-0.5 border-l-2 border-[oklch(0.93_0.06_340)] pl-3">
                      {SHOP_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.label}
                          href={cat.href}
                          onClick={closeMobile}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[oklch(0.42_0.1_340)] transition-colors hover:bg-[oklch(0.96_0.05_350)] hover:text-[oklch(0.55_0.22_355)]"
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
                </div>
              )
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200",
                  active
                    ? "bg-[oklch(0.95_0.07_350)] text-[oklch(0.55_0.22_355)]"
                    : "text-[oklch(0.36_0.14_340)] hover:bg-[oklch(0.96_0.05_350)]"
                )}
              >
                {item.label}
              </Link>
            )
          })}

          {/* CTA — Cho thuê đồ (mobile) */}
          <Link
            href="/account/owner/new"
            onClick={closeMobile}
            className="mt-3 block"
          >
            <Button className="h-auto w-full cursor-pointer rounded-full bg-gradient-to-r from-[oklch(0.68_0.24_355)] to-[oklch(0.74_0.2_335)] px-5 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_-8px_oklch(0.68_0.24_355/0.55)]">
              <Plus className="size-4" />
              Cho thuê đồ
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
