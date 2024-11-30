import { LinkHTMLAttributes, ReactNode } from "react";
import { TextSize } from "../../enums/TextSize";
interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
    readonly variant?: LinkVariant;
    readonly reverse?: boolean;
    readonly icon?: string;
    readonly size?: TextSize;
    readonly children: ReactNode;
}
export declare enum LinkVariant {
    Standalone = "mds-link--standalone",
    IconOnly = "mds-link__icon-only",
    Normal = ""
}
declare const Link: ({ children, size, icon, variant, reverse, ...props }: LinkProps) => import("react/jsx-runtime").JSX.Element;
export default Link;
