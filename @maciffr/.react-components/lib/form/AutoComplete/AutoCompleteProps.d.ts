import { InputHTMLAttributes, ReactNode } from "react";
export interface AutoCompleteOptionProps {
    /** Code d'une option */
    readonly key: string | number;
    /** Valeur d'une option */
    readonly value: string;
    /** Libellé d'une option, par défaut la valeur **/
    readonly libelle?: string | ReactNode;
}
type OmittedProps = "accept" | "alt" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "multiple" | "size" | "src" | "step" | "type" | "value" | "onChange" | "onSelect" | "min" | "defaultValue" | "max";
export default interface AutoCompleteProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly options: Array<AutoCompleteOptionProps>;
    readonly describeLabel?: string;
    readonly erreur?: string;
    readonly onSearch: (value: string) => void;
    readonly onSelect?: (value?: AutoCompleteOptionProps) => void;
    readonly defaultValue?: AutoCompleteOptionProps;
    readonly maxLength?: number;
    readonly description?: ReactNode;
}
export {};
