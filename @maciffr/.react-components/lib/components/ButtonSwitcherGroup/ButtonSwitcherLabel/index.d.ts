import { InputHTMLAttributes, ReactNode } from "react";
export interface ButtonSwitcherLabelProps extends InputHTMLAttributes<HTMLLabelElement> {
    readonly children: ReactNode;
    readonly htmlFor: string;
    readonly selected?: boolean;
}
declare function ButtonSwitcherLabel({ selected, children, htmlFor, ...props }: ButtonSwitcherLabelProps): import("react/jsx-runtime").JSX.Element;
export default ButtonSwitcherLabel;
