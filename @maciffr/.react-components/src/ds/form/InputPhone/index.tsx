import {
  MAX_PHONE_LENGTH,
  MAX_PHONE_LENGTH_WITHOUT_SPACE,
  REGEX_GROUPBY_TWO_DIGIT,
  REGEX_INPUT,
  REGEX_INPUT_MATCH_NON_DIGIT,
  VALIDATION_MESSAGES,
} from "./constantes";
import React, { FormEvent, forwardRef, InputHTMLAttributes, ReactElement, useEffect, useMemo, useState } from "react";
import Erreur from "../../components/Erreur/Erreur";
import CallIcon from "../../components/Icon/CallIcon";
import { IconType } from "../../components/Icon";
import InputCell, { IconDirection } from "../InputCell";
import { ValidationMessages } from "../../commons/contrats/ValidationMessages";

type OmittedProps = "value" | "onChange" | "defaultValue";

export interface InputPhoneProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly id: string;
  readonly value?: string;
  readonly defaultValue?: string;
  readonly onChange?: (value: string) => void;
  readonly validationMessage?: ValidationMessages;
  readonly error?: string;
}

const InputTelephone = forwardRef<HTMLInputElement, InputPhoneProps>(
  (
    {
      id,
      value,
      defaultValue,
      className,
      validationMessage,
      required,
      "aria-describedby": ariaDescribedBy = "",
      onChange = () => {},
      error,
      ...props
    }: InputPhoneProps,
    ref
  ): ReactElement => {
    const errorId = useMemo(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = useState(error);
    const defaultValueFormat = defaultValue ? deleteNonDigitTruncateAndFormat(defaultValue) : defaultValue;
    const [valueFormat, setValueFormat] = useState(value ? deleteNonDigitTruncateAndFormat(value) : defaultValueFormat);

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
          <CallIcon type={IconType.Input} aria-hidden="true" />
          <input
            onInvalid={handleInvalid}
            onChange={onChangeNumber}
            ref={ref}
            id={id}
            pattern={REGEX_INPUT}
            maxLength={MAX_PHONE_LENGTH}
            inputMode="tel"
            className="mds-input mds-input-phone--basic"
            type="tel"
            value={valueFormat}
            defaultValue={defaultValueFormat}
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

export default InputTelephone;
