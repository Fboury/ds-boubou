import { AutoCompleteOptionProps } from "../AutoCompleteProps";
interface SuggestionListProps {
    readonly id: string;
    readonly data: Array<AutoCompleteOptionProps>;
    readonly isActive: (option: AutoCompleteOptionProps) => boolean;
    readonly onSelect: (option?: AutoCompleteOptionProps) => void;
}
declare const SuggestionList: ({ id, data, isActive, onSelect }: SuggestionListProps) => import("react/jsx-runtime").JSX.Element;
export default SuggestionList;
