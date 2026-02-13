import { redirect } from "next/navigation";
import { basePath } from "@/lib/basePath";

export default function RootPage() {
  const target = `${basePath}/no/`;

  if (process.env.NODE_ENV !== "production") {
    redirect(target);
  }

  return (
    <main className="page">
      <p>
        Redirecting to Norwegian site... If you are not redirected, follow the
        link: <a href={target}>Norwegian homepage</a>.
      </p>
    </main>
  );
}
