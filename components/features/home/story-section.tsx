import Image from "next/image"

import { ScrollArc } from "@/components/shared/scroll-arc"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

import { STORY_FOUNDERS, STORY_LETTER } from "./story/story-data"
import { StorySignature } from "./story/story-signature"

export function HomeStorySection() {
  return (
    <section
      className="relative gutter-3 section-padding md:gutter-5"
      aria-labelledby="story-heading"
    >
      <ScrollArc className="top-[46%] bottom-0 hidden [--arc-x:43%] lg:block" />
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
            <p>{STORY_LETTER.greeting}</p>
            {STORY_LETTER.paragraphs.map((paragraph, i) => (
              <p key={i} className="group/p">
                {paragraph.map((part, j) =>
                  part.strong ? (
                    <strong
                      key={j}
                      className="bg-linear-to-r from-accent to-accent bg-size-[0%_1px] bg-bottom-left bg-no-repeat font-medium text-foreground transition-[background-size] duration-300 ease-soft group-hover/p:bg-size-[100%_1px] motion-reduce:transition-none"
                    >
                      {part.text}
                    </strong>
                  ) : (
                    <span key={j}>{part.text}</span>
                  )
                )}
              </p>
            ))}
          </div>

          <div className="mt-auto pt-16 lg:pt-24">
            <p className="text-sm text-muted-foreground">
              {STORY_LETTER.signoff}
            </p>
            <StorySignature className="mt-4" />
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
            {STORY_FOUNDERS.map((founder) => (
              <span
                key={founder.src}
                data-slot="avatar"
                data-size="xl"
                className="group/avatar relative flex size-20 shrink-0 rounded-full ring-2 ring-background select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken lg:size-24 dark:after:mix-blend-lighten"
              >
                <Image
                  src={founder.src}
                  alt={founder.alt}
                  width={96}
                  height={96}
                  className="aspect-square size-full rounded-full object-cover"
                />
              </span>
            ))}
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
