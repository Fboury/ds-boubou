"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioButtonRender = exports.RadioButtonSize = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
var RadioButtonSize;
(function (RadioButtonSize) {
    RadioButtonSize["FullWidth"] = "mds-full-width";
    RadioButtonSize["FitContent"] = "mds-fit-content";
})(RadioButtonSize || (exports.RadioButtonSize = RadioButtonSize = {}));
var RadioButtonRender;
(function (RadioButtonRender) {
    RadioButtonRender["Basic"] = "mds-radio--basic";
    RadioButtonRender["Tile"] = "mds-radio--tile-basic mds-input-cell";
})(RadioButtonRender || (exports.RadioButtonRender = RadioButtonRender = {}));
const getDisabledCheckedDivClass = (isChecked, isDisabled) => {
    if (isDisabled) {
        if (isChecked) {
            return " mds-disabled-checked";
        }
        else {
            return " mds-disabled";
        }
    }
    else if (isChecked) {
        return " checked";
    }
    return "";
};
const RadioButtonView = ({ children, render = RadioButtonRender.Basic, size = RadioButtonSize.FitContent, disabled = false, checked = false, ...props }) => {
    const disabledCheckedDivClass = (0, react_1.useMemo)(() => getDisabledCheckedDivClass(checked, disabled), [disabled, checked]);
    return ((0, jsx_runtime_1.jsx)("div", { className: `mds-radio ${render} ${size}${disabledCheckedDivClass}`, ...props, children: children }));
};
exports.default = RadioButtonView;
//# sourceMappingURL=index.js.map