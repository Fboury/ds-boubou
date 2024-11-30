"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Legend({ children, disabled = false, ...props }) {
    return ((0, jsx_runtime_1.jsx)("legend", { className: `mds-label${disabled ? " mds-disabled-label" : ""}`, ...props, children: children }));
}
exports.default = Legend;
//# sourceMappingURL=index.js.map