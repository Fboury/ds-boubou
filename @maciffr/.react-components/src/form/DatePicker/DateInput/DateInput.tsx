import React, { FormEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";

import ExtraDate from "../../../commons/ExtraDate";
import "./DateInput.css";

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
  | "min"
  | "max"
  | "value"
  | "onChange"
  | "src"
  | "step"
  | "type"
  | "width";

export interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly id: string;
  readonly min?: Date;
  readonly max?: Date;
  readonly value?: Date | null;
  readonly dayInputLabelledBy?: string;
  readonly monthInputLabelledBy?: string;
  readonly yearInputLabelledBy?: string;
  readonly onChange: (value: Date | null) => void;
  readonly onInvalid: (event: FormEvent<HTMLInputElement>) => void;
  readonly "data-testid"?: string;
}

interface DateInputState {
  day: number;
  month: number;
  year: number;
  isInvalid: boolean;
  minDay: number;
  maxDay: number;
  minMonth: number;
  maxMonth: number;
  minYear: number;
  maxYear: number;
}

const DateInput = ({ id, min, max, value, onChange, onInvalid, ...props }: DateInputProps) => {
  const YEAR_RANGE = 120;

  function getMaxDay(): number {
    // Pour gérer le NaN reçu par l'input à l'initialisation du formulaire
    const dateToExtract = value ?? new Date();
    return new ExtraDate(dateToExtract).getLastDate();
  }

  function getMinYear(): number {
    return min ? min.getFullYear() : new Date().getFullYear() - YEAR_RANGE;
  }

  function getMaxYear(): number {
    return max ? max.getFullYear() : new Date().getFullYear() + YEAR_RANGE;
  }

  const [state, setState] = useState<DateInputState>({
    day: 0,
    month: 0,
    year: 0,
    isInvalid: false,
    minDay: 1,
    maxDay: getMaxDay(),
    minMonth: 1,
    maxMonth: 12,
    minYear: getMinYear(),
    maxYear: getMaxYear(),
  });

  const dateInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isFocused = document.activeElement && document.activeElement === dateInput.current;

    if (!isFocused) {
      updateInputWithValue(value);
    }

    prefillInput(state);
    const updatedState: DateInputState = updateMinMaxState(state);
    setState(updatedState);
  }, [value]);

  function getFormattedDate(day: number, month: number, year: number) {
    return `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year.toString()}`;
  }

  const updateInputWithValue = (givenValue?: Date | null) => {
    if (givenValue && dateInput.current) {
      dateInput.current.value = getFormattedDate(
        givenValue.getDate(),
        givenValue.getMonth() + 1,
        givenValue.getFullYear()
      );
    }
  };

  function prefillInput(currentState: DateInputState) {
    if (currentState.day && currentState.month && currentState.year) {
      if (dateInput.current) {
        dateInput.current.value = getFormattedDate(currentState.day, currentState.month, currentState.year);
      }
    }
  }

  function onSuppressionKey(value: string) {
    if (/\/\d$/.test(value)) {
      dateInput.current!.value = value.slice(0, -1);
    }
  }

  function onAppendingKey(oldValue: string) {
    let value = oldValue.replaceAll("/", "");

    if (value.length >= 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    if (value.length >= 5) {
      value = `${value.slice(0, 5)}/${value.slice(5)}`;
    }

    dateInput.current!.value = value;
  }

  function getMaxDate(currentState: DateInputState) {
    const isInMaxMonth = max && currentState.year === max.getFullYear() && currentState.month === max.getMonth() + 1;

    if (isInMaxMonth) {
      return new ExtraDate(max).getLastDate();
    }

    if (!!currentState.month) {
      const lastDate = new ExtraDate(currentState.year, currentState.month);
      // Éviter le décalage si plus de jours dans ce mois que le précédent (ex: du 30 mars au 30 février)
      lastDate.setDate(10);
      lastDate.setMonth(currentState.month - 1);

      return lastDate.getLastDate();
    }

    return new ExtraDate().getLastDate();
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Handlers                                  */

  /* -------------------------------------------------------------------------- */

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const dateElements = e.currentTarget.value.matchAll(/\d+/g);

    const [day, month, year] = Array.from(dateElements).map(([match]) => +match);

    const newState: DateInputState = {
      ...state,
      day: day || 0,
      month: month || 0,
      year: year || 0,
    };

    emitChange(updateMinMaxState(newState));
  }

  function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!dateInput.current) {
      return;
    }

    const value = e.currentTarget.value;

    switch (e.key) {
      case "Backspace":
      case "Delete":
        onSuppressionKey(value);
        break;
      default:
        onAppendingKey(value);
        break;
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                                Handlers end                                */

  /* -------------------------------------------------------------------------- */

  function inputsValid(currentState: DateInputState): boolean {
    const { day, month, year } = currentState;

    const allValueGiven = day && month && year;
    // Do no report Input as Invalid for empty fields (First load)
    if (!allValueGiven) {
      return false;
    }

    const dayValid = day >= currentState.minDay && day <= currentState.maxDay;
    const monthValid = month >= currentState.minMonth && month <= currentState.maxMonth;
    const yearValid = year >= currentState.minYear && year <= currentState.maxYear;

    return dayValid && monthValid && yearValid;
  }

  function updateMinMaxState(currentState: DateInputState): DateInputState {
    const updatedState = updateMinMaxMonthState(currentState);
    return updateMinMaxDayState(updatedState);
  }

  function updateMinMaxMonthState(currentState: DateInputState): DateInputState {
    const isInMinYear = min && currentState.year === min.getFullYear();
    const isInMaxYear = max && currentState.year === max.getFullYear();

    const minMonth = isInMinYear ? min.getMonth() + 1 : 1;
    const maxMonth = isInMaxYear ? max.getMonth() + 1 : 12;

    return { ...currentState, minMonth, maxMonth };
  }

  function updateMinMaxDayState(currentState: DateInputState): DateInputState {
    const isInMinMonth = min && currentState.year === min.getFullYear() && currentState.month === min.getMonth() + 1;

    const minDay = isInMinMonth ? min.getDate() : 1;
    const maxDay = getMaxDate(currentState);

    return { ...currentState, minDay, maxDay };
  }

  function emitChange(currentState: DateInputState) {
    const newValue = new Date(currentState.year, currentState.month - 1, currentState.day);

    if (inputsValid(currentState)) {
      onChange(newValue);
    } else {
      onChange(null);
    }
  }

  const inputClass = `mcf-border--0 mcf-text--left date-input-number`;

  return (
    <div id={id} className="was-validated">
      <div className="mcf-d--flex mcf-position--relative" style={{ ...props.style }}>
        <input
          ref={dateInput}
          id="date-input"
          aria-labelledby={props.dayInputLabelledBy}
          className={inputClass}
          disabled={props.disabled}
          name="date"
          onInvalid={onInvalid}
          required={props.required}
          placeholder="JJ/MM/AAAA"
          onKeyDown={handleOnKeyDown}
          onChange={handleInputChange}
          min={state.minDay}
          max={state.maxDay}
          maxLength={10}
          inputMode="numeric"
          autoComplete="off"
          data-testid={props["data-testid"]}
        />
      </div>
    </div>
  );
};

export default DateInput;
