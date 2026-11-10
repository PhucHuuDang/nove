import Image from "next/image"

import { SectionLabel } from "@/components/shared/section-label"
import { Button } from "@/components/ui/button"

const BASE = "https://nove-nextjs-template.vercel.app"

interface Article {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
}

const ARTICLES: Article[] = [
  {
    slug: "cleaning-and-descaling",
    title: "Cleaning and descaling your Nove",
    date: "Oct 20, 2026",
    excerpt:
      "Under a minute after each coffee, ten minutes a week, and half an hour every three months keeps the espresso clean and the machine working for decades.",
    image: `${BASE}/images/journal/cleaning.jpg`,
  },
  {
    slug: "which-nove-is-right-for-you",
    title: "Which Nove is right for you",
    date: "Oct 13, 2026",
    excerpt:
      "All three brew the same espresso. Pick by milk. The One has no steam wand, the Duo has one, and the Pro steams while it brews.",
    image: `${BASE}/images/journal/which-nove.jpg`,
  },
  {
    slug: "steaming-milk-for-a-flat-white",
    title: "Steaming milk for a flat white on the Duo or Pro",
    date: "Oct 6, 2026",
    excerpt:
      "Cold milk, a few seconds of air at the start, then heat it to about 60 °C. Smooth milk with a silky thin layer of microfoam on top.",
    image: `${BASE}/images/journal/flat-white.jpg`,
  },
  {
    slug: "why-nine-bar",
    title: "Why every Nove brews at 9 bar",
    date: "Sep 29, 2026",
    excerpt:
      "Most consumer home machines print 15 bar on the box. Cafés brew at 9, and so does every Nove. Here is what the number does to the cup.",
    image: `${BASE}/images/journal/nine-bar.jpg`,
  },
  {
    slug: "cappuccino-and-latte",
    title: "Making a cappuccino and a latte",
    date: "Sep 22, 2026",
    excerpt:
      "A cappuccino and a latte use the same steaming technique as a flat white. What changes is the milk-to-coffee ratio and air incorporation time.",
    image: `${BASE}/images/journal/cappuccino-latte.jpg`,
  },
  {
    slug: "how-to-make-your-first-espresso",
    title: "How to make your first espresso on a Nove",
    date: "Sep 15, 2026",
    excerpt:
      "Weigh 18 g of coffee, grind it fine and aim for 36 g of espresso in 25 to 30 seconds. Then change one variable at a time.",
    image: `${BASE}/images/journal/first-espresso.jpg`,
  },
  {
    slug: "brewing-and-steaming-at-once",
    title: "How the Pro brews and steams at the same time",
    date: "Sep 8, 2026",
    excerpt:
      "The Pro has two dedicated boilers: one for coffee extraction and one for steam, so nobody has to wait between drinks.",
    image: `${BASE}/images/journal/pro.jpg`,
  },
  {
    slug: "setting-the-grinder",
    title: "Finding the right grind setting",
    date: "Sep 1, 2026",
    excerpt:
      "The grind size dictates flow rate through the puck. Start near the fine end, time the shot, and adjust one notch at a time.",
    image: `${BASE}/images/journal/grinder.jpg`,
  },
  {
    slug: "choosing-beans-for-espresso",
    title: "Choosing beans for espresso",
    date: "Aug 25, 2026",
    excerpt:
      "Look for the roast date, buy whole beans, and use them within 30 days. Stale coffee beans produce flat, bitter espresso on any machine.",
    image: `${BASE}/images/journal/beans.jpg`,
  },
]

export function JournalGrid() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Journal</SectionLabel>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground sm:text-6xl">
            Technique, mechanics & coffee
          </h1>
          <p className="mt-4 text-base font-light text-muted-foreground md:text-lg">
            Guides and essays from the people who design, build and repair Nove
            espresso machines in Turin.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((art) => (
            <article
              key={art.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card transition-all hover:border-border hover:shadow-xs"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    Published {art.date}
                  </span>
                  <h2 className="mt-2 text-lg font-medium tracking-tight text-foreground group-hover:underline">
                    {art.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed font-light text-muted-foreground md:text-sm">
                    {art.excerpt}
                  </p>
                </div>
              </div>
              <div className="px-6 pt-2 pb-6 font-mono text-xs text-foreground">
                Read guide →
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            Show more articles
          </Button>
        </div>
      </div>
    </section>
  )
}
