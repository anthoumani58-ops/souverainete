# Architecture

## Stack
- Next.js + TypeScript + Tailwind
- PostgreSQL + Prisma
- NextAuth (GitHub + Email)
- Stripe (test mode)
- Vitest + Playwright

## Modules
- Life First Gate (quotidien/hebdo/crise)
- Arsenal Invisible (anges/archanges)
- Play / Code / Cash pipeline
- Monetisation (locked tant que gates non valides)

## Schema DB (Prisma)
Voir [prisma/schema.prisma](../prisma/schema.prisma).

## Routes
- /: landing
- /login: auth
- /dashboard: life first
- /journal: notes
- /trackers/code
- /trackers/play
- /arsenal
- /monetization
- /roadmap

## API
- /api/auth/[...nextauth]
- /api/stripe/checkout
- /api/health
