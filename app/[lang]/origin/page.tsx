import { getContent } from "@/content";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "no" }, { lang: "en" }, { lang: "de" }];
}

export default function OriginPage({ params }: { params: { lang: "no" | "en" | "de" } }) {
  const content = getContent(params.lang);

  return (
    <main>
      <section className="hero">
        <div>
          <h1>{content.origin.title}</h1>
          <p>{content.origin.body}</p>
        </div>
      </section>

      <section className="section card card-light card-pad">
        <p>{content.origin.body}</p>
      </section>
    </main>
  );
}
