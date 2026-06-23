# Equinox Partners — Corporate Site (React + Vite)

One-page corporate site for Equinox Partners株式会社, built with React 18 + Vite.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html                 # Vite entry; loads Google Fonts + /src/main.jsx
src/
  main.jsx                 # React root; imports the three stylesheets in order
  App.jsx                  # page composition + scroll/nav motion effects
  useSiteMotion.js         # hero entrance, scroll-reveal, nav-condense logic
  components/              # one component per section
    MarketingNav.jsx
    Hero.jsx
    Mission.jsx
    PainSection.jsx
    SectionHead.jsx        # shared editorial section header
    SolutionSection.jsx    # auto-advancing service carousel (useState/useEffect)
    WhyEquinox.jsx
    CaseStudyCards.jsx
    Profile.jsx
    ContactBlock.jsx       # contact form (useState)
    MarketingFooter.jsx
  assets/                  # logo + portrait (imported by components, hashed by Vite)
  styles/
    colors_and_type.css    # Equinox Partners design tokens (CSS variables, type)
    ds-styles.css          # design-system base styles
    site.css               # page-specific styles + motion classes
```

## Notes

- Images are imported as ES modules so Vite fingerprints and bundles them.
- Motion (hero entrance, scroll-reveal, nav condense) lives in `useSiteMotion.js`
  and runs from a `useEffect` in `App.jsx`. It respects `prefers-reduced-motion`.
- Fonts load from Google Fonts via `index.html`. Self-host if you need offline builds.

## Deploy (GitHub → Vercel)

This is the **source of truth** for the live site. Deploy the Vite project itself —
do NOT commit a pre-bundled standalone HTML.

1. Push this project's files to the repository Vercel watches.
2. Vercel auto-detects Vite. Confirm the project settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Every push to `main` triggers an automatic production deploy.

## Contact form (email delivery)

The contact form posts to a form-mail endpoint. To make submissions arrive by email:

1. Create a form at https://formspree.io with the destination address.
2. Open `src/components/ContactBlock.jsx` and replace `YOUR_FORM_ID` in
   `FORM_ENDPOINT` with the issued URL (e.g. `https://formspree.io/f/abcdwxyz`).
3. Commit & push — Vercel redeploys and the form delivers mail.

Until the endpoint is set, submissions are safely blocked with an on-screen notice
(no silent failures).
