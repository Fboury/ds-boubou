import { InputHTMLAttributes } from "react";
type OmittedProps = "accept" | "alt" | "autocomplete" | "capture" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "max" | "maxlength" | "min" | "minlength" | "multiple" | "name" | "pattern" | "placeholder" | "size" | "src" | "step" | "type" | "value" | "width";
export interface SelectableItemProperties extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly value: string;
    readonly group: string;
}
export default function SelectableItem({ id, children, value, group, ...props }: SelectableItemProperties): import("react/jsx-runtime").JSX.Element;
export {};
