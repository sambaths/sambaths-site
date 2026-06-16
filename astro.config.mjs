import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://sambaths.com',
  integrations: [mdx(), sitemap()],
});
