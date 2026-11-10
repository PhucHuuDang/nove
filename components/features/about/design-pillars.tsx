import { SectionLabel } from "@/components/shared/section-label"

const PILLARS = [
  {
    number: "01",
    title: "9 bar. Nothing else.",
    desc: "Commercial café machines pull espresso at 9 bar. Appliance brands claim 15 or 20 bar as a marketing trick, which extracts harsh bitter compounds.",
  },
  {
    number: "02",
    title: "Commercial 58 mm diameter",
    desc: "Every café on earth uses 58 mm baskets. It allows the coffee grounds to sit wider and shallower, giving completely uniform saturation without channeling.",
  },
  {
    number: "03",
    title: "Solid steel & oiled walnut",
    desc: "2 mm thick stainless steel bodywork that won't flex or discolor. Real Italian walnut handles that deepen in tone and character with every cup you brew.",
  },
  {
    number: "04",
    title: "Repairable with one screwdriver",
    desc: "No proprietary glue. No disposable plastic clips. Every component from the brass solenoid valve to the silicon seals can be replaced by you at home in 10 minutes.",
  },
]

export function AboutDesignPillars() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Philosophy</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          Four principles we refuse to break
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.number}
              className="flex flex-col border-t border-border pt-6"
            >
              <span className="font-mono text-xs font-semibold text-muted-foreground">
                {p.number}
              </span>
              <h3 className="mt-3 text-lg font-medium text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-light text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
