"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconDirection = exports.IconType = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
var IconType;
(function (IconType) {
    IconType["Basic"] = "mds-icon";
    IconType["Input"] = "mds-input__icon";
})(IconType || (exports.IconType = IconType = {}));
var IconDirection;
(function (IconDirection) {
    IconDirection["Right"] = "--right";
    IconDirection["Left"] = "--left";
    IconDirection["None"] = "";
})(IconDirection || (exports.IconDirection = IconDirection = {}));
function Icon({ name, type = IconType.Basic, direction = IconDirection.None, ...props }) {
    return (0, jsx_runtime_1.jsx)("span", { className: `${type} mds-icon__${name}${direction}`, ...props });
}
exports.default = Icon;
//# sourceMappingURL=index.js.map