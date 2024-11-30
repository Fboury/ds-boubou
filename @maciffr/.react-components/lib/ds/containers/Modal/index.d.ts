import { HTMLAttributes, ReactElement, ReactNode } from "react";
import "./modal.css";
type OmittedProps = "children";
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
    children: ReactNode;
    shown?: boolean;
    onClose: () => void;
}
declare const Modal: ({ children, onClose, shown, ...props }: ModalProps) => ReactElement;
export default Modal;
