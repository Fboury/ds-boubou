import { ReactElement } from "react";
import { ContentProps } from "./Content";
import Title, { TitleProps } from "./Title";
export interface CollapseGroupItemProperties {
    readonly children: ReactElement<TitleProps | ContentProps>[];
    readonly className?: string;
    readonly id?: string;
}
declare const CollapseGroupItem: {
    ({ children, id, className }: CollapseGroupItemProperties): import("react/jsx-runtime").JSX.Element;
    displayName: string;
    Content: ({ children, className, id, ...props }: ContentProps) => import("react/jsx-runtime").JSX.Element;
    Title: typeof Title;
};
export default CollapseGroupItem;
