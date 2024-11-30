import React, { FormEvent, ReactNode, SelectHTMLAttributes, useEffect, useMemo, useState } from "react";
import Erreur from "../../components/Erreur/Erreur";
import { VALIDATION_MESSAGES } from "./constantes";
import { ValidationMessages } from "../../commons/contrats/ValidationMessage";
import SelectItem from "./SelectItem";

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  readonly children: ReactNode;
  readonly onChange: (value?: string) => void;
  readonly error?: string;
  readonly validationMessage?: ValidationMessages;
}

function Select({
  id,
  "aria-describedby": ariaDescribedBy,
  children,
  error,
  validationMessage,
  disabled,
  required,
  onChange = () => {},
  ...props
}: SelectProps) {
  const errorId = useMemo(() => `error-${id}`, [id]);
  const [errorMessage, setErrorMessage] = useState(error);
  const describeBy = `${ariaDescribedBy}${errorMessage ? ` ${errorId}` : ""}`;

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  function updateState(target: HTMLSelectElement, message: string) {
    target.setCustomValidity(" ");
    setErrorMessage(message);
  }

  function validate(input: HTMLSelectElement) {
    input.setCustomValidity("");
    const { validity } = input;

    if (validity.valid) {
      setErrorMessage("");
      return true;
    }

    if (validity.valueMissing) {
      updateState(input, validationMessage?.required ?? VALIDATION_MESSAGES.required);
      return false;
    }

    return false;
  }

  function handleInvalid(event: FormEvent<HTMLSelectElement>) {
    validate(event.currentTarget);
  }

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    validate(event.currentTarget);
    onChange(event.target.value);
  }

  return (
    <>
      <SelectItem>
        <select
          id={id}
          required={required}
          disabled={disabled}
          onChange={handleChange}
          autoComplete="off"
          onInvalid={handleInvalid}
          aria-invalid={!!errorMessage}
          aria-describedby={describeBy}
          aria-required={required}
          {...props}
        >
          {children}
        </select>
      </SelectItem>
      <Erreur id={errorId}>{errorMessage}</Erreur>
    </>
  );
}

export default Select;
