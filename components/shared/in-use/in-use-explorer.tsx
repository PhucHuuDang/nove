"use client"

import { useState } from "react"
import { motion } from "motion/react"

import { InUsePanFrame } from "@/components/shared/in-use/in-use-pan-frame"
import {
  InUseCaption,
  InUseZoomCard,
} from "@/components/shared/in-use/in-use-zoom-card"
import { useSpotConnector } from "@/hooks/use-spot-connector"
import type { InUsePhoto, PhotoSpot } from "@/lib/data/in-use-photos"
import { EASE_SOFT } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

/** An in-use photo with hotspots; picking one zooms a card onto it. */
export function InUseExplorer({ photo }: { photo: InUsePhoto }) {
  const [picked, setPicked] = useState(0)
  const { frameRef, cardRef, markerRef, path } = useSpotConnector(picked)
  const spot = photo.spots[picked]

  return (
    <div ref={frameRef} className="[container-type:size] absolute inset-0">
      <InUsePanFrame photo={photo}>
        {photo.spots.map((item, index) => (
          <SpotMarker
            key={item.id}
            ref={markerRef(index)}
            spot={item}
            on={index === picked}
            onPick={() => setPicked(index)}
          />
        ))}
      </InUsePanFrame>
      <svg
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 size-full @max-[37.5rem]:hidden",
          photo.dark && "dark"
        )}
      >
        <SpotConnector path={path} />
      </svg>
      <InUseZoomCard ref={cardRef} photo={photo} spot={spot} />
      <InUseCaption photo={photo} spot={spot} />
    </div>
  )
}

interface SpotMarkerProps {
  spot: PhotoSpot
  on: boolean
  onPick: () => void
  ref: React.Ref<HTMLButtonElement>
}

function SpotMarker({ spot, on, onPick, ref }: SpotMarkerProps) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={spot.label}
      aria-pressed={on}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onPick()
      }}
      onFocus={onPick}
      onClick={onPick}
      className="absolute grid size-12 -translate-1/2 place-items-center rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
    >
      <span
        className={cn(
          "grid place-items-center border border-popover shadow-sm transition-[width,height,border-style] duration-300 ease-soft",
          on ? "size-11 border-solid" : "size-7 border-dashed"
        )}
      >
        <span className="size-1 bg-popover shadow-sm" />
      </span>
    </button>
  )
}

function SpotConnector({ path }: { path: string }) {
  if (!path) return null

  const draw = {
    d: path,
    fill: "none",
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: { duration: 0.45, ease: EASE_SOFT },
  }

  return (
    <g key={path}>
      <motion.path {...draw} className="stroke-background/70" strokeWidth={3} />
      <motion.path {...draw} className="stroke-foreground" strokeWidth={1} />
    </g>
  )
}
