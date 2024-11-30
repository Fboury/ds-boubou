import React from "react";
import StepIndicatorItem, { StepStatus } from "../StepIndicatorItem";

interface StepIndicatorGoupProps {
  readonly sections: Array<string>;
  readonly activeSection: string;
}

function StepIndicatorGroup({ sections, activeSection }: StepIndicatorGoupProps): React.ReactElement {
  const computeStepStatus = (index: number): StepStatus => {
    const activeIndex: number = sections.indexOf(activeSection);
    if (activeIndex > index) {
      return StepStatus.COMPLETED;
    }
    if (activeIndex === index) {
      return StepStatus.DOING;
    }
    return StepStatus.TODO;
  };
  return (
    <div className="mds-step-indicator mds-step-indicator--basic">
      <div className="mds-step-indicator__item-label--curent">
        <p>{activeSection}</p>
      </div>
      <ol className="mds-step-indicator__group">
        {sections.map((section, idx) => (
          <StepIndicatorItem key={section} stepTitle={section} stepStatus={computeStepStatus(idx)} />
        ))}
      </ol>
    </div>
  );
}

export default StepIndicatorGroup;
