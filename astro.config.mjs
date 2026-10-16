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
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/tritolem' },
      ],
      sidebar: [
        { label: 'Overview', link: '/docs/' },
      ],
    }),
  ],
});
