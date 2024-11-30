# @maciffr/storybook

Permet d'installer et de récupérer les configurations de base pour Storybook dans nos projet

## Installation

`npm i -D @maciffr/storybook`

## Configuation

### main.js
Créer une fichier au chemin suivant `<racine projet>/.storybook/main.js`

Dans le fichier `main.js` mettre le contenu suivant

```js
const configBase = require("@maciffr/storybook/configuration/main");

module.exports = configBase;
```

### preview.js

Créer une fichier au chemin suivant `<racine projet>/.storybook/preview.js`

Dans le fichier `preview.js` mettre le contenu suivant

```js
import { parameterBase } from "@maciffr/storybook/configuration/preview";

export default const parameter = {
    ...parameterBase
};
```

### preview-head.html

Créer une fichier au chemin suivant `<racine projet>/.storybook/preview-head.html`

Dans le fichier `preview.js` mettre le contenu suivant

```html
<script>
    window.global = window;
</script>
```
