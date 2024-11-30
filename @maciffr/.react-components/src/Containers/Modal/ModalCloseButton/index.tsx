import React, { InputHTMLAttributes} from "react";
import "../modal.css";

interface ModalCloseButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  onClose: () => void;
}

function ModalCloseButton({onClose} : ModalCloseButtonProps) {
  return (
    <button
      type="button"
      className="close modal__close"
      onClick={onClose}>
      <span className="mcf-sr-only">Fermer</span>
    </button>
  );
}

export default ModalCloseButton;
