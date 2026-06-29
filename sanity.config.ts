import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'pulsefx',
  title: 'PulseFX CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'pulsefx',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
});
