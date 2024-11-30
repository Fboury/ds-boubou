"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Suffix({ children, className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: `mcf-input-group--append ${className || ''}`, children: (0, jsx_runtime_1.jsx)("span", { className: "mcf-input-group__text", children: children }) }));
}
exports.default = Suffix;
//# sourceMappingURL=Suffix.js.map