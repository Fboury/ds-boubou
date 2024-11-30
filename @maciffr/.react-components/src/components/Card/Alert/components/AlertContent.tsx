import React from "react";

export interface AlertContentProps {
  readonly children: React.ReactNode;
}

/**
 *  Composant body content d'une card alert
 * */
const AlertContent = ({ children }: AlertContentProps) => <p className="mcf-mb--0">{children}</p>;

export default AlertContent;
