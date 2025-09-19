# Structure des données - Black Water

Ce dossier contient tous les fichiers JSON qui alimentent le site Black Water.

## 📁 Structure des fichiers

### `members.json`

Contient la liste des opérateurs avec leurs informations détaillées.

- **Champs obligatoires** : `codeName`, `matricule`, `rang`, `statut`, `portrait`
- **Rangs disponibles** : Operateur, Sergent, Lieutenant, Capitaine, Commandant
- **Statuts disponibles** : Actif, Disparu, Inconnu, Retire

### `blackwater.json`

Informations sur l'organisation Black Water.

- Histoire et fondation
- Doctrine et principes
- Façade légale (San Andreas Risk & Port Services LLC)
- Codes internes (grey, brume, corbeau, sable noir, black)

### `operations.json`

Chronologie des opérations et activités.

- Liste des opérations avec détails
- Chronologie par année
- Statuts : Terminée, En cours, [REDACTED]

### `press.json`

Communiqués de presse et brèves.

- Communiqués officiels et démentis
- Brèves d'actualité
- Types : dementi, annonce, clarification

### `schema.json`

Schéma de validation JSON pour tous les fichiers de données.

## 🔧 Workflow de mise à jour

1. **Éditer** les fichiers JSON dans ce dossier
2. **Valider** avec le schéma : `npm run validate`
3. **Commit** et push vers le repository
4. **Déploiement automatique** via Vercel

## ⚠️ Règles importantes

- **Aucune donnée personnelle réelle** ne doit être incluse
- **Images obligatoirement floutées** avec watermark "CLASSIFIED"
- **Codes d'opération** : utiliser [REDACTED] pour les informations sensibles
- **Validation** : tous les fichiers doivent respecter le schéma JSON

## 📝 Exemple d'ajout d'un membre

```json
{
  "codeName": "NouveauCode",
  "matricule": "S-XX",
  "rang": "Operateur",
  "statut": "Actif",
  "portrait": "/members/nouveau_blur.webp",
  "resume": "Description courte",
  "historique": ["Élément 1", "Élément 2"],
  "profilPsy": {
    "traits": ["trait1", "trait2"],
    "vulnerabilites": ["vulnérabilité"]
  },
  "competences": ["Compétence 1", "Compétence 2"],
  "activitesRecentes": [
    {
      "date": "2025-09-19",
      "titre": "Opération",
      "resume": "Résumé"
    }
  ],
  "infosSupplementaires": "Informations supplémentaires",
  "visible": true
}
```
