import React, {forwardRef, InputHTMLAttributes} from "react";
import "./ButtonSwitcher.css";
import ButtonSwitcherLabel from "../ButtonSwitcherLabel";

export interface ButtonSwitcherProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  readonly onChange?: (value: string) => void;
  readonly selected?: boolean;
  readonly libelle: string;
  readonly value: string;
  readonly name: string;
  readonly errorId?: string;
  readonly error?: string;
}

const ButtonSwitcher = forwardRef<HTMLInputElement, ButtonSwitcherProps> (
  (
    {
      libelle,
      value,
      onChange = () => {},
      selected = false,
      name,
      error,
      errorId,
      "aria-describedby": ariaDescribedBy = "",
      required
    },
    ref
  )=> {

  return (
    <ButtonSwitcherLabel htmlFor={`${name}-${value}`} selected={selected}>
      <input
        ref={ref}
        id={`${name}-${value}`}
        type="radio"
        name={name}
        required={required}
        aria-required="true"
        data-testid={`${name}-${value}`}
        aria-describedby={`${ariaDescribedBy} ${error ? errorId : ""}`}
        aria-invalid={!!error}
        autoComplete="off"
        value={value}
        onClick={() => onChange && onChange(value)}
      />
      <span>{libelle}</span>
    </ButtonSwitcherLabel>

  );
});

export default ButtonSwitcher;
