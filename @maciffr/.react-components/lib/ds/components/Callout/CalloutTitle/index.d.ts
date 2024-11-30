import { ReactNode } from "react";
export interface CalloutTitleProps {
    readonly children: string | ReactNode;
}
export default function CalloutTitle({ children, ...props }: CalloutTitleProps): import("react/jsx-runtime").JSX.Element;
