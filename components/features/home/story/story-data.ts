export interface StoryPart {
  text: string
  strong?: boolean
}

export const STORY_LETTER: {
  greeting: string
  paragraphs: StoryPart[][]
  signoff: string
} = {
  greeting: "Hi, it's the two of us at Nove.",
  paragraphs: [
    [
      {
        text: "One of us ran a bar near Porta Palazzo. The other fixed its machines. The one we wanted did not exist, so we ",
      },
      { text: "drew it on a till roll", strong: true },
      { text: " and built the first ten by hand." },
    ],
    [
      { text: "Nove means nine. Espresso needs " },
      { text: "9 bar of pressure", strong: true },
      {
        text: ". Less and the coffee tastes thin, more and it tastes bitter. Every machine we make holds nine, and the gauge on the front shows it.",
      },
    ],
    [
      { text: "The body is 2 mm steel and the handles are " },
      { text: "oiled walnut", strong: true },
      {
        text: ", so they darken where you hold them. The portafilter is 58 mm, the size cafés use.",
      },
    ],
    [
      { text: "A machine should outlast its warranty. " },
      { text: "Every part has a number", strong: true },
      {
        text: ", the panels come off with one screwdriver, and we keep parts in Turin for every machine we have sold.",
      },
    ],
  ],
  signoff: "From Turin, with nine bar.",
}

export const STORY_FOUNDERS = [
  {
    src: "/images/home/founder-1.jpg",
    alt: "Portrait of a smiling barista in a grey apron",
  },
  {
    src: "/images/home/founder-2.jpg",
    alt: "Portrait of an engineer with crossed arms in a workshop",
  },
]
