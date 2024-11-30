import { HTMLAttributes } from "react";

function Facultatif(props: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className="mds-label--required" {...props}>
      &nbsp;(facultatif)
    </span>
  );
}

export default Facultatif;
