import Image from "next/image";
import type { Content } from "@/content/types";
import { withBasePath } from "@/lib/withBasePath";

export default function Footer({ content }: { content: Content }) {
  const links = content.footer.links ?? [];

  return (
    <footer className="footer">
      <div className="footer-logo">
        <Image
          src={withBasePath("/assets/brand/logo-sognasalt-white.png")}
          alt="Sognasalt"
          width={120}
          height={32}
        />
      </div>
      <p>{content.footer.short}</p>

      {links.length > 0 ? (
        <p className="footer-links">
          {links.map((l, i) => (
            <span key={l.href + l.label}>
              <a className="footer-link" href={l.href}>
                {l.label}
              </a>
              {i < links.length - 1 ? " · " : null}
            </span>
          ))}
        </p>
      ) : (
        <p>
          <a className="footer-link" href="https://sognasalt.no">
            sognasalt.no
          </a>
        </p>
      )}
    </footer>
  );
}
