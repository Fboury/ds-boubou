import React, { HTMLAttributes, ReactNode } from "react";

export interface AutocompleteResultInfoContentProps extends HTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
}

const AutocompleteResultInfoContent = ({ children, ...props }: AutocompleteResultInfoContentProps) => {
  return (
    <div className="mds-autocomplete__result-infos-content" {...props}>
      {children}
    </div>
  );
};

export default AutocompleteResultInfoContent;
