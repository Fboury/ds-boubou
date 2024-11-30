import React, { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonTheme {
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly id: string;
  readonly reversed?: boolean;
  readonly theme?: ButtonTheme;
  readonly icon?: string;
  readonly iconOnly?: boolean;
  readonly loader?: boolean;
  readonly children?: ReactNode;
}

export default function Button({
  id,
  disabled,
  reversed = false,
  theme = ButtonTheme.Primary,
  icon = "",
  iconOnly = false,
  loader = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const reverseClass = reversed ? " mds-btn--reverse" : "";
  const loaderClass = loader ? " mds-btn--loader" : "";
  const loaderReverseEnd = reversed ? "-reverse" : "";
  const iconOnlyClass = iconOnly ? ` mds-btn--icon-only` : "";

  return (
    <button
      id={id}
      className={`mds-btn mds-btn--${theme} ${icon}${iconOnlyClass}${reverseClass}${loaderClass}${loaderReverseEnd} ${className}`}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
