import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getContent, type Lang } from "@/content";
import { isLanguage, languages } from "@/lib/i18n";
import { basePath } from "@/lib/basePath";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: Lang } }): Metadata {
  const { lang } = params;
  if (!isLanguage(lang)) return {};
  const content = getContent(lang);

  // Note: basePath is empty for root deploys; set via NEXT_PUBLIC_BASE_PATH for GitHub Pages.
  const langRoot = `${basePath}/${lang}/`;

  return {
    title: {
      default: content.site.name,
      template: `%s · ${content.site.name}`
    },
    description: content.site.shortIntro,
    alternates: {
      canonical: langRoot,
      languages: {
        no: `${basePath}/no/`,
        en: `${basePath}/en/`,
        de: `${basePath}/de/`
      }
    }
  };
}

export default function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: Lang };
}) {
  const { lang } = params;
  if (!isLanguage(lang)) notFound();
  const content = getContent(lang);

  return (
    <div className="page">
      <header className="header">
        <Nav lang={lang} />
      </header>
      {children}
      <Footer content={content} />
    </div>
  );
}
