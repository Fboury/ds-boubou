import React, { InputHTMLAttributes, ReactNode } from "react";

export interface CalloutSubTitleProps extends InputHTMLAttributes<HTMLSpanElement> {
  readonly children: string | ReactNode;
}

export default function CalloutSubTitle({ children, ...props }: CalloutSubTitleProps) {
  return (
    <span className="mds-callout__subtitle" {...props}>
      {children}
    </span>
  );
}
