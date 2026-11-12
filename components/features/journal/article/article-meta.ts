import type { ArticleAuthor } from "./article-content"

export const ARTICLE_AUTHORS: Record<
  ArticleAuthor,
  { name: string; initial: string; src: string; alt: string }
> = {
  barista: {
    name: "The barista",
    initial: "B",
    src: "/images/home/founder-1.jpg",
    alt: "Portrait of a smiling barista in a grey apron",
  },
  engineer: {
    name: "The engineer",
    initial: "E",
    src: "/images/home/founder-2.jpg",
    alt: "Portrait of an engineer with crossed arms in a workshop",
  },
}

export const ARTICLE_DATE = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
})

const BUTTON_BASE =
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border bg-clip-padding text-sm font-medium whitespace-nowrap transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"

const BUTTON_OUTLINE =
  "border-foreground/25 bg-transparent hover:border-foreground/60 hover:bg-transparent"

export const OUTLINE_BUTTON_SM = `${BUTTON_BASE} ${BUTTON_OUTLINE} h-9 gap-1.5 px-4 has-data-[icon=inline-start]:ps-3.5`

export const OUTLINE_BUTTON = `${BUTTON_BASE} ${BUTTON_OUTLINE} h-11 gap-2 px-6 has-data-[icon=inline-end]:pe-5`

export const GHOST_ICON_BUTTON = `${BUTTON_BASE} size-9 border-transparent hover:bg-muted hover:text-foreground dark:hover:bg-foreground/10`

export const ARTICLE_LINK =
  "rounded-sm underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
