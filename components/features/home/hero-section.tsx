import Image from "next/image"
import Link from "next/link"

import { StarRating } from "@/components/shared/star-rating"
import { buttonVariants } from "@/components/ui/button"
import { reviewStats } from "@/lib/data/reviews"

const BASE = "https://nove-nextjs-template.vercel.app"

export function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Top badge */}
        <div className="flex flex-col items-center justify-center text-center">
          <StarRating
            rating={reviewStats.rating}
            reviewsCount={reviewStats.count}
            avatars={reviewStats.avatars}
            className="justify-center"
          />

          <h1 className="mt-6 max-w-4xl text-4xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Café espresso at home
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed font-light text-muted-foreground sm:text-lg md:text-xl">
            9 bar pressure, a 58 mm commercial portafilter, and heated to
            brewing temperature in 40 seconds. Made in Turin.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              See the machines
            </Link>
            <Link
              href="/showroom"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Visit the showroom
            </Link>
          </div>
        </div>

        {/* Center Machine Image */}
        <div className="relative mx-auto mt-12 aspect-16/10 max-w-4xl sm:mt-16">
          <Image
            src={`${BASE}/images/home/machine.png`}
            alt="Nove Duo espresso machine"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-contain"
          />
        </div>

        {/* Bottom Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 divide-y border-y border-border text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="py-4">
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              Free shipping
            </p>
            <p className="mt-1 text-sm font-medium">Europe & US, 3 to 5 days</p>
          </div>
          <div className="py-4">
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              30-day swap
            </p>
            <p className="mt-1 text-sm font-medium">Change to another model</p>
          </div>
          <div className="py-4">
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              3-year warranty
            </p>
            <p className="mt-1 text-sm font-medium">Parts & labour covered</p>
          </div>
        </div>
      </div>
    </section>
  )
}
