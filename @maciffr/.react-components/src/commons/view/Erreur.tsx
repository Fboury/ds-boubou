import React, { InputHTMLAttributes, ReactNode } from "react";

type OmittedProps = "aria-hidden" | "children";
interface ErreurProps extends Omit<InputHTMLAttributes<HTMLParagraphElement>, OmittedProps> {
  readonly children: ReactNode;
  readonly id: string;
}

export default function Erreur({ id, children, ...props }: ErreurProps) {
  return (
    <p id={id} className="invalid-feedback mcf-order-last" {...props}>
      <span className="icon icon-erreur" aria-hidden={true} />
      {children}
    </p>
  );
}
