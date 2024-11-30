import { HTMLAttributes, ReactNode } from "react";
export interface CheckboxViewProps extends HTMLAttributes<HTMLDivElement> {
    readonly className?: string;
    readonly children: ReactNode;
    readonly disabled?: boolean;
    readonly checked?: boolean;
    readonly render?: CheckboxRender;
    readonly size?: CheckboxSize;
}
export declare enum CheckboxSize {
    Default = "",
    FullWidth = "mds-full-width",
    FitContent = "mds-fit-content"
}
export declare enum CheckboxRender {
    Basic = "mds-checkbox--basic",
    Tile = "mds-checkbox--tile-basic mds-input-cell"
}
declare const CheckboxView: ({ children, size, render, disabled, checked, ...props }: CheckboxViewProps) => import("react/jsx-runtime").JSX.Element;
export default CheckboxView;
