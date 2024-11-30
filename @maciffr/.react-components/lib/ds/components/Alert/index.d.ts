import { InputHTMLAttributes, ReactNode } from "react";
export interface AlertProps extends InputHTMLAttributes<HTMLDivElement> {
    readonly children: ReactNode;
    readonly variant?: AlertVariant;
    readonly type: AlertType;
}
export declare enum AlertVariant {
    Basic = "basic",
    Rich = "rich",
    Big = "accent-big"
}
export declare enum AlertType {
    Info = "info",
    Warning = "warning",
    Success = "success",
    Danger = "danger"
}
declare function Alert({ children, type, variant, ...props }: AlertProps): import("react/jsx-runtime").JSX.Element;
export default Alert;
