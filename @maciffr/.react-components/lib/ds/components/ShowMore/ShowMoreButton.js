"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function ShowMoreButton({ children, active, size, onClick }) {
    return ((0, jsx_runtime_1.jsxs)("button", { type: "button", className: `mds-show-more__btn mds-collapse ${size}${active}`, onClick: onClick, children: [children, (0, jsx_runtime_1.jsx)("span", { className: "mds-icon__expand-more" })] }));
}
exports.default = ShowMoreButton;
//# sourceMappingURL=ShowMoreButton.js.map