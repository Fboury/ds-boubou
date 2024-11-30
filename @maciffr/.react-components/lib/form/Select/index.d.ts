import { ReactNode, SelectHTMLAttributes } from "react";
import "./Select.css";
interface ValidationMessage {
    readonly required?: string;
}
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
    readonly ariaDescribedBy?: string;
    readonly children: ReactNode;
    readonly onChange: (value?: string) => void;
    readonly error?: string;
    readonly validationMessage?: ValidationMessage;
}
declare function Select({ id, "aria-describedby": ariaDescribedBy, children, error, validationMessage, onChange, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;
export default Select;
