# @maciffr/react

Le but de ce paquet est de fournir la configuration typescript et vitejs pour les projets React.

## Installation

`npm i -S @maciffr/react`

## Configuaration 

### Typescript

Dans votre projet ajouter un fichier `tsConfig.json`

```json
{
  "extends": "@maciffr/react/tsConfig.json"
}
```

### Vite

À la racine de votre projet ajouter un fichier `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import viteUserConfig from "@maciffr/react/vite";

export default defineConfig(viteUserConfig);
```