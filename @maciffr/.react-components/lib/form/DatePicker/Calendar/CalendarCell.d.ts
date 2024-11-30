import "./CalendarCell.css";
import { Direction } from "./index";
interface CalendarCellProps {
    readonly cellKey: string;
    readonly empty: boolean;
    readonly date: Date | null;
    readonly type?: CellType;
    readonly onPick: (date: Date | null) => void;
    readonly focused?: boolean;
    readonly onArrowKeyPressed: (direction: Direction) => void;
}
export declare enum CellType {
    today = "mcf-border--hover--primary mcf-text--primary mcf-font-weight--bold",
    disabled = "mcf-text--gris-sable calendar-cell-disabled",
    selected = "mcf-border--hover--primary mcf-bg--bleu-fonce mcf-text--white mcf-font-weight--bold",
    selectable = "mcf-border--hover--primary mcf-text--black"
}
declare const CalendarCell: ({ cellKey, empty, date, type, onPick, focused, onArrowKeyPressed }: CalendarCellProps) => import("react/jsx-runtime").JSX.Element;
export default CalendarCell;
