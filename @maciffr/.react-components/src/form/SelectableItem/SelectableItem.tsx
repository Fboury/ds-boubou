import React, {InputHTMLAttributes} from "react";
import Styles from "./SelectableItem.module.css";

type OmittedProps =
    "accept"
    | "alt"
    | "autocomplete"
    | "capture"
    | "crossOrigin"
    | "formAction"
    | "formEncType"
    | "formMethod"
    | "formNoValidate"
    | "formTarget"
    | "height"
    | "max"
    | "maxlength"
    | "min"
    | "minlength"
    | "multiple"
    | "name"
    | "pattern"
    | "placeholder"
    | "size"
    | "src"
    | "step"
    | "type"
    | "value"
    | "width";

export interface SelectableItemProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly value: string;
    readonly group: string;
}

export default function SelectableItem({id, children, value, group, ...props}: SelectableItemProperties) {
    return <div className={Styles.mcfSwitcher}>
        <input type="radio" className={Styles.formSwitcherRadio} id={id}
               {...props}
               name={group}
               value={value} autoComplete="off"/>
        <label className="mcf-btn mcf-btn--switcher" htmlFor={id}>
            {children}
        </label>
     </div>
}