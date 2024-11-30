import { InputHTMLAttributes, ReactNode } from "react";
type OmittedProps = "aria-hidden" | "children";
interface ErreurProps extends Omit<InputHTMLAttributes<HTMLParagraphElement>, OmittedProps> {
    readonly children: ReactNode;
    readonly id: string;
}
export default function Erreur({ id, children, ...props }: ErreurProps): import("react/jsx-runtime").JSX.Element;
export {};