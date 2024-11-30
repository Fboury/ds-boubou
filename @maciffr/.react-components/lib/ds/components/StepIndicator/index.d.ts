export interface StepIndicatorProps {
    readonly sections: Array<string>;
    readonly activeSection: string;
    readonly accessTitle: string;
}
declare function StepIndicator({ activeSection, sections, accessTitle }: StepIndicatorProps): import("react/jsx-runtime").JSX.Element;
export default StepIndicator;
