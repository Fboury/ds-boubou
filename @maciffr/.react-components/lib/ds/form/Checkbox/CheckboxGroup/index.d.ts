import { ReactNode } from "react";
import { ValidationMessages } from "../../../commons/contrats/ValidationMessage";
export interface CheckboxGroupProps {
    readonly id: string;
    readonly children: ReactNode;
    readonly onChange?: (checkedValues: Array<string>) => void;
    readonly defaultValue?: Array<string>;
    readonly required?: boolean;
    readonly validationMessage?: ValidationMessages;
}
declare const CheckboxGroup: ({ children, required, id, validationMessage, onChange, defaultValue, }: CheckboxGroupProps) => import("react/jsx-runtime").JSX.Element;
export default CheckboxGroup;
