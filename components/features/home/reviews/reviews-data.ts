export interface ReviewItem {
  id: string
  author: string
  location: string
  model: string
  quote: string
  stars?: number
  avatar?: string
  initials?: string
  image?: {
    src: string
    alt: string
  }
}

export const REVIEWS_SECTION_DATA = {
  eyebrow: "Reviews",
  heading: "What owners say",
  lede: "Written by people who bought one. We publish all of them.",
  column1: [
    {
      id: "giulia",
      author: "Giulia R.",
      location: "Milan",
      model: "Nove Duo",
      quote: "Flat whites like the bar downstairs.",
      avatar: "/images/home/reviews/giulia.jpg",
      image: {
        src: "/images/home/reviews/giulia.jpg",
        alt: "Two hands around a cup of latte",
      },
    },
    {
      id: "lena",
      author: "Lena W.",
      location: "Vienna",
      model: "Nove Pro",
      quote:
        "Four of us, four different coffees. It steams the milk for one while the next shot is pulling, so nobody waits.",
      stars: 5,
      initials: "LW",
    },
    {
      id: "tom",
      author: "Tom H.",
      location: "Berlin",
      model: "Nove One",
      quote: "Small, and it pulls a proper shot.",
      avatar: "/images/home/reviews/tom.jpg",
      image: {
        src: "/images/home/reviews/tom.jpg",
        alt: "A hand holding a small cup of coffee above a wooden floor",
      },
    },
    {
      id: "james",
      author: "James M.",
      location: "Dublin",
      model: "Nove One",
      quote:
        "Ordered on a Monday and it was making coffee by Thursday. Shipping was free and the box was packed properly.",
      stars: 5,
      initials: "JM",
    },
  ] satisfies ReviewItem[],

  column2: [
    {
      id: "anna",
      author: "Anna L.",
      location: "Lyon",
      model: "Nove One",
      quote: "Still like new after two years.",
      avatar: "/images/home/reviews/anna.jpg",
      image: {
        src: "/images/home/reviews/anna.jpg",
        alt: "A white ceramic cup with espresso on a wooden board",
      },
    },
    {
      id: "sofia",
      author: "Sofia M.",
      location: "Barcelona",
      model: "Nove Duo",
      quote:
        "Forty settings sounded like too many. I found mine in the first week and have not touched it since.",
      stars: 5,
      initials: "SM",
    },
    {
      id: "sarah",
      author: "Sarah K.",
      location: "Leeds",
      model: "Nove Pro",
      quote: "Four lattes before the guests sat down.",
      avatar: "/images/home/reviews/sarah.jpg",
      image: {
        src: "/images/home/reviews/sarah.jpg",
        alt: "A cup of coffee on a wooden tray with steam rising",
      },
    },
    {
      id: "ben",
      author: "Ben T.",
      location: "Portland",
      model: "Nove Duo",
      quote:
        "The wand is strong, so my first jugs went everywhere. By Sunday I was pouring hearts. Give yourself a few days.",
      stars: 5,
      initials: "BT",
    },
  ] satisfies ReviewItem[],

  column3: [
    {
      id: "daniel",
      author: "Daniel O.",
      location: "Austin",
      model: "Nove Pro",
      quote: "The walnut gets better.",
      avatar: "/images/home/reviews/daniel.jpg",
      image: {
        src: "/images/home/reviews/daniel.jpg",
        alt: "Nove Pro machine on a kitchen island with walnut accents",
      },
    },
    {
      id: "claire",
      author: "Claire D.",
      location: "Bordeaux",
      model: "Nove One",
      quote:
        "A new bag lands just as the last one runs out. I paused it for August and it started again in September.",
      stars: 5,
      initials: "CD",
    },
    {
      id: "marco",
      author: "Marco P.",
      location: "Turin",
      model: "Nove Duo",
      quote: "Heavy, which is the point.",
      avatar: "/images/home/reviews/marco.jpg",
      image: {
        src: "/images/home/reviews/marco.jpg",
        alt: "Nove Duo machine brewing into a ceramic cup",
      },
    },
    {
      id: "yusuf",
      author: "Yusuf A.",
      location: "Rotterdam",
      model: "Nove Pro",
      quote:
        "It warms up while I take the cups down. Then it is coffee for two and milk at the same time.",
      stars: 5,
      initials: "YA",
    },
  ] satisfies ReviewItem[],
}
