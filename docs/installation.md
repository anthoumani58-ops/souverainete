# Installation

## Prerequis
- Node.js 20+
- PostgreSQL

## Setup
1. Copier .env.example vers .env
2. Renseigner DATABASE_URL, NEXTAUTH_SECRET, GITHUB_ID, GITHUB_SECRET
3. npm install
4. npm run db:migrate
5. npm run db:seed
6. npm run dev

## Notes securite
- Ne jamais commiter .env
- Rotation des secrets conseillee tous les 90 jours
