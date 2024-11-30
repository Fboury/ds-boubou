import "./Loader.css";
export type LoaderProps = {
    /**
     * Affiche ou non le loader
     */
    show: boolean;
    /**
     * Argument nécessaire pour les tests
     */
    'data-testid'?: string;
};
/** Composant UI montrant le chargement d'une page ou d'un élément. */
declare const Loader: ({ show, ...props }: LoaderProps) => import("react/jsx-runtime").JSX.Element;
export default Loader;
