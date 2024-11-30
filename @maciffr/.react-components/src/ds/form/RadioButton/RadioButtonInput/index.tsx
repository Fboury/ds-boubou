import React, { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode } from "react";
import Label from "../../../components/Label";

export interface RadioButtonInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  readonly className?: string;
  readonly children: ReactNode;
  readonly onChange?: (value: string) => void;
}

const RadioButtonInput = forwardRef<HTMLInputElement, RadioButtonInputProps>(
  ({ className, children, required, onChange = () => {}, ...props }: RadioButtonInputProps, ref) => {
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      onChange(event.target.value);
    }

    return (
      <>
        <input
          ref={ref}
          type="radio"
          required={required}
          aria-required={required}
          onChange={handleChange}
          tabIndex={0}
          {...props}
        />
        <Label disabled={props.disabled} htmlFor={props.id}>
          {children}
        </Label>
      </>
    );
  },
);

export default RadioButtonInput;
