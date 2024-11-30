import "./Bouton.css";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface BoutonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

const Bouton = ({ children, variant, disabled, onClick }: BoutonProps) => {
  const className = `btn ${variant}`;

  return (
    <button
      aria-disabled={disabled}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Bouton;
