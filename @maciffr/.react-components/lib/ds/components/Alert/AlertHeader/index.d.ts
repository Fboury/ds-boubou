import { InputHTMLAttributes, ReactNode } from "react";
export interface AlertHeaderProps extends InputHTMLAttributes<HTMLDivElement> {
    readonly children: ReactNode;
}
declare function AlertHeader({ children, ...props }: AlertHeaderProps): import("react/jsx-runtime").JSX.Element;
export default AlertHeader;
