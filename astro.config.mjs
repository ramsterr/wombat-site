import { defineConfig } from 'astro/config';

const base = process.env.BASE_PATH ?? '/';
const site = process.env.SITE_URL ?? 'https://wombat.ramsterr.dev';

export default defineConfig({
  site,
  base,
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
