import Image from "next/image";
import { withBasePath } from "@/lib/withBasePath";
import { getContent } from "@/content";
import ImageGallery from "@/components/ImageGallery";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "no" }, { lang: "en" }, { lang: "de" }];
}

export default function ProductOriginalPage({
  params
}: {
  params: { lang: "no" | "en" | "de" };
}) {
  const content = getContent(params.lang);
  const product = content.product.original;

  return (
    <main>
      <section className="hero">
        <div>
          <Image
            src={withBasePath("/images/product-original.jpg")}
            alt={`Sognasalt ${product.name}`}
            width={640}
            height={640}
            className="hero-logo"
            style={{ objectFit: "contain" }}
            priority
          />
          <h1>{product.name}</h1>
          <p className="subtitle">{product.heroSubtitle}</p>
          <p>{product.description}</p>
        </div>
      </section>

      <section className="section card card-light card-pad">
        <h2>{content.process.title}</h2>
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
        <p className="note">{content.process.note}</p>
      </section>

      <section className="section card card-light card-pad">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="product-meta">
          <div>
            <h3>{content.labels.perfectFor}</h3>
            <ul>
              {product.perfectFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{content.labels.ingredients}</h3>
            <p>{product.ingredients}</p>
            <h3>{content.labels.netVolume}</h3>
            <p>{product.netVolume}</p>
          </div>
        </div>
        <ImageGallery folder="assets/product/display" imageWidth={800} imageHeight={800} />
      </section>
    </main>
  );
}
