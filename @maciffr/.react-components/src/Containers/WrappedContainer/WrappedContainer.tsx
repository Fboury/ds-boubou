import React, {HTMLAttributes} from 'react';
import Styles from "./WrappedContainer.module.css";

type OmittedProps = "className" | "aria-hidden";

export enum WrappedContainerOrientation {
    Column = "column",
    Row = "row"
}

export interface WrappedContainerProperties extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
    orientation?: WrappedContainerOrientation
}

export default function WrappedContainer({children, orientation = WrappedContainerOrientation.Row, style, ...props}: WrappedContainerProperties) {
    return <div {...props} className={Styles.mcfWrappedContainer} style={{ ...style, flexDirection: orientation }}>{children}</div>
}
