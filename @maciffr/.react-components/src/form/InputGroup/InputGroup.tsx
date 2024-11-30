import React, {ReactElement, ReactNode} from "react";

export interface InputGroupProperties {
    readonly children: ReactNode;
    readonly className?: string;
}

export default function InputGroup({children, className}: InputGroupProperties): ReactElement {
    return (
        <div className={`mcf-input-group ${className || ''}`}>
            {children}
        </div>
    );
}
