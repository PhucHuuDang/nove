import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { Providers } from "@/components/providers"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        "font-sans",
        geist.variable
      )}
    >
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <Providers>
          <Navbar />
          <main className="flex-1 pt-14">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
