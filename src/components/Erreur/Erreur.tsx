import { InputHTMLAttributes, ReactNode } from "react";
import "./Erreur.css";
type OmittedProps = "aria-hidden" | "children";

interface ErreurProps
  extends Omit<InputHTMLAttributes<HTMLParagraphElement>, OmittedProps> {
  readonly children: ReactNode;
  readonly id: string;
}

export default function Erreur({ children, ...props }: ErreurProps) {
  if (!children) {
    return null;
  }

  return (
    <p className="dsb-message--error mds-icon__error--left" {...props}>
      {children}
    </p>
  );
}
