import React from "react";
interface StepIndicatorGoupProps {
    readonly sections: Array<string>;
    readonly activeSection: string;
}
declare function StepIndicatorGroup({ sections, activeSection }: StepIndicatorGoupProps): React.ReactElement;
export default StepIndicatorGroup;
