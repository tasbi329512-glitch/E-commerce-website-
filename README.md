# Sasha Footwear

Premium, comfortable and durable footwear storefront for the Sasha brand.

## Stack
- Next.js 16 App Router + React 19
- TypeScript
- Vercel-ready deployment
- Next.js Metadata API, sitemap, robots.txt and Product JSON-LD

## Included
- Responsive Sasha storefront homepage
- Women / Men / All product collection
- Product detail pages with semantic slugs
- Product catalog in `data/products.ts`
- Product structured data for search engines
- Open Graph / Twitter metadata
- Dynamic `sitemap.xml` and `robots.txt`
- `.env.example` for production site URL

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Vercel deployment

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Add `NEXT_PUBLIC_SITE_URL` with your live domain, for example `https://sasha.example.com`.
4. Deploy.

Vercel should detect Next.js automatically.

## Product editing

Edit `data/products.ts` to add products. Each product should have a unique SEO-friendly `slug`, name, category, price, description, image, sizes and styling copy.

## SEO checklist before launch

- Replace the temporary Vercel URL with the final domain.
- Add a production Open Graph image under `app/opengraph-image.jpg` if desired.
- Connect Google Search Console and submit `/sitemap.xml`.
- Replace demo Unsplash images with owned/commercial product photography.
- Add real shipping, return, contact and policy pages before accepting orders.
- Connect the checkout/cart backend (Stripe, Shopify, or a Pakistan-focused payment provider) before launch.

## Brand positioning

**Sasha — Premium comfort. Everyday confidence.**

The storefront is intentionally minimal, editorial and mobile-first so the products remain the visual focus.
