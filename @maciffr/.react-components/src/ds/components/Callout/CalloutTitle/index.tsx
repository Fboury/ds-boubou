import React, { ReactNode } from "react";

export interface CalloutTitleProps {
  readonly children: string | ReactNode;
}

export default function CalloutTitle({ children, ...props }: CalloutTitleProps) {
  return (
    <h2 className="mds-callout__title" {...props}>
      {children}
    </h2>
  );
}
