# 🚀 Pull Request - Black Water

## 📋 Checklist de Validation

### ✅ Données et Contenu

- [ ] **Validation JSON** : `npm run validate` exécuté avec succès
- [ ] **Tests complets** : `npm run test:json` passent
- [ ] **Schéma respecté** : Tous les fichiers JSON respectent `data/schema.json`
- [ ] **Champs obligatoires** : Tous les champs requis sont présents
- [ ] **Cohérence** : Les références entre fichiers sont valides

### 🖼️ Images et Assets

- [ ] **Images sources** : Nouvelles images placées dans `assets/members-src/`
- [ ] **Traitement** : `npm run blur` exécuté pour les nouvelles images
- [ ] **Formats** : Images converties en WebP et optimisées
- [ ] **Tailles** : Images redimensionnées à 400x400px
- [ ] **Watermark** : Watermark "CLASSIFIED" appliqué

### 🔧 Code et Build

- [ ] **Linting** : `npm run lint` exécuté sans erreurs
- [ ] **Build** : `npm run build` réussi
- [ ] **TypeScript** : Aucune erreur de type
- [ ] **Composants** : Nouveaux composants testés
- [ ] **Pages** : Nouvelles pages fonctionnelles

### 🎨 Design et UX

- [ ] **Design tokens** : Utilisation des variables CSS centralisées
- [ ] **Responsive** : Affichage correct sur mobile et desktop
- [ ] **Accessibilité** : Navigation clavier et contrastes WCAG AA
- [ ] **Performance** : Temps de chargement optimisés
- [ ] **Cohérence** : Style uniforme avec le reste du site

### 📚 Documentation

- [ ] **README** : Documentation mise à jour si nécessaire
- [ ] **Commentaires** : Code commenté pour les parties complexes
- [ ] **Changelog** : Modifications documentées
- [ ] **Instructions** : Nouvelles fonctionnalités expliquées

## 📝 Description des Modifications

### 🎯 Objectif

<!-- Décrivez l'objectif de cette PR -->

### 🔄 Modifications Apportées

<!-- Liste des modifications principales -->

- [ ] **Données** :
- [ ] **Images** :
- [ ] **Code** :
- [ ] **Styles** :
- [ ] **Documentation** :

### 🧪 Tests Effectués

<!-- Décrivez les tests effectués -->

- [ ] **Validation locale** :
- [ ] **Tests de build** :
- [ ] **Tests de navigation** :
- [ ] **Tests d'accessibilité** :

### 📊 Impact

<!-- Décrivez l'impact des modifications -->

- **Pages affectées** :
- **Fonctionnalités** :
- **Performance** :
- **Sécurité** :

## 🔍 Vérifications Techniques

### 📁 Fichiers Modifiés

<!-- Liste des fichiers modifiés -->

```
- data/members.json
- data/operations.json
- src/components/...
- public/members/...
```

### 🚨 Points d'Attention

<!-- Points à vérifier lors de la review -->

- [ ] **Validation des données** : Vérifier que les nouvelles données respectent le schéma
- [ ] **Images** : Vérifier que les nouvelles images sont bien traitées
- [ ] **Performance** : Vérifier que le build reste dans les limites
- [ ] **Sécurité** : Vérifier que les headers de sécurité sont maintenus

### 🔄 Déploiement

<!-- Instructions pour le déploiement -->

- [ ] **Vercel** : Déploiement automatique sur push main
- [ ] **GitHub Actions** : Vérifier que tous les workflows passent
- [ ] **Tests post-déploiement** : Vérifier le site en production

## 📸 Captures d'Écran

<!-- Ajoutez des captures d'écran si nécessaire -->

### Avant

<!-- Capture d'écran avant les modifications -->

### Après

<!-- Capture d'écran après les modifications -->

## 🎯 Checklist de Review

### Pour le Reviewer

- [ ] **Code review** : Code examiné et approuvé
- [ ] **Tests** : Tous les tests passent
- [ ] **Documentation** : Documentation mise à jour
- [ ] **Performance** : Aucune régression de performance
- [ ] **Sécurité** : Aucune vulnérabilité introduite

### Pour le Développeur

- [ ] **Feedback** : Tous les commentaires de review traités
- [ ] **Tests** : Tests supplémentaires effectués si nécessaire
- [ ] **Documentation** : Documentation complétée
- [ ] **Prêt** : PR prête pour le merge

## 🚨 Notes Importantes

### ⚠️ Breaking Changes

<!-- Décrivez les breaking changes si il y en a -->

### 🔒 Sécurité

<!-- Décrivez les aspects de sécurité -->

### 📈 Performance

<!-- Décrivez l'impact sur les performances -->

---

## 🎉 Résumé

<!-- Résumé final de la PR -->

**Type de modification** : [ ] Bug fix [ ] Feature [ ] Documentation [ ] Refactoring [ ] Performance

**Priorité** : [ ] Critique [ ] Haute [ ] Moyenne [ ] Faible

**Tests** : [ ] Automatiques [ ] Manuels [ ] Les deux

**Déploiement** : [ ] Immédiat [ ] Planifié [ ] Conditionnel

---

**Merci pour votre contribution à Black Water ! 🎯**
