import React from "react";

interface ErreurProps {
  readonly message?: string;
}

export default function Erreur({ message }: ErreurProps) {
  return <p id="bouton-switcher-erreur" className="mcf-text--danger mcf-mt--3">
          <span aria-hidden="true" className="icon icon-erreur" />
          {message}
        </p>;
}
