"use client";

import { useEffect } from "react";
import { basePath } from "@/lib/basePath";

function pickLang(): "no" | "en" | "de" {
  const lang = (navigator.language || "").toLowerCase();
  if (lang.startsWith("de")) return "de";
  if (lang.startsWith("en")) return "en";
  // Norwegian covers nb/nn/no; default to no
  return "no";
}

export default function RootPage() {
  const fallback = `${basePath}/no/`;

  useEffect(() => {
    const target = `${basePath}/${pickLang()}/`;
    // Use replace() to avoid polluting history
    window.location.replace(target);
  }, []);

  return (
    <main className="page" style={{ padding: 24 }}>
      <p>
        Redirecting… If you are not redirected, open: <a href={fallback}>{fallback}</a>
      </p>
    </main>
  );
}
