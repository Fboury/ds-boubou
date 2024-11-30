import React, { HTMLAttributes, ReactNode } from "react";

export interface AutocompleteLoaderProps extends HTMLAttributes<HTMLDivElement> {
  readonly children?: ReactNode;
}
const AutocompleteResultLoader = ({ children, ...props }: AutocompleteLoaderProps) => {
  return (
    <div className="mds-autocomplete__result-loader" {...props}>
      {children}
    </div>
  );
};

export default AutocompleteResultLoader;
