import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import CheckboxView, { CheckboxRender, CheckboxSize } from "./CheckboxView";
import CheckboxInput from "./CheckboxInput";

type OmittedProps = "onChange" | "size";
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly size?: CheckboxSize;
  readonly render?: CheckboxRender;
  readonly children: ReactNode;
  readonly onChange?: (checked: boolean) => void;
  readonly disabled?: boolean;
  readonly checked?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, render, size, disabled, checked, ...props }: CheckboxProps, ref) => {
    return (
      <CheckboxView render={render} size={size} disabled={disabled} checked={checked}>
        <CheckboxInput ref={ref} disabled={disabled} checked={checked} {...props}>
          {children}
        </CheckboxInput>
      </CheckboxView>
    );
  },
);

export default Checkbox;
