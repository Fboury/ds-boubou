import { HTMLAttributes, ReactNode } from "react";
import "./Content.css";
type OmittedProps = "aria-hidden";
export interface ContentProps extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
    readonly children: ReactNode;
}
declare const Content: ({ children, className, id, ...props }: ContentProps) => import("react/jsx-runtime").JSX.Element;
export default Content;
