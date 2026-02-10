# VISION & GARDE-FOUS — Projet Souveraineté

**Fondateur:** Anthoumani MADI (né MOUSSA)  
**Organisation:** Atoudev  
**Date:** 8 février 2026  
**Principe suprême:** **La vie d'abord**

---

## 1. JEU CHOISI : GO (Baduk / Wéiqí / 囲碁)

**Justification en 5 lignes:**
1. **Profondeur stratégique infinie** : le Go est reconnu comme l'un des jeux les plus complexes (plus que les échecs), favorisant patience, discipline mentale, et humilité.
2. **Progression mesurable** : système de classement (dan/kyu) universel, serveurs en ligne (OGS, KGS, Fox Go), replays SGF standardisés.
3. **Entraînement solo riche** : tsumego (problèmes tactiques), joseki, revue de parties, IA (KataGo, Leela Zero), fuseki.
4. **Monétisation légale claire** : coaching, cours vidéo, ebooks de fuseki/joseki, outils d'analyse (SaaS), affiliation matériel (gobans, pierres).
5. **Philosophie alignée** : le Go exige centrage mental, gestion émotionnelle, vision long-terme — parfait pour un projet "Life First".

**Alternatives considérées mais écartées:**
- Échecs : excellent, mais marché saturé (Chess.com, Lichess).
- TFT/LoL/Valorant : politiques Riot contre RMT/coaching tiers, trop de risques légaux.
- Poker : conflits légaux gambling, image négative.

**Décision finale:** **GO** — stratégique, éthique, mesurable, avec un marché de niche passionné et peu saturé.

---

## 2. PRINCIPES & VALEURS (GARDE-FOUS)

### 2.1. Légalité & Éthique
- ❌ **Interdit:** RMT (real money trading in-game), boosting de comptes, paris illégaux, vente de comptes, fraude, bots.
- ✅ **Autorisé:** contenu éducatif (guides, vidéos, ebooks), coaching 1-à-1, outils SaaS, affiliation matériel/plateformes.
- ✅ **Transparent:** CGU/Privacy/RGPD dès le MVP, consentement opt-in pour emails/données.

### 2.2. Sécurité (OWASP)
- Pas de clés API/secrets en clair (`.env` ignoré, variables serveur seulement).
- Rotation de secrets régulière.
- Input validation, CSP headers, rate-limiting, auth tokens sécurisés.
- Stripe en mode Test jusqu'à audit complet.

### 2.3. UX & Mesurabilité
- Interface simple, progressive (onboarding guidé).
- Métriques claires : gates validés, streak code/jeu, revenus.
- Pas de dark patterns, pas de manipulation psychologique.

### 2.4. Souveraineté & Humilité
- **"Le Créateur, c'est moi-même"** : l'utilisateur est responsable de ses choix, le site est un outil, pas une solution magique.
- **Arsenal Invisible** : métaphore structurante (anges = assistants, archanges = règles), jamais dogme imposé.
- **Option spiritualité** : prière, gratitude, examen de conscience = outils facultatifs, respectueux de toute croyance ou absence.

---

## 3. "LIFE FIRST GATE" (Verrou de Vie)

**Avant toute action de monétisation ou jeu compétitif, l'utilisateur doit valider des gates:**

