import React, { InputHTMLAttributes } from "react";
import { ValidationMessages } from "../../commons/contrats/ValidationMessages";
type OmittedProps = "value" | "onChange" | "defaultValue";
export interface InputEmailProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly value?: string;
    readonly defaultValue?: string;
    readonly onChange?: (value: string) => void;
    readonly validationMessage?: ValidationMessages;
    readonly error?: string;
}
declare const InputEmail: React.ForwardRefExoticComponent<InputEmailProps & React.RefAttributes<HTMLInputElement>>;
export default InputEmail;
