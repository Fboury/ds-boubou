"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Label({ children, disabled = false, ...props }) {
    const disabledClass = disabled ? " mds-disabled-label" : "";
    return ((0, jsx_runtime_1.jsx)("label", { className: `mds-label${disabledClass}`, ...props, children: children }));
}
exports.default = Label;
//# sourceMappingURL=index.js.map