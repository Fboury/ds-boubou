import { LabelHTMLAttributes, ReactNode } from "react";
export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  readonly children: ReactNode;
  readonly disabled?: boolean;
}

function Label({ children, disabled = false, ...props }: LabelProps) {
  const disabledClass = disabled ? " mds-disabled-label" : "";
  return (
    <label className={`mds-label${disabledClass}`} {...props}>
      {children}
    </label>
  );
}

export default Label;
