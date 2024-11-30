# Créé depuis create-react-app <- Remplacer par le nom du produit

Ce projet à été créé grâce avec [Create React App](https://create-react-app.dev/) et utilise le template [Macif App](http://gitlab.macif.fr:82/btoc-sites.libs.utils/fmw-react/-/blob/main/cra-template-macif-component/readme.md)

## Préambule

***Présentation du composant !!!!***

## Scripts disponibles

Dans ce projet, vous pouvez lancer les commandes suivantes:

### `npm start`

Lance le storybook en mode observé.

Voir commande `npm run storybook`

### `npm test`

Lance les tests en mode observation.\
Voir aussi la [section sur les tests](https://create-react-app.dev/docs/running-tests/)

### `npm run storybook`

Lance le storybook en mode observé.

Vous pouvez le voir à l'adresse [http://localhost:6000](http://localhost:6000)

Le format Storybook utilisé est le [MDX](https://storybook.js.org/docs/react/writing-docs/mdx)
voir aussi la [documentation de storybook](https://storybook.js.org/)

## Les variables d'environnements

Afin de simplifier vos développement en fonction des contraintes d'environnement, vous pouvez utiliser des variables d'environnement.

Les variables d'environnement sont remplacé au moment du build, à l'exception des variables `NODE_ENV` et `PUBLIC_URL`, les variables doivent être préfixé de `REACT_APP_` .

### Les fichiers d'ajout de variables d'environnement

`.env`: par défaut\
`.env.local`: variables locales. **Le fichier est utilisé dans tous les environnements sauf en tests**\
`.env.development`, `.env.test`, `.env.production`: Variables utilisés en fonction de l'environnement d'éxecution.\
`.env.development.local`, `.env.test.local`, `.env.production.local`: Variables utilisés en fonction de l'environnement d'éxecution.\

Ordre de priorité des fichiers, l'ordre de priorité se fait de **gauche** à **droite**:

`npm start`: `.env.development.local`, `.env.local`, `.env.development`, `.env`\
`npm run build`: `.env.production.local`, `.env.local`, `.env.production`, `.env`\
`npm test`: `.env.test.local`, `.env.test`, `.env`

Pour plus d'informaitons voir la [section variable d'environnement](https://create-react-app.dev/docs/adding-custom-environment-variables)

## Publication

Lors de la publication veillé à ce que **rien** ne soit présent dans la partie **dependencies**, afin d'éviter le téléchargement de module dans ce dernier.

La publication poussera le répertoire `lib` et le répertoire `src`.\
Le répertoire `lib` contient les fichiers `js` transpilé, les définitions de type et le fichiers `map`.\
Le répertoire `src` est là pour permètre le rattachement avec les fichiers `map`.

Afin d'assurer une bonne exposition des fichiers il set impératifs d'utiliser les sections `exports` et `typesVersions` du fichier `package.json`.

Dans le cas ou un seul composant est présent dans le paquet, la configuration par défaut devrait fonctionner.

### exemple

dans le cas où mon arborescence est la suivante:

lib\
| maFamilleComposants
|| Composant1.js
|| Composant1.d.ts
|| Composant1.map.js
|| Composant2.js
|| Composant2.d.ts
|| Composant2.map.js
src
| maFamilleComposants
|| Composant1.ts
|| Composant2.ts

```json
{
  // …
  "exports": {
    "./maFamilleComposants/*": "./lib/maFamilleComposants/*.js"
  },
  "typesVersions": {
    "*": {
      "maFamilleComposants/*": [
        "lib/maFamilleComposants/*"
      ]
    }
  }
}
```

Pour plus de détail voir [Configuration node points d'entrée](https://nodejs.org/api/packages.html#package-entry-points) & [TS publication](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)