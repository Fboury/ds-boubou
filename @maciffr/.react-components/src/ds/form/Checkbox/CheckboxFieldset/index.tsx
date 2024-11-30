import React, { ReactNode } from "react";

interface CheckboxFieldsetProps {
  children: ReactNode;
}
const CheckboxFieldset = ({ children }: CheckboxFieldsetProps) => {
  return <fieldset className="mds-fieldset">{children}</fieldset>;
};

export default CheckboxFieldset;
