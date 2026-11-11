"use client"

import Link from "next/link"
import Image from "next/image"

import { DETAILS_DATA } from "./details-data"

export function DetailsLineupCard() {
  return (
    <article className="dark relative isolate grid h-full gap-6 overflow-hidden rounded-3xl bg-background p-6.5 text-foreground md:grid-cols-[1fr_1.6fr] md:p-7.5">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-radial-[at_78%_100%] from-muted to-transparent to-65%"
      />
      <div className="flex flex-col">
        <h3 className="max-w-xs text-xl leading-snug">
          {DETAILS_DATA.lineup.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {DETAILS_DATA.lineup.text}
        </p>
        <Link
          href={DETAILS_DATA.lineup.link.href}
          className="mt-6 self-start rounded-sm text-sm underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50 md:mt-auto"
        >
          {DETAILS_DATA.lineup.link.label}
        </Link>
      </div>

      <ul className="flex w-full max-w-xl items-end justify-between gap-2 self-center justify-self-center md:justify-center md:gap-4 md:pe-[4%]">
        {DETAILS_DATA.machines.map((m) => (
          <li
            key={m.id}
            style={{ "--scale": m.scale } as React.CSSProperties}
            className="group/model relative flex w-[calc(var(--scale)*30%)] flex-col items-center md:w-[calc(var(--scale)*31%)]"
          >
            <p className="mb-3 text-center text-xs whitespace-nowrap opacity-0 transition-[opacity,translate] duration-300 ease-soft group-hover/model:opacity-100 motion-safe:group-hover/model:-translate-y-1 motion-reduce:transition-none max-md:opacity-100 md:absolute md:bottom-full md:left-1/2 md:-translate-x-1/2">
              {m.name}{" "}
              <span className="font-mono text-muted-foreground figures max-md:block">
                {m.price}
              </span>
            </p>
            <div className="w-full transition-[translate] duration-300 ease-soft motion-safe:group-hover/model:-translate-y-1 motion-reduce:transition-none">
              <span className="relative isolate block">
                <Image
                  src={m.image}
                  alt={m.alt}
                  width={m.width}
                  height={m.height}
                  sizes="(min-width: 64rem) 180px, 30vw"
                  className="block h-auto w-full"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-[2%] bottom-[1%] -z-10 h-[9%] rounded-[50%] bg-radial from-black/25 to-transparent to-70%"
                />
                <span
                  aria-hidden
                  className="absolute inset-x-[7%] bottom-[3.5%] -z-10 h-[3%] rounded-[50%] bg-black/35 blur-[3px]"
                />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
