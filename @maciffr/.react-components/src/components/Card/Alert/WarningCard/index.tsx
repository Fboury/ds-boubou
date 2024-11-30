import React, {ReactNode} from "react";

export interface ContainerProps {
  readonly children: ReactNode;
}

function WarningCard({ children }: ContainerProps) {
  return (
    <div className="mcf-alert mcf-alert--warning mcf-mt--5 mcf-mt-sm--4 mcf-d--flex mcf-flex-sm--row mcf-flex--column">
      <span className="icon mcf-icon--fixed-2 icon-macif-mobile-info-plein mcf-text--orange" aria-hidden="true"></span>
      <div className="mcf-ml--0 mcf-ml-sm--3 mcf-mt--4 mcf-mt-sm--0">{children}</div>
    </div>
  );
}

export default WarningCard;
