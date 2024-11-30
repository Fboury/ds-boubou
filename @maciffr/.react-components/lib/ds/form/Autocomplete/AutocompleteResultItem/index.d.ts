import React, { HTMLAttributes } from "react";
export interface AutocompleteItem {
    readonly value: string;
    readonly code: string;
}
export interface AutocompleteResultItemProps extends Omit<HTMLAttributes<HTMLLIElement>, "onSelect"> {
    readonly active?: boolean;
    readonly value: string;
    readonly code: string;
    readonly onSelect?: (value: AutocompleteItem) => void;
}
declare const AutocompleteResultItem: React.ForwardRefExoticComponent<AutocompleteResultItemProps & React.RefAttributes<HTMLLIElement>>;
export default AutocompleteResultItem;
