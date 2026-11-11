import type { Metadata } from "next"
import { Jost, IBM_Plex_Mono } from "next/font/google"

import "./globals.css"
import { Providers } from "@/components/providers"
import { TopBanner } from "@/components/shared/top-banner"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { cn } from "@/lib/utils"

const fontSans = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: {
    default: "Nove · Café espresso at home",
    template: "%s · Nove",
  },
  description:
    "Espresso machines made in Turin, Italy. 9 bar, 58 mm commercial portafilter, heated to brewing temperature in 40 seconds.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        fontSans.variable,
        "font-sans"
      )}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Providers>
          <TopBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
