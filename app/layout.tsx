import "./globals.css";
import type { ReactNode } from "react";

import { basePath } from "@/lib/basePath";

export const metadata = {
  title: "Sognasalt",
  description: "Gourmet sea salt from Vik i Sogn, Norway",
  manifest: `${basePath}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${basePath}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/favicon-16x16.png`, sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: `${basePath}/android-chrome-192x192.png`,
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "icon",
        url: `${basePath}/android-chrome-512x512.png`,
        sizes: "512x512",
        type: "image/png"
      }
    ]
  }
};

export const viewport = {
  themeColor: "#0b0b0b"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
