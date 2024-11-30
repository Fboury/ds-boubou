import { HTMLAttributes, ReactNode } from "react";
export interface AutocompleteResultInfoProps extends HTMLAttributes<HTMLDivElement> {
    readonly children: ReactNode;
}
declare const AutocompleteResultInfo: ({ children, ...props }: AutocompleteResultInfoProps) => import("react/jsx-runtime").JSX.Element;
export default AutocompleteResultInfo;
