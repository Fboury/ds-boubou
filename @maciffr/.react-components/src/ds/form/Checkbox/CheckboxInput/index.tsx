import React, { ChangeEvent, forwardRef, InputHTMLAttributes, ReactNode, useMemo, useState } from "react";
import Label from "../../../components/Label";

export interface CheckboxInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  readonly className?: string;
  readonly children: ReactNode;
  readonly onChange?: (checked: boolean) => void;
  readonly disabled?: boolean;
}

const CheckboxInput = forwardRef<HTMLInputElement, CheckboxInputProps>(
  ({ children, disabled, required, onChange = () => {}, ...props }: CheckboxInputProps, ref) => {
    const [valid, setValid] = useState<boolean>(true);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValid(event.target.checked);
      onChange(event.target.checked);
    }

    const handleInvalid = (event: ChangeEvent<HTMLInputElement>) => {
      setValid(event.target.validity.valid);
    };

    return (
      <>
        <input
          ref={ref}
          type="checkbox"
          onChange={handleChange}
          tabIndex={0}
          disabled={disabled}
          required={required}
          aria-required={required}
          aria-invalid={!valid}
          onInvalid={handleInvalid}
          {...props}
        />
        <Label disabled={disabled} htmlFor={props.id}>
          {children}
        </Label>
      </>
    );
  },
);

export default CheckboxInput;
