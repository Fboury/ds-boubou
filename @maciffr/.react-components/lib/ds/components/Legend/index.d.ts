import { HTMLAttributes, ReactNode } from "react";
export interface LegendProps extends HTMLAttributes<HTMLLegendElement> {
    readonly children: ReactNode;
    readonly disabled?: boolean;
}
declare function Legend({ children, disabled, ...props }: LegendProps): import("react/jsx-runtime").JSX.Element;
export default Legend;
