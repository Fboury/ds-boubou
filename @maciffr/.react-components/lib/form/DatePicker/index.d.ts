import { InputHTMLAttributes } from "react";
import "./index.css";
type OmittedProps = "accept" | "alt" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "multiple" | "size" | "src" | "step" | "type" | "value" | "onChange" | "min" | "max";
interface ValidationMessage {
    readonly invalid?: string;
}
export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly min?: Date;
    readonly max?: Date;
    readonly width?: number | string;
    readonly style?: object;
    readonly dayInputLabelledBy?: string;
    readonly monthInputLabelledBy?: string;
    readonly yearInputLabelledBy?: string;
    readonly onChange?: (value: Date | null) => void;
    readonly value?: Date;
    readonly "data-testid"?: string;
    readonly validationMessage?: ValidationMessage;
    readonly error?: string;
}
declare const DatePicker: ({ id, value, min, max, onChange, width, validationMessage, error, ...props }: DatePickerProps) => import("react/jsx-runtime").JSX.Element;
export default DatePicker;
