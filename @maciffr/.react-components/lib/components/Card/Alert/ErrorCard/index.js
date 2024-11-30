"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function ErrorCard({ children }) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mcf-alert mcf-alert--danger mcf-mt--5 mcf-mt-sm--4 mcf-d--flex mcf-flex-sm--row mcf-flex--column", children: [(0, jsx_runtime_1.jsx)("span", { className: "icon mcf-icon--fixed-2 icon-macif-mobile-info-plein", "aria-hidden": "true" }), (0, jsx_runtime_1.jsx)("div", { className: "mcf-ml--0 mcf-ml-sm--3 mcf-mt--4 mcf-mt-sm--0", children: children })] }));
}
exports.default = ErrorCard;
//# sourceMappingURL=index.js.map