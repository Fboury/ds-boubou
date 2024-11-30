import React, { useState, useEffect } from "react";
import "./pagination.css";
import PaginationBouton from "./PaginationBouton";
import PaginationDelimiter from "./PaginationDelimiter";
import PaginationPrecedentSuivant from "./PaginationPrecedentSuivant";
import calculerPagesAffichees from "./calculerPagesAffichees";

export interface PaginationProps {
  readonly pageActive: number;
  readonly nombreBoutonsAffiches: number;
  readonly nombrePages: number;
  readonly afficherExtremites: boolean;
  readonly ariaLabel: string;
  readonly handlePageChange: (value: number) => void | Promise<void>;
  readonly "data-testid"?: string;
  readonly dataTrackAnalytics?: string;
}

const MOBILE_BREAKPOINT = 600;

function getDataTrackAnalytics(numeroPage: number, prefix?: string) {
  if (!prefix) {
    return;
  }

  return prefix + numeroPage;
}

function Pagination({
  pageActive,
  nombreBoutonsAffiches,
  nombrePages,
  afficherExtremites = false,
  ariaLabel,
  handlePageChange,
  dataTrackAnalytics,
  ...props
}: PaginationProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    function handleResize() {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pagesAffichees = calculerPagesAffichees(
    pageActive,
    nombreBoutonsAffiches,
    nombrePages,
    afficherExtremites,
    isMobile
  );

  const afficherPremierePage = afficherExtremites && !isMobile && !pagesAffichees.includes(1);
  const afficherEllipseGauche =
    afficherExtremites && !isMobile && !pagesAffichees.includes(2) && pagesAffichees.length > 1;
  const afficherEllipseDroite =
    afficherExtremites && !pagesAffichees.includes(nombrePages - 1) && pagesAffichees.length > 1;
  const afficherDernierePage = afficherExtremites && !pagesAffichees.includes(nombrePages);

  return (
    <nav className="mds-pagination" role="navigation" aria-label={ariaLabel} {...props}>
      <ul>
        <li>
          <PaginationPrecedentSuivant
            pageActive={pageActive}
            borne={1}
            handlePageChange={handlePageChange}
            dataTrackAnalytics={getDataTrackAnalytics(pageActive - 1, dataTrackAnalytics)}
            isLeft
          />
        </li>
        {afficherPremierePage && (
          <li>
            <PaginationBouton
              numero={1}
              actif={pageActive === 1}
              handlePageChange={handlePageChange}
              dataTrackAnalytics={getDataTrackAnalytics(1, dataTrackAnalytics)}
            />
          </li>
        )}
        {afficherEllipseGauche && (
          <li>
            <PaginationDelimiter />
          </li>
        )}
        {pagesAffichees.map((numeroPage) => (
          <li key={numeroPage}>
            <PaginationBouton
              numero={numeroPage}
              actif={numeroPage === pageActive}
              handlePageChange={handlePageChange}
              dataTrackAnalytics={getDataTrackAnalytics(numeroPage, dataTrackAnalytics)}
            />
          </li>
        ))}
        {afficherEllipseDroite && (
          <li>
            <PaginationDelimiter />
          </li>
        )}
        {afficherDernierePage && (
          <>
            <li>
              <PaginationBouton
                numero={nombrePages}
                actif={pageActive === nombrePages}
                handlePageChange={handlePageChange}
                dataTrackAnalytics={getDataTrackAnalytics(nombrePages, dataTrackAnalytics)}
              />
            </li>
          </>
        )}
        <li>
          <PaginationPrecedentSuivant
            pageActive={pageActive}
            borne={nombrePages}
            handlePageChange={handlePageChange}
            dataTrackAnalytics={getDataTrackAnalytics(pageActive + 1, dataTrackAnalytics)}
          />
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
