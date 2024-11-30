import React, {
  Children,
  cloneElement,
  forwardRef,
  FunctionComponent,
  HTMLAttributes,
  ReactElement,
  useImperativeHandle,
  useRef,
} from "react";
import { AutocompleteItem, AutocompleteResultItemProps } from "../AutocompleteResultItem";

interface AutocompleteItemWithRefProps extends AutocompleteResultItemProps {
  readonly ref: (el: HTMLLIElement) => HTMLLIElement;
}

export interface AutocompleteResultListProps extends Omit<HTMLAttributes<HTMLUListElement>, "onSelect"> {
  readonly onSelect?: (item?: AutocompleteItem) => void;
  readonly activeIndex?: number;
  readonly children: ReactElement<unknown, FunctionComponent>[] | ReactElement<unknown, FunctionComponent>;
}

const AutocompleteResultList = forwardRef<HTMLLIElement[], AutocompleteResultListProps>(
  ({ children, activeIndex = 0, onSelect = () => {}, ...props }: AutocompleteResultListProps, ref) => {
    const itemsRef = useRef<HTMLLIElement[]>([]);

    useImperativeHandle(ref, () => itemsRef.current);

    const renderChildrenList = Children.map(children, (child: ReactElement<unknown, FunctionComponent>, index) => {
      return cloneElement(child as ReactElement<AutocompleteItemWithRefProps>, {
        active: index === activeIndex,
        ref: (el: HTMLLIElement) => (itemsRef.current[index] = el),
        onSelect,
      });
    });

    return (
      <ul className="mds-autocomplete__result" role="listbox" {...props}>
        {renderChildrenList}
      </ul>
    );
  }
);

AutocompleteResultList.displayName = "AutocompleteResultList";

export default AutocompleteResultList;
