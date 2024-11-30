import React, { HTMLAttributes } from "react";

export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  readonly reversed?: boolean;
}

export default function Loader({ reversed = false }: LoaderProps) {
  const loaderClass = reversed ? "mds-loader--reverse" : "mds-loader";

  return <span className={loaderClass} aria-hidden="true"></span>;
}
