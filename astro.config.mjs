import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // CRITICAL: Replace with your actual Vercel URL or custom domain
  site: 'https://seo-lab-one.vercel.app/', 
  integrations: [sitemap()],
});