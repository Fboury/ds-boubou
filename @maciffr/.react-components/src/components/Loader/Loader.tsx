import React from "react";
import "./Loader.css"

export type LoaderProps = {
    /**
     * Affiche ou non le loader
     */
  show: boolean,
    /**
     * Argument nécessaire pour les tests
     */
  'data-testid'?: string;
};

/** Composant UI montrant le chargement d'une page ou d'un élément. */
const Loader = ({show, ...props}: LoaderProps) => {
  return (
    <>
      <div className="mcf-modal fade mcf-d--block show" tabIndex={-1} data-mcf-backdrop="true" hidden={!show} {...props}>
        <div className="mcf-loader mcf-loader--vert-pomme mcf-position--relative loader-position">
          <div className="mcf-loader__ball" />
        </div>
      </div>
      <div id="backdrop" className="mcf-modal__backdrop fade mcf-d--block show" hidden={!show}></div>
    </>
  );
};

export default Loader;
