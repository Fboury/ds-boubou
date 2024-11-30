import React, { InputHTMLAttributes, ReactNode } from "react";

export interface RadioButtonGroupProps extends InputHTMLAttributes<HTMLFieldSetElement> {
  readonly children: ReactNode;
}

function RadioButtonFieldset({ children, ...props }: RadioButtonGroupProps) {
  return (
    <fieldset className="mds-fieldset" {...props}>
      {children}
    </fieldset>
  );
}

export default RadioButtonFieldset;
