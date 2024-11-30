import { InputHTMLAttributes } from "react";
import "./InputEmail.css";
type OmittedProps = "accept" | "alt" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "multiple" | "onChange" | "size" | "src" | "step" | "type" | "onPointerEnterCapture" | "onPointerLeaveCapture" | "width";
interface ValidationMessage {
    readonly required?: string;
    readonly pattern?: string;
}
export interface InputEmailProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly defaultValue?: string;
    readonly onChange?: (value: string) => void;
    readonly validationMessage?: ValidationMessage;
    readonly error?: string;
}
declare function InputEmail({ id, defaultValue, "aria-describedby": ariaDescribedBy, validationMessage, onChange, pattern, maxLength, error, ...props }: InputEmailProps): import("react/jsx-runtime").JSX.Element;
export default InputEmail;
