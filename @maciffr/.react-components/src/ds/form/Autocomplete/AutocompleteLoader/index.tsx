import React, { HTMLAttributes } from "react";

const AutocompleteLoader = ({ children, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className="mds-autocomplete-loader" {...props} />;
};

export default AutocompleteLoader;
