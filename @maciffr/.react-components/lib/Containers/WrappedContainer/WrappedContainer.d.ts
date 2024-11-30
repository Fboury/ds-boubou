import { HTMLAttributes } from 'react';
type OmittedProps = "className" | "aria-hidden";
export declare enum WrappedContainerOrientation {
    Column = "column",
    Row = "row"
}
export interface WrappedContainerProperties extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
    orientation?: WrappedContainerOrientation;
}
export default function WrappedContainer({ children, orientation, style, ...props }: WrappedContainerProperties): import("react/jsx-runtime").JSX.Element;
export {};
