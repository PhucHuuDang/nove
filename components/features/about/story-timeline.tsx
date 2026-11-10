import Link from "next/link"

import { SectionLabel } from "@/components/shared/section-label"
import { buttonVariants } from "@/components/ui/button"

const TIMELINE = [
  {
    year: "2019",
    title: "The repair bench in Turin",
    desc: "Matteo and Davide opened a modest repair shop off Corso Francia, servicing vintage Faemas, La Marzoccos, and cheap consumer machines.",
  },
  {
    year: "2021",
    title: "The first prototype",
    desc: "Frustrated by disposable consumer appliances, we milled our own chassis from 2 mm steel and built the first Nove prototype using standard E61 group parts.",
  },
  {
    year: "2023",
    title: "The One and Duo launch",
    desc: "We shipped the first 200 machines to coffee lovers across northern Italy. Every machine was calibrated, assembled, and tested by our own hands.",
  },
  {
    year: "2025",
    title: "The Showroom on Via Nizza",
    desc: "We opened our doors in Turin, welcoming visitors to pull shots, steam milk, and learn home espresso with their own favourite beans.",
  },
]

export function AboutStoryTimeline() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Timeline</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          From workshop bench to your counter
        </h2>

        <div className="mt-12 space-y-10 border-l border-border pl-6 md:pl-10">
          {TIMELINE.map((step) => (
            <div key={step.year} className="relative">
              <div className="absolute top-1.5 -left-[31px] h-3.5 w-3.5 rounded-full border-2 border-background bg-foreground md:-left-[47px]" />
              <span className="font-mono text-xs font-semibold text-muted-foreground">
                {step.year}
              </span>
              <h3 className="mt-1 text-xl font-medium text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed font-light text-muted-foreground md:text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4 border-t border-border pt-10">
          <Link
            href="/shop"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Explore the machines
          </Link>
          <Link
            href="/showroom"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Visit us in Turin
          </Link>
        </div>
      </div>
    </section>
  )
}
