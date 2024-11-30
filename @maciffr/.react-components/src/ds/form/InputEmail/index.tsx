import {
  REGEX_INPUT,
  VALIDATION_MESSAGES,
} from "./constantes";
import React, { FormEvent, forwardRef, InputHTMLAttributes, ReactElement, useEffect, useMemo, useState } from "react";
import Erreur from "../../components/Erreur/Erreur";
import { IconType } from "../../components/Icon";
import InputCell, { IconDirection } from "../InputCell";
import { ValidationMessages } from "../../commons/contrats/ValidationMessages";
import MailIcon from "../../components/Icon/MailIcon";

type OmittedProps = "value" | "onChange" | "defaultValue";

export interface InputEmailProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly id: string;
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onChange?: (value: string) => void;
  readonly validationMessage?: ValidationMessages;
  readonly error?: string;
}

const InputEmail = forwardRef<HTMLInputElement, InputEmailProps>(
  (
    {
      id,
      value,
      defaultValue,
      className = "",
      validationMessage,
      required,
      "aria-describedby": ariaDescribedBy = "",
      onChange = () => {},
      error,
      ...props
    }: InputEmailProps,
    ref
  ): ReactElement => {
    const errorId = useMemo(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = useState(error);
    const [valueFormat, setValueFormat] = useState(value ? value : defaultValue);

    useEffect(() => {
      setErrorMessage(error ?? errorMessage);
    }, [error]);

    function updateState(target: HTMLInputElement, message: string) {
      target.setCustomValidity(" ");
      setErrorMessage(message);
    }

    function handleInvalid(event: FormEvent<HTMLInputElement>) {
      validate(event.currentTarget);
    }

    function onChangeEmail(event: FormEvent<HTMLInputElement>) {
      event.currentTarget.setCustomValidity("");
      setErrorMessage("");
      setValueFormat(event.currentTarget.value);
      onChange(event.currentTarget.value);
    }

    function validate(target: HTMLInputElement) {
      target.setCustomValidity("");

      if (target.validity.valid) {
        setErrorMessage("");
        return true;
      }

      if (target.validity.patternMismatch) {
        updateState(target, validationMessage?.pattern ?? VALIDATION_MESSAGES.pattern);
        return false;
      }
      if (target.validity.valueMissing) {
        updateState(target, validationMessage?.required ?? VALIDATION_MESSAGES.required);
        return false;
      }
      return false;
    }

    return (
      <>
        <InputCell iconDirection={IconDirection.Left}>
          <MailIcon type={IconType.Input} aria-hidden="true" />
          <input
            onInvalid={handleInvalid}
            onChange={onChangeEmail}
            ref={ref}
            id={id}
            pattern={REGEX_INPUT}
            inputMode="email"
            className={`mds-input mds-input-email--basic ${className}`}
            type="email"
            value={valueFormat}
            defaultValue={defaultValue}
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

export default InputEmail;
