"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronBtn = ({ onClick, direction, size, ...props }) => {
    const FONT_SIZE = 12;
    const chevronIcon = direction === "gauche" ? "icon-fleche_gauche" : "icon-fleche-droite";
    return ((0, jsx_runtime_1.jsx)("span", { id: `calendar-chevron-${direction}`, className: "mcf-my--auto mcf-bg--white mcf-rounded--circle mcf-d--flex mcf-text--small-1", style: { cursor: "pointer", width: "2.5rem", aspectRatio: 1, margin: "0 8px" }, onClick: onClick, children: (0, jsx_runtime_1.jsx)("span", { className: `${chevronIcon} mcf-m--auto`, style: { fontSize: FONT_SIZE } }) }));
};
exports.default = ChevronBtn;
//# sourceMappingURL=ChevronBtn.js.map