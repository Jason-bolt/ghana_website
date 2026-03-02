# Ghana Website

A Ghana-themed site built with Next.js (App Router) featuring:

- **Intro animation**: GSAP-powered flag reveal on initial load (`app/page.tsx`)
- **Content sections**: The Genesis/Founders, National Anthem, National Pledge
- **Presidents gallery + detail pages**: Click a president to open a dedicated page at `/presidents/[slug]`
- **Mini game**: Adinkra matching puzzle

## Tech stack

- **Next.js** (App Router), **React**
- **Tailwind CSS** (v4)
- **GSAP** (`gsap`, `@gsap/react`)
- **Icons**: `lucide-react`, `react-icons`

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Scripts

```bash
npm run dev     # start dev server
npm run build   # production build
npm run start   # run production server
npm run lint    # run eslint
```

## Routes

- **`/`**: Main page (all sections)
- **`/presidents/[slug]`**: President detail page (slug is the president `alt`)
- **`/presidents`**: Redirects to `/` (see `app/presidents/page.tsx`)

## Content and data

- **Presidents data**: `data/presidents.ts`
  - `alt` is used as the route slug (e.g. `/presidents/dr_kwame_nkrumah`)
  - `text` is stored as an HTML string and rendered on the detail page
- **Lookup helper**: `utils/helper.ts` (`getPresident(slug)`)
- **Sections/components**: `components/*`
- **Images**: referenced as `/...` paths (served from `public/`)

## Deployment

This is a standard Next.js app—deploy it anywhere that supports Node.js (for example Vercel). Build with `npm run build` and run with `npm run start`.
