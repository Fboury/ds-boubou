import React, { HTMLAttributes, ReactNode } from "react";
import "./Title.css";
type OmittedProps = "aria-hidden";
export interface TitleProps extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
    readonly children: ReactNode;
    readonly id?: string;
    readonly dataTrackAnalytics?: string;
    readonly as?: React.ElementType;
}
export default function Title({ children, id, dataTrackAnalytics, as: Component, ...props }: TitleProps): import("react/jsx-runtime").JSX.Element;
export {};
