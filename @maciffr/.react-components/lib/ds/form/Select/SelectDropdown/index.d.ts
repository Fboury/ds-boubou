import { HTMLAttributes, ReactNode } from "react";
export interface SelectDropdownProps extends HTMLAttributes<HTMLDivElement> {
    readonly disabled?: boolean;
    readonly children: ReactNode;
}
declare function SelectDropdown({ children, disabled, ...props }: SelectDropdownProps): import("react/jsx-runtime").JSX.Element;
export default SelectDropdown;
