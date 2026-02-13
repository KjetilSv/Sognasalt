import type { Content } from "./types";

const no: Content = {
  lang: "no",
  site: {
    name: "Sognasalt",
    tagline: "Gourmethavsalt fra Vik i Sogn, Norge",
    shortIntro:
      "Håndlaget havsalt fra Sognefjorden – langsomt fordampet, naturlig krystallisert og ferdigstilt for hånd. Et rent gourmetprodukt, formet av fjord, fjell og tradisjon."
  },
  labels: {
    perfectFor: "Passer til",
    ingredients: "Ingredienser",
    netVolume: "Nettovolum"
  },
  product: {
    original: {
      name: "Original",
      heroSubtitle: "Vår signatur.",
      description:
        "Sognasalt Original er et naturlig havsalt med sprø flak og balansert mineralitet. Saltflakene løfter smaken uten å dominere – perfekt som finish på både enkle og raffinerte retter.",
      perfectFor: ["Fisk og sjømat", "Kjøtt og grønnsaker", "Brød, smør og egg"],
      ingredients: "100 % naturlig havsalt",
      netVolume: "100 ml"
    }
  },
  process: {
    title: "Den naturlige prosessen",
    steps: [
      {
        title: "Fordamping",
        bullets: [
          "Fjordvann samles og siles",
          "Vannet fordampes langsomt – med vedovn om vinteren og solvarme resten av året"
        ]
      },
      {
        title: "Innkok",
        bullets: [
          "Saltlaken kokes forsiktig inn til krystaller/flak danner seg",
          "Vi følger med og stopper før det blir brent"
        ]
      },
      {
        title: "Ettertørking",
        bullets: [
          "Krystallene ettertørkes ved lav varme (ca. 40–60°C)",
          "Hvert glass fylles og merkes for hånd"
        ]
      }
    ],
    note: "Dette gir et rent, ærlig og ubehandlet sluttprodukt."
  },
  origin: {
    title: "Fra Vik i Sogn, Norge",
    body:
      "Omringet av bratte fjell og kaldt, klart fjordvann har salt vært en del av kystkulturen i generasjoner. Sognasalt er vår moderne tolkning av denne arven."
  },
  footer: {
    short: "Håndlaget i Norge · Naturlig · Uten tilsetninger",
    links: [
      { label: "Kontakt", href: "mailto:post@sognasalt.no" },
      { label: "Instagram", href: "https://www.instagram.com/sognasalt/" }
    ]
  }
};

export default no;
