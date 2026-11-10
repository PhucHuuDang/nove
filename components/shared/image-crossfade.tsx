import Image from "next/image"

import { cn } from "@/lib/utils"

export interface CrossfadeImage {
  src: string
  alt: string
}

interface ImageCrossfadeProps {
  images: CrossfadeImage[]
  activeIndex: number
  className?: string
  imageClassName?: string
  priority?: boolean
  sizes?: string
}

export function ImageCrossfade({
  images,
  activeIndex,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 1200px",
}: ImageCrossfadeProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      {images.map((img, idx) => (
        <div
          key={img.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            idx === activeIndex
              ? "z-10 opacity-100"
              : "pointer-events-none z-0 opacity-0"
          )}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            priority={priority && idx === 0}
            sizes={sizes}
            className={cn("object-cover", imageClassName)}
          />
        </div>
      ))}
    </div>
  )
}
