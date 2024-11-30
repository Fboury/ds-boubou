# Créé depuis create-react-app <- Remplacer par le nom du produit

Ce projet à été créé grâce avec [Create React App](https://create-react-app.dev/) et utilise le template [Macif App](http://gitlab.macif.fr:82/btoc-sites.libs.utils/fmw-react/-/blob/main/cra-template-macif-app/readme.md)

## Préambule

***Présentation du produit !!!!***

## Architecture

L'architecture utilisé s'inspire fortement du **M**odèle **V**ue **C**ontrôleur et du **M**odèle **V**ue **P**résenteur.\
Pour plus d'information [voir ici](https://macif.atlassian.net/wiki/spaces/EC/pages/1305936307/Architecture+technique+socle+front)

## Scripts disponibles

Dans ce projet, vous pouvez lancer les commandes suivantes:

### `npm start`

Lance l'application en mode développement.\
Ouvre [http://localhost:3000](http://localhost:3000) dans le navigateur courant.

La page sera rechargée à chaque changements.\
Il y a aussi les erreurs de constructions dans la console.

### `npm test`

Lance les tests en mode observation.\
Voir aussi la [section sur les tests](https://create-react-app.dev/docs/running-tests/)

### `npm run build`

Construit l'application pour la production dans le répertoire `build`.\
Il construit correctement le paquet et applique les optimisations à la construction pour améliorer les performances.

Les fichiers sont minifiés et les noms des scripts ont une clé de hash.

Pour plus d'information voir la [section déploiement](https://create-react-app.dev/docs/deployment/).

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