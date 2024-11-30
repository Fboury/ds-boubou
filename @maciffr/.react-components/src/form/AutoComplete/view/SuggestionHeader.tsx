import React, {ReactNode} from "react";

interface SuggestionHeaderProps {
    readonly children?: ReactNode;
}

const SuggestionHeader = ({children}: SuggestionHeaderProps) => {
    return (
        <div
            id="suggestion-header"
            className={"mcf-dropdown__item mcf-py--3 mcf-py-sm--2 mcf-bg--gris-clair-de-lune"}
        > {
            // Remarque : bien penser à ajouter l'accessibilité à chaque implementation du composant (role="button" par exemple si un lien HTML est passé)
        }
            {children}
        </div>
    );
};

export default SuggestionHeader;
