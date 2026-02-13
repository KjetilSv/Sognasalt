import Image from "next/image";
import { getContent } from "@/content";
import { withBasePath } from "@/lib/withBasePath";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "no" }, { lang: "en" }, { lang: "de" }];
}

export default function OriginPage({
  params
}: {
  params: { lang: "no" | "en" | "de" };
}) {
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
        <div className="image-gallery" style={{ gridTemplateColumns: "1fr" }}>
          <div className="image-tile">
            <Image
              src={withBasePath("/images/origin-fjord.jpg")}
              alt="Sognefjord"
              width={1280}
              height={720}
              className="image-fit"
              style={{ borderRadius: 16 }}
              priority
            />
          </div>

          <div className="image-tile">
            <Image
              src={withBasePath("/images/origin-shore.jpg")}
              alt="Fjord og fjære"
              width={768}
              height={1024}
              className="image-fit"
              style={{ borderRadius: 16 }}
            />
          </div>
        </div>
      </section>

      <section className="section card card-light card-pad">
        <p>{content.origin.body}</p>
      </section>
    </main>
  );
}
