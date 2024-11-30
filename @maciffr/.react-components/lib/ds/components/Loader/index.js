"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Loader({ reversed = false }) {
    const loaderClass = reversed ? "mds-loader--reverse" : "mds-loader";
    return (0, jsx_runtime_1.jsx)("span", { className: loaderClass, "aria-hidden": "true" });
}
exports.default = Loader;
//# sourceMappingURL=index.js.map