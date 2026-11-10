import type { Review } from "@/types/review"

const BASE = "https://nove-nextjs-template.vercel.app"

export const reviews: Review[] = [
  {
    id: "tom-h",
    name: "Tom H.",
    city: "Berlin",
    model: "Nove One",
    quote:
      "20 cm on the counter. The gauge sits at nine every time and it is warm before I finish grinding.",
    avatar: `${BASE}/images/home/reviews/faces/tom.jpg`,
    productImage: `${BASE}/images/home/reviews/tom.jpg`,
  },
  {
    id: "anna-l",
    name: "Anna L.",
    city: "Lyon",
    model: "Nove One",
    quote:
      "A seal went last winter. The part came in three days with a note on how to fit it. Ten minutes with a screwdriver.",
    avatar: `${BASE}/images/home/reviews/faces/anna.jpg`,
    productImage: `${BASE}/images/home/reviews/anna.jpg`,
  },
  {
    id: "james-m",
    name: "James M.",
    city: "Dublin",
    model: "Nove One",
    quote:
      "Ordered on a Monday and it was making coffee by Thursday. Shipping was free and the box was packed properly.",
    avatar: `${BASE}/images/home/reviews/faces/james.jpg`,
  },
  {
    id: "claire-d",
    name: "Claire D.",
    city: "Bordeaux",
    model: "Nove One",
    quote:
      "A new bag lands just as the last one runs out. I paused it for August and it started again in September.",
    avatar: `${BASE}/images/home/reviews/faces/claire.jpg`,
  },
  {
    id: "giulia-r",
    name: "Giulia R.",
    city: "Milan",
    model: "Nove Duo",
    quote:
      "I thought the steam wand would be the hard part. Two tries and the milk was right. The jug in the box is the right size.",
    avatar: `${BASE}/images/home/reviews/faces/giulia.jpg`,
  },
  {
    id: "marco-p",
    name: "Marco P.",
    city: "Turin",
    model: "Nove Duo",
    quote:
      "Nine kilos of steel. I started with the One, swapped to the Duo in week two, and they sent the Duo before I had posted the One back.",
    avatar: `${BASE}/images/home/reviews/faces/marco.jpg`,
  },
  {
    id: "sofia-m",
    name: "Sofia M.",
    city: "Barcelona",
    model: "Nove Duo",
    quote:
      "Forty settings sounded like too many. I found mine in the first week and have not touched it since.",
    avatar: `${BASE}/images/home/reviews/faces/sofia.jpg`,
  },
  {
    id: "ben-t",
    name: "Ben T.",
    city: "Portland",
    model: "Nove Duo",
    quote:
      "The wand is strong, so my first jugs went everywhere. By Sunday I was pouring hearts. Give yourself a few days.",
    avatar: `${BASE}/images/home/reviews/faces/ben.jpg`,
  },
  {
    id: "sarah-k",
    name: "Sarah K.",
    city: "Leeds",
    model: "Nove Pro",
    quote:
      "Two boilers means no waiting between drinks. Worth it for a house of coffee drinkers.",
    avatar: `${BASE}/images/home/reviews/faces/sarah.jpg`,
  },
  {
    id: "daniel-o",
    name: "Daniel O.",
    city: "Austin",
    model: "Nove Pro",
    quote:
      "The handles have darkened where I hold them. It looks like it belongs in the kitchen, not like an appliance.",
    avatar: `${BASE}/images/home/reviews/faces/daniel.jpg`,
  },
  {
    id: "lena-w",
    name: "Lena W.",
    city: "Vienna",
    model: "Nove Pro",
    quote:
      "Four of us, four different coffees. It steams the milk for one while the next shot is pulling, so nobody waits.",
    avatar: `${BASE}/images/home/reviews/faces/lena.jpg`,
  },
  {
    id: "yusuf-a",
    name: "Yusuf A.",
    city: "Rotterdam",
    model: "Nove Pro",
    quote:
      "It warms up while I take the cups down. Then it is coffee for two and milk at the same time.",
    avatar: `${BASE}/images/home/reviews/faces/yusuf.jpg`,
  },
]

export const reviewStats = {
  rating: 4.9,
  count: 1284,
  avatars: [
    `${BASE}/images/home/reviews/faces/tom.jpg`,
    `${BASE}/images/home/reviews/faces/anna.jpg`,
    `${BASE}/images/home/reviews/faces/giulia.jpg`,
    `${BASE}/images/home/reviews/faces/marco.jpg`,
  ],
}
