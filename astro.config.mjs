import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  // site: 'https://shseooo.github.io/blog',
  // base: '/blog',  // Uncomment when deploying to GitHub Pages project site
  i18n: {
    locales: ['ko', 'en', 'ja'],
    defaultLocale: 'ko',
  },
  integrations: [mdx(), react()],
});
