import React from "react";
import Alert, { AlertProps, AlertType, AlertVariant } from "../index";
import AlertHeader from "../AlertHeader";
import AlertContent from "../AlertContent";
import InfoIcon from "../../Icon/InfoIcon";

type OmittedProps = "type";

export interface AlertInfoProps extends Omit<AlertProps, OmittedProps> {
  readonly title: string;
}

function AlertInfo({ children, title, variant = AlertVariant.Basic, ...props }: AlertInfoProps) {
  const titleClass = variant == AlertVariant.Basic ? "mds-sr-only" : undefined;
  return (
    <Alert type={AlertType.Info} variant={variant} {...props}>
      <AlertHeader>
        <InfoIcon aria-hidden="true" />
        <h2 className={titleClass}>{title}</h2>
      </AlertHeader>
      <AlertContent>{children}</AlertContent>
    </Alert>
  );
}

export default AlertInfo;
