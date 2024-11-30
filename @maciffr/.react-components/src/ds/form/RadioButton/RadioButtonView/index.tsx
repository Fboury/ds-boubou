import React, { HTMLAttributes, useMemo } from "react";

export interface RadioButtonViewProps extends HTMLAttributes<HTMLDivElement> {
  readonly size?: RadioButtonSize;
  readonly render?: RadioButtonRender;
  readonly disabled?: boolean;
  readonly checked?: boolean;
}

export enum RadioButtonSize {
  FullWidth = "mds-full-width",
  FitContent = "mds-fit-content"
}

export enum RadioButtonRender {
  Basic = "mds-radio--basic",
  Tile = "mds-radio--tile-basic mds-input-cell"
}

const getDisabledCheckedDivClass = (isChecked: boolean, isDisabled: boolean): string => {
  if (isDisabled) {
    if (isChecked) {
      return " mds-disabled-checked";
    } else {
      return " mds-disabled";
    }
  } else if (isChecked) {
    return " checked";
  }
  return "";
};

const RadioButtonView = ({
  children,
  render = RadioButtonRender.Basic,
  size = RadioButtonSize.FitContent,
  disabled = false,
  checked = false,
  ...props
}: RadioButtonViewProps) => {
  const disabledCheckedDivClass = useMemo(() => getDisabledCheckedDivClass(checked, disabled), [disabled, checked]);
  return (
    <div className={`mds-radio ${render} ${size}${disabledCheckedDivClass}`} {...props}>
      {children}
    </div>
  );
};

export default RadioButtonView;
