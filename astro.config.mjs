import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://rodriguzmanc.github.io/portfolio-astro',
  base: '/portfolio-astro/',
  output: 'static',
  integrations: [tailwind(), react()]
});