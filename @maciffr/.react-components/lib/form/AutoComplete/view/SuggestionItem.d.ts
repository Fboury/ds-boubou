import { AutoCompleteOptionProps } from "../AutoCompleteProps";
interface SuggestionItemProps {
    readonly suggest: AutoCompleteOptionProps;
    readonly active: boolean;
    readonly onSelect: (suggest: AutoCompleteOptionProps) => void;
}
declare const SuggestionItem: ({ suggest, active, onSelect }: SuggestionItemProps) => import("react/jsx-runtime").JSX.Element;
export default SuggestionItem;
