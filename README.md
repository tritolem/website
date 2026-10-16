# website

Official website and documentation for the Tritolem project.

The site is static: a custom landing page at `/` and Starlight-generated
documentation at `/docs/`. There is no server or CMS.

## Status

Early. The landing page uses the Tritolem dark-purple brand (approved logo,
color tokens, responsive layout). Its copy and the documentation section both
state the current development status explicitly; no feature is released yet.

## Requirements

- Node.js 22.22.0 or later (see `engines` in `package.json`).
- npm (the project is set up with npm and commits `package-lock.json`).

## Setup

```sh
npm install
```

## Commands

| Command              | Action                                                           |
| --------------------- | ------------------------------------------------------------------ |
| `npm run dev`         | Start the local dev server at `localhost:4321`.                    |
| `npm run build`       | Type-check, then build the production site to `./dist/`.          |
| `npm run check`       | Run Astro's type and content checks without building.             |
| `npm run check:links` | Crawl `./dist` and fail on broken internal links. Run after `build`. |
| `npm run preview`     | Preview the production build locally.                             |

`npm run build` runs `astro check` before `astro build` (see `package.json`),
so a successful build also implies a clean check.

## Project structure

```text
/
├── astro.config.mjs        Astro + Starlight config (site, logo, favicon, theme, sidebar)
├── src/
│   ├── assets/brand/       Logo source files and MANIFEST.md (provenance/approval)
│   ├── components/         SiteHeader.astro, SiteFooter.astro (shared across marketing pages)
│   ├── content.config.ts   Starlight docs collection definition
│   ├── content/docs/docs/  Documentation pages: concepts/, architecture/,
│   │                       guides/, reference/, project/ — routed at /docs/
│   ├── layouts/            MarketingLayout.astro (head boilerplate, header/footer, skip link)
│   ├── lib/paths.ts        Shared base-path-aware URL helpers
│   ├── pages/index.astro   Custom marketing landing page at /
│   └── styles/             brand.css (landing page tokens), starlight-theme.css (docs theme)
└── public/                 Static assets (favicons, CNAME)
```

Starlight content is nested under `src/content/docs/docs/` so that its pages
are routed at `/docs/...` instead of the site root, which stays owned by the
custom `src/pages/index.astro` landing page. This avoids any route conflict
between the marketing page and the documentation section.

## Documentation information architecture

`/docs/` has six sections: Overview, Concepts, Architecture, Guides,
Reference, and Project (contributing, roadmap status, license). Architecture,
Guides, and Reference are currently placeholders explicitly marked
`Planned`; Concepts describes the approved product model and is marked
`Design`. See **[Contributing to the documentation](src/content/docs/docs/project/contributing.md)**
for authoring conventions: Markdown vs. MDX, status markers, diagrams and
images, internal links, draft/public review, and keeping docs in sync with
`tritolem/workspace` decisions.

## Design system

The dark-purple brand is defined once and shared by both the custom landing
page and Starlight:

- `src/styles/brand.css` — CSS custom properties (`--c-*`) and base styles for
  the marketing page.
- `src/styles/starlight-theme.css` — overrides Starlight's `--sl-color-*`
  tokens with the same palette, loaded via `customCss` in `astro.config.mjs`.
  The site is brand-locked: the light-mode override intentionally mirrors the
  dark palette so the theme toggle does not break the identity.
- `src/assets/brand/` — the approved logo (icon-only `tritolem-mark.png` and
  the full `tritolem-logo-full.png` lockup) plus `MANIFEST.md` documenting
  source and approval.

All text/background color pairs were checked against WCAG AA contrast
(4.5:1 for body text, 3:1 for large text/UI).

## Hosting

The production build deploys to GitHub Pages under the custom domain
`https://tritolem.io/`, served from the repository root, per the hosting
decision in `tritolem/workspace` ADR-0002. `site` in `astro.config.mjs` is set
accordingly and `public/CNAME` pins the custom domain so GitHub Pages does not
forget it on the next deploy. Update both together if the hosting target
changes; if the site ever moves to a path-based project domain again, a `base`
option would need to be reintroduced.

## Continuous integration

- `.github/workflows/ci.yml` runs `npm ci`, `npm run check`, `npm run build`,
  and `npm run check:links` on every pull request. The link check crawls the
  built site and only validates internal links; external links are skipped
  so CI does not depend on third-party sites being reachable.
- `.github/workflows/deploy.yml` builds and publishes `./dist/` to GitHub
  Pages on push to `main`.
