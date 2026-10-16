// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages custom domain, served from the repository root.
  site: 'https://tritolem.io',
  integrations: [
    starlight({
      title: 'Tritolem Docs',
      description: "Tritolem's technical documentation.",
      logo: {
        src: './src/assets/brand/tritolem-mark.png',
        alt: 'Tritolem',
      },
      favicon: '/favicon.ico',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tritolem' },
      ],
      customCss: ['./src/styles/starlight-theme.css'],
      sidebar: [
        { label: 'Overview', link: '/docs/' },
        { label: 'Concepts', items: [{ autogenerate: { directory: 'docs/concepts' } }] },
        { label: 'Architecture', items: [{ autogenerate: { directory: 'docs/architecture' } }] },
        { label: 'Guides', items: [{ autogenerate: { directory: 'docs/guides' } }] },
        { label: 'Reference', items: [{ autogenerate: { directory: 'docs/reference' } }] },
        { label: 'Project', items: [{ autogenerate: { directory: 'docs/project' } }] },
      ],
    }),
  ],
});
