import "./calendarHeader.css";
export interface CalendarHeaderProps {
    readonly month: number;
    readonly year: number;
    readonly min?: Date;
    readonly max?: Date;
    readonly onPreviousMonth: () => unknown;
    readonly onNextMonth: () => unknown;
    readonly onChange: (month: number, year: number) => unknown;
}
declare const CalendarHeader: ({ month, year, min, max, onPreviousMonth, onNextMonth, onChange }: CalendarHeaderProps) => import("react/jsx-runtime").JSX.Element;
export default CalendarHeader;
