# Cahier des charges — Site officiel **Black Water** (RP GTA V / Los Santos)

**Version**: 1.1
**Date**: 19/09/2025
**Commanditaire**: Projet GTA RP (Los Santos)
**Rédaction**: SarouleLamoule

---

## 1) Objectifs & portée

- **But**: Créer un site vitrine immersif au style « dossier confidentiel d’État », présentant Black Water (histoire, doctrine, codes), et une **base des opérateurs** (liste par **noms de code uniquement** avec **photo floutée d’homme**). Un clic sur un opérateur ouvre sa **fiche confidentielle** (infos RP).
- **Portée**: **Front‑office public uniquement**. **Pas de back‑office** : le contenu est **géré en JSON dans le dépôt Git**. Les mises à jour se font par **commit/push** et **déclenchent un déploiement Vercel**.
- **Public**: joueurs RP, responsables de factions, staff serveur (références / immersion).
- **Ton & univers**: sérieux, militaire, clandestin; iconographie « classified / redacted ».

### Indicateurs de réussite

- Temps de chargement LCP < 2,5s (desktop & mobile).
- 100% des profils opérateurs **gérables via JSON** (commit Git), sans base de données ni back‑office.
- Sécurité: pages profils **noindex**, pas d’info personnelle réelle; images **obligatoirement floutées**.

---

## 2) Sitemap & navigation

- **/** Accueil (manifeste + accès sections)
- **/blackwater** (histoire, façade légale/illégale, doctrine, codes internes)
- **/operations** (chronologie abrégée – éléments _\[REDACTED]_, sans détails sensibles)
- **/members** (grille des opérateurs: **code name + photo floutée**)
- **/members/\[code]** (fiche opérateur: détails RP) — **meta: noindex, nofollow**
- **/press** (communiqués RP, “démentis” ironiques)
- **/contact** (mailto minimal — optionnel)

**Footer**: mentions fictives RP, disclaimer “_Tout contenu est fictionnel et ne vise personne réelle_”.

---

## 3) Contenus & rubriques

### 3.1 Accueil

- Slogan, court texte d’ambiance; timelapse subtil (optionnel).
- Boutons: "Découvrir Black Water" / "Opérateurs".

### 3.2 Page Black Water

- **Histoire** (résumé), **Vision/Doctrine**, **Façade légale**, **Opérations \[REDACTED]**, **Codes internes** (grey, brume, corbeau, sable noir, black).
- Bloc “_Document classifié — accès restreint_” pour l’esthétique.

### 3.3 Page Members (liste)

- Grille cards 3–4 colonnes responsive.
- Chaque card: **photo d’homme floutée** + **Code name** + tag (ex: **S‑08**).
- Hover: “**Consulter le dossier**”.
- Clic → ouvre **fiche** (page dédiée ou **modal**).

### 3.4 Fiche opérateur (members/\[code])

- En‑tête: code name, matricule (ex: **S‑08**), rang RP, statut (actif / disparu / \[REDACTED]).
- Sections: **Historique**, **Profil psy**, **Arsenal des compétences**, **Activités récentes**, **Infos sup.** (**sans données IRL**).
- Éléments visuels: **tampons REDACTED**, watermark **CLASSIFIED**.

### 3.5 Press / Operations

- Brèves très courtes, datées, sans lieux précis (ou **obfusqués**).
- Liens internes croisés vers la doctrine.

---

## 4) Spécifications fonctionnelles (FO)

- **Listing membres**: tri par rang, filtre par statut, recherche par code name (client-side ou côté serveur).
- **Détail membre**: route SEO **noindex**, preview share **bloquée** (Open Graph minimal).
- **Images floutées (sans upload)**:

  - Les portraits sont **pré‑floutés** et versionnés dans le repo (répertoire `/public/members`).
  - **Option**: script local `npm run blur` (pipeline **sharp**) qui lit `/assets/members-src` → génère images floutées + watermark “CLASSIFIED” dans `/public/members`.

- **Internationalisation (option)**: FR/EN; par défaut FR.
- **Accessibilité**: contraste AA, navigation clavier, alt text générique (“Portrait flouté — opérateur”).

