# website

Official website and documentation for the Tritolem project.

The site is static: a custom landing page at `/` and Starlight-generated
documentation at `/docs/`. There is no server or CMS.

## Status

Early scaffold. The landing page and documentation section are placeholders
stating the current development status; no feature is released yet.

## Requirements

- Node.js 22.22.0 or later (see `engines` in `package.json`).
- npm (the project is set up with npm and commits `package-lock.json`).

## Setup

```sh
npm install
```

## Commands

| Command         | Action                                                    |
| ---------------- | ---------------------------------------------------------- |
| `npm run dev`    | Start the local dev server at `localhost:4321`.             |
| `npm run build`  | Type-check, then build the production site to `./dist/`.    |
| `npm run check`  | Run Astro's type and content checks without building.       |
| `npm run preview`| Preview the production build locally.                       |

`npm run build` runs `astro check` before `astro build` (see `package.json`),
so a successful build also implies a clean check.

## Project structure

```text
/
├── astro.config.mjs        Astro + Starlight config (site, sidebar)
├── src/
│   ├── content.config.ts   Starlight docs collection definition
│   ├── content/docs/docs/  Starlight documentation pages, routed at /docs/
│   └── pages/index.astro   Custom marketing landing page at /
└── public/                 Static assets
```

Starlight content is nested under `src/content/docs/docs/` so that its pages
are routed at `/docs/...` instead of the site root, which stays owned by the
custom `src/pages/index.astro` landing page. This avoids any route conflict
between the marketing page and the documentation section.

## Hosting

The production build deploys to GitHub Pages under the custom domain
`https://tritolem.io/`, served from the repository root, per the hosting
decision in `tritolem/workspace` ADR-0002. `site` in `astro.config.mjs` is set
accordingly and `public/CNAME` pins the custom domain so GitHub Pages does not
forget it on the next deploy. Update both together if the hosting target
changes; if the site ever moves to a path-based project domain again, a `base`
option would need to be reintroduced.

## Continuous integration

- `.github/workflows/ci.yml` runs `npm ci`, `npm run check`, and
  `npm run build` on every pull request.
- `.github/workflows/deploy.yml` builds and publishes `./dist/` to GitHub
  Pages on push to `main`.
