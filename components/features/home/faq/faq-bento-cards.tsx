import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function FaqModelsCard() {
  return (
    <ScrollReveal
      as="li"
      className="group raised-card row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl p-1.5 lg:col-span-4"
    >
      <div
        aria-hidden="true"
        className="relative h-44 overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-b from-card to-popover transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
          <div className="flex h-full flex-col items-center justify-end gap-3 px-6 pb-4">
            <div className="flex w-full max-w-72 items-end justify-center gap-2">
              <div style={{ width: "24%" }}>
                <Image
                  alt="Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle"
                  width={1101}
                  height={1400}
                  className="h-auto w-full"
                  src="/images/home/machine-one.png"
                />
              </div>
              <div style={{ width: "30%" }}>
                <Image
                  alt="Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle"
                  width={1116}
                  height={1400}
                  className="h-auto w-full"
                  src="/images/home/machine.png"
                />
              </div>
              <div style={{ width: "34.8%" }}>
                <Image
                  alt="Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray"
                  width={1356}
                  height={1400}
                  className="h-auto w-full"
                  src="/images/home/machine-pro.png"
                />
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
                <span className="text-muted-foreground">One</span>$650
              </span>
              <span className="inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
                <span className="text-muted-foreground">Duo</span>$950
              </span>
              <span className="inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
                <span className="text-muted-foreground">Pro</span>$1,450
              </span>
            </div>
          </div>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-xl leading-snug text-pretty md:px-6">
        Which model should I get?
      </h3>
      <p className="mt-2 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-6">
        If you drink it black, the One. If you drink lattes or flat whites, the
        Duo. If two or more people at home want milk drinks at the same time,
        the Pro. Pick wrong and swap within 30 days.
      </p>
    </ScrollReveal>
  )
}

export function FaqSwapCard() {
  return (
    <ScrollReveal
      as="li"
      delayMs={180}
      className="group dark row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl bg-background p-1.5 text-foreground lg:col-span-7"
    >
      <div
        aria-hidden="true"
        className="relative h-44 overflow-hidden rounded-2xl lg:h-56"
      >
        <div className="absolute inset-0 bg-linear-to-b from-card to-background transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
          <div className="flex h-full items-end justify-center gap-16 px-6 pb-5 md:gap-24">
            <div style={{ width: "5.6rem" }}>
              <Image
                alt="Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle"
                width={1101}
                height={1400}
                className="h-auto w-full"
                src="/images/home/machine-one.png"
              />
            </div>
            <svg
              viewBox="0 0 120 48"
              fill="none"
              className="absolute top-6 left-1/2 w-24 -translate-x-1/2 text-muted-foreground md:top-8 md:w-28"
            >
              <path
                d="M6 40C24 10 74 2 108 22"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M94 10l15 12.5-18 5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div style={{ width: "7rem" }}>
              <Image
                alt="Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle"
                width={1116}
                height={1400}
                className="h-auto w-full"
                src="/images/home/machine.png"
              />
            </div>
            <span className="absolute top-4 left-4 inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
              30 days
            </span>
          </div>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-xl leading-snug text-pretty md:px-6">
        How does the 30-day swap work?
      </h3>
      <p className="mt-2 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-6">
        Tell us which model you want instead. We ship it, you send the first one
        back in its box, and we refund or charge the difference.
      </p>
    </ScrollReveal>
  )
}
