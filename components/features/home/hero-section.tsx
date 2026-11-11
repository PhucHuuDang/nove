import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

import { HeroFloatingCard } from "@/components/features/home/hero-floating-card"

const AVATARS = [
  { src: "/images/home/reviews/faces/giulia.jpg", alt: "Giulia" },
  { src: "/images/home/reviews/faces/tom.jpg", alt: "Tom" },
  { src: "/images/home/reviews/faces/sarah.jpg", alt: "Sarah" },
]

export function HeroSection() {
  return (
    <section className="gutter-3 py-3 md:gutter-5 md:py-5">
      <div className="relative flex flex-col gap-2 rounded-3xl bg-card p-2 md:min-h-[clamp(40rem,calc(100svh-2.5rem),72rem)] md:gap-3 md:p-3 lg:min-h-[clamp(44rem,calc(100svh-2.5rem),72rem)] xl:min-h-[clamp(44rem,calc(100svh-2.5rem),72rem)]">
        {/* Navigation placement slot for header positioning */}
        <div className="absolute inset-x-0 top-0 z-10 px-7 pt-7 md:px-11 md:pt-11 lg:px-13 lg:pt-13">
          <div
            aria-hidden="true"
            data-nav-slot="true"
            data-tone="light"
            data-bag="always"
            className="h-11 shrink-0"
          />
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid flex-1 gap-2 md:grid-cols-[11fr_9fr] md:gap-3 lg:grid-cols-[3fr_2fr] xl:grid-cols-[11fr_9fr]">
          {/* Left Column Card */}
          <div className="flex min-w-0 flex-col rounded-2xl bg-popover px-5 pt-28 pb-6 md:px-8 md:pt-36 md:pb-8 lg:px-10 lg:pb-10">
            <div className="mt-auto">
              <h1 className="text-4xl leading-tight font-medium tracking-tight md:text-5xl md:leading-tight xl:text-6xl xl:leading-tight">
                Café espresso
                <br className="hidden sm:inline" /> at home,
                <br />
                <span className="text-muted-foreground">loved by</span>{" "}
                <span className="inline-flex translate-y-[0.06em] items-center rounded-full bg-popover p-[0.08em] align-baseline shadow-md">
                  {AVATARS.map((avatar) => (
                    <span
                      key={avatar.src}
                      className="relative -ms-[0.18em] size-[0.7em] overflow-hidden rounded-full ring-2 ring-popover first:ms-0"
                    >
                      <Image
                        src={avatar.src}
                        alt={avatar.alt}
                        fill
                        sizes="3rem"
                        className="object-cover"
                      />
                    </span>
                  ))}
                </span>{" "}
                1,284 owners.
              </h1>

              <p className="mt-5 max-w-md text-base text-pretty text-muted-foreground md:text-lg">
                One steel and walnut machine in three models, from a barista and
                an engineer in Turin. From $650.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="group/button inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-accent bg-clip-padding px-8 text-base font-medium whitespace-nowrap text-accent-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-accent/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
                >
                  Shop the machines
                </Link>
                <Link
                  href="/shop#compare"
                  className="group/button inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-secondary bg-clip-padding px-8 text-base font-medium whitespace-nowrap text-secondary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
                >
                  Compare the models
                </Link>
              </div>

              <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:mt-12">
                <span
                  className="flex items-center gap-0.5"
                  aria-label="4.9 out of 5"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-3.5 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </span>
                <span className="figures">4.9 from 1,284 reviews</span>
                <span
                  aria-hidden="true"
                  className="text-muted-foreground max-sm:hidden"
                >
                  ·
                </span>
                <span className="text-muted-foreground">
                  Swap the model within 30 days
                </span>
              </p>
            </div>
          </div>

          {/* Right Column Card: Video + Floating Model Card */}
          <div className="relative isolate min-h-[26rem] overflow-hidden rounded-2xl md:min-h-0">
            <video
              aria-hidden="true"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/videos/hero-poster.jpg"
              className="pointer-events-none absolute inset-0 -z-10 size-full object-cover"
            >
              <source src="/videos/hero.webm" type="video/webm" />
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            <HeroFloatingCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export const HomeHeroSection = HeroSection
