import React, { InputHTMLAttributes } from "react";
import { ValidationMessages } from "../../commons/contrats/ValidationMessages";
type OmittedProps = "onChange";
interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly onChange?: (valeur: string) => void;
    readonly validationMessage?: ValidationMessages;
}
declare const InputText: React.ForwardRefExoticComponent<InputTextProps & React.RefAttributes<HTMLInputElement>>;
export default InputText;
