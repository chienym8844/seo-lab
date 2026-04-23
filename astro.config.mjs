import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', 
  adapter: vercel(),
  // CRITICAL: Replace with your actual Vercel URL or custom domain
  site: 'https://seo-lab-one.vercel.app/', 
  integrations: [sitemap()],
});