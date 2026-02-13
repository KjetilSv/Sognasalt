export type Content = {
  lang: "no" | "en" | "de";
  site: {
    name: string;
    tagline: string;
    shortIntro: string;
    aboutTitle: string;
    aboutBody: string;
    bullets: string[];
  };
  labels: {
    perfectFor: string;
    ingredients: string;
    netVolume: string;
  };
  product: {
    original: {
      name: string;
      heroSubtitle: string;
      description: string;
      perfectFor: string[];
      ingredients: string;
      netVolume: string;
      usageTitle: string;
      usageBody: string;
      tipsTitle: string;
      tips: string[];
    };
  };
  process: {
    title: string;
    intro: string;
    steps: { title: string; bullets: string[] }[];
    note: string;
  };
  origin: {
    title: string;
    body: string;
    extra: string;
  };
  footer: {
    short: string;
    links: { label: string; href: string }[];
  };
};
