import React, {HTMLAttributes, ReactNode, useEffect, useState} from "react";
import "./Title.css";

type OmittedProps = "aria-hidden";
export interface TitleProps extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
  readonly children: ReactNode;
  readonly id?: string;
  readonly dataTrackAnalytics?: string;
  readonly as?: React.ElementType;
}

export default function Title({ children, id, dataTrackAnalytics, as: Component = "h2", ...props }: TitleProps) {
  const [collapsed, setCollapsed] = useState(false);

  return <Component {...props} className="mcf-collapse__header" id={`${id}-title`} data-mcf-collapsed={collapsed}>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`mcf-collapse__button ${collapsed ? "" : "collapsed"}`}
        type="button"
        data-mcf-toggle="collapse"
        data-mcf-target={`#${id}-content`}
        aria-expanded={collapsed}
        aria-controls={`${id}-content`}
        {...(dataTrackAnalytics && { "data-track-analytics": dataTrackAnalytics })}>
        {children}
      </button>
    </Component>;
}
