import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

const CALLERS = [
  {
    src: "/images/home/founder-1.jpg",
    alt: "Portrait of a smiling barista in a grey apron",
    spread: "-10px",
  },
  {
    src: "/images/home/founder-2.jpg",
    alt: "Portrait of an engineer with crossed arms in a workshop",
    spread: "-6px",
  },
  {
    src: "/images/home/caller-1.jpg",
    alt: "",
    spread: "-2px",
  },
  {
    src: "/images/home/caller-2.jpg",
    alt: "",
    spread: "2px",
  },
  {
    src: "/images/home/caller-3.jpg",
    alt: "",
    spread: "6px",
  },
  {
    src: "/images/home/caller-4.jpg",
    alt: "",
    spread: "10px",
  },
]

export function HomeContactCtaSection() {
  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <ScrollReveal
          as="header"
          className="flex flex-col items-center text-center"
        >
          <p className="text-sm font-medium text-muted-foreground">
            Not sure which one?
          </p>
          <h2
            className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            id="cta-heading"
          >
            Talk to a barista
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Write to us or visit the showroom in Turin. Tell us what you drink
            and we will tell you which model to get.
          </p>
        </ScrollReveal>

        <ScrollReveal
          delayMs={100}
          className="mt-9 flex w-full flex-col items-center md:mt-10"
        >
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="group/primary group/button inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-primary bg-clip-padding px-6 text-sm font-medium whitespace-nowrap text-primary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-primary/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] sm:w-auto"
            >
              Contact us
              <ArrowRight className="size-4 shrink-0 transition-transform duration-300 ease-soft motion-safe:group-hover/primary:translate-x-1 motion-reduce:transition-none" />
            </Link>
            <Link
              href="/shop#compare"
              className="group/secondary group/button inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border border-foreground/25 bg-transparent bg-clip-padding px-6 text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:border-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] sm:w-auto"
            >
              Pick your model
              <ArrowRight className="size-4 shrink-0 transition-transform duration-300 ease-soft motion-safe:group-hover/secondary:translate-x-1 motion-reduce:transition-none" />
            </Link>
          </div>
          <p className="mt-5 text-sm text-pretty text-muted-foreground">
            We reply within 1 working day. You can still swap the model within
            30 days.
          </p>
        </ScrollReveal>

        <ScrollReveal
          as="figure"
          delayMs={200}
          className="mt-8 flex flex-col items-center md:mt-9"
        >
          <div
            data-slot="avatar-group"
            className="group/avatars flex -space-x-2"
          >
            {CALLERS.map((caller) => (
              <span
                key={caller.src}
                data-slot="avatar"
                style={{ "--spread": caller.spread } as React.CSSProperties}
                className="group/avatar relative flex size-14 shrink-0 rounded-full ring-2 ring-background transition-transform duration-300 ease-soft select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken motion-safe:group-hover/avatars:translate-x-(--spread) motion-reduce:transition-none dark:after:mix-blend-lighten"
              >
                <Image
                  src={caller.src}
                  alt={caller.alt}
                  width={56}
                  height={56}
                  className="aspect-square size-full rounded-full object-cover"
                />
              </span>
            ))}
          </div>
          <figcaption className="mt-4 text-base text-muted-foreground md:text-lg">
            You talk to{" "}
            <strong className="font-medium text-foreground">
              the two of us
            </strong>
            , not a sales team.
          </figcaption>
        </ScrollReveal>
      </div>
    </section>
  )
}
