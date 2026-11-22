"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"

import { InUseSpotDetails } from "@/components/shared/in-use/in-use-spot-details"
import type { InUsePhoto, PhotoSpot } from "@/lib/data/in-use-photos"
import { EASE_SOFT } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

const ZOOM = 3.2

interface InUseZoomCardProps {
  photo: InUsePhoto
  spot: PhotoSpot
  ref: React.Ref<HTMLDivElement>
}

/** A magnified crop around the picked hotspot, with its details below. */
export function InUseZoomCard({ photo, spot, ref }: InUseZoomCardProps) {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute top-28 left-8 w-64 rounded-2xl border border-popover/60 bg-popover/75 p-3 text-sm shadow-lg backdrop-blur-md lg:top-32 @max-[37.5rem]:hidden",
        !photo.dark && "dark bg-popover text-foreground"
      )}
    >
      <p className="mb-2 px-1 text-xs text-muted-foreground">{spot.label}</p>
      <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-foreground">
        <motion.div
          className="absolute inset-0"
          initial={false}
          animate={{
            scale: ZOOM,
            x: `${-ZOOM * (spot.x - 50)}%`,
            y: `${-ZOOM * (spot.y - 50)}%`,
          }}
          transition={{ duration: 0.7, ease: [0.45, 0, 0.2, 1] }}
        >
          <Image
            src={photo.src}
            alt=""
            fill
            sizes="(min-width: 64rem) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 size-12 -translate-1/2 border border-popover/80"
        />
      </div>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={spot.id}
          className="px-1 pt-3 pb-1"
          initial={{ opacity: 0, y: 6, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -6, filter: "blur(2px)" }}
          transition={{ duration: 0.25, ease: EASE_SOFT }}
        >
          <InUseSpotDetails spot={spot} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/** The same details as a caption pinned to the bottom on narrow frames. */
export function InUseCaption({
  photo,
  spot,
}: {
  photo: InUsePhoto
  spot: PhotoSpot
}) {
  return (
    <div
      className={cn(
        "absolute inset-x-3 bottom-3 @min-[37.5rem]:hidden",
        !photo.dark && "dark text-foreground"
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={spot.id}
          className="rounded-2xl bg-popover/90 p-4 text-sm shadow-lg backdrop-blur-md"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25, ease: EASE_SOFT }}
        >
          <InUseSpotDetails spot={spot} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
