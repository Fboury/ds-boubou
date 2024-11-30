import React, { ChangeEvent, Children, cloneElement, ReactElement, ReactNode, useRef, useState } from "react";
import { CheckboxInputProps } from "../CheckboxInput";
import Erreur from "../../../components/Erreur/Erreur";
import { VALIDATION_MESSAGES } from "../../RadioButton/constantes";
import { ValidationMessages } from "../../../commons/contrats/ValidationMessage";

export interface CheckboxGroupProps {
  readonly id: string;
  readonly children: ReactNode;
  readonly onChange?: (checkedValues: Array<string>) => void;
  readonly defaultValue?: Array<string>;
  readonly required?: boolean;
  readonly validationMessage?: ValidationMessages;
}

interface CheckboxInputWithRef extends CheckboxInputProps {
  readonly ref: (el: HTMLInputElement) => HTMLInputElement;
}

const CheckboxGroup = ({
  children,
  required,
  id,
  validationMessage,
  onChange = () => {},
  defaultValue = [],
}: CheckboxGroupProps) => {
  const checkboxRef = useRef<HTMLInputElement[]>([]);
  const [checkedValues, setCheckedValues] = useState<Array<string>>(defaultValue);
  const [errorMessage, setErrorMessage] = useState("");

  const removeFromList = (id: string) => {
    return checkedValues.filter((v) => v !== id);
  };

  const addToList = (id: string) => {
    return [...checkedValues, id];
  };

  const resetValidity = () => {
    checkboxRef.current?.map((input) => input.setCustomValidity(""));
  };

  const handleChange = (id: string, checked: boolean, onChangeChild?: (value: boolean) => void) => {
    resetValidity();
    setErrorMessage("");
    const nextValuesState = checked ? addToList(id) : removeFromList(id);
    setCheckedValues(nextValuesState);

    onChange(nextValuesState);
    onChangeChild && onChangeChild(checked);
  };

  function validate(input: HTMLInputElement) {
    input.setCustomValidity("");
    const { validity } = input;

    if (validity.valid) {
      setErrorMessage("");
      return true;
    }

    if (validity.valueMissing) {
      input.setCustomValidity(" ");
      setErrorMessage(validationMessage?.required ?? VALIDATION_MESSAGES.required);
      return false;
    }

    return true;
  }

  const handleInvalid = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    validate(event.target);
  };

  const getAriaDescribedBy = (element: ReactElement<CheckboxInputProps>) => {
    const ariaError = errorMessage ? `error-${id}` : "";
    if (element.props["aria-describedby"]) {
      return `${element.props["aria-describedby"]}${ariaError ? ` ${ariaError}` : ""}`;
    } else {
      return ariaError || undefined;
    }
  };

  return (
    <>
      <div className="mds-group-checkboxes" onInvalid={handleInvalid}>
        {Children.map(children, (child, index) => {
          const element = child as ReactElement<CheckboxInputWithRef>;
          return cloneElement(element, {
            ref: (el: HTMLInputElement) => (checkboxRef.current[index] = el),
            checked: checkedValues.includes(element.props.id || ""),
            onChange: (value: boolean) => handleChange(element.props.id || "", value, element.props.onChange),
            required: required || element.props.required,
            "aria-describedby": getAriaDescribedBy(element),
          });
        })}
      </div>
      <Erreur id={`error-${id}`}>{errorMessage}</Erreur>
    </>
  );
};

export default CheckboxGroup;
