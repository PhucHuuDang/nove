"use client"

import { useState } from "react"
import Image from "next/image"

import { SlidingToggleGroup } from "@/components/shared/sliding-toggle-group"
import { cn } from "@/lib/utils"

import { ABOUT_TIMELINE } from "./about-data"

const YEARS = ABOUT_TIMELINE.map((entry) => ({
  value: entry.year,
  label: <span className="font-mono figures">{entry.year}</span>,
}))

/** Giant year knocked out of a blurred photo, with a year switcher below. */
export function AboutTimeline() {
  const [picked, setPicked] = useState(ABOUT_TIMELINE[0].year)

  return (
    <div className="mt-14 md:mt-16">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-12">
        <div className="relative isolate overflow-hidden">
          <div aria-hidden="true" className="absolute -inset-16 -z-10">
            {ABOUT_TIMELINE.map((entry) => (
              <Image
                key={entry.year}
                src={entry.photo}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className={cn(
                  "object-cover blur-3xl transition-opacity duration-700 ease-soft",
                  entry.year === picked ? "opacity-75" : "opacity-0"
                )}
              />
            ))}
          </div>
          <div className="bg-card mix-blend-lighten">
            <div className="grid">
              {ABOUT_TIMELINE.map((entry) => (
                <p
                  key={entry.year}
                  aria-hidden="true"
                  style={{ fontSize: "clamp(6rem, 22vw, 20rem)" }}
                  className={cn(
                    "leading-[0.8] font-semibold tracking-tighter text-foreground figures transition-opacity duration-500 ease-soft [grid-area:1/1]",
                    entry.year === picked ? "opacity-100" : "opacity-0"
                  )}
                >
                  {entry.year}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid">
          {ABOUT_TIMELINE.map((entry) => (
            <div
              key={entry.year}
              aria-hidden={entry.year !== picked}
              className={cn(
                "transition-[opacity,translate] duration-500 ease-soft [grid-area:1/1]",
                entry.year === picked
                  ? "opacity-100"
                  : "pointer-events-none translate-y-2 opacity-0"
              )}
            >
              <h3 className="text-3xl leading-tight md:text-4xl">
                {entry.title}
              </h3>
              <p className="mt-3 max-w-sm text-muted-foreground md:text-lg">
                {entry.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 max-w-full max-[22rem]:overflow-x-auto md:mt-12">
        <SlidingToggleGroup
          label="Year"
          variant="segmented"
          value={picked}
          options={YEARS}
          onValueChange={setPicked}
          className="w-max"
        />
      </div>
    </div>
  )
}
