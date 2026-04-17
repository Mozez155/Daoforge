# DaoForge — Frontend

Built with Astro + React + TypeScript. This is the user-facing dapp for interacting with the DaoForge smart contracts.

## Stack
- Astro (routing, SSR, static pages)
- React (interactive components)
- Tailwind CSS (styling)
- Stellar Wallets Kit (wallet connection)
- nanostores (client-side state)

## Structure
```
src/
├── components/     # UI components (layout, pages, utils)
├── constants/      # Contract addresses, error messages, templates
├── contracts/      # Auto-generated Soroban contract bindings
├── layouts/        # Page layouts
├── pages/          # Astro pages (index, governance, project, proposal)
├── schemas/        # Zod validation schemas
├── service/        # Contract interaction, state, wallet, IPFS services
├── styles/         # Global CSS
├── types/          # TypeScript type definitions
└── utils/          # Utility functions
```

## Getting Started
```bash
bun install
bun run dev
```

## Environment
Copy `.env.example` to `.env` and fill in the required values.
