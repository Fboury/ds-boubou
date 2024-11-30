import React, { FormEvent, InputHTMLAttributes, useEffect, useMemo, useState } from "react";
import { KEYS, MESSAGES, REGEX_NOT_NUMBER, REGEX_ONLY_NUMBERS_SPACE_AND_DASH } from "./constantes";
import { isNumber } from "./utils";
import "./InputNumber.css";
import Erreur from "../../commons/view/Erreur";
import { ValidationMessages } from "../../commons/contrats/ValidationMessages";

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

type MessageType = "required" | "max" | "min" | "pattern";

export interface InputNumberProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly defaultValue?: number;
  readonly onChange?: (value: number | null) => void;
  readonly format?: boolean;
  readonly min?: number;
  readonly max?: number;
  readonly value?: number;
  readonly validationMessages?: ValidationMessages;
  readonly "data-testid"?: string;
  readonly error?: string;
}

/**
 * Composant UI pour renseigner un nombre/chiffre
 */
export default function InputNumber({
  id,
  defaultValue,
  onChange,
  format = false,
  min = -Infinity,
  max = Infinity,
  validationMessages,
  value,
  "aria-describedby": ariaDescribedBy,
  error,
  ...props
}: InputNumberProperties) {
  const errorId = useMemo(() => `error-${id}`, [id]);
  const formatter = Intl.NumberFormat("fr-FR");
  const [componentState, changeComponentState] = useState({
    inputValue: value?.toString() ?? defaultValue?.toString() ?? "",
    errorMessage: error ?? "",
  });

  const { errorMessage, inputValue } = componentState;

  useEffect(() => {
    changeComponentState({
      ...componentState,
      errorMessage: error ?? errorMessage,
    });
  }, [error]);

  function onInvalidHandler(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    validate(event.currentTarget, normalizeValue(event.currentTarget.value));
    changeComponentState({
      inputValue,
      errorMessage: event.currentTarget.validationMessage,
    });
  }

  function handleChange(target: HTMLInputElement, value: string) {
    const formatedValue = normalizeValue(value);
    validate(target, formatedValue);
    changeComponentState({
      inputValue: formatedValue?.toString(),
      errorMessage: target.validationMessage,
    });
    if (onChange) {
      if (!target.validationMessage && isNumber(value)) {
        onChange(+formatedValue);
      } else {
        onChange(null);
      }
    }
  }

  function onKeyDownHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === KEYS.DOWN) {
      event.preventDefault();
      handleArrowDown(event.currentTarget);
    } else if (event.key === KEYS.UP) {
      event.preventDefault();
      handleArrowUp(event.currentTarget);
    }
  }

  function handleArrowDown(target: HTMLInputElement) {
    const value = normalizeValue(target.value);

    if (!isNumber(value)) {
      handleChange(target, min === 0 ? "0" : "-1");
    } else if (+value - 1 >= min) {
      handleChange(target, (+value - 1).toString());
    }
  }

  function handleArrowUp(target: HTMLInputElement) {
    const value = normalizeValue(target.value);

    if (!isNumber(value)) {
      handleChange(target, max === 0 ? "0" : "1");
    } else if (+value + 1 <= max) {
      handleChange(target, (+value + 1).toString());
    }
  }

  function onChangeHandler(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    handleChange(event.currentTarget, event.currentTarget.value);
  }

  function normalizeValue(value: string): string {
    if (!value) {
      return "";
    }

    const numericValue = value.replace(REGEX_NOT_NUMBER, "");
    if (value.startsWith("-") && min < 0) {
      return `-${numericValue}`;
    }
    return numericValue;
  }

  function getValidationMessage(messageType: MessageType, value?: string) {
    return validationMessages?.[messageType] ?? `${MESSAGES[messageType]} ${value ?? ""}`;
  }

  function validate(target: HTMLInputElement, value: string): boolean {
    let isValid = true;
    target.setCustomValidity("");
    if (value && +value < min) {
      isValid = false;
      target.setCustomValidity(getValidationMessage("min", min.toString()));
    }
    if (value && +value > max) {
      isValid = false;
      target.setCustomValidity(getValidationMessage("max", max.toString()));
    }
    if (target.validity.valueMissing) {
      isValid = false;
      target.setCustomValidity(getValidationMessage("required"));
    }
    if (target.validity.patternMismatch) {
      isValid = false;
      target.setCustomValidity(getValidationMessage("pattern"));
    }
    return isValid;
  }

  function formatDisplayValue(currentValue: string) {
    if (format && currentValue && currentValue !== "-") {
      return formatter.format(+currentValue);
    }
    return currentValue;
  }

  return (
    <>
      <input
        id={id}
        value={formatDisplayValue(inputValue)}
        type="text"
        className={`input-number mcf-form-control ${props.className ?? ""}`}
        pattern={REGEX_ONLY_NUMBERS_SPACE_AND_DASH}
        autoComplete="off"
        onInvalid={onInvalidHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        aria-invalid={!!errorMessage}
        aria-describedby={`${ariaDescribedBy ?? ""} ${errorMessage ? errorId : ""}`}
        {...props}
      />

      {errorMessage && <Erreur id={errorId}>{errorMessage}</Erreur>}
    </>
  );
}
