import Image from "next/image";
import { getContent } from "@/content";
import { withBasePath } from "@/lib/withBasePath";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "no" }, { lang: "en" }, { lang: "de" }];
}

export default function HomePage({ params }: { params: { lang: "no" | "en" | "de" } }) {
  const content = getContent(params.lang);
  const product = content.product.original;

  return (
    <main>
      <section className="hero">
        <div className="section card card-dark card-shadow card-pad hero-dark">
          <div className="hero-inner">
            <Image
              src={withBasePath("/assets/brand/logo-sognasalt-white-1024.png")}
              alt="Sognasalt"
              width={720}
              height={360}
              className="hero-logo"
              priority
            />
            <p className="tagline">{content.site.tagline}</p>
            <p>{content.site.shortIntro}</p>
          </div>
        </div>
      </section>

      <section className="section card card-light card-pad">
        <h2>{content.site.aboutTitle}</h2>
        <p>{content.site.aboutBody}</p>
        <ul>
          {content.site.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="section card card-light card-pad">
        <Image
          src={withBasePath("/images/product-original.jpg")}
          alt={`Sognasalt ${product.name}`}
          width={480}
          height={480}
          className="image-fit"
          style={{ maxWidth: 360, margin: "0 auto 16px", display: "block" }}
        />
        <h2>{product.name}</h2>
        <p className="subtitle">{product.heroSubtitle}</p>
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
      </section>

      <section className="section card card-light card-pad">
        <h2>{content.origin.title}</h2>
        <p>{content.origin.body}</p>
      </section>
    </main>
  );
}
