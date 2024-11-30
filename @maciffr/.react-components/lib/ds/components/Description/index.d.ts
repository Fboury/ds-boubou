import { HTMLAttributes, ReactNode } from "react";
export interface LabelDescriptionProps extends HTMLAttributes<HTMLSpanElement> {
    readonly children: ReactNode;
}
declare function Description({ children, ...props }: LabelDescriptionProps): import("react/jsx-runtime").JSX.Element;
export default Description;
