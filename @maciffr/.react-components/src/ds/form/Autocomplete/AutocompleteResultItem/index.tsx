import React, { forwardRef, HTMLAttributes } from "react";

export interface AutocompleteItem {
  readonly value: string;
  readonly code: string;
}

export interface AutocompleteResultItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "onSelect"> {
  readonly active?: boolean;
  readonly value: string;
  readonly code: string;
  readonly onSelect?: (value: AutocompleteItem) => void;
}

const AutocompleteResultItem = forwardRef<HTMLLIElement, AutocompleteResultItemProps>(
  ({ children, value, code, active = false, onSelect = () => {}, ...props }: AutocompleteResultItemProps, ref) => {
    const handleSelect = () => {
      onSelect({
        code,
        value,
      });
    };

    return (
      <li
        ref={ref}
        className="mds-autocomplete__result-item"
        role="option"
        data-code={code}
        data-value={value}
        tabIndex={-1}
        aria-selected={active}
        onClick={handleSelect}
        {...props}
      >
        {children}
      </li>
    );
  }
);

export default AutocompleteResultItem;
