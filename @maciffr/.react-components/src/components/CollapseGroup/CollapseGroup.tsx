import React, {Children, cloneElement, ReactElement, useMemo} from "react";
import { CollapseGroupItemProperties } from "./CollapseGroupItem/CollapseGroupItem";

export interface CollapseGroupProperties {
  readonly children: ReactElement<CollapseGroupItemProperties>[];
  readonly id: string;
}

export default function CollapseGroup({ children, id }: CollapseGroupProperties) {
    return useMemo(() =>
      <div className="mcf-accordion mcf-accordion--flush">
        {Children.map(children, (child, index) => cloneElement(child, { ...child.props, id: `${id}-${index}` }))}
      </div>
  , [children]);
}
