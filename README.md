# PulseFX Web

Landing y páginas del sitio PulseFX montadas sobre Astro.

## Stack

- Astro + TypeScript
- Tailwind instalado para nuevas piezas
- CSS global del handoff: `public/css/pulsefx.css` y `public/css/pulsefx-refine.css`
- Sanity preparado con schemas en `src/sanity/schemas`
- Deploy objetivo: Vercel

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Sanity

Configura las variables de `.env.example` en `.env` o en Vercel:

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

Los modelos están registrados en `sanity.config.ts`.

## Fuente de diseño

El paquete recibido queda como referencia en:

- `pulsefx-parte-1-diseno/source-html`
- `pulsefx-parte-2-sanity/sanity-schemas`
- `pulsefx-parte-3-guias`
