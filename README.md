# Sognasalt

Multilingual static site built with Next.js App Router and exported for GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

If the dev server shows stale errors, clear build output:

```bash
rmdir /s /q .next
npm run dev
```

## Brand assets

The logo source file is `logo_orginal.png` in the repo root.

Generate all web-ready assets (transparent logo + icons):

```bash
npm run brand:gen
```

Outputs:
- `public/assets/brand/logo-sognasalt-white.png`
- `public/assets/brand/logo-sognasalt-white-1024.png`
- `public/assets/brand/logo-sognasalt-white-hero.png`
- `public/assets/brand/logo-sognasalt-dark.png`
- `public/favicon.ico`, `public/favicon-16x16.png`, `public/favicon-32x32.png`
- `public/apple-touch-icon.png`, `public/android-chrome-192x192.png`, `public/android-chrome-512x512.png`
- `public/site.webmanifest`

If you replace `logo_orginal.png`, rerun `npm run brand:gen`.

## Static build

```bash
npm run build
```

The static output is generated in `out/` (export).

## Preview static export

```bash
npx serve out
```

## GitHub Pages deployment

1) Push to `main`.
2) In GitHub: Settings ? Pages ? Build and deployment ? Source: **GitHub Actions**.
3) The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

The build sets `NEXT_PUBLIC_BASE_PATH` to `/<repo>` using the repo name from `github.repository`.

## Change base path

Set `NEXT_PUBLIC_BASE_PATH` before building:

```bash
NEXT_PUBLIC_BASE_PATH="/your-repo" npm run build
```

## Routes

- `/no`, `/en`, `/de`
- `/no/product/original`, `/en/product/original`, `/de/product/original`
- `/no/process`, `/en/process`, `/de/process`
- `/no/origin`, `/en/origin`, `/de/origin`

