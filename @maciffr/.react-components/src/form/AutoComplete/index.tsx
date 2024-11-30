import React, {useImperativeHandle, forwardRef, ReactElement, useEffect, useRef, useState} from "react";
import AutoCompleteInput from "./view/AutoCompleteInput";
import AutoCompleteProps, {AutoCompleteOptionProps} from "./AutoCompleteProps";
import SuggestionList from "./view/SuggestionList";
import Erreur from "./view/Erreur";
import {KEYS, REGEX_ONLY_ALPHANUMERIC_SPACES} from "./constantes";
import SuggestionHeader from "./view/SuggestionHeader";

type Ref = HTMLInputElement;

const AutoComplete = forwardRef<Ref, AutoCompleteProps>(({
                                                           id,
                                                           options,
                                                           erreur,
                                                           onSearch,
                                                           describeLabel,
                                                           onSelect,
                                                           defaultValue,
                                                           maxLength,
                                                           description,
                                                           ...props
                                                         }: AutoCompleteProps, ref): ReactElement => {
    const autocompleteRef = useRef<HTMLInputElement | null>(null);
    const [firstItem] = options;
    const [visible, setVisible] = useState<boolean>(false);
    const [activeItem, setActiveItem] = useState<AutoCompleteOptionProps | undefined>(firstItem);
    const [recherche, setRecherche] = useState<string>("");
    const [selectedItem, setSelectedItem] = useState<AutoCompleteOptionProps | undefined>(defaultValue ?? firstItem);

    useImperativeHandle(ref, () => autocompleteRef.current as HTMLInputElement);

    const handleSelect = (item?: AutoCompleteOptionProps) => {
      onSelect && onSelect(item);
      setSelectedItem(item);
      setVisible(false);
      setActiveItem(undefined);
    };

    useEffect(() => {
      if (options.length > 0) {
        setActiveItem(firstItem);
      }
    }, [options]);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event?.target?.value?.replace(REGEX_ONLY_ALPHANUMERIC_SPACES, "")?.trimStart();
      handleSelect(undefined);
      setVisible(true);
      setRecherche(value);
      onSearch(value);
      setActiveItem(firstItem);
    };

    const isActive = (item: AutoCompleteOptionProps) => activeItem === item;

    const selectNextItem = () => {
      if (!activeItem) {
        return;
      }
      const currentIndex = options.indexOf(activeItem);
      const nextIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0;
      setActiveItem(options[nextIndex]);
    };

    const selectPreviousItem = () => {
      if (!activeItem) {
        return;
      }
      const currentIndex = options.indexOf(activeItem);
      const previousIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1;
      setActiveItem(options[previousIndex]);
    };

    const handleDefaultKeyPress = () => {
      if (autocompleteRef.current) {
        autocompleteRef.current.focus();
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!activeItem) {
        return;
      }
      switch (event.key) {
        case KEYS.DOWN:
          event.preventDefault();
          selectNextItem();
          break;
        case KEYS.UP:
          event.preventDefault();
          selectPreviousItem();
          break;
        case KEYS.ENTER:
          event.preventDefault();
          handleSelect(activeItem);
          break;
        case KEYS.ESCAPE:
          event.preventDefault();
          setVisible(false);
          break;
        default:
          handleDefaultKeyPress();
          break;
      }
    };

    return (
      <>
        <div className="mcf-m--0 mcf-mb--4 mcf-form-group mcf-dropdown">
          <AutoCompleteInput
            id={id}
            ref={autocompleteRef}
            maxLength={maxLength}
            onKeyDown={handleKeyDown}
            value={selectedItem?.value || recherche}
            erreur={erreur}
            describeLabel={describeLabel}
            onChange={handleTextChange}
            visible={visible}
            activeElement={activeItem?.key ? `suggestion-${activeItem?.key}` : undefined}
            {...props}
          />
          <div
            id="suggestion-wrapper"
            className={`mcf-mb--4 mcf-dropdown__menu mcf-position--relative mcf-w--100 ${(visible && options?.length > 0) && "show"}`}>
            {(description && visible) && <SuggestionHeader>{description}</SuggestionHeader>}
            <SuggestionList
              id={id}
              data={options}
              isActive={isActive}
              onSelect={handleSelect}
            />
          </div>
          <Erreur id={id} message={erreur} />
        </div>
        <div aria-live="polite" aria-atomic="true" className="mcf-sr-only">
          {visible && <p>{options.length} suggestions</p>}
        </div>
      </>
    );
  }
);

export default AutoComplete;
