import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { GuaranteeCounter } from "./guarantee/guarantee-counter"

export function HomeGuaranteeSection() {
  return (
    <section
      className="px-3 section-padding md:px-5"
      id="guarantee"
      aria-labelledby="guarantee-heading"
    >
      <div className="rounded-3xl bg-card panel-padding">
        <ScrollReveal
          as="header"
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10"
        >
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Guarantee
            </p>
            <h2
              className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
              id="guarantee-heading"
            >
              What if you pick wrong, or it breaks?
            </h2>
          </div>
          <p className="max-w-md text-base text-muted-foreground md:pb-1 md:text-lg">
            You can swap the model within 30 days. We fix it for three years. We
            keep parts for every machine we have sold.
          </p>
        </ScrollReveal>

        <ScrollReveal
          as="ul"
          delayMs={100}
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-14 lg:grid-cols-4"
        >
          {/* Card 1: 30-day swap */}
          <li className="group @container relative isolate flex flex-col overflow-hidden rounded-3xl bg-popover p-5 transition-transform duration-300 ease-soft motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:min-h-72 md:p-6 lg:aspect-[2/3] lg:min-h-0">
            <h3 className="text-sm font-medium tracking-normal text-muted-foreground">
              30-day swap
            </h3>
            <p className="mt-[8cqi] leading-none">
              <span className="sr-only">30 days</span>
              <span
                aria-hidden="true"
                className="flex items-baseline font-mono text-[22cqi] tracking-[-0.04em] whitespace-nowrap figures sm:text-[32cqi]"
              >
                <GuaranteeCounter target={30} minWidth="1.12em" />
                <span className="ml-[0.2em] text-[0.34em] tracking-normal">
                  days
                </span>
              </span>
            </p>
            <p className="mt-auto max-w-[34ch] pt-8 text-sm text-pretty lg:text-base xl:text-lg">
              Change to another model within 30 days. We send the new one first,
              you post the old one back in its box.
            </p>
          </li>

          {/* Card 2: 3-year warranty */}
          <li className="group @container relative isolate flex flex-col overflow-hidden rounded-3xl bg-chart-1 p-5 transition-transform duration-300 ease-soft motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:min-h-72 md:p-6 lg:mt-[11%] lg:min-h-0">
            <h3 className="text-sm font-medium tracking-normal text-muted-foreground">
              3-year warranty
            </h3>
            <p className="mt-[8cqi] leading-none">
              <span className="sr-only">3 years</span>
              <span
                aria-hidden="true"
                className="flex items-baseline font-mono text-[22cqi] tracking-[-0.04em] whitespace-nowrap figures sm:text-[32cqi]"
              >
                <GuaranteeCounter target={3} minWidth="0.56em" />
                <span className="ml-[0.2em] text-[0.34em] tracking-normal">
                  years
                </span>
              </span>
            </p>
            <p className="mt-auto max-w-[34ch] pt-8 text-sm text-pretty lg:text-base xl:text-lg">
              Parts and labour, including the pump and the boiler. After that,
              repairs at the price of the part.
            </p>
          </li>

          {/* Card 3: Free shipping */}
          <li className="group @container relative isolate flex flex-col overflow-hidden rounded-3xl bg-chart-2 p-5 transition-transform duration-300 ease-soft motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:min-h-72 md:p-6 lg:mt-[22%] lg:min-h-0">
            <h3 className="text-sm font-medium tracking-normal text-foreground/70">
              Free shipping
            </h3>
            <p className="mt-[8cqi] leading-none">
              <span className="sr-only">3 to 5 days</span>
              <span
                aria-hidden="true"
                className="flex items-baseline font-mono text-[22cqi] tracking-[-0.04em] whitespace-nowrap figures sm:text-[32cqi]"
              >
                <GuaranteeCounter target={3} minWidth="0.56em" />
                <span className="mx-[0.3em] text-[0.34em] tracking-normal">
                  to
                </span>
                <GuaranteeCounter target={5} minWidth="0.56em" />
                <span className="ml-[0.2em] text-[0.34em] tracking-normal">
                  days
                </span>
              </span>
            </p>
            <p className="mt-auto max-w-[34ch] pt-8 text-sm text-pretty lg:text-base xl:text-lg">
              3 to 5 days in Europe and the US, packed so it arrives undamaged.
              Other countries on request.
            </p>
          </li>

          {/* Card 4: Parts for every machine */}
          <li className="group @container relative isolate flex flex-col overflow-hidden rounded-3xl bg-chart-3 p-5 text-primary-foreground transition-transform duration-300 ease-soft motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:min-h-72 md:p-6 lg:mt-[33%] lg:min-h-0">
            <h3 className="text-sm font-medium tracking-normal text-primary-foreground/75">
              Parts for every machine
            </h3>
            <p className="mt-[8cqi] leading-none">
              <span className="sr-only">100%</span>
              <span
                aria-hidden="true"
                className="flex items-baseline font-mono text-[22cqi] tracking-[-0.04em] whitespace-nowrap figures sm:text-[32cqi]"
              >
                <GuaranteeCounter
                  target={100}
                  minWidth="1.6800000000000002em"
                />
                <span className="ml-[0.2em] text-[0.34em] tracking-normal">
                  %
                </span>
              </span>
            </p>
            <p className="mt-auto max-w-[34ch] pt-8 text-sm text-pretty lg:text-base xl:text-lg">
              Every part has a number and sits on a shelf in Turin, for every
              machine we have sold.
            </p>
          </li>
        </ScrollReveal>
      </div>
    </section>
  )
}
