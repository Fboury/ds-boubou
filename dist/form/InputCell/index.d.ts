import { HTMLAttributes, ReactNode } from "react";
import "../InputText/InputText.css";
export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    readonly children: ReactNode;
    readonly iconDirection?: IconDirection;
}
export declare enum IconDirection {
    Right = "mds-wrapper--icon-right",
    Left = "mds-wrapper--icon-left",
    Without = ""
}
declare function InputCell({ children, iconDirection, ...props }: LabelProps): import("react/jsx-runtime").JSX.Element;
export default InputCell;
