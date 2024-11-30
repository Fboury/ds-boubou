"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Loader.css");
/** Composant UI montrant le chargement d'une page ou d'un élément. */
const Loader = ({ show, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "mcf-modal fade mcf-d--block show", tabIndex: -1, "data-mcf-backdrop": "true", hidden: !show, ...props, children: (0, jsx_runtime_1.jsx)("div", { className: "mcf-loader mcf-loader--vert-pomme mcf-position--relative loader-position", children: (0, jsx_runtime_1.jsx)("div", { className: "mcf-loader__ball" }) }) }), (0, jsx_runtime_1.jsx)("div", { id: "backdrop", className: "mcf-modal__backdrop fade mcf-d--block show", hidden: !show })] }));
};
exports.default = Loader;
//# sourceMappingURL=Loader.js.map