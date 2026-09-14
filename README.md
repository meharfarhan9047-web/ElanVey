# Elan Vey

Premium creative strategy website for **Elan Vey** — built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/subscription` | Subscription |
| `/founders` | Founders |
| `/reviews` | Customer Reviews |
| `/contact` | Contact |

## Content Management

Replaceable content lives in `src/data/`:

- `site.ts` — Site config, contact info, social links
- `navigation.ts` — Nav and footer links
- `services.ts` — Service listings
- `testimonials.ts` — Customer reviews
- `founders.ts` — Founder profiles
- `subscription.ts` — Subscription benefits and FAQs
- `process.ts` — Process steps

Placeholder content is marked with brackets, e.g. `[CONTACT EMAIL]`, `[SUBSCRIPTION PRICE]`.

## Environment Variables

Create a `.env.local` file for production:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deployment (GitHub → Vercel → Custom Domain)

1. Push this repository to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain
4. Deploy — Vercel auto-detects Next.js
5. Add your custom domain in Vercel project settings
6. Configure DNS records as instructed by Vercel

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Pages and routes
├── components/
│   ├── contact/      # Contact form
│   ├── home/         # Homepage sections
│   ├── layout/       # Navbar, Footer
│   └── ui/           # Shared UI components
└── data/             # Content data files
```
