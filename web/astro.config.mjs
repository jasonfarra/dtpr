import { defineConfig } from 'astro/config';
import i18n from "astro-i18n-aut";
import locales from './locales';

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    i18n({
      defaultLocale: "en",
      locales,
    }),
  ]
});
