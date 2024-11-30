"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./pagination.css");
const PaginationBouton_1 = __importDefault(require("./PaginationBouton"));
const PaginationDelimiter_1 = __importDefault(require("./PaginationDelimiter"));
const PaginationPrecedentSuivant_1 = __importDefault(require("./PaginationPrecedentSuivant"));
const calculerPagesAffichees_1 = __importDefault(require("./calculerPagesAffichees"));
const MOBILE_BREAKPOINT = 600;
function getDataTrackAnalytics(numeroPage, prefix) {
    if (!prefix) {
        return;
    }
    return prefix + numeroPage;
}
function Pagination({ pageActive, nombreBoutonsAffiches, nombrePages, afficherExtremites = false, ariaLabel, handlePageChange, dataTrackAnalytics, ...props }) {
    const [isMobile, setIsMobile] = (0, react_1.useState)(true);
    (0, react_1.useEffect)(() => {
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        function handleResize() {
            setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const pagesAffichees = (0, calculerPagesAffichees_1.default)(pageActive, nombreBoutonsAffiches, nombrePages, afficherExtremites, isMobile);
    const afficherPremierePage = afficherExtremites && !isMobile && !pagesAffichees.includes(1);
    const afficherEllipseGauche = afficherExtremites && !isMobile && !pagesAffichees.includes(2) && pagesAffichees.length > 1;
    const afficherEllipseDroite = afficherExtremites && !pagesAffichees.includes(nombrePages - 1) && pagesAffichees.length > 1;
    const afficherDernierePage = afficherExtremites && !pagesAffichees.includes(nombrePages);
    return ((0, jsx_runtime_1.jsx)("nav", { className: "mds-pagination", role: "navigation", "aria-label": ariaLabel, ...props, children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(PaginationPrecedentSuivant_1.default, { pageActive: pageActive, borne: 1, handlePageChange: handlePageChange, dataTrackAnalytics: getDataTrackAnalytics(pageActive - 1, dataTrackAnalytics), isLeft: true }) }), afficherPremierePage && ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(PaginationBouton_1.default, { numero: 1, actif: pageActive === 1, handlePageChange: handlePageChange, dataTrackAnalytics: getDataTrackAnalytics(1, dataTrackAnalytics) }) })), afficherEllipseGauche && ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(PaginationDelimiter_1.default, {}) })), pagesAffichees.map((numeroPage) => ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(PaginationBouton_1.default, { numero: numeroPage, actif: numeroPage === pageActive, handlePageChange: handlePageChange, dataTrackAnalytics: getDataTrackAnalytics(numeroPage, dataTrackAnalytics) }) }, numeroPage))), afficherEllipseDroite && ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(PaginationDelimiter_1.default, {}) })), afficherDernierePage && ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(PaginationBouton_1.default, { numero: nombrePages, actif: pageActive === nombrePages, handlePageChange: handlePageChange, dataTrackAnalytics: getDataTrackAnalytics(nombrePages, dataTrackAnalytics) }) }) })), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(PaginationPrecedentSuivant_1.default, { pageActive: pageActive, borne: nombrePages, handlePageChange: handlePageChange, dataTrackAnalytics: getDataTrackAnalytics(pageActive + 1, dataTrackAnalytics) }) })] }) }));
}
exports.default = Pagination;
//# sourceMappingURL=index.js.map