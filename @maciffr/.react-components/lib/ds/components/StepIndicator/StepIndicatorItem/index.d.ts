import React from "react";
interface StepindicatorItemProps {
    readonly stepTitle: string;
    readonly stepStatus: StepStatus;
}
export declare enum StepStatus {
    COMPLETED = 0,
    TODO = 1,
    DOING = 2
}
declare function StepIndicatorItem({ stepTitle, stepStatus }: StepindicatorItemProps): React.ReactElement;
export default StepIndicatorItem;
