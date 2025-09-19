# 📊 Structure des Données - Black Water

Ce dossier contient tous les fichiers de données JSON utilisés par le site web. Chaque fichier est validé contre un schéma JSON strict pour garantir la cohérence et la qualité des données.

## 📁 Fichiers de Données

### 🧑‍💼 `members.json`

**Description** : Liste des membres de l'organisation Black Water

**Structure** :

```json
[
  {
    "id": "string",
    "codeName": "string",
    "status": "active" | "inactive" | "deceased",
    "rank": "string",
    "specialization": "string",
    "bio": "string",
    "joinDate": "YYYY-MM-DD",
    "lastSeen": "YYYY-MM-DD",
    "clearance": "string",
    "operations": ["string"]
  }
]
```

**Champs obligatoires** :

- `id` : Identifiant unique
- `codeName` : Nom de code (affiché sur le site)
- `status` : Statut du membre
- `rank` : Grade dans l'organisation

**Exemple** :

```json
{
  "id": "BW-001",
  "codeName": "Shadow",
  "status": "active",
  "rank": "Commandant",
  "specialization": "Opérations spéciales",
  "bio": "Vétéran des forces spéciales...",
  "joinDate": "2024-01-15",
  "lastSeen": "2025-01-20",
  "clearance": "Niveau 5",
  "operations": ["OP-001", "OP-003"]
}
```

### 🎯 `operations.json`

**Description** : Historique des opérations de l'organisation

**Structure** :

```json
{
  "operations": [
    {
      "id": "string",
      "nom": "string",
      "date": "YYYY-MM-DD",
      "statut": "string",
      "description": "string",
      "details": "string",
      "equipe": ["string"],
      "resultat": "string",
      "classification": "string"
    }
  ]
}
```

**Champs obligatoires** :

- `id` : Identifiant unique de l'opération
- `nom` : Nom de l'opération
- `date` : Date de l'opération
- `statut` : Statut actuel
- `description` : Description publique
- `details` : Détails classifiés (peuvent être "[REDACTED]")

### 📰 `press.json`

**Description** : Communiqués de presse et déclarations officielles

**Structure** :

```json
{
  "communiques": [
    {
      "id": "string",
      "date": "YYYY-MM-DD",
      "titre": "string",
      "contenu": "string",
      "type": "dementi" | "declaration" | "communique",
      "statut": "public" | "draft"
    }
  ]
}
```

**Champs obligatoires** :

- `id` : Identifiant unique
- `date` : Date de publication
- `titre` : Titre du communiqué
- `contenu` : Contenu du communiqué
- `type` : Type de communiqué
- `statut` : Statut de publication

### 🏢 `blackwater.json`

**Description** : Informations générales sur l'organisation

**Structure** :

```json
{
  "nom": "string",
  "description": "string",
  "fondee": "YYYY-MM-DD",
  "siege": "string",
  "specialites": ["string"],
  "valeurs": ["string"],
  "contact": {
    "email": "string",
    "telephone": "string"
  }
}
```

## 🔍 Validation des Données

### Schéma JSON

Tous les fichiers sont validés contre `schema.json` qui définit :

- Types de données autorisés
- Champs obligatoires et optionnels
- Formats de dates et identifiants
- Contraintes de validation

### Scripts de Validation

```bash
# Validation simple
npm run validate

# Tests complets avec structure
npm run test:json
```

### Règles de Validation

1. **Syntaxe JSON** : Tous les fichiers doivent être du JSON valide
2. **Schéma** : Respect du schéma défini dans `schema.json`
3. **Champs obligatoires** : Tous les champs marqués comme requis
4. **Formats** : Dates au format ISO (YYYY-MM-DD)
5. **Cohérence** : Références entre fichiers (ex: opérations des membres)

## 📝 Guidelines de Modification

### Ajouter un Membre

1. **Créer l'image source** dans `assets/members-src/`
2. **Ajouter l'entrée** dans `members.json`
3. **Exécuter** `npm run blur` pour traiter l'image
4. **Valider** avec `npm run validate`

### Ajouter une Opération

1. **Ajouter l'entrée** dans `operations.json`
2. **Mettre à jour** les références dans `members.json`
3. **Valider** avec `npm run validate`

### Modifier un Communiqué

1. **Modifier** `press.json`
2. **Valider** avec `npm run validate`
3. **Tester** l'affichage sur le site

## 🚨 Erreurs Communes

### Erreurs de Validation

- **Champ manquant** : Vérifier que tous les champs obligatoires sont présents
- **Format de date** : Utiliser le format ISO (YYYY-MM-DD)
- **Type incorrect** : Vérifier les types de données (string, array, object)
- **Référence cassée** : Vérifier les IDs référencés dans d'autres fichiers

### Erreurs de Structure

- **Tableau manquant** : `operations.json` doit contenir un tableau `operations`
- **Communiqués manquants** : `press.json` doit contenir un tableau `communiques`
- **Membres vides** : `members.json` doit contenir au moins un membre

## 🔄 Workflow de Modification

1. **Modifier** le fichier JSON approprié
2. **Valider localement** : `npm run validate`
3. **Tester** : `npm run test:json`
4. **Commit** les modifications
5. **Push** vers GitHub
6. **Vérifier** les GitHub Actions

## 📊 Statistiques Actuelles

- **Membres** : 6 opérateurs actifs
- **Opérations** : 3 opérations documentées
- **Communiqués** : 3 communiqués de presse
- **Images** : 6 portraits de membres (floutés)

---

**Note** : Toutes les modifications des données sont automatiquement validées par les GitHub Actions pour garantir la cohérence du site.
