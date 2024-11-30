import React from "react";

export interface AlertTitleProps {
  readonly children: React.ReactNode;
}

/**
 *  Composant titre d'une card alert
*/
const AlertTitle = ({ children }: AlertTitleProps) => (
  <h2 className="mcf-alert__heading mcf-h6 mcf-mb-md--2 mcf-mb--3 mcf-text--small-1">{children}</h2>
);

export default AlertTitle;
