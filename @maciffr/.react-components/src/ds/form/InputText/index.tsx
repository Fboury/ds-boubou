import React, { ChangeEvent, forwardRef, InputHTMLAttributes, useMemo, useState } from "react";
import Erreur from "../../components/Erreur/Erreur";
import { VALIDATION_MESSAGES } from "./constantes";
import { ValidationMessages } from "../../commons/contrats/ValidationMessage";
import InputCell from "../InputCell";

type OmittedProps = "onChange";

interface InputTextProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly onChange?: (valeur: string) => void;
  readonly validationMessage?: ValidationMessages;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      id,
      validationMessage,
      required,
      "aria-describedby": ariaDescribedBy = "",
      onChange = () => {},
      ...props
    }: InputTextProps,
    ref
  ) => {
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
        updateErrorState(input, validationMessage?.pattern ?? VALIDATION_MESSAGES.pattern);
        return false;
      }
      return true;
    };

    const validateRequired = (input: HTMLInputElement) => {
      const { validity } = input;
      if (validity.valueMissing) {
        updateErrorState(input, validationMessage?.required ?? VALIDATION_MESSAGES.required);
        return false;
      }
      return true;
    };

    const validateMax = (input: HTMLInputElement) => {
      const { validity } = input;
      if (validity.tooLong) {
        updateErrorState(input, validationMessage?.max ?? VALIDATION_MESSAGES.max);
        return false;
      }
      return true;
    };

    const validateMin = (input: HTMLInputElement) => {
      const { validity } = input;
      if (validity.tooShort) {
        updateErrorState(input, validationMessage?.min ?? VALIDATION_MESSAGES.min);
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
        <InputCell>
          <input
            id={id}
            ref={ref}
            onInvalid={handleInvalid}
            onChange={handleChange}
            type="text"
            className="mds-input mds-input-text--basic"
            aria-describedby={`${ariaDescribedBy}${errorMessage ? ` ${errorId}` : ""}`}
            aria-invalid={!!errorMessage}
            required={required}
            aria-required={required}
            {...props}
          />
        </InputCell>
        <Erreur id={errorId}>{errorMessage}</Erreur>
      </>
    );
  }
);

export default InputText;
