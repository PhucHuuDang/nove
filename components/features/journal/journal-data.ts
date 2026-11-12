export type JournalCategory = "guides" | "milk" | "care" | "machine"

export interface JournalArticle {
  slug: string
  title: string
  summary: string
  date: string
  category: JournalCategory
  photo: string
}

export const JOURNAL_TOPICS = [
  { value: "all", label: "All" },
  { value: "guides", label: "Guides" },
  { value: "milk", label: "Milk" },
  { value: "care", label: "Care" },
  { value: "machine", label: "How it works" },
]

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: "cleaning-and-descaling",
    title: "Cleaning and descaling your Nove",
    summary:
      "Under a minute after each coffee, ten minutes a week and half an hour every three months keeps the coffee clean and the machine working.",
    date: "2026-10-20",
    category: "care",
    photo: "/images/journal/cleaning.jpg",
  },
  {
    slug: "which-nove-is-right-for-you",
    title: "Which Nove is right for you",
    summary:
      "All three brew the same espresso. Pick by milk. The One has no steam wand, the Duo has one, and the Pro steams while it brews.",
    date: "2026-10-13",
    category: "guides",
    photo: "/images/journal/which-nove.jpg",
  },
  {
    slug: "steaming-milk-for-a-flat-white",
    title: "Steaming milk for a flat white on the Duo or Pro",
    summary:
      "Cold milk, a few seconds of air at the start, then heat it to about 60 °C. Smooth milk with a thin layer of foam on top.",
    date: "2026-10-06",
    category: "milk",
    photo: "/images/journal/flat-white.jpg",
  },
  {
    slug: "why-nine-bar",
    title: "Why every Nove brews at 9 bar",
    summary:
      "Most home machines print 15 bar on the box. Cafés brew at 9, and so does every Nove. Here is what the number does to the taste.",
    date: "2026-09-29",
    category: "machine",
    photo: "/images/journal/nine-bar.jpg",
  },
  {
    slug: "cappuccino-and-latte",
    title: "Making a cappuccino and a latte",
    summary:
      "A cappuccino and a latte use the same steaming as a flat white. What changes is how much milk goes in and how much air you add at the start.",
    date: "2026-09-22",
    category: "milk",
    photo: "/images/journal/cappuccino-latte.jpg",
  },
  {
    slug: "how-to-make-your-first-espresso",
    title: "How to make your first espresso on a Nove",
    summary:
      "Weigh 18 g of coffee, grind it fine and aim for 36 g of espresso in 25 to 30 seconds. Then change one thing at a time.",
    date: "2026-09-15",
    category: "guides",
    photo: "/images/journal/first-espresso.jpg",
  },
  {
    slug: "brewing-and-steaming-at-once",
    title: "How the Pro brews and steams at the same time",
    summary:
      "The Pro has two boilers, one for coffee and one for steam, so it can pull a shot and steam milk at once. Here is what that changes in the morning.",
    date: "2026-09-08",
    category: "machine",
    photo: "/images/journal/pro.jpg",
  },
  {
    slug: "setting-the-grinder",
    title: "Finding the right grind setting",
    summary:
      "The grind decides how fast the water runs through the coffee. Start near the fine end, time the shot and move one setting at a time.",
    date: "2026-09-01",
    category: "guides",
    photo: "/images/journal/grinder.jpg",
  },
  {
    slug: "choosing-beans-for-espresso",
    title: "Choosing beans for espresso",
    summary:
      "Look for the roast date, buy whole beans and use them within a month. Stale beans make flat espresso on any machine.",
    date: "2026-08-25",
    category: "guides",
    photo: "/images/journal/beans.jpg",
  },
]
