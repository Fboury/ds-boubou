import React from "react";
import {AutoCompleteOptionProps} from "../AutoCompleteProps";

interface SuggestionItemProps {
  readonly suggest: AutoCompleteOptionProps;
  readonly active: boolean;
  readonly onSelect: (suggest: AutoCompleteOptionProps) => void;
}

const SuggestionItem = ({suggest, active, onSelect}: SuggestionItemProps) => {
  return (
    <li
      className={`mcf-dropdown__item mcf-py--3 mcf-py-sm--2 mcf-cursor--pointer ${active && "active"}`}
      role="option"
      id={`suggestion-${suggest.key}`}
      key={suggest.key}
      tabIndex={active ? 0 : -1}
      onClick={() => onSelect(suggest)}
      aria-selected={active}
    >
      {suggest.libelle || suggest.value}
    </li>
  );
};

export default SuggestionItem;
