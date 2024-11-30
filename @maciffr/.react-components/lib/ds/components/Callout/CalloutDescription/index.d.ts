import { InputHTMLAttributes, ReactNode } from "react";
export interface CalloutDescriptionProps extends InputHTMLAttributes<HTMLParagraphElement> {
    readonly children: string | ReactNode;
}
export default function CalloutDescription({ children, ...props }: CalloutDescriptionProps): import("react/jsx-runtime").JSX.Element;
