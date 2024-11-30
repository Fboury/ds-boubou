import React, {ReactElement, ReactNode} from "react";

export interface PrefixProperties {
    readonly children: ReactNode;
    readonly className?: string;
}

export default function Prefix({children, className}: PrefixProperties): ReactElement {
    return (
        <div className={`mcf-input-group--prepend ${className || ''}`}>
            <span className="mcf-input-group__text">{children}</span>
        </div>
    );
}
