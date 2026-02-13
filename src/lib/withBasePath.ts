import { basePath } from "@/lib/basePath";

/**
 * Prefixes an absolute URL path with Next.js basePath when deployed under a subpath (e.g. GitHub Pages).
 *
 * Example: "/assets/logo.png" -> "/Sognasalt/assets/logo.png" when NEXT_PUBLIC_BASE_PATH="/Sognasalt".
 */
export function withBasePath(p: string) {
  if (!p) return p;
  if (!p.startsWith("/")) return p;
  return `${basePath}${p}`;
}
