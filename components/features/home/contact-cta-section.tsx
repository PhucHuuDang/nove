import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export function HomeContactCtaSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="rounded-3xl border border-border/80 bg-card p-8 text-center md:p-16">
          <p className="font-mono text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Get in touch
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Questions before you choose?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed font-light text-muted-foreground md:text-base">
            Write to us or book a 20-minute video call. You talk directly with
            Matteo or Davide, not a customer service team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Write to us
            </Link>
            <Link
              href="/showroom"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Visit our showroom
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
