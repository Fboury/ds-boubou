import React, { HTMLAttributes } from "react";

export default function LoaderLabel({ children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className="mds-loader__label mds-sr-only" aria-hidden="true" {...props}>
      {children}
    </span>
  );
}
