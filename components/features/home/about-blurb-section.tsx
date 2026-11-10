import Image from "next/image"
import Link from "next/link"

import { SectionLabel } from "@/components/shared/section-label"
import { buttonVariants } from "@/components/ui/button"

const BASE = "https://nove-nextjs-template.vercel.app"

export function AboutBlurbSection() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Photos */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-muted">
              <Image
                src={`${BASE}/images/home/founder-1.jpg`}
                alt="Matteo, co-founder of Nove"
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover"
              />
            </div>
            <div className="relative mt-8 aspect-3/4 overflow-hidden rounded-2xl bg-muted">
              <Image
                src={`${BASE}/images/home/founder-2.jpg`}
                alt="Davide, co-founder of Nove"
                fill
                sizes="(max-width: 1024px) 50vw, 300px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 lg:col-span-7">
            <SectionLabel>Our story</SectionLabel>
            <h2 className="text-3xl font-light tracking-tight text-foreground md:text-5xl">
              We started by fixing other people’s machines.
            </h2>
            <div className="space-y-4 text-base leading-relaxed font-light text-muted-foreground">
              <p>
                For five years we ran a repair workshop in Turin, taking apart
                commercial machines and home appliances. We saw exactly what
                broke: cheap plastic valves, glued boilers, and fragile digital
                displays.
              </p>
              <p>
                When we designed Nove, we stripped everything back. 2 mm steel
                body, standard commercial 58 mm components, and mechanical brass
                valves that you can service yourself with a standard
                screwdriver.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className={buttonVariants({
                  variant: "outline",
                  size: "default",
                })}
              >
                Read our full story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
