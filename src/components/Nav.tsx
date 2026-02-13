const NAV_LABELS: Record<string, {
  home: string;
  products: string;
  process: string;
  origin: string;
  homeAriaLabel: string;
}> = {
  no: {
    home: "Hjem",
    products: "Produkter",
    process: "Prosess",
    origin: "Opprinnelse",
    homeAriaLabel: "Sognasalt – hjem",
  },
  en: {
    home: "Home",
    products: "Products",
    process: "Process",
    origin: "Origin",
    homeAriaLabel: "Sognasalt – home",
  },
  de: {
    home: "Home",
    products: "Produkte",
    process: "Prozess",
    origin: "Herkunft",
    homeAriaLabel: "Sognasalt – Home",
  },
};

import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/withBasePath";

type Lang = "no" | "en" | "de";

export default function Nav({ lang }: { lang: Lang }) {
  const t = NAV_LABELS[lang];

  return (
    <nav className="nav">
      <Link
        className="brand"
        href={`/${lang}/`}
        aria-label={t.homeAriaLabel}
      >
        <Image
          src={withBasePath("/assets/brand/logo-sognasalt-white.png")}
          alt="Sognasalt"
          width={180}
          height={48}
          className="brand-logo"
          priority
        />
      </Link>

      <div className="nav-links">
        <Link href={`/${lang}/`}>{t.home}</Link>
        <Link href={`/${lang}/product/original/`}>{t.products}</Link>
        <Link href={`/${lang}/process/`}>{t.process}</Link>
        <Link href={`/${lang}/origin/`}>{t.origin}</Link>
      </div>
    </nav>
  );
}

