"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Erreur({ children, ...props }) {
    if (!children) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("p", { className: "mds-message--error mds-icon__error--left", ...props, children: children }));
}
exports.default = Erreur;
//# sourceMappingURL=Erreur.js.map