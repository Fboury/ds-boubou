import { ReactNode, SelectHTMLAttributes } from "react";
import { ValidationMessages } from "../../commons/contrats/ValidationMessage";
export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
    readonly children: ReactNode;
    readonly onChange: (value?: string) => void;
    readonly error?: string;
    readonly validationMessage?: ValidationMessages;
}
declare function Select({ id, "aria-describedby": ariaDescribedBy, children, error, validationMessage, disabled, required, onChange, ...props }: SelectProps): import("react/jsx-runtime").JSX.Element;
export default Select;
