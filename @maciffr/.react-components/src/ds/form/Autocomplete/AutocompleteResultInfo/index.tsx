import React, { HTMLAttributes, ReactNode } from "react";

export interface AutocompleteResultInfoProps extends HTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
}

const AutocompleteResultInfo = ({ children, ...props }: AutocompleteResultInfoProps) => {
  return (
    <div className="mds-autocomplete__result-infos" {...props}>
      {children}
    </div>
  );
};

export default AutocompleteResultInfo;
