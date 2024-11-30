import React, { InputHTMLAttributes, ChangeEvent, useMemo, useState } from "react";
import "./InputText.css";
import Erreur from "../../commons/view/Erreur";
import { VALIDATION_MESSAGE } from "./constantes";

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
  | "max"
  | "min"
  | "multiple"
  | "onChange"
  | "size"
  | "src"
  | "step"
  | "type"
  | "width";

interface ValidationMessage {
  readonly required?: string;
  readonly pattern?: string;
  readonly tooLong?: string;
  readonly tooShort?: string;
}

export interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly id: string;
  readonly onChange?: (value: string) => void;
  readonly ariaDescribedby?: string;
  readonly autoComplete?: string;
  readonly validationMessage?: ValidationMessage;
  readonly error?: string;
}

/**
 * Composant permettant d'afficher un input de type text
 */
function InputText({ id, ariaDescribedby, validationMessage, onChange = () => {}, error, ...props }: InputTextProps) {
  const errorId = useMemo(() => `error-${id}`, [id]);
  const [errorMessage, setErrorMessage] = useState("");

  const updateErrorState = (input: HTMLInputElement, message: string) => {
    // enlève la popup HTML de la validation
    input.setCustomValidity(" ");
    setErrorMessage(message);
  };

  const validatePattern = (input: HTMLInputElement) => {
    const { validity } = input;
    if (validity.patternMismatch) {
      updateErrorState(input, validationMessage?.pattern ?? VALIDATION_MESSAGE.pattern);
      return false;
    }
    return true;
  };

  const validateRequired = (input: HTMLInputElement) => {
    const { validity } = input;
    if (validity.valueMissing) {
      updateErrorState(input, validationMessage?.required ?? VALIDATION_MESSAGE.required);
      return false;
    }
    return true;
  };

  const validateMax = (input: HTMLInputElement) => {
    const { validity } = input;
    if (validity.tooLong) {
      updateErrorState(input, validationMessage?.tooLong ?? VALIDATION_MESSAGE.tooLong);
      return false;
    }
    return true;
  };

  const validateMin = (input: HTMLInputElement) => {
    const { validity } = input;
    if (validity.tooShort) {
      updateErrorState(input, validationMessage?.tooShort ?? VALIDATION_MESSAGE.tooShort);
      return false;
    }
    return true;
  };

  const validate = (input: HTMLInputElement) => {
    input.setCustomValidity("");

    const { validity } = input;
    if (validity.valid) {
      setErrorMessage("");
      return true;
    }

    return validateRequired(input) && validatePattern(input) && validateMin(input) && validateMax(input);
  };

  const handleInvalid = (event: ChangeEvent<HTMLInputElement>) => {
    validate(event.target);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setErrorMessage("");
    validatePattern(event.target);
    onChange(event.target.value);
  };

  return (
    <>
      <input
        id={id}
        className="input-text mcf-form-control mcf-col"
        type="text"
        aria-describedby={`${ariaDescribedby ?? ""} ${errorMessage ? errorId : ""}`}
        aria-invalid={!!errorMessage}
        onChange={handleChange}
        onInvalid={handleInvalid}
        {...props}
      />
      {errorMessage && <Erreur id={errorId}>{errorMessage}</Erreur>}
    </>
  );
}

export default InputText;
