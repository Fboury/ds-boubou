import { InputHTMLAttributes, ReactNode } from "react";
import "../modal.css";
export interface ModalContentProps extends InputHTMLAttributes<HTMLDivElement> {
    readonly children: ReactNode;
}
declare function ModalContent({ children, ...props }: ModalContentProps): import("react/jsx-runtime").JSX.Element;
export default ModalContent;
