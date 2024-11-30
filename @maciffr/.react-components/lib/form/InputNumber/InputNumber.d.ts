import { InputHTMLAttributes } from "react";
import "./InputNumber.css";
import { ValidationMessages } from "../../commons/contrats/ValidationMessages";
type OmittedProps = "accept" | "alt" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "multiple" | "onChange" | "size" | "src" | "step" | "type" | "onPointerEnterCapture" | "onPointerLeaveCapture" | "width";
export interface InputNumberProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly defaultValue?: number;
    readonly onChange?: (value: number | null) => void;
    readonly format?: boolean;
    readonly min?: number;
    readonly max?: number;
    readonly value?: number;
    readonly validationMessages?: ValidationMessages;
    readonly "data-testid"?: string;
    readonly error?: string;
}
/**
 * Composant UI pour renseigner un nombre/chiffre
 */
export default function InputNumber({ id, defaultValue, onChange, format, min, max, validationMessages, value, "aria-describedby": ariaDescribedBy, error, ...props }: InputNumberProperties): import("react/jsx-runtime").JSX.Element;
export {};
