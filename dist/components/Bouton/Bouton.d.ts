import "./Bouton.css";
import { ReactNode, ButtonHTMLAttributes } from "react";
export interface BoutonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    onClick?: () => void;
}
declare const Bouton: ({ children, variant, disabled, onClick }: BoutonProps) => import("react/jsx-runtime").JSX.Element;
export default Bouton;
