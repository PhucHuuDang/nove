import Image from "next/image"

import { SectionLabel } from "@/components/shared/section-label"

const BASE = "https://nove-nextjs-template.vercel.app"

export function AboutHero() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-3xl">
          <SectionLabel>About Nove</SectionLabel>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Built in Turin, Italy
          </h1>
          <p className="mt-6 text-base leading-relaxed font-light text-muted-foreground sm:text-xl">
            We spent five years repairing espresso machines in a workshop in
            Turin before building our own. We kept what matters: commercial 9
            bar pressure, standard 58 mm parts, and modular metal construction.
          </p>
        </div>

        {/* Gallery Trio */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
            <Image
              src={`${BASE}/images/home/founder-1.jpg`}
              alt="Matteo at the workbench"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
            <Image
              src={`${BASE}/images/showroom/bench.jpg`}
              alt="Assembling machines"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted sm:col-span-2 lg:col-span-1">
            <Image
              src={`${BASE}/images/home/founder-2.jpg`}
              alt="Davide testing the pressure gauge"
              fill
              sizes="(max-width: 640px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
