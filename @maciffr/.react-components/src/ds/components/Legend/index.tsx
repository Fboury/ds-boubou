import { HTMLAttributes, ReactNode } from "react";

export interface LegendProps extends HTMLAttributes<HTMLLegendElement> {
  readonly children: ReactNode;
  readonly disabled?: boolean;
}

function Legend({ children, disabled = false, ...props }: LegendProps) {
  return (
    <legend className={`mds-label${disabled ? " mds-disabled-label" : ""}`} {...props}>
      {children}
    </legend>
  );
}

export default Legend;
