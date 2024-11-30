import { ReactNode } from "react";
import { TextSize } from "../../enums/TextSize";
export interface ShowMoreButtonProps {
    readonly children: ReactNode;
    readonly active: string;
    readonly onClick: () => void;
    readonly size: TextSize;
}
declare function ShowMoreButton({ children, active, size, onClick }: ShowMoreButtonProps): import("react/jsx-runtime").JSX.Element;
export default ShowMoreButton;
