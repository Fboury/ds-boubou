import React, { HTMLAttributes, ReactNode } from "react";

export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
}

function SelectItem({ children, ...props }: SelectItemProps) {
  return (
    <div className="mds-select__item mds-input__cell" {...props}>
      {children}
    </div>
  );
}

export default SelectItem;
