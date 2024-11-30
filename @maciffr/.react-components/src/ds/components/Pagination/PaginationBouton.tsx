import React from "react";

interface PaginationBoutonProps {
  readonly numero: number;
  readonly actif: boolean;
  readonly handlePageChange: (value: number) => void;
  readonly dataTrackAnalytics?: string;
}

export default function PaginationBouton({
  numero,
  actif,
  handlePageChange,
  dataTrackAnalytics,
}: PaginationBoutonProps) {
  const actifClass = actif ? " actif" : "";
  const texteSrOnly = actif ? "Page courante" : "Aller à la page";

  return (
    <button
      className={`mds-btn mds-btn--secondary${actifClass}`}
      aria-current={actif}
      onClick={() => handlePageChange(numero)}
      data-track-analytics={dataTrackAnalytics}
    >
      <span className="mds-sr-only">{texteSrOnly}</span>
      {numero}
    </button>
  );
}
