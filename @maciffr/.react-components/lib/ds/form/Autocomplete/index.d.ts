import React, { InputHTMLAttributes, ReactElement } from "react";
import { AutocompleteItem } from "./AutocompleteResultItem";
import { ValidationMessages } from "../../commons/contrats/ValidationMessage";
type OmittedProps = "onSelect";
export interface AutocompleteProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly onSearch: (search: string) => void;
    readonly onToggle?: (visible: boolean) => void;
    readonly onSelect: (item?: AutocompleteItem) => void;
    readonly children: ReactElement | ReactElement[];
    readonly visible?: boolean;
    readonly search?: string;
    readonly error?: string;
    readonly validationMessage?: ValidationMessages;
}
declare const Autocomplete: React.ForwardRefExoticComponent<AutocompleteProps & React.RefAttributes<HTMLInputElement>>;
export default Autocomplete;
