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
├── astro.config.mjs        Astro + Starlight config (site, base, sidebar)
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

The production build deploys to GitHub Pages as a project site
(`https://tritolem.github.io/website/`), per the hosting decision in
`tritolem/workspace` ADR-0002. `site` and `base` in `astro.config.mjs` are set
accordingly; update both together if the hosting target changes.

## Continuous integration

- `.github/workflows/ci.yml` runs `npm ci`, `npm run check`, and
  `npm run build` on every pull request.
- `.github/workflows/deploy.yml` builds and publishes `./dist/` to GitHub
  Pages on push to `main`.
