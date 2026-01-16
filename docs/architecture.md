# Pokemon Cards - Architecture

## Overview
A single-page application that fetches Pokemon data from PokeAPI and displays three detailed Pokemon cards.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **API**: PokeAPI (https://pokeapi.co)

## Project Structure
```
pokemon-cards/
├──
│  --- app/
│      ├── page.tsx          # Main page component
│      ├── layout.tsx        # Root layout
│      └── globals.css       # Global styles
│    components/
│      └── PokemonCard.tsx   # Reusable card component
│    types/
│      └── pokemon.ts        # TypeScript interfaces
│    lib/
│       └── api.ts            # API fetching logic
├── docs/
│   ├── architecture.md       # This file
│   ├── decisions.md          # Technical decisions log
│   └── project-snapshot.md   # Current state snapshot
└── public/                   # Static assets
```

## Data Flow
1. Page component (`page.tsx`) initiates on load
2. Fetch function in `lib/api.ts` calls PokeAPI for 3 specific Pokemon
3. Response data is typed using interfaces from `types/pokemon.ts`
4. Data is passed as props to `PokemonCard` components
5. Cards render with Tailwind-styled UI

## Component Hierarchy
```
page.tsx (Server Component)
  └── PokemonCard (Client Component) x3
```

## API Integration
- **Endpoint**: `https://pokeapi.co/api/v2/pokemon/{id or name}`
- **Method**: GET
- **Response**: JSON with Pokemon data
- **Error Handling**: Try/catch with fallback UI

## Styling Approach
- Tailwind utility classes for rapid development
- Responsive design (mobile-first)
- Custom color palette based on Pokemon types
- Hover effects and smooth transitions

## Performance Considerations
- Server-side data fetching (Next.js App Router default)
- Image optimization via Next.js `<Image>` component
- Minimal client-side JavaScript
- Static generation when possible

## CI/CD Pipeline
- **Platform**: GitHub Actions
- **Triggers**: Push to main/develop, Pull Requests
- **Checks**:
  - ESLint validation
  - TypeScript type checking
  - Production build verification
  - Multi-node version testing (18.x, 20.x)
- **Deployment**: Automatic via Vercel on main branch push