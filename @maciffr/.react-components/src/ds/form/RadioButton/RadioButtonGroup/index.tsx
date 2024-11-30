import React, {
  Children,
  cloneElement,
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  useState,
  useRef,
  useMemo
} from "react";

import { RadioButtonInputProps } from "../RadioButtonInput";
import { VALIDATION_MESSAGES } from "../constantes";
import Erreur from "../../../components/Erreur/Erreur";
import { ValidationMessages } from "../../../commons/contrats/ValidationMessage";

export interface RadioButtonGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  readonly children: ReactElement<RadioButtonInputProps>[];
  readonly onChange: (value: string) => void;
  readonly validationMessage?: ValidationMessages;
  readonly defaultValue?: string;
}

interface RadioInputWithRef extends RadioButtonInputProps {
  readonly ref: (el: HTMLInputElement) => HTMLInputElement;
}

function RadioButtonGroup({
  id,
  children,
  onChange,
  validationMessage,
  required,
  defaultValue = ""
}: RadioButtonGroupProps) {
  const radioRef = useRef<HTMLInputElement[]>([]);
  const errorId = useMemo(() => `error-${id}`, [id]);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeElement, setActiveElement] = useState(defaultValue);

  function updateState(target: HTMLInputElement, message: string) {
    target.setCustomValidity(" ");
    setErrorMessage(message);
  }

  const resetValidity = () => {
    radioRef.current?.map(input => input.setCustomValidity(""));
  };

  function validate(input: HTMLInputElement) {
    input.setCustomValidity("");
    const { validity } = input;

    if (validity.valid) {
      setErrorMessage("");
      return true;
    }

    if (validity.valueMissing) {
      updateState(input, validationMessage?.required ?? VALIDATION_MESSAGES.required);
      return false;
    }

    return true;
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    resetValidity();
    setErrorMessage("");
    onChange(event.target.value);
    setActiveElement(event.target.value);
  }

  const handleInvalid = (event: ChangeEvent<HTMLInputElement>) => {
    validate(event.target);
  };

  const getAriaDescribedBy = (element: ReactElement<RadioButtonInputProps>, error: string) => {
    const ariaError = error ? `error-${id}` : "";
    if (element.props["aria-describedby"]) {
      return `${element.props["aria-describedby"]}${ariaError ? ` ${ariaError}` : ""}`;
    } else {
      return ariaError || undefined;
    }
  };

  return (
    <>
      <div onChange={handleChange} onInvalid={handleInvalid} className="mds-group-radio" data-module="group-radios">
        {Children.map(children, (child, index) => {
          return cloneElement(child as ReactElement<RadioInputWithRef>, {
            ref: (el: HTMLInputElement) => (radioRef.current[index] = el),
            checked: activeElement === child.props.value,
            required: required || child.props.required,
            "aria-invalid": !!errorMessage,
            "aria-describedby": getAriaDescribedBy(child, errorMessage)
          });
        })}
      </div>
      <Erreur id={errorId}>{errorMessage}</Erreur>
    </>
  );
}

export default RadioButtonGroup;
