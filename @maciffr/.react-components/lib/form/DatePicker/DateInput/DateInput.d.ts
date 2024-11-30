import { FormEvent, InputHTMLAttributes } from "react";
import "./DateInput.css";
type OmittedProps = "accept" | "alt" | "capture" | "checked" | "crossOrigin" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "height" | "multiple" | "size" | "min" | "max" | "value" | "onChange" | "src" | "step" | "type" | "width";
export interface DateInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps> {
    readonly id: string;
    readonly min?: Date;
    readonly max?: Date;
    readonly value?: Date | null;
    readonly dayInputLabelledBy?: string;
    readonly monthInputLabelledBy?: string;
    readonly yearInputLabelledBy?: string;
    readonly onChange: (value: Date | null) => void;
    readonly onInvalid: (event: FormEvent<HTMLInputElement>) => void;
    readonly "data-testid"?: string;
}
declare const DateInput: ({ id, min, max, value, onChange, onInvalid, ...props }: DateInputProps) => import("react/jsx-runtime").JSX.Element;
export default DateInput;
