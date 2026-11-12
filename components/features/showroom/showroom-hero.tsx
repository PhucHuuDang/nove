import Image from "next/image"
import Link from "next/link"

import { NavSpacer } from "@/components/shared/nav-spacer"
import { PageIntro } from "@/components/shared/page-intro"
import { ParallaxImage } from "@/components/shared/parallax-image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { pillBadge, pillButton } from "@/lib/pill-variants"

const FOUNDERS = [
  {
    src: "/images/home/founder-1.jpg",
    alt: "Portrait of a smiling barista in a grey apron",
  },
  {
    src: "/images/home/founder-2.jpg",
    alt: "Portrait of an engineer with crossed arms in a workshop",
  },
]

export function ShowroomHero() {
  return (
    <section
      aria-labelledby="showroom-heading"
      className="px-3 section-padding pt-0! md:px-5"
    >
      <NavSpacer className="gutter-margin-0 md:gutter-margin-0" />
      <PageIntro
        id="showroom-heading"
        lines={["Try all three", "models in Turin"]}
        lede="The One, the Duo and the Pro stand switched on along one counter. A visit is free and takes 45 minutes."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact#form"
            className={pillButton({ variant: "accent" })}
          >
            Book a visit
          </Link>
          <Link
            href="/showroom#visit"
            className={pillButton({ variant: "outline" })}
          >
            Address and hours
          </Link>
        </div>
      </PageIntro>

      <div className="mt-10 md:mt-14">
        <ScrollReveal
          delayMs={250}
          className="relative isolate flex min-h-120 flex-col justify-between overflow-hidden rounded-3xl gutter-4 py-4 md:min-h-[clamp(34rem,68svh,48rem)] md:gutter-6 md:py-6"
        >
          <ParallaxImage
            src="/images/showroom/visitors.jpg"
            alt="Visitors at the showroom counter: a young man laughing on a stool with a cup, a woman in a camel coat chatting with the barista as she steams milk at the Duo, an older man leaning in to read the gauges on the Pro, the One beside them"
            sizes="100vw"
            priority
          />
          <div className="self-end rounded-full bg-popover/80 py-1 pr-3 pl-1 backdrop-blur-md">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <div className="flex -space-x-2">
                {FOUNDERS.map((person) => (
                  <span
                    key={person.src}
                    className="relative flex size-8 shrink-0 rounded-full ring-2 ring-background select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken"
                  >
                    <Image
                      src={person.src}
                      alt={person.alt}
                      width={64}
                      height={64}
                      className="aspect-square size-full rounded-full object-cover"
                    />
                  </span>
                ))}
              </div>
              The two of us, at the counter
            </div>
          </div>
          <ul className="flex flex-wrap gap-2">
            {["One", "Duo", "Pro"].map((model) => (
              <li key={model}>
                <span className={pillBadge({ variant: "floating" })}>
                  {model}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
