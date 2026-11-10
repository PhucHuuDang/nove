import Image from "next/image"

import { SectionLabel } from "@/components/shared/section-label"

const BASE = "https://nove-nextjs-template.vercel.app"

const DETAILS = [
  {
    image: `${BASE}/images/home/details-gauge-3d.png`,
    stat: "9 bar",
    title: "Less bitter coffee",
    description:
      "The same pressure commercial café machines brew at. More than 9 bar squeezes out unwanted bitterness.",
  },
  {
    image: `${BASE}/images/home/details-portafilter-3d.png`,
    stat: "58 mm",
    title: "A bigger basket",
    description:
      "A commercial 58 mm portafilter lets the coffee bed sit shallow and flat for even extraction without channelling.",
  },
  {
    image: `${BASE}/images/home/details-swatches.png`,
    stat: "2 mm steel",
    title: "Steel and walnut",
    description:
      "2 mm thick brushed stainless steel casing with an oiled Italian walnut handle that patinas gracefully with use.",
  },
  {
    image: `${BASE}/images/home/details-stopwatch.png`,
    stat: "40 seconds",
    title: "Ready in 40 seconds",
    description:
      "Precision heating element brings fresh water up to 93 °C instantly. No waiting 15 minutes before your morning espresso.",
  },
]

export function HomeDetailsSection() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Engineering</SectionLabel>
          <h2 className="mt-2 text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Built like a commercial machine, sized for a kitchen.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((detail) => (
            <div
              key={detail.stat}
              className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-border hover:shadow-xs"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted/30">
                <Image
                  src={detail.image}
                  alt={detail.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <span className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  {detail.stat}
                </span>
                <h3 className="mt-1 text-lg font-medium tracking-tight">
                  {detail.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
