export type ArticleInline = string | { href: string; text: string }

export type ArticleBlock =
  | { type: "p"; content: ArticleInline[] }
  | { type: "h2"; text: string }
  | { type: "ul" | "ol"; items: ArticleInline[][] }
  | {
      type: "figure"
      src: string
      alt: string
      width: number
      height: number
      /** Cut-out product shot that sits on a card background. */
      cutout: boolean
      caption: string
    }

export type ArticleAuthor = "barista" | "engineer"

export interface ArticleContent {
  photoAlt: string
  readMinutes: number
  author: ArticleAuthor
  body: ArticleBlock[]
}

export const ARTICLE_CONTENT: Record<string, ArticleContent> = {
  "cleaning-and-descaling": {
    photoAlt:
      "The filter basket, the portafilter, a brush, a cloth and descaler laid out beside a grey stone sink",
    readMinutes: 3,
    author: "engineer",
    body: [
      {
        type: "p",
        content: [
          "A clean machine makes better coffee and lasts longer. Coffee leaves oil behind, and old oil turns bitter and ends up in every shot. Hard water leaves scale, the white chalk you see in a kettle, and over time it narrows the pipes and coats the boiler. Neither takes long to deal with: under a minute after each coffee, ten minutes a week, and half an hour every three months.",
        ],
      },
      {
        type: "h2",
        text: "After every coffee",
      },
      {
        type: "ul",
        items: [
          [
            "Knock the used coffee into the bin and rinse the basket under the tap.",
          ],
          [
            "Run water through the machine for two seconds with the portafilter out. This washes coffee off the shower screen, the metal plate the water comes through.",
          ],
          [
            "On the Duo and the Pro, wipe the steam wand with a damp cloth and open the steam for a second, so no milk dries inside it.",
          ],
          [
            "Lock the empty portafilter back in, so it stays warm for the next coffee.",
          ],
        ],
      },
      {
        type: "h2",
        text: "Once a week",
      },
      {
        type: "ul",
        items: [
          ["Empty and wash the drip tray and the water tank."],
          [
            "Soak the baskets and the metal part of the portafilter in hot water with a drop of washing-up liquid for ten minutes, then rinse. Keep the walnut handle out of the water.",
          ],
          [
            "Brush the shower screen with a clean, stiff brush while the machine is warm.",
          ],
          [
            "Wipe the steel with a soft damp cloth. When the walnut looks dry, rub in a drop of food-safe oil.",
          ],
        ],
      },
      {
        type: "h2",
        text: "Descale every three months",
      },
      {
        type: "p",
        content: [
          "Descale every three months, or every six if you fill the tank from a filter jug or your water is soft. Use a descaler made for espresso machines, and never vinegar, which leaves a taste behind and is harder on the seals.",
        ],
      },
      {
        type: "ol",
        items: [
          [
            "Fill the tank with descaler and water, mixed as the packet says, and switch the machine on.",
          ],
          [
            "Run half the tank through with the portafilter out. On the Duo and the Pro, run a cup's worth through the steam wand too.",
          ],
          ["Switch the machine off and leave it for 20 minutes."],
          [
            "Switch it back on and run the rest of the tank through the same way.",
          ],
          [
            "Rinse the tank, fill it with clean water and run it all through. Do this twice, so nothing of the descaler is left.",
          ],
        ],
      },
      {
        type: "figure",
        src: "/images/home/faq-warranty.jpg",
        alt: "The pump and the boiler from inside a Nove",
        width: 1200,
        height: 900,
        cutout: true,
        caption:
          "The pump and the boiler. Scale builds up in both, and the warranty does not cover damage from scale.",
      },
      {
        type: "h2",
        text: "When to write to us",
      },
      {
        type: "p",
        content: [
          "Every Nove has a three-year warranty on parts and labour, including the pump and the boiler. If the gauge stays well below 9 bar with a fresh, fine grind, or water drips from around the portafilter while it is locked in, ",
          {
            href: "/contact",
            text: "write to us",
          },
          ". Every part has a number and the panels come off with one screwdriver, so most fixes are one part in the post. We keep parts in Turin for every machine we have sold.",
        ],
      },
    ],
  },
  "which-nove-is-right-for-you": {
    photoAlt:
      "Nove machines on the walnut counter of the Turin showroom at dusk, seen through the window from the street",
    readMinutes: 2,
    author: "engineer",
    body: [
      {
        type: "p",
        content: [
          "Every Nove has the same steel body, the same walnut handles, the same 58 mm portafilter and brews at 9 bar. A shot from the One tastes the same as a shot from the Pro. So pick by what you drink and how many of you drink it.",
        ],
      },
      {
        type: "h2",
        text: "The One, for black coffee",
      },
      {
        type: "p",
        content: [
          "The Nove One makes espresso and americano and is ready in 40 seconds. It has no steam wand, so no milk drinks. It is the narrowest of the three, and at $650 it is the one to get if you never take milk. ",
          {
            href: "/shop/one",
            text: "See the One",
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "The Duo, for lattes and flat whites",
      },
      {
        type: "p",
        content: [
          "The Nove Duo adds a steam wand, so you can make lattes, cappuccinos and flat whites. It comes with a milk jug and is ready in 45 seconds. Most people who drink milk drinks buy the Duo, at $950. ",
          {
            href: "/shop/duo",
            text: "See the Duo",
          },
          ".",
        ],
      },
      {
        type: "figure",
        src: "/images/showroom/counter.jpg",
        alt: "Hands fitting the portafilter into a Nove Duo at the showroom counter",
        width: 816,
        height: 1024,
        cutout: false,
        caption:
          "The Duo at the showroom, where all three stand switched on side by side.",
      },
      {
        type: "h2",
        text: "The Pro, for a household",
      },
      {
        type: "p",
        content: [
          "The Nove Pro has two boilers, so it brews coffee and steams milk at the same time. On the Duo you brew, then steam. On the Pro you do both at once, which makes four drinks in five minutes. It takes 90 seconds to warm up and costs $1,450. ",
          {
            href: "/shop/pro",
            text: "See the Pro",
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "If you are still not sure",
      },
      {
        type: "ul",
        items: [
          [
            "You can swap your machine for another model within 30 days of delivery, and we refund or charge the difference.",
          ],
          [
            "You can try all three with your own beans at our ",
            {
              href: "/showroom",
              text: "showroom in Turin",
            },
            ".",
          ],
          [
            "You can also ",
            {
              href: "/contact",
              text: "ask one of us",
            },
            ".",
          ],
        ],
      },
    ],
  },
  "steaming-milk-for-a-flat-white": {
    photoAlt:
      "A flat white with a rosetta in a charcoal cup on a marble café table",
    readMinutes: 3,
    author: "barista",
    body: [
      {
        type: "p",
        content: [
          "A flat white is a double espresso with about 120 ml of steamed milk, smooth all the way through with a thin layer of foam on top. You need a steam wand for it, so this guide is for the ",
          {
            href: "/shop/duo",
            text: "Duo",
          },
          " and the ",
          {
            href: "/shop/pro",
            text: "Pro",
          },
          ". The One makes espresso and americano, but not milk drinks.",
        ],
      },
      {
        type: "h2",
        text: "Before you start",
      },
      {
        type: "ul",
        items: [
          [
            "Cold milk, straight from the fridge. Whole milk is the easiest to learn on. Cold milk gives you more time before it gets too hot.",
          ],
          [
            "The Milk jug from the box, filled about a third of the way, to just under where the spout starts.",
          ],
          [
            "A double espresso in a wide cup. If you have not pulled one yet, start with ",
            {
              href: "/journal/how-to-make-your-first-espresso",
              text: "how to make your first espresso",
            },
            ".",
          ],
        ],
      },
      {
        type: "p",
        content: [
          "On the Duo, pull the shot first and steam straight after. The Pro has two boilers and steams while it brews, so the milk is ready when the espresso is.",
        ],
      },
      {
        type: "h2",
        text: "Clear the wand",
      },
      {
        type: "p",
        content: [
          "Point the wand into the drip tray and open the steam for a second or two. Water collects in the wand while the machine sits, and you want dry steam in the milk, not water.",
        ],
      },
      {
        type: "h2",
        text: "Add a little air",
      },
      {
        type: "p",
        content: [
          "Put the tip of the wand just under the surface of the milk, a little off centre, and open the steam all the way. You should hear a short, quiet hiss. That is air going into the milk. A flat white needs only a little, so keep the tip there for three or four seconds, until the milk has risen by about a centimetre.",
        ],
      },
      {
        type: "h2",
        text: "Heat it to about 60 °C",
      },
      {
        type: "p",
        content: [
          "Lower the tip a little further into the milk. The milk should start to turn in the jug, pulling the bubbles under and breaking them up. Keep your other hand flat on the side of the jug. When it is too hot to hold for more than a second, the milk is at about 60 °C. Close the steam, then take the wand out. Hotter than 65 °C and the milk loses its sweetness.",
        ],
      },
      {
        type: "figure",
        src: "/images/home/latte.jpg",
        alt: "Steamed milk being poured into an espresso to make a pattern on top",
        width: 1400,
        height: 1400,
        cutout: false,
        caption:
          "Pour from a few centimetres up, then bring the jug close to finish.",
      },
      {
        type: "h2",
        text: "Pour",
      },
      {
        type: "p",
        content: [
          "Wipe the wand with a damp cloth and open the steam once more, before the milk dries on it. Tap the jug on the counter to burst any large bubbles, then swirl it until the milk looks glossy. Pour from a few centimetres above the cup so the milk sinks under the espresso, then bring the jug close to the surface for the last part so the white layer forms on top.",
        ],
      },
      {
        type: "h2",
        text: "If it goes wrong",
      },
      {
        type: "ul",
        items: [
          [
            "Large bubbles: the tip was too high. Keep it just under the surface.",
          ],
          [
            "A loud screech: the tip went in too deep before the milk had any air.",
          ],
          ["Hot milk with no foam at all: you skipped the air at the start."],
          [
            "Thick, dry foam: too much air for a flat white. That is a cappuccino. Add air for fewer seconds.",
          ],
        ],
      },
      {
        type: "p",
        content: [
          "Most people pour a good flat white within the first week. The Duo and the Pro both come with a milk jug. If two of you drink milk drinks, ",
          {
            href: "/shop/jug",
            text: "a second jug is $38",
          },
          " and saves rinsing between cups.",
        ],
      },
    ],
  },
  "why-nine-bar": {
    photoAlt:
      "Close-up of the pressure gauge on a Nove, steam drifting past in the dark",
    readMinutes: 3,
    author: "engineer",
    body: [
      {
        type: "p",
        content: [
          "Nove is Italian for nine. The name comes from the pressure every one of our machines brews at, 9 bar at the coffee, on the One, the Duo and the Pro. It is the same pressure café machines use, and it is the number the whole machine is built around.",
        ],
      },
      {
        type: "h2",
        text: "What pressure does",
      },
      {
        type: "p",
        content: [
          "Espresso is hot water pushed through finely ground coffee. The coffee is ground so fine that water would barely drip through on its own, so the machine pushes it. One bar is about the pressure of the air around us, so 9 bar is nine times that.",
        ],
      },
      {
        type: "p",
        content: [
          "The pressure decides how much of the coffee ends up in the cup during the 25 to 30 seconds of a shot. With too little, the water runs through without taking enough with it, and the espresso tastes thin and sour. With too much, it also takes the harsh, bitter parts.",
        ],
      },
      {
        type: "h2",
        text: "Why most machines say 15 bar",
      },
      {
        type: "p",
        content: [
          "Most home machines print 15 bar on the box. That is usually how hard the pump can push with the outlet closed, not the pressure at the coffee during a shot. A higher number does not make a better pump, and when that full force reaches the coffee, the espresso turns bitter.",
        ],
      },
      {
        type: "h2",
        text: "How a Nove holds nine",
      },
      {
        type: "p",
        content: [
          "Our pump can push harder than 9 bar. A valve sends the extra water back to the tank, so the coffee gets nine and no more. You can watch it happen on the gauge on the front of the machine. During a shot, the needle should sit at 9.",
        ],
      },
      {
        type: "figure",
        src: "/images/home/faq-warmup.jpg",
        alt: "The pressure gauge on the front of a Nove",
        width: 1200,
        height: 900,
        cutout: true,
        caption:
          "The gauge on the front. During a shot the needle sits at 9 bar.",
      },
      {
        type: "p",
        content: [
          "The gauge also tells you about your grind. If the needle stays well below 9, the coffee is too coarse and the water is rushing through. If the needle sits at 9 and the shot barely drips, the coffee is too fine. ",
          {
            href: "/journal/how-to-make-your-first-espresso",
            text: "How to make your first espresso",
          },
          " walks through getting it right.",
        ],
      },
      {
        type: "h2",
        text: "The 58 mm basket",
      },
      {
        type: "p",
        content: [
          "Pressure only works if the water meets all of the coffee evenly. Our basket is 58 mm wide, the size cafés use, where most home machines use 51 mm. The coffee sits flatter, so the water runs through it evenly instead of finding one weak spot and rushing through it. Any 58 mm basket or tamper fits.",
        ],
      },
      {
        type: "p",
        content: [
          "The One, the Duo and the Pro all brew at 9 bar and use the same 58 mm basket. Only the milk side changes, so you can pick by what you drink. ",
          {
            href: "/shop#compare",
            text: "Compare the models",
          },
          " to see the rest.",
        ],
      },
    ],
  },
  "cappuccino-and-latte": {
    photoAlt:
      "A cappuccino and a latte in a glass with pastries on a sunny Turin balcony",
    readMinutes: 2,
    author: "barista",
    body: [
      {
        type: "p",
        content: [
          "If you can steam milk for a flat white, you can make a cappuccino and a latte. The steps are the same: clear the wand, add air at the start, then heat the milk to about 60 °C. The only things that change are how much milk you use and how long you add air. If you have not steamed milk before, start with ",
          {
            href: "/journal/steaming-milk-for-a-flat-white",
            text: "our flat white guide",
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "A cappuccino has more foam",
      },
      {
        type: "p",
        content: [
          "A cappuccino is a double espresso with about 150 ml of milk and a thick layer of foam on top, about two fingers deep. Add air for longer at the start, until the milk has grown by about a third in the jug, then heat it as usual. Pour slowly at first, then lower the jug so the foam slides out on top.",
        ],
      },
      {
        type: "h2",
        text: "A latte has more milk and less foam",
      },
      {
        type: "p",
        content: [
          "A latte is a double espresso with about 200 ml of milk and a thin layer of foam, thinner than a cappuccino and a little thicker than a flat white. Fill the jug a little higher, add air for only a few seconds, then heat. Use a larger cup or a glass.",
        ],
      },
      {
        type: "figure",
        src: "/images/home/details-kitchen.jpg",
        alt: "A Nove Duo on a kitchen counter in morning light",
        width: 768,
        height: 1024,
        cutout: false,
        caption:
          "The Duo comes with a milk jug. The Pro steams while it brews, so the milk is ready when the shot is.",
      },
      {
        type: "h2",
        text: "Tips that help with both",
      },
      {
        type: "ul",
        items: [
          [
            "Use cold milk and a cold jug. You get more time before the milk gets too hot.",
          ],
          [
            "Tap the jug on the counter and swirl it before you pour, so the milk and foam mix again.",
          ],
          [
            "Pour within a minute of steaming. Left to stand, the foam separates from the milk.",
          ],
          [
            "Oat milk made for baristas foams well. Other plant milks often do not, so check the carton.",
          ],
        ],
      },
    ],
  },
  "how-to-make-your-first-espresso": {
    photoAlt:
      "Pulling the first shot on a Nove One at night in a small kitchen, the open box beside it",
    readMinutes: 3,
    author: "barista",
    body: [
      {
        type: "p",
        content: [
          "Your first espresso will probably not be your best, and that is fine. A shot depends on three things: how much coffee goes in, how fine it is ground, and how long the water takes to run through it. Get those right and the machine does the rest, since every Nove brews at ",
          {
            href: "/journal/why-nine-bar",
            text: "9 bar",
          },
          ".",
        ],
      },
      {
        type: "h2",
        text: "What you need",
      },
      {
        type: "ul",
        items: [
          [
            "Whole beans roasted in the last month. Our ",
            {
              href: "/shop/beans",
              text: "beans subscription",
            },
            " sends a 250 g bag every four weeks for $18.",
          ],
          [
            "A grinder with an espresso setting. Ground coffee goes stale in a few days, so grind just before each shot. ",
            {
              href: "/shop/grinder",
              text: "The Nove grinder",
            },
            " has 40 settings, but any grinder that grinds fine enough for espresso works.",
          ],
          ["A kitchen scale that weighs to a tenth of a gram."],
          [
            "The portafilter, the handle that holds the coffee, with the larger of its two baskets, and the tamper. Both come in the box.",
          ],
        ],
      },
      {
        type: "h2",
        text: "Warm up the machine",
      },
      {
        type: "p",
        content: [
          "Fill the tank and switch the machine on. The One is ready in 40 seconds, the Duo in 45 and the Pro in 90. Lock the empty portafilter in while it heats, so the metal is warm when the coffee goes in. A cold portafilter cools the shot and makes it taste sour.",
        ],
      },
      {
        type: "h2",
        text: "Weigh, grind and press",
      },
      {
        type: "p",
        content: [
          "Weigh 18 g of beans and grind them into the basket on a fine setting. Start near the fine end of the dial and adjust from there. Tap the side of the portafilter so the coffee settles level.",
        ],
      },
      {
        type: "p",
        content: [
          "Then press it flat with the tamper, straight down, firmly, once. The 58 mm basket is the size cafés use, so the coffee sits flatter than in most home machines and the water runs through it evenly. A level surface matters more than how hard you press.",
        ],
      },
      {
        type: "h2",
        text: "Pull the shot",
      },
      {
        type: "p",
        content: [
          "Lock the portafilter in, put a cup on the scale under it and start the shot. The needle on the gauge should rise to 9 bar and stay there while the coffee runs. Stop when there is 36 g of espresso in the cup, twice the weight of the dry coffee. That should take 25 to 30 seconds from the moment you press the button.",
        ],
      },
      {
        type: "figure",
        src: "/images/home/faq-loud.jpg",
        alt: "Espresso running from the Nove portafilter into a white cup",
        width: 1200,
        height: 900,
        cutout: true,
        caption:
          "A good shot runs slowly and evenly, darker at the start and lighter at the end.",
      },
      {
        type: "h2",
        text: "Taste it, then change one thing",
      },
      {
        type: "ul",
        items: [
          ["Done in under 25 seconds and sour: grind finer."],
          ["Over 30 seconds and bitter: grind coarser."],
          [
            "On time but weak: add half a gram of coffee and keep the grind the same.",
          ],
        ],
      },
      {
        type: "p",
        content: [
          "Change only the grind until the time is right, then leave it alone. Beans change as they age, so expect to move the grinder a step or two over the life of a bag. When a shot tastes good, write the setting down.",
        ],
      },
      {
        type: "p",
        content: [
          "If the coffee is fine but something about the machine seems wrong, ",
          {
            href: "/contact",
            text: "write to us",
          },
          ". If you are making milk drinks next, read ",
          {
            href: "/journal/steaming-milk-for-a-flat-white",
            text: "steaming milk for a flat white",
          },
          ".",
        ],
      },
    ],
  },
  "brewing-and-steaming-at-once": {
    photoAlt:
      "A Nove Pro brewing a shot and steaming milk at once at a dinner party, hands passing cups and dessert around it",
    readMinutes: 2,
    author: "engineer",
    body: [
      {
        type: "p",
        content: [
          "Coffee and steam need different temperatures. Water for espresso should be a little under boiling. Steam needs water well above it. A machine with one boiler has to switch between the two, so you brew first, then wait for it to heat up for steam. The Pro has a boiler for each, so both are ready at once.",
        ],
      },
      {
        type: "h2",
        text: "What one boiler means on the Duo",
      },
      {
        type: "p",
        content: [
          "The Duo has one boiler. You pull the shot, then switch to steam and wait a few seconds while the boiler gets hotter. For one or two drinks that is no trouble. For a household making four milk drinks in a row, the waiting adds up.",
        ],
      },
      {
        type: "h2",
        text: "What two boilers change on the Pro",
      },
      {
        type: "p",
        content: [
          "On the Pro you start the shot and open the steam wand at the same moment. The milk is ready when the shot is, and the next shot can start straight away. That is how it makes four drinks in five minutes.",
        ],
      },
      {
        type: "figure",
        src: "/images/home/faq-loud.jpg",
        alt: "Espresso running from the Nove portafilter into a white cup",
        width: 1200,
        height: 900,
        cutout: true,
        caption:
          "The coffee boiler holds the shot steady while the other boiler makes steam.",
      },
      {
        type: "h2",
        text: "When the Duo is enough",
      },
      {
        type: "ul",
        items: [
          [
            "The Pro takes 90 seconds to warm up, against 45 for the Duo, because there are two boilers to heat.",
          ],
          ["The Pro is wider, with a second gauge for the steam boiler."],
          [
            "The Pro costs $1,450, against $950 for the Duo. If one or two of you drink milk drinks, the ",
            {
              href: "/shop/duo",
              text: "Duo",
            },
            " is enough.",
          ],
        ],
      },
    ],
  },
  "setting-the-grinder": {
    photoAlt:
      "A hand turning the walnut dial of the Nove grinder, beans and fresh grounds on dark slate",
    readMinutes: 2,
    author: "barista",
    body: [
      {
        type: "p",
        content: [
          "Of everything you can change, the grind changes your espresso the most. Fine coffee slows the water down, coarse coffee lets it run through fast. You are looking for the setting where 18 g of coffee gives you 36 g of espresso in 25 to 30 seconds.",
        ],
      },
      {
        type: "h2",
        text: "Where to start",
      },
      {
        type: "p",
        content: [
          "The Nove grinder has 40 settings. For espresso, start near the fine end and adjust from there. Any grinder with an espresso setting works, but it needs small steps between settings, because a small change in grind makes a big change in the shot.",
        ],
      },
      {
        type: "figure",
        src: "/images/home/grinder.jpg",
        alt: "The Nove grinder in steel with a walnut knob",
        width: 800,
        height: 800,
        cutout: true,
        caption: "The grinder, in the same steel and walnut as the machine.",
      },
      {
        type: "h2",
        text: "Read the shot, then move one setting",
      },
      {
        type: "ul",
        items: [
          [
            "Under 25 seconds and sour: the grind is too coarse. Go one setting finer.",
          ],
          [
            "Over 30 seconds and bitter: the grind is too fine. Go one setting coarser.",
          ],
          [
            "Between 25 and 30 seconds: taste it. If it tastes good, leave it there.",
          ],
        ],
      },
      {
        type: "h2",
        text: "When to change it again",
      },
      {
        type: "p",
        content: [
          "Check the setting when you open a new bag of beans, since every coffee grinds a little differently. Beans also change as they age, so you may go a setting finer towards the end of a bag. Grind just before each shot, since ground coffee goes stale in a few days. ",
          {
            href: "/shop/grinder",
            text: "See the grinder",
          },
          ".",
        ],
      },
    ],
  },
  "choosing-beans-for-espresso": {
    photoAlt:
      "Freshly roasted beans cooling in a roaster's tray, sacks of green coffee behind",
    readMinutes: 2,
    author: "barista",
    body: [
      {
        type: "p",
        content: [
          "The machine can only pull out what is in the coffee. Stale beans make flat, bitter espresso however well you grind and press them. Fresh beans have more flavour and more crema, the golden layer on top of the shot.",
        ],
      },
      {
        type: "h2",
        text: "Check the roast date",
      },
      {
        type: "p",
        content: [
          "Good coffee has a roast date on the bag, not just a best-before date. Beans taste best from about a week after roasting until about a month after. Older than that, they lose flavour quickly.",
        ],
      },
      {
        type: "h2",
        text: "Buy whole beans",
      },
      {
        type: "p",
        content: [
          "Ground coffee goes stale in a few days, so whole beans ground just before each shot taste much better. If you have no grinder yet, buy the smallest bags of coffee ground for espresso you can find, and open a new one often.",
        ],
      },
      {
        type: "figure",
        src: "/images/home/beans-dark.jpg",
        alt: "Dark roasted coffee beans scattered on a dark table",
        width: 1351,
        height: 1800,
        cutout: false,
        caption:
          "A darker roast gives a heavier, more bitter shot. A lighter roast tastes brighter and more sour.",
      },
      {
        type: "h2",
        text: "Store them well",
      },
      {
        type: "ul",
        items: [
          [
            "Keep the beans in their bag or an airtight tin, away from light and heat.",
          ],
          ["Not in the fridge: the beans take on moisture and smells."],
          ["Buy what you will use in a few weeks rather than a large bag."],
        ],
      },
      {
        type: "h2",
        text: "Our beans, every four weeks",
      },
      {
        type: "p",
        content: [
          "Our beans subscription sends a 250 g bag of our house roast every four weeks, whole or ground for the machine, for $18 a bag. At 18 g a shot, a bag makes about 13 double shots. You can pause or stop any time. ",
          {
            href: "/shop#beans",
            text: "See the beans",
          },
          ".",
        ],
      },
    ],
  },
}
