import Image from "next/image"

import type { InUsePhoto } from "@/lib/data/in-use-photos"

const COVER_WIDTH = "max(100cqw, 133.333cqh)"

/**
 * A 4:3 photo that covers its container, panned so the point at `edge`% stays
 * in view as the container narrows.
 */
export function InUsePanFrame({
  photo,
  children,
}: {
  photo: InUsePhoto
  children: React.ReactNode
}) {
  return (
    <div
      className="absolute top-1/2 aspect-4/3 -translate-y-1/2"
      style={{
        width: COVER_WIDTH,
        left: `calc(-1 * clamp(0px, ${COVER_WIDTH} * ${photo.edge / 100} - 100cqw, ${COVER_WIDTH} - 100cqw))`,
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        sizes="(min-width: 64rem) 50vw, 100vw"
        className="object-cover"
      />
      {children}
    </div>
  )
}
