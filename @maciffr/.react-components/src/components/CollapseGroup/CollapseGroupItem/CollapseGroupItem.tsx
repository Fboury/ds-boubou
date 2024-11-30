import React, {Children, cloneElement, ReactElement, useMemo} from "react";
import Content, { ContentProps } from "./Content";
import Title, { TitleProps } from "./Title";
export interface CollapseGroupItemProperties {
  readonly children: ReactElement<TitleProps | ContentProps>[];
  readonly className?: string;
  readonly id?: string;
}

const CollapseGroupItem = ({ children, id, className = "" }: CollapseGroupItemProperties) => {
  return useMemo(() =>
    <div className={`mcf-accordion mcf-accordion--flush ${className}`}>
      {Children.map(children, child => cloneElement(child, { ...child.props, id }))}
    </div>
  , [children]);
};

CollapseGroupItem.displayName = "CollapseGroupItem";
CollapseGroupItem.Content = Content;
CollapseGroupItem.Title = Title;

export default CollapseGroupItem;
