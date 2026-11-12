import Image from "next/image"

import { cn } from "@/lib/utils"

interface GlowCardProps {
  glow: string
  className?: string
  innerClassName?: string
  children: React.ReactNode
}

/** A raised card sitting on a blurred, saturated wash of a photo. */
export function GlowCard({
  glow,
  className,
  innerClassName,
  children,
}: GlowCardProps) {
  return (
    <li
      className={cn(
        "relative isolate flex flex-col overflow-hidden rounded-2xl p-4",
        className
      )}
    >
      <div aria-hidden="true" className="absolute -inset-16 -z-10">
        <Image
          src={glow}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover blur-3xl saturate-150"
        />
      </div>
      <div
        className={cn(
          "flex flex-1 flex-col rounded-xl bg-popover p-5 shadow-lg md:p-6",
          innerClassName
        )}
      >
        {children}
      </div>
    </li>
  )
}

/** The faint oversized ordinal at the top of a glow card. */
export function GlowCardNumber({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="text-6xl leading-none text-foreground/15"
    >
      {children}
    </span>
  )
}
