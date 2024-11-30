import { HTMLAttributes, ReactNode } from "react";
export interface SelectItemProps extends HTMLAttributes<HTMLDivElement> {
    readonly children: ReactNode;
}
declare function SelectItem({ children, ...props }: SelectItemProps): import("react/jsx-runtime").JSX.Element;
export default SelectItem;
