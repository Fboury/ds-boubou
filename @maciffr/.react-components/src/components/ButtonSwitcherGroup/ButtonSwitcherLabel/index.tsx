import React, {InputHTMLAttributes, ReactNode} from "react";

export interface ButtonSwitcherLabelProps extends InputHTMLAttributes<HTMLLabelElement>{
  readonly children: ReactNode;
  readonly htmlFor: string;
  readonly selected?: boolean;
}

function ButtonSwitcherLabel({selected, children, htmlFor, ...props}: ButtonSwitcherLabelProps) {
  return (
    <label className={`mcf-btn switcher-focus mcf-btn--switcher--outline mcf-position--relative mcf-w--100${selected ? " active" : ""}`} data-toggle="buttons"
    htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
}

export default ButtonSwitcherLabel;
