---
title: Contributing to the documentation
description: Conventions for writing and submitting Tritolem documentation pages.
---

This page is for anyone adding or editing pages under `/docs/`.

## Where content lives

Documentation pages are Markdown (or MDX) files under
`src/content/docs/docs/` in `tritolem/website`. The extra `docs/` nesting is
intentional: it keeps every Starlight page routed under `/docs/...` instead
of the site root, which is owned by the custom landing page. A file at
`src/content/docs/docs/concepts/example.md` is served at
`/docs/concepts/example/`.

Every page needs frontmatter with at least `title` and `description`:

```md
---
title: Page title
description: One sentence describing the page.
---
```

## Markdown vs. MDX

Use plain Markdown (`.md`) by default. Only use MDX (`.mdx`) when a page
needs a component that Markdown cannot express, such as Starlight's built-in
[asides](https://starlight.astro.build/guides/authoring-content/#asides) with
custom titles, tabs, or other UI components. Plain `:::note` / `:::tip` /
`:::caution` / `:::danger` asides work in both Markdown and MDX and cover
most cases, including the status callouts described below.

## Marking status honestly

Every page describing a capability that is not released must say so near
the top, using an aside:

```md
:::note
Status: Design. Not yet implemented.
:::
```

Use **Design** for product direction with no code yet, **Planned** for a
section that intentionally has no content yet (see the `architecture`,
`guides`, and `reference` landing pages for examples), and drop the aside
only once a feature is actually implemented and verified. Never describe a
command, endpoint, CRD, or UI flow as available unless it exists and has
been checked against a real build. See [Project](/docs/project/) for the
full planned/implemented/supported distinction.

## Diagrams and images

Store images under `src/assets/docs/` (create the directory if it does not
exist yet) and reference them with standard Markdown image syntax:

```md
![A short, descriptive alt text](../../../assets/docs/example.png)
```

Referencing an asset under `src/assets/` lets Astro optimize it at build
time. Always write a real, descriptive `alt` text; decorative images only
(rare in documentation) may use `alt=""`.

## Internal links

Always link using the site-root path with the `/docs/` prefix, for example
`[Clusters & agents](/docs/concepts/clusters-and-agents/)`, not a path
relative to the current file. Root-relative links do not break when a page
moves to a different directory.

Run the link checker before opening a pull request:

```sh
npm run build
npm run check:links
```

`check:links` crawls the built site and fails on broken internal links.
External links are intentionally excluded from this check (see
`package.json`) so CI does not depend on third-party sites being reachable;
review external links by hand.

## Draft content and public review

This repository only publishes content that already has a basis in
`tritolem/workspace` — an approved entry in `docs/product/DECISIONS.md`, the
product vision or MVP documents, or an accepted architecture decision
record. If you are unsure whether something is approved for public
description, do not add a page for it here; raise it in `tritolem/workspace`
first. Pull requests that add product or architecture claims without a
traceable source in those documents should be rejected in review.

## Keeping docs in sync with implementation

When a product decision changes in `tritolem/workspace` (a new or amended
entry in `DECISIONS.md`, or an accepted ADR), or when a feature actually
ships, update the corresponding page in this repository — ideally in the
same pull request as the code change, or as an immediate follow-up issue
that references the specific decision or ADR. A page's status marker
(Design / Planned / Implemented / Supported) must reflect reality at the
time the pull request merges, not at the time the page was first written.
