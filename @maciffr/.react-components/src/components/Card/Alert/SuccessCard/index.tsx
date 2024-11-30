import React, {ReactNode} from "react";

export interface ContainerProps {
  readonly children: ReactNode;
}

function SuccessCard({ children }: ContainerProps) {
  return (
    <div className="mcf-alert mcf-alert--success mcf-mt--5 mcf-mt-sm--4 mcf-d--flex mcf-flex-sm--row mcf-flex--column">
      <span className="icon mcf-icon--fixed-2 icon-macif-mobile-info-plein" aria-hidden="true"></span>
      <div className="mcf-ml--0 mcf-ml-sm--3 mcf-mt--4 mcf-mt-sm--0">{children}</div>
    </div>
  );
}

export default SuccessCard;
