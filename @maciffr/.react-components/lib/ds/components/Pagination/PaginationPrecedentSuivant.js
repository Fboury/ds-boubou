"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function PaginationPrecedentSuivant({ pageActive, handlePageChange, isLeft, borne, dataTrackAnalytics, }) {
    const nomIcone = isLeft ? " icon-fleche_gauche" : " icon-fleche-droite";
    const nouvellePage = isLeft ? pageActive - 1 : pageActive + 1;
    const texteDirectionSrOnly = isLeft ? "précédente" : "suivante";
    const estPremiereOuDernierePage = isLeft ? pageActive <= borne : pageActive >= borne;
    if (estPremiereOuDernierePage) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("button", { className: `mds-btn mds-btn--tertiary mds-btn--icon-only${nomIcone}`, onClick: () => handlePageChange(nouvellePage), "data-track-analytics": dataTrackAnalytics, children: (0, jsx_runtime_1.jsxs)("span", { className: "mds-sr-only", children: ["Aller \u00E0 la page ", texteDirectionSrOnly] }) }));
}
exports.default = PaginationPrecedentSuivant;
//# sourceMappingURL=PaginationPrecedentSuivant.js.map