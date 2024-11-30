import React from "react";

export default function Erreur({id, message}: { id: string, message?: string }) {
  if (!message) {
    return <></>;
  }
  return (
    <p id={`${id}-erreur`} className="mcf-text--danger mcf-mt--3">
      <span className="icon icon-erreur"/>
      {message}
    </p>
  );
}
