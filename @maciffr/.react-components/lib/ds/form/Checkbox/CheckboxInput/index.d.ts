import React, { InputHTMLAttributes, ReactNode } from "react";
export interface CheckboxInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    readonly className?: string;
    readonly children: ReactNode;
    readonly onChange?: (checked: boolean) => void;
    readonly disabled?: boolean;
}
declare const CheckboxInput: React.ForwardRefExoticComponent<CheckboxInputProps & React.RefAttributes<HTMLInputElement>>;
export default CheckboxInput;
