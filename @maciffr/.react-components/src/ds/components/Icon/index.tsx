import React, { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  readonly name: string;
  readonly type?: IconType;
  readonly direction?: IconDirection;
}

export enum IconType {
  Basic = "mds-icon",
  Input = "mds-input__icon",
}

export enum IconDirection {
  Right = "--right",
  Left = "--left",
  None = "",
}

function Icon({ name, type = IconType.Basic, direction = IconDirection.None, ...props }: IconProps) {
  return <span className={`${type} mds-icon__${name}${direction}`} {...props} />;
}

export default Icon;
