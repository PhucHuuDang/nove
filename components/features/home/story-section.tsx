"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function HomeStorySection() {
  return (
    <section
      className="relative gutter-3 section-padding md:gutter-5"
      aria-labelledby="story-heading"
    >
      <div className="relative mx-auto grid max-w-5xl lg:grid-cols-[7fr_13fr] lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-10">
        <ScrollReveal className="lg:col-start-1 lg:row-start-1 lg:pt-16">
          <h2
            className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
            id="story-heading"
          >
            <span className="block">We make</span>
            <span className="block">one espresso</span>
            <span className="block">machine.</span>
            <span className="block">
              Since{" "}
              <span className="font-mono tracking-tight figures">2019</span>.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal
          delayMs={100}
          className="row-start-3 mt-10 flex flex-col rounded-3xl bg-popover px-8 pt-12 pb-10 shadow-sm sm:px-12 sm:pt-16 sm:pb-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:px-14"
        >
          <div className="flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            <p>Hi, it&apos;s the two of us at Nove.</p>
            <p className="group/p">
              <span>
                One of us ran a bar near Porta Palazzo. The other fixed its
                machines. The one we wanted did not exist, so we{" "}
              </span>
              <strong className="bg-linear-to-r from-accent to-accent [background-size:0%_1px] bg-bottom-left bg-no-repeat font-medium text-foreground transition-[background-size] duration-300 ease-soft group-hover/p:[background-size:100%_1px] motion-reduce:transition-none">
                drew it on a till roll
              </strong>
              <span> and built the first ten by hand.</span>
            </p>
            <p className="group/p">
              <span>Nove means nine. Espresso needs </span>
              <strong className="bg-linear-to-r from-accent to-accent [background-size:0%_1px] bg-bottom-left bg-no-repeat font-medium text-foreground transition-[background-size] duration-300 ease-soft group-hover/p:[background-size:100%_1px] motion-reduce:transition-none">
                9 bar of pressure
              </strong>
              <span>
                . Less and the coffee tastes thin, more and it tastes bitter.
                Every machine we make holds nine, and the gauge on the front
                shows it.
              </span>
            </p>
            <p className="group/p">
              <span>The body is 2 mm steel and the handles are </span>
              <strong className="bg-linear-to-r from-accent to-accent [background-size:0%_1px] bg-bottom-left bg-no-repeat font-medium text-foreground transition-[background-size] duration-300 ease-soft group-hover/p:[background-size:100%_1px] motion-reduce:transition-none">
                oiled walnut
              </strong>
              <span>
                , so they darken where you hold them. The portafilter is 58 mm,
                the size cafés use.
              </span>
            </p>
            <p className="group/p">
              <span>A machine should outlast its warranty. </span>
              <strong className="bg-linear-to-r from-accent to-accent [background-size:0%_1px] bg-bottom-left bg-no-repeat font-medium text-foreground transition-[background-size] duration-300 ease-soft group-hover/p:[background-size:100%_1px] motion-reduce:transition-none">
                Every part has a number
              </strong>
              <span>
                , the panels come off with one screwdriver, and we keep parts in
                Turin for every machine we have sold.
              </span>
            </p>
          </div>

          <div className="mt-auto pt-16 lg:pt-24">
            <p className="text-sm text-muted-foreground">
              From Turin, with nine bar.
            </p>
            <svg
              viewBox="0 0 160 64"
              width="160"
              height="64"
              fill="none"
              className="group/sig mt-4 stroke-muted-foreground"
              role="img"
              aria-label="Nove, signed by hand"
            >
              <path
                pathLength="1"
                strokeDasharray="1 2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="[stroke-dashoffset:0]"
                d="M10 54 C 12 40, 15 22, 20 8 C 23 22, 29 42, 38 56 C 40 42, 43 24, 48 10"
              />
              <path
                pathLength="1"
                strokeDasharray="1 2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="[stroke-dashoffset:0]"
                d="M70 34 C 64 30, 56 38, 60 46 C 64 52, 74 46, 72 38 C 70 32, 62 34, 66 42 C 70 48, 78 48, 84 40 C 86 46, 88 52, 92 48 C 96 42, 98 34, 100 30 C 100 40, 104 48, 112 44 C 118 40, 116 32, 110 34 C 104 36, 106 46, 116 46 C 126 46, 136 36, 150 28"
              />
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal
          delayMs={200}
          className="row-start-2 mt-8 flex items-center gap-5 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:flex-col lg:items-start lg:gap-6 lg:self-end"
        >
          <div
            data-slot="avatar-group"
            className="group/avatar-group flex -space-x-2"
          >
            <span
              data-slot="avatar"
              data-size="xl"
              className="group/avatar relative flex size-20 shrink-0 overflow-hidden rounded-full ring-2 ring-background select-none lg:size-24"
            >
              <Image
                src="/images/home/founder-1.jpg"
                alt="Portrait of a smiling barista in a grey apron"
                width={96}
                height={96}
                className="aspect-square size-full rounded-full object-cover"
              />
            </span>
            <span
              data-slot="avatar"
              data-size="xl"
              className="group/avatar relative flex size-20 shrink-0 overflow-hidden rounded-full ring-2 ring-background select-none lg:size-24"
            >
              <Image
                src="/images/home/founder-2.jpg"
                alt="Portrait of an engineer with crossed arms in a workshop"
                width={96}
                height={96}
                className="aspect-square size-full rounded-full object-cover"
              />
            </span>
          </div>
          <div>
            <p className="text-lg font-medium">A barista and an engineer</p>
            <p className="mt-1 text-muted-foreground">Founders, Turin</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
