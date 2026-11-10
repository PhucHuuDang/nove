import { AnimatedCounter } from "@/components/shared/animated-counter"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const STATS = [
  {
    end: 30,
    suffix: " days",
    title: "To swap your model",
    desc: "If you picked the wrong model, exchange it within 30 days.",
  },
  {
    end: 3,
    suffix: " years",
    title: "Warranty included",
    desc: "Parts and labour covered, including pump and thermoblock.",
  },
  {
    end: 9,
    suffix: " bar",
    title: "Brewing pressure",
    desc: "The exact pressure commercial café machines pull shots at.",
  },
  {
    end: 40,
    suffix: " s",
    title: "Warmup time",
    desc: "Ready before you have finished grinding your coffee beans.",
  },
]

export function HomeCountersSection() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <ScrollReveal
              key={stat.title}
              delayMs={idx * 100}
              className="flex flex-col border-l border-border pl-6"
            >
              <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
                className="text-4xl font-light tracking-tight text-foreground sm:text-5xl md:text-6xl"
              />
              <h3 className="mt-4 text-base font-medium text-foreground">
                {stat.title}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {stat.desc}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
