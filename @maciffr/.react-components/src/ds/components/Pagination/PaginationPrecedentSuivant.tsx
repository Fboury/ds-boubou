import React from "react";

interface PaginationPrecedentSuivantProps {
  readonly pageActive: number;
  readonly handlePageChange: (value: number) => void;
  readonly isLeft?: boolean;
  readonly borne: number;
  readonly dataTrackAnalytics?: string;
}

function PaginationPrecedentSuivant({
  pageActive,
  handlePageChange,
  isLeft,
  borne,
  dataTrackAnalytics,
}: PaginationPrecedentSuivantProps) {
  const nomIcone = isLeft ? " icon-fleche_gauche" : " icon-fleche-droite";
  const nouvellePage = isLeft ? pageActive - 1 : pageActive + 1;
  const texteDirectionSrOnly = isLeft ? "précédente" : "suivante";
  const estPremiereOuDernierePage = isLeft ? pageActive <= borne : pageActive >= borne;

  if (estPremiereOuDernierePage) {
    return null;
  }

  return (
    <button
      className={`mds-btn mds-btn--tertiary mds-btn--icon-only${nomIcone}`}
      onClick={() => handlePageChange(nouvellePage)}
      data-track-analytics={dataTrackAnalytics}
    >
      <span className="mds-sr-only">Aller &agrave; la page {texteDirectionSrOnly}</span>
    </button>
  );
}

export default PaginationPrecedentSuivant;
