import React, { ReactNode, useEffect, useRef, useState } from "react";
import { TextSize } from "../../enums/TextSize";
export interface ShowMoreContentProps {
  readonly open: boolean;
  readonly active: string;
  readonly size: TextSize;
  readonly children: ReactNode;
}

const ShowMoreContent = ({ open, active, size, children }: ShowMoreContentProps) => {
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [contentMaxHeight, setContentMaxHeight] = useState<number>(0);

  const [tabIndex, contentHeight] = open ? [0, contentMaxHeight] : [-1, 0];

  useEffect(() => {
    if (contentRef?.current?.scrollHeight && contentRef?.current?.scrollHeight > 0) {
      setContentMaxHeight(contentRef.current.scrollHeight + 16);
    }
  }, [contentRef]);

  return (
    <div
      ref={contentRef}
      className={`mds-collapse__content${active} ${size}`}
      tabIndex={tabIndex}
      style={{ maxHeight: contentHeight }}>
      {children}
    </div>
  );
};

export default ShowMoreContent;
