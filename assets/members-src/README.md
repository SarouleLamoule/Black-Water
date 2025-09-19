# Images sources des membres

Placez ici les images sources des membres avant de les traiter avec le script `npm run blur`.

## Format supporté

- JPG/JPEG
- PNG
- WebP

## Processus

1. Placez vos images dans ce dossier
2. Exécutez `npm run blur`
3. Les images floutées seront générées dans `/public/members/`

## Exemple de nommage

- `dune.jpg` → `dune_blur.webp`
- `operator1.png` → `operator1_blur.webp`

## Traitement automatique

- Flou gaussian (sigma 14)
- Redimensionnement 400x400px
- Watermark "CLASSIFIED"
- Export WebP (qualité 80%)
