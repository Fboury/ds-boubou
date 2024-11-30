import React, { InputHTMLAttributes, ReactNode } from "react";

export interface AlertProps extends InputHTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
  readonly variant?: AlertVariant;
  readonly type: AlertType;
}

export enum AlertVariant {
  Basic = "basic",
  Rich = "rich",
  Big = "accent-big",
}

export enum AlertType {
  Info = "info",
  Warning = "warning",
  Success = "success",
  Danger = "danger",
}

function Alert({ children, type, variant = AlertVariant.Basic, ...props }: AlertProps) {
  return (
    <div className={`mds-alert mds-alert--${variant} mds-alert-type--${type}`} {...props}>
      {children}
    </div>
  );
}

export default Alert;
