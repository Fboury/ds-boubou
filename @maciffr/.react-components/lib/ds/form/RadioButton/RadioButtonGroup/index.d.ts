import { InputHTMLAttributes, ReactElement } from "react";
import { RadioButtonInputProps } from "../RadioButtonInput";
import { ValidationMessages } from "../../../commons/contrats/ValidationMessage";
export interface RadioButtonGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    readonly children: ReactElement<RadioButtonInputProps>[];
    readonly onChange: (value: string) => void;
    readonly validationMessage?: ValidationMessages;
    readonly defaultValue?: string;
}
declare function RadioButtonGroup({ id, children, onChange, validationMessage, required, defaultValue }: RadioButtonGroupProps): import("react/jsx-runtime").JSX.Element;
export default RadioButtonGroup;
