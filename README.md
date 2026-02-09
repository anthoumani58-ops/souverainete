# Souverainete Creation

Site web complet (MVP puis V1) pour Anthoumani MADI (nom de naissance MOUSSA), fondateur d Atoudev.

## Jeu choisi: Go (Justification en 5 lignes)
- Ladder clair (rangs kyu/dan) et progression mesurable.
- Entrainement solo puissant (problemes, joseki, tsumego).
- Contenus monetisables legalement (guides, reviews, outils).
- Respect des politiques: pas de paris, pas de triche, pas de bot.
- Alignement avec la discipline et la patience (Life First).

## Objectif
Stabiliser la vie et la clarte mentale, progresser en code, jouer un jeu choisi, transformer la progression en revenus legaux, tracables, et ethiques.

## Documents clefs
- Vision & garde-fous: [VISION.md](VISION.md)
- Architecture: [docs/architecture.md](docs/architecture.md)
- Installation: [docs/installation.md](docs/installation.md)
- Plan de deploiement: [docs/deployment-plan.md](docs/deployment-plan.md)
- Roles GitHub: [docs/org-roles.md](docs/org-roles.md)
- RGPD/CGU/Privacy: [docs/rgpd-cgu-privacy.md](docs/rgpd-cgu-privacy.md)

## Structure de repo (extrait)
- src/app: pages Next.js (App Router)
- src/components: UI
- src/lib: logique metier, gates, auth, stripe
- prisma: schema et seed
- docs: architecture et guides
- .github/workflows: CI

## Routes/pages (MVP)
- /: Landing
- /login: Auth
- /dashboard: Life First Gate
- /journal: Journal
- /trackers/code: Tracker code
- /trackers/play: Tracker jeu
- /arsenal: Arsenal Invisible
- /monetization: Monetisation (lock)
- /roadmap: Roadmap & regles

## Commandes
- npm install
- npm run db:migrate
- npm run db:seed
- npm run dev

## MVP en tickets (GitHub Issues)
1. Auth NextAuth (GitHub + Email) + pages login
2. Dashboard Life First + gates (quotidien/hebdo/crise)
3. Journal + tags + stress
4. Tracker code + commits + temps
5. Tracker jeu + notes + replay SGF
6. Arsenal Invisible (checklists + scripts)
7. Monetisation lock + catalogue
8. Stripe test mode (ebook + coaching)
9. Roadmap & regles (verite, responsabilite)
10. CI GitHub Actions (lint + tests)

## V1 (6-8 semaines)
- Import stats jeu + GitHub API
- Streaks et analyse automatique
- Generateur de contenu (validation humaine)
- Pages SEO, CRM leger, multi-tenant
- Admin panel, export PDF/CSV

## PR format
Chaque PR doit inclure: objectif, impact, risques, tests, rollback plan.
