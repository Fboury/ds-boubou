"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function PaginationBouton({ numero, actif, handlePageChange, dataTrackAnalytics, }) {
    const actifClass = actif ? " actif" : "";
    const texteSrOnly = actif ? "Page courante" : "Aller à la page";
    return ((0, jsx_runtime_1.jsxs)("button", { className: `mds-btn mds-btn--secondary${actifClass}`, "aria-current": actif, onClick: () => handlePageChange(numero), "data-track-analytics": dataTrackAnalytics, children: [(0, jsx_runtime_1.jsx)("span", { className: "mds-sr-only", children: texteSrOnly }), numero] }));
}
exports.default = PaginationBouton;
//# sourceMappingURL=PaginationBouton.js.map