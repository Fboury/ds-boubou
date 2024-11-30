import { HTMLAttributes, ReactElement, ReactNode } from "react";
import "./modal.css";
type OmittedProps = "children";
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
    children: ReactNode;
    shown?: boolean;
}
declare const Modal: ({ children, shown, ...props }: ModalProps) => ReactElement;
export default Modal;
