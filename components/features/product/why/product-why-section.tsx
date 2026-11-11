import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import type { MachinePageData } from "@/lib/data/product-pages-data"

interface ProductWhySectionProps {
  why: MachinePageData["why"]
}

export function ProductWhySection({ why }: ProductWhySectionProps) {
  const { cards } = why

  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-7xl rounded-3xl bg-card p-3 md:p-5 lg:p-6">
        <ScrollReveal
          as="header"
          className="flex flex-col items-center px-3 pt-8 text-center md:pt-12"
        >
          <p className="text-sm font-medium text-muted-foreground">
            {why.eyebrow}
          </p>
          <h2
            className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            id="why-heading"
          >
            {why.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {why.lede}
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          {/* Card 1: Pressure Gauge */}
          <ScrollReveal className="rounded-3xl bg-popover p-1.5 shadow-sm">
            <div className="relative isolate flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-b from-card to-popover p-5">
              <div className="pointer-events-none absolute inset-x-5 top-5 bottom-28 flex justify-center">
                <span className="relative block aspect-square h-full">
                  <Image
                    src={cards.gauge.image}
                    alt=""
                    fill
                    sizes="16rem"
                    className="object-contain"
                  />
                </span>
              </div>
              <h3 className="relative text-xl leading-snug">
                {cards.gauge.title}
              </h3>
              <p className="relative mt-2 max-w-72 text-sm leading-relaxed text-muted-foreground">
                {cards.gauge.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Portafilter */}
          <ScrollReveal
            delayMs={60}
            className="rounded-3xl bg-popover p-1.5 shadow-sm"
          >
            <div className="relative isolate flex h-full min-h-80 flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-b from-card to-popover p-5">
              <div className="pointer-events-none absolute inset-x-5 top-5 bottom-28 flex justify-center">
                <span className="relative block aspect-square h-full">
                  <Image
                    src={cards.portafilter.image}
                    alt=""
                    fill
                    sizes="16rem"
                    className="object-contain"
                  />
                </span>
              </div>
              <h3 className="relative text-xl leading-snug">
                {cards.portafilter.title}
              </h3>
              <p className="relative mt-2 max-w-72 text-sm leading-relaxed text-muted-foreground">
                {cards.portafilter.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Tall Machine Photo Card */}
          <ScrollReveal
            delayMs={120}
            className="rounded-3xl bg-popover p-1.5 shadow-sm md:row-span-2 md:max-lg:col-span-2 lg:col-start-3 lg:row-start-1"
          >
            <div className="relative isolate flex h-full min-h-96 flex-col justify-end overflow-hidden rounded-2xl p-5 text-background">
              <Image
                src={cards.machine.image}
                alt={cards.machine.alt}
                fill
                sizes="(min-width: 64rem) 30vw, 90vw"
                className="-z-10 object-cover object-[50%_50%]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-black/60 to-transparent"
              />
              <h3 className="text-xl leading-snug text-popover">
                {cards.machine.title}
              </h3>
              <p className="mt-1 max-w-72 text-sm leading-relaxed text-popover/80">
                {cards.machine.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Card 4: Stopwatch Card */}
          <ScrollReveal
            delayMs={180}
            className="rounded-3xl bg-popover p-1.5 shadow-sm md:col-span-2"
          >
            <div className="relative isolate flex h-full min-h-96 flex-col justify-end overflow-hidden rounded-2xl bg-linear-to-b from-card to-popover p-5 md:min-h-64">
              <p
                aria-hidden="true"
                className="absolute top-4 left-5 font-mono text-7xl leading-none tracking-tighter text-foreground/10 figures"
              >
                {cards.stopwatch.stat.replace(/\D/g, "")}
                <span className="ml-1 text-xl tracking-normal">s</span>
              </p>
              <div className="pointer-events-none absolute inset-x-5 top-5 bottom-36 flex justify-center md:inset-x-auto md:right-[8%] md:bottom-5">
                <span className="relative block aspect-square h-full">
                  <Image
                    src={cards.stopwatch.image}
                    alt=""
                    fill
                    sizes="16rem"
                    className="object-contain"
                  />
                </span>
              </div>
              <h3 className="relative max-w-xs text-3xl leading-tight md:text-4xl">
                {cards.stopwatch.title}
              </h3>
              <p className="relative mt-2 max-w-72 text-sm leading-relaxed text-muted-foreground">
                {cards.stopwatch.description}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
