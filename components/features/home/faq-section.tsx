import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { FaqModelsCard, FaqSwapCard } from "./faq/faq-bento-cards"
import {
  FaqBoxCard,
  FaqGrinderCard,
  FaqWarmupCard,
  FaqWarrantyCard,
  FaqShippingCard,
  FaqLoudCard,
} from "./faq/faq-media-cards"

export function HomeFaqSection() {
  return (
    <section
      className="relative gutter-3 section-padding md:gutter-5"
      aria-labelledby="faq-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[44rem] overflow-clip mask-t-from-45% [--arc-x:50%] [--arc-y:calc(100%_-_1440px)] lg:block"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-radial-[circle_1440px_at_var(--arc-x)_var(--arc-y)] from-card from-92% via-chart-2/70 via-97% to-transparent" />
          <div
            className="absolute inset-y-0 -left-full w-[200%] [mask-image:repeating-linear-gradient(to_right,transparent,black_12.5%,transparent_25%)] will-change-transform"
            style={{ transform: "translateX(25%)" }}
          >
            <div
              className="absolute inset-y-0 left-1/2 w-1/2 bg-radial-[circle_1440px_at_var(--arc-x)_var(--arc-y)] from-transparent from-92% via-chart-2/50 via-96% to-transparent to-99% will-change-transform"
              style={{ transform: "translateX(-50%)" }}
            />
          </div>
        </div>
      </div>

      <ScrollReveal
        as="header"
        className="relative flex flex-col items-center text-center"
      >
        <p className="text-sm font-medium text-muted-foreground">FAQ</p>
        <h2
          className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="faq-heading"
        >
          Common questions
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
          If yours is not here,{" "}
          <Link
            className="rounded-sm text-foreground underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
            href="/contact"
          >
            write to us
          </Link>
          .
        </p>
      </ScrollReveal>

      <ul className="relative mx-auto mt-10 grid max-w-7xl gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
        <FaqModelsCard />
        <FaqBoxCard />
        <FaqGrinderCard />
        <FaqSwapCard />
        <FaqWarmupCard />
        <FaqWarrantyCard />
        <FaqShippingCard />
        <FaqLoudCard />
      </ul>
    </section>
  )
}
