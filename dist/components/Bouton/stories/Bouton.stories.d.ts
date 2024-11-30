declare const _default: {
    title: string;
    component: ({ children, variant, disabled, onClick }: import("../Bouton").BoutonProps) => import("react/jsx-runtime").JSX.Element;
    argTypes: {
        variant: {
            control: {
                type: string;
            };
            options: string[];
        };
        disabled: {
            control: {
                type: string;
            };
        };
        onClick: {
            action: string;
        };
    };
};
export default _default;
export declare const Primary: {
    (args: any): import("react/jsx-runtime").JSX.Element;
    args: {
        variant: string;
        disabled: boolean;
    };
};
export declare const Secondary: {
    (args: any): import("react/jsx-runtime").JSX.Element;
    args: {
        variant: string;
        disabled: boolean;
    };
};
export declare const Disabled: {
    (args: any): import("react/jsx-runtime").JSX.Element;
    args: {
        variant: string;
        disabled: boolean;
    };
};
