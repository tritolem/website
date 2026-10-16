// @ts-check
import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://tritolem.github.io/website/
  site: 'https://tritolem.github.io',
  base: '/website',
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
