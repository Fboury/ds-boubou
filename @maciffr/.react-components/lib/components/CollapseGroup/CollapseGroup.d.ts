import { ReactElement } from "react";
import { CollapseGroupItemProperties } from "./CollapseGroupItem/CollapseGroupItem";
export interface CollapseGroupProperties {
    readonly children: ReactElement<CollapseGroupItemProperties>[];
    readonly id: string;
}
export default function CollapseGroup({ children, id }: CollapseGroupProperties): import("react/jsx-runtime").JSX.Element;
