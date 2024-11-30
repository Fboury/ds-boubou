import { HTMLAttributes } from "react";
export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
    readonly name: string;
    readonly type?: IconType;
    readonly direction?: IconDirection;
}
export declare enum IconType {
    Basic = "mds-icon",
    Input = "mds-input__icon"
}
export declare enum IconDirection {
    Right = "--right",
    Left = "--left",
    None = ""
}
declare function Icon({ name, type, direction, ...props }: IconProps): import("react/jsx-runtime").JSX.Element;
export default Icon;
