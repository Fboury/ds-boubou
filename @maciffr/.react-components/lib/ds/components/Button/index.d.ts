import { ButtonHTMLAttributes, ReactNode } from "react";
export declare enum ButtonTheme {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary"
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    readonly id: string;
    readonly reversed?: boolean;
    readonly theme?: ButtonTheme;
    readonly icon?: string;
    readonly iconOnly?: boolean;
    readonly loader?: boolean;
    readonly children?: ReactNode;
}
export default function Button({ id, disabled, reversed, theme, icon, iconOnly, loader, className, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
