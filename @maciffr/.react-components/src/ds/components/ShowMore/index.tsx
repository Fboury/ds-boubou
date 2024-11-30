import React, { ReactNode, useState } from "react";
import "./ShowMore.css";
import ShowMoreContent from "./ShowMoreContent";
import ShowMoreButton from "./ShowMoreButton";
import { TextSize } from "../../enums/TextSize";
export interface ShowMoreProps {
  readonly children: ReactNode;
  readonly size?: TextSize;
  readonly openDefault?: boolean;
  readonly buttonText?: (open: boolean) => ReactNode;
}

const defaultButtonText = (open: boolean) => (open ? <span>Afficher moins</span> : <span>Afficher plus</span>);

function ShowMore({ children, size = TextSize.M, openDefault = false, buttonText = defaultButtonText }: ShowMoreProps) {
  const [open, setOpen] = useState(openDefault);
  const active = open ? " active" : "";

  return (
    <>
      <ShowMoreButton active={active} onClick={() => setOpen(!open)} size={size}>
        {buttonText(open)}
      </ShowMoreButton>
      <ShowMoreContent open={open} active={active} size={size}>
        {children}
      </ShowMoreContent>
    </>
  );
}

export default ShowMore;
