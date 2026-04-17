import {
  ArrowRight,
  RefreshCw,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Heart,
  Leaf,
  Package,
  PiggyBank,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"

import { ProductCard, type ProductCardProps } from "@/components/product-card"
import {
  CategoryCard,
  type CategoryCardProps,
} from "@/components/category-card"
import { StepCard, type StepCardProps } from "@/components/step-card"
import {
  TestimonialCard,
  type TestimonialCardProps,
} from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"

const STEPS: StepCardProps[] = [
  {
    index: 1,
    title: "Khám phá",
    description: "Tìm kiếm hàng nghìn món đồ từ tủ đồ của cộng đồng bạn bè.",
    icon: Search,
    tone: "primary",
  },
  {
    index: 2,
    title: "Đặt thuê",
    description: "Chọn ngày bạn cần và thanh toán nhanh chóng chỉ trong 30s.",
    icon: CalendarDays,
    tone: "secondary",
  },
  {
    index: 3,
    title: "Nhận đồ",
    description: "Đồ được giao tận nơi, đã giặt là sạch sẽ, thơm tho.",
    icon: Package,
    tone: "tertiary",
  },
  {
    index: 4,
    title: "Trả lại",
    description: "Gửi lại đồ sau khi dùng — phần còn lại cứ để StyleLoop lo.",
    icon: RefreshCw,
    tone: "muted",
  },
]

const CATEGORIES: CategoryCardProps[] = [
  {
    name: "Váy dự tiệc",
    itemCount: "1.2k+ món",
    accent: "pink",
    image: "/Home-Img/img-danh-muc/image-5.webp",
    imageAlt: "Elegant evening gown with sequin details",
  },
  {
    name: "Áo croptop",
    itemCount: "850+ món",
    accent: "peach",
    image: "/Home-Img/img-danh-muc/image-2.png",
    imageAlt: "Trendy crop top and denim outfit",
  },
  {
    name: "Đồ đi biển",
    itemCount: "540+ món",
    accent: "mint",
    image: "/Home-Img/img-danh-muc/image-1.webp",
    imageAlt: "Beach cover-up on sunny deck",
  },
  {
    name: "Y2K Style",
    itemCount: "2.1k+ món",
    accent: "lilac",
    image: "/Home-Img/img-danh-muc/image-3.webp",
    imageAlt: "Oversized streetwear under neon lights",
  },
  {
    name: "Vintage 90s",
    itemCount: "930+ món",
    accent: "butter",
    image: "/Home-Img/img-danh-muc/image-4.webp",
    imageAlt: "Vintage floral dress with nostalgic mood",
  },
]

const PRODUCTS: ProductCardProps[] = [
  {
    title: "Váy hai dây hoa nhí vintage",
    pricePerDay: "50.000đ/ngày",
    image: "/Home-Img/item-hot/image-1.jpg",
    imageAlt: "Dainty vintage floral sundress",
    owner: {
      handle: "@minhchau.closet",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAGoRLOSPBo3mE3p7pgOCi7aSLZ5txldb_-EKyGD20CCNLfmfPeJj1v30f7JZ0UxBY0F5ay4zlUAy-iYz_DYtLguB-GZp6zugbO0QYdvwIGjiRrwG5gghfehI5jvk6xmQ1YcX4KknQzvi6WijThtPO9fq1BirWRCe3y2P4Edgf_z8JFwcslf6qcSfRm6GeTw4wKAgHlA4-xn3HCXk74U9xcFJ9w5dGjYhphgU4JgBGioLY-N_IfeRMgNgNLIG8FYaT7ZZtpT-temE0",
      location: "Quận 3",
    },
    rating: 4.9,
    availability: { label: "Còn trống từ 20/4", tone: "success" },
  },
  {
    title: "Set Blazer Lilac hiện đại",
    pricePerDay: "120.000đ/ngày",
    image: "/Home-Img/item-hot/image-2.jpg",
    imageAlt: "Stylish lilac blazer set",
    owner: {
      handle: "@tlinh.rent",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDfbvTIEroHE2wcVmxOFXWhWUvqiy_5Xecg7lLPD2NGjwMFbajW7Wf1Cn4YUlf5HdUFFVRaUwaG8j2yoU0ipsJyOp9OwvnRNYckfVQ9aBx9OdT-6vUYFgXXwtyHyW6zo94UlEyDMih0jNnZXqm5yQzV_ZlUfB0_zQOdrpPMG8eWb_47TpS9U3rf_6PwKMmKaqfnXV4xvX57HY1tWTQoduXchV0DgLwaSxl0Tanqp1VhaCwkDW56nfAO1aXRHHTVQdxmhGbvMLVL0ng",
      location: "Đống Đa",
    },
    rating: 5.0,
    availability: { label: "Sẵn sàng ngay", tone: "success" },
  },
  {
    title: "Đầm lụa Champagne dự tiệc",
    pricePerDay: "200.000đ/ngày",
    image: "/Home-Img/item-hot/image-3.jpg",
    imageAlt: "Luxurious silk slip dress",
    owner: {
      handle: "@luxury.closet",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAuBPllCk5lo5BV6GkkonXg-w79mV3MsHOB0lq9jA7WKUL6sHBVl6l0Z-MSRN4BoJxGLnVxiSLGSc-B88PLyXfTKn2xMYnvS7UdlSwh5YGh8-8ZaslV8sV_UUGCG_itf7L1X9rKAaQyvSl-wk9rqVUyTRjG4QAK3dKfB7u18MDNEwteEKE7DZpqM26dqekVjunl51WA2LmaiLQM5oesc8cuRJpAXfyLIx5eJFIAL8uWbj1fFr9UMPRKVYljVHQ9DBt0SS1XlXEGFxo",
      location: "Quận 1",
    },
    rating: 4.8,
    availability: { label: "Chỉ còn 1 chiếc", tone: "danger" },
  },
  {
    title: "Top bướm denim Y2K",
    pricePerDay: "45.000đ/ngày",
    image: "/Home-Img/item-hot/image-4.jpg",
    imageAlt: "Y2K denim butterfly top",
    owner: {
      handle: "@genz.vibes",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCl4XYyns_UQe5aOEDQJJ2lNlk5uKew-M38lSJ6knxIVRLaQGAPWCPyRLC5dibsuM2aYz0mT61ycv5GJkvIdVfr143IH_9oHQESuvQTXeA4GnQ5rZC_8wNWM5JEokpNwJOmNLY3RGoQulBGo-zabGFloE9ZR0yZp9LccQr9erMdr6WaIFG74G6c9jbSLAgWqqb2aj40mdaLlC4vMXmE2V2fwbqkMDuSBjWeWg1DhVwacmnmFfQTgTxBDZlsY_Ay0wR31VPSsk",
      location: "Quận 7",
    },
    rating: 4.7,
    availability: { label: "Còn trống 25/4", tone: "success" },
  },
]

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    quote:
      "Rất bất ngờ về chất lượng đồ, thuê chiếc váy dự tiệc chỉ với 1/10 giá mua!",
    author: "@lyly.dang",
    accent: "pink",
    image: "/Home-Img/feedback/image-1.jpg",
    imageAlt: "User in rented floral dress",
    rotation: "rotated-card-1",
  },
  {
    quote: "StyleLoop giúp mình có thêm một khoản thu nhập thụ động mỗi tháng.",
    author: "@hoang.minh",
    accent: "mint",
    image: "/Home-Img/feedback/image-2.jpg",
    imageAlt: "Young man in rented designer jacket",
    rotation: "rotated-card-2",
  },
  {
    quote:
      "Ứng dụng cứu cánh cho những buổi đi event gấp gáp mà chưa kịp mua đồ mới!",
    author: "@trang.le",
    accent: "peach",
    image: "/Home-Img/feedback/image-3.jpg",
    imageAlt: "Trendy outfit in chic cafe",
    rotation: "rotated-card-3",
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─────────── HERO ─────────── */}
      <section className="relative flex w-full flex-col items-center overflow-hidden md:min-h-[760px] md:flex-row">
        {/* Airy teen background — subtle, refined */}
        <div
          aria-hidden
          className="bg-teen-hero pointer-events-none absolute inset-0 -z-10"
        />
        <div
          aria-hidden
          className="bg-teen-grid pointer-events-none absolute inset-0 -z-10 opacity-40"
        />

        {/* Soft blobs — only two, low saturation */}
        <div
          aria-hidden
          className="animate-float-soft pointer-events-none absolute top-20 left-[6%] z-0 hidden size-72 rounded-full bg-[oklch(0.92_0.09_350/0.45)] blur-3xl md:block"
        />
        <div
          aria-hidden
          className="animate-drift-alt pointer-events-none absolute right-[8%] bottom-[10%] z-0 hidden size-64 rounded-full bg-[oklch(0.94_0.08_55/0.45)] blur-3xl md:block"
          style={{ animationDelay: "-3s" }}
        />

        {/* Minimal scattered accents */}
        <Sparkles
          aria-hidden
          className="animate-float-soft absolute top-[14%] left-[32%] z-0 hidden size-7 fill-[oklch(0.9_0.1_305/0.7)] stroke-[oklch(0.6_0.18_305)] md:block"
          style={
            {
              ["--spin" as string]: "-10deg",
              animationDelay: "0.3s",
            } as React.CSSProperties
          }
        />
        <div
          aria-hidden
          className="animate-twinkle absolute top-[58%] left-[22%] z-0 hidden size-2.5 rounded-full bg-[oklch(0.75_0.2_350)] md:block"
          style={{ animationDelay: "0.8s" }}
        />

        <div className="relative z-10 flex w-full flex-col justify-center gap-7 px-8 py-16 md:w-1/2 md:px-14">
          {/* small badge */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[oklch(0.85_0.15_350)] bg-white/80 px-4 py-1.5 text-xs font-bold tracking-widest text-[oklch(0.5_0.2_340)] uppercase shadow-sm backdrop-blur">
            <span className="animate-twinkle size-2 rounded-full bg-[oklch(0.68_0.24_355)]" />
            Gen-Z Closet Club · Spring&apos;26
          </div>

          <div className="space-y-5">
            <h1 className="font-headline text-5xl leading-[1.05] font-bold text-[oklch(0.32_0.14_340)] md:text-[5.5rem]">
              Tủ đồ{" "}
              <span className="relative inline-block font-script text-[oklch(0.68_0.24_355)]">
                xoay vòng
                <svg
                  aria-hidden
                  viewBox="0 0 200 18"
                  className="absolute -bottom-3 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 10 Q 30 2, 60 10 T 120 10 T 198 10"
                    stroke="oklch(0.78 0.18 335)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
              <br />
              Phong cách{" "}
              <span className="shimmer-text font-headline italic">
                không đụng hàng
              </span>
              .
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-[oklch(0.48_0.12_340)]">
              Thuê đồ xinh từ tủ đồ của hội bạn cùng gu — mặc chất, tiết kiệm,
              sống chill, sống xanh. ✨ Không sở hữu, chỉ trải nghiệm.
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-3">
            {/* PRIMARY — Thuê ngay */}
            <Button className="group/btn relative h-auto cursor-pointer overflow-hidden rounded-full border-0 bg-[linear-gradient(110deg,oklch(0.68_0.24_355)_0%,oklch(0.74_0.21_335)_30%,oklch(0.76_0.18_305)_55%,oklch(0.74_0.21_335)_75%,oklch(0.68_0.24_355)_100%)] bg-[length:220%_100%] bg-left px-6 py-3 text-[15px] font-bold text-white shadow-[0_8px_22px_-10px_oklch(0.68_0.24_355/0.6),0_2px_6px_-2px_oklch(0.68_0.24_355/0.35)] ring-0 transition-[background-position,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-right hover:shadow-[0_14px_30px_-12px_oklch(0.68_0.24_355/0.75),0_4px_10px_-2px_oklch(0.68_0.24_355/0.4)] focus-visible:ring-4 focus-visible:ring-[oklch(0.85_0.15_350/0.5)] focus-visible:outline-none active:translate-y-0">
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 bottom-0 -left-[20%] z-0 w-[15%] -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-[transform,opacity] duration-[900ms] ease-out group-hover/btn:translate-x-[700%] group-hover/btn:opacity-100"
              />
              <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_1px_1.5px_oklch(0.4_0.2_350/0.3)]">
                <Sparkles className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:rotate-[190deg]" />
                Thuê ngay
                <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
              </span>
            </Button>

            {/* SECONDARY — Đăng đồ cho thuê */}
            <Button
              variant="outline"
              className="group/btn2 relative h-auto cursor-pointer overflow-hidden rounded-full border-[1.5px] border-[oklch(0.5_0.18_340)] bg-white/75 px-6 py-3 text-[15px] font-semibold shadow-[0_3px_10px_-4px_oklch(0.36_0.13_340/0.2)] backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[oklch(0.3_0.16_340)] hover:bg-white/75 hover:shadow-[0_10px_24px_-8px_oklch(0.4_0.2_340/0.4)] focus-visible:ring-4 focus-visible:ring-[oklch(0.5_0.18_340/0.3)] focus-visible:outline-none active:translate-y-0"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-[linear-gradient(105deg,oklch(0.32_0.15_340),oklch(0.45_0.2_345)_55%,oklch(0.6_0.24_350))] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn2:scale-x-100"
              />
              <span className="relative z-10 flex items-center gap-2 text-[oklch(0.32_0.14_340)] transition-colors delay-75 duration-300 group-hover/btn2:text-white">
                <Heart className="size-4 transition-[transform,fill,stroke] delay-75 duration-300 ease-out group-hover/btn2:scale-110 group-hover/btn2:fill-white group-hover/btn2:stroke-white" />
                Cho thuê đồ
                <ArrowRight className="size-4 opacity-60 transition-[transform,opacity] delay-75 duration-300 ease-out group-hover/btn2:translate-x-1 group-hover/btn2:opacity-100" />
              </span>
            </Button>
          </div>

          <div className="mt-6 grid w-fit grid-cols-3 gap-0 divide-x-2 divide-[oklch(0.88_0.12_350)] rounded-2xl bg-white/70 px-2 py-3 backdrop-blur-md">
            <div className="px-4">
              <p className="font-headline text-2xl font-black text-[oklch(0.36_0.14_340)]">
                10k+
              </p>
              <p className="text-[11px] font-medium text-muted-foreground">
                món đồ xinh
              </p>
            </div>
            <div className="px-4">
              <p className="font-headline text-2xl font-black text-[oklch(0.36_0.14_340)]">
                4.9 ⭐
              </p>
              <p className="text-[11px] font-medium text-muted-foreground">
                2,500+ reviews
              </p>
            </div>
            <div className="px-4">
              <p className="font-headline text-2xl font-black text-[oklch(0.36_0.14_340)]">
                24h
              </p>
              <p className="text-[11px] font-medium text-muted-foreground">
                giao toàn quốc
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT — collage of polaroids */}
        <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden p-8 md:h-[740px] md:w-1/2">
          <div
            aria-hidden
            className="animate-blob absolute top-10 right-10 size-96 bg-gradient-to-br from-[oklch(0.86_0.15_350)] via-[oklch(0.85_0.14_305)] to-[oklch(0.88_0.1_165)] opacity-70 blur-2xl"
          />

          <div className="relative size-full max-w-xl">
            {/* Polaroid 1 */}
            <div className="rotated-card-1 absolute top-8 left-0 z-10 h-2/3 w-2/3 overflow-hidden rounded-[4px] bg-white p-3 pb-12 shadow-2xl shadow-pink-300/40">
              <span className="washi washi-mint absolute -top-2 left-6 -rotate-6" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Home-Img/image-1.png"
                alt="Vibrant yellow dress fashion"
                className="size-full object-cover"
              />
              <div className="sticker absolute bottom-3 left-4 rounded-full bg-[oklch(0.93_0.1_95)] px-4 py-1 text-xs font-black text-[oklch(0.4_0.15_80)]">
                50k/ngày
              </div>
            </div>

            {/* Polaroid 2 */}
            <div className="rotated-card-2 absolute right-0 bottom-8 z-20 h-3/5 w-3/5 overflow-hidden rounded-[4px] bg-white p-3 pb-12 shadow-2xl shadow-purple-300/40">
              <span className="washi washi-peach absolute -top-2 right-6 rotate-6" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Home-Img/image-2.png"
                alt="Editorial streetwear model"
                className="size-full object-cover"
              />
              <div className="sticker absolute top-6 right-4 rotate-12 rounded-full bg-[oklch(0.3_0.1_340)] px-4 py-1 font-script text-sm text-white">
                thuê 3 ngày
              </div>
            </div>

            {/* Polaroid 3 — center */}
            <div className="rotated-card-3 absolute top-1/2 left-1/2 z-30 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[4px] bg-white p-3 pb-10 shadow-2xl shadow-pink-300/50">
              <span className="washi washi-pink absolute -top-2 left-1/2 -translate-x-1/2 rotate-1" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Home-Img/image-3.png"
                alt="Minimalist clothing rack"
                className="size-full object-cover"
              />
              <div className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-white/95 shadow-lg">
                <Heart className="size-5 fill-[oklch(0.68_0.24_355)] stroke-[oklch(0.6_0.22_355)]" />
              </div>
              <p className="absolute bottom-2 left-1/2 -translate-x-1/2 font-script text-lg text-[oklch(0.5_0.2_340)]">
                style soulmate ♡
              </p>
            </div>

            {/* Floating ornaments */}
            <Star
              className="animate-twinkle absolute top-4 right-10 size-10 fill-[oklch(0.85_0.14_95)] stroke-[oklch(0.65_0.18_80)]"
              style={{ animationDelay: "0.4s" }}
            />
            <Sparkles
              className="animate-float-soft absolute bottom-24 left-6 size-14 fill-[oklch(0.8_0.13_305)] stroke-[oklch(0.5_0.18_305)]"
              style={{ ["--spin" as string]: "-8deg" } as React.CSSProperties}
            />
            <Heart
              className="animate-float-soft absolute top-[55%] -right-2 size-8 fill-[oklch(0.72_0.22_350)] stroke-white"
              style={
                {
                  animationDelay: "0.9s",
                  ["--spin" as string]: "12deg",
                } as React.CSSProperties
              }
            />
            <div
              aria-hidden
              className="animate-twinkle absolute top-0 left-10 size-6 rounded-full bg-[oklch(0.88_0.1_165)]"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
        </div>
      </section>

      {/* ─────────── HOW IT WORKS ─────────── */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-[420px] max-w-5xl rounded-[80px] bg-[radial-gradient(ellipse_at_center,oklch(0.97_0.03_165/0.55),transparent_70%)]"
        />

        <div className="mb-20 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.92_0.12_165)] px-4 py-1 text-xs font-bold tracking-widest text-[oklch(0.4_0.14_170)] uppercase">
            ✦ quy trình ✦
          </span>
          <h2 className="font-headline text-4xl font-bold text-[oklch(0.32_0.14_340)] md:text-6xl">
            Cách StyleLoop{" "}
            <span className="font-script text-[oklch(0.68_0.24_355)]">
              hoạt động
            </span>
          </h2>
          <p className="max-w-md text-muted-foreground">
            Trải nghiệm thời trang tuần hoàn chỉ trong vài bước đơn giản ♻
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* dashed connector */}
          <div
            aria-hidden
            className="absolute top-14 right-[12%] left-[12%] hidden h-0.5 bg-[radial-gradient(circle,oklch(0.85_0.15_350)_1px,transparent_1.5px)] [background-size:12px_2px] md:block"
          />
          {STEPS.map((step) => (
            <StepCard key={step.index} {...step} />
          ))}
        </div>
      </section>

      {/* ─────────── MARQUEE BAND (subtle) ─────────── */}
      <div
        aria-hidden
        className="relative overflow-hidden border-y border-[oklch(0.92_0.05_340)] bg-[oklch(0.98_0.02_60)] py-2.5"
      >
        <div className="animate-marquee flex w-max items-center gap-12 text-[oklch(0.45_0.14_340)]">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-12 font-headline text-sm font-semibold tracking-wide whitespace-nowrap italic"
            >
              <span>✦ new drops mỗi tuần</span>
              <span className="text-[oklch(0.58_0.2_355)]">
                ♡ gen-z closet club
              </span>
              <span>✧ thuê 1 ngày · sống xanh</span>
              <span className="font-script text-base">style on repeat</span>
              <span>✦ không sở hữu · chỉ trải nghiệm</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─────────── CATEGORIES ─────────── */}
      <section className="relative overflow-hidden py-24">
        <div aria-hidden className="bg-mesh-sunset absolute inset-0" />
        <div
          aria-hidden
          className="animate-drift absolute -top-16 left-[12%] size-64 rounded-full bg-[oklch(0.94_0.08_350/0.35)] blur-3xl"
        />
        <div
          aria-hidden
          className="animate-drift-alt absolute right-[8%] -bottom-20 size-72 rounded-full bg-[oklch(0.94_0.07_55/0.35)] blur-3xl"
          style={{ animationDelay: "-4s" }}
        />
        <div className="relative mx-auto mb-10 flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <p className="font-script text-3xl text-[oklch(0.62_0.22_350)]">
              oh so trendy
            </p>
            <h2 className="font-headline text-4xl font-bold text-[oklch(0.32_0.14_340)] md:text-5xl">
              Danh mục đang{" "}
              <span className="relative inline-block">
                <span className="relative z-10">&ldquo;Hot&rdquo;</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-2 -z-0 h-3 bg-[oklch(0.88_0.13_350/0.8)]"
                />
              </span>
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 rounded-full border-2 border-[oklch(0.68_0.24_355)] bg-white px-5 py-2 font-bold text-[oklch(0.68_0.24_355)] transition-all hover:bg-[oklch(0.68_0.24_355)] hover:text-white"
          >
            Xem tất cả
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="relative no-scrollbar flex gap-6 overflow-x-auto px-6 pb-8">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
          {/* teaser card at end */}
          <div className="flex h-72 w-[220px] flex-shrink-0 flex-col items-center justify-center gap-3 rounded-[28px] border-2 border-dashed border-[oklch(0.68_0.24_355)] bg-white/60 p-6 text-center backdrop-blur">
            <div className="flex size-14 items-center justify-center rounded-full bg-[oklch(0.88_0.13_350)] text-white">
              <Sparkles className="size-6" />
            </div>
            <p className="font-headline text-lg font-bold text-[oklch(0.36_0.14_340)]">
              Gợi ý riêng cho bạn
            </p>
            <p className="text-xs text-muted-foreground">
              Mở khóa đề xuất từ AI stylist của StyleLoop
            </p>
          </div>
        </div>
      </section>

      {/* ─────────── HOT PRODUCTS ─────────── */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute top-20 right-6 -z-10 size-72 rounded-full bg-[oklch(0.9_0.12_305/0.3)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-20 left-10 -z-10 size-64 rounded-full bg-[oklch(0.93_0.1_95/0.4)] blur-3xl"
        />
        <Heart
          aria-hidden
          className="animate-float-soft absolute top-14 right-[45%] hidden size-6 fill-[oklch(0.72_0.22_350)] stroke-white md:block"
          style={{ ["--spin" as string]: "-10deg" } as React.CSSProperties}
        />
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-script text-3xl text-[oklch(0.6_0.22_355)]">
              this week&apos;s obsession
            </p>
            <h2 className="font-headline text-4xl font-bold text-[oklch(0.32_0.14_340)] md:text-6xl">
              Đồ hot tuần này{" "}
              <span className="animate-wiggle inline-block">✨</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full bg-[oklch(0.92_0.12_165)] px-4 py-2 text-xs font-bold text-[oklch(0.35_0.14_170)] md:flex">
              <span className="animate-twinkle size-2 rounded-full bg-[oklch(0.55_0.18_170)]" />
              cập nhật mỗi thứ hai
            </div>
            <Button
              variant="outline"
              size="icon"
              aria-label="Trang trước"
              className="size-11 rounded-full border-2 border-[oklch(0.85_0.1_340)] bg-white hover:bg-[oklch(0.94_0.06_340)]"
            >
              <ChevronLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              aria-label="Trang sau"
              className="size-11 rounded-full bg-gradient-to-r from-[oklch(0.68_0.24_355)] to-[oklch(0.75_0.18_335)] text-white shadow-lg shadow-pink-300/40"
            >
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </section>

      {/* ─────────── WHY STYLELOOP ─────────── */}
      <section className="relative overflow-hidden py-28">
        <div aria-hidden className="bg-mesh-pastel absolute inset-0" />
        <div
          aria-hidden
          className="animate-drift absolute top-10 left-[8%] size-56 rounded-full bg-[oklch(0.94_0.08_350/0.35)] blur-3xl"
        />
        <div
          aria-hidden
          className="animate-drift-alt absolute right-[10%] bottom-10 size-64 rounded-full bg-[oklch(0.95_0.07_55/0.3)] blur-3xl"
          style={{ animationDelay: "-5s" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 space-y-4 text-center">
            <p className="font-script text-3xl text-[oklch(0.6_0.22_355)]">
              why us?
            </p>
            <h2 className="font-headline text-4xl font-bold text-[oklch(0.32_0.14_340)] md:text-5xl">
              3 lý do bạn sẽ{" "}
              <span className="text-[oklch(0.68_0.24_355)]">phải lòng</span>{" "}
              StyleLoop
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[oklch(0.95_0.08_350)] to-[oklch(0.9_0.14_350)] p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-300/40">
              <div
                aria-hidden
                className="absolute -top-10 -right-10 size-40 rounded-full bg-white/40 blur-2xl"
              />
              <div className="relative flex flex-col gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-pink-300/30">
                  <PiggyBank className="size-8 text-[oklch(0.68_0.24_355)]" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-[oklch(0.3_0.12_340)]">
                  Tiết kiệm 80% 💸
                </h3>
                <p className="leading-relaxed text-[oklch(0.38_0.1_340)]">
                  Thay vì bỏ cả triệu mua đồ chỉ mặc một lần, bạn có thể thuê
                  với giá chỉ bằng 1/10 — tủ đồ xoay vòng mỗi tuần.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[oklch(0.95_0.08_165)] to-[oklch(0.9_0.12_165)] p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-300/40 md:-translate-y-4">
              <div
                aria-hidden
                className="absolute -top-10 -right-10 size-40 rounded-full bg-white/40 blur-2xl"
              />
              <div className="relative flex flex-col gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-emerald-200/50">
                  <Leaf className="size-8 text-[oklch(0.55_0.18_170)]" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-[oklch(0.28_0.12_170)]">
                  Thời trang bền vững 🌿
                </h3>
                <p className="leading-relaxed text-[oklch(0.35_0.1_170)]">
                  Kéo dài tuổi thọ cho trang phục, giảm rác thải thời trang. Mỗi
                  lần thuê là một hành động yêu hành tinh.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[oklch(0.95_0.08_55)] to-[oklch(0.9_0.14_60)] p-8 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-300/40">
              <div
                aria-hidden
                className="absolute -top-10 -right-10 size-40 rounded-full bg-white/40 blur-2xl"
              />
              <div className="relative flex flex-col gap-4">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-lg shadow-orange-200/50">
                  <ShieldCheck className="size-8 text-[oklch(0.62_0.18_55)]" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-[oklch(0.3_0.12_55)]">
                  Cộng đồng xịn sò 💖
                </h3>
                <p className="leading-relaxed text-[oklch(0.38_0.1_55)]">
                  Mọi giao dịch đều được bảo đảm. Chủ tủ và người thuê đều được
                  xác minh và đánh giá công tâm, minh bạch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-20 -z-10 mx-auto h-[380px] max-w-5xl rounded-[80px] bg-[radial-gradient(ellipse_at_center,oklch(0.96_0.05_350/0.5),transparent_70%)]"
        />

        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <p className="font-script text-3xl text-[oklch(0.6_0.22_355)]">
            diary entries
          </p>
          <h2 className="font-headline text-4xl font-bold text-[oklch(0.32_0.14_340)] md:text-5xl">
            Tiếng vang từ{" "}
            <span className="text-[oklch(0.68_0.24_355)] italic">Closet</span>
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-start">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="mx-6 mb-24 md:mx-10">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[oklch(0.78_0.2_355)] via-[oklch(0.8_0.16_325)] to-[oklch(0.82_0.14_305)] p-10 md:p-16">
          {/* noise overlay */}
          <div
            aria-hidden
            className="bg-noise absolute inset-0 opacity-20 mix-blend-overlay"
          />
          {/* blobs */}
          <div
            aria-hidden
            className="animate-blob absolute -top-20 -right-20 size-96 bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="animate-blob absolute -bottom-20 -left-20 size-80 bg-[oklch(0.92_0.12_95/0.3)] blur-3xl"
            style={{ animationDelay: "-4s" }}
          />

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-1.5 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md">
                <Sparkles className="size-3.5" />
                Cho thuê · Kiếm thêm
              </div>
              <h2 className="mb-6 font-headline text-4xl leading-[1.05] font-bold text-white md:text-6xl">
                Tủ đồ của bạn <span className="font-script">đang ngủ</span>?
                <br />
                <span className="relative inline-block italic">
                  Đánh thức nó.
                  <svg
                    aria-hidden
                    viewBox="0 0 200 18"
                    className="absolute -bottom-2 left-0 w-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 10 Q 30 2, 60 10 T 120 10 T 198 10"
                      stroke="oklch(0.93 0.1 95)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
              <p className="mb-8 max-w-md text-lg leading-relaxed text-white/90">
                Chia sẻ phong cách của bạn và nhận lại thu nhập đều đặn. Tham
                gia cộng đồng <b className="font-black">5,000+ chủ tủ</b> ngay
                hôm nay. 💌
              </p>
              <Button className="h-auto rounded-full bg-white px-9 py-6 text-lg font-black text-[oklch(0.5_0.24_355)] shadow-xl transition-all hover:scale-105 hover:bg-[oklch(0.97_0.03_90)]">
                Bắt đầu cho thuê
                <Rocket className="ml-2 size-5" />
              </Button>
            </div>

            {/* right mini closet card */}
            <div className="relative hidden h-80 md:block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={"/Home-Img/image-10.png"}
                alt="Colorful modern wardrobe"
                className="absolute inset-0 size-full rounded-[32px] object-cover shadow-2xl"
              />
              <div className="sticker absolute -top-3 -left-3 rounded-full bg-[oklch(0.93_0.1_95)] px-4 py-2 font-script text-lg text-[oklch(0.4_0.15_80)]">
                2.4tr / tháng
              </div>
              <div className="sticker absolute -right-3 bottom-8 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-[oklch(0.3_0.1_340)]">
                ✨ avg earnings
              </div>
              <div className="absolute -bottom-4 left-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-[oklch(0.3_0.1_340)] shadow-lg">
                <div className="flex -space-x-2">
                  <div className="size-6 rounded-full bg-[oklch(0.88_0.13_350)] ring-2 ring-white" />
                  <div className="size-6 rounded-full bg-[oklch(0.85_0.14_305)] ring-2 ring-white" />
                  <div className="size-6 rounded-full bg-[oklch(0.88_0.1_165)] ring-2 ring-white" />
                </div>
                5,000+ chủ tủ
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
