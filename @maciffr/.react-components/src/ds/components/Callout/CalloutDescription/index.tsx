import React, { InputHTMLAttributes, ReactNode } from "react";

export interface CalloutDescriptionProps extends InputHTMLAttributes<HTMLParagraphElement> {
  readonly children: string | ReactNode;
}

export default function CalloutDescription({ children, ...props }: CalloutDescriptionProps) {
  return (
    <p className="mds-callout__desc" {...props}>
      {children}
    </p>
  );
}
