import Image from "next/image"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating?: number
  reviewsCount?: number
  reviewsLabel?: string
  avatars?: string[]
  className?: string
  showStars?: boolean
}

export function StarRating({
  rating = 4.9,
  reviewsCount = 1284,
  reviewsLabel,
  avatars,
  className,
  showStars = true,
}: StarRatingProps) {
  const displayLabel = reviewsLabel
    ? reviewsLabel
    : `${reviewsCount.toLocaleString()} reviews`

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {avatars && avatars.length > 0 ? (
        <div className="flex -space-x-2 overflow-hidden">
          {avatars.map((avatar, idx) => (
            <div
              key={idx}
              className="relative h-7 w-7 rounded-full border-2 border-background bg-muted"
            >
              <Image
                src={avatar}
                alt="Reviewer avatar"
                fill
                sizes="28px"
                className="rounded-full object-cover"
              />
            </div>
          ))}
          <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-muted font-mono text-[10px] font-medium text-muted-foreground">
            +1k
          </div>
        </div>
      ) : null}

      <div className="flex items-center gap-1.5 font-mono text-sm">
        {showStars ? (
          <div className="flex items-center text-amber-500">
            <Star className="h-3.5 w-3.5 fill-amber-500" />
          </div>
        ) : null}
        <span className="font-semibold">{rating.toFixed(1)}</span>
        <span className="text-muted-foreground">·</span>
        <span className="text-muted-foreground">{displayLabel}</span>
      </div>
    </div>
  )
}
