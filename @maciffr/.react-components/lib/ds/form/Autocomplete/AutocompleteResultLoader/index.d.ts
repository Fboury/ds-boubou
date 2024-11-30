import { HTMLAttributes, ReactNode } from "react";
export interface AutocompleteLoaderProps extends HTMLAttributes<HTMLDivElement> {
    readonly children?: ReactNode;
}
declare const AutocompleteResultLoader: ({ children, ...props }: AutocompleteLoaderProps) => import("react/jsx-runtime").JSX.Element;
export default AutocompleteResultLoader;
