import React, {FormEvent, InputHTMLAttributes, useEffect, useMemo, useState} from "react";
import {MAX_EMAIL_LENGTH, REGEX_PATTERN_EMAIL, VALIDATION_MESSAGES} from "./constantes";
import "./InputEmail.css";
import Erreur from "../../commons/view/Erreur";

type OmittedProps =
  | "accept"
  | "alt"
  | "capture"
  | "checked"
  | "crossOrigin"
  | "formAction"
  | "formEncType"
  | "formMethod"
  | "formNoValidate"
  | "formTarget"
  | "height"
  | "multiple"
  | "onChange"
  | "size"
  | "src"
  | "step"
  | "type"
  | "onPointerEnterCapture"
  | "onPointerLeaveCapture"
  | "width";

interface ValidationMessage {
  readonly required?: string;
  readonly pattern?: string;
}

export interface InputEmailProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly id: string;
  readonly defaultValue?: string;
  readonly onChange?: (value: string) => void;
  readonly validationMessage?: ValidationMessage;
  readonly error?: string;
}

function InputEmail({
  id,
  defaultValue,
  "aria-describedby": ariaDescribedBy,
  validationMessage,
  onChange = () => {},
  pattern = REGEX_PATTERN_EMAIL,
  maxLength = MAX_EMAIL_LENGTH,
  error,
  ...props
}: InputEmailProps) {
  const errorId = useMemo(() => `error-${id}`, [id]);
  const [componentState, setComponentState] = useState({
    errorMessage: error ?? "",
  });
  const { errorMessage } = componentState;

  useEffect(() => {
    setComponentState({
      errorMessage: error ?? errorMessage,
    });
  }, [error]);

  function updateState(target: HTMLInputElement, error: string) {
    target.setCustomValidity(error);
    setComponentState({
      errorMessage: error,
    });
  }

  function handleInvalid(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const currentValue = event.currentTarget.value;

    if (props.required && !currentValue) {
      updateState(event.currentTarget, validationMessage?.required ?? VALIDATION_MESSAGES.required);
    } else if (!RegExp(pattern).exec(currentValue)) {
      updateState(event.currentTarget, validationMessage?.pattern ?? VALIDATION_MESSAGES.pattern);
    }
  }

  function handleChange(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    updateState(event.currentTarget, "");
    onChange(event.currentTarget.value);
  }

  return (
    <>
      <input
        id={id}
        defaultValue={defaultValue}
        inputMode="email"
        className="input-email mcf-form-control mcf-col"
        type="email"
        onChange={handleChange}
        onInvalid={handleInvalid}
        aria-invalid={!!errorMessage}
        aria-describedby={`${ariaDescribedBy ?? ""} ${errorMessage ? errorId : ""}`}
        pattern={pattern}
        maxLength={maxLength}
        {...props}
      />
      {errorMessage && <Erreur id={errorId}>{errorMessage}</Erreur>}
    </>
  );
}

export default InputEmail;
