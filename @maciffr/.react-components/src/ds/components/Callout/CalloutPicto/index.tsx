import React, { InputHTMLAttributes } from "react";

export interface CalloutPictoProps extends InputHTMLAttributes<HTMLSpanElement> {}

export default function CalloutPicto({ ...props }: CalloutPictoProps) {
  return <span aria-hidden="true" {...props}></span>;
}
