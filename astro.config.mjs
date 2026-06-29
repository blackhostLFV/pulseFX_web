import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://blackhostlfv.github.io',
  base: '/pulseFX_web',
  integrations: [tailwind()],
  build: {
    format: 'file'
  }
});
