// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Сайт живе на GitHub Pages у підпапці /portfolio.
export default defineConfig({
  site: 'https://ttjelky.github.io',
  base: '/portfolio',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'uk', locales: { uk: 'uk-UA', en: 'en' } },
      // корінь — лише редірект на мову пристрою
      filter: (page) => !/\/portfolio\/$/.test(page),
    }),
  ],
});
