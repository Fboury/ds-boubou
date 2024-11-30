import { InputHTMLAttributes, ReactNode } from "react";
export interface RadioButtonGroupProps extends InputHTMLAttributes<HTMLFieldSetElement> {
    readonly children: ReactNode;
}
declare function RadioButtonFieldset({ children, ...props }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
export default RadioButtonFieldset;
