"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Erreur({ id, message }) {
    if (!message) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    return ((0, jsx_runtime_1.jsxs)("p", { id: `${id}-erreur`, className: "mcf-text--danger mcf-mt--3", children: [(0, jsx_runtime_1.jsx)("span", { className: "icon icon-erreur" }), message] }));
}
exports.default = Erreur;
//# sourceMappingURL=Erreur.js.map