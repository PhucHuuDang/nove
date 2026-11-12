import Image from "next/image"
import Link from "next/link"

import { GlowCard, GlowCardNumber } from "@/components/shared/glow-card"
import { GlowPanel } from "@/components/shared/glow-panel"
import { SectionTitle } from "@/components/shared/section-heading"
import { pillButton } from "@/lib/pill-variants"

import { ABOUT_PICKS } from "./about-data"

const SUBGRID = "lg:row-span-5 lg:grid lg:grid-rows-subgrid lg:gap-0"

export function AboutPick() {
  return (
    <section
      className="px-3 section-padding md:px-5"
      aria-labelledby="about-pick-heading"
    >
      <GlowPanel
        listClassName="lg:gap-x-5 lg:gap-y-0"
        header={
          <>
            <SectionTitle id="about-pick-heading" className="max-w-xl">
              Three ways to pick your model
            </SectionTitle>
            <p className="max-w-md text-base text-muted-foreground md:text-lg lg:justify-self-end lg:pb-1">
              Order online and swap within 30 days, try all three at our
              showroom in Turin, or tell one of us what you drink.
            </p>
          </>
        }
      >
        {ABOUT_PICKS.map((pick, i) => (
          <GlowCard
            key={pick.title}
            glow={pick.photo}
            className={SUBGRID}
            innerClassName={SUBGRID}
          >
            <GlowCardNumber>{i + 1}</GlowCardNumber>
            <h3 className="mt-5 text-xl leading-tight md:text-2xl">
              {pick.title}
            </h3>
            <p className="mt-2 text-base text-pretty text-muted-foreground">
              {pick.text}
            </p>
            <div className="relative mt-6 aspect-4/3 overflow-hidden rounded-xl bg-card">
              <Image
                src={pick.photo}
                alt={pick.alt}
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-auto pt-6">
              <Link
                href={pick.cta.href}
                className={pillButton({
                  variant: pick.cta.variant,
                  className: "w-full",
                })}
              >
                {pick.cta.label}
              </Link>
            </div>
          </GlowCard>
        ))}
      </GlowPanel>
    </section>
  )
}
