"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function ButtonSwitcherLabel({ selected, children, htmlFor, ...props }) {
    return ((0, jsx_runtime_1.jsx)("label", { className: `mcf-btn switcher-focus mcf-btn--switcher--outline mcf-position--relative mcf-w--100${selected ? " active" : ""}`, "data-toggle": "buttons", htmlFor: htmlFor, ...props, children: children }));
}
exports.default = ButtonSwitcherLabel;
//# sourceMappingURL=index.js.map