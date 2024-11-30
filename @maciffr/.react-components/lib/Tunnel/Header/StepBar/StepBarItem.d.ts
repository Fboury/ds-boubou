import React from "react";
export declare enum StepStatus {
    COMPLETED = 0,
    TODO = 1,
    DOING = 2
}
interface StepBarItemProps {
    readonly stepTitle: string;
    readonly stepStatus: StepStatus;
}
declare function StepBarItem({ stepTitle, stepStatus }: StepBarItemProps): React.ReactElement;
export default StepBarItem;
