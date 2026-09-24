# Portfolio — Fella Bennounas

Site personnel réalisé avec [Astro](https://astro.build).

## Développer en local

```bash
npm install
npm run dev
```

Le site est alors visible sur `http://localhost:4321`.

## Structure du projet

```
src/
  layouts/Layout.astro     → squelette HTML + meta SEO
  components/
    Header.astro           → nav + logo
    ProjectCard.astro       → carte projet réutilisable
    Footer.astro
  data/projects.js          → contenu des 3 projets (à remplacer)
  pages/index.astro         → page d'accueil (une seule page pour l'instant)
  styles/global.css         → tokens de couleur / styles partagés
public/
  favicon.svg
```

## Avant de déployer

1. Remplace le contenu de `src/data/projects.js` par tes vraies infos
   (description, stack, lien du dépôt, lien de démo).
2. Modifie le texte de `src/pages/index.astro` (hero, à propos, stack, parcours, contact)
   avec tes vraies infos.
3. Dans `astro.config.mjs`, mets à jour `site` et `base` avec le nom réel
   de ton dépôt GitHub.

## Déployer sur GitHub Pages

1. Crée un dépôt GitHub (ex : `portfolio`) et pousse ce code dessus :
   ```bash
   git init
   git add .
   git commit -m "Premier commit du portfolio"
   git branch -M main
   git remote add origin https://github.com/<ton-pseudo>/<nom-du-depot>.git
   git push -u origin main
   ```
2. Dans les paramètres du dépôt GitHub → **Settings → Pages**, choisis
   **Source: GitHub Actions**.
3. Le workflow `.github/workflows/deploy.yml` build et déploie automatiquement
   le site à chaque `push` sur `main`.
4. Ton site sera visible à l'adresse indiquée dans **Settings → Pages**
   (généralement `https://<ton-pseudo>.github.io/<nom-du-depot>`).

## Vérifier les performances

Une fois en ligne, teste ton site sur
[pagespeed.web.dev](https://pagespeed.web.dev/) pour vérifier perf,
accessibilité et SEO.
