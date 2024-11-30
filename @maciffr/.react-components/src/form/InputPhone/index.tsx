import React, { FormEvent, InputHTMLAttributes, ReactElement, useEffect, useMemo, useState } from "react";
import {
  MAX_PHONE_LENGTH,
  MAX_PHONE_LENGTH_WITHOUT_SPACE,
  REGEX_GROUPBY_TWO_DIGIT,
  REGEX_INPUT,
  REGEX_INPUT_MATCH_NON_DIGIT,
  VALIDATION_MESSAGES,
} from "./constantes";
import "./InputPhone.css";
import Erreur from "../../commons/view/Erreur";

export interface ValidationMessage {
  readonly required?: string;
  readonly pattern?: string;
}

export interface InputPhoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "defaultValue"> {
  readonly onChange?: (value: string) => void;
  readonly validationMessage?: ValidationMessage;
  readonly error?: string;
  readonly defaultValue?: string;
}

function InputPhone({
  id,
  defaultValue,
  className,
  autoComplete,
  validationMessage,
  "aria-describedby": ariaDescribedBy,
  maxLength = MAX_PHONE_LENGTH,
  pattern = REGEX_INPUT,
  onChange = () => {},
  error,
  ...props
}: InputPhoneProps): ReactElement {
  const errorId = useMemo(() => `error-${id}`, [id]);
  const [errorMessage, setErrorMessage] = useState(error);
  const [valueFormat, setValueFormat] = useState(defaultValue ? deleteNonDigitTruncateAndFormat(defaultValue) : "");

  useEffect(() => {
    setErrorMessage(error ?? errorMessage);
  }, [error]);

  function updateState(target: HTMLInputElement, error: string) {
    target.setCustomValidity(" ");
    setErrorMessage(error);
  }

  function onInvalid(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    validate(event.currentTarget);
  }

  function truncateMaxDigit(numberToTrunc: string) {
    return numberToTrunc.slice(0, MAX_PHONE_LENGTH_WITHOUT_SPACE);
  }

  function deleteNonDigitTruncateAndFormat(numberToFormat: string) {
    return format(truncateMaxDigit(deleteNonDigit(numberToFormat)));
  }

  function format(number: string) {
    if (number.length === MAX_PHONE_LENGTH_WITHOUT_SPACE) {
      return number.match(REGEX_GROUPBY_TWO_DIGIT)?.join(" ") ?? number;
    }

    return number;
  }

  function deleteNonDigit(valueWithNonDigit: string) {
    return valueWithNonDigit.replace(REGEX_INPUT_MATCH_NON_DIGIT, "");
  }

  function onChangeNumber(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.setCustomValidity("");
    setErrorMessage("");
    const valueOnlyNumber = truncateMaxDigit(deleteNonDigit(event.currentTarget.value));
    const valueFormatted = format(valueOnlyNumber);
    setValueFormat(valueFormatted);
    onChange(valueOnlyNumber);
  }

  function validate(target: HTMLInputElement): void {
    target.setCustomValidity("");

    if (target.validity.valid) {
      return setErrorMessage("");
    }

    if (target.validity.patternMismatch) {
      return updateState(target, validationMessage?.pattern ?? VALIDATION_MESSAGES.pattern ?? "");
    }
    if (target.validity.valueMissing) {
      return updateState(target, validationMessage?.required ?? VALIDATION_MESSAGES.required ?? "");
    }
    return;
  }

  return (
    <>
      <input
        id={id}
        value={valueFormat}
        inputMode="tel"
        className={`input-phone mcf-form-control ${className ?? ""}`}
        type="tel"
        maxLength={maxLength}
        onChange={onChangeNumber}
        onInvalid={onInvalid}
        aria-invalid={!!errorMessage}
        aria-describedby={`${ariaDescribedBy ?? ""} ${errorMessage ? errorId : ""}`}
        pattern={pattern}
        {...props}
      />
      {errorMessage && <Erreur id={errorId}>{errorMessage}</Erreur>}
    </>
  );
}

export default InputPhone;
