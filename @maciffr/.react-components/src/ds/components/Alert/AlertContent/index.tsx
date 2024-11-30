import React, { InputHTMLAttributes, ReactNode } from "react";
export interface AlertContentProps extends InputHTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
}

function AlertContent({ children, ...props }: AlertContentProps) {
  return (
    <div className="mds-alert__content" {...props}>
      {children}
    </div>
  );
}

export default AlertContent;
