import { ReactNode } from "react";
import "./ShowMore.css";
import { TextSize } from "../../enums/TextSize";
export interface ShowMoreProps {
    readonly children: ReactNode;
    readonly size?: TextSize;
    readonly openDefault?: boolean;
    readonly buttonText?: (open: boolean) => ReactNode;
}
declare function ShowMore({ children, size, openDefault, buttonText }: ShowMoreProps): import("react/jsx-runtime").JSX.Element;
export default ShowMore;
