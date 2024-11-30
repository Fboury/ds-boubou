import { ReactNode } from "react";
import { TextSize } from "../../enums/TextSize";
export interface ShowMoreContentProps {
    readonly open: boolean;
    readonly active: string;
    readonly size: TextSize;
    readonly children: ReactNode;
}
declare const ShowMoreContent: ({ open, active, size, children }: ShowMoreContentProps) => import("react/jsx-runtime").JSX.Element;
export default ShowMoreContent;
