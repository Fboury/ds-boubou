import React from "react";

interface ChevronBtnProps {
  onClick: () => unknown;
  direction: "gauche" | "droite";
  size: number;
}

const ChevronBtn = ({ onClick, direction, size, ...props }: ChevronBtnProps) => {
  const FONT_SIZE = 12;

  const chevronIcon = direction === "gauche" ? "icon-fleche_gauche" : "icon-fleche-droite";

  return (
    <span
      id={`calendar-chevron-${direction}`}
      className="mcf-my--auto mcf-bg--white mcf-rounded--circle mcf-d--flex mcf-text--small-1"
      style={{ cursor: "pointer", width: "2.5rem", aspectRatio: 1, margin: "0 8px" }}
      onClick={onClick}
    >
      <span className={`${chevronIcon} mcf-m--auto`} style={{ fontSize: FONT_SIZE }} />
    </span>
  );
};

export default ChevronBtn;
