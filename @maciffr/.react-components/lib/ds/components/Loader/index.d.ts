import { HTMLAttributes } from "react";
export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
    readonly reversed?: boolean;
}
export default function Loader({ reversed }: LoaderProps): import("react/jsx-runtime").JSX.Element;
