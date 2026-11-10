import Image from "next/image"
import Link from "next/link"

import { SectionLabel } from "@/components/shared/section-label"
import { buttonVariants } from "@/components/ui/button"

const BASE = "https://nove-nextjs-template.vercel.app"

export function ShowroomHero() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Showroom · Turin</SectionLabel>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Try all three models in Turin
          </h1>
          <p className="mt-6 text-base leading-relaxed font-light text-muted-foreground sm:text-xl">
            The One, the Duo and the Pro stand switched on along one counter on
            Via Nizza. A visit is free and takes 45 minutes with Matteo or
            Davide.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact#form"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Book a visit
            </Link>
            <a
              href="#info"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Address and hours
            </a>
          </div>
        </div>

        {/* Large Hero Photo */}
        <div className="relative mt-12 aspect-16/9 w-full overflow-hidden rounded-3xl bg-muted">
          <Image
            src={`${BASE}/images/showroom/visitors.jpg`}
            alt="Visitors at the showroom counter trying machines"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
