import React, {BaseHTMLAttributes} from "react";

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
    | "type"
    | "width";

export interface IconeProperties extends Omit<BaseHTMLAttributes<HTMLElement>, OmittedProps> {
    readonly value: string;
    readonly 'data-testid'?: string;
}

export default function Icone({id, ...props}:IconeProperties) {
    return <span {...props} aria-hidden="true" className={`icon icon-${props.value} ${props.className || ''}`}></span>
}
