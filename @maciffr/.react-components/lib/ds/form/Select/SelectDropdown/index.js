"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function SelectDropdown({ children, disabled = false, ...props }) {
    const wrapperClassOnDisabled = disabled ? " mds-wrapper--disabled" : "";
    return ((0, jsx_runtime_1.jsx)("div", { className: `mds-select-dropdown${wrapperClassOnDisabled}`, ...props, children: children }));
}
exports.default = SelectDropdown;
//# sourceMappingURL=index.js.map