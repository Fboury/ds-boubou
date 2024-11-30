import React, { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import RadioButtonInput from "./RadioButtonInput";
import RadioButtonView, { RadioButtonRender, RadioButtonSize } from "./RadioButtonView";

type OmittedProps = "onChange" | "size";
export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly size?: RadioButtonSize;
  readonly render?: RadioButtonRender;
  readonly children: ReactNode;
  readonly errorId?: string;
  readonly error?: string;
  readonly onChange?: (value: string) => void;
  readonly disabled?: boolean;
  readonly checked?: boolean;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, render, size, disabled, checked, ...props }: RadioButtonProps, ref) => {
    return (
      <RadioButtonView render={render} size={size} disabled={disabled} checked={checked}>
        <RadioButtonInput ref={ref} disabled={disabled} checked={checked} {...props}>
          {children}
        </RadioButtonInput>
      </RadioButtonView>
    );
  },
);

export default RadioButton;
