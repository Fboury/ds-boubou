import { ReactNode } from "react";
export interface ViewLoaderProps {
    readonly loading?: boolean;
    readonly children: ReactNode;
    readonly template?: ReactNode | JSX.Element;
}
declare function ViewLoader({ children, loading, template, ...props }: ViewLoaderProps): import("react/jsx-runtime").JSX.Element;
export default ViewLoader;
