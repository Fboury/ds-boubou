import React, {FormEvent, ReactNode, SelectHTMLAttributes, useEffect, useMemo, useState} from "react";
import "./Select.css";
import Erreur from "../../commons/view/Erreur";
import {VALIDATION_MESSAGES} from "./constantes";

interface ValidationMessage {
  readonly required?: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  readonly ariaDescribedBy?: string;
  readonly children: ReactNode;
  readonly onChange: (value?: string) => void;
  readonly error?: string;
  readonly validationMessage?: ValidationMessage;
}

function Select({
                  id,
                  "aria-describedby": ariaDescribedBy,
                  children,
                  error,
                  validationMessage,
                  onChange = () => {
                  },
                  ...props
                }: SelectProps) {
  const errorId = useMemo(() => `error-${id}`, [id]);
  const describedByWithError = `${ariaDescribedBy} ${errorId}`;
  const [componentState, setComponentState] = useState({
    errorMessage: error ?? "",
    describedBy: error ? describedByWithError : ariaDescribedBy
  });
  const { errorMessage, describedBy} = componentState;

  useEffect(() => {
    setComponentState({
      errorMessage: error ?? errorMessage,
      describedBy: error ? describedByWithError : ariaDescribedBy
    });
  }, [error]);

  function updateState(target: HTMLSelectElement, errorMessage: string) {
    target.setCustomValidity(errorMessage);
    setComponentState({
      errorMessage,
      describedBy: errorMessage ? describedByWithError : ariaDescribedBy
    });
  }

  function handleInvalid(event: FormEvent<HTMLSelectElement>) {
    event.preventDefault();
    const currentValue = event.currentTarget.value;

    if (props.required && !currentValue) {
      updateState(event.currentTarget, validationMessage?.required ?? VALIDATION_MESSAGES.required);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    updateState(event.target, "");
    onChange(event.target.value);
  }

  return (
    <>
      <select
        {...props}
        id={id}
        onChange={handleChange}
        autoComplete="off"
        onInvalid={handleInvalid}
        aria-invalid={!!errorMessage}
        className={`input-select mcf-form-control mcf-col ${props.className ?? ""}`}
        aria-describedby={describedBy}
      >
        {children}
      </select>
      {
        errorMessage && <Erreur id={errorId}>{errorMessage}</Erreur>
      }
    </>
  );
}

export default Select;
