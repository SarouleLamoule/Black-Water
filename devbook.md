# DevBook — Site officiel Black Water (RP GTA V)

**Version**: 1.0  
**Date**: 19/09/2025  
**Basé sur**: Cahier des charges v1.1  
**Objectif**: Guide de développement avec étapes vérifiables

---

## 📋 Vue d'ensemble du projet

**Framework**: Next.js 14 (App Router) + TypeScript  
**Styles**: CSS Modules / SCSS (pas de Tailwind)  
**Données**: Fichiers JSON (aucune base de données)  
**Déploiement**: Vercel (plan gratuit)  
**Durée estimée**: 5 semaines

---

## 🎯 Critères de réussite globaux

- [ ] Temps de chargement LCP < 2,5s (desktop & mobile)
- [ ] 100% des profils opérateurs gérables via JSON (commit Git)
- [ ] Pages profils `/members/*` avec meta noindex
- [ ] Score Lighthouse ≥ 90 (Perf/Access/Best Practices)
- [ ] Aucune donnée personnelle réelle exposée
- [ ] Images obligatoirement floutées avec watermark "CLASSIFIED"

---

## 📅 Phase 1 : Setup & Architecture (Semaine 1)

### 1.1 Initialisation du projet

- [x] Créer le projet Next.js 14 avec TypeScript
- [x] Configurer l'App Router
- [x] Installer les dépendances de base (sharp, ajv)
- [x] Configurer ESLint et Prettier
- [x] Initialiser Git et .gitignore

### 1.2 Structure des dossiers

- [x] Créer la structure `/data` pour les fichiers JSON
- [x] Créer `/public/members` pour les images floutées
- [x] Créer `/assets/members-src` pour les images sources
- [x] Organiser les composants dans `/components`
- [x] Créer les styles dans `/styles`

### 1.3 Configuration des données

- [x] Créer le JSON Schema pour les membres (`/data/schema.json`)
- [x] Créer le fichier `/data/members.json` avec l'exemple "Dune"
- [x] Créer les fichiers JSON pour les autres contenus (blackwater, operations, press)
- [x] Valider la structure JSON avec le schema

### 1.4 Pipeline d'images

- [x] Créer le script `npm run blur` avec Sharp
- [x] Implémenter le floutage Gaussian (sigma 12-16)
- [x] Ajouter le watermark "CLASSIFIED" (8-12%)
- [x] Configurer l'export WebP dans `/public/members`
- [x] Tester le pipeline avec une image d'exemple

---

## 🎨 Phase 2 : Design System & UI Kit (Semaine 1-2)

### 2.1 Design tokens

