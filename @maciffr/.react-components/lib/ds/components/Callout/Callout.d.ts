import { InputHTMLAttributes, ReactNode } from "react";
export interface CalloutProps extends InputHTMLAttributes<HTMLDivElement> {
    readonly children: string | ReactNode;
}
export default function Callout({ children }: CalloutProps): import("react/jsx-runtime").JSX.Element;
