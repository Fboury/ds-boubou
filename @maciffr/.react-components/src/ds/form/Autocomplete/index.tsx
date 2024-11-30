import React, {
  ChangeEvent,
  Children,
  cloneElement,
  FocusEvent,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import InputCell from "../InputCell";
import AutocompleteResultList, { AutocompleteResultListProps } from "./AutocompleteResultList";
import { AutocompleteItem } from "./AutocompleteResultItem";
import { KEYS, VALIDATION_MESSAGES } from "./constantes";
import Erreur from "../../components/Erreur/Erreur";
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

interface AutocompleteResultListWithRefProps extends AutocompleteResultListProps {
  readonly ref: (el: HTMLLIElement[]) => HTMLLIElement[];
}

const Autocomplete = forwardRef<HTMLInputElement, AutocompleteProps>(
  (
    {
      id,
      children,
      required,
      search,
      error,
      value,
      validationMessage,
      onSearch,
      onSelect,
      visible = false,
      "aria-describedby": ariaDescribedBy = "",
      onToggle = () => {},
      ...props
    }: AutocompleteProps,
    ref
  ) => {
    const autocompleteRef = useRef<HTMLInputElement>(null);
    const errorId = useMemo(() => `error-${id}`, [id]);
    const [errorMessage, setErrorMessage] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsRef = useRef<HTMLLIElement[]>([]);

    useEffect(() => {
      setErrorMessage(error ?? errorMessage);
    }, [error]);

    useImperativeHandle(ref, () => autocompleteRef.current as HTMLInputElement);

    const selectNextItem = () => {
      const nextIndex = activeIndex < itemsRef.current.length - 1 ? activeIndex + 1 : 0;
      setActiveIndex(nextIndex);
    };

    const selectPreviousItem = () => {
      const previousIndex = activeIndex > 0 ? activeIndex - 1 : itemsRef.current.length - 1;
      setActiveIndex(previousIndex);
    };

    const handleDefaultKeyPress = () => {
      if (autocompleteRef.current) {
        autocompleteRef.current.focus();
      }
    };

    const selectCurrentChildren = () => {
      if (itemsRef.current) {
        const child = itemsRef.current[activeIndex];
        const code = child.getAttribute("data-code") ?? "";
        const value = child.getAttribute("data-value") ?? "";
        selectItem({ code, value });
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
          selectCurrentChildren();
          break;
        case KEYS.ESCAPE:
          event.preventDefault();
          onToggle(false);
          break;
        default:
          handleDefaultKeyPress();
          break;
      }
    };

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onSelect();
      onSearch(value);
      onToggle(true);
    };

    const selectItem = (item?: AutocompleteItem) => {
      onSelect(item);
      setActiveIndex(0);
      onToggle(false);
    };

    const handleSelect = (item?: AutocompleteItem) => {
      autocompleteRef.current?.setCustomValidity("");
      setErrorMessage("");
      selectItem(item);
    };

    const updateErrorState = (input: HTMLInputElement, message: string) => {
      // enlève la popup HTML de la validation
      input.setCustomValidity(" ");
      setErrorMessage(message);
    };

    const validate = (input: HTMLInputElement) => {
      input.setCustomValidity("");

      const { validity } = input;
      if (validity.valid && value) {
        setErrorMessage("");
        return true;
      }

      if (validity.valueMissing || !value) {
        updateErrorState(input, validationMessage?.required || VALIDATION_MESSAGES.required);
        return false;
      }

      return false;
    };

    const handleInvalid = (event: ChangeEvent<HTMLInputElement>) => {
      validate(event.target);
    };

    const renderChildrenList = Children.map(children, (child: ReactElement) => {
      if (child.type == AutocompleteResultList) {
        return cloneElement(child as ReactElement<AutocompleteResultListWithRefProps>, {
          onSelect: handleSelect,
          ref: (el: HTMLLIElement[]) => (itemsRef.current = el),
          activeIndex,
        });
      }

      return child;
    });

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (!event.relatedTarget || !event.currentTarget.contains(event.relatedTarget)) {
        onToggle(false);
      }
    };

    return (
      <div onBlur={handleBlur}>
        <InputCell>
          <input
            id={id}
            ref={autocompleteRef}
            type="text"
            value={value ?? search ?? ""}
            onKeyDown={handleKeyDown}
            onChange={handleSearch}
            onInvalid={handleInvalid}
            className="mds-input"
            aria-describedby={`${ariaDescribedBy}${errorMessage ? ` ${errorId}` : ""}`}
            aria-invalid={!!errorMessage}
            aria-required={required}
            required={required}
            aria-autocomplete="list"
            aria-owns={`${id}-results`}
            role="combobox"
            {...props}
          />
        </InputCell>
        <div className="mds-autocomplete">{visible && renderChildrenList}</div>
        <Erreur id={errorId}>{errorMessage}</Erreur>
      </div>
    );
  }
);

export default Autocomplete;
