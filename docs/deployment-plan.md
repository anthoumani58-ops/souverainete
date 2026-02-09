# Plan de deploiement (site physique)

## Domaine
- Acheter un domaine clair (ex: souverainete-creation.com)

## DNS
- Fournisseur: Cloudflare ou equivalent
- Enregistrements: A/AAAA + CNAME vers Vercel

## Hebergement
- Front: Vercel
- DB: Supabase ou Neon

## Backups
- Snapshot quotidien DB
- Export CSV hebdo

## Monitoring
- Alertes uptime
- Logs d erreurs (Sentry optionnel)

## RGPD / CGU / Privacy
- Templates dans docs/rgpd-cgu-privacy.md
- Consentement cookies si analytics

## Launch day checklist
- Env prod ok
- Auth ok
- Stripe test ok
- Gates ok
- Pages legales publiees
- Backup actif
