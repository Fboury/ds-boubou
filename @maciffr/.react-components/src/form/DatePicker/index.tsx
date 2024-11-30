import React, { FormEvent, InputHTMLAttributes, useEffect, useState } from "react";

/* ------------------------------- Components ------------------------------- */
import DateInput from "./DateInput/DateInput";
import Calendar from "./Calendar";
import ExtraDate from "../../commons/ExtraDate";

import "./index.css";
import { VALIDATION_MESSAGES } from "./constantes";

/* ------------------------------- Interfaces ------------------------------- */

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
  | "size"
  | "src"
  | "step"
  | "type"
  | "value"
  | "onChange"
  | "min"
  | "max";

interface ValidationMessage {
  readonly invalid?: string;
}

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly id: string;
  readonly min?: Date;
  readonly max?: Date;
  readonly width?: number | string;
  readonly style?: object;
  readonly dayInputLabelledBy?: string;
  readonly monthInputLabelledBy?: string;
  readonly yearInputLabelledBy?: string;
  readonly onChange?: (value: Date | null) => void;
  readonly value?: Date;
  readonly "data-testid"?: string;
  readonly validationMessage?: ValidationMessage;
  readonly error?: string;
}

interface DatePickerState {
  inputValue: Date | null;
  pickerShown: boolean;
  isValid: boolean;
  errorMessage: string;
}

const DatePicker = ({ id, value, min, max, onChange, width, validationMessage, error, ...props }: DatePickerProps) => {
  const isValid = !value ? !props.required : checkValidity(value);
  const validationPatternMessage = validationMessage?.invalid || VALIDATION_MESSAGES.invalid;
  const errorMessage = error || validationPatternMessage;
  const [state, setState] = useState<DatePickerState>({
    inputValue: value ?? null,
    pickerShown: false,
    isValid: !error && isValid,
    errorMessage: errorMessage,
  });

  useEffect(() => {
    min?.setHours(0);
    max?.setHours(23, 59);
  }, []);

  useEffect(() => {
    setState({
      ...state,
      isValid: !error && isValid,
      errorMessage: error || errorMessage,
    });
  }, [error]);

  function checkValidity(date: Date | null): boolean {
    const YEAR_RANGE = 120;
    if (!date) return false;
    // If Invalid date
    if (isNaN(date.getTime())) {
      return false;
    }

    const minYear = new Date().getFullYear() - YEAR_RANGE;
    const maxYear = new Date().getFullYear() + YEAR_RANGE;
    return new ExtraDate(date).isBetween(min || new Date(minYear, 0, 1), max || new Date(maxYear, 0, 1));
  }

  const handleChange = (newValue: Date | null) => {
    const isValid = checkValidity(newValue);
    let errorMessage = "";
    if (!isValid) {
      newValue = null;
      errorMessage = validationMessage?.invalid || VALIDATION_MESSAGES.invalid;
    }

    setState({ ...state, inputValue: newValue, pickerShown: false, isValid, errorMessage });
    onChange && onChange(newValue);
  };

  const togglePicker = (e: React.MouseEvent) => {
    e.preventDefault();
    if (props.disabled) {
      return;
    }

    setState({
      ...state,
      pickerShown: !state.pickerShown,
    });
  };

  function updateState(target: HTMLInputElement, error: string, isValid: boolean) {
    target.setCustomValidity(error);
    setState({
      ...state,
      errorMessage: error,
      isValid,
    });
  }

  function handleInvalid(event: FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const isValid = validate(event.currentTarget);
    updateState(event.currentTarget, event.currentTarget.validationMessage, isValid);
  }

  function validate(target: HTMLInputElement): boolean {
    target.setCustomValidity("");
    if (target.validity.valueMissing) {
      target.setCustomValidity(validationMessage?.invalid || VALIDATION_MESSAGES.invalid || "");
      return false;
    }
    return true;
  }

  return (
    <div>
      <div
        className={`date-picker ${
          props.disabled ? "mcf-bg--gris-sable" : "mcf-bg--white"
        } mcf-form-control mcf-rounded mcf-d--flex mcf-position--relative ${props.className}`}
        style={{ width }}
      >
        <DateInput
          id={id}
          min={min}
          max={max}
          value={state.inputValue}
          onChange={handleChange}
          aria-invalid={!state.isValid}
          onInvalid={handleInvalid}
          style={{ width, ...props.style }}
          {...props}
        />

        <a
          // tabIndex={-1}
          aria-label="Ouvrir le calendrier"
          href="src/form/DatePicker/index#"
          className="picker-btn mcf-btn mcf-btn--link mcf-btn--icon mcf-position--absolute"
          style={{
            right: 2,
            top: 2,
            zIndex: 3,
            color: "inherit",
            textDecoration: "none",
          }}
          onClick={togglePicker}
        >
          <span className="mcf-icon--2 icon-macif-mobile-calendrier" />
        </a>
      </div>

      {!state.isValid && (
        <span
          id="datepicker-error"
          role="alert"
          aria-label="message d'erreur"
          className="mcf-d--flex mcf-text--danger mcf-my--1"
        >
          <span className="icon icon-erreur" aria-hidden={true}></span>
          <span dangerouslySetInnerHTML={{ __html: state.errorMessage.replaceAll(" ", "&nbsp;") }} />
        </span>
      )}

      {state.pickerShown && <Calendar min={min} max={max} value={state.inputValue} onChange={handleChange} />}
    </div>
  );
};

export default DatePicker;
