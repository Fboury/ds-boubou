import { InputHTMLAttributes, ReactNode } from "react";
export interface CalloutSubTitleProps extends InputHTMLAttributes<HTMLSpanElement> {
    readonly children: string | ReactNode;
}
export default function CalloutSubTitle({ children, ...props }: CalloutSubTitleProps): import("react/jsx-runtime").JSX.Element;
