import type { Content } from "./types";

const en: Content = {
  lang: "en",
  site: {
    name: "Sognasalt",
    tagline: "Gourmet sea salt from Vik i Sogn, Norway",
    shortIntro:
      "Handcrafted sea salt from the Sognefjord – slowly evaporated, naturally crystallized and hand-finished. A clean gourmet product shaped by fjord, mountains and tradition.",
    aboutTitle: "About the salt",
    aboutBody:
      "Sognasalt is sea salt made in small batches in Vik i Sogn. Fjord water is slowly evaporated, the crystals are dried at low heat, and each jar is filled by hand. No additives.",
    bullets: [
      "Made in Vik i Sogn",
      "Slow evaporation and natural crystallization",
      "No additives – sea salt only"
    ]
  },
  labels: {
    perfectFor: "Perfect for",
    ingredients: "Ingredients",
    netVolume: "Net volume"
  },
  product: {
    original: {
      name: "Original",
      heroSubtitle: "Our signature salt.",
      description:
        "Sognasalt Original is a natural sea salt with crisp flakes and balanced mineral notes. It enhances flavor without overpowering – ideal as a finishing salt for both simple and refined dishes.",
      perfectFor: ["Fish and seafood", "Meat and vegetables", "Bread, butter and eggs"],
      ingredients: "100% natural sea salt",
      netVolume: "100 ml",
      usageTitle: "Flavor & how to use",
      usageBody:
        "Sognasalt Original has crisp flakes and a clean, mild salt taste. Use it as a finishing salt: sprinkle just before serving.",
      tipsTitle: "Tips",
      tips: [
        "Great on fish and seafood, eggs, and vegetables",
        "Try it on tomatoes with a little olive oil",
        "Start small — the flakes add a lot of texture"
      ]
    }
  },
  process: {
    title: "The natural process",
    intro:
      "We make our salt from filtered fjord water and follow the process closely from evaporation to finished flakes. The goal is a pure end product with no additives and no unnecessary processing.",
    steps: [
      {
        title: "Evaporation",
        bullets: [
          "Fjord water is collected and filtered",
          "Slowly evaporated – using wood-fired heat in winter and solar warmth the rest of the year"
        ]
      },
      {
        title: "Reduction",
        bullets: [
          "Gently reduced until crystals/flakes begin to form",
          "We stop before it darkens or burns"
        ]
      },
      {
        title: "Drying",
        bullets: [
          "Air-dried at low heat (about 40–60°C)",
          "Each jar is filled and labeled by hand"
        ]
      }
    ],
    note: "The result is a pure, honest and unrefined gourmet salt."
  },
  origin: {
    title: "From Vik i Sogn, Norway",
    body:
      "Surrounded by steep mountains and cold, clear fjord waters, salt has long been part of coastal life. Sognasalt is our modern expression of this heritage.",
    extra:
      "The Sognefjord and the landscape around Vik set the scene for our work: cold, clear water and a steady pace. Sognasalt is made by hand, with focus on raw material and process."
  },
  footer: {
    short: "Handcrafted in Norway · Natural · No additives",
    links: [
      { label: "Contact", href: "mailto:post@sognasalt.no" },
      { label: "Instagram", href: "https://www.instagram.com/sognasalt/" }
    ]
  }
};

export default en;