---

## 5) Flux d’édition du contenu (sans BO)

- **Source de vérité**: fichiers **JSON** versionnés (répertoire `/data`).
- **Workflow**: édition locale → commit → push → **déploiement automatique Vercel**.
- **Validation**: **JSON Schema** et tests à l’occasion d’un **GitHub Action** (CI) — refus du build si données invalides.
- **Historique / audit**: assuré par **Git** (diffs, PR).
- **Champs opérateur (JSON)**:

  - `codeName` (string, unique, ex: "Dune")
  - `matricule` (string, ex: "S-08")
  - `rang` (enum: Opérateur, Sergent, Lieutenant, Capitaine, Commandant)
  - `statut` (enum: Actif, Disparu, Inconnu, Retiré)
  - `resume` (string court)
  - `historique` (array<string>)
  - `profilPsy` (object)
  - `competences` (array<string>)
  - `activitesRecentes` (array<{date, titre, resume}>)
  - `infosSupplementaires` (string | object)
  - `portrait` (string — chemin **pré‑flouté** sous `/public/members`)
  - `visible` (bool)

---

## 6) Contraintes techniques

### 6.1 Pile recommandée (Next.js **sans Tailwind**)

- **Framework**: Next.js 14 (App Router) + TypeScript.
- **Styles**: **CSS Modules / SCSS** (pas de Tailwind).
- **Données**: **fichiers JSON** sous `/data` (aucune base de données, aucun CMS).
- **API (option)**: routes `GET /api/members` et `GET /api/members/[codeName]` qui lisent les JSON du repo (lecture disque).
- **Images**: `next/image` pour lazy‑load + formats WebP/AVIF; pipeline **sharp** local pour floutage si besoin.
- **Déploiement**: **Vercel (plan gratuit)**; build SSG (pages statiques) + re‑deploy à chaque push.

### 6.2 Génération & perfs

- **Build statique** (SSG) via lecture des JSON; `generateStaticParams` pour `/members/[code]`.
- **Budget perf**: < 100KB CSS, < 200KB JS au premier chargement; images optimisées.

### 6.3 Sécurité & SEO

- **Robots**: blocage index pour `/members/*` (meta `noindex`, header `X‑Robots‑Tag: noindex`).
- **Headers**: CSP stricte, HSTS, nosniff, referrer‑policy.
- **GDPR / Privacy**: pas de données personnelles réelles; analytics **anonymisées**; bannière cookie minimaliste si nécessaire.

---

## 7) Design & UX

- **Mood**: sombre, **#121416** fond, **#23262D** surfaces, **#B4232D** accent, **#E5E5F5** texte.
- **Typo**: Inter / Space Grotesk (ou équivalent libre).
- **Esthétique**: barres de titre type bandeau, micro‑bruit de papier, tampons “REDACTED/CLASSIFIED”, glyphes codes.
- **Composants clés**: Header compact, Nav secondaire (rubriques), Cards opérateurs, Modal fiche, Timeline opérations, Bloc “Document classifié”, Footer disclaimer.
- **Animations**: discrètes (fade/scanline).
- **Responsive**: mobile first; grille 1→2→4 colonnes.

---

## 8) Modèle de données (JSON Schema + exemple)

