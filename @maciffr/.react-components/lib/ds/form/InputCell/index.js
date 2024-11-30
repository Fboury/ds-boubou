"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconDirection = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
var IconDirection;
(function (IconDirection) {
    IconDirection["Right"] = "mds-wrapper--icon-right";
    IconDirection["Left"] = "mds-wrapper--icon-left";
    IconDirection["Without"] = "";
})(IconDirection || (exports.IconDirection = IconDirection = {}));
function InputCell({ children, iconDirection = IconDirection.Without, ...props }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: `mds-input-cell ${iconDirection}`, ...props, children: children }));
}
exports.default = InputCell;
//# sourceMappingURL=index.js.map