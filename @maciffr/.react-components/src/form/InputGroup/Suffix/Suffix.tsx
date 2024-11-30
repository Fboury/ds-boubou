import React, {ReactElement, ReactNode} from "react";

export interface SuffixProperties {
    readonly children: ReactNode;
    readonly className?: string;
}

export default function Suffix({children, className}: SuffixProperties): ReactElement {
    return (
        <div className={`mcf-input-group--append ${className || ''}`}>
            <span className="mcf-input-group__text">{children}</span>
        </div>
    );
}
