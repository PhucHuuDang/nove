import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { pillButton } from "@/lib/pill-variants"

const LINE = "Questions about your machine? Write to us."

/** Scrolling call-out at the foot of the journal, pausing on hover. */
export function JournalMarquee() {
  return (
    <div className="group relative mt-16 overflow-hidden rounded-2xl bg-card py-10 md:mt-24 md:py-14">
      <div aria-hidden="true" className="mask-x-from-90%">
        <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((i) => (
            <p
              key={i}
              className="pe-16 text-6xl leading-none tracking-tight whitespace-nowrap md:text-8xl"
            >
              {LINE}
            </p>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <Link href="/contact" className={pillButton({ variant: "surface" })}>
          Write to us
          <ArrowRight aria-hidden="true" data-icon="inline-end" />
        </Link>
      </div>
    </div>
  )
}
