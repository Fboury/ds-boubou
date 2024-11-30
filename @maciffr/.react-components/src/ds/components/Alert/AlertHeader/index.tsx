import React, { InputHTMLAttributes, ReactNode } from "react";
export interface AlertHeaderProps extends InputHTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
}

function AlertHeader({ children, ...props }: AlertHeaderProps) {
  return (
    <div className="mds-alert__header" {...props}>
      {children}
    </div>
  );
}

export default AlertHeader;
