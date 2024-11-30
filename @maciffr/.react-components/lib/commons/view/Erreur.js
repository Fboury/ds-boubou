"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Erreur({ id, children, ...props }) {
    return ((0, jsx_runtime_1.jsxs)("p", { id: id, className: "invalid-feedback mcf-order-last", ...props, children: [(0, jsx_runtime_1.jsx)("span", { className: "icon icon-erreur", "aria-hidden": true }), children] }));
}
exports.default = Erreur;
//# sourceMappingURL=Erreur.js.map