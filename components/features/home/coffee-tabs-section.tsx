"use client"

import { useEffect, useRef, useState } from "react"
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
  easeInOut,
} from "motion/react"

import { DRINKS } from "./drinks/drinks-data"
import { DrinksCard } from "./drinks/drinks-card"
import { DrinksMachine } from "./drinks/drinks-machine"
import {
  DrinksFloatingLabel,
  DrinksMachineCaption,
} from "./drinks/drinks-labels"

const MACHINE_WIPE_RANGE = [0.24, 0.42]

export function CoffeeTabsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const [headerRevealed, setHeaderRevealed] = useState(false)
  const prefersReduced = useReducedMotion() ?? false

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.4,
  })

  const staticProgress = useMotionValue(1)
  const progress = prefersReduced ? staticProgress : smoothProgress

  // Interpolate machine wipe progress between 0.24 and 0.42
  const machineWipe = useTransform(progress, MACHINE_WIPE_RANGE, [0, 1], {
    ease: easeInOut,
  })

  // IntersectionObserver for entrance reveal of header
  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderRevealed(true)
          observer.disconnect()
        }
      },
      { rootMargin: "-80px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="drinks"
      aria-labelledby="drinks-heading"
      className="overflow-x-clip gutter-3 section-padding max-lg:py-0! md:gutter-5"
    >
      <div
        ref={containerRef}
        className="motion-safe:h-[240svh] motion-safe:lg:h-[320svh]"
      >
        <div className="[container-type:size] sticky top-[max(0px,calc((100svh-56rem)/2))] flex h-svh max-h-[56rem] min-h-[36rem] flex-col">
          {/* Header */}
          <header
            ref={headerRef}
            data-reveal={headerRevealed ? "shown" : "hidden"}
            className="relative z-30 flex max-w-md shrink-0 flex-col items-start pt-20 transition-[opacity,translate] duration-700 ease-soft data-[reveal=hidden]:opacity-0 motion-safe:data-[reveal=hidden]:translate-y-2 motion-reduce:transition-none lg:absolute lg:top-16 lg:left-0 lg:max-w-[34%] lg:pt-0"
          >
            <p className="text-sm font-medium text-muted-foreground">Drinks</p>
            <h2
              id="drinks-heading"
              className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            >
              What you can make
            </h2>
            <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
              All three models make the same espresso. For milk drinks, get the
              Duo or the Pro. They have a steam wand that heats and froths the
              milk.
            </p>
          </header>

          {/* Interactive Drinks & Machine Stage */}
          <div className="[container-type:size] relative mt-4 mb-6 flex-1 lg:contents">
            {/* Drinks Constellation */}
            <ul>
              {DRINKS.map((drink, idx) => (
                <DrinksCard
                  key={drink.id}
                  drink={drink}
                  index={idx}
                  progress={progress}
                />
              ))}
            </ul>

            {/* Model Category Floating Labels */}
            <DrinksFloatingLabel
              text="Every model"
              progress={progress}
              start={0.01}
              className="left-[3%] lg:top-[46%] lg:left-[6%]"
            />
            <DrinksFloatingLabel
              text="Duo and Pro"
              progress={progress}
              start={0.4}
              className="left-[53%] lg:top-[26%] lg:left-[69%]"
            />

            {/* Center Machine Morph */}
            <DrinksMachine progress={machineWipe} />

            {/* Machine Switcher Caption at bottom */}
            <DrinksMachineCaption progress={machineWipe} />
          </div>
        </div>
      </div>
    </section>
  )
}
