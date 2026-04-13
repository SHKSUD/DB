# Dr. Debashis Das — Official Website

Next.js 14 · TypeScript · Tailwind CSS · Sanity CMS · Razorpay

## Quick Start

```bash
npm install
cp .env.local.example .env.local
# Fill in your keys in .env.local
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay live/test key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay secret (server-only) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | From sanity.io/manage |
| `NEXT_PUBLIC_SANITY_DATASET` | Usually `production` |
| `SANITY_API_TOKEN` | Read token from Sanity |

## Deploy to Vercel

1. Push to GitHub
2. Connect repo at vercel.com
3. Add all env variables in Vercel dashboard
4. Deploy — every `git push` auto-deploys

## Sanity Studio Setup

```bash
npm create sanity@latest -- --project-id YOUR_ID --dataset production
```

Then copy schemas from `sanity/schemas/` into your Sanity project.

## Pages

| Route | Purpose |
|---|---|
| `/` | Homepage — hero, conditions, services, articles preview |
| `/about` | Physician narrative, credentials |
| `/book` | Booking form + Razorpay payment |
| `/thank-you` | Post-payment confirmation |
| `/articles` | Sanity-powered blog index |
| `/articles/[slug]` | Individual article |
| `/services/[slug]` | Service detail pages |
| `/conditions/[slug]` | Condition pages with FAQ schema (SEO) |

## Updating Domain

Replace `https://yourdomain.com` in:
- `src/app/sitemap.ts`
- `public/robots.txt`
