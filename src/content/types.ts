export type Content = {
  lang: "no" | "en" | "de";
  site: {
    name: string;
    tagline: string;
    shortIntro: string;
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
    };
  };
  process: {
    title: string;
    steps: { title: string; bullets: string[] }[];
    note: string;
  };
  origin: {
    title: string;
    body: string;
  };
  footer: {
    short: string;
    links: { label: string; href: string }[];
  };
};
