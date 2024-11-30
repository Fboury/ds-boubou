import { ReactElement, ReactNode } from "react";
export interface PrefixProperties {
    readonly children: ReactNode;
    readonly className?: string;
}
export default function Prefix({ children, className }: PrefixProperties): ReactElement;
