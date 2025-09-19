# Black Water - Organisation Clandestine

> **Disclaimer RP (Roleplay GTA V / Los Santos)** : Ce site est entièrement fictif et s'inscrit dans le cadre d'un jeu de rôle sur Grand Theft Auto V. Toutes les informations, personnages, événements et organisations décrits ici sont le fruit de l'imagination et n'ont aucun lien avec la réalité.

## 🎯 Description

Site web pour l'organisation clandestine **Black Water**, opérant dans les ombres de Los Santos. Le site présente l'organisation, ses membres, ses opérations et ses communiqués de presse dans un style militaire/espionnage.

## 🚀 Technologies

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : CSS Modules + Design Tokens
- **Images** : Next.js Image Optimization + Sharp
- **Validation** : JSON Schema + AJV
- **CI/CD** : GitHub Actions
- **Deployment** : Vercel

## 📁 Structure du Projet

```
black-water/
├── 📁 src/
│   ├── 📁 app/                    # Pages Next.js (App Router)
│   │   ├── 📁 members/           # Pages des membres
│   │   ├── 📁 api/               # API Routes
│   │   ├── layout.tsx            # Layout principal
│   │   ├── page.tsx              # Page d'accueil
│   │   └── globals.css           # Styles globaux
│   ├── 📁 components/            # Composants React
│   │   ├── Header.tsx            # En-tête du site
│   │   ├── Footer.tsx            # Pied de page
│   │   ├── MemberImage.tsx       # Images des membres
│   │   └── ...                   # Autres composants
│   └── 📁 styles/                # Styles personnalisés
│       └── design-tokens.css     # Variables CSS centralisées
├── 📁 data/                      # Données JSON
│   ├── members.json              # Données des membres
│   ├── operations.json           # Données des opérations
│   ├── press.json                # Communiqués de presse
│   ├── blackwater.json           # Informations organisation
│   └── schema.json               # Schéma de validation
├── 📁 public/                    # Assets statiques
│   ├── 📁 members/               # Images des membres (floutées)
│   └── favicon.ico               # Icône du site
├── 📁 scripts/                   # Scripts utilitaires
│   ├── validate-json.js          # Validation des données
│   ├── blur-images.js            # Traitement des images
│   └── test-json.js              # Tests de validation
├── 📁 .github/                   # GitHub Actions
│   └── 📁 workflows/             # Workflows CI/CD
└── 📁 assets/                    # Assets sources
    └── 📁 members-src/           # Images sources des membres
```

## 🛠️ Installation & Setup

### Prérequis

- Node.js 18+
- npm ou yarn
- Git

### Installation

1. **Cloner le repository**

   ```bash
   git clone https://github.com/votre-username/black-water.git
   cd black-water
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

### Développement

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint
```

### Validation & Tests

```bash
npm run validate     # Validation des données JSON
npm run test:json    # Tests de validation complets
npm run blur         # Traitement des images
```

## 📊 Gestion des Données

### Structure des Fichiers JSON

Tous les fichiers de données sont validés contre un schéma JSON strict :

- **`members.json`** : Liste des membres de l'organisation
- **`operations.json`** : Historique des opérations
- **`press.json`** : Communiqués de presse
- **`blackwater.json`** : Informations générales de l'organisation

### Validation des Données

```bash
# Validation simple
npm run validate

# Tests complets avec structure
npm run test:json
```

## 🖼️ Gestion des Images

### Images des Membres

1. **Placer les images sources** dans `assets/members-src/`
2. **Exécuter le script de traitement** :
   ```bash
   npm run blur
   ```
3. **Les images traitées** sont générées dans `public/members/`

### Traitement Automatique

Le script `blur-images.js` :

- ✅ Applique un flou gaussien
- ✅ Ajoute un watermark "CLASSIFIED"
- ✅ Redimensionne les images
- ✅ Convertit en format WebP
- ✅ Optimise pour le web

## 🔧 Configuration

### Variables d'Environnement

Aucune variable d'environnement n'est requise pour le fonctionnement de base.

### Design Tokens

Les variables CSS sont centralisées dans `src/styles/design-tokens.css` :

- Couleurs (primaires, secondaires, accents)
- Typographie (polices, tailles, poids)
- Espacements et rayons
- Ombres et transitions
- Breakpoints responsive

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter le repository** à Vercel
2. **Déploiement automatique** sur push `main`
3. **Aucune configuration** supplémentaire requise

### Build Manuel

```bash
npm run build
npm run start
```

## 🔄 CI/CD

### GitHub Actions

Le projet utilise 3 workflows automatiques :

1. **`validate-json`** : Validation des données à chaque push
2. **`blur-images`** : Traitement automatique des images
3. **`build-check`** : Vérification du build et linting

### Workflow de Contribution

1. **Fork** le repository
2. **Créer une branche** feature
3. **Modifier les données** dans `/data/`
4. **Tester localement** : `npm run validate && npm run build`
5. **Créer une Pull Request**

## 📱 Pages Disponibles

- **`/`** : Page d'accueil avec présentation
- **`/about`** : À propos de l'organisation
- **`/team`** : Présentation de l'équipe
- **`/members`** : Liste des membres (accès restreint)
- **`/members/[code]`** : Profil individuel des membres
- **`/operations`** : Historique des opérations
- **`/press`** : Communiqués de presse

## 🔒 Sécurité & Accessibilité

### Sécurité

- Headers de sécurité configurés
- CSP (Content Security Policy) stricte
- Validation stricte des données
- Images floutées pour la confidentialité

### Accessibilité

- Navigation clavier complète
- Contrastes WCAG AA
- Aria-labels appropriés
- Skip-links pour la navigation
- Focus visible sur tous les éléments

## 🎨 Design System

### Couleurs

- **Primaire** : `#121416` (fond principal)
- **Secondaire** : `#23262d` (surfaces)
- **Accent** : `#b4232d` (rouge Black Water)
- **Texte** : `#f8fafc` (contraste optimisé)

### Typographie

- **Display** : Space Grotesk (titres)
- **Body** : Inter (texte courant)
- **Tailles** : Système cohérent (xs, sm, base, lg, xl, 2xl)

## 🤝 Contribution

### Guidelines

1. **Respecter la structure** des données JSON
2. **Tester localement** avant de push
3. **Utiliser les scripts** de validation
4. **Maintenir la cohérence** du design
5. **Documenter** les modifications importantes

### Template de Pull Request

Voir `.github/pull_request_template.md` pour la checklist complète.

## 📄 Licence

Ce projet est un site de roleplay pour GTA V et n'a aucun but commercial.

## 🆘 Support

Pour toute question ou problème :

- Créer une **Issue** sur GitHub
- Vérifier la **documentation** des scripts
- Consulter les **logs** des GitHub Actions

---

**Black Water** - _Opérant dans l'ombre, protégeant les intérêts._
