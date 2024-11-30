import { ReactElement, ReactNode } from "react";
export interface SuffixProperties {
    readonly children: ReactNode;
    readonly className?: string;
}
export default function Suffix({ children, className }: SuffixProperties): ReactElement;
