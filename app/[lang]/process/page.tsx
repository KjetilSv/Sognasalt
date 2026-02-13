import { getContent } from "@/content";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "no" }, { lang: "en" }, { lang: "de" }];
}

export default function ProcessPage({ params }: { params: { lang: "no" | "en" | "de" } }) {
  const content = getContent(params.lang);

  return (
    <main>
      <section className="hero">
        <div className="section card card-light card-pad">
          <h1>{content.process.title}</h1>
          <p>{content.process.note}</p>
        </div>
      </section>

      <section className="section card card-light card-pad">
        <p>{content.process.intro}</p>
      </section>

      <section className="section card card-light card-pad">
        <ul className="process-steps">
          {content.process.steps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <ul>
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
