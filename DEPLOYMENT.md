# Sasha deployment checklist

## GitHub
- Repository name: `sasha-footwear`
- Default branch: `main`
- Commit the project root, including `package.json`, `app/`, `components/`, `data/`, `public/` and config files.

## Vercel
- Framework: Next.js
- Node: 20.9+ (Vercel can use its supported Node runtime)
- Build: `next build`
- Start: `next start`
- Environment: `NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN`

## Launch QA
- Test mobile navigation and product links.
- Verify all product images are licensed and available.
- Verify metadata with a page source / social preview checker.
- Submit sitemap in Google Search Console.
- Add analytics and conversion tracking only after the privacy/cookie requirements are decided.
