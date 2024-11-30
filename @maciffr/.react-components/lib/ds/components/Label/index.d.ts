import { LabelHTMLAttributes, ReactNode } from "react";
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    readonly children: ReactNode;
    readonly disabled?: boolean;
}
declare function Label({ children, disabled, ...props }: LabelProps): import("react/jsx-runtime").JSX.Element;
export default Label;
