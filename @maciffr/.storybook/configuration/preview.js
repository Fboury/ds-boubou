import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import './storybook.css';

const parameters = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        backgrounds: {
            default: "blanc",
            values: [
                {
                    name: "macif",
                    value: "#0A2D82",
                },
                {
                    name: "blanc",
                    value: "#fff",
                },
            ],
        },
        options: {
            storySort: (a, b) =>
                a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
        },
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        }
    }
}

export default parameters;