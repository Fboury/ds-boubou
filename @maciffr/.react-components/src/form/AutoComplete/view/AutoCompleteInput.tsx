import React, { forwardRef, InputHTMLAttributes } from "react";

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
  | "onSelect"
  | "min"
  | "defaultValue"
  | "max";

interface AutoCompleteItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
  readonly id: string;
  readonly maxLength?: number;
  readonly value: string;
  readonly erreur?: string;
  readonly describeLabel?: string;
  readonly visible: boolean;
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readonly activeElement?: string;
  readonly onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const AutoCompleteInput = forwardRef<HTMLInputElement, AutoCompleteItemProps>(
  (
    {
      id,
      maxLength,
      value,
      erreur,
      describeLabel = "",
      visible,
      onChange,
      activeElement = "",
      onKeyDown,
      ...props
    }: AutoCompleteItemProps,
    ref
  ) => {
    return (
      <input
        ref={ref}
        onKeyDown={onKeyDown}
        id={id}
        role="combobox"
        type="text"
        maxLength={maxLength || Infinity}
        onChange={onChange}
        value={value}
        autoComplete="off"
        aria-invalid={!!erreur}
        aria-owns={`${id}-resultats`}
        aria-autocomplete="list"
        className="mcf-form-control mcf-col"
        aria-describedby={`${describeLabel}${erreur ? ` ${id}-erreur` : ""}`}
        aria-activedescendant={activeElement}
        aria-expanded={visible}
        {...props}
      />
    );
  }
);

export default AutoCompleteInput;
