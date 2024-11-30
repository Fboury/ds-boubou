import { InputHTMLAttributes, ReactNode } from "react";
export interface AlertContentProps extends InputHTMLAttributes<HTMLDivElement> {
    readonly children: ReactNode;
}
declare function AlertContent({ children, ...props }: AlertContentProps): import("react/jsx-runtime").JSX.Element;
export default AlertContent;
