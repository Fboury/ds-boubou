import { InputHTMLAttributes } from "react";
import "./InputText.css";
type OmittedProps = "accept" | "alt" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "max" | "min" | "multiple" | "onChange" | "size" | "src" | "step" | "type" | "width";
interface ValidationMessage {
    readonly required?: string;
    readonly pattern?: string;
    readonly tooLong?: string;
    readonly tooShort?: string;
}
export interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly onChange?: (value: string) => void;
    readonly ariaDescribedby?: string;
    readonly autoComplete?: string;
    readonly validationMessage?: ValidationMessage;
    readonly error?: string;
}
/**
 * Composant permettant d'afficher un input de type text
 */
declare function InputText({ id, ariaDescribedby, validationMessage, onChange, error, ...props }: InputTextProps): import("react/jsx-runtime").JSX.Element;
export default InputText;
