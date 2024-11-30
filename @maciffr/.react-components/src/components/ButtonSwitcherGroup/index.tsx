import React, {ReactElement, ChangeEvent, Children, cloneElement, useRef, useState, InputHTMLAttributes} from "react";
import Erreur from "./view/Erreur";
import {ButtonSwitcherProps} from "./ButtonSwitcher";
import {ValidationMessages} from "../../commons/contrats/ValidationMessages";
import {VALIDATION_MESSAGES} from "../../form/Select/constantes";

/**
 * Composant permettant d'afficher une liste de bouton switcher
 */

export interface ButtonSwitcherGroupProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  readonly children: ReactElement<ButtonSwitcherProps>[];
  readonly ariaLabelledby: string;
  readonly id: string;
  readonly nbItemsParLigne?: number;
  readonly onChange?: (value: string) => void;
  readonly validationMessage?: ValidationMessages;
}

interface ButtonSwitcherWithRef extends ButtonSwitcherProps {
  readonly ref: (el: HTMLInputElement) => HTMLInputElement;
}

function ButtonSwitcherGroup({
                               children,
                               id,
                               ariaLabelledby,
                               nbItemsParLigne = 1,
                               onChange,
                               validationMessage,
                               ...props
                             }:ButtonSwitcherGroupProps) {

  const buttonSwitcherRef = useRef<HTMLInputElement[]>([]);
  const errorId = `error-${id}`;
  const [errorMessage, setErrorMessage] = useState("");

  function updateState(target: HTMLInputElement, message: string) {
    target.setCustomValidity(" ");
    setErrorMessage(message);
  }

  const resetValidity = () => {
    buttonSwitcherRef.current?.map((input) => input.setCustomValidity(""));
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
    onChange && onChange(event.currentTarget.value);
  }

  const handleInvalid = (event: ChangeEvent<HTMLInputElement>) => {
    validate(event.target);
  };

  return(
    <>
      <div
        role="group"
        aria-labelledby={ariaLabelledby}
        className={`mcf-form-switcher-toggle mcf-d--flex mcf-form-switcher--${nbItemsParLigne.toString()}`}
        id={id}
        onChange={handleChange}
        onInvalid={handleInvalid}
        {...props}
      >
        {Children.map(children, (child, index) => {
          return cloneElement(child as ReactElement<ButtonSwitcherWithRef>, {
            ref: (el: HTMLInputElement) => (buttonSwitcherRef.current[index] = el),
            error: errorMessage,
            errorId,
          });
        })}
      </div>
      {errorMessage && <Erreur message={errorMessage} />}
    </>
  );

}

export default ButtonSwitcherGroup;
