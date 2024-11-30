import React from "react";
import StepIndicatorGroup from "./StepIndicatorGroup";
export interface StepIndicatorProps {
  readonly sections: Array<string>;
  readonly activeSection: string;
  readonly accessTitle: string;
}

function StepIndicator({ activeSection, sections, accessTitle }: StepIndicatorProps) {
  return (
    <section role="region" aria-labelledby="accessiblity-title">
      <h2 id="accessiblity-title" className="mds-sr-only">
        {accessTitle}
      </h2>
      <StepIndicatorGroup sections={sections} activeSection={activeSection} />
    </section>
  );
}

export default StepIndicator;
