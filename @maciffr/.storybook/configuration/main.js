export default {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y"
    ],
    typescript: {
        "check": false
    },
    features: {
        previewMdx2: true
    },
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    docs: {
        autodocs: "tag"
    }
};