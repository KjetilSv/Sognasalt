import { basePath } from "@/lib/basePath";

export default function Head() {
  const target = `${basePath}/no/`;
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${target}`} />
      <title>Sognasalt</title>
    </>
  );
}
