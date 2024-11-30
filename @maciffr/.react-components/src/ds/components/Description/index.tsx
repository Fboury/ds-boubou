import { HTMLAttributes, ReactNode } from "react";

export interface LabelDescriptionProps extends HTMLAttributes<HTMLSpanElement> {
  readonly children: ReactNode;
}

function Description({ children, ...props }: LabelDescriptionProps) {
  return (
    <span className="mds-label--description" {...props}>
      {children}
    </span>
  );
}

export default Description;
