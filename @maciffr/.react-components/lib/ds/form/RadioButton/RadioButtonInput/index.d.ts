import React, { InputHTMLAttributes, ReactNode } from "react";
export interface RadioButtonInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    readonly className?: string;
    readonly children: ReactNode;
    readonly onChange?: (value: string) => void;
}
declare const RadioButtonInput: React.ForwardRefExoticComponent<RadioButtonInputProps & React.RefAttributes<HTMLInputElement>>;
export default RadioButtonInput;
