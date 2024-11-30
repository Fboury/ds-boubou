import React, {InputHTMLAttributes, ReactNode} from "react";
import "../modal.css";

export interface ModalContentProps extends InputHTMLAttributes<HTMLDivElement> {
  readonly children: ReactNode;
}

function ModalContent({ children, ...props } : ModalContentProps) {
  return (
    <div className="body" {...props}>
      {children}
    </div>
  );
}

export default ModalContent;
