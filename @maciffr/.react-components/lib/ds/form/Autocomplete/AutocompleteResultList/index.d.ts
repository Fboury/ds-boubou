import React, { FunctionComponent, HTMLAttributes, ReactElement } from "react";
import { AutocompleteItem } from "../AutocompleteResultItem";
export interface AutocompleteResultListProps extends Omit<HTMLAttributes<HTMLUListElement>, "onSelect"> {
    readonly onSelect?: (item?: AutocompleteItem) => void;
    readonly activeIndex?: number;
    readonly children: ReactElement<unknown, FunctionComponent>[] | ReactElement<unknown, FunctionComponent>;
}
declare const AutocompleteResultList: React.ForwardRefExoticComponent<AutocompleteResultListProps & React.RefAttributes<HTMLLIElement[]>>;
export default AutocompleteResultList;
