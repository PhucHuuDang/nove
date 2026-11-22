import type { PhotoSpot } from "@/lib/data/in-use-photos"
import { pillBadge } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

export function InUseSpotDetails({
  spot,
  className,
}: {
  spot: PhotoSpot
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {spot.figure ? (
        <span
          className={pillBadge({
            variant: "secondary",
            figure: true,
            className: "mb-1 self-start",
          })}
        >
          {spot.figure}
        </span>
      ) : null}
      <p className="font-medium">{spot.title}</p>
      <p className="text-muted-foreground">{spot.text}</p>
    </div>
  )
}
