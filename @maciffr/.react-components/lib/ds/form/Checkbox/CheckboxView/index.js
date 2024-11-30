"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxRender = exports.CheckboxSize = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
var CheckboxSize;
(function (CheckboxSize) {
    CheckboxSize["Default"] = "";
    CheckboxSize["FullWidth"] = "mds-full-width";
    CheckboxSize["FitContent"] = "mds-fit-content";
})(CheckboxSize || (exports.CheckboxSize = CheckboxSize = {}));
var CheckboxRender;
(function (CheckboxRender) {
    CheckboxRender["Basic"] = "mds-checkbox--basic";
    CheckboxRender["Tile"] = "mds-checkbox--tile-basic mds-input-cell";
})(CheckboxRender || (exports.CheckboxRender = CheckboxRender = {}));
const CheckboxView = ({ children, size = CheckboxSize.Default, render = CheckboxRender.Basic, disabled = false, checked = false, ...props }) => {
    const getDisabledDivClass = (checked, disabled) => {
        if (disabled) {
            if (checked) {
                return " mds-disabled-checked";
            }
            else {
                return " mds-disabled";
            }
        }
        return "";
    };
    const checkedClass = checked ? " checked" : "";
    const disabledDivClass = (0, react_1.useMemo)(() => getDisabledDivClass(checked, disabled), [disabled, checked]);
    return ((0, jsx_runtime_1.jsx)("div", { className: `mds-checkbox ${render} ${size}${checkedClass}${disabledDivClass}`, ...props, children: children }));
};
exports.default = CheckboxView;
//# sourceMappingURL=index.js.map