import React, { HTMLAttributes, ReactNode } from "react";

export interface SelectDropdownProps extends HTMLAttributes<HTMLDivElement> {
  readonly disabled?: boolean;
  readonly children: ReactNode;
}

function SelectDropdown({ children, disabled = false, ...props }: SelectDropdownProps) {
  const wrapperClassOnDisabled = disabled ? " mds-wrapper--disabled" : "";
  return (
    <div className={`mds-select-dropdown${wrapperClassOnDisabled}`} {...props}>
      {children}
    </div>
  );
}

export default SelectDropdown;
