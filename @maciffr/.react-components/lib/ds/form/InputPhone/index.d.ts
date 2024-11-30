import React, { InputHTMLAttributes } from "react";
import { ValidationMessages } from "../../commons/contrats/ValidationMessages";
type OmittedProps = "value" | "onChange" | "defaultValue";
export interface InputPhoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly value?: string;
    readonly defaultValue?: string;
    readonly onChange?: (value: string) => void;
    readonly validationMessage?: ValidationMessages;
    readonly error?: string;
}
declare const InputTelephone: React.ForwardRefExoticComponent<InputPhoneProps & React.RefAttributes<HTMLInputElement>>;
export default InputTelephone;
