import React, { HTMLAttributes, ReactNode } from "react";
function AutocompletePolite({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div aria-live="polite" aria-atomic="true" className="mds-sr-only" {...props}>
      {children}
    </div>
  );
}

export default AutocompletePolite;
