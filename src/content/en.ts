import type { Content } from "./types";

const en: Content = {
  lang: "en",
  site: {
    name: "Sognasalt",
    tagline: "Gourmet sea salt from Vik i Sogn, Norway",
    shortIntro:
      "Handcrafted sea salt from the Sognefjord – slowly evaporated, naturally crystallized and hand-finished. A clean gourmet product shaped by fjord, mountains and tradition."
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
      netVolume: "100 ml"
    }
  },
  process: {
    title: "The natural process",
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
      "Surrounded by steep mountains and cold, clear fjord waters, salt has long been part of coastal life. Sognasalt is our modern expression of this heritage."
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
