import React from "react";
export interface StepBarProps {
    readonly sections: Array<string>;
    readonly activeSection: string;
    readonly className?: string;
}
declare function StepBar({ activeSection, sections, className }: StepBarProps): React.ReactElement;
export default StepBar;
