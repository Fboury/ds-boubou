"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../modal.css");
function ModalCloseButton({ onClose }) {
    return ((0, jsx_runtime_1.jsx)("button", { type: "button", className: "close modal__close", onClick: onClose, children: (0, jsx_runtime_1.jsx)("span", { className: "mcf-sr-only", children: "Fermer" }) }));
}
exports.default = ModalCloseButton;
//# sourceMappingURL=index.js.map