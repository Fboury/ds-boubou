"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function Icone({ id, ...props }) {
    return (0, jsx_runtime_1.jsx)("span", { ...props, "aria-hidden": "true", className: `icon icon-${props.value} ${props.className || ''}` });
}
exports.default = Icone;
//# sourceMappingURL=Icone.js.map