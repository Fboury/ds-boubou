"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonTheme = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
var ButtonTheme;
(function (ButtonTheme) {
    ButtonTheme["Primary"] = "primary";
    ButtonTheme["Secondary"] = "secondary";
    ButtonTheme["Tertiary"] = "tertiary";
})(ButtonTheme || (exports.ButtonTheme = ButtonTheme = {}));
function Button({ id, disabled, reversed = false, theme = ButtonTheme.Primary, icon = "", iconOnly = false, loader = false, className, children, ...props }) {
    const reverseClass = reversed ? " mds-btn--reverse" : "";
    const loaderClass = loader ? " mds-btn--loader" : "";
    const loaderReverseEnd = reversed ? "-reverse" : "";
    const iconOnlyClass = iconOnly ? ` mds-btn--icon-only` : "";
    return ((0, jsx_runtime_1.jsx)("button", { id: id, className: `mds-btn mds-btn--${theme} ${icon}${iconOnlyClass}${reverseClass}${loaderClass}${loaderReverseEnd} ${className}`, "aria-disabled": disabled, ...props, children: children }));
}
exports.default = Button;
//# sourceMappingURL=index.js.map