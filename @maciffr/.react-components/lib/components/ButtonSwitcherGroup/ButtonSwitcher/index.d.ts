import React, { InputHTMLAttributes } from "react";
import "./ButtonSwitcher.css";
export interface ButtonSwitcherProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    readonly onChange?: (value: string) => void;
    readonly selected?: boolean;
    readonly libelle: string;
    readonly value: string;
    readonly name: string;
    readonly errorId?: string;
    readonly error?: string;
}
declare const ButtonSwitcher: React.ForwardRefExoticComponent<ButtonSwitcherProps & React.RefAttributes<HTMLInputElement>>;
export default ButtonSwitcher;
