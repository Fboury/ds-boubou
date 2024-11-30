import { FormEventHandler, ReactNode } from "react";
export interface SelectableChoiceProperties {
    readonly id: string;
    readonly children: ReactNode | undefined;
    readonly label: string;
    readonly onChange?: FormEventHandler<HTMLFieldSetElement>;
}
export default function SelectableChoice({ id, label, children, onChange, ...props }: SelectableChoiceProperties): import("react/jsx-runtime").JSX.Element;