### Gate Quotidien (5-10 min)
- ☑️ **Centrage/Prière** : 2 min de respiration, gratitude, ou prière (facultatif mais recommandé).
- ☑️ **Santé** : 1 action (ex: 10 pompes, marche 10 min, boire 500ml d'eau).
- ☑️ **Finance** : 1 action (ex: vérifier budget, noter 1 dépense, planifier 1 économie).
- ☑️ **Code** : 1 action (ex: 1 commit, lire 1 doc, coder 15 min).
- ☑️ **Relationnel/Maison** : 1 action (ex: appel proche, ranger bureau, courrier administratif).

### Gate Hebdomadaire
- ☑️ **Revue Budget** : vérifier soldes, catégoriser dépenses, ajuster objectifs.
- ☑️ **Revue Objectifs** : progrès jeu (rank/elo), code (projets), revenus.
- ☑️ **Revue Progrès** : streak, santé, notes journal.

### Gate Crise
- Si l'utilisateur déclare **stress/colère/impulsivité/fatigue < 6h sommeil** :
  - 🔒 **Soft lock monétisation 24h** (sauf actions essentielles).
  - 💡 **Proposer** : pause, respiration guidée, journal écrit, prière, marche.
  - 📊 **Tracker** : fréquence des crises, patterns (ex: après défaite, avant dépense).

**Langage:** performance, stabilité, discipline, clarté (pas "sois patient", mais "optimise ta baseline").

---

## 4. "ARSENAL INVISIBLE" (Anges & Archanges)

**Vision:** Un système de micro-assistants et guardrails, optionnel mais puissant.

### Anges (Micro-Assistants)
| Nom | Rôle | Checklist |
|-----|------|-----------|
| **Ange de la Clarté** | Focus mental | Méditation, notes journal, pause écran |
| **Ange du Temps** | Gestion temps | Timeboxing, Pomodoro, revue calendrier |
| **Ange du Budget** | Finance | Tracker dépenses, budget mensuel, épargne |
| **Ange du Code** | Progrès tech | Commits quotidiens, revue PR, apprentissage |
| **Ange du Jeu** | Progrès Go | Tsumego quotidien, revue partie, notes fuseki |
| **Ange du Corps** | Santé | Sommeil, hydratation, mouvement |
| **Ange du Lien** | Relations | Appels proches, gratitude, service |

### Archanges (Guardrails Supérieurs)
| Nom | Rôle | Règles |
|-----|------|--------|
| **Mikaël** | Protection/Anti-Risque | ❌ Dépense impulsive > 50€ sans revue 24h. ❌ Session jeu si sommeil < 6h. ❌ Décision business sans check budget. |
| **Raphaël** | Soin/Récupération | ✅ Pause forcée après 3h code/jeu. ✅ Détection burnout (streak cassé 3× → rest mode). |
| **Gabriel** | Vérité/Communication | ✅ Journaling honnête. ✅ Feedback utilisateur transparent. ✅ Pas de fausses promesses marketing. |
| **Uriel** | Sagesse/Stratégie | ✅ Revue hebdo. ✅ Objectifs SMART. ✅ Décisions basées données, pas émotions. |

**Implémentation:**  
- Table DB `angels` et `archangels` avec `type`, `rules JSON`, `messages`.  
- UI : cartes interactives, checklists cliquables, notifications douces.  
- Backend : middleware qui bloque actions si rules non respectées.

---

## 5. "PLAY / CODE / CASH" PIPELINE

### Boucle Quotidienne
1. **Stabiliser** : valider Gate Quotidien (Life First).
2. **Jouer** : session Go guidée (objectif, temps limité, notes post-game).
3. **Coder** : petit livrable lié au jeu (ex: parser SGF, stats viewer, article tsumego).
4. **Publier** : commit GitHub, article blog, vidéo courte.
5. **Monétiser** : si qualité atteinte, activer vente (ebook, coaching, outil).

### Voies de Revenus Légales

#### Voie A : Contenu + Affiliation
- **Contenu** : articles SEO (fuseki, joseki, tsumego), vidéos YouTube, ebooks.
- **Affiliation** : Amazon (gobans, livres), OGS/KGS (si programme existe), matériel Go.
- **Prérequis** : 10 articles publiés, 100 vues/mois, qualité > 7/10 peer review.
- **Métriques** : vues, clics, conversions, revenus.

#### Voie B : Coaching
- **Format** : sessions 1h Zoom, packs 5/10 sessions, contrats mensuels.
- **Prérequis** : rank minimum 5 dan (ou équivalent expérience), 5 reviews positifs bêta-testeurs.
- **Tarif** : 30-50€/h (ajustable).
- **Outils** : calendrier Calendly, paiement Stripe, CRM basique.
- **Métriques** : réservations, satisfaction, revenus.

#### Voie C : SaaS / Outils Premium
- **Exemples** : analyseur SGF avancé (avec KataGo), tracker progrès, générateur tsumego, "review assistant" IA.
- **Prérequis** : MVP testé par 20 utilisateurs, feedback > 4/5, serveur stable.
- **Tarif** : freemium (free tier limité) + 5-15€/mois premium.
- **Métriques** : inscriptions, conversions, churn, MRR.

**Seuils de qualité** :  
- Voie A : 10 contenus, peer review, SEO optimisé.  
- Voie B : certification ou expérience prouvée, 5 témoignages.  
- Voie C : tests utilisateurs, docs API, support actif.

---

## 6. MVP (2 SEMAINES) — Fonctionnalités

### Authentification
- ✅ Email + mot de passe (NextAuth avec Credentials provider).
- ✅ OAuth GitHub.
- ✅ Session sécurisée, CSRF tokens.

### Dashboard "Life First"
- ✅ Vue gates quotidiens (checkboxes, streak).
- ✅ Indicateur santé globale (score 0-100 basé sur complétion gates).
- ✅ Soft lock monétisation si gates incomplets.

### Journal
- ✅ Entrées texte avec date/heure.
- ✅ Tags (gratitude, stress, victoire, échec, insight).
- ✅ Humeur/stress (échelle 1-5, facultatif).
- ✅ Recherche, filtres.

### Tracker Code
- ✅ Objectifs (ex: "10 commits/semaine", "finir module X").
- ✅ Lien GitHub (webhook ou API pour import commits).
- ✅ Temps de code (manuel ou via outil externe comme WakaTime).

### Tracker Jeu (Go)
- ✅ Sessions : date, adversaire, couleur, résultat, rank adversaire.
- ✅ Upload SGF (fichier replay Go).
- ✅ Notes post-game (ce qui a marché, erreurs, apprentissages).
- ✅ Statistiques : winrate, progression rank, patterns.

### Module "Arsenal Invisible"
- ✅ Liste anges (cartes UI avec description, checklist).
- ✅ Liste archanges (règles affichées, status actif/inactif).
- ✅ Messages contextuels (ex: "Mikaël te rappelle : pas d'achat impulsif").

### Module "Monétisation"
- ✅ Catalogue produits (ebooks, coaching, outils) en "locked" si gates non validés.
- ✅ Pages produits (description, prix, prérequis).
- ✅ Paiement Stripe (test mode), webhooks.
- ✅ Dashboard vendeur (mes produits, revenus).

### Page "Roadmap & Règles"
- ✅ Vision, valeurs, garde-fous (ce document).
- ✅ FAQ : "Pourquoi Life First ?", "C'est quoi les anges ?", "Est-ce légal ?".
- ✅ Transparence : "Pas de magie, pas de promesses, toi seul décides".

---

## 7. V1 (6-8 SEMAINES) — Extensions

### Analyse Automatique
- ✅ Import stats jeu depuis OGS/KGS API (si disponible).
- ✅ GitHub API : fetch commits, PRs, contributions.
- ✅ Streak auto-calculé (code, jeu, gates).

### Générateur de Contenu
- ✅ Template article : transforme notes journal + sessions jeu en brouillon structuré.
- ✅ Validation humaine obligatoire avant publication.
- ✅ Export Markdown/HTML.

### Market Pages SEO
- ✅ Landing pages par thème (fuseki, tsumego, coaching).
- ✅ Blog intégré (articles, tags, SEO meta).
- ✅ Sitemap, robots.txt.

### CRM Léger
- ✅ Leads : capture email, source, tags.
- ✅ Emails : opt-in, templates (welcome, newsletter, promo).
- ✅ Suivi conversions.

### Multi-Tenant (Optionnel)
- ✅ Autres utilisateurs peuvent créer leur propre "espace vendeur".
- ✅ Commissions ou abonnement SaaS.

### Admin Panel
- ✅ Gestion users, produits, transactions.
- ✅ Modération contenu.
- ✅ Analytics globales.

### Export Données
- ✅ PDF : rapports progrès, stats.
- ✅ CSV : journal, sessions, revenus.

---

## 8. STACK TECHNIQUE

| Couche | Technologie | Justification |
|--------|-------------|----------------|
| **Front** | Next.js 14 (App Router) + TypeScript | SSR, SEO, performance, DX moderne. |
| **Styles** | Tailwind CSS | Rapide, maintenable, composants réutilisables. |
| **DB** | PostgreSQL (via Prisma ORM) | Relationnel, fiable, migrations versionnées. |
| **Auth** | NextAuth.js v5 | OAuth + Credentials, sessions, middleware. |
| **Paiements** | Stripe (test mode → prod) | Standard marché, webhooks robustes. |
| **Hosting** | Vercel (front) + Supabase/Neon (DB) | Déploiement continu, scalabilité, free tier généreux. |
| **CI/CD** | GitHub Actions | Tests auto, lint, deploy. |
| **Observabilité** | Sentry (optionnel) | Monitoring erreurs, performance. |
| **Tests** | Vitest (unit) + Playwright (E2E) | Rapides, modernes, intégration Next.js. |
| **Email** | Resend ou SendGrid | Transactionnel, templates. |

---

## 9. RÔLE DE GITHUB & SES "ÉQUIPES"

**Vision:** GitHub Copilot comme "orchestrateur" d'équipes virtuelles (métaphore pour organiser le travail).

### Team "Sentinelles" (Security/QA)
- **Rôle:** Lint, tests, scanning dépendances (Dependabot), policies.
- **Actions:** Pre-commit hooks, CI tests, audit npm, OWASP checks.
- **Livrables:** Rapports sécurité, checklist pre-deploy.

### Team "Forgerons" (Engineering)
- **Rôle:** Build features, refactor, perf.
- **Actions:** Développement composants, API, DB migrations.
- **Livrables:** PRs avec tests, docs techniques.

### Team "Cartographes" (Product/UX)
- **Rôle:** Flows utilisateur, copy, onboarding.
- **Actions:** Wireframes (texte/ASCII), user stories, A/B tests.
- **Livrables:** Specs fonctionnelles, guides UX.

### Team "Messagers" (Content/Growth)
- **Rôle:** Blog, SEO, emails, réseaux sociaux.
- **Actions:** Articles, landing pages, newsletters.
- **Livrables:** Calendrier contenu, analytics SEO.

### Team "Archivistes" (Data)
- **Rôle:** Analytics, métriques, dashboards.
- **Actions:** Track events (Plausible/Umami), rapports.
- **Livrables:** Dashboards admin, insights utilisateur.

**Chef d'orchestre:** Copilot coordonne, mais **Anthoumani = autorité finale**.

**Processus PR:**
- Titre clair (ex: `feat: add Life First gate validation`)
- Description : objectif, impact, risques.
- Tests : unit + E2E.
- Rollback plan : comment annuler si problème.
- Review : au moins 1 check (humain ou CI).

---

## 10. DÉPLOIEMENT "SITE PHYSIQUE"

### Checklist Launch Day

#### Domaine
- [ ] Acheter domaine (ex: `atoudev.com`, `souverainete.dev`).
- [ ] Configurer DNS (A record → Vercel IP, MX si email custom).

#### Hébergement
- [ ] Vercel : projet lié GitHub, auto-deploy sur `main`.
- [ ] Supabase/Neon : DB PostgreSQL, backups auto.
- [ ] Variables d'environnement : `.env.production` sur Vercel (secrets).

#### Backups
- [ ] DB : snapshots quotidiens (Supabase/Neon auto).
- [ ] Code : GitHub (déjà versionné).
- [ ] Fichiers uploads (si applicable) : S3/R2.

#### Monitoring
- [ ] Vercel Analytics (basique, gratuit).
- [ ] Sentry (errors) : compte free, DSN configuré.
- [ ] Uptime : UptimeRobot ou Vercel Monitoring.

#### RGPD / Légal
- [ ] CGU (Conditions Générales d'Utilisation).
- [ ] Privacy Policy (RGPD-compliant).
- [ ] Cookies banner (si analytics tiers).
- [ ] Mentions légales (nom, contact, hébergeur).

#### Sécurité
- [ ] HTTPS (Vercel auto).
- [ ] CSP headers (Next.js config).
- [ ] Rate-limiting (middleware Next.js ou Vercel Edge).
- [ ] Secrets rotation (mensuel).

#### Tests Pre-Launch
- [ ] Lighthouse (performance, SEO, a11y) : scores > 90.
- [ ] Tests E2E complets (signup, gates, payment test).
- [ ] Cross-browser (Chrome, Firefox, Safari).
- [ ] Mobile (responsive).

#### Go-Live
- [ ] Deploy version stable sur `main`.
- [ ] Annoncer (email early adopters, réseaux sociaux).
- [ ] Monitoring 24h post-launch (alertes Sentry actives).

---

## 11. PROCHAINES ÉTAPES (Ce que Copilot va livrer)

### Étape 1 : Structure de Repo
- Architecture dossiers Next.js + docs.
- Configuration Prisma, NextAuth, Tailwind, ESLint, Prettier.
- `.gitignore`, `.env.example`, `.nvmrc`.

### Étape 2 : Schema DB Prisma
- Tables : `User`, `Session`, `Account`, `LifeGate`, `JournalEntry`, `CodeSession`, `GoSession`, `Angel`, `Archangel`, `Product`, `Purchase`.
- Relations, indexes, migrations.

### Étape 3 : Routes & Pages Next.js
- `/` : Landing page.
- `/auth/signin`, `/auth/signup`.
- `/dashboard` : Life First + gates.
- `/journal`, `/code`, `/go`.
- `/arsenal` : anges & archanges.
- `/market` : catalogue produits.
- `/admin` : admin panel.

### Étape 4 : Auth + Dashboard Life First
- NextAuth config (email + GitHub).
- Middleware protection routes.
- Composants dashboard : `GateCard`, `StreakBadge`, `HealthScore`.

### Étape 5 : Arsenal Invisible (Seed + UI)
- Seed data : anges (7) + archanges (4).
- Composants UI : `AngelCard`, `ArchangelRule`.
- Logique guardrails (middleware).

### Étape 6 : Composants UI
- Design system Tailwind : buttons, cards, forms, modals.
- Layout responsive.
- Dark mode (optionnel).

### Étape 7 : Stripe Integration
- Stripe checkout, webhooks.
- Table `Product`, `Purchase`.
- Dashboard vendeur.

### Étape 8 : Tests + CI/CD
- Vitest : unit tests (utils, API routes).
- Playwright : E2E (signup, gates, payment).
- GitHub Actions : `.github/workflows/ci.yml`.

### Étape 9 : Documentation
- `README.md` : installation, commandes, architecture.
- `CONTRIBUTING.md` : guide contributeurs.
- `SECURITY.md` : reporting, best practices.
- `CODE_OF_CONDUCT.md` : respect, éthique.
- `/docs` : architecture, wireframes, ADRs (Architecture Decision Records).

---

## 12. MESSAGES CLÉS POUR L'UTILISATEUR

**Transparence totale :**
- "Ce site ne promet pas de magie. Il te donne des outils, des garde-fous, et des opportunités. Toi seul choisis."
- "Les anges et archanges sont des métaphores. Si tu es croyant, prie et médite. Si tu ne l'es pas, vois-les comme des checklists et règles."
- "Life First n'est pas une punition. C'est une optimisation : un esprit clair et un corps sain performent mieux."

**Éthique & Légalité :**
- "Tous les revenus sont légaux : contenu, coaching, outils. Pas de RMT, pas de fraude."
- "Tes données sont sécurisées, opt-in, exportables, supprimables."

**Responsabilité :**
- "Si tu es en crise (stress, colère, fatigue), on te propose une pause. Pas par morale, mais par performance : une décision impulsive coûte cher."

---

## 13. NEXT STEP IMMÉDIAT

Copilot va maintenant générer :
1. **Structure de repo complète** (dossiers, fichiers config).
2. **Schema Prisma** (toutes tables avec relations).
3. **Liste des routes/pages Next.js** (avec wireframes texte).
4. **Premier lot de code** : NextAuth config, dashboard Life First, seed Arsenal Invisible.
5. **GitHub Issues** (tickets MVP) pour tracking.

**Prêt à construire. 🏗️**  
**La souveraineté commence ici.**
