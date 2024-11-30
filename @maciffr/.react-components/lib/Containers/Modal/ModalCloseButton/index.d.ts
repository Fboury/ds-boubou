import { InputHTMLAttributes } from "react";
import "../modal.css";
interface ModalCloseButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
    onClose: () => void;
}
declare function ModalCloseButton({ onClose }: ModalCloseButtonProps): import("react/jsx-runtime").JSX.Element;
export default ModalCloseButton;
