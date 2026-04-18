# Digital Renforcy — Clone front-end (Next.js 14 + TS + Tailwind)

Reproduction fidèle du prototype pour développement dans VS Code.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zéro dépendance UI tierce

## Lancer en local
```bash
npm install
npm run dev
```
Ouvrir http://localhost:3000.

## Structure
- `app/` — layout + page principale
- `components/` — composants réutilisables (Header, Hero, StatsPanel, etc.)
- `lib/data.ts` — contenu textuel centralisé
- `public/` — assets statiques (ajouter `logo-dr.png` ici si besoin)

## Brancher le formulaire
Dans `components/PricingLeadFormSection.tsx`, remplacer le `console.log` par un `fetch("/api/contact", ...)`.

## Personnalisation
- Couleurs : `tailwind.config.ts` (palette `brand`)
- Textes : `lib/data.ts`
- Contacts (téléphone, WhatsApp, Calendly) : `lib/data.ts` → `contact`