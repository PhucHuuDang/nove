import Image from "next/image"

import { SectionLabel } from "@/components/shared/section-label"

const BASE = "https://nove-nextjs-template.vercel.app"

const STEPS = [
  {
    step: "Step 01",
    title: "Bring your own beans",
    desc: "Bring the coffee you drink at home every morning. Pull shots on all three models to see how your beans taste at 9 bar.",
    image: `${BASE}/images/showroom/tasting.jpg`,
  },
  {
    step: "Step 02",
    title: "Try the grinder",
    desc: "Dial in the grind size with us. Experience how the stepless dial and direct portafilter cradle function.",
    image: `${BASE}/images/showroom/grinder.jpg`,
  },
  {
    step: "Step 03",
    title: "Pull a shot on each",
    desc: "The One, the Duo, and the Pro, standing warm side-by-side. Feel the solid weight of the portafilter and lock-in action.",
    image: `${BASE}/images/showroom/pull.jpg`,
  },
  {
    step: "Step 04",
    title: "Steam milk on the Duo & Pro",
    desc: "Practice texturing microfoam for flat whites and latte art with guidance from our barista.",
    image: `${BASE}/images/showroom/steam.jpg`,
  },
]

export function ShowroomSteps() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>What to expect</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          A 45-minute guided tasting
        </h2>

        <div className="mt-12 space-y-16">
          {STEPS.map((s, idx) => (
            <div
              key={s.step}
              className={`grid gap-8 lg:grid-cols-12 lg:items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`space-y-4 lg:col-span-5 ${
                  idx % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                  {s.step}
                </span>
                <h3 className="text-2xl font-light text-foreground md:text-3xl">
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed font-light text-muted-foreground">
                  {s.desc}
                </p>
              </div>

              <div
                className={`relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-muted lg:col-span-7 ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
