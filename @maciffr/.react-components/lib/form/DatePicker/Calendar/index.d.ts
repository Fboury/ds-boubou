import "./Calendar.css";
export interface CalendarProps {
    readonly onChange: (date: Date | null) => void;
    readonly min?: Date;
    readonly max?: Date;
    readonly value?: Date | null;
    readonly classname?: string | null;
}
declare const Calendar: ({ onChange, value, min, max, classname }: CalendarProps) => import("react/jsx-runtime").JSX.Element;
export type Direction = "up" | "down" | "left" | "right";
export default Calendar;
