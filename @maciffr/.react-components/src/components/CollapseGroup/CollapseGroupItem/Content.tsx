import React, {HTMLAttributes, ReactNode, useMemo} from "react";
import "./Content.css";

type OmittedProps = "aria-hidden";

export interface ContentProps extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
  readonly children: ReactNode;
}

const Content = ({
  children,
  className,
  id,
  ...props
}: ContentProps) => {
  return useMemo(() =>
    <div {...props} id={`${id}-content`} className="mcf-collapse__content mcf-mt--2">
      <p className={`mcf-mb--0 mcf-pl-md--7 mcf-pr-md--3 mcf-pb-md--3 mcf-pl--8 mcf-pr--5 mcf-pb--5 
    ${className || ""}`}>{children}</p>
    </div>, [children]
  );
};

export default Content;
