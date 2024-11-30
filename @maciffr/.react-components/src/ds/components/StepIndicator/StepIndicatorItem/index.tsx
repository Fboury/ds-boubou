import React from "react";
import StepIndicatorItemLabel from "../StepIndicatorItemLabel";

interface StepindicatorItemProps {
  readonly stepTitle: string;
  readonly stepStatus: StepStatus;
}
export enum StepStatus {
  COMPLETED,
  TODO,
  DOING
}
function StepIndicatorItem({ stepTitle, stepStatus }: StepindicatorItemProps): React.ReactElement {
  const computeStepItemClass = (): string => {
    switch (stepStatus) {
      case StepStatus.COMPLETED:
        return "--complete";
      case StepStatus.DOING:
        return "--current";
      case StepStatus.TODO:
      default:
        return "";
    }
  };

  return (
    <li
      key={`${stepTitle}_${stepStatus}`}
      className={"mds-step-indicator__item mds-step-indicator__item" + computeStepItemClass()}
      aria-current={stepStatus === StepStatus.DOING}>
      <StepIndicatorItemLabel>
        {stepTitle}
        {stepStatus !== StepStatus.DOING && (
          <span className="mds-sr-only">
            &nbsp;
            {stepStatus === StepStatus.COMPLETED ? "Étape complétée" : "Étape non complétée"}
          </span>
        )}
      </StepIndicatorItemLabel>
    </li>
  );
}

export default StepIndicatorItem;
