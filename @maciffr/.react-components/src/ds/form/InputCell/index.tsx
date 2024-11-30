import { HTMLAttributes, ReactNode } from "react";

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
  readonly iconDirection?: IconDirection;
}

export enum IconDirection {
  Right = "mds-wrapper--icon-right",
  Left = "mds-wrapper--icon-left",
  Without = "",
}

function InputCell({ children, iconDirection = IconDirection.Without, ...props }: LabelProps) {
  return (
    <div className={`mds-input-cell ${iconDirection}`} {...props}>
      {children}
    </div>
  );
}

export default InputCell;