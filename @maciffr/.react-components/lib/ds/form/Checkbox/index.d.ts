import React, { InputHTMLAttributes, ReactNode } from "react";
import { CheckboxRender, CheckboxSize } from "./CheckboxView";
type OmittedProps = "onChange" | "size";
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly size?: CheckboxSize;
    readonly render?: CheckboxRender;
    readonly children: ReactNode;
    readonly onChange?: (checked: boolean) => void;
    readonly disabled?: boolean;
    readonly checked?: boolean;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
