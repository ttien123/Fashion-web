import type { Metadata } from "next"
import { Be_Vietnam_Pro, Newsreader, Caveat } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const fontBody = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
})

const fontHeadline = Newsreader({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-headline",
})

const fontScript = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: "StyleLoop | Tủ đồ xoay vòng — Gen Z Fashion Rental",
  description:
    "Thuê đồ đẹp từ cộng đồng — mặc chất, tiết kiệm, bền vững. Không sở hữu, chỉ trải nghiệm.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontBody.variable,
        fontHeadline.variable,
        fontScript.variable,
        "font-sans"
      )}
    >
      <body className="relative min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(60%_45%_at_12%_8%,oklch(0.95_0.06_350/0.5),transparent_62%),radial-gradient(55%_40%_at_88%_90%,oklch(0.96_0.05_55/0.45),transparent_65%)]"
        />
        <div
          aria-hidden
          className="bg-noise pointer-events-none fixed inset-0 -z-10 opacity-[0.03] mix-blend-multiply"
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
