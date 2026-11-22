"use client"

import { motion, type TargetAndTransition } from "motion/react"

import { InUseExplorer } from "@/components/shared/in-use/in-use-explorer"
import { GroundedProductImage } from "@/components/shared/product-image"
import { MACHINES, type CatalogId } from "@/lib/data/catalog"
import { IN_USE_PHOTOS } from "@/lib/data/in-use-photos"
import { EASE_SOFT } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

const FADE = { duration: 0.3, ease: EASE_SOFT }

function presence(visible: boolean): TargetAndTransition {
  return visible
    ? { opacity: 1, scale: 1, filter: "blur(0px)", visibility: "visible" }
    : {
        opacity: 0,
        scale: 0.97,
        filter: "blur(2px)",
        transitionEnd: { visibility: "hidden" },
      }
}

/** The right half of the hero: the shown model, in use where we have a photo. */
export function ShopHeroStage({ shownId }: { shownId: CatalogId }) {
  return (
    <div className="relative flex items-end justify-center overflow-hidden rounded-3xl bg-card px-5 pt-20 pb-8 lg:min-h-176 lg:pb-12">
      {MACHINES.map((machine) => {
        const photo = IN_USE_PHOTOS[machine.id]
        if (!photo) return null
        const shown = machine.id === shownId
        return (
          <motion.div
            key={machine.id}
            aria-hidden={!shown}
            inert={!shown}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: shown ? 1 : 0 }}
            transition={FADE}
          >
            <InUseExplorer photo={photo} />
          </motion.div>
        )
      })}
      <div className="absolute top-5 left-5 z-10 grid md:top-8 md:left-8">
        {MACHINES.map((machine) => (
          <motion.p
            key={machine.id}
            aria-hidden={machine.id !== shownId}
            className={cn(
              "col-start-1 row-start-1 flex flex-col",
              IN_USE_PHOTOS[machine.id]?.dark && "dark text-foreground"
            )}
            initial={false}
            animate={presence(machine.id === shownId)}
            transition={FADE}
          >
            <span className="text-2xl">{machine.name}</span>
            <span className="text-sm text-muted-foreground">
              {machine.kicker}
            </span>
          </motion.p>
        ))}
      </div>
      <div className="grid w-full max-w-xs md:max-w-sm lg:max-w-xl">
        {MACHINES.map((machine) => (
          <motion.div
            key={machine.id}
            aria-hidden={machine.id !== shownId}
            className="col-start-1 row-start-1 mx-auto self-end"
            style={{ width: `${Math.round(80 * machine.scale)}%` }}
            initial={false}
            animate={presence(
              machine.id === shownId && !IN_USE_PHOTOS[machine.id]
            )}
            transition={FADE}
          >
            <GroundedProductImage
              product={machine}
              priority
              sizes="(min-width: 64rem) 30vw, 70vw"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
