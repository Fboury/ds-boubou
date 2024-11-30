const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Point d'entrée principal
  output: {
    path: path.resolve(__dirname, "dist"), // Dossier de sortie
    filename: "index.js", // Nom du fichier généré
    library: {
      name: "MyLibrary", // Nom global (si utilisé dans un navigateur)
      type: "umd", // Type de module : UMD (universel)
    },
    clean: true, // Nettoie le dossier `dist` avant chaque build
  },
  mode: "production", // Optimise le build pour la production
  externals: {
    react: "react", // Évite d'inclure React dans le bundle
    "react-dom": "react-dom",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Extensions supportées
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Transpilation TypeScript
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Teste les fichiers CSS
        use: [
          "style-loader", // Injecte le CSS dans le DOM
          "css-loader", // Traite les fichiers CSS et résout les imports
        ],
      },
    ],
  },
};
