# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured. TypeScript type checking runs as part of `next build`.

## Project Overview

**Keralam's Saffron Dawn** — A data journalism / scrollytelling site documenting BJP/NDA electoral growth in Kerala from 2010–2025. It combines narrative storytelling with interactive data exploration.

**Pages:**
- `/` — Main story page (scrollytelling narrative)
- `/data-vault` — Interactive election data explorer
- `/2026` — Placeholder for live 2026 election chapter

## Architecture

### Component Organization

```
components/
├── acts/       # 9 narrative "acts" (ActI–ActIX) — the story backbone
├── charts/     # Recharts-based data visualizations
├── maps/       # Leaflet/React-Leaflet maps (SSR disabled via dynamic())
├── datavault/  # Data querying & filtering UI
└── shared/     # Reusable sections (Navbar, Timeline, Manifesto, etc.)
```

The story in `app/page.tsx` assembles Acts I–IX plus shared sections in narrative order.

### Data Flow

All data is static — no backend API.

- **`/public/data/processed/*.json`** — Pre-processed election results (Lok Sabha, Assembly, District/Block/Gram Panchayat, Corporations, Municipalities). Components fetch these directly.
- **`/public/data/vault/kerala_elections.parquet`** — Columnar data for DuckDB-WASM queries in the data vault. The data vault has been migrated to use JSON for instant loading; Parquet/DuckDB is legacy.
- **`/public/geojson/kerala_lsg_data.geojson`** — Geographic boundaries for map overlays.
- **`/data/raw/`** — Source CSVs from Election Commission of India; processed by Python scripts in `/scripts/`.

### Key Patterns

**Maps require dynamic imports** — Leaflet doesn't work with SSR. Always wrap map components:
```tsx
const MyMap = dynamic(() => import('@/components/maps/MyMap'), { ssr: false });
```

**Client components are the norm** — Most components use `"use client"` for scroll interactivity, chart animations, and map rendering.

**Acts are self-contained narrative sections** — Each Act in `components/acts/` is a large scrollytelling section with its own data, animations, and layout. They are assembled sequentially in `app/page.tsx`.

## Styling

Tailwind CSS with a custom BJP-themed design system in `tailwind.config.ts`:

- **Saffron:** `#FF9933` — primary BJP color, used for accents, CTAs, highlights
- **Green:** `#138808` — secondary BJP color
- **Ink palette:** Saffron-tinted dark neutrals (`ink-950` → `ink-50`)
- **Forest palette:** Green-tinted dark neutrals

Custom CSS classes (in `app/globals.css`): `.glass-card`, `.statement-header`, `.btn-saffron`, animated gradient borders.

**Fonts:** Montserrat (headings), Source Sans 3 (body), Playfair Display (quotes), JetBrains Mono (data/mono).

## TypeScript

Strict mode is enabled. Path alias `@/*` resolves to the repo root.
