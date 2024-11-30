import React from "react";
import { AutoCompleteOptionProps } from "../AutoCompleteProps";
import SuggestionItem from "./SuggestionItem";

interface SuggestionListProps {
  readonly id: string;
  readonly data: Array<AutoCompleteOptionProps>;
  readonly isActive: (option: AutoCompleteOptionProps) => boolean;
  readonly onSelect: (option?: AutoCompleteOptionProps) => void;
}

const SuggestionList = ({ id, data, isActive, onSelect }: SuggestionListProps) => {
  if (!data.length) {
    return <></>;
  }

  return (
    <ul
      className={"mcf-pl--0 mcf-mb--0"}
      aria-labelledby={id}
      role="listbox"
      aria-label="suggestions de saisie"
      id={`${id}-resultats`}
    >
      {data.map((suggest) => (
        <SuggestionItem key={suggest.key} suggest={suggest} active={isActive(suggest)} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default SuggestionList;
