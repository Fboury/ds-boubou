const pluginReact = require('@vitejs/plugin-react');

const viteUserConfig = (projectName) => ({
    build: {
        manifest: true,
        outDir: `dist/${projectName}`,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                entryFileNames: `js/${projectName}-[hash].js`,
                assetFileNames: `css/${projectName}-[hash].css`,
                format: "iife"
            }
        }
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setup.ts"],
        coverage: {
            reporter: ["text", "lcov"],
            exclude: [
                "coverage/**",
                "dist/**",
                "packages/*/test?(s)/**",
                "**/*.d.ts",
                "cypress/**",
                "test?(s)/**",
                "test?(-*).?(c|m)[jt]s?(x)",
                "**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)",
                "**/__tests__/**",
                "**/src/**/*.stories.*",
                "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,commitlint}.config.*",
                "**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}",
                "**/.storybook/*"
            ]
        }
    },
    plugins: [pluginReact()]
});

module.exports = viteUserConfig;