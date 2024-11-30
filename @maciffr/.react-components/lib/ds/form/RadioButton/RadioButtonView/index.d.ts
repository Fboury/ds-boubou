import { HTMLAttributes } from "react";
export interface RadioButtonViewProps extends HTMLAttributes<HTMLDivElement> {
    readonly size?: RadioButtonSize;
    readonly render?: RadioButtonRender;
    readonly disabled?: boolean;
    readonly checked?: boolean;
}
export declare enum RadioButtonSize {
    FullWidth = "mds-full-width",
    FitContent = "mds-fit-content"
}
export declare enum RadioButtonRender {
    Basic = "mds-radio--basic",
    Tile = "mds-radio--tile-basic mds-input-cell"
}
declare const RadioButtonView: ({ children, render, size, disabled, checked, ...props }: RadioButtonViewProps) => import("react/jsx-runtime").JSX.Element;
export default RadioButtonView;