**Schema (extrait)**

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Member",
  "type": "object",
  "required": ["codeName", "matricule", "rang", "statut", "portrait"],
  "properties": {
    "codeName": { "type": "string" },
    "matricule": { "type": "string" },
    "rang": { "type": "string" },
    "statut": {
      "type": "string",
      "enum": ["Actif", "Disparu", "Inconnu", "Retiré"]
    },
    "portrait": { "type": "string" },
    "resume": { "type": "string" },
    "historique": { "type": "array", "items": { "type": "string" } },
    "profilPsy": { "type": "object" },
    "competences": { "type": "array", "items": { "type": "string" } },
    "activitesRecentes": { "type": "array", "items": { "type": "object" } },
    "infosSupplementaires": { "type": "string" },
    "visible": { "type": "boolean" }
  }
}
```

**Exemple `/data/members.json`**

```json
{
  "members": [
    {
      "codeName": "Dune",
      "matricule": "S-08",
      "rang": "Operateur",
      "statut": "Actif",
      "portrait": "/members/dune_blur.webp",
      "resume": "Logistique clandestine, CQB court, HUMINT prox.",
      "historique": [
        "1993–2011 : Sandy Shores / La Mesa / South LS",
        "2012–2016 : US Army (11B, E-5)",
        "2017– : Sécurité privée LS"
      ],
      "profilPsy": {
        "traits": ["calme", "procédurier", "contractuel"],
        "vulnerabilites": ["insomnie"]
      },
      "competences": ["Logistique", "CQB", "Navigation LS", "HUMINT"],
      "activitesRecentes": [
        {
          "date": "2025-08-29",
          "titre": "Op. RIVAGE FROID",
          "resume": "Fausse maintenance, caméra mur 43min, repack."
        }
      ],
      "infosSupplementaires": "Couverture: San Andreas Risk & Port Services LLC",
      "visible": true
    }
  ]
}
```

**Endpoints (facultatifs)**

- `GET /api/members` (public, lit le JSON local)
- `GET /api/members/[codeName]` (public, lit le JSON local)

---

## 9) Règles d’affichage des portraits (floutage)

- **Pré‑traitement local** via script `npm run blur` (sharp) **ou** ajout manuel d’images déjà floutées.
- Pipeline proposé: 1) lecture `/assets/members-src`, 2) **Gaussian blur** (sigma 12–16), 3) watermark "CLASSIFIED" (8–12%), 4) export **WebP** dans `/public/members`.
- **Aucune** image non floutée dans `/public`.

---

## 10) Accessibilité & performance

- **A11y**: contrastes AA, aria‑labels, focus visible, tab‑order logique, skip‑links.
- **Perf budget**: < 100KB CSS, < 200KB JS au premier chargement; images lazy‑loaded, WebP/AVIF.
- **Tests**: Lighthouse ≥ 90 (Perf/Access/Best Practices).

---

## 11) CI/CD & maintenance (remplace le BO)

- **Vercel**: déploiement automatique à chaque push sur `main`.
- **GitHub Actions**: job `validate-json` (ajv + schema), job `blur-images` (sharp) avant build.
- **PR Template**: checklist (valider JSON, portraits floutés, noindex pages profil).

---

## 12) Planning indicatif

- **Semaine 1**: cadrage, zoning, UI kit, mise en place `/data` + JSON Schema.
- **Semaines 2–3**: dev FO (Next.js), pages & routes, lecture JSON, composant grille/fiche, pipeline images.
- **Semaine 4**: contenus initiaux, QA, a11y, perf, SEO noindex profils, CI GitHub.
- **Semaine 5**: recette, corrections, mise en prod Vercel.

---

## 13) Critères d’acceptation

- Pages et routes conformes au sitemap.
- **Aucune DB**; tout le contenu provient de **/data/\*.json**.
- Grille `/members` + page `/members/[code]` alimentées par JSON.
- Pages `/members/*` **noindex** vérifiable (headers + meta).
- Score Lighthouse ≥ 90; tests CI JSON OK.
- Disclaimer RP visible; aucune donnée personnelle réelle exposée.

---

## 14) Éléments livrables

- Code source (repo Git) + README (setup, structure `/data`, scripts).
- Design tokens (couleurs, typographies).
- Composants UI.
- **Dossier `/data`** initial (JSON) + **JSON Schema**.
- **Scripts**: `blur` (sharp), `validate` (ajv).
- **CI**: workflow GitHub Actions.
- **Configuration Vercel** (project + env si besoin).

---

## 15) Annexes

**Wireframes (description rapide)**

- **/members**: grille de cards — image floutée 1:1, code name (h4), badge rang; barre latérale (filtres); pagination.
- **Fiche opérateur**: header sombre, colonne gauche (photo floutée), colonne droite (sections collapsibles).

**Styles visuels**

- Bandes « CLASSIFIED » en bandeau, lignes de scan, séparateurs rouges fins (#B4232D).

**Disclaimers**

- Site RP — aucune affiliation réelle; aucune incitation à la violence; toute ressemblance fortuite.