- [x] Définir la palette de couleurs (fond #121416, surfaces #23262D, accent #B4232D, texte #E5E5F5)
- [x] Configurer les typographies (Inter / Space Grotesk)
- [x] Créer les variables CSS pour les espacements
- [x] Définir les breakpoints responsive

### 2.2 Composants de base

- [x] Créer le composant Header compact
- [x] Créer la navigation secondaire (rubriques)
- [x] Créer le composant Footer avec disclaimer RP
- [x] Créer le composant "Document classifié" (esthétique)
- [x] Créer les composants de boutons et liens

### 2.3 Composants spécialisés

- [x] Créer le composant Card opérateur (image floutée + code name + tag)
- [x] Créer le composant Modal fiche opérateur
- [x] Créer le composant Timeline opérations
- [x] Créer les éléments visuels (tampons REDACTED, watermark CLASSIFIED)
- [x] Créer les animations discrètes (fade/scanline)

---

## 🏗️ Phase 3 : Développement Front-end (Semaine 2-3)

### 3.1 Pages principales

- [x] **Page d'accueil** (`/`)
  - [x] Slogan et texte d'ambiance
  - [x] Boutons "Découvrir Black Water" / "Opérateurs"
  - [x] Sections avec animations et effets visuels
  - [x] Intégration des composants ClassifiedDocument

- [x] **Page À propos** (`/about`)
  - [x] Section Histoire (résumé)
  - [x] Section Valeurs et principes
  - [x] Section Équipe dirigeante
  - [x] Documents classifiés avec niveaux de sécurité

- [x] **Page Équipe** (`/team`)
  - [x] Grille responsive des opérateurs
  - [x] Cards avec photo floutée + code name + tag
  - [x] Modal détaillé pour chaque opérateur
  - [x] Tri par statut (actif, inactif, décédé)
  - [x] Statistiques de l'équipe

- [x] **Page Operations** (`/operations`)
  - [x] Chronologie complète avec éléments [REDACTED]
  - [x] Timeline interactive avec modal de détail
  - [x] Statistiques des opérations
  - [x] Types d'opérations avec badges de classification

- [x] **Page Press** (`/press`)
  - [x] Articles de presse avec niveaux de classification
  - [x] Communiqués officiels
  - [x] Section contact presse
  - [x] Filtrage par niveau de sécurité

### 3.2 Système de membres

- [x] **Page Members** (`/members`)
  - [x] Grille responsive 3-4 colonnes
  - [x] Cards avec photo floutée + code name + tag
  - [x] Hover "Consulter le dossier"
  - [x] Tri par rang
  - [x] Filtre par statut
  - [x] Recherche par code name (client-side)

- [x] **Pages profils** (`/members/[code]`)
  - [x] En-tête : code name, matricule, rang, statut
  - [x] Section Historique
  - [x] Section Profil psy
  - [x] Section Arsenal des compétences
  - [x] Section Activités récentes
  - [x] Section Infos sup. (sans données IRL)
  - [x] Éléments visuels : tampons REDACTED, watermark CLASSIFIED

### 3.3 API Routes (optionnelles)

- [x] `GET /api/members` (lecture JSON local)
- [x] `GET /api/members/[codeName]` (lecture JSON local)

---

## 🔧 Phase 4 : Fonctionnalités avancées (Semaine 3-4)

### 4.1 SEO et sécurité

- [x] Configurer les meta tags pour les pages publiques
- [x] Implémenter noindex/nofollow pour `/members/*`
- [x] Ajouter les headers X-Robots-Tag: noindex
- [x] Configurer Open Graph minimal pour les profils
- [x] Implémenter CSP stricte, HSTS, nosniff, referrer-policy

### 4.2 Performance

- [x] Optimiser les images avec next/image
- [x] Implémenter le lazy-loading
- [x] Configurer les formats WebP/AVIF
- [x] Vérifier le budget perf (< 100KB CSS, < 200KB JS)
- [x] Optimiser le bundle JavaScript

### 4.3 Accessibilité

- [x] Vérifier les contrastes AA
- [x] Implémenter la navigation clavier
- [x] Ajouter les aria-labels appropriés
- [x] Configurer le focus visible
- [x] Implémenter les skip-links
- [x] Ajouter les alt text génériques ("Portrait flouté — opérateur")

---

## 🚀 Phase 5 : Déploiement & CI/CD (Semaine 4-5)

### 5.1 Configuration Vercel

- [x] Connecter le repository GitHub à Vercel (automatique)
- [x] Configurer le déploiement automatique sur push main (automatique)
- [x] Configurer les variables d'environnement si nécessaire (non nécessaire pour ce projet)
- [ ] Tester le déploiement (à faire après import)

### 5.2 GitHub Actions

- [ ] Créer le workflow `validate-json` (ajv + schema)
- [ ] Créer le workflow `blur-images` (sharp) avant build
- [ ] Configurer les tests de validation JSON
- [ ] Tester les workflows CI

### 5.3 Documentation

- [ ] Créer le README avec setup et structure
- [ ] Documenter la structure `/data`
- [ ] Documenter les scripts (blur, validate)
- [ ] Créer le template de PR avec checklist

---

## 📝 Phase 6 : Contenu & Finalisation (Semaine 5)

### 6.1 Contenus initiaux

- [ ] Remplir `/data/blackwater.json` avec l'histoire et doctrine
- [ ] Remplir `/data/operations.json` avec la chronologie
- [ ] Remplir `/data/press.json` avec les communiqués
- [ ] Ajouter plusieurs membres d'exemple dans `/data/members.json`
- [ ] Générer les images floutées pour tous les membres

### 6.2 Tests et validation

- [ ] Tests Lighthouse (objectif ≥ 90)
- [ ] Tests d'accessibilité
- [ ] Tests de performance (LCP < 2,5s)
- [ ] Validation JSON avec le schema
- [ ] Tests responsive (mobile, tablet, desktop)

### 6.3 Recette finale

- [ ] Vérifier tous les critères d'acceptation
- [ ] Tester le workflow complet (édition JSON → commit → déploiement)
- [ ] Vérifier la sécurité (noindex, pas de données personnelles)
- [ ] Valider l'immersion RP et l'esthétique "classified"

---

## ✅ Checklist de validation finale

### Fonctionnel

- [ ] Toutes les pages du sitemap sont accessibles
- [ ] Aucune base de données utilisée (tout en JSON)
- [ ] Grille `/members` alimentée par JSON
- [ ] Pages `/members/[code]` alimentées par JSON
- [ ] Pages `/members/*` avec noindex vérifiable

### Technique

- [ ] Score Lighthouse ≥ 90
- [ ] Tests CI JSON passent
- [ ] Pipeline d'images fonctionne
- [ ] Déploiement Vercel automatique
- [ ] Headers de sécurité configurés

### Contenu

- [ ] Disclaimer RP visible
- [ ] Aucune donnée personnelle réelle
- [ ] Images obligatoirement floutées
- [ ] Watermark "CLASSIFIED" sur toutes les images
- [ ] Ton et univers cohérents

---

## 📊 Métriques de suivi

### Performance

- [ ] LCP < 2,5s (desktop)
- [ ] LCP < 2,5s (mobile)
- [ ] CSS < 100KB
- [ ] JS < 200KB au premier chargement

### Qualité

- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse Best Practices ≥ 90
- [ ] Lighthouse SEO ≥ 90

### Sécurité

- [ ] Pages profils noindex (headers + meta)
- [ ] CSP configuré
- [ ] Pas de données personnelles exposées
- [ ] Images floutées avec watermark

---

## 🔄 Maintenance continue

### Workflow de mise à jour

1. [ ] Éditer les fichiers JSON dans `/data`
2. [ ] Ajouter les nouvelles images dans `/assets/members-src`
3. [ ] Exécuter `npm run blur` pour traiter les images
4. [ ] Valider avec `npm run validate`
5. [ ] Commit et push
6. [ ] Vérifier le déploiement automatique Vercel

### Scripts disponibles

- [ ] `npm run blur` - Traite les images sources et génère les versions floutées
- [ ] `npm run validate` - Valide les fichiers JSON avec le schema
- [ ] `npm run dev` - Serveur de développement
- [ ] `npm run build` - Build de production
- [ ] `npm run start` - Serveur de production

---

**Note**: Ce devbook doit être mis à jour à chaque étape complétée. Utilisez les cases à cocher pour suivre la progression et identifier les blocages potentiels.
