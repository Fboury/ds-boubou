import React, { InputHTMLAttributes } from "react";
type OmittedProps = "accept" | "alt" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "multiple" | "size" | "src" | "step" | "type" | "value" | "onChange" | "onSelect" | "min" | "defaultValue" | "max";
interface AutoCompleteItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly maxLength?: number;
    readonly value: string;
    readonly erreur?: string;
    readonly describeLabel?: string;
    readonly visible: boolean;
    readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readonly activeElement?: string;
    readonly onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const AutoCompleteInput: React.ForwardRefExoticComponent<AutoCompleteItemProps & React.RefAttributes<HTMLInputElement>>;
export default AutoCompleteInput;
