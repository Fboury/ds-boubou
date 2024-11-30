import React, { HTMLAttributes, ReactElement, ReactNode } from "react";
import "./modal.css";

type OmittedProps = "children";

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, OmittedProps> {
  children: ReactNode
  shown?: boolean;
  onClose: () => void;
};

const Modal = ({ children, onClose, shown, ...props }: ModalProps): ReactElement => {

  const openedClass: string = shown ? " open" : "";
  return (
    <>
      <div className={`backdrop${openedClass}`} />
      <div {...props} className={`modal${openedClass} ${props.className ?? ""}`} role="dialog" aria-modal={shown}>
        <div className="modal__dialog">
          <div className="modal__content">
            <span role="button" className="mds-icon__close modal__close" aria-label="Fermer" onClick={onClose}></span>
            <div className="body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Modal;
