import React, { InputHTMLAttributes, ReactNode } from "react";
import { RadioButtonRender, RadioButtonSize } from "./RadioButtonView";
type OmittedProps = "onChange" | "size";
export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly size?: RadioButtonSize;
    readonly render?: RadioButtonRender;
    readonly children: ReactNode;
    readonly errorId?: string;
    readonly error?: string;
    readonly onChange?: (value: string) => void;
    readonly disabled?: boolean;
    readonly checked?: boolean;
}
declare const RadioButton: React.ForwardRefExoticComponent<RadioButtonProps & React.RefAttributes<HTMLInputElement>>;
export default RadioButton;
