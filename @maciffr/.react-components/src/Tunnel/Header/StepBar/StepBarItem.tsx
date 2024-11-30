import React from "react";

export enum StepStatus {
    COMPLETED,
    TODO,
    DOING
}

interface StepBarItemProps {
    readonly stepTitle: string;
    readonly stepStatus: StepStatus;
}

function StepBarItem({ stepTitle, stepStatus }: StepBarItemProps): React.ReactElement {

    function computeStepItemClass(): string {
        switch (stepStatus) {
            case StepStatus.COMPLETED:
                return 'mcf-section--completed';
            case StepStatus.DOING:
                return 'mcf-section--active';
            case StepStatus.TODO:
            default:
                return ''
        }
    }

    return (
        <li key={`${stepTitle}_${stepStatus}`}
            className={computeStepItemClass()}
            aria-current={stepStatus === StepStatus.DOING}>

            <p>{stepTitle}</p>

            {stepStatus === StepStatus.COMPLETED && (
                <p className="mcf-sr-only">&eacute;tape valid&eacute;e</p>
            )}
        </li>
    );
}

export default StepBarItem;
