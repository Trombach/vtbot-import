import { defineConfig } from 'astro/config';

import vtbot from 'astro-vtbot';

// https://astro.build/config
export default defineConfig({
  integrations: [vtbot()]
});