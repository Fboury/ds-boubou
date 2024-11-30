import React, { ReactNode } from "react";

export interface StepIndicatorItemLabelProps {
  readonly children: ReactNode;
}
function StepIndicatorItemLabel({ children }: StepIndicatorItemLabelProps) {
  return <span className="mds-step-indicator__item-label">{children}</span>;
}

export default StepIndicatorItemLabel;
