# tommyeastman.com

One-page personal site for Tommy Eastman, built from the resume in `public/Tommy-Eastman-Resume.pdf`.

Astro 7, Tailwind v4, one self-hosted variable font, no client framework. The whole page is a
single HTML file (about 14 KB gzipped) plus the font; Lighthouse scores 100 / 100 / 100 / 100 on
mobile and desktop.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
npm run check      # type-check .astro and .ts files
```

Node 22.12 or newer.

## Deploy on Vercel

Import the repository at vercel.com/new. Vercel detects Astro and needs no settings: build
command `astro build`, output directory `dist`. Canonical and Open Graph URLs use the production
URL Vercel injects at build time; set a `SITE_URL` environment variable (for example
`https://tommyeastman.com`) once a custom domain is attached.

## Edit the content

Everything visible lives in `src/data/resume.ts`: headline, intro, the five impact numbers,
roles and bullets, skills, leadership statement, education, volunteering, contact details.
Roles with a `visible` count show that many bullets and fold the rest behind "Show N more".

To replace the resume PDF, overwrite `public/Tommy-Eastman-Resume.pdf` (the file name is
referenced from `resumePath` in the data file).

## Add a portrait

Drop a photo at `src/assets/portrait.jpg` (or `.png` / `.webp`, portrait orientation, at least
1200 px wide). The hero switches to a split layout with the photo on the right, and Astro
generates responsive sizes at build time. No other change needed.

## Where things are

| Path | What |
|---|---|
| `src/styles/global.css` | Design tokens (`light-dark()` palette, one accent), type, motion, component classes |
| `src/layouts/Base.astro` | `<head>`: meta, Open Graph, JSON-LD, theme script, font preload |
| `src/components/*.astro` | One file per section; the small scripts (theme toggle, scroll reveal, count-up, scroll spy) sit inside the component they belong to |
| `src/fonts/` | Bricolage Grotesque, latin subset, weight 200-800 with optical sizing |
| `public/og.png`, `public/icon.png`, `public/apple-touch-icon.png` | Social card and icons |

## Design notes

- Theme follows the system and can be toggled in the nav; the choice is kept in `localStorage`.
- Every animation respects `prefers-reduced-motion`. Scroll-reveal styles are enabled only when
  JavaScript runs, and a CSS safety animation reveals everything after three seconds regardless.
- Palette, spacing and layout follow the [taste-skill](https://github.com/leonxlnx/taste-skill)
  guidance: one accent, no em-dashes, no eyebrow labels, hero fits the viewport, real content
  only.
