"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Button({ id, children, ...props }) {
    return (0, jsx_runtime_1.jsx)("button", { ...props, id: id, className: `mcf-btn ${props.className || "mcf-btn--primary"}`, children: children });
}
exports.default = Button;
Button.defaultProps = {
    type: "button"
};
//# sourceMappingURL=Button.js.map