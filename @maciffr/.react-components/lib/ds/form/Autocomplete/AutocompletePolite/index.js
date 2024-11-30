"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function AutocompletePolite({ children, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { "aria-live": "polite", "aria-atomic": "true", className: "mds-sr-only", ...props, children: children }));
}
exports.default = AutocompletePolite;
//# sourceMappingURL=index.js.map