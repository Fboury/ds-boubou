import React, {ButtonHTMLAttributes, ReactNode} from "react";

type OmittedProps =
    "accept"
    | "alt"
    | "capture"
    | "checked"
    | "crossOrigin"
    | "formAction"
    | "formEncType"
    | "formMethod"
    | "formNoValidate"
    | "formTarget"
    | "height"
    | "max"
    | "min"
    | "multiple"
    | "size"
    | "src"
    | "step"
    | "width";

export interface ButtonProperties extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, OmittedProps> {
    readonly id:string;
    readonly children: string | ReactNode;
    readonly 'data-testid'?: string;
}

export default function Button({id,children, ...props}: ButtonProperties) {
    return <button
        {...props}
        id={id}
        className={`mcf-btn ${props.className || "mcf-btn--primary"}`}
    >
        {children}
    </button>
}

Button.defaultProps = {
    type: "button"
}
