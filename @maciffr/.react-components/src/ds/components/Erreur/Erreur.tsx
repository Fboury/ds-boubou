import { InputHTMLAttributes, ReactNode } from "react";

type OmittedProps = "aria-hidden" | "children";
interface ErreurProps extends Omit<InputHTMLAttributes<HTMLParagraphElement>, OmittedProps> {
  readonly children: ReactNode;
  readonly id: string;
}

export default function Erreur({ children, ...props }: ErreurProps) {
  if (!children) {
    return null;
  }
  
  return (
    <p className="mds-message--error mds-icon__error--left" {...props}>
      {children}
    </p>
  );
}
