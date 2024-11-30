import React from "react";
import Alert, { AlertProps, AlertType, AlertVariant } from "../index";
import AlertHeader from "../AlertHeader";
import AlertContent from "../AlertContent";
import ReportIcon from "../../Icon/ReportIcon";

type OmittedProps = "type";

export interface AlertWarningProps extends Omit<AlertProps, OmittedProps> {
  readonly title: string;
}

function AlertWarning({ children, title, variant = AlertVariant.Basic, ...props }: AlertWarningProps) {
  const titleClass = variant == AlertVariant.Basic ? "mds-sr-only" : undefined;
  return (
    <Alert type={AlertType.Warning} variant={variant} {...props}>
      <AlertHeader>
        <ReportIcon aria-hidden="true" />
        <h2 className={titleClass}>{title}</h2>
      </AlertHeader>
      <AlertContent>{children}</AlertContent>
    </Alert>
  );
}

export default AlertWarning;
