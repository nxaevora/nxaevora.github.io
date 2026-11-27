import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nxaevora.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    environments: {
      ssr: { resolve: { noExternal: ['@material/material-color-utilities'] } },
      prerender: { resolve: { noExternal: ['@material/material-color-utilities'] } },
    },
  },
});
