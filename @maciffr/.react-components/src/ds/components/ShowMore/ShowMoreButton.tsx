import React, {ReactNode} from "react";
import {TextSize} from "../../enums/TextSize";

export interface ShowMoreButtonProps {
  readonly children: ReactNode;
  readonly active: string;
  readonly onClick: () => void;
  readonly size: TextSize;
}

function ShowMoreButton({ children, active, size, onClick }: ShowMoreButtonProps) {
  return (
    <button type="button" className={`mds-show-more__btn mds-collapse ${size}${active}`} onClick={onClick}>
      {children}
      <span className="mds-icon__expand-more"/>
    </button>
  );
}

export default ShowMoreButton;
