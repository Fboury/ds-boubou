import React from "react";
import StepBarItem, {StepStatus} from "./StepBarItem";


export interface StepBarProps {
    readonly sections: Array<string>;
    readonly activeSection: string;
    readonly className?: string;
}

function StepBar({ activeSection, sections, className = "" }: StepBarProps): React.ReactElement {
    const activeIndex: number = sections.indexOf(activeSection);

    function computeStepStatus(index: number): StepStatus {
        if (activeIndex > index) {
            return StepStatus.COMPLETED;
        }
        if (activeIndex === index) {
            return StepStatus.DOING;
        }
        return StepStatus.TODO;
    };

    return (
        <div className={`mcf-stepbar ${className}`}  >
            <ul>
                {sections.map((section, idx) =>
                    <StepBarItem key={section} stepTitle={section} stepStatus={computeStepStatus(idx)} />
                )}
            </ul>
            <p className="mcf-section mcf-mb--0" aria-hidden="true">{activeSection}</p>
        </div>
    );
}

export default StepBar;
