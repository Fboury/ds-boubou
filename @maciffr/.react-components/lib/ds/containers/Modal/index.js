"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./modal.css");
;
const Modal = ({ children, onClose, shown, ...props }) => {
    const openedClass = shown ? " open" : "";
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: `backdrop${openedClass}` }), (0, jsx_runtime_1.jsx)("div", { ...props, className: `modal${openedClass} ${props.className ?? ""}`, role: "dialog", "aria-modal": shown, children: (0, jsx_runtime_1.jsx)("div", { className: "modal__dialog", children: (0, jsx_runtime_1.jsxs)("div", { className: "modal__content", children: [(0, jsx_runtime_1.jsx)("span", { role: "button", className: "mds-icon__close modal__close", "aria-label": "Fermer", onClick: onClose }), (0, jsx_runtime_1.jsx)("div", { className: "body", children: children })] }) }) })] }));
};
exports.default = Modal;
//# sourceMappingURL=index.js.map