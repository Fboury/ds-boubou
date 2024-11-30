"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("../modal.css");
function ModalContent({ children, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: "body", ...props, children: children }));
}
exports.default = ModalContent;
//# sourceMappingURL=index.js.map