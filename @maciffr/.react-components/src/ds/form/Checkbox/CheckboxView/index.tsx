import React, { HTMLAttributes, ReactNode, useMemo } from "react";

export interface CheckboxViewProps extends HTMLAttributes<HTMLDivElement> {
  readonly className?: string;
  readonly children: ReactNode;
  readonly disabled?: boolean;
  readonly checked?: boolean;
  readonly render?: CheckboxRender;
  readonly size?: CheckboxSize;
}

export enum CheckboxSize {
  Default = "",
  FullWidth = "mds-full-width",
  FitContent = "mds-fit-content",
}

export enum CheckboxRender {
  Basic = "mds-checkbox--basic",
  Tile = "mds-checkbox--tile-basic mds-input-cell",
}

const CheckboxView = ({
  children,
  size = CheckboxSize.Default,
  render = CheckboxRender.Basic,
  disabled = false,
  checked = false,
  ...props
}: CheckboxViewProps) => {
  const getDisabledDivClass = (checked: boolean, disabled: boolean): string => {
    if (disabled) {
      if (checked) {
        return " mds-disabled-checked";
      } else {
        return " mds-disabled";
      }
    }
    return "";
  };

  const checkedClass = checked ? " checked" : "";
  const disabledDivClass = useMemo(() => getDisabledDivClass(checked, disabled), [disabled, checked]);
  return (
    <div className={`mds-checkbox ${render} ${size}${checkedClass}${disabledDivClass}`} {...props}>
      {children}
    </div>
  );
};

export default CheckboxView;
