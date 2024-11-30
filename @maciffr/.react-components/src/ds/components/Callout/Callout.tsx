import React, { InputHTMLAttributes, ReactNode } from "react";

export interface CalloutProps extends InputHTMLAttributes<HTMLDivElement> {
  readonly children: string | ReactNode;
}

export default function Callout({ children }: CalloutProps) {
  return <div className="mds-callout">{children}</div>;
}
