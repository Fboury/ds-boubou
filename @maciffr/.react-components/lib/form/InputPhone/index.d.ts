import { InputHTMLAttributes, ReactElement } from "react";
import "./InputPhone.css";
export interface ValidationMessage {
    readonly required?: string;
    readonly pattern?: string;
}
export interface InputPhoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "defaultValue"> {
    readonly onChange?: (value: string) => void;
    readonly validationMessage?: ValidationMessage;
    readonly error?: string;
    readonly defaultValue?: string;
}
declare function InputPhone({ id, defaultValue, className, autoComplete, validationMessage, "aria-describedby": ariaDescribedBy, maxLength, pattern, onChange, error, ...props }: InputPhoneProps): ReactElement;
export default InputPhone;
