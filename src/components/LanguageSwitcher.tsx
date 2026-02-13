import Link from "next/link";
import type { Lang } from "@/content";

export default function LanguageSwitcher({ current }: { current: Lang }) {
  return (
    <div className="language-switcher" aria-label="Language switcher">
      <Link className={current === "no" ? "active" : ""} href="/no/">
        NO
      </Link>
      <span aria-hidden="true">/</span>
      <Link className={current === "en" ? "active" : ""} href="/en/">
        EN
      </Link>
      <span aria-hidden="true">/</span>
      <Link className={current === "de" ? "active" : ""} href="/de/">
        DE
      </Link>
    </div>
  );
}
