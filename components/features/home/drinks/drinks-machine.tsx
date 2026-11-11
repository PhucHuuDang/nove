"use client"

import Image from "next/image"
import { motion, type MotionValue } from "motion/react"

interface DrinksMachineProps {
  progress: MotionValue<number>
}

export function DrinksMachine({ progress }: DrinksMachineProps) {
  return (
    <motion.div
      style={{ "--w": progress } as React.CSSProperties}
      className="pointer-events-none absolute top-[24%] left-1/2 z-20 aspect-[674/814] h-[min(44cqh,62cqw)] -translate-1/2 lg:top-[60%] lg:h-[min(54cqh,32cqw)]"
    >
      {/* Nove One (fades/wipes out as --w increases) */}
      <div className="absolute -inset-16 [mask-image:linear-gradient(to_right,transparent_calc(var(--w)*124%_-_24%),black_calc(var(--w)*124%))]">
        <div className="absolute inset-16">
          <div
            aria-hidden
            className="absolute inset-x-[24%] -bottom-3 h-8 rounded-[50%] bg-foreground/25 blur-xl"
          />
          <div className="absolute bottom-0 left-1/2 w-[64%] -translate-x-1/2">
            <Image
              src="/images/home/machine-one.png"
              alt="Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle"
              width={1101}
              height={1400}
              sizes="(min-width: 64rem) 20vw, 34vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Nove Duo (wipes in as --w increases) */}
      <div className="absolute -inset-16 [mask-image:linear-gradient(to_right,black_calc(var(--w)*124%_-_24%),transparent_calc(var(--w)*124%))]">
        <div className="absolute inset-16">
          <div
            aria-hidden
            className="absolute inset-x-[8%] -bottom-3 h-8 rounded-[50%] bg-foreground/25 blur-xl"
          />
          <Image
            src="/images/home/machine.png"
            alt="Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle"
            width={1116}
            height={1400}
            sizes="(min-width: 64rem) 32vw, 52vw"
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Frosted glass blur effect along the wipe transition seam */}
      <div aria-hidden className="absolute -inset-16 overflow-hidden">
        <div className="absolute inset-y-0 left-[calc(var(--w)*136%_-_36%)] w-[36%] [mask-image:linear-gradient(to_right,transparent,black_35%,black_65%,transparent)] backdrop-blur-md" />
      </div>
    </motion.div>
  )
}
