import type { Content } from "./types";

const de: Content = {
  lang: "de",
  site: {
    name: "Sognasalt",
    tagline: "Gourmet-Meersalz aus Vik i Sogn, Norwegen",
    shortIntro:
      "Handgefertigtes Meersalz aus dem Sognefjord – langsam verdampft, natürlich kristallisiert und von Hand veredelt. Ein klares Gourmetprodukt, geprägt von Fjord, Bergen und Tradition."
  },
  labels: {
    perfectFor: "Ideal für",
    ingredients: "Zutaten",
    netVolume: "Nettovolumen"
  },
  product: {
    original: {
      name: "Original",
      heroSubtitle: "Unser Signature-Salz.",
      description:
        "Sognasalt Original ist ein naturbelassenes Meersalz mit knusprigen Flocken und ausgewogener Mineralität. Ideal als Finish – es unterstreicht den Geschmack, ohne ihn zu überdecken.",
      perfectFor: ["Fisch und Meeresfrüchte", "Fleisch und Gemüse", "Brot, Butter und Eier"],
      ingredients: "100 % natürliches Meersalz",
      netVolume: "100 ml"
    }
  },
  process: {
    title: "Der natürliche Prozess",
    steps: [
      {
        title: "Verdampfung",
        bullets: [
          "Fjordwasser wird gesammelt und gefiltert",
          "Langsame Verdampfung – im Winter über Holzfeuer, sonst durch Sonnenwärme"
        ]
      },
      {
        title: "Einkochen",
        bullets: [
          "Schonendes Einkochen, bis Kristalle/Flocken entstehen",
          "Wir stoppen, bevor es zu dunkel wird oder anbrennt"
        ]
      },
      {
        title: "Trocknung",
        bullets: [
          "Nachgetrocknet bei niedriger Wärme (ca. 40–60°C)",
          "Jedes Glas wird von Hand abgefüllt und etikettiert"
        ]
      }
    ],
    note: "Das Ergebnis ist ein reines, ehrliches Gourmet-Meersalz."
  },
  origin: {
    title: "Aus Vik i Sogn, Norwegen",
    body:
      "Umgeben von steilen Bergen und klarem, kaltem Fjordwasser hat Salz hier eine lange Tradition. Sognasalt ist unsere moderne Interpretation dieses Erbes."
  },
  footer: {
    short: "Handgefertigt in Norwegen · Natürlich · Ohne Zusatzstoffe",
    links: [
      { label: "Kontakt", href: "mailto:post@sognasalt.no" },
      { label: "Instagram", href: "https://www.instagram.com/sognasalt/" }
    ]
  }
};

export default de;
