# GitHub Actions Workflows

Ce dossier contient les workflows GitHub Actions pour automatiser la qualité et le déploiement du projet Black Water.

## 📋 Workflows disponibles

### 1. **validate-json.yml**

- **Déclencheur :** Push/PR sur `main` ou `develop` avec modifications des fichiers JSON
- **Objectif :** Valider la structure des données JSON contre le schéma
- **Actions :**
  - Vérifie la syntaxe JSON
  - Valide contre `data/schema.json`
  - Bloque le push si les données sont invalides

### 2. **blur-images.yml**

- **Déclencheur :** Push/PR avec nouvelles images dans `assets/members-src/`
- **Objectif :** Traiter automatiquement les nouvelles images
- **Actions :**
  - Détecte les nouvelles images
  - Applique le flou et le watermark "CLASSIFIED"
  - Convertit en WebP
  - Commit automatiquement les images traitées

### 3. **build-check.yml**

- **Déclencheur :** Tous les push/PR sur `main` ou `develop`
- **Objectif :** Vérifier que le build fonctionne
- **Actions :**
  - Linting ESLint
  - Vérification TypeScript
  - Build Next.js
  - Vérification des pages générées

### 4. **deploy.yml**

- **Déclencheur :** Push sur `main` (si les autres workflows passent)
- **Objectif :** Déployer sur Vercel
- **Actions :**
  - Validation finale
  - Déploiement automatique sur Vercel
  - Notification de statut

## 🔧 Configuration requise

Pour que le déploiement fonctionne, ajoutez ces secrets dans GitHub :

1. `VERCEL_TOKEN` - Token d'API Vercel
2. `VERCEL_ORG_ID` - ID de votre organisation Vercel
3. `VERCEL_PROJECT_ID` - ID de votre projet Vercel

## 📊 Statuts des workflows

- ✅ **Succès :** Tous les tests passent, déploiement autorisé
- ❌ **Échec :** Problème détecté, déploiement bloqué
- ⏳ **En cours :** Workflow en cours d'exécution

## 🚀 Workflow de développement

1. **Développement local** → Tests locaux
2. **Push sur `develop`** → Validation + Build Check
3. **Merge vers `main`** → Validation + Build + Déploiement
4. **Déploiement automatique** sur Vercel

## 📝 Logs et debugging

Consultez les logs des workflows dans l'onglet "Actions" de votre repository GitHub pour diagnostiquer les problèmes.
