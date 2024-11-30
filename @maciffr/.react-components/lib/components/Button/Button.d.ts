import { ButtonHTMLAttributes, ReactNode } from "react";
type OmittedProps = "accept" | "alt" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "max" | "min" | "multiple" | "size" | "src" | "step" | "width";
export interface ButtonProperties extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, OmittedProps> {
    readonly id: string;
    readonly children: string | ReactNode;
    readonly 'data-testid'?: string;
}
declare function Button({ id, children, ...props }: ButtonProperties): import("react/jsx-runtime").JSX.Element;
declare namespace Button {
    var defaultProps: {
        type: string;
    };
}
export default Button;
